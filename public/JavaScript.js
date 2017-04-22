'use strict';

var x = document.querySelectorAll(".x"),
    img = document.querySelectorAll(".Timeline img"),
    anchor = document.querySelectorAll(".Timeline a"),
    navBarMinOptions = document.querySelector(".nav-options"),
    li = document.querySelectorAll("nav ul li"),
    video = document.querySelector("video"),
    videoSrc = document.querySelectorAll('.videoSrc'),
    sideVideoCell = document.querySelectorAll('.sideVideoCell');

//nav dropdown
navBarMinOptions.addEventListener("click", function () {
    for (var i = 0; i < li.length; i++) {
        li[i].classList.toggle("display");
    };
});

// IF body name is === to sketchbook run this code
if (document.getElementsByTagName("body")[0].getAttribute("data-name") === "sketchbook") {
    window.addEventListener("load", function () {
        img.forEach(function (x) {
            x.style.opacity = "1";
        });
        console.log("Content Fully loaded!");
    });
    //gallery frame display on click
    function imgInfoDisplay() {
        x[0].classList.toggle("stopScroll");
        //stops scroll
        x[1].classList.toggle("gallaryOuter");
        // fixed z-index base for everything to sit ontop of 
        x[2].classList.toggle("ViewImgInfoContainer");
        //fixes margin problem
        x[3].classList.toggle("imgContainer");
        //contains
        x[4].classList.toggle("containerTextArea");
        //textarea, contains all text boxes
        x[5].classList.toggle("textBox");
        //textbox inside of textarea
        x[6].classList.toggle("TimelineBlur");
        //blurs the img timeline
    }


    function imgChange() {

        //add eventlistener for all imgs, on click take the name property, convert it to the right format and apply it to the img info display
        for (var i = 0; i < img.length; i++) {
            img[i].addEventListener("click", function () {
                imgInfoDisplay();
                var Convert = "URL(" + "'" + this.getAttribute("name") + "'" + ")";
                //grabs the src version of an image and converts it for background use
                x[3].setAttribute("src", this.getAttribute("name"));
                //sets the imgContainer to the img clicked's name property
                x[2].style.backgroundImage = Convert;
            });
        }
        //toggles off the viewer
        x[1].addEventListener("click", imgInfoDisplay);
    }

    imgChange();
}

//videoPage
function videoChanger() {

    for (var i = 0; i < sideVideoCell.length; i++) {

        sideVideoCell[i].addEventListener("click", function () {
            videoSrc[0].setAttribute("src", this.getAttribute("name"));
            videoSrc[1].setAttribute("src", this.getAttribute("name"));
            video.load();
        });
    }
}
videoChanger();
