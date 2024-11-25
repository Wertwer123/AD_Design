//First get all section objects
//then calculate the space in pixels that needs to be scrolled through 
//then divide this by the number of text elements that we want to scroll through
import { clamp } from "lodash";
var scrollDelta = 0;
var scrollYAmount = 0;


//also stop scrolling until we reached that threshhold
const slideShowData = new Map();
const slideShows  = document.querySelectorAll(".storySlideShow");
var currentDirection = 0;
var lastScrollY = 0;
var currentScrollY = 0;

function isElementVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

function showCarouselElement(index: number, direction: number, carousel: HTMLElement){
   
    index = clamp(index, 0, carousel.children.length - 1);
    
    //Scrolling to the left
    if(index + direction > carousel.children.length - 1 || index + direction < 0){
        console.log("heyho overshot")
        return;
    }

    carousel.children[index].classList.remove("hidden");
    carousel.children[index].classList.add("shown");
    carousel.children[index + direction].classList.remove("shown");
    carousel.children[index +direction].classList.add("hidden");
    

}

slideShows.forEach((slideShow) => {
    if(!slideShowData.has(slideShow)){
        slideShowData.set(slideShow, {percentage: 0, previousPercentage: 0, currentIndex: 4});
    }
});
    
window.addEventListener('scroll', (event)=>{

    for(var i = 0; i < slideShows.length; ++i){

        const carousel = slideShows[i] as HTMLElement;
        
        if(!isElementVisible(carousel)){
            continue;
        }
       
        lastScrollY = currentScrollY;
        currentScrollY = window.scrollY;
        scrollDelta = currentScrollY - lastScrollY;
        currentDirection = currentScrollY - lastScrollY;
        currentDirection = clamp(currentDirection, -1, 1);

        if(!carousel.parentElement?.parentElement?.parentElement){
            continue;
        }

        var sectionElement = carousel.parentElement.parentElement.parentElement;
        var distance = window.scrollY - sectionElement.offsetTop;
        const progress = sectionElement.clientHeight - window.innerHeight;
        const percentage = distance / progress;
        const data = slideShowData.get(slideShows[i]);

        data.previousPercentage = data.percentage; // Update previous distance
        data.percentage = percentage;
        data.percentage = clamp(percentage, 0, 1);
    
        if(currentDirection > 0){
            if(percentage > 0.80 && data.previousPercentage < 0.80){
                showCarouselElement(--data.currentIndex, currentDirection, carousel);
                console.log("showing text 5")
            }
            else if(percentage > 0.60 && data.previousPercentage < 0.60){
                showCarouselElement(--data.currentIndex, currentDirection, carousel);
                console.log("showing text 4")
            }
            else if(percentage > 0.40 && data.previousPercentage < 0.40){
                showCarouselElement(--data.currentIndex, currentDirection, carousel);
                console.log("showing text 3")
            }
            else if(percentage > 0.20 && data.previousPercentage < 0.20){
                showCarouselElement(--data.currentIndex, currentDirection, carousel);
                console.log("showing text 2")
            }
        }
        else{
          if(percentage < 0.80 && data.previousPercentage > 0.80){
            showCarouselElement(++data.currentIndex, currentDirection, carousel);
          }
          else if(percentage < 0.60 && data.previousPercentage > 0.60){
            showCarouselElement(++data.currentIndex, currentDirection, carousel);
          }
          else if(percentage < 0.40 && data.previousPercentage > 0.40){
            showCarouselElement(++data.currentIndex, currentDirection, carousel);
          }
          else if(percentage < 0.20 && data.previousPercentage > 0.20){
            showCarouselElement(++data.currentIndex, currentDirection, carousel);
          }
        }
       
    }
});