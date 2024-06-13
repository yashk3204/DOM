let flag=2;

slideShow(flag);

function controller(x) {
    flag = flag + x;
    slideShow(flag);
}

function slideShow(num) {
    let slides = document.getElementsByClassName("slide");
    // for slider to cycle between the same few images
    if(num >= slides.length) {
        flag=0;
        num=0;
    }
    if(num < 0) {
        flag=slides.length-1;
        num=slides.length-1;
    }
    // hide all other images
    for(let y of slides) {
        y.style.display = "none";
    }
    // show the target image
    slides[num].style.display = "block";
}