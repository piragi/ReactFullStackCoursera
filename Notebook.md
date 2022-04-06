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
bootstrap tables:
```html
        <div class="row row-content">
            <div class="col-12 col-sm-9">
                <h2>Facts &amp; Figures</h2>
            </div>
             <div class="col-12 col-sm-3">
            </div>
       </div> 
```
bootstrap cards:
```html
            <div class="col-12 col-sm-6">
                <div class="card">
                    <h3 class="card-header bg-primary text-white">Facts At a Glance</h3>
                    <div class="card-body">
                        <dl class="row">
                            <dt class="col-6">Started</dt>
                            <dd class="col-6">3 Feb. 2013</dd>
                            <dt class="col-6">Major Stake Holder</dt>
                            <dd class="col-6">HK Fine Foods Inc.</dd>
                            <dt class="col-6">Last Year's Turnover</dt>
                            <dd class="col-6">$1,250,375</dd>
                            <dt class="col-6">Employees</dt>
                            <dd class="col-6">40</dd>
                        </dl>
                    </div>
                </div>
            </div>
```
### Images and Media
adding media objects:
```html
                <div class="media">
                    <img class="d-flex mr-3 img-thumbnail align-self-center"
                            src="img/uthappizza.png" alt="Uthappizza">
                    <div class="media-body">
                        <h2 class="mt-0">Uthappizza</h2>
                        <p class="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                            Italian pizza, topped with Cerignola olives, ripe vine
                            cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                    </div>
                </div>

```
### Alerting Users
different badges:
```html
<span class="badge badge-danger">HOT</span>
<span class="badge badge-pill badge-secondary">$4.99</span>
```
## Week 3

### Tabs, Pills and Tabbed Navigation
adding tabs:
```html
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" href="#peter"
                        role="tab" data-toggle="tab">Peter Pan, CEO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#danny" role="tab"
                        data-toggle="tab">Danny Witherspoon, CFO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#agumbe"role="tab"
                        data-toggle="tab">Agumbe Tang, CTO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#alberto" role="tab"
                        data-toggle="tab">Alberto Somayya, Exec. Chef</a>
                    </li>
                </ul>
```
tab-content and tab-pane:
```html
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade show active" id="peter">
                        <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                        <p> ... </p>
                    </div>
                </div>
```
### Collapse and Accordion
accordion:
```html
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" role="tab" id="peterhead">
                        <h3 class="mb-0">
                            <a data-toggle="collapse" data-target="#peter">
                            Peter Pan <small>Chief Epicurious Officer</small>
                            </a>
                        </h3>
                        </div>
                        <div class="collapse show" id="peter" data-parent="#accordion">
                            <div class="card-body">
                                <p class="d-none d-sm-block">. . .</p>
                            </div>
                        </div>
                    </div>
                </div>
```
### Tooltips, Popovers and Modals
adding tooltip:
```html
                    <a role="button" class="btn btn-block nav-link btn-warning"
                        data-toggle="tooltip" data-html="true"  title="Or Call us at  <br><strong>+852 12345678</strong>"
                        data-placement="bottom" href="#reserveform">Reserve Table</a>
```
activated through javascript
```html
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script>
```
modals:
```html
    <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="content">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login </h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-sm-4">
                                    <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                    <input type="email" class="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email">
                            </div>
                            <div class="form-group col-sm-4">
                                <label class="sr-only" for="exampleInputPassword3">Password</label>
                                <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password">
                            </div>
                            <div class="col-sm-auto">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox">
                                    <label class="form-check-label"> Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
```
trigger the modal:
```html
                <span class="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                    <span class="fa fa-sign-in"></span> Login</a>
                </span>
```
## Week 4

### Bootstrap and JQery
### Less and Sass
```html
```
