import { ScrollableSlideShow } from "./ScrollableSlideShow";
import { clamp, entries } from "lodash";
 
 //Triple slideshow
  var lastScrollY = 0;
  var currentScrollY = 0;
  var scrollDelta = 0;
  var slideShow1 = new ScrollableSlideShow("#firstSlideShowFirstElement", -1);
  var slideShow2 = new ScrollableSlideShow("#firstSlideShowSecondElement", 1);
  var slideShow3 = new ScrollableSlideShow("#firstSlideShowThirdElement", -1);

  window.addEventListener('scroll', () => {
    lastScrollY = currentScrollY;
    currentScrollY = window.scrollY;
    scrollDelta = currentScrollY - lastScrollY;
    slideShow1.scrollElement(clamp(scrollDelta, -1, 1), scrollDelta);
    slideShow2.scrollElement(clamp(scrollDelta, -1, 1), scrollDelta);
    slideShow3.scrollElement(clamp(scrollDelta, -1, 1), scrollDelta);
  })