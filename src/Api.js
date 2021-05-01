const api_course_detail = 
{
    "is_purchased" : true,
    "course_id" : 100004,
    "course_name" : "Introduction to Design",
    "course_overview" : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    "course_curriculum" : [
        {
            "lession_name" : "PHP History",
            "sub_lession" : [
                {
                    "name" : "What is History 1?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is php is internet is php",
                    "learning_time" : 12
                },
                {
                    "name" : "What is History 2?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is good is internet is internet",
                    "learning_time" : 14
                },
                {
                    "name" : "What is History 3?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is internet is internet is helloalok",
                    "learning_time" : 11
                }
            ]
        },
        {
            "lession_name" : "PHP Basics",
            "sub_lession" : [
                {
                    "name" : "What is PHP Basics 1?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is php is internet is php",
                    "learning_time" : 6
                },
                {
                    "name" : "What is PHP Basics 2?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is good is internet is internet",
                    "learning_time" : 24
                },
                {
                    "name" : "What is PHP Basics 3?",
                    "video_url" : "https://google.com",
                    "overview" : "Internet is internet is internet is helloalok",
                    "learning_time" : 4
                }
            ]
        }
    ],
    "course_announcements" : [
        {
            "subject" : "Is php good for alok ?",
            "body" : "As long as it is not going to die."
        },
        {
            "subject" : "Is java good for alok ?",
            "body" : "No, because of too much code writing, Python better."
        }
    ],
    "course_faqs" : [
        {
            "question" : "What do i need to start?",
            "Answer" : "You have to be human"
        }
    ],
    "course_instructors" : [{
        "instructor_id" : 123456,
        "instructor_name" : "Alok Prakash",
        "instructor_photo_url" : "author.jpg",
        "designation" : "CEO at raeonglobal",
        "social_url" : [{
            "facebook" : "https://mbasic.facebook.com",
            "youtube" : "https://youtube.com",
            "github" : "https://github.com/helloalok",
            "linkedin" : "https://linkedin.com/alok"
        }],
        "profile_url" : "http://localhost:300/author/123456"
    }],
    "course_rating" : {
        "total_reviews" : 21144,
        "score" : "3.4",
        "total_reviews" : 481,
        "reviews" : [{
            "review_id" : 321456,
            "reviewer_id" : 213456,
            "reviewer_name" : "RespectedRAEON",
            "review_body" : "This course is for those who have basic knowledge of photoshop."
        }]
    }

}

const overview = `
<h4>25 That Prevent Job Seekers From Overcoming Failure</h4>
<p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>
<ul class="student-list">
    <li>23,564 Total Students</li>
    <li><span class="theme_color">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> (1254 Rating)</li>
    <li>256 Reviews</li>
</ul>
<h3>What you’ll learn?</h3>
<ul class="review-list">
    <li>Phasellus enim magna, varius et commodo ut.</li>
    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
    <li>Phasellus enim magna, varius et commodo ut.</li>
    <li>Phasellus enim magna, varius et commodo ut.</li>
    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
    <li>Phasellus enim magna, varius et commodo ut.</li>
</ul>
<h3>Requirements</h3>
<ul class="requirement-list">
    <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
    <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
    <li>Phasellus enim magna, varius et commodo ut.</li>
    <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
    <li>Phasellus enim magna, varius et commodo ut.</li>
</ul>
<h3>Instructors</h3>`;

export { 
    api_course_detail
 };