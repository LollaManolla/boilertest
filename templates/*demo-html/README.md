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

<p>
Add a <code>.pagination</code> class to a <code>ul </code>to get started, then add list items with links or buttons in them.</p>

- Create arrows by adding an <code>.arrow</code> class to the first and last list items.
- To mark the current page, add a <code>.current</code> class to a list item.
- Add a class of <code>.unavailable</code> to a list item to make it not clickable, like for the ellipsis in the middle.
</p>

<pre>
<span>&lt;ul class="pagination"&gt;</span>
  <span&gt;</span>&lt;li class="arrow unavailable"&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>&laquo;<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li class="current"&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>1<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>2<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>3<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>4<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li class="unavailable"&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>&hellip;<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>12<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>13<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
  <span&gt;</span>&lt;li class="arrow"&gt;</span><span&gt;</span>&lt;a href=""&gt;</span>&raquo;<span&gt;</span>&lt;/a&gt;</span><span&gt;</span>&lt;/li&gt;</span>
<span&gt;</span>&lt;/ul&gt;</span>
  </pre>

<p>For more details and instructions go to http://foundation.zurb.com/docs/components/pagination.html</p>


<h2>Typo</h2>

<h5>Headers</h5>
<h6>HTML</h6>
<pre>
<span&gt;</span>&lt;h1&gt;</span>h1. This is a very large header.<span&gt;</span>&lt;/h1&gt;</span>
<span&gt;</span>&lt;h2&gt;</span>h2. This is a large header.<span&gt;</span>&lt;/h2&gt;</span>
<span&gt;</span>&lt;h3&gt;</span>h3. This is a medium header.<span&gt;</span>&lt;/h3&gt;</span>
<span&gt;</span>&lt;h4&gt;</span>h4. This is a moderate header.<span&gt;</span>&lt;/h4&gt;</span>
<span&gt;</span>&lt;h5&gt;</span>h5. This is a small header.<span&gt;</span>&lt;/h5&gt;</span>
<span&gt;</span>&lt;h6&gt;</span>h6. This is a tiny header.<span&gt;</span>&lt;/h6&gt;</span>
</pre>

<h5>Subheader</h5>
<h6>HTML</h6>
<pre>
<span>&lt;h1 class="subheader"&gt;</span>h1.subheader<span>&lt;/h1&gt;</span>
<span>&lt;h2 class="subheader"&gt;</span>h2.subheader<span>&lt;/h2&gt;</span>
<span>&lt;h3 class="subheader"&gt;</span>h3.subheader<span>&lt;/h3&gt;</span>
<span>&lt;h4 class="subheader"&gt;</span>h4.subheader<span>&lt;/h4&gt;</span>
<span>&lt;h5 class="subheader"&gt;</span>h5.subheader<span>&lt;/h5&gt;</span>
<span>&lt;h6 class="subheader"&gt;</span>h6.subheader<span>&lt;/h6&gt;</span>
</pre>

<h5>Paragraphs</h5>
<h6>HTML</h6>
<pre>
<span>&lt;p&gt;</span>This is a paragraph. Paragraphs are preset with a font size, line height and spacing to <br>match the overall vertical rhythm. To show what a paragraph looks like this needs a little more<br>content so, did you know that there are storms occurring on Jupiter that are larger than the Earth? <br>Pretty cool. Wrap strong around type to <span>&lt;strong&gt;</span>make it bold!<span>&lt;/strong&gt;</span>. <br>You can also use em to <span>&lt;em&gt;</span>italicize your words<span>&lt;/em&gt;</span>.<span>&lt;/p&gt;</span>
</pre>

<h5>Text Align Classes</h5>
<h6>HTML</h6>
<pre><code class="language-html"><div class="code-container"><span class="tag">&lt;<span class="title">p</span> <span class="attribute">class</span>=<span class="value">"text-left"</span>&gt;</span><span class="comment">&lt;!-- text goes here --&gt;</span><span class="tag">&lt;/<span class="title">p</span>&gt;</span>
<span class="tag">&lt;<span class="title">p</span> <span class="attribute">class</span>=<span class="value">"text-right"</span>&gt;</span><span class="comment">&lt;!-- text goes here --&gt;</span><span class="tag">&lt;/<span class="title">p</span>&gt;</span>
<span class="tag">&lt;<span class="title">p</span> <span class="attribute">class</span>=<span class="value">"text-center"</span>&gt;</span><span class="comment">&lt;!-- text goes here --&gt;</span><span class="tag">&lt;/<span class="title">p</span>&gt;</span>
<span class="tag">&lt;<span class="title">p</span> <span class="attribute">class</span>=<span class="value">"text-justify"</span>&gt;</span><span class="comment">&lt;!-- text goes here --&gt;</span><span class="tag">&lt;/<span class="title">p</span>&gt;</span></div></code></pre>

<h5>Links</h5>
<h6>HTML</h6>
<pre><p>Links are very standard, and the <a href="#">color is preset</a> to the Settings primary color.</p></pre>

<h5>Lists</h5>
<h6>HTML</h6>
<pre><code class="language-html"><div class="code-container"><span class="tag">&lt;<span class="title">ul</span> <span class="attribute">class</span>=<span class="value">"disc"</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item with a much longer description or more content.<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item
    <span class="tag">&lt;<span class="title">ul</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested list item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested list item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested list item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
    <span class="tag">&lt;/<span class="title">ul</span>&gt;</span>
  <span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
 <span class="tag">&lt;/<span class="title">ul</span>&gt;</span></div></code>
</pre>

<h6>HTML</h6>
<pre><code class="language-html"><div class="code-container"><span class="tag">&lt;<span class="title">ul</span> <span class="attribute">class</span>=<span class="value">"circle"</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item with a much longer description or more content.<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item
    <span class="tag">&lt;<span class="title">ul</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
    <span class="tag">&lt;/<span class="title">ul</span>&gt;</span>
  <span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
 <span class="tag">&lt;/<span class="title">ul</span>&gt;</span></div></code></pre>

<h6>HTML</h6>
<pre><code class="language-html"><div class="code-container"><span class="tag">&lt;<span class="title">ul</span> <span class="attribute">class</span>=<span class="value">"square"</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item with a much longer description or more content.<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item
    <span class="tag">&lt;<span class="title">ul</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
      <span class="tag">&lt;<span class="title">li</span>&gt;</span>Nested List Item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
    <span class="tag">&lt;/<span class="title">ul</span>&gt;</span>
  <span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
  <span class="tag">&lt;<span class="title">li</span>&gt;</span>List item<span class="tag">&lt;/<span class="title">li</span>&gt;</span>
 <span class="tag">&lt;/<span class="title">ul</span>&gt;</span></div></code></pre>




<h6>HTML</h6>



<h6>HTML</h6>
<pre><code class="language-html"><div class="code-container"><span class="tag">&lt;<span class="title">dl</span>&gt;</span>
  <span class="tag">&lt;<span class="title">dt</span>&gt;</span>Definition Title<span class="tag">&lt;/<span class="title">dt</span>&gt;</span>
  <span class="tag">&lt;<span class="title">dd</span>&gt;</span>Definition Cras justo odio, dapibus ac facilisis in, egestas eget quam.<br>
  Nullam id dolor id nibh ultricies vehicula ut id elit.<span class="tag">&lt;/<span class="title">dd</span>&gt;</span>
<span class="tag">&lt;/<span class="title">dl</span>&gt;</span></div></code></pre>

 <p><strong>Customize with Sass</strong><br>
  Customizing the typography is easy with the Sass variables provided in the <code>_settings.scss</code> file.</p>

  <p>For more details and instructions go to http://foundation.zurb.com/docs/components/typography.html</p>

<h2>Visibility</h2>

<p>Visibility classes let you show or hide elements based on screen size or device orientation. You can use visibility classes to control which elements users 
  see depending on their browsing environment.</p>

  <p>For more details and instructions go to http://foundation.zurb.com/docs/components/visibility.html</p>