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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/*build the navigation bar by using the ul and li tags with the link tag a and 
setting some attributes like style and herf and class and onclick as onclicking on the link 
getts the functions of name scrollingToTheSections with numbers to get to each section in a scrolling
scrollIntoView with smooth and ease to the section*/
const getSections=document.querySelectorAll('section');
const getTheUlTag=document.querySelector('ul');
getTheUlTag.setAttribute('style','background-color: white; padding: 5px; cursor: pointer; display: block;');

for(let i = 1 ; i <= getSections.length ; i++){
    const newLiTag=document.createElement('li');
    const newAtag = document.createElement('a');
    newLiTag.setAttribute('data-nav',`Section ${i}`);
    newAtag.setAttribute('herf','#');
    newAtag.setAttribute('data-nav',`Section ${i}`);
    newAtag.setAttribute('onclick',`scrollingToTheSections();`);
    newAtag.setAttribute('class','menu__link');
    const textOfLi=document.createTextNode(`Section ${i}`);
    newAtag.append(textOfLi);
    newLiTag.appendChild(newAtag);
    getTheUlTag.appendChild(newLiTag);
}
const getNav=document.querySelector('nav');
const newDivNav = document.createElement('div');
newDivNav.setAttribute('style','display:block; padding:15px; background-color: #79639E ; cursor: pointer;');
newDivNav.setAttribute('class','menuBtn');
getNav.appendChild(newDivNav);



// Set sections as active
// Add class 'active' to section when near top of viewport
/* get the link tag a from the navigation bar make a const function to use the forEach to loop on 
the sections to get the boundery of the section tag with if condition as the section when it is inside 
the window the top of it is >0 and for this the if condition if the top is between -500 and 100 random range for the 
top view and add the your-active-class in the section and in the same condition another forEach on the link tag 
to set the active class for each in the condition of if the data-nav is set to the sections by its number looping if the 
data-nav of the section is equals to the linktag data-nav as they takes the same string values and if both the same 
put the activeLink class for the link else remove the activeLink else remove the your-active-class from the section */ 
const getNavBar = document.querySelectorAll('a');
const addActiveClass = function (){
    getSections.forEach((theSection)=>{
        const bounderyRect = theSection.getBoundingClientRect();
        if(bounderyRect.top >= -500 && bounderyRect.top <= 100){
            theSection.classList.add('your-active-class');
            getNavBar.forEach((navBar)=>{
                if(navBar.getAttribute('data-nav') == theSection.getAttribute('data-nav')){
                    navBar.classList.add('activeLink');
                }else{
                    navBar.classList.remove('activeLink');
                }
            })
        }else{
            theSection.classList.remove('your-active-class');
        }
    });
}
document.addEventListener('scroll',addActiveClass);


// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
/*get the li tag and for each link add an event for click on click get the sections 
and if the data-nav for both the link and the section then scroll to it by scrollIntoView with smooth at
the start of the block of this section and adding an event handler with the click on the li tag*/
const getLiTag =document.querySelectorAll('li');
function scrollingToTheSections(){ 
    getLiTag.forEach((linkNav)=>{
        linkNav.addEventListener('click',()=>{
            getSections.forEach((Section)=>{
                if(linkNav.getAttribute('data-nav') == Section.getAttribute('data-nav')){
                    Section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                }
            })
        })
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
/* make a div under the ul tag to make the menu more flexible with display to be hidden if the user click on it or make it 
shown by using if condition on the display*/ 
const getDiv = document.querySelector('.menuBtn');
console.log(getDiv);
function displayUI(){
    if(getTheUlTag.style.display === 'block'){
        getTheUlTag.style.display = 'none'
    }else{
        getTheUlTag.style.display ='block';
    }
}
getDiv.addEventListener('click',displayUI);




