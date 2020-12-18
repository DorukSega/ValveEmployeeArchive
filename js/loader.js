function load() {
	if (localStorage.getItem('darkmodesave') === null) {
	darkmodecss.disabled = true;
	lightmode.disabled = false;	
	} else if (localStorage.getItem('darkmodesave') == "false"){
		darkmodecss.disabled = true;
		lightmode.disabled = false;
	} else if (localStorage.getItem('darkmodesave') == "true"){
	darkmodecss.disabled = false;
	lightmode.disabled = true;
	document.getElementById("pageico").src = "icons/veaback.png";
	document.getElementById("btndark").src = "icons/light.png";
}
}
function cleandesc(){
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Name";
	document.getElementById("work").innerHTML = "";
	document.getElementById("Desc").innerHTML = "Click on any developer to bring extra information.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function teddesc(){ //Ted Backman
	document.getElementById("profilepic").src = "developers/tedb.jpg";
	document.getElementById("Name").innerHTML = "Ted Backman";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "Ted Backman is art director, conceptual artist, illustrator, and animator who worked for Valve Softwre from 1996 to 2015. He designed most of the creatures for the Half-Life series, Portal series, L4D series and more";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function juliedesc(){ //Julie Bazuzi
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Julie Bazuzi";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "Julie Bazuzi is a product tester at Valve Software.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function yahndesc(){ //Yahn Bernier
	document.getElementById("profilepic").src = "developers/yahn.jpg";
	document.getElementById("Name").innerHTML = "Yahn Bernier";
	document.getElementById("work").innerHTML = "Valve Software";
	document.getElementById("Desc").innerHTML = "Yahn Bernier is a software engineer at Valve Software. Yahn has worked for Valve from 1998 to present.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Yahn%20Bernier";
	document.getElementById("mail").innerHTML = "yahn@valvesoftware.com";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/yahn-bernier-a752033/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function kendesc(){ //Ken Birdwell
	document.getElementById("profilepic").src = "developers/kenb.jpg";
	document.getElementById("Name").innerHTML = "Ken Birdwell";
	document.getElementById("work").innerHTML = "Magic Cabinet Foundation";
	document.getElementById("Desc").innerHTML = "Ken Birdwell is a software developer at Valve Software. He designed and implemented the skeletal animation system and many other engine components for Half-Life.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/ken-birdwell-95a9973/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function stevedesc(){ //Steve Bond
	document.getElementById("profilepic").src = "developers/stevebo.jpg";
	document.getElementById("Name").innerHTML = "Steve Bond";
	document.getElementById("work").innerHTML = "Valve Software";
	document.getElementById("Desc").innerHTML = "Steve Bond was a software developer, Game designer and engineer at Valve Software. He has worked for Valve from 1996 to 2012.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/steve-bond-86824628/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function coomerdesc(){ //Greg Coomer
	document.getElementById("profilepic").src = "developers/coomer.jpg";
	document.getElementById("Name").innerHTML = "Greg Coomer";
	document.getElementById("work").innerHTML = "Valve Software";
	document.getElementById("Desc").innerHTML = "Greg Coomer is a former game designer and art director at Valve Software.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Greg%20Coomer";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "https://twitter.com/gregcoomer";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.linkedin.com/in/gregcoomer/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function generic(){ // change generic here to small reference of the person like gabedesc for gabenewell. change every stuff inside "" what you wanna add
	document.getElementById("profilepic").src = "developers/notgiven.png"; //developer picture dont change it needs to be setup
	document.getElementById("Name").innerHTML = "Name"; //name
	document.getElementById("work").innerHTML = ""; //where the employee works at right now
	document.getElementById("Desc").innerHTML = "Description"; //small description, you can use wikipedia or valve software one
	document.getElementById("mail").href = ""; //mail link if exists
	document.getElementById("mail").innerHTML = "Not Given"; //mail text
	document.getElementById("twitter").href = ""; //twitter link
	document.getElementById("twitter").innerHTML = "Twitter";  //dont change this
	document.getElementById("website").href = ""; //website/portfolio link
	document.getElementById("website").innerHTML = "Website"; // Website/portfolio Title, use just website if there is no title
}
function GabeDesc(){ //Gabe Newell
	document.getElementById("profilepic").src = "developers/gabe.jpg";
	document.getElementById("Name").innerHTML = "Gabe Newell";
	document.getElementById("work").innerHTML = "Valve Software";
	document.getElementById("Desc").innerHTML = "Gabe Logan Newell (born November 3, 1962), commonly known by his nickname Gaben, is an American computer programmer and businessman best known as the co-founder of the video game developer and digital distribution company Valve. Born in Colorado, he attended Harvard University in the early 1980s, but dropped out and worked for Microsoft, where he worked as a producer for some of the early Windows operating systems. While still working at the company during the mid-1990s, Newell and his co-worker Mike Harrington became convinced that video games were the future of entertainment after playing id Software's Doom and Quake. Intrigued by the prospect of having their own game development studio, Newell and Harrington left Microsoft in 1996 to found Valve, where Newell remains president.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Gabe%20Newell";
	document.getElementById("mail").innerHTML = "gaben@valvesoftware.com";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function KellyDesc(){ //Kelly Bailey
	document.getElementById("profilepic").src = "developers/kelly.jpg";
	document.getElementById("Name").innerHTML = "Kelly Bailey";
	document.getElementById("work").innerHTML = "IndiMo Labs";
	document.getElementById("Desc").innerHTML = "Kelly Bailey is a composer, musician and programmer. He was the senior game designer of sound and music at Valve until he left in 2011 with Mike Dussault to concentrate on their project, Sunspark Labs LLC. In 2016, he has created his own video game company, IndiMo Labs, and he solo developed Vanishing Realms: Rite of Steel, a virtual reality video game with RPG elements for the HTC Vive.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "http://vanishingrealms.com/index.html";
	document.getElementById("website").innerHTML = "Vanishing Realms";
}
function DarioDesc(){ //Dario Casali
	document.getElementById("profilepic").src = "developers/dario.jpg";
	document.getElementById("Name").innerHTML = "Dario Casali";
	document.getElementById("work").innerHTML = "Valve Software";
	document.getElementById("Desc").innerHTML = "Dario started designing levels for Doom while he was studying economics at the University of Oxford in England. After building Final Doom: The Plutonia Experiment with his brother, he joined Valve where he discovered that it was actually possible to have a career in games. Upon graduating from Oxford in 1996, he decided that the finance world would just have to wait. After all these years in the U.S., Dario still stubbornly refuses to give up his accent, and happily endures being the subject of British jokes on a daily basis.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Dario%20Casali";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function wescdesc(){ //Wes Cumberland
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Wes Cumberland";
	document.getElementById("work").innerHTML = "Google";
	document.getElementById("Desc").innerHTML = "Wes Cumberland is a programmer who worked at Valve as an intern software developer between September 1997 and December 1999.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/wescumberland/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function keneadesc(){ //Ken Eaton
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Ken Eaton";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "QA/Tester on Half-Life and Half-Life Blue Shift";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function mattesdesc(){ //Matt Eslick
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Matt Eslick";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "QA/Tester on Half-Life";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function johngutdesc(){ //John Guthrie
	document.getElementById("profilepic").src = "developers/johngut.jpg";
	document.getElementById("Name").innerHTML = "John Guthrie";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "Along with his buddy Steve Bond, John started Quake Command, the influential and popular Internet gaming site. John was also the co-creator of Quake Airplane and Quake Kart, and has constructed many of the chambers and corridors in Half-Life’s Black Mesa Research Center. Since joining Valve in 1997, John has designed levels for Half-Life, Half-Life 2, Team Fortress, Portal: Still Alive, and Portal 2.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/john-guthrie-2926b0";
	document.getElementById("website").innerHTML = "Linkedin";
}
function monalisadesc(){ //Mona Lisa Guthrie
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Mona Lisa Guthrie";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "Office Manager";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function mikehardesc(){ //Mike Harrington
	document.getElementById("profilepic").src = "developers/mikehar.jpg";
	document.getElementById("Name").innerHTML = "Mike Harrington";
	document.getElementById("work").innerHTML = "Amplion";
	document.getElementById("Desc").innerHTML = "Mike Harrington was the co-founder of the game development company, Valve Corporation and a lead programmer of the game Half-Life.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/mikehar/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function dhabibdesc(){ //Dhabih Eng
	document.getElementById("profilepic").src = "developers/dhabib.jpg";
	document.getElementById("Name").innerHTML = "Dhabih Eng";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Dhabih is a conceptual artist for Valve. Dhabib, has a degree in Interdisciplinary Art from the University of Washington. He started making a name for himself by doing freelance design work for gaming magazines (Electronic Gaming Monthly, Official Playstation Magazine, PC Gaming World) while still in school. Dhabih has also done web design and worked on the Quake2 TC pack Zaero from Team Evolve. He started at Valve by doing freelance work in mid-1998, and signed on full-time in early February of 1999.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Dhabih%20Eng";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "https://twitter.com/dhabiheng";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function monicahardesc(){ //Monica Harrington
	document.getElementById("profilepic").src = "developers/monicahar.jpg";
	document.getElementById("Name").innerHTML = "Monica Harrington";
	document.getElementById("work").innerHTML = "Unknown";
	document.getElementById("Desc").innerHTML = "Director of Business Development. Managed marketing and business development for Valve's debut product, Half-Life. Worked alongside co-founder Gabe Newell on strategic business initiatives, including Valve's digital distribution strategy.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "https://twitter.com/monicahar";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.linkedin.com/in/monicaharrington/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function brettjdesc(){ //Brett Johnson
	document.getElementById("profilepic").src = "developers/brettj.jpg";
	document.getElementById("Name").innerHTML = "Brett Johnson";
	document.getElementById("work").innerHTML = "Cat Daddy Games";
	document.getElementById("Desc").innerHTML = "Brett Johnson is a level designer and composer who worked for Valve from December 1996 to April 1999.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "http://www.brettjdesign.com/";
	document.getElementById("website").innerHTML = "Website";
}
function erikjdesc(){ //Erik Johnson
	document.getElementById("profilepic").src = "developers/erikj.jpg";
	document.getElementById("Name").innerHTML = "Erik Johnson";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Erik began his career as a shoe salesman and moved up to selling used cars. When he decided that the car business wasn't for him either, he took a job in Sierra Online's QA department. As one of Sierra's Half-Life testers, Erik spent a lot of time at Valve and we eventually offered him a job as shipping manager. Erik is now one of Valve's business development authorities.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Erik%20Johnson";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "https://twitter.com/erikatvalve";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.linkedin.com/in/erik-johnson-7993586/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function yazandesc(){ //Yazan Aldehayyat
	document.getElementById("profilepic").src = "developers/yazan.jpg";
	document.getElementById("Name").innerHTML = "Yazan Aldehayyat";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Yasan is a hardware engineer at Valve Software";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/aldehayyat/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function steveallensdesc(){ //Steve Allen
	document.getElementById("profilepic").src = "developers/notgiven.png";
	document.getElementById("Name").innerHTML = "Steve Allen";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Steve is a patent specialist at Valve Software.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/steve-allen-868b75a/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function mikeambdesc(){ //Mike Ambinder
	document.getElementById("profilepic").src = "developers/mikeamb.jpg";
	document.getElementById("Name").innerHTML = "Mike Ambinder";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Mike is a Principal Experimental Psychologist at Valve Software";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Mike%20Ambinder";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "https://twitter.com/mike_ambinder";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.linkedin.com/in/mike-ambinder-578aa89/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function matthewandesc(){ //Matthew An
	document.getElementById("profilepic").src = "developers/mathewan.jpg";
	document.getElementById("Name").innerHTML = "Matthew An";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Matthew An is a program manager at Valve Software.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/anmatthew/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function Lakulishdesc(){ //Lakulish Antani
	document.getElementById("profilepic").src = "developers/Lakulish.jpg";
	document.getElementById("Name").innerHTML = "Lakulish Antani";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Lakulish is responisible for Steam Audio, A cross-platform SDK for VR/AR audio.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/lakulish/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function maxardesc(){ //Max Aristov
	document.getElementById("profilepic").src = "developers/maxaristov.jpg";
	document.getElementById("Name").innerHTML = "Max Aristov";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Max is an artist at Valve Software";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.artstation.com/maxaristov";
	document.getElementById("website").innerHTML = "ArtStation";
}
function ricardodesc(){ //Ricardo Ariza
	document.getElementById("profilepic").src = "developers/ricardo.jpg";
	document.getElementById("Name").innerHTML = "Ricardo Ariza";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Ricardo Ariza is an artist at Valve Software";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/ricardo-ariza-4b0b76/";
	document.getElementById("website").innerHTML = "Linkedin";
}
function marcladesc(){ //Marc Laidlaw
	document.getElementById("profilepic").src = "developers/marcl.jpg";
	document.getElementById("Name").innerHTML = "Marc Laidlaw";
	document.getElementById("work").innerHTML = "Retired";
	document.getElementById("Desc").innerHTML = "Marc Laidlaw joined Valve in 1997, bringing his experience as an author of weird fiction to bear on creating the Half-Life storyline. He was sole writer on Half-Life and Half-Life 2, and lead writer for the Half-Life episodes. His novels include Dad's Nuke, Neon Lotus, The Orchid Eater, Kalifornia, and the award-winning The 37th Mandala.";
	document.getElementById("mail").href = "https://www.marclaidlaw.com/contact/";
	document.getElementById("mail").innerHTML = "mlaidlaw@gmail.com";
	document.getElementById("twitter").href = "https://twitter.com/marc_laidlaw";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.marclaidlaw.com/";
	document.getElementById("website").innerHTML = "Website";
}
function erikwdesc(){ //Erik Wolpaw
	document.getElementById("profilepic").src = "developers/ericw.jpg";
	document.getElementById("Name").innerHTML = "Erik Wolpaw";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Erik Wolpaw is an American video game writer. He and Chet Faliszek wrote the pioneering video game website Old Man Murray. He subsequently worked for game developers Double Fine Productions and Valve, and is known for his work on video games including Half-Life 2, Psychonauts, Portal, Portal 2 and Half-Life: Alyx.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "https://twitter.com/Wolpaw";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function chetfdesc(){ //Chet Faliszek
	document.getElementById("profilepic").src = "developers/chetf.jpg";
	document.getElementById("Name").innerHTML = "Chet Faliszek";
	document.getElementById("work").innerHTML = "Stray Bombay Company";
	document.getElementById("Desc").innerHTML = "Chet Faliszek is an American videogame writer that has worked for companies like Valve and Bossa Studios, having been involved in the story writing for series such as Half-Life, Portal, and Left 4 Dead.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Chet@straybombay.com";
	document.getElementById("twitter").href = "https://twitter.com/chetfaliszek";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.straybombay.com/";
	document.getElementById("website").innerHTML = "Stray Bombay Website";
}
function douglodesc(){ //Doug Lombardi
	document.getElementById("profilepic").src = "developers/douglo.jpg";
	document.getElementById("Name").innerHTML = "Doug Lombardi";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "VP of Marketing at Valve";
	document.getElementById("mail").href = "https://www.valvesoftware.com/en/contact?contact-person=Doug%20Lombardi";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/douglombardi/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function jaypdesc(){ //Jay Pinkerton
	document.getElementById("profilepic").src = "developers/jayp.jpg";
	document.getElementById("Name").innerHTML = "Jay Pinkerton";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Jay Pinkerton is a Video Game Writer at Valve Software. He co-wrote Valve's Portal 2, Left 4 Dead, Left 4 Dead 2, Team Fortress 2, various VR titles, as well as over 40 game updates and animated shorts).";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/jay-pinkerton-1b65352/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function mattwooddesc(){ //Matt T. Wood
	document.getElementById("profilepic").src = "developers/matttwood.jpg";
	document.getElementById("Name").innerHTML = "Matt T. Wood";
	document.getElementById("work").innerHTML = "Double Dagger Studio";
	document.getElementById("Desc").innerHTML = "Matt was a Level Designer at Valve. He was the founding member of Counter-Strike: Global Offensive and worked on projects such as Left 4 Dead, Portal and Half-Life. He is currently working on a indie game project called Little Kitty Big City.";
	document.getElementById("mail").href = "mailto:matttwood@doubledaggerstudio.com";
	document.getElementById("mail").innerHTML = "matttwood@doubledaggerstudio.com";
	document.getElementById("twitter").href = "https://twitter.com/matttwood";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.doubledaggerstudio.com/";
	document.getElementById("website").innerHTML = "Website";
}
function viktordesc(){ //Viktor Antonov
	document.getElementById("profilepic").src = "developers/viktor.jpg";
	document.getElementById("Name").innerHTML = "Viktor Antonov";
	document.getElementById("work").innerHTML = "Retired";
	document.getElementById("Desc").innerHTML = "Viktor Antonov was a Art Designer at Valve. He was the main art designer at projects such as Half-Life 2, Dishonored and Crossing. He was very influential to the Game and Art Design Industry, mostly focusing on design styles that represent the effect of industrialism and modernism.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "https://twitter.com/VAntonov72";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "https://www.linkedin.com/in/viktor-antonov-7bb500167/";
	document.getElementById("website").innerHTML = "LinkedIn";
}
function adriandesc(){ //Adrian Finol
	document.getElementById("profilepic").src = "developers/adrian.jpg";
	document.getElementById("Name").innerHTML = "Adrian Finol";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Adrian Finol is a senior programmer at Valve Corporation. He is known with his work on Dota 2.";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "https://twitter.com/Flargenstow";
	document.getElementById("twitter").innerHTML = "Twitter";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}
function aarondesc(){ //Aaron Barber
	document.getElementById("profilepic").src = "developers/aaron.jpg";
	document.getElementById("Name").innerHTML = "Aaron Barber";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "Aaron got his first taste of creating 3D environments while he was studying engineering at UCLA. He was building VRML websites for the university, and also started designing levels for several internet mods. His level design skills landed him a job at Xatrix Entertainment where he worked on Redneck Rampage, Quake 2, and Kingpin before joining Valve in 1999 to work on Half-Life 2.";
	document.getElementById("mail").href = "https://www.valvesoftware.com/tr/contact?contact-person=Aaron%20Barber";
	document.getElementById("mail").innerHTML = "Mail";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "https://www.linkedin.com/in/aaron-barber-2115b1";
	document.getElementById("website").innerHTML = "Linkedin";
}
function kerryddesc(){ //Kerry Davis
	document.getElementById("profilepic").src = "developers/kerrydavis.jpg";
	document.getElementById("Name").innerHTML = "Kerry Davis";
	document.getElementById("work").innerHTML = "Valve";
	document.getElementById("Desc").innerHTML = "";
	document.getElementById("mail").href = "";
	document.getElementById("mail").innerHTML = "Not Given";
	document.getElementById("twitter").href = "";
	document.getElementById("twitter").innerHTML = "Not Given";
	document.getElementById("website").href = "";
	document.getElementById("website").innerHTML = "Not Given";
}