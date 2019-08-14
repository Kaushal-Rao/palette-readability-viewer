# palette-readability-viewer
Simple web page to view readability of text based on color themes/palettes chosen for web projects.
<br /><br />

## Usage
(check Files section below for more details)
<ol>
  <li>Download the files into a folder and open the HTML file in your preferred browser.</li>
  <li>(Optional) Type the text you would like to have in the display boxes in the large text input field (max. 30 characters).</li>
  <li>Enter CSS color names or HEX values in the text input fields for each column, or select HSL or RGB values using the corresponding color-picker input field.</li>
  <li>Take a look at the result and decide which combinations work for your project.</li>
</ol>


## Files
### viewer_page.html
Simple webpage with:
<ul>
  <li>Theme selection for dark/light background & corresponding text.</li>
  <li>Custom text input to try a preferred sentence (max. 30 characters).</li>
  <li>Palette colors inputs (text & color-picker):
    <ul>
      <li>Text - type in CSS colors by name, or enter HEX values.</li>
      <li>Color-picker - select color, enter HSL or RGB values.</li>
    </ul>
  </li>
  <li>Display boxed - will have text/background recolored as per selection</li>
</ul>

### viewer_style.css
CSS Grid based styling with:
<ul>
  <li>CSS custom properties (a.k.a. CSS Variables) for theme modification.</li>
  <li>CSS Grid arrangements of elements.</li>
  <li>Styling for all elements.</li>
</ul>

### viewer_functionality.js
Functions with which:
<ul>
  <li>Theme can be modified by changing CSS Variables.</li>
  <li>Display box text content can be modified as per input (ma. 30 characters).</li>
  <li>Display box text and background colors can be modified as per input; contains:
    <ul>
      <li>CSS_COLOR_NAMES - credit bobspace: https://gist.github.com/bobspace/2712980</li>
      <li>colorCheck() - to recognise if color input as text is in CSS_COLOR_NAMES or is a HEX value (does not support HSL & RGB - use color-picker for either).</li>
      <li>idCheck() - to manage execution of same function for color input whether it's from text or corresponding color-picker.</li>
      <li>colorSticker() - key function to apply changes to display boxes.</li>
    </ul>
  </li>
</ul>
