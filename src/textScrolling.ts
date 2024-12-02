//If this doesnt work its probably because you changed the parent elements
import { clamp, forEach } from "lodash";
var scrollDelta = 0;
var scrollYAmount = 0;

console.log("init");
//also stop scrolling until we reached that threshhold
const slideShowData = new Map();
const slideShows  = document.querySelectorAll(".storySlideShow");
var currentDirection = 0;
var lastScrollY = 0;
var currentScrollY = 0;


function showCarouselElement(index: number, direction: number, carousel: HTMLElement){
   
    index = clamp(index, 0, carousel.children.length - 1);
    
    //Scrolling to the left
   
    
    carousel.children[index].classList.remove("hidden");
    carousel.children[index].classList.add("shown");
    if(index - direction > carousel.children.length - 1 || index - direction < 0){
        return;
    }

    for(var i = 0; i < carousel.children.length; i++){
        if(i != index){
            carousel.children[i].classList.remove("shown");
           
            if(!carousel.children[i].classList.contains("hidden")){

                carousel.children[i].classList.add("hidden");
            }
        }
       
    }
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
        
        data.previousPercentage = data.percentage; // Update previous distance
        data.percentage = percentage;
        data.percentage = clamp(percentage, 0, 1);

        var percentageThreshold = 0.0;
       
        for(var j = 0; j < carousel.children.length; j++){
           
            if(currentDirection > 0){
               
                if(data.percentage >= percentageThreshold && data.currentIndex < j){
                    data.currentIndex = j;
                    showCarouselElement(data.currentIndex, currentDirection, carousel);
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