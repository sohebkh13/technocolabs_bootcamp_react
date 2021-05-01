import {useState, useEffect} from 'react';

import Header from './Header.js';
import Title from './Title.js';
import CourseLesson from './CourseLesson.js';
import CourseInfo from './CourseInfo.js';
import Footer from './Footer.js';

// import { default_icon_1, default_icon_2, default_icon_3 } from './default.js';
import { api_course_detail } from './Api.js';
import { API_URL } from './constants.js';

const CourseDetail = () => {

    let [courseData, setCourseData] = useState({
        isLoaded : true,
        data : api_course_detail
    });
    
    const isPurchased = courseData.data.is_purchased;

    useEffect( () => {
        // if(!courseData.isLoaded){
        //     fetch(API_URL.COURSE_DETAIL)
        //     .then( response => {
        //         console.log(response);
        //         return response.json();
        //     })
        //     .then( result => {
        //         setCourseData({
        //             isLoaded : true,
        //             data : result
        //         });
        //         console.log(result);
        //     });
        // }
    });

    const CourseDetailForPurchased = () => {
        if(isPurchased){
        return(<CourseLesson data={courseData.data} />);
        }else{
        return(<CourseInfo data={courseData.data} />);
        }
    }

    if(courseData.isLoaded) {
        return (
            <div>
                <Header />
                <Title data={courseData.course_name}/>
    
                {/* <!-- Intro Section --> */}
                <section class="intro-section-two">
                    <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{ backgroundImage: "url(" + "images/icons/icon-de" + ")"}}></div>
                    <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: "url("+ "images/icons/icon-de" + ")"}}></div>
                    <div class="circle-one"></div>
                    <div class="auto-container">
                        
                        <div class="inner-container">
                            <CourseDetailForPurchased />
                        </div>
                    
                    </div>
                </section>
                <Footer />
            </div>
        );
    } else {
        return(
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );
    }
}

export default CourseDetail;
