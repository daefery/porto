var app = angular.module("ferde", []);
app.controller("BaseController", function($scope) {

	$scope.username = "fery";
	$scope.position = [
		{ name:"Software Engineer" },
		{ name:"Business Analyst" },
		{ name:"System Analyst" }
	];
	$scope.social = [
		{icon:"facebook", link:"https://www.facebook.com/feryyp"},
		{icon:"twitter", link:"https://twitter.com/feryyp"},
		{icon:"instagram", link:"https://www.instagram.com/feryyp/"},
		{icon:"linkedin", link:"https://www.linkedin.com/in/feryyp/"}
	];

	
	$scope.about_desc = "I have a good working knowledge of many industry leading software applications such as Visual Studio, Sitecore, Sitefinity and SQLServer. I work to the highest standards and have an eye for detail with skills in development and organisation. Completing my course projects has taught me to provide originality and quality whilst successfully meeting deadlines. A versatile IT graduate, possessing strong motivational drive to succeed in the industry."+
						"Highly developed skills in problem identification and implementation of effective solutions. Comfortable with analysing and understanding data, working under time pressure and presenting myself in a professional manner. Excellent inter-personal communication and social skills built through extensive training with the so many culture. A friendly, mature and flexible individual with a proven entrepreneurial approach towards objectives and tasks.";

	$scope.profile = [
		{label:"Fullname", value:"Fery Yundara Putera"},
		{label:"Birth Date", value:"February 16, 1992"},
		{label:"Job", value:"IT Professional, .Net Developer, Software Developer, Backend Developer"},
		{label:"Website", value:"www.fyp.ferde.id"},
		{label:"Email", value:"feryyundaraputera@gmail.com"},
		{label:"Marital Status", value:"Married"}
	];

	$scope.personal_quality = [
		{name:"Confidence", value:"90"},
		{name:"Dedication", value:"85"},
		{name:"Accountable", value:"85"},
		{name:"Analytical", value:"80"},
		{name:"Diplomatic", value:"80"},
		{name:"Attentiveness", value:"85"}
	];

	$scope.language = [
		{name:"English", value:"80"},
		{name:"Bahasa", value:"100"}
	];
	$scope.skills = [
		{name:"C#", value:"90"},
		{name:"Javascript", value:"85"},
		{name:"AngularJS", value:"80"},
		{name:"ASP .NET MVC", value:"90"},
		{name:"SQL", value:"75"},
		{name:"Scrum", value:"75"},
		{name:"Business Analysis", value:"75"},
		{name:"Requirement Analysis", value:"75"},
		{name:"HTML5", value:"90"},
		{name:"Web Development", value:"85"},
		{name:"JQuery", value:"80"},
		{name:"PHP", value:"75"},
		{name:"Sitecore", value:"85"},
		{name:"Sitefinity", value:"85"},
		{name:"GIT Workflow", value:"90"},
		{name:"JIRA", value:"85"}
	];	

	$scope.work_experience = [
		{
			logo:"images/resume/xtremax.png",
			job:"Backend Developer",
			periode:"August 2016 - Present",
			company:"Xtremax Indonesia",
			desc:"<li>Create and develop maintainable software beautifully.</li>"+
			   "<li>Work in teams to analyze and resolve software development problems.</li>"+
			   "<li>Create and simplify technical documentation.</li>"+
			   "<li>Recommend and build future upgrades based on analytical issues.</li>"
		},
		{
			logo:"images/resume/etak.png",
			job:"Software Developer",
			periode:"January 2015 - June 2016",
			company:"Elephant Talk Corp",
			desc:"<li>Updates job knowledge by researching new internet/intranet technologies and software products, participating in educational opportunities, reading professional publications, maintaining personal networks, participating in professional organization.</li>"+
			   "<li>Designs and develops user interfaces to Internet/intranet applications by setting expectations and features priorities throughout development life cycle, determining design methodologies and tool sets, completing programming using languages and software products, designing and conducting tests.</li>"+
			   "<li>Defines site objectives by analyzing user requirements, envisioning system features and functionality. Perform programming work associated with the onboarding of new clients, or the maintenance of current.</li>"+
			   "<li>Monitor and perform routine tests on an assigned system and report results, plus offer solutions and minimizes our exposure and risk on project.</li>"
		},
		{
			logo:"images/resume/suzuki.png",
			job:".Net Developer",
			periode:"January 2014 - January 2015",
			company:"PT Suzuki Indomobil Motor",
			desc:"<li>Build web aplication for customers and sub-branch of suzuki.</li>"+
			   "<li>Learning about Suzuki framework for developing aplication.</li>"+
			   "<li>Team management training group.</li>"+
			   "<li>Research and analyze system need with current business process.</li>"
		},
	];

	$scope.education = [
		{
			logo:"images/resume/binus.png",
			major:"Information System",
			periode:"February 2014 - July 2017",
			campus:"University of Bina Nusantara",
			desc:"<tr>"+
				    "<th>GPA</th>"+
				  "</tr>"+
				  "<tr>"+
				    "<td>3.51</td>"+
				  "</tr>"+
				  "<tr>"+
				    "<th>Organization</th>"+
				  "</tr>"+
				  "<tr>"+
				  	"<td>"+
				    	"<ul class=\"disc\">"+
						   "<li>HIMSISFO (Himpunan Mahasiswa Sistem Informasi). </li>"+
						   "<li>BNEC (BINA NUSANTARA English Club).</li>"+
					   "</ul>"+
				    "</td>"+
				  "</tr>"
		},
		{
			logo:"images/resume/telkom.png",
			major:"Computer Engineering",
			periode:"September 2010 - September 2013",
			campus:"Telkom University",
			desc:"<tr>"+
				    "<th>GPA</th>"+
				  "</tr>"+
				  "<tr>"+
				    "<td>3.45</td>"+
				  "</tr>"+
				  "<tr>"+
				    "<th>Organization</th>"+
				  "</tr>"+
				  "<tr>"+
				  	"<td>"+
				    	"<ul class=\"disc\">"+
						   "<li>Sentra Kegiatan Islam (SKI).</li>"+
						   "<li>Students English Club.</li>"+
						   "<li>UKM Basketball.</li>"+
						   "<li>UKM Soccer.</li>"+
					   "</ul>"+
				    "</td>"+
				  "</tr>"
		}
	];
	$scope.training=[
		{name:"Penetration Testing", periode:"January 2017"},
		{name:"Sharepoint Development", periode:"November 2016"},
		{name:"Enterprise System Development", periode:"February 2014"},
		{name:"Soft skill, Ethic, Commitment and Career Roadmap", periode:"September 2013"},
		{name:"Business Process and Requirement Analysis", periode:"August 2013"},
		{name:"Desktop Based System Development Using Java and SQL Service", periode:"June 2013"},
		{name:"Logical Analysis Enrichment", periode:"May 2013"}
	];

	$scope.certified=[
		{name:"Certified Sitefinity Developer", periode:"November 2016"}
	];	

	$scope.projects=[
		{
			img:"images/portfolio/x-oneservice.png",
			job:"Backend Developer",
			name:"OneService",
			desc:"<p>OneService refers to a community of government agencies, Town Councils and citizens working together to address municipal matters and improve"+
				"the living environment for all. OneService also captures the mission of the Municipal Services Office (MSO) which aims to improve the Government’s"+
				"coordination of municipal services and promote community partnerships and civic responsibility to improve the living environment.</p>"+
				"<p>Build with : C#,	MVC, Sitecore.</p>",
			link:""
		},
		{
			img:"images/portfolio/x-sicc.png",
			job:"Backend Developer",
			name:"Singapore International Commercial Court",
			desc:"<p>Building on the success of Singapore’s arbitration sector, the SICC seeks to further boost Singapore’s value as a leading forum for legal services and international commercial dispute resolution, offering litigants the option of having their disputes adjudicated by a panel of experienced judges comprising specialist commercial judges from Singapore and international judges from both civil law and common law traditions.</p>",
			link:""
		},
		{
			img:"images/portfolio/x-sup.png",
			job:"Backend Developer",
			name:"Supreme Court",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		},
		{
			img:"images/portfolio/suzuki.png",
			job:".Net Developer",
			name:"Suzuki Dealer Management System",
			desc:"<ul class=\"disc\">"+
		       "<li><p>SDMS Web is a dealer application that to process all of transaction such sales, receiving , etc vehicle like motor bike and car all over Indonesia.</p></li>"+
			   "<li><p>SDMS Web is a dealer application that to process all of transaction such sales, receiving , etc vehicle like motor bike and car all over Indonesia.</p></li>"+
			   "<li><p>Developed using Suzuki own semi SAP framework, with C# MVC4 .NET, Angular.js. Interfaces CSS3, Boostrap, Kendo. And Sql Server for Database.</p></li>"+
			   "<li><p>Responsible on module Master Service, Receiving Sparepart, ClosePeriod Sparepart, Utility Sparepart.</p></li>"+
		   	"</ul>",
			link:""
		},
		{
			img:"images/portfolio/scm.jpg",
			job:"Business Analysis, System Analysis, Fullstack Developer",
			name:"E-SCM",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		},
		{
			img:"images/portfolio/selfcare.jpg",
			job:"Software Developer",
			name:"Self Care",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		},
		{
			img:"images/portfolio/wedding.jpg",
			job:"Fullstack Developer",
			name:"Ferde Wedding",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		},
		{
			img:"images/portfolio/csr.jpg",
			job:"Software Developer",
			name:"CSR",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		}
	];

});