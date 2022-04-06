# ReactFullStackCoursera

# Course 1
## Week 1
### npm - useful commands

create package.json file
```
npm init
```
lite server
```
npm install lite-server
```
to start a lite server
```
npm start
```

install all node_modules with:
```
npm install
```
node_modules goes into the .gitignore file

### setting up bootstrap

including bootstrap css into the web page (goes into the head)
```html
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```
adding the libraries to the end of your web page (goes at the end of the body). first jquery then popper and then bootstrap javascript plugins
```html
<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

### useful links:
[Nodejs.org](https://nodejs.org/en/)<br>
[Npmjs.com](https://www.npmjs.com/)<br>
[lite-server](https://github.com/johnpapa/lite-server)<br>
[Bootstrap Home Page](https://getbootstrap.com/)<br>

## Week 2

### Navigation and Navigation Bar
adding the nav tag:
```html
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
        <div class="container">
           <a class="navbar-brand" href="#">Ristorante Con Fusion</a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>            
        </div>
    </nav>
```
responsive navigation bar:
```html
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
```
hiding items:
```html
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto"> ... </ul>
            </div>
```

adding breadcrumbs:
```html
            <ol class="col-12 breadcrumb">
                <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
                <li class="breadcrumb-item active">About Us</li>
            </ol>
```
### Icons
### Buttons
### Forms
### Tables and Cards
### Images and Media
### Alerting Users

## Week 3

### Tabs, Pills and Tabbed Navigation
### Collapse and Accordion
### Tooltips, Popovers and Modals


## Week 4

### Bootstrap and JQery
### Less and Sass
