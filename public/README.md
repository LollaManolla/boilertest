Info
==========

<h3>Default settings - where can you change it</h3>

<pre><code>
  assets/
    css
    images/
      large
      medium
      small

  js/
    app.js
    base64.min.js
    hrl.js
    thumbor.js
    ua-parser.min.js
    ua.js

  scss/
    ads
    <strong>bi-app/
          bi-app-ltr.scss
          _bi-app-rtl.scss
          _mixins.scss
          _variables-ltr.scss
          _variables-rtl.scss</strong>
    blocks
    components
    <strong>core /
        _block-grid.scss
        _functions.scss
        _global.scss
        _grid.scss
        _pagination.scss
        _typo.scss
        _visibility.scss
    </strong>
    layout
    media-object
    pages
    sprites
    utilities
    widgets
    <em>_settings.scss</em>
    _style.scss
    style-ar.scss
    style-en.scss
</code></pre>

<p><strong>Files marked with bold should not be changed. </strong>They hold just functions,  not <strong>settings and settings options </strong> for framework. These options <strong>are in </strong> file <code>_settings.scss</code></p>



<h6>What can you change in  _settings.scss?</h6>

  <ol><li>Base <br>
  <blockquote>default html and body font-size. </blockquote>
  </li>
<li>Grid <br>
<blockquote>number of columns, gutter and row<blockquote></li>
 <li>Global<br>
  <blockquote>
    default stacks for fonts and colors 
</blockquote>
  </li>
<li>Media Query Ranges<br>
<blockquote>
media break rules.
</blockquote>
</li>
 <li>Typography
<blockquote>
global variables and settings for headings, paragraphs, anchors, hr, lists
</blockquote>
 </li>
 <li>Block Grid<br>
<blockquote>
block-grid elements, default spacing, align to grid.
</blockquote>
 </li>
<li>Pagination<br>
<blockquote>
  style pagination. <small>*Note that float needs to be set depending on language left/right.</small>
<blockquote>
</li>
<li> Visibility Classes<br>
<blockquote>
  Turn on or off visibility classes.
</blockquote>
</li>
</ol>





<h2>Styles to follow</h2>

<h3>How you should write SCSS?</h3>
* set grid
* set visibility
* set style
* set media 

<h3>How you should use units?</h3>
* <strong>REM</strong>: for fonts, line height
* <strong>PX</strong>: for margins/paddings

## media can have values
* @media #{$small-only} {}
* @media #{$medium-only} {}
* @media #{$large-only} {}
* @media #{$small-up} {}
* @media #{$medium-up} {}
* @media #{$large-up} {}

## media object 
  <article class="media-small review">
    <div class="media-small__item"> <a href="#">img,video..</a> </div>
       <div class="media-small__body "></div>
  </article>

## titles, headings
* section-title
* title
* subtitle

## Margins, paddings
* 35px large divide
* 15 px small divide

## Naming convention for classes and ID-s
* We use BEM (block element modifier) classes and ID-s naming convention
* Classes and ID-s looks like  .block__element—-modifier (if any modifier). Example With and without modifier:  .block__element or .block__element—modifier
* We always use double underscore line for dividing block and element  and double dash line for dividing element and modifier
* If any name of block, element or modifier needs to be consisted from more than one word we use rule of single dash.
- for block we use single dash
- for element we use single dash
- for modifier we use single dash
* EXAMPLE: .search-block__big-button—-light-green
* IMPORTANT: to avoid too long classes and ID-s as a best practice we use shorter descriptions for elements and modifiers and for blocks we use, for example instead block-search -> b-search