import {
    logo,
    course_image,
    banner,
    education
} from './default.js';

import Header from './Header.js';

const LandingPage = () => {
    return(
        <div class="page-wrapper">
            
            {/* <!-- Preloader --> */}
            {/* <div class="preloader"></div> */}
            
            {/* <!-- Main Header--> */}
            <Header />
            {/* <!-- End Main Header --> */}
            
            {/* <!-- Banner Section --> */}
            <section class="banner-section">
                <div class="pattern-layer" style={{backgroundImage: "url(" + "images/resource/banner.png" + ")"}}></div>
                <div class="auto-container">
        
                    {/* <!-- Content Boxed --> */}
                    <div class="content-boxed">
                        <div class="inner-column">
                            <h1>Learn Math, Science, English and Test <br/> Prep from our Experts</h1>
                            <div class="buttons-box">
                                <a href="course.html" class="theme-btn btn-style-one"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                                <a href="course.html" class="theme-btn btn-style-two"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Image Boxed --> */}
                    <div class="image titlt" data-tilt="" data-tilt-max="4">
                        <a href="images/resource/banner.png" data-fancybox="banner" data-caption="" class=""><img src={banner} alt="" /></a>
                    </div>
                    
                    {/* <!-- Search Boxed --> */}
                    <div class="search-boxed">
                        <div class="search-box">
                            <form method="post" action="contact.html">
                                <div class="form-group">
                                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required="" />
                                    <button type="submit"><span class="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* <!-- End Banner Section --> */}
            
            {/* <!-- Education Section --> */}
            <section class="education-section">
                <div class="patern-layer-one paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "images/icons/icon-1.png"+")"}}></div>
                <div class="patern-layer-two paroller" data-paroller-factor="0.60" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" +  "images/icons/icon-2.png" + ")"}}></div>
                <div class="auto-container">
                    <div class="row clearfix">
                        
                        {/* <!-- Image Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column parallax-scene-1">
                                <div class="image parallax-layer" data-depth="0.30">
                                    <img src={education} alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Content Column --> */}
                        <div class="content-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <h2>Our education system <br/> works for you</h2>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
                                <a href="course.html" class="theme-btn btn-style-two"><span class="txt">Learn More <i class="fa fa-angle-right"></i></span></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- End Education Section --> */}
            
            {/* <!-- Courses Section --> */}
            <section class="courses-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        
                        {/* <!-- Title Column --> */}
                        <div class="title-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div class="sec-title">
                                    <h2>Our top courses</h2>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered.</div>
                                </div>
                                <a href="course.html" class="theme-btn btn-style-three"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                            </div>
                        </div>
                        
                        {/* <!-- Cource Block --> */}
                        <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="course-detail.html"><img src={course_image} alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <h5><a href="course-detail.html">Computer Science</a></h5>
                                        </div>
                                        <div class="pull-right">
                                            <div class="price">$140</div>
                                        </div>
                                    </div>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="students">125 Student</div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="course-detail.html" class="enroll">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Cource Block --> */}
                        <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="course-detail.html"><img src={course_image} alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <h5><a href="course-detail.html">Data Science</a></h5>
                                        </div>
                                        <div class="pull-right">
                                            <div class="price">$140</div>
                                        </div>
                                    </div>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="students">125 Student</div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="course-detail.html" class="enroll">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Cource Block --> */}
                        <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="course-detail.html"><img src={course_image} alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <h5><a href="course-detail.html">Development Course</a></h5>
                                        </div>
                                        <div class="pull-right">
                                            <div class="price">$140</div>
                                        </div>
                                    </div>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="students">125 Student</div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="course-detail.html" class="enroll">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Cource Block --> */}
                        <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="course-detail.html"><img src={course_image} alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <h5><a href="course-detail.html">Language Course</a></h5>
                                        </div>
                                        <div class="pull-right">
                                            <div class="price">$140</div>
                                        </div>
                                    </div>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="students">125 Student</div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="course-detail.html" class="enroll">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Cource Block --> */}
                        <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="course-detail.html"><img src={course_image} alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <h5><a href="course-detail.html">Business Course</a></h5>
                                        </div>
                                        <div class="pull-right">
                                            <div class="price">$140</div>
                                        </div>
                                    </div>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <div class="students">125 Student</div>
                                        </div>
                                        <div class="pull-right">
                                            <a href="course-detail.html" class="enroll">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- End Courses Section --> */}
            
            {/* <!-- Call To Action Section --> */}
            <section class="call-to-action-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        
                        {/* <!-- Title Column --> */}
                        <div class="title-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div class="sec-title">
                                    <h2>Live the experience <br/> learn at your own pace</h2>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Form Column --> */}
                        <div class="form-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="help">For Help?</div>
                                <div class="search-box">
                                    <form method="post" action="contact.html">
                                        <div class="form-group">
                                            <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required="" />
                                            <button type="submit"><span class="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- End Call To Action Section --> */}
            
            {/* <!-- Video Section --> */}
            <section class="video-section" style={{backgroundImage: "url(" + "images/background/2.jpg" + ")"}}>
                <div class="auto-container">
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image video-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
                    <h4>Watch Intro Video</h4>
                </div>
            </section>
            {/* <!-- End Video Section --> */}
            
            {/* <!-- Achievement Section --> */}
            <section class="achievements-section">
                <div class="auto-container">
                    {/* <!-- Sec Title --> */}
                    <div class="sec-title centered">
                        <h2>Our achievements</h2>
                        <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re <br/> two waters own morning gathered greater shall had behold had seed.</div>
                    </div>
                    
                    {/* <!-- Fact Counter --> */}
                    <div class="fact-counter">
                        <div class="row clearfix">
        
                            {/* <!-- Column --> */}
                            <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                                <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="content">
                                        <div class="icon-box">
                                            <span class="icon flaticon-course"></span>
                                        </div>
                                        <h4 class="counter-title">Total Courses</h4>
                                        <div class="count-outer count-box">
                                            <span class="count-text" data-speed="2000" data-stop="50">0</span>+
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Column --> */}
                            <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                                <div class="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="content">
                                        <div class="icon-box">
                                            <span class="icon flaticon-course-1"></span>
                                        </div>
                                        <h4 class="counter-title">Total Student</h4>
                                        <div class="count-outer count-box alternate">
                                            <span class="count-text" data-speed="3000" data-stop="45">0</span>K+
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Column --> */}
                            <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                                <div class="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="content">
                                        <div class="icon-box">
                                            <span class="icon flaticon-world"></span>
                                        </div>
                                        <h4 class="counter-title">Global Position</h4>
                                        <div class="count-outer count-box">
                                            <span class="count-text" data-speed="4000" data-stop="115">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- End Achievement Section --> */}
            
            {/* <!-- Fluid Section One --> */}
            <section class="fluid-section-one">
                <div class="patern-layer-one paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" +  "images/icons/icon-1.png" + ")"}}></div>
                <div class="outer-container clearfix">
                    
                    {/* <!-- Image Column --> */}
                    <div class="image-column" style={{backgroundImage: "url(" + "images/resource/image-1.jpg" + ")"}}>
                        <figure class="image-box"><img src={banner} alt="" /></figure>
                    </div>
                    
                    {/* <!-- Content Column --> */}
                    <div class="content-column">
                        <div class="inner-column">
                            <div class="clearfix">
                                <div class="pull-left">
                                    <h2>Upcoming events</h2>
                                </div>
                                <div class="pull-right">
                                    <a href="course-detail.html" class="events">All Events</a>
                                </div>
                            </div>
                            
                            {/* <!-- Blocks Outer --> */}
                            <div class="blocks-outer">
                                
                                {/* <!-- Event Block --> */}
                                <div class="event-block">
                                    <div class="inner-box">
                                        <div class="clearfix">
                                            {/* <!-- Event Date --> */}
                                            <div class="event-date clearfix"><span class="date">21</span>JAN 2020</div>
                                            {/* <!-- Event List --> */}
                                            <ul class="event-list">
                                                <li><a href="course-detail.html">ART &amp; DESIGN</a></li>
                                                <li><a href="course-detail.html">PAINTING</a></li>
                                            </ul>
                                        </div>
                                        <h3><a href="course-detail.html">Workshop on UI/ UX</a></h3>
                                    </div>
                                </div>
                                
                                {/* <!-- Event Block --> */}
                                <div class="event-block">
                                    <div class="inner-box">
                                        <div class="clearfix">
                                            {/* <!-- Event Date --> */}
                                            <div class="event-date clearfix"><span class="date">15</span>Mar 2020</div>
                                            {/* <!-- Event List --> */}
                                            <ul class="event-list">
                                                <li><a href="course-detail.html">ART &amp; DESIGN</a></li>
                                                <li><a href="course-detail.html">PAINTING</a></li>
                                            </ul>
                                        </div>
                                        <h3><a href="course-detail.html">Amsterdam art weekend</a></h3>
                                    </div>
                                </div>
                                
                                {/* <!-- Event Block --> */}
                                <div class="event-block">
                                    <div class="inner-box">
                                        <div class="clearfix">
                                            {/* <!-- Event Date --> */}
                                            <div class="event-date clearfix"><span class="date">21</span>mar 2020</div>
                                            {/* <!-- Event List --> */}
                                            <ul class="event-list">
                                                <li><a href="course-detail.html">ART &amp; DESIGN</a></li>
                                                <li><a href="course-detail.html">PAINTING</a></li>
                                            </ul>
                                        </div>
                                        <h3><a href="course-detail.html">Outside fashion - Group exhibition</a></h3>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            
            {/* <!-- News Section --> */}
            <section class="news-section">
                <div class="auto-container">
                    <div class="row clearfix">
                        
                        {/* <!-- Title Column --> */}
                        <div class="title-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                {/* <!-- Sec Title --> */}
                                <div class="sec-title">
                                    <h2>Our Latest blog posts</h2>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
                                </div>
                                <a href="course.html" class="theme-btn btn-style-three"><span class="txt">All Blog Post <i class="fa fa-angle-right"></i></span></a>
                            </div>
                        </div>
                        
                        {/* <!-- News Column --> */}
                        <div class="news-block col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="blog-detail.html"><img src="images/resource/news-1.jpg" alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <h3><a href="blog-detail.html">To apply signal detection theory</a></h3>
                                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters</div>
                                    <a href="blog-detail.html" class="read-more">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* <!-- End News Section --> */}
            
            {/* <!-- Testimonial Section --> */}
            <section class="testimonial-section">
                <div class="auto-container">
                    {/* <!-- Sec Title --> */}
                    <div class="sec-title centered">
                        <h2>Students &amp; Parents Opinion</h2>
                    </div>
                    
                    {/* <!-- Authors Box --> */}
                    <div class="authors-box">
                        <div class="author-one"><img src="images/resource/author-2.jpg" alt="" /></div>
                        <div class="author-two"><img src="images/resource/author-3.jpg" alt="" /></div>
                        <div class="author-three"><img src="images/resource/author-4.jpg" alt="" /></div>
                        <div class="author-four"><img src="images/resource/author-5.jpg" alt="" /></div>
                        
                        <div class="author-five"><img src="images/resource/author-6.jpg" alt="" /></div>
                        <div class="author-six"><img src="images/resource/author-7.jpg" alt="" /></div>
                        <div class="author-seven"><img src="images/resource/author-8.jpg" alt="" /></div>
                        <div class="author-eight"><img src="images/resource/author-9.jpg" alt="" /></div>
                    </div>
                    
                    <div class="single-item-carousel owl-carousel owl-theme">
                        
                        {/* <!-- Testimonial Block Two --> */}
                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="image-box">
                                    <div class="quote-icon flaticon-quote-5"></div>
                                    <div class="image">
                                        <img src="images/resource/author-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                            </div>
                        </div>
                        
                        {/* <!-- Testimonial Block Two --> */}
                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="image-box">
                                    <div class="image">
                                        <img src="images/resource/author-5.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                            </div>
                        </div>
                        
                        {/* <!-- Testimonial Block Two --> */}
                        <div class="testimonial-block">
                            <div class="inner-box">
                                <div class="image-box">
                                    <div class="image">
                                        <img src="images/resource/author-5.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
            {/* <!-- End Testimonial Section --> */}
            
            {/* <!-- Call To Action Section Two --> */}
            <section class="call-to-action-section-two" style={{ backgroundImage: "url(" + "images/background/3.png" + ")" }}>
                <div class="auto-container">
                    <div class="content">
                        <h2>Ready to get started?</h2>
                        <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two <br/> waters own morning gathered greater shall had behold had seed.</div>
                        <div class="buttons-box">
                            <a href="course.html" class="theme-btn btn-style-one"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></a>
                            <a href="course.html" class="theme-btn btn-style-two"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Call To Action Section Two --> */}
            
            {/* <!--Main Footer--> */}
            <footer class="main-footer">
                {/* <!-- Pattern Layer --> */}
                <div class="pattern-layer paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "images/icons/icon-1.png" + ")"}}></div>
                <div class="pattern-layer-two data-paroller-factor=" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "images/icons/icon-3.png" + ")"}}></div>
                <div class="auto-container">
                
                    {/* <!-- Widgets Section --> */}
                    <div class="widgets-section">
                        <div class="row clearfix">
                            
                            {/* <!-- Big Column --> */}
                            <div class="big-column col-lg-6 col-md-12 col-sm-12">
                                <div class="row clearfix">
                                    
                                    {/* <!--Footer Column--> */}
                                    <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                                        <div class="footer-widget logo-widget">
                                            <div class="logo">
                                                <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                                            </div>
                                            <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater.</div>
                                            <div class="social-box">
                                                <a href="#" class="fa fa-facebook"></a>
                                                <a href="#" class="fa fa-instagram"></a>
                                                <a href="#" class="fa fa-twitter"></a>
                                                <a href="#" class="fa fa-google"></a>
                                                <a href="#" class="fa fa-pinterest-p"></a>
                                            </div>
                                            <div class="copyright">Copyright &copy; 2020 AuburnForest</div>
                                        </div>
                                    </div>
                                    
                                    {/* <!--Footer Column--> */}
                                    <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget">
                                            <h4>About Us</h4>
                                            <ul class="links-widget">
                                                <li><a href="#">Afficiates</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Reviews</a></li>
                                                <li><a href="#">Blogs</a></li>
                                                <li><a href="#">Newsletter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            {/* <!-- Big Column --> */}
                            <div class="big-column col-lg-6 col-md-12 col-sm-12">
                                <div class="row clearfix">
                                    
                                    {/* <!--Footer Column--> */}
                                    <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget">
                                            <h4>Resource</h4>
                                            <ul class="links-widget">
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Support Area</a></li>
                                                <li><a href="#">Documentations</a></li>
                                                <li><a href="#">How it works</a></li>
                                                <li><a href="#">Terms of Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* <!--Footer Column--> */}
                                    <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                        <div class="footer-widget links-widget">
                                            <h4>Quick Links</h4>
                                            <ul class="links-widget">
                                                <li><a href="#">home</a></li>
                                                <li><a href="#">About us</a></li>
                                                <li><a href="#">Features</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </footer>
            
        </div>
    );
}

export default LandingPage;