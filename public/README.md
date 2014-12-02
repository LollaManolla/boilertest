Info
==========

<h2>Default settings</h2>

<p>Folder <code>scss</code> holds few most important settings. These settings are in following folders and file:<br>
  - bi-app folder<br>
  - core folder <br>
  - sprites folder <br>
  - _settings.scss file
</p>

<p><strong>Files in this folders should not be changed. </strong>They hold just functions,  not <strong>settings and settings options </strong> for framework. These settings <strong>are set in </strong> file <code>_settings.scss</code></p>



<h5>File <code>_settings.scss</code></h5>
<p>Use _settings.scss to change <strong>global</strong> values: <p>
  <ol><li>Base <br>
  <blockquote>The only value you could change here is default html and body font-size. <br>
    Althought, it is recommended to leave everything as it is in this section and not touch anything. </blockquote>
  </li>
<li>Grid <br>
<blockquote>Set number of columns, gutter and row<blockquote></li>
 <li>Global<br>
  <blockquote>
    Define default stacks for fonts and colors 
</blockquote>
  </li>
<li>Media Query Ranges<br>
<blockquote>
Set media break rules.
</blockquote>
</li>
 <li>Typography
<blockquote>
Define global variables and settings for headings, paragraphs, anchors, hr, lists
</blockquote>
 </li>
 <li>Block Grid<br>
<blockquote>
Only thing that could be change gere is varibale:$align-block-grid-to-grid. You can set this to true if you need.
</blockquote>
 </li>
<li>Pagination<br>
<blockquote>
  Set style for pagination. Note that float needs to be set depending on language left/right.
<blockquote>
</li>
<li> Visibility Classes<br>
<blockquote>
  No need to change anything. We use this classes to show or hide elements on different devices.
</blockquote>
</li>
</ol>




<h3>Hacks</h3>
- for quick fixes or any fixes, keep it here

##scss style writing:
* set grid
* set visibility
* set style
* set media 

##use of values 
* rem for fonts
* rem for line height
* px for margins/paddings

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