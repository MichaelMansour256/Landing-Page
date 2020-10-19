// global var 
sections = document.querySelectorAll('section');
navUnOrderList = document.getElementById('navbar__list');


// build navgation bar dynamiclly from sections in html file
function buildnav (){
    const myDocFrag = document.createDocumentFragment();
    
    sections.forEach(element => {
        const sectionID=element.id;
        const data = element.dataset.nav;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText  = data;
        a.href = '#'+sectionID;
        a.setAttribute('data-link',sectionID);
        
        a.className='menu__link';
        console.log(a);
        li.append (a) ;
        myDocFrag.appendChild(li);
        
        
   

    });
    navUnOrderList.appendChild(myDocFrag);
    
}
// call build nav function
buildnav();


// options for the observer 
const options = {
    root: null,
    threshold : 0,
    rootMargin : "-300px"
};
let observer = new IntersectionObserver(
    (entries, observer) => { 
    entries.forEach(entry => {
        // if entry leave the portview remove the active class
        if(!entry.isIntersecting){
            entry.target.classList.remove('your-active-class');
        }
        // if entry enter the portview add the active class
        else{
            entry.target.classList.add('your-active-class');
        }

       
      });
    }, 
options);
// make pbserve for each section in the page
sections.forEach(element=>{
    observer.observe(element);
});





// scroll effect in nav links 
function scrollto(){
   // get all linkes in nav
    const navlinks=document.querySelectorAll('.menu__link');
    // for each make click listener
    navlinks.forEach(link => {
        
        link.addEventListener('click',function(event){
            // prevent the defaults to make smooth scroll 
            event.preventDefault();
            const scrollItem=document.getElementById(link.getAttribute('data-link'));
            //scroll into view and make the behavior smooth
            scrollItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: "start"
            });
        });
        
});
}
// call scroll function
scrollto();