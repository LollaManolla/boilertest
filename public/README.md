Info
==========

Here you can write your SCSS and change or set some preferences.

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

<p><strong>Assets</strong></p>
This folder is for compiled scss and images. 

<hr>

<p><strong>Assets</strong></p>
Place JS files here. 

<hr>

<p><strong>Scss</strong></p>
Write SCSS here. 

<p><strong>Files marked with bold should not be changed. </strong><br>
  They hold just functions,  not <strong>settings and settings options </strong> for framework. <br>
  These options <strong>are in </strong> file <code>_settings.scss</code></p>

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

<h2>Guidelines</h2>

<h4>SCSS</h4>
When writing SCSS follow this order:
<ol>
<li>set grid</li>
<li>set visibility</li>
<li>set style</li>
<li>set media </li>
</ol>

For better responsiveness use units like this:
- <strong>REM for</strong>: fonts, line height
- <strong>PX for</strong>: margins, paddings

<h4>Naming convention</h4>
- use <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/" target="_blank">BEM syntax </a> [.block__element--modifier]
- avoid too long classes and ID-s [<code>b-search</code> instead of block-search]

## titles, headings
* section-title
* title
* subtitle




* If any name of block, element or modifier needs to be consisted from more than one word we use rule of single dash.
- for block we use single dash
- for element we use single dash
- for modifier we use single dash
* EXAMPLE: .search-block__big-button—-light-green
