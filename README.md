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

<h2>How to use</h2>



<p>Download source</p>
<p>Start by reading inline comments in source code</p>


<p>Setup is pretty easy and DWF comes with some tools to help you test your development environment.</p>

<h3>Initial Setup</h3>
<ol>
<li>Download and extract the files to where you want to start developing or do a git clone git://github.com/....</li>
<li>Set your favorite SCSS compiler to watch the project folder (or use client side)</li>
<li>Open up the folder in your favorite editor and start editing!</li>
  </ol>


  <h3>The Grid</h3>

<p>The DWF grid is based on foundation grid - http://foundation.zurb.com/docs/components/grid.html</p>

<h4>Grid Usage</h4>

<p>

.container - This contains your rows and columns. Parts of your page like the header, main content, and footer lend themselves well to being containers. No content goes in the .container - only .rows do. This class spans the width of the browser window.

.row - This is is the holder for your columns. Again, no content goes in them, only your columns. You can place as many rows as you want within your .container. This class spans 1140px by default or any width you define in .grid.less or grid.scss and is always centered in the browser window.

The .one through .twelve classes are your columns. That's where your content goes. The grid supports twelve columns. The elements in your .row should add up to 12 with the last column in your .row having a .last class.</p>

<h5>Example:</h5>


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


<p>The important things to notice here is that the column class names should always add up to 12 and that the very last column in a row needs to have the .last class added to it or the last element will fail to float properly. For those who have never seen an element with multiple classes, don't worry. It is perfectly acceptible to have multiple classes on the same HTML element. In fact, you can have as many as you want separated by spaces. It is not invalid markup at all. That said, its generally not a good idea to have elements with multiple classes everywhere unless its absolutely necessary. Best practices dictate only one class per element but it is not at all uncommon to see multiple classes per element. Just don't go crazy with this if this is a new concept to you.</p>


<h6>style.less and style.scss</h6>

<p>This file imports all of the styles besides your custom styles. The order of imports in these files is very important as each file may depend on variables or mixins defined in the previous file. Add your styles below the first set of imports (as indicated in the file) but not before the last set of imports for print and mobile styles.

If using a compiler, you only need to compile the style.* file as your compiler should import and compile all included files into a single style.css file. If you're using plain CSS it's best to avoid all the @import statements and copy and paste each file into style.css manually to avoid too many HTTP requests slowing down your site.</p>
