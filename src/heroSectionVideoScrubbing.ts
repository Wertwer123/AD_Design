
const heroSection = document.getElementById("heroSection")
const heroSectionVideo: HTMLVideoElement | null = document.getElementById("heroSectionVideo") as HTMLVideoElement; 

if(heroSection){ 
    heroSectionVideo.pause();
}

const onScroll = () => 
{   
    if(!heroSection){
        return;
    }

    const distance = window.scrollY - heroSection?.offsetTop;
    const progress = heroSection.clientHeight - window.innerHeight;

    let percentage = distance / progress;
    
    if(percentage >= 0.99){
        percentage = 0.99;
    }

    else if(percentage <= 0){
        percentage = 0;
    }

    if(percentage > 0.90){
        var currentOpacity = 1 +(0 - 1) * (percentage - 0.10) / 0.90;
        heroSectionVideo.style.opacity = currentOpacity.toString();
    }
    else if(percentage < 0.90){
        var currentOpacity = 1;
        heroSectionVideo.style.opacity = currentOpacity.toString();
    }
    if(heroSectionVideo.duration > 0){
        heroSectionVideo.currentTime = heroSectionVideo.duration * percentage;
    }
}

onScroll();

window.addEventListener('scroll', onScroll);
