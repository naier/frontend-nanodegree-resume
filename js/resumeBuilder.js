var bio = {
    "name": "Narayanan Aier",
    "role": "Web Developer",
    "contacts": [
        {
            "mobile": "123-123-1234",
            "email": "webdev@nanodegree.com",
            "github": "naier",
            "location": "Orange County, CA"
        }
    ],
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "biopic": "images/me.jpg"
}

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts[0].mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts[0].email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts[0].github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts[0].location));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
	}
}


var education = {
    "schools": [
        {
            "name": "Master's University",
            "location": "Master's City",
            "degree": "Master's",
            "majors": [
                "Electrical Engineering"
            ],
            "dates": 2009,
            "url": "http://www.google.com"
        },
        {
            "name": "Bachelor's University",
            "location": "Bachelor's City",
            "degree": "Bachelor's",
            "majors": [
                "Electrical Engineering"
            ],
            "dates": 2008,
            "url": "http://www.google.com"
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
		$(".education-entry:last", "#education").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last", "#education").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last", "#education").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last", "#education").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", ")));
	}

	$("#education").append(HTMLonlineClasses);
	for (var onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
		$("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date));
		$("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
	}
}

var work = {
    "jobs": [
        {
            "employer": "Employer ABC",
            "title": "Senior Web Developer",
            "location": "Orange County, CA",
            "dates": "Mar 2012  - Present",
            "description": "Quinquaginta septem est - pars tua, triginta quinque millia. Est autem extra plus quindecim, tota tua est, quom meruisset. Fac nos fecit. SIC. Puto quia una res potest - venimus in cognitionem. Vide pretium in manibus. Sed finge iustum faciens quod qualibet septimana. SIC. Duis duas libras triginta quinque milia pondo."
        },
        {
            "employer": "Employer XYZ",
            "title": "Web Developer",
            "location": "Orange County, CA",
            "dates": "Aug 2009 - Feb 2012",
            "description": "Ille vivere. Ut ad te quaerebam ... purgare caeli. Sunt uh ... nonnullus propter errorem qui de rebus inter nos et iacere puto suus in causa, id est in mensa. Levir meus, priusquam oppugnarent tempus quis, admonere dicitur. Credo quod idem mihi praesidium."
        }
    ]
}

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last", "#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
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
            ]
        },
        {
            "title": "Project 2",
            "dates": "Jan 2014 - Jun 2014",
            "description": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ",
            "images": [
                "images/project2-img1.jpg",
                "images/project2-img2.jpg"
            ]
        }
    ]
}

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last", "#projects").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
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