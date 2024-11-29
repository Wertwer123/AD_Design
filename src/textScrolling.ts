//If this doesnt work its probably because you changed the parent elements
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

function getOffsetFromDocumentTop(element:HTMLElement) {
    let offsetTop = 0;
    while (element != null) {

        if(!element || !element.offsetParent){
            break;
        }

        offsetTop += element.offsetTop;
        element = element.offsetParent as HTMLElement; // Traverse up to the next positioned ancestor
    }
    return offsetTop;
}

slideShows.forEach((slideShow) => {
    if(!slideShowData.has(slideShow)){
        slideShowData.set(slideShow, {percentage: 0, previousPercentage: 0, currentIndex: -1});
    }
});
    
window.addEventListener('scroll', (event)=>{

    lastScrollY = currentScrollY;
    currentScrollY = window.scrollY;
    scrollDelta = currentScrollY - lastScrollY;
    currentDirection = clamp(scrollDelta, -1, 1);

    for(var i = 0; i < slideShows.length; i++){
        
        const carousel = slideShows[i] as HTMLElement;
        
        if(!carousel.parentElement?.parentElement?.parentElement){
            
            continue;
        }

       
        
        var sectionElement = carousel.parentElement.parentElement.parentElement;
        var distance = window.scrollY - getOffsetFromDocumentTop(sectionElement);
        
        if(distance < 0){
            continue;
        }

        const progress = sectionElement.clientHeight - window.innerHeight;
        const percentage = distance / progress;
        const data = slideShowData.get(slideShows[i]);
        var percentagePerElement = (100 / carousel.children.length) / 100;
        if(i == 1){
            console.log('offset of element' + i + " " + getOffsetFromDocumentTop(sectionElement));
            console.log("Disstance of element " + "" + i + distance);
            console.log(percentage)
            console.log(currentDirection);
        }
        data.previousPercentage = data.percentage; // Update previous distance
        data.percentage = percentage;
        data.percentage = clamp(percentage, 0, 1);

        var percentageThreshold = 0.0;
       
        for(var j = 0; j < carousel.children.length; j++){
           
            if(currentDirection > 0){
               
                if(data.percentage >= percentageThreshold && data.currentIndex < j){
                    data.currentIndex = j;
                    showCarouselElement(data.currentIndex, currentDirection, carousel);
                   
                        console.log("changed");
                        console.log(currentDirection)
                    
                    break;
                   
                }
                percentageThreshold += percentagePerElement;
            }
            else if (currentDirection < 0){
                percentageThreshold += percentagePerElement;
                if(data.percentage <= percentageThreshold && data.currentIndex > j){
                    
                    data.currentIndex = j;
                    showCarouselElement(data.currentIndex, currentDirection, carousel);
                    break;
                }
            }
        }
    }
});