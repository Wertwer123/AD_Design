import { clamp, difference } from "lodash";

export class ScrollableSlideShow
{
    isVisible = false;
    continueSlide = true;
    slideShowElement:HTMLElement | null = null;
    scrollDirection = 0;
    scrollAmount = 0.0;
    accumulatedScroll = 0.0;
    elementSize = 0;
    maxWidth = 0;
    overlayImagePopUp:HTMLElement | null = null;
    overlayImagePopUpImage:HTMLImageElement | null = null;
    hasOpenedImage = false;
    lockedScrollY = 0;

    constructor(slideShowElementName:string, direction:number){
        //Assuming all elements are of equal size
        this.slideShowElement = document.querySelector(slideShowElementName);
        this.scrollDirection = direction;
        this.isVisible = false;

        if(!this.slideShowElement){
           
            return;
        }

        this.hideAll();
        this.overlayImagePopUp = document.querySelector(".imagePopUpOverlay");
        this.overlayImagePopUpImage = document.querySelector("#overlayImg");

        this.overlayImagePopUp?.addEventListener("click", () =>{
            this.hideOverlay();
        })

        for(var i = 0; i < this.slideShowElement.childElementCount; i++){
            var pictureElement = this.slideShowElement.children[i] as HTMLPictureElement;
            var images = pictureElement.querySelectorAll("img");

            images.forEach((img) => {
                img.addEventListener("click", () =>{
                    this.showOverlayImageClick(img);
                    this.hasOpenedImage = true;
                    this.lockedScrollY = window.scrollY;
                    document.body.style.overflowY = "hidden";
                })
            })
        }
    }

    public showOverlayImageClick(image: HTMLImageElement) {
        
        this.overlayImagePopUp?.classList.add("open");

        if(this.overlayImagePopUpImage){
            console.log("set img");
            this.overlayImagePopUpImage.src = image.src;
        }
    }
    
    public hideOverlay() {
        this.overlayImagePopUp?.classList.remove("open");
        this.hasOpenedImage = false;
        document.body.style.overflowY = "";
    }

    public hideAll(){

        if(!this.slideShowElement){
            return;
        }

        for(var i = 0; i < this.slideShowElement.children.length; i++){
            this.slideShowElement.children[i].classList.add("hidden");
        }
    }

    public scrollElement(direction:number, scrollValue:number){
        //depending on direction every time we scroll over a threshold insert the last item at the beginning and vise versa
        scrollValue = Math.abs(scrollValue);
        var directionToMove = direction * this.scrollDirection;
        this.accumulatedScroll += scrollValue * directionToMove * 0.5;
        this.scrollAmount += scrollValue * directionToMove * 0.5;
       
        if(!this.slideShowElement){
            return;
        }
        
        this.elementSize = this.slideShowElement?.children[0].getBoundingClientRect().width;
        this.scrollAmount = clamp(this.scrollAmount, -this.elementSize, this.elementSize);
        this.slideShowElement.style.transform = `translateX(${this.scrollAmount}px)`;
        this.maxWidth = this.elementSize * this.slideShowElement.childElementCount;

        if(directionToMove > 0 ){
           
            if(this.accumulatedScroll < this.elementSize){
                return;
            }
           
            const lastChildIndex = this.slideShowElement.childElementCount - 1;
            const itemToClone:Element = this.slideShowElement.children[lastChildIndex];
           
            this.slideShowElement?.removeChild(itemToClone);
            this.accumulatedScroll = 0;
            this.slideShowElement.insertBefore(itemToClone, this.slideShowElement.firstChild);
            this.slideShowElement.style.transform = `translateX(${0}px)`;
            this.scrollAmount = 0;
        }
        else if(directionToMove < 0){
           
            
            if(this.accumulatedScroll > -this.elementSize){
                return;
            }

            const itemToClone:Element = this.slideShowElement.children[0];
            this.accumulatedScroll = 0;
            this.slideShowElement?.removeChild(itemToClone);
            this.slideShowElement.appendChild(itemToClone);
            this.slideShowElement.style.transform = `translateX(${0}px)`;
            this.scrollAmount = 0;
        }
    }
}
