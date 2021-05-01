import {logo, author_image} from './default.js';

const InstructorCard = () => {
    return(
        <div class="student-block col-lg-6 col-md-6 col-sm-12">
            <div class="block-inner">
                <div class="image">
                    <img src={author_image} alt="" />
                </div>
                <h2>Stephane Smith</h2>
                <div class="text">Certified instructor Architecture&amp; Developer</div>
                <div class="social-box">
                    <a href="#" class="fa fa-facebook-square"></a>
                    <a href="#" class="fa fa-twitter-square"></a>
                    <a href="#" class="fa fa-linkedin-square"></a>
                    <a href="#" class="fa fa-github"></a>
                </div>
                <a href="#" class="more">Know More <span class="fa fa-angle-right"></span></a>
            </div>
        </div>
    );
}

const TableOfContent = (arg) => {
    const BlockList = () => {
        const curriculumArray = arg.data;
        const Block = curriculumArray.map( (lession) => {
            const lessionlist = lession.sub_lession.map( (sub_lession) => {
                return(<div class="content">
                            <div class="clearfix">
                                <div class="pull-left">
                                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>{sub_lession.name}</a>
                                </div>
                                <div class="pull-right">
                                    <div class="minutes">2 Min 45 Sec</div>
                                </div>
                            </div>
                        </div>);
            });
            return <li class="accordion block">
                        <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div>{lession.lession_name}</div>
                        <div class="acc-content current">
                            {lessionlist}
                        </div>
                    </li>
        } );

        return (
            <ul class="accordion-box style-two">{Block}</ul>
        );
    }

    return(<BlockList />);
}

const CourseOverview = (arg) => {
    const insArr = [1,2];
    const InstructorListView = () => {
        const instructors = insArr.map( () => {
            return <InstructorCard />
        });
        return(
            <div class="row clearfix">{instructors}</div>
        );
    }
    return(
        <div class="tab active-tab" id="prod-overview">
        <div class="content">
            
                {/* <!-- Cource Overview --> */}
                <div class="course-overview">
                    <div class="inner-box">
                        {arg.data} 123                       
                        <div class="row clearfix">
                            <InstructorListView />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}

const CourseAnnouncement = (arg) => {
    console.log(arg);
    const AnnouncementBlock = () => {
        const announcement = arg.data;
        const announcements = announcement.map( (announce) => {
            return (<li class="block">
                        <div class="acc-btn">
                            <div class="icon-outer">
                                <span class="icon icon-plus flaticon-angle-arrow-down"></span>
                            </div> 
                            {announce.subject}
                        </div>
                        <div class="pl-2">
                            <div class="content">
                                <div class="clearfix">
                                    {announce.body}
                                </div>
                            </div>
                        </div>
                    </li>);
        });

        return(
            <ul class="accordion-box">{announcements}</ul>
        );
    }
    return(
        <div class="tab active-tab" id="prod-announcement">
            <div class="content">
                {/* <!-- Accordion Box --> */}
                <AnnouncementBlock />
            </div>
        </div>
    );
}

const CourseFaq = (arg) => {
    const FaqBlock = () => {
        const faqArray = arg.data;
        const faqs = faqArray.map( (faq) => {
            return <li class="block">
                        <div class="acc-btn">
                            <div class="icon-outer">
                                <span class="icon icon-plus flaticon-angle-arrow-down"></span>
                            </div> 
                            {faq.question}
                        </div>
                        <div class="pl-2">
                            <div class="content">
                                <div class="clearfix">
                                    {faq.Answer}
                                </div>
                            </div>
                        </div>
                    </li>
        });

        return(
            <ul class="accordion-box">{faqs}</ul>
        );
    }
    return(
        <div class="tab active-tab" id="prod-faq">
            <div class="content">
                {/* <!-- Accordion Box --> */}
                <FaqBlock />
            </div>
        </div>
    );
}

const CourseBuyWidget = () => {
    return(
        <div class="inner-column sticky-top">
                    
            {/* <!-- Video Box --> */}
            <div class="intro-video" style={{backgroundImage: "url(" + "images/resource/video-image-1.jpg" + ")"}}>
                <a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image intro-video-box">
                    <span class="fa fa-play"><i class="ripple"></i></span>
                </a>
                <h4>Preview this course</h4>
            </div>
            {/* <!-- End Video Box --> */}
            <div class="price">$11.99</div>
            <div class="time-left">23 hours left at this price!</div>
            
            <a href="#" class="theme-btn btn-style-three">
                <span class="txt">Add To Cart <i class="fa fa-angle-right"></i></span>
                </a>
            <a href="#" class="theme-btn btn-style-two">
                <span class="txt">Buy Now <i class="fa fa-angle-right"></i></span>
            </a>
        </div>
    );
}

export {
    TableOfContent,
    CourseOverview,
    CourseAnnouncement,
    CourseFaq,
    CourseBuyWidget
};