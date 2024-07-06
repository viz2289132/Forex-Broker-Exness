// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveCodepen();

// YOUR JS CODE WRITE BELOW :-- BE REMEMBER =>  DO NOT TOUCH ABOVE CODE OR ANY CHANGES...

function LeftBarMover() {
  var leftBar = document.querySelector("#leftBar");
  var elemBox = document.querySelectorAll(".elem");
  var elemBox_h2 = document.querySelectorAll(".elem>h2");

  leftBar.addEventListener("mouseenter", function () {
    gsap.to(leftBar, {
      width: "19vw",
      duration: 0.3,
      ease: Power2,
    });

    gsap.to(elemBox, {
      width: "18vw",
      duration: 0.3,
      ease: Power2,
    });

    gsap.to(elemBox_h2, {
      display: "block",
      ease: Power3,
      delay: "-1",
    });
  });

  leftBar.addEventListener("mouseleave", function () {
    gsap.to(leftBar, {
      width: "4vw",
      duration: 0.3,
      ease: Power2,
    });

    gsap.to(elemBox, {
      width: "3vw",
      duration: 0.3,
      ease: Power2,
    });

    gsap.to(elemBox_h2, {
      display: "none",
      ease: Power3,
      delay: "-1",
    });
  });
}
LeftBarMover();

function box_BAnim() {
  var a = document.querySelector("#real");
  var a1 = document.querySelector("#real>h2");
  var b = document.querySelector("#demo");
  var b1 = document.querySelector("#demo>h2");
  var c = document.querySelector("#arch");
  var c1 = document.querySelector("#arch>h2");

  a.addEventListener("click", function () {
    a.style.borderBottom = "5px solid black";
    a1.style.opacity = 1;

    b.style.borderBottom = "0px solid black";
    b1.style.opacity = "0.6";

    c.style.borderBottom = "0px solid black";
    c1.style.opacity = "0.6";
  });

  b.addEventListener("click", function () {
    b.style.borderBottom = "5px solid black";
    b1.style.opacity = 1;

    a.style.borderBottom = "0px solid black";
    a1.style.opacity = "0.6";

    c.style.borderBottom = "0px solid black";
    c1.style.opacity = "0.6";
  });

  c.addEventListener("click", function () {
    c.style.borderBottom = "5px solid black";
    c1.style.opacity = 1;

    b.style.borderBottom = "0px solid black";
    b1.style.opacity = "0.6";

    a.style.borderBottom = "0px solid black";
    a1.style.opacity = "0.6";
  });
}
box_BAnim();

function format() {
  var a = document.querySelector("#lFormat");
  var b = document.querySelector("#sFormat");

  a.addEventListener("click", function () {
    a.style.backgroundColor = "rgba(0, 0, 0, 0.117)";
    b.style.backgroundColor = "white";
  });

  b.addEventListener("click", function () {
    b.style.backgroundColor = "rgba(0, 0, 0, 0.117)";
    a.style.backgroundColor = "white";
  });
}
format();

function pageFliper() {
  var real = document.querySelector("#real");
  var demo = document.querySelector("#demo");
  var archived = document.querySelector("#arch");

  var s1 = document.querySelector(".show1");
  var s2 = document.querySelector(".show2");
  var s3 = document.querySelector(".show3");

  real.addEventListener("click", function () {
    s1.style.display = "block";
    s2.style.display = "none";
    s3.style.display = "none";
  });

  demo.addEventListener("click", function () {
    s1.style.display = "none";
    s2.style.display = "block";
    s3.style.display = "none";
  });

  archived.addEventListener("click", function () {
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "block";
  });
}
pageFliper();

function show2FormatChanger() {
  var demoBtn = document.querySelector("#demo");
  var realBtn = document.querySelector("#real");
  var archBtn = document.querySelector("#arch");
  var lFormatBtn = document.querySelector("#lFormat");
  var sFormatBtn = document.querySelector("#sFormat");

  var lformatPage = document.querySelector(".lFormatPage");
  var sformatPage = document.querySelector(".sFormatPage");

  demoBtn.addEventListener("click", function () {
    lFormatBtn.click();

    lFormatBtn.addEventListener("click", function () {
      lformatPage.style.display = "block";
      sformatPage.style.display = "none";
    });

    sFormatBtn.addEventListener("click", function () {
      lformatPage.style.display = "none";
      sformatPage.style.display = "block";
    });
  });

  realBtn.addEventListener("click", function () {
    lFormatBtn.click();
  });

  archBtn.addEventListener("click", function () {
    lFormatBtn.click();
  });
}
show2FormatChanger();

function openAccount() {
  var openAccountBtn1 = document.querySelector(".box-a>button");
  var openAccountBtn2 = document.querySelector(".container>button");

  var face1 = document.querySelector("#face1");
  var face2 = document.querySelector("#face2");

  openAccountBtn1.addEventListener("click", function () {
    face1.style.display = "none";
    face2.style.display = "block";
  });

  openAccountBtn2.addEventListener("click", function () {
    face1.style.display = "none";
    face2.style.display = "block";
  });

  var backBtnFace1 = document.querySelector(".fTop>i");
  backBtnFace1.addEventListener("click", () => {
    face1.style.display = "block";
    face2.style.display = "none";
  });
}
openAccount();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    freeMode: true,
    autoplay: {
      delay: 1600,
      disableOnInteraction: true,
    },
  });
}
swiper();
