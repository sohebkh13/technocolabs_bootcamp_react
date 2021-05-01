const API_URL = {
    COURSE_DETAIL : "http://localhost/Web-Development-Bootcamp-Project-07-March/api/course-detail.php"
}

const APP_URL = {
    COURSE_DETAIL_OVERVIEW : "/course-detail/:courseid",
    COURSE_DETAIL_CURRICULUM : "/course-detail/:courseid/curriculum",
    COURSE_DETAIL_FAQS : "/course-detail/:courseid/faq",
    COURSE_DETAIL_ANNOUNCEMENT : "/course-detail/:courseid/announcement",
    COURSE_DETAIL_CURRICULUM_SHORT : "/curriculum",
    COURSE_DETAIL_FAQS_SHORT : "/faq",
    COURSE_DETAIL_ANNOUNCEMENT_SHORT : "/announcement"
}

export {
    API_URL,
    APP_URL
}