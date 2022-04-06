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
### Icons and Buttons
adding button bar:
```html
                <div class="btn-group" role="group">
                    <a role="button" class="btn btn-primary" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
                    <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
                    <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
                </div>
```
### Forms
basic form:
```html
                <form>
                    <div class="form-group row">
                        <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name">
                        </div>
                    </div>
                </form>
```
adding fields:
```html
                    <div class="form-group row">
                        <label for="telnum" class="col-12 col-md-2 col-form-label">Contact Tel.</label>
                        <div class="col-5 col-md-3">
                            <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area code">
                        </div>
                        <div class="col-7 col-md-7">
                            <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="emailid" class="col-md-2 col-form-label">Email</label>
                        <div class="col-md-10">
                            <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email">
                        </div>
                    </div>
```
adding checkbox and select:
```html
                    <div class="form-group row">
                        <div class="col-md-6 offset-md-2">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="approve" id="approve" value="">
                                <label class="form-check-label" for="approve">
                                    <strong>May we contact you?</strong>
                                </label>
                            </div>
                        </div>
                        <div class="col-md-3 offset-md-1">
                            <select class="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
```                    
adding textarea:
```html
                    <div class="form-group row">
                        <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                        <div class="col-md-10">
                            <textarea class="form-control" id="feedback" name="feedback" rows="12"></textarea>
                        </div>
                    </div>
```
adding submit button:
```html
                    <div class="form-group row">
                        <div class="offset-md-2 col-md-10">
                            <button type="submit" class="btn btn-primary">Send Feedback</button>
                        </div>
                    </div>
```
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
