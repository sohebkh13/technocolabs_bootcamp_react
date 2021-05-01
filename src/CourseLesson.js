import {useState} from 'react';

import { TableOfContent,
         CourseOverview,
         CourseAnnouncement,
         CourseFaq} from './AppComponent.js';

const CourseLesson = (arg) => {

    let [activeTab , setActiveTab] = useState(1);

    const Tabs = () => {
        switch(activeTab){
            case 1 : return(<CourseOverview data={arg.data.course_overview} />);
            case 2 : return(<CourseAnnouncement data={arg.data.course_announcements} />);
            case 3 : return(<CourseFaq data={arg.data.course_faqs} />);
            default : return(<CourseOverview data={arg.data.course_overview} />);
        }        
    }
    return(
        <div class="row clearfix">
            
            {/* <!-- Content Column --> */}
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
                <div class="inner-column">
                    
                    <div class="course-video-box">
                        <div style={{padding:'56.25% 0 0 0', position:'relative'}}><iframe src="https://player.vimeo.com/video/243885948" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                    
                    {/* <!-- Intro Info Tabs--> */}
                    <div class="intro-info-tabs">
                        {/* <!-- Intro Tabs--> */}
                        <div class="intro-tabs tabs-box">
                        
                            {/* <!--Tab Btns--> */}
                            <ul class="tab-btns tab-buttons clearfix">
                                <li class="tab-btn active-btn" onClick={()=>{setActiveTab(1)}}>Overview</li>
                                {/* <li data-tab="#prod-curriculum" class="tab-btn">Curriculum</li> */}
                                <li class="tab-btn" onClick={()=>{setActiveTab(2)}}>Announcement</li>
                                <li class="tab-btn" onClick={()=>{setActiveTab(3)}}>FAQ</li>
                                <li class="tab-btn" onClick={()=>{setActiveTab(4)}}>Reviews</li>
                            </ul>
                            
                            {/* <!--Tabs Container--> */}
                            <div class="tabs-content">
                                <Tabs />
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
            <div class="accordian-column col-lg-4 col-md-12 col-sm-12">
            <div class="inner-column sticky-top">
                <h4>Table of contents</h4>
                {/* <!-- Accordion Box --> */}
                <TableOfContent data={arg.data.course_curriculum}/>
            </div>
            </div>
        </div>
    );
}

export default CourseLesson;