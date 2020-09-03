const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// select nav bars anchor tag list
let navItem=document.querySelectorAll('a'); 
//assign nav Item value from siteContent object
navItem[0].textContent=siteContent.nav["nav-item-1"];
navItem[1].textContent=siteContent.nav["nav-item-2"];
navItem[2].textContent=siteContent.nav["nav-item-3"];
navItem[3].textContent=siteContent.nav["nav-item-4"];
navItem[4].textContent=siteContent.nav["nav-item-5"];
navItem[5].textContent=siteContent.nav["nav-item-6"];
console.log(document);

//select h1 tag and assign textContent 
let h1=document.querySelector('h1');
h1.textContent= siteContent.cta.h1;

//select button in cta-text class
let startButton=document.querySelector('.cta-text button');
startButton.textContent=siteContent.cta.button;

//select img id cta-img
let ctaImg=document.getElementById('cta-img');
ctaImg.src=siteContent.cta["img-src"];
ctaImg.alt="Image of a code snippet.";

//select all h1 from  class main-content top-content text-content list - this has =>> Feature and About sections//

let topContenth4=document.querySelectorAll('.main-content .top-content .text-content h4')
//Assign value from main-content key-value property
topContenth4[0].textContent= siteContent["main-content"]["features-h4"];
topContenth4[1].textContent= siteContent["main-content"]["about-h4"];

//select all p from class main-content top-content text-content list - this has the detail para for=>> Feature and About sections//

let topContentp=document.querySelectorAll('.main-content .top-content .text-content p')
topContentp[0].textContent=siteContent["main-content"]["features-content"];
topContentp[1].textContent=siteContent["main-content"]["about-content"];

//select the middle image 
let midImg=document.getElementById('middle-img');
midImg.src=siteContent["main-content"]["middle-img-src"];
/*Bottom Content*/
/* select the bottom content h4 and assign text*/
let bottomContentH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

/* select the bottom content para and assign text*/
let bottomContentp = document.querySelectorAll('.main-content .bottom-content .text-content p');

bottomContentp[0].textContent = siteContent["main-content"]["services-content"];
bottomContentp[1].textContent = siteContent["main-content"]["product-content"];
bottomContentp[2].textContent = siteContent["main-content"]["vision-content"];

//contact info - select h4 from contact class and assign value

let contacth4=document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];

// contact info - select p from contact class and assign value

let contactp=document.querySelectorAll('.contact p');
contactp[0].textContent=siteContent.contact.address;
contactp[1].textContent=siteContent.contact.phone;
contactp[2].textContent=siteContent.contact.email;
 

//footer info - select footer p

let footerp=document.querySelector('footer p');
footerp.textContent=siteContent.footer.copyright;



