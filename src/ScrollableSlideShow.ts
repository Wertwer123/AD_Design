export class ScrollableSlideShow
{
    isVisible = false;
    slideShowElement:HTMLElement | null = null;
    scrollDirection = 0;
    scrollAmount = 0;
    accumulatedScroll = 0;
    elementSize = 0;

    constructor(slideShowElementName:string, direction:number, elementSize:number){
        //Assuming all elements are of equal size
        this.slideShowElement = document.querySelector(slideShowElementName);
        this.scrollDirection = direction;
        this.isVisible = false;

        if(this.slideShowElement?.children[0]){
            this.elementSize = this.slideShowElement?.children[0].getBoundingClientRect().width;
        }
        
    }

    public setVisible(isVisible:boolean){
        this.isVisible = isVisible;
    }

    public scrollElement(direction:number, scrollValue:number){
        //depending on direction every time we scroll over a threshold insert the last item at the beginning and vise versa
        this.accumulatedScroll += scrollValue * direction;
        this.scrollAmount += scrollValue * direction;
        if(!this.slideShowElement){
            return;
        }
        this.slideShowElement.style.transform = `translateX(${this.scrollAmount}px)`;

        if( direction > 0 && this.accumulatedScroll > this.elementSize){
            const lastChildIndex = this.slideShowElement.childElementCount - 1;
            const itemToClone:Element = this.slideShowElement.children[lastChildIndex];
            const clonedElement = itemToClone.cloneNode(false) as Element;
            
            this.slideShowElement?.removeChild(itemToClone)
            {
                //move thelement backwards by element size
                console.log("overscolled");
                this.accumulatedScroll = 0;
                this.slideShowElement.prepend(clonedElement);
                this.slideShowElement.style.transform = `translateX(${clonedElement.getBoundingClientRect().width / 2}px)`;
                this.scrollAmount = -clonedElement.getBoundingClientRect().width / 2;
                console.log(-clonedElement.getBoundingClientRect().width);


            }
        }
    }
}