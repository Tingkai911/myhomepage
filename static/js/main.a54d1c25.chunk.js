(this.webpackJsonpmyhomepage=this.webpackJsonpmyhomepage||[]).push([[0],{25:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),o=(t(25),t(12)),c=t(8),s=t(1),m=t(13);var d=function(e){var a=Object(m.a)(e.backgroundImage),t=Object(n.useState)({backgroundImage:"url(".concat(a[0],")")}),l=Object(o.a)(t,2),i=l[0],c=l[1];function s(a){var t=a.target.dataset.value;e.setTheme(t),d(t)}function d(e){c("dark"==e?{backgroundImage:"url(".concat(a[1],")")}:"blue"==e?{backgroundImage:"url(".concat(a[2],")")}:"purple"==e?{backgroundImage:"url(".concat(a[3],")")}:{backgroundImage:"url(".concat(a[0],")")})}function u(e){document.getElementById(e.target.dataset.value).scrollIntoView(!0)}return Object(n.useEffect)((function(){d(localStorage.getItem("theme"))}),[]),r.a.createElement("section",{id:"top",style:i,className:"s1"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"greeting-wrapper"},r.a.createElement("h1",null,"Hi, I'm ",e.data.name)),r.a.createElement("div",{className:"intro-wrapper"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"dots-wrapper"},r.a.createElement("div",{id:"dot-1",className:"browser-dot"}),r.a.createElement("div",{id:"dot-2",className:"browser-dot"}),r.a.createElement("div",{id:"dot-3",className:"browser-dot"})),r.a.createElement("ul",{id:"navigation"},r.a.createElement("li",null,r.a.createElement("span",{onClick:u,"data-value":"about",className:"link",style:{marginRight:20}},"About")),r.a.createElement("li",null,r.a.createElement("span",{onClick:u,"data-value":"contact",className:"link",style:{marginRight:20}},"Contact")),r.a.createElement("li",null,r.a.createElement("span",{onClick:u,"data-value":"portfolio",className:"link"},"Projects")))),r.a.createElement("div",{className:"left-column"},r.a.createElement("img",{id:"profile-pic",src:e.profilepic,alt:"My Profile"}),r.a.createElement("h5",{style:{textAlign:"center",lineHeight:0}},"Personalize Theme"),r.a.createElement("div",{id:"theme-options-wrapper"},r.a.createElement("div",{onClick:s,"data-value":"default",id:"light-mode",className:"theme-dot"}),r.a.createElement("div",{onClick:s,"data-value":"dark",id:"dark-mode",className:"theme-dot"}),r.a.createElement("div",{onClick:s,"data-value":"blue",id:"blue-mode",className:"theme-dot"}),r.a.createElement("div",{onClick:s,"data-value":"purple",id:"purple-mode",className:"theme-dot"})),r.a.createElement("p",{id:"settings-note"},"*Theme settings will be saved for ",r.a.createElement("br",null)," your next visit")),r.a.createElement("div",{className:"right-column"},r.a.createElement("div",{id:"preview-shadow"},r.a.createElement("div",{id:"preview"},r.a.createElement("div",{id:"corner-tl",className:"corner"}),r.a.createElement("div",{id:"corner-tr",className:"corner"}),r.a.createElement("h3",null,"What I Do"),r.a.createElement("p",null,e.data.whatido),r.a.createElement("div",{id:"corner-br",className:"corner"}),r.a.createElement("div",{id:"corner-bl",className:"corner"})))))))};var u=function(e){var a=Object(m.a)(e.data.upTo10Skills),t=a.splice(a.length/2,a.length/2),n=a.map((function(e,a){return r.a.createElement("li",{key:a},e)})),l=t.map((function(e,a){return r.a.createElement("li",{key:a},e)}));return r.a.createElement("section",{className:"s2"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("div",{id:"about",className:"about-me"},r.a.createElement("h4",null,"More about me"),r.a.createElement("p",null,e.data.moreAboutMe1),r.a.createElement("p",null,e.data.moreAboutMe2),r.a.createElement("hr",null),r.a.createElement("h4",null,"TOP EXPERTISE"),r.a.createElement("p",null,e.data.topExpertise,": ",r.a.createElement("a",{href:e.resume,target:"_blank",rel:"noopener noreferrer"},"Download Resume")),r.a.createElement("div",{id:"skills"},r.a.createElement("ul",null,n),r.a.createElement("ul",null,l))),r.a.createElement("div",{id:"contact",className:"social-links"},r.a.createElement("img",{id:"social-img",src:e.image,alt:"My Social Page"}),r.a.createElement("h3",null,"Contact Me"),r.a.createElement("span",null,r.a.createElement("a",{href:e.data.contactMe.linkedin,target:"_blank",rel:"noopener noreferrer"},"Linkedin: @",e.data.contactMe.linkedinUsername)),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:e.data.contactMe.twitter,target:"_blank",rel:"noopener noreferrer"},"Twitter: @",e.data.contactMe.twitterUsername)),r.a.createElement("br",null),r.a.createElement("span",null,"Email: ",e.data.contactMe.email," "),r.a.createElement("br",null),r.a.createElement("span",null,"Mobile: ",e.data.contactMe.mobile)))))};var p=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"post"},r.a.createElement("img",{className:"thumbnail",src:e.screenshot,alt:"Project Screenshot"}),r.a.createElement("div",{className:"post-preview"},r.a.createElement("h6",{className:"post-title"},e.data.projectTitle),r.a.createElement("p",{className:"post-intro"},e.data.projectIntro),r.a.createElement(c.b,{to:"/projectdetail/".concat(e.id)},r.a.createElement("span",{onClick:function(){var e=document.getElementById("project-detail");null!=e&&e.scrollIntoView()},className:"link"},"Read More")))))},g=t.p+"static/media/githubicon.38ecca95.png";var h=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"white"},className:"post"},r.a.createElement("img",{style:{display:"block",width:"85%",height:"85%",margin:"auto",marginTop:3,marginBottom:3,objectFit:"contain"},src:g,alt:"GitHub Icon"}),r.a.createElement("div",{className:"post-preview"},r.a.createElement("h6",{className:"post-title"},"View my other projects at GitHub"),r.a.createElement("p",{className:"post-intro"}),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"link"},"To GitHub")))))};var b=function(e){var a=e.data.map((function(a,t){return r.a.createElement(p,{key:t,id:t,data:a,screenshot:e.screenshots[t]})}));return r.a.createElement("section",{id:"portfolio",className:"s1"},r.a.createElement("div",{className:"main-container"},r.a.createElement("h3",{style:{textAlign:"center"}},"Some of my past projects"),r.a.createElement("div",{className:"post-wrapper"},a,r.a.createElement(h,{link:e.github}))))};var E=function(e){var a=Object(n.useRef)(null);Object(n.useEffect)((function(){var e;e=a,window.scrollTo(0,e.current.offsetTop)}),[]);var t=e.data.technologiesUsed.map((function(e,a){return r.a.createElement("li",{key:a},"- ",e)})),l="";function i(e){document.getElementById(e.target.dataset.value).scrollIntoView(!0)}return e.data.disclaimer&&(l="*".concat(e.data.disclaimer)),r.a.createElement("section",{className:"s2"},r.a.createElement("div",{className:"postdetail-wrapper"},r.a.createElement("div",{ref:a,id:"project-detail",tabIndex:"0",className:"nav-wrapper"},r.a.createElement(c.b,{to:"/"},r.a.createElement("div",{className:"dots-wrapper"},r.a.createElement("div",{id:"dot-1",className:"browser-dot"}),r.a.createElement("div",{id:"dot-2",className:"browser-dot"}),r.a.createElement("div",{id:"dot-3",className:"browser-dot"}))),r.a.createElement("ul",{id:"navigation"},r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"about",className:"link",style:{marginRight:20}},"About")),r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"contact",className:"link",style:{marginRight:20}},"Contact")),r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"portfolio",className:"link"},"Projects")))),r.a.createElement("div",{className:"main-container"},r.a.createElement("br",null),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"project-screenshot",alt:"Project Screenshots",src:e.screenshots.image,style:{maxWidth:e.screenshots.maxWidth,maxHeight:e.screenshots.maxHeight}})),r.a.createElement("h3",null,e.data.projectTitle),r.a.createElement("p",null,e.data.paragraph1),r.a.createElement("p",null,e.data.paragraph2),r.a.createElement("p",null,e.data.paragraph3),r.a.createElement("h5",null,"Technologies:"),r.a.createElement("ul",null,t),r.a.createElement("br",null),r.a.createElement("a",{href:e.data.githubLink,className:"project-link",target:"_blank",rel:"noopener noreferrer"},"Link to GitHub Repository"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:e.data.hostLink,className:"project-link",target:"_blank",rel:"noopener noreferrer"},"Try it out here"),r.a.createElement("p",{className:"project-disclaimer"},l)),r.a.createElement("br",null),r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{id:"navigation"},r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"about",className:"link",style:{marginRight:20}},"About")),r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"contact",className:"link",style:{marginRight:20}},"Contact")),r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"portfolio",className:"link",style:{marginRight:20}},"Projects")),r.a.createElement("li",null,r.a.createElement("span",{onClick:i,"data-value":"top",className:"link"},"Back To Top"))))))};var v=function(e){return r.a.createElement("section",{className:"s2"},r.a.createElement("div",{className:"main-container footer"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("span",{onClick:function(e){document.getElementById(e.target.dataset.value).scrollIntoView(!0)},"data-value":"top",className:"link"},"Back To Top")),r.a.createElement("p",{id:"settings-note"},"This homepage is build using React by ",r.a.createElement("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer"},e.name),". Project Repository can be found ",r.a.createElement("a",{href:e.repository,target:"_blank",rel:"noopener noreferrer"},"here"),".")))},f=(t(31),t(6)),k=t.p+"static/media/white-header-background.9cfbadde.jpg",w=t.p+"static/media/black-header-background.3b9d0a7b.jpg",N=t.p+"static/media/blue-header-background.033099da.jpg",y=t.p+"static/media/purple-header-background.82d06fcc.jpg",j=t.p+"static/media/profilepic.bdd4fc20.png",S=t.p+"static/media/resume.b2989e20.pdf",I=t.p+"static/media/follow.bfcf6a6c.jpg",T=t.p+"static/media/cs50blog.c595e6d1.jpg",C=t.p+"static/media/memegenerator.7f9d321b.jpg",A=t.p+"static/media/githubjobs2.656b9bbf.jpg",M=t.p+"static/media/cs50blog2.fd8902ef.jpg",x=t.p+"static/media/githubjobs.e4d27503.jpg",H=[T,C,A],P=[{image:M,maxWidth:2e3,maxHeight:1e3},{image:C,maxWidth:800,maxHeight:1e3},{image:x,maxWidth:800,maxHeight:1e3}],R=[k,w,N,y];var G=function(){var e=Object(n.useState)("default"),a=Object(o.a)(e,2),t=a[0],l=a[1];function i(e){l(e),localStorage.setItem("theme",e)}return Object(n.useEffect)((function(){var e=localStorage.getItem("theme");i(null==e?"default":e)}),[]),r.a.createElement("div",{className:t},r.a.createElement(c.a,{basename:"/"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(d,{setTheme:i,backgroundImage:R,profilepic:j,data:f.heading}),r.a.createElement(u,{resume:S,image:I,data:f.about}),r.a.createElement(b,{screenshots:H,data:f.project,github:f.about.github}),r.a.createElement(s.a,{path:"/projectdetail/:id",render:function(e){return r.a.createElement(E,{screenshots:P[e.match.params.id],data:f.project[e.match.params.id],key:e.match.params.id,id:e.match.params.id})}}),r.a.createElement(v,{name:f.heading.name,linkedin:f.about.contactMe.linkedin,repository:f.homepageRepository}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"heading":{"name":"Ting Kai Chua","whatido":"A hobbyist developer working towards becoming a full-time software engineer."},"about":{"moreAboutMe1":"I build new projects just to tickle my brain & learn about new technologies.","moreAboutMe2":"Graduated from NUS Bachelor of Electrical Engineering in 2019. Worked as a Marketing & Sales Engineer for a year. Currently studying at NUS-ISS Graduate Diploma in System Analysis.","topExpertise":"Fullstack developer who is familiar with different technologies","upTo10Skills":["Python","Django","JavaScript","React","Express/Node.js","C/C#","ASP.NET Core","Java","SQL(SQL Server/MySQL)","MongoDB"],"contactMe":{"linkedin":"https://www.linkedin.com/in/ting-kai-chua-196211189/","linkedinUsername":"Ting Kai Chua","twitter":"https://twitter.com/TingKaiChua","twitterUsername":"TingKaiChua","email":"tingkai911@gmail.com","mobile":"+65 9088 9681"},"github":"https://github.com/Tingkai911"},"project":[{"projectTitle":"CS50 Blog","projectIntro":"An functioninal blogging website build using Django, HTML/CSS with Bootstrap 4.","paragraph1":"This was a project I build in 2020 when I first learned the basics of programming and web design from Havard\'s CS50x. This was the project that get me interested in Full Stack Web Development. I build CS50 Blog to mimic the common functionalities that modern blogging and social media webpages can do.","paragraph2":"User can view the blog posts without creating an account. Creating an account allows users to create their own blog posts, create a customise profile (such as uploading their own profile picture and toggle between light/dark mode), leave like/dislike and comments on other users\'s blog posts. There is also a password reset option in case users forgets their password.","paragraph3":"CS50 Blog is currently hosted on Heroku with static files such as profile images of each user is stored in an AWS S3 bucket.","technologiesUsed":["Python","Django","HTML/CSS","Bootstrap 4","JavaScript","jQuery","Heroku","AWS (S3)"],"githubLink":"https://github.com/Tingkai911/CS50Blog","hostLink":"https://cs50-final-project-blog.herokuapp.com/","disclaimer":"Please allow a while for CS50 Blog to load as it is hosted on a free dyno on Heroku."},{"projectTitle":"Meme Generator","projectIntro":"A simple and easy to use Meme Generator build using React. Gets meme images from an API.","paragraph1":"This was a project I build to learn and experiment with the popular React Framework.","paragraph2":"Using JavaScript fetch(), the application get an array of images links from an API. We will choose the index by random to display a random meme image each time the user visit the webpage to make the experience more unpredictable and fun. Users are able to add their own text at the top and bottom rows to create their own meme. Users unsatisfied with the dankest of memes can press the \'Gen\' button to change to another random meme image.","paragraph3":"Meme Generator is currently hosted on GitHub Pages.","technologiesUsed":["JavaScript (API)","React","HTML/CSS"],"githubLink":"https://github.com/Tingkai911/react-meme-generator","hostLink":"https://tingkai911.github.io/react-meme-generator/","disclaimer":""},{"projectTitle":"Recreating GitHub Jobs page","projectIntro":"Using React and Axios library to recreate GitHub Jobs page with GitHub Jobs API.","paragraph1":"I build this project learn how to integrate APIs into an React Appilcation.","paragraph2":"GitHub API accepts parameters such as description, location, page and full_time as a query string. GitHub Jobs API also supports Pagination by returning 50 search results per API call for each page. Adding a query string may be tedious to do in vanilia JavaScript fetch() method. However, Axios library allows us to pass parameters along with the base URL of the API easily. A proxy server will have to be used to avoid CORS error.","paragraph3":"GitHub Jobs (recreated) is currently hosted on GitHub Pages.","technologiesUsed":["React","Axios","React Bootstrap"],"githubLink":"https://github.com/Tingkai911/github-jobs","hostLink":"https://tingkai911.github.io/github-jobs/","disclaimer":"More information about GitHub Jobs API: https://jobs.github.com/api"}],"homepageRepository":"https://github.com/Tingkai911/my-homepage"}')}},[[32,1,2]]]);
//# sourceMappingURL=main.a54d1c25.chunk.js.map