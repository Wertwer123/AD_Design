import { ScrollableSlideShow } from "./ScrollableSlideShow";
import { clamp, difference, entries } from "lodash";
 
 //Triple slideshow
  var lastScrollY = 0;
  var currentScrollY = 0;
  var scrollDelta = 0;
  var slideShow1 = new ScrollableSlideShow("#firstSlideShowFirstElement", -1);
  var slideShow2 = new ScrollableSlideShow("#firstSlideShowSecondElement", 1);
  var slideShow3 = new ScrollableSlideShow("#firstSlideShowThirdElement", -1);

  var SecondslideShow1 = new ScrollableSlideShow("#SecondSlideShowFirstElement", -1);
  var SecondslideShow2 = new ScrollableSlideShow("#SecondSlideShowSecondElement", 1);
  var SecondslideShow3 = new ScrollableSlideShow("#SecondSlideShowThirdElement", -1);

  window.addEventListener('scroll', () => {
    lastScrollY = currentScrollY;
    currentScrollY = window.scrollY;
    scrollDelta = currentScrollY - lastScrollY;
    var direction = clamp(scrollDelta, -1, 1);

    slideShow1.scrollElement(direction, scrollDelta);
    slideShow2.scrollElement(direction, scrollDelta);
    slideShow3.scrollElement(direction, scrollDelta);

    SecondslideShow1.scrollElement(direction, scrollDelta);
    SecondslideShow2.scrollElement(direction, scrollDelta);
    SecondslideShow3.scrollElement(direction, scrollDelta);
  })