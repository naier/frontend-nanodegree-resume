var bio = {
    "name": "Narayanan Aier",
    "role": "Web Developer",
    "contacts": 
        {
            "mobile": "123-123-1234",
            "email": "webdev@nanodegree.com",
            "github": "naier",
            "location": "Orange County, CA"
        }
    ,
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Technology Consulting",
        "Project Management"
    ],
    "biopic": "images/me.jpg"
}

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
	if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
		
	}
}


var education = {
    "schools": [
        {
            "name": "Master's University",
            "location": "Ithaca, NY",
            "degree": "Master's",
            "majors": [
                "Electrical Engineering"
            ],
            "dates": 2009,
            "url": "http://www.cornell.edu"
        },
        {
            "name": "Bachelor's University",
            "location": "San Diego, CA",
            "degree": "Bachelor's",
            "majors": [
                "Electrical Engineering"
            ],
            "dates": 2008,
            "url": "http://www.stanford.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/ud304"
        }
    ]
}

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last", "#education").append((HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree)).replace("#", education.schools[school].url));
		$(".education-entry:last", "#education").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last", "#education").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last", "#education").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", ")));
	}

	$("#education").append(HTMLonlineClasses);
	for (var onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append((HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school)).replace("#", education.onlineCourses[onlineCourse].url));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date));
	}
}

var work = {
    "jobs": [
        {
            "employer": "Employer ABC",
            "title": "Senior Web Developer",
            "location": "Orange County, CA",
            "dates": "Mar 2012  - Present",
            "description": "Quinquaginta septem est - pars tua, triginta quinque millia. Est autem extra plus quindecim, tota tua est, quom meruisset. Fac nos fecit. SIC. Puto quia una res potest - venimus in cognitionem. Vide pretium in manibus. Sed finge iustum faciens quod qualibet septimana. SIC. Duis duas libras triginta quinque milia pondo.",
            "url" : "https://www.apple.com/"
        },
        {
            "employer": "Employer XYZ",
            "title": "Web Developer",
            "location": "Orange County, CA",
            "dates": "Aug 2009 - Feb 2012",
            "description": "Ille vivere. Ut ad te quaerebam ... purgare caeli. Sunt uh ... nonnullus propter errorem qui de rebus inter nos et iacere puto suus in causa, id est in mensa. Levir meus, priusquam oppugnarent tempus quis, admonere dicitur. Credo quod idem mihi praesidium.",
            "url" : "https://twitter.com/"
        }
    ]
}

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last", "#workExperience").append((HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title)).replace("#", work.jobs[job].url))
		$(".work-entry:last", "#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last", "#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last", "#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}


var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "Nov 2014 - Dec 2014",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            "images": [
                "images/project1-img1.jpg",
                "images/project1-img2.jpg"
            ],
            "url" : "https://github.com/naier/frontend-nanodegree-resume"
        },
        {
            "title": "Project 2",
            "dates": "Jan 2014 - Jun 2014",
            "description": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ",
            "images": [
                "images/project2-img1.jpg",
                "images/project2-img2.jpg"
            ],
            "url" : "https://github.com/naier/create-your-own-adventure"
        }
    ]
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last", "#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url));
		$(".project-entry:last", "#projects").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last", "#projects").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		if(projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				$(".project-entry:last", "#projects").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
			}
		}
	}
}


bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
    
    name = name.trim().split(" ");
    name[0] = name[0].substr(0,1).toUpperCase() + name[0].substr(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    
    return name[0] + " " + name[1];
}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);