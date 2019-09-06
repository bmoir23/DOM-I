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

let ctapic = document.getElementById('cta-img');
ctapic.setAttribute('src' , siteContent["cta"]["img-src"])

let middleimg = document.getElementById("middle-img");
middleimg.setAttribute('src' , siteContent["main-content"]["middle-img-src"])


//  NAV

let navLinks = document.getElementsByTagName('a');
navLinks[0].textContent ='Services';
navLinks[1].textContent ='Product';
navLinks[2].textContent ='Vision';
navLinks[3].textContent ='Features';
navLinks[4].textContent ='About';
navLinks[5].textContent ='Contact';

// cta content

let ctatext = document.querySelector(".cta h1");
ctatext.textContent = siteContent["cta"]["h1"]

let ctabtn = document.querySelector(".cta button");
ctabtn.textContent = siteContent["cta"]["button"]

// main content 

// top content

let toph4 = document.querySelectorAll(".top-content .text-content h4");
toph4[0].textContent = siteContent["main-content"]["features-h4"]
toph4[1].textContent = siteContent["main-content"]["about-h4"]

let toptext = document.querySelectorAll(".top-content .text-content p");
toptext[0].textContent = siteContent["main-content"]["features-content"]
toptext[1].textContent = siteContent["main-content"]["about-content"]

// bottom content

let midh4 = document.querySelectorAll(".bottom-content .text-content h4");
midh4[0].textContent = siteContent["main-content"]["services-h4"]
midh4[1].textContent = siteContent["main-content"]["product-h4"]
midh4[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomtext = document.querySelectorAll(".bottom-content .text-content p");
bottomtext[0].textContent = siteContent["main-content"]["services-content"]
bottomtext[1].textContent = siteContent["main-content"]["product-content"]
bottomtext[2].textContent = siteContent["main-content"]["vision-content"]

// contact content

let contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent["contact"]["contact-h4"]

let contacttext = document.querySelectorAll(".contact p");
contacttext[0].textContent = siteContent["contact"]["address"]
contacttext[1].textContent = siteContent["contact"]["phone"]
contacttext[2].textContent = siteContent["contact"]["email"]

// footer
let footercontent = document.querySelector("footer p");
footercontent.textContent = siteContent["footer"]["copyright"]

// color for nav links

const green = document.querySelectorAll('nav a')
for (let i = 0; i < green.length; i++){
  const changeColor = green[i]
  changeColor.style.color = 'green';
}
// create & prepend

let newLink = document.createElement("a");
newLink.textContent = "Work with us!";
newLink.href = "#";
newLink.style.color = "green";
newLink.style.paddingLeft = "25px";

let nav = document.querySelector('nav') // adds "Work with us!" to end of nav 
nav.appendChild(newLink);


let newLink2 = document.createElement("a");
newLink2.textContent = "Home";
newLink2.href = "#";
newLink2.style.color = 'green';
newLink2.style.paddingRight = "25px";

document.querySelector('nav') // adds home to beginning of nav 
nav.prepend(newLink2)


// stretch

let newP = document.createElement("p");
footercontent.appendChild(newP);

let newBtn = document.createElement("button");
newBtn.textContent = "Stretch Button"
newBtn.addEventListener('click',(event) => {
  event.bottomtext.visibility = "hidden"
})
newP.appendChild(newBtn);
