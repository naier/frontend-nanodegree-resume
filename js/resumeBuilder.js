///$("#main").append("Narayanan Aier");

/*var awesomeThoughts = "I am Narayanan and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/

var name = "Narayanan Aier";
var role = "Web Developer";

var bio = {
	"name" : name,
	"role" : role,
	"contact" : {
		"email" : "web.dev@gmail.com",
		"mobile" : "940-197-1887",
		"location" : "Orange County, CA"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Welcome to Narayanan's Resume Page",
	"skills" : ["HTML", "CSS", "JavaScript"]
};

var work = {
	"currentPosition" : "Student",
	"currentEmployer" : "Self",
	"yearsWorked" : "5 years",
	"workCity" : "Brea, CA"
};

var education = {};

education["schoolName"] = "XYZ University";
education["yearsAttended"] = "2008 - 2009";
education["schoolCity"] = "Brea, CA";

var educationJSON = {
	"schools": [
	{
		"name" : "Master's Universiy",
		"city" : "Master's City",
		"degree" : "Masters",
		"major" : "Electrical Engineeering",
		"yearGraduated" : "2009"
	},
	{
		"name" : "Bachelor's University",
		"city" : "Bachelor's City",
		"degree" : "Bachelors",
		"major" : "Electrical Engineeering",
		"yearGraduated" : "2008"
	}
	],
	"onlineCourses": [
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"date" : "2014"
	},
	{
		"title" : "Introduction to HTML and CSS",
		"school" : "Udacity",
		"date" : "2014"
	}
	]
}

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskillsStart + HTMLskills.replace("%data%", bio.skills);

var formattedWorkPosition = HTMLworkTitle.replace("%data%", work["currentPosition"]);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkPosition);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);