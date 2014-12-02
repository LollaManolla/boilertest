Diwanee Web Framework (DWF)
==========

<p>This framework is quick-start kit to get your website or app front-end up and running quickly. It's HTML5 ready, comes with a bunch of useful and common JavaScript functionality, it has SCSS support.<p>

  <h2>Features</h2>
  <p>Common styles for<br>
- Responsive grid<br>
- Responsive typography<br>
- Responsive pagination<br>
- Responsive Block grid<br>
- Helper classes (visibility, etc.)<br>
- Media query starting points<br>
- Comprehensive CSS reset thanks to Normalize.css<br>
- The latest jQuery<br>
- HTML5 starting point<br>
- Various optimizations and goodies (robots.txt, humans.txt, .htaccess, crossdomain policy, etc.)<br>
  </p>


<h2>Components</h2>
  <p>This framework use code from the following projects<br>
- jQuery 1.9.1<br>
- Normalize.css CSS 'reset'<br>
- SCSS support<br>
- NAVESTI JS FAJLOVE<br>
  </p>

<h2>Usage</h2>
<p>Setup is pretty easy and DWF comes with some tools to help you test your development environment.</p>

<h3>Initial Setup</h3>
<ol>
<li>Download and extract the files to where you want to start developing or do a git clone git://github.com/....</li>
<li>Set your favorite SCSS compiler to watch the project folder (or use client side)</li>
<li>Open up the folder in your favorite editor and start editing!</li>
  </ol>


  <h3>The Grid</h3>t

<p>The DWF grid is based on foundation grid - http://foundation.zurb.com/docs/components/grid.html</p>

<h4>Grid Usage</h4>

<p>

.container - This contains your rows and columns. Parts of your page like the header, main content, and footer lend themselves well to being containers. No content goes in the .container - only .rows do. This class spans the width of the browser window.

.row - This is is the holder for your columns. Again, no content goes in them, only your columns. You can place as many rows as you want within your .container. This class spans 1140px by default or any width you define in .grid.less or grid.scss and is always centered in the browser window.

The .one through .twelve classes are your columns. That's where your content goes. The grid supports twelve columns. The elements in your .row should add up to 12 with the last column in your .row having a .last class.

Example:</p>

<section class="container">
    <div class="row">
        <div class="three">
            <p>My three column content</p>
        </div>

        <div class="two">
            <p>My two column content</p>
        </div>

        <div class="four">
            <p>My four column content</p>
        </div>

        <div class="three last">
            <p>My last column, which spans 3 columns and is the last in the row which adds up to 12</p>
        </div>
    </div>
</section>

