const Footer = () => {
    return(
    <footer class="main-footer">
        {/* <!-- Pattern Layer --> */}
        <div class="pattern-layer paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url(" + "images/icons/icon-1.png" + ")"}}> </div>
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
    );
}

export default Footer;