/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// nav bar global var
const nav =document.getElementById('navbar__list');
// sections global var
const sec =document.querySelectorAll('section'); 



/**
 
 * Begin Main Functions
 * 
*/

// build the nav
const navigationbuilder = function(){
    let navs='';
    // loop over sections in my page
    sec.forEach(section =>{
        const id =section.id;
        const navdata=section.dataset.nav;
        // add each section to nav bar with its data and link to its id as unorderd list
        navs +=`<li><a class="menu__link" href="#${id}">${navdata}</a></li>`;
    })
    // append the nav elements to the nav bar with is navbar__list
    nav.innerHTML = navs;
};
navigationbuilder();

// Add class 'active' to section when near top of viewport

// getting the size of element 
const active =(section)=>{
    let ret = Math.floor(section.getBoundingClientRect().top);
    return ret;
};
// remove active from section thats out of our screen
const deleteActive=(section)=>{
    section.classList.remove('your-active-class');
    section.style.cssText="linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
};
// add active to section that is scroll in now
const addActive= (flag,section)=>{
    if(flag){
        section.classList.add('your-active-class');
        section.style.cssText="background-color:rgba(255,50,50,.2);";
    }
    
};

// getting our decision method to give active to one of our sections
const activation=()=>{
    sec.forEach(section=>{
        const size = active(section);

         inveiwport=()=> size<150 && size >= -150;
         // delete active class 
         deleteActive(section);
         // add it if inviewport is true
         addActive(inveiwport(),section);
    });

};


window.addEventListener('scroll',activation);
// Scroll to anchor ID using scrollTO event
const scrollusingscrollTo=()=>{
    // get all links in navbar
    const navlinks=document.querySelectorAll('navbar__menu a');
    navlinks.forEach(link=>{
        //for each link add listener for clicking
        link.addEventListener('click',()=>{
            //scroll to the section has clicked
            for ( index = 0; index < sec; index++) {
                sec[index].addEventListener('click',sectionScroll(link));
                
            }
        });
    });
};
scrollusingscrollTo();
/**
 * End Main Functions
 * 
*/
