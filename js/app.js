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
			desc:"<li>Provided continued maintenance and development of bug fixes and patch sets for existing web applications.</li>"+
			   "<li>Developed and implemented complex Internet and Intranet applications on multiple platforms.</li>"+
			   "<li>Established compatibility with third party software products by developing program for modification and integration.</li>"+
			   "<li>Designed strategic plan for component development practices to support future projects.</li>"+
			   "<li>Recommended architectural improvements, design solutions and integration solutions.</li>"
		},
		{
			logo:"images/resume/etak.png",
			job:"Software Developer",
			periode:"January 2015 - June 2016",
			company:"Elephant Talk Corp",
			desc:"<li>Implemented innovative systems for data collection, storage and management of customer orders.</li>"+
			   "<li>Maintained existing applications and designed and delivered new applications.</li>"+
			   "<li>Engineered configuration server in c# to reconfigure Mobile Number Portability .</li>"+
			   "<li>Evaluated potential software products based on new and existing system development and migration requirements.</li>"+
			   "<li>Developed object-oriented software, including CSR & Self Care.</li>"
		},
		{
			logo:"images/resume/suzuki.png",
			job:".Net Developer",
			periode:"January 2014 - January 2015",
			company:"PT Suzuki Indomobil Motor",
			desc:"<li>Collaborated with product management to design, build and test systems.</li>"+
			   "<li>Maintained existing applications and designed and delivered new applications.</li>"+
			   "<li>Debugged and modified software components.</li>"+
			   "<li>Modified existing software to correct errors, adapt to new hardware and improve performance.</li>"+
			   "<li>Developed object-oriented software, including Suzuki Dealer Management System(SDMS).</li>"
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
			img:"images/portfolio/x-oneservice.jpg",
			job:"Backend Developer",
			name:"OneService",
			desc:"<p>OneService refers to a community of government agencies, Town Councils and citizens working together to address municipal matters and improve"+
				"the living environment for all. OneService also captures the mission of the Municipal Services Office (MSO) which aims to improve the Government’s"+
				"coordination of municipal services and promote community partnerships and civic responsibility to improve the living environment.</p>"+
				"<p>Build with : C#,	MVC, Sitecore.</p>",
			link:""
		},
		{
			img:"images/portfolio/x-sicc.jpg",
			job:"Backend Developer",
			name:"Singapore International Commercial Court",
			desc:"<p>Building on the success of Singapore’s arbitration sector, the SICC seeks to further boost Singapore’s value as a leading forum for legal services and international commercial dispute resolution, offering litigants the option of having their disputes adjudicated by a panel of experienced judges comprising specialist commercial judges from Singapore and international judges from both civil law and common law traditions.</p>",
			link:""
		},
		{
			img:"images/portfolio/x-sup.jpg",
			job:"Backend Developer",
			name:"Supreme Court",
			desc:"<p>The Supreme Court consists of the High Court and the Court of Appeal and hears both criminal and civil cases.</p>"+
			  "<p>Build with : C#,	ASP .NET, Sitefinity.</p>",
			link:""
		},
		{
			img:"images/portfolio/suzuki.jpg",
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
			desc:"<p>E-SCM system to help company to manage their distribution flow better than before and also help strengthen the"+
				"company’s relationship with their bussiness partners. The methods used were System Development Life Cycle"+
				"(SDLC) to analyze the details of current system which currently handle the company’s business process. Lean"+
				"SCM also being used to develop a newer supply chain management scheme as a reference object in creating a"+
				"new set of strategies related to inventory management and optimization of suppliers network.</p>",
			link:""
		},
		{
			img:"images/portfolio/selfcare.jpg",
			job:"Software Developer",
			name:"Self Care",
			desc:"<p>ET SelfCare is one of service that let subscribers self-manage their subscriptions and accounts."+
			"The assigned task is researching the user authentication which uses MembershipReboot (deal with how to create secure login), creating template page, implementing the result of reseach, refactoring, defect fixing. This project is very challenging because this the first time for me to implement many new technologies and combine it.</p>",
			link:""
		},
		// {
		// 	img:"images/portfolio/wedding.jpg",
		// 	job:"Fullstack Developer",
		// 	name:"Ferde Wedding",
		// 	desc:"<p>Wedding</p>",
		// 	link:""
		// },
		{
			img:"images/portfolio/csr.jpg",
			job:"Software Developer",
			name:"CSR",
			desc:"<p>ET CSR is to be used in a call center, particularly by MVNO (Mobile Virtual Network Operator) Service Desk. Those system built as the generic system which means it can be used by many MVNOs."+
			"The assigned task is researching the user authentication which uses MembershipReboot (deal with how to create secure login), creating template page, implementing the result of reseach, refactoring, defect fixing. This project is very challenging because this the first time for me to implement many new technologies and combine it.</p>",
			link:""
		}
	];

	$scope.interest = "I loved to collaborate with team to find and solve the problem, that satisfy my self when the problem is solved and we can delivery the project successfully. Sometime I really enjoy to explore new technology to develop my skills. Last but not least, I also make my self comfortable in work environment with my hobbies such as music, gaming, socialize, reading and sports.";

});