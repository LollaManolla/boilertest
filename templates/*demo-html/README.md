Demo
==========

<p>This demo represents the use of predefined classes in framework and how to use them</p>


<h2>Grid</h2>
<p>
Start by adding an element with a class of row. This will create a horizontal block to contain vertical columns. Then add divs with a column class within that row. You can use column or columns - the only difference is grammar. Specify the widths of each column with the small-#, medium-#, and large-# classes.</p>


<pre>
  <span>&lt;div class="row"&gt;</span>
  &nbsp;&nbsp;<span>&lt;div class="small-2 large-4 columns"&gt;</span>
  &nbsp; &nbsp;<span>&lt;div class="small-4 large-4 columns"&gt;</span>
  &nbsp; &nbsp;<span>&lt;div class="small-6 large-4 columns"&gt;</span>
<span>&lt;/div&gt;</span>
</pre>


<p><strong>Customize with Sass</strong><br>
Customizing the grid is easy with the Sass variables provided in the <code>_settings.scss</code> file.</p>

<h6>SCSS</h6>
<pre>
$row-width: rem-calc(1000);
$column-gutter: rem-calc(30);
$total-columns: 12 ;
</pre>

<p>For more details and instructions go to http://foundation.zurb.com/docs/components/grid.html</p>



<h2>Block grid</h2>
<p>Block grids should be used when you need to create a row of evenly split contents within the grid. For example, a row of five images or paragraphs that need to stay evenly spaced no matter the screen size is good example on when you should use block grid.</p>

<pre>
<span>&lt;ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4"&gt;</span>
  <span>&lt;li&gt;</span>Your content goes here<span>&lt;/li&gt;</span>
  <span>&lt;li&gt;</span>Your content goes here<span>&lt;/li&gt;</span>
  <span>&lt;li&gt;</span>Your content goes here <span>&lt;/li&gt;</span>
  <span>&lt;li&gt;</span>Your content goes here <span>&lt;/li&gt;</span>
<span>&lt;/ul&gt;</span>
</pre>

<p><strong>Customize with Sass</strong><br>
  Customizing the grid is easy with the Sass variables provided in the <code>_settings.scss</code> file.</p>

  <h6>SCSS</h6>
<pre>
// We use this to control the maximum blocks and spacing 
$block-grid-elements: 12;
$block-grid-default-spacing: rem-calc(20);
$align-block-grid-to-grid: false; //removes column gutter so edges of block grid align with grid<br>

// Enables media queries for block-grid classes. Set to false if writing semantic HTML.
$block-grid-media-queries: true;
</pre>

<p>For more details and instructions go to http://foundation.zurb.com/docs/components/block_grid.html</p>



<h2>Pagination</h2>
<h2>Typo</h2>
<h2>Visibility</h2>