//First get all section objects
//then calculate the space in pixels that needs to be scrolled through 
//then divide this by the number of text elements that we want to scroll through
import { clamp } from "lodash";
var scrollDelta = 0;
var scrollYAmount = 0;

console.log("init");
//also stop scrolling until we reached that threshhold
const slideShowData = new Map();
const slideShows  = document.querySelectorAll(".storySlideShow");
var currentDirection = 0;
var lastScrollY = 0;
var currentScrollY = 0;

function isElementVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))
};

function showCarouselElement(index: number, direction: number, carousel: HTMLElement){
   
    index = clamp(index, 0, carousel.children.length - 1);
    
    //Scrolling to the left
   
    
    carousel.children[index].classList.remove("hidden");
    carousel.children[index].classList.add("shown");
    if(index - direction > carousel.children.length - 1 || index - direction < 0){
       
        return;
    }
    carousel.children[index - direction].classList.remove("shown");
    carousel.children[index - direction].classList.add("hidden");
    

}

function hideCarouselElement(index: number, carousel: HTMLElement)
{
    index = clamp(index, 0, carousel.children.length - 1);
    
    carousel.children[index].classList.remove("shown");
    carousel.children[index].classList.add("hidden");
}

slideShows.forEach((slideShow) => {
    if(!slideShowData.has(slideShow)){
        slideShowData.set(slideShow, {percentage: 0, previousPercentage: 0, currentIndex: -1});
    }
});
    
window.addEventListener('scroll', (event)=>{

    for(var i = 0; i < slideShows.length; ++i){

        const carousel = slideShows[i] as HTMLElement;
        
        if(!carousel.parentElement?.parentElement?.parentElement){
            continue;
        }

        var sectionElement = carousel.parentElement.parentElement.parentElement;
        console.log(sectionElement);
        if(!isElementVisible(carousel)){
            console.log("Not visible");
            continue;
        }
       
        lastScrollY = currentScrollY;
        currentScrollY = window.scrollY;
        scrollDelta = currentScrollY - lastScrollY;
        currentDirection = currentScrollY - lastScrollY;
        currentDirection = clamp(currentDirection, -1, 1);

       

        var offset = 0;
        
        var distance = window.scrollY - (sectionElement.offsetTop + offset);
        const progress = (sectionElement.clientHeight -offset) - window.innerHeight;
        const percentage = distance / progress;
        const data = slideShowData.get(slideShows[i]);
        var percentagePerElement = (100 / carousel.children.length) / 100;

        data.previousPercentage = data.percentage; // Update previous distance
        data.percentage = percentage;
        data.percentage = clamp(percentage, 0, 1);

        var percentageThreshold = 0.0;
       
        for(var i = 0; i < carousel.children.length; i++){
           
            if(currentDirection > 0){
               
                if(data.percentage >= percentageThreshold && data.currentIndex < i){
                    data.currentIndex = i;
                    showCarouselElement(data.currentIndex, currentDirection, carousel);
                    break;
                   
                }
                percentageThreshold += percentagePerElement;
            }
            else if (currentDirection < 0){
                percentageThreshold += percentagePerElement;
                if(data.percentage <= percentageThreshold && data.currentIndex > i){
                    
                    data.currentIndex = i;
                    showCarouselElement(data.currentIndex, currentDirection, carousel);
                    break;
                }
            }
        }
    }
});