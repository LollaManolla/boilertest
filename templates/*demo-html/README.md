Demo
==========

<p>This demo represents the use of predefined classes in framework and how to use them</p>


<h2>Grid</h2>
<p>
Start by adding an element with a class of row. This will create a horizontal block to contain vertical columns. Then add divs with a column class within that row. You can use column or columns - the only difference is grammar. Specify the widths of each column with the small-#, medium-#, and large-# classes.</p>

<section class="container">
    <div class="row">
        <div class="small-2 large-4 columns">
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


<section class="container">
    <div class="row">
      <div class="small-2 large-4 columns">small-2 large-4 columns</div>
      <div class="small-4 large-4 columns">small-2 large-4 columns</div>
      <div class="small-6 large-4 columns">small-2 large-4 columns</div>
    </div>
</section>


<h4>Customize with Sass</h4>

<p>Customizing the grid is easy with the Sass variables provided in the <code>_settings.scss</code> file.</p>
<h6>SCSS</h6>
<pre>
$row-width: rem-calc(1000);<br>
$column-gutter: rem-calc(30);<br>
$total-columns: 12 ;
</pre>

<p>For more details and instructions go to http://foundation.zurb.com/docs/components/grid.html</p>



<h2>Block grid</h2>
<h2>Pagination</h2>
<h2>Typo</h2>
<h2>Visibility</h2>