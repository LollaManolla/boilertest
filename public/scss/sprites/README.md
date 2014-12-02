<h1>Notes</h1>
<p> We use this folder to store SCSS sprite file. </p>
<p> Depending on project, we can have sprites for different devices: <strong>small, medium, large</strong></p>
<p> <strong>Images for sprites </strong>should be placed in assets/images/small (medium or large)</p>

<h3>Sprites settings</h3>
<ol>
<li>Cut images - small, medium, large, named them and placed them in the folder (small, medium, large)</li>
<li> Call function for sprite <pre>@import "compass/utilities/sprites"; </pre></li>
<li> Set  sprite options. 
  <br>For example:
  <pre>$small-layout:vertical;
$small-repeat: no-repeat; 
$small-spacing: 30px;</pre></li>
<li> Set device, folder device, class and include image. 
  <br>For example:
  <pre>
  @media #{$small-only} {
    @import "small/*.png";
      .yourclass { 
          @include small-sprite (your-image-name);
        }
      }
    </pre>
</ol> 
<p>For more options and settings go to http://compass-style.org/help/tutorials/spriting/</p>