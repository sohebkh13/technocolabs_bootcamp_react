import { logo } from "./default.js";
import {Link} from 'react-router-dom';
import { APP_URL } from "./constants.js";

const Header = () => {
    return (
        
    <header class="main-header header-style-one">
		
        <div class="header-top">
            <div class="auto-container">
                <div class="clearfix">
                
                    <div class="top-left pull-left clearfix">
                    
                        <ul class="info-list">
                            <li><span>Call Us:</span><a href="tel:+123-456-7890"> +1 (800) 123-4567</a></li>
                            <li><span>Email Us:</span><a href="mailto:info@yourcompany.com"> info@yourcompany.com</a></li>
                        </ul>
                        
                    </div>
                    
                    <div class="top-right pull-right clearfix">
                        <ul class="login-nav">
                            <li><Link to={APP_URL.LOGIN}>Log In</Link></li>
                            <li><Link to={APP_URL.REGISTER}>Register</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="header-upper">
            <div class="auto-container">
                <div class="clearfix">
                    
                    <div class="pull-left logo-box">
                        <div class="logo"><a to="/"><img src={logo} alt="" title="Bootcamp" /></a></div>
                    </div>
                    
                    <div class="nav-outer clearfix">
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
                        <nav class="main-menu show navbar-expand-md">
                            <div class="navbar-header">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li class="dropdown">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="price.html">Pricing</a></li>
                                            <li><Link to={APP_URL.LOGIN}>Login</Link></li>
                                            <li><Link to={APP_URL.REGISTER}>Register</Link></li>
                                            <li><a href="privacy.html">Privacy Policy</a></li>
                                            <li><a href="comming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </li>
                                    <li class="current dropdown"><a href="#">Courses</a>
                                        <ul>
                                            <li><Link to="/course">Courses As Grid</Link></li>
                                            <li><Link to="/course-list">Courses As List</Link></li>
                                            <li><Link to="/course-path">Course Topics</Link></li>
                                            <li><Link to={APP_URL.COURSE_DETAIL+"/123456"}>Course Details</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Books</a>
                                        <ul>
                                            <li><Link to="/books">Books</Link></li>
                                            <li><Link to={APP_URL.BOOK_DETAIL}>Book Detail</Link></li>
                                            <li><Link to="/book-as-pdf">Books as PDF</Link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Profiles</a>
                                        <ul>
                                            <li><a href="intro-profile.html">Instructor Profile</a></li>
                                            <li><a href="student-profile.html">Student Profile</a></li>
                                            <li><a href="edit-profile.html">Edit Profile</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-detail.html">Blog Detail</a></li>
                                            <li><a href="error.html">Not Found / 404</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Links</a>
                                        <ul>
                                            <li><a href="https://www.wikipedia.org">Wikipedia</a></li>
                                            <li><a href="https://www.education.com">Education</a></li>
                                            <li><a href="https://www.theidioms.com">The Idioms</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            
                        </nav>
                        
                    </div>
                
                </div>
            </div>
        </div>
        
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-multiply"></span></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src="images/logo-5.png" alt="" title="" /></a></div>
                <div class="menu-outer">
                </div>
            </nav>
        </div>
        
    </header>
    );
}

export default Header;
