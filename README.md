<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/favicon.jpg" alt="Logo" width="80" height="80">

  <h3 align="center">Counter-JS by Gabriele Stringano</h3>

  <p align="center">
  A simple application that works as a counter
    <br />
    <a href="https://gabriele-stringano.github.io/counter-js/"><strong>Try the program »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-it-work">How it Work</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

As a Start2impact student, I developed this application to put my newly acquired knowledge of JavaScript into practice.

<p align="right">(<a href="#top">back to top</a>)</p>

<ol>

### Built With


* [![Html][Html.js]][Html-url]
* [![Css][Css.js]][Css-url]
* [![Javascript][Javascript.js]][Javascript-url]

<p align="right">(<a href="#top">back to top</a>)</p>

</ol>

<!-- How it Work + ScreenShot -->

## How it Work

- In order to increment/decrement or reset the counter, 4 eventListener were assigned to the buttons (line 36 to line 40)</br>
Description:
<strong>Mousedown</strong> which calls the <strong>plus</strong> function (lines 14 to 18), the function increments the counter by 1 and then prints the updated counter on the screen. if the button is held down (desktop only feature, not phones) for more than half a second you will go to the <strong>countplus</strong> function, called by a <strong>setInterval</strong>, which increments each unit every half second. When you stop pressing (<strong>mouseup</strong> event, line 37) the <strong>stop</strong> function (lines 26 to 28) will be called, which terminates the setInterval.</br>
The same happens for the decrement button.</br>
The <strong>countReset</strong> function (line 30 to 33, triggered by the <strong>click</strong> event on the reset button (line 42) goes to set the counter to zero and sends the updated counter to the screen.

[![product-screenshot1]]

### New version

Buttons and counter are now initialized on js. A function called buttonMaker allows you to create custom buttons and pass them to the div (class=buttons) in the html.

[![product-screenshot2]]

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps:
<ol>
<li> Go to  https://github.com/Gabriele-Stringano/counter-js.git and press the green button </li>
<li> Select Download zipper </li>
<li> Open the zipper and extract the folder </li>
<li> Open a text editor and add the extracted folder </li>
</ol>

### Prerequisites
You need to own these programs:
<ul>
    <li> A text editor-IDE </li>
    <li> A program to unzip files</li>
</ul>


<!-- CONTACT -->
## Contact

Gabriele Stringano Email: - gabrielestringano@gmail.com

Project Link: - https://github.com/Gabriele-Stringano/counter-js

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I used:

* [GitHub](https://github.com)
* [Start2Impact](https://www.start2impact.it/)
* [Atom](https://atom.io/)
* [Best-README-Template](https://github.com/ferneynava/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot1]: images/JsScreenshot1.png
[product-screenshot2]: images/JsScreenshot2.png
[Html.js]: https://img.shields.io/static/v1?message=HTML5&logo=HTML5&labelColor=5c5c5c&color=c31111&logoColor=white&label=%20&style=FOR-THE-BADGE
[Html-url]: https://www.html.it/
[Css.js]: https://img.shields.io/static/v1?message=CSS3&logo=css3&labelColor=5c5c5c&color=1111c3&logoColor=white&label=%20&style=FOR-THE-BADGE
[Css-url]: https://en.wikipedia.org/wiki/CSS
[Javascript.js]: https://img.shields.io/static/v1?message=JAVASCRIPT&logo=JavaScript&labelColor=5c5c5c&color=efd81d&logoColor=white&label=%20&style=FOR-THE-BADGE
[Javascript-url]: https://en.wikipedia.org/wiki/JavaScript

