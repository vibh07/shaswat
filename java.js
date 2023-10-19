// var line = document.querySelectorAll(".line");

// // trajectory for ball
// var bezierPath1 = MorphSVGPlugin.pathDataToBezier("#path1", { align: "#ball" });
// var bezierPath2 = MorphSVGPlugin.pathDataToBezier("#path2", { align: "#ball" });
// var bezierPath2_1 = MorphSVGPlugin.pathDataToBezier("#path2_1", { align: "#ball" });
// var bezierPath3 = MorphSVGPlugin.pathDataToBezier("#path3", { align: "#ball" });
// var bezierPath4 = MorphSVGPlugin.pathDataToBezier("#path4", { align: "#ball" });
// var bezierPath5 = MorphSVGPlugin.pathDataToBezier("#path5", { align: "#ball" });
// var bezierPath6 = MorphSVGPlugin.pathDataToBezier("#path6", { align: "#ball" });
// var bezierPath8 = MorphSVGPlugin.pathDataToBezier("#path8", { align: "#ball" });
// var bezierPathB1 = MorphSVGPlugin.pathDataToBezier("#path_b1", { align: "#bBall1" });
// var bezierPathB2 = MorphSVGPlugin.pathDataToBezier("#path_b2", { align: "#bBall2" });
// var bezierPath9 = MorphSVGPlugin.pathDataToBezier("#path9", { align: "#ball" });
// var bezierPath10 = MorphSVGPlugin.pathDataToBezier("#path10", { align: "#ball" });
// var bezierPath11 = MorphSVGPlugin.pathDataToBezier("#path11", { align: "#ball" });

// // custom ease
// CustomEase.create("custom1", "M0,0 C0.033,0.066 0.083,0.277 0.214,0.388 0.361,0.512 0.529,0.537 0.71,0.618 0.862,0.686 0.962,0.864 1,1")
// CustomEase.create("wiggle1", "M0,0 C0.02,0 0.041,0.994 0.083,0.994 0.166,0.994 0.166,-0.978 0.25,-0.978 0.333,-0.978 0.333,0.896 0.416,0.896 0.499,0.896 0.499,-0.713 0.583,-0.713 0.666,-0.713 0.666,0.375 0.749,0.375 0.833,0.375 0.833,-0.076 0.916,-0.076 0.958,-0.076 0.958,0 1,0")
// CustomEase.create("custom2", "M0,0,C0.202,0,0.51,0.155,0.532,0.378,0.548,0.543,0.792,0.611,0.848,0.708,0.91,0.816,0.976,0.957,1,1")
// CustomEase.create("custom4", "M0,0 C0,0 0.118,0.23 0.28,0.392 0.421,0.533 0.584,0.495 0.722,0.634 0.873,0.785 1,1 1,1")
// CustomEase.create("custom5", "M0,0 C0,0 0.036,0.106 0.122,0.192 0.184,0.254 0.306,0.276 0.392,0.356 0.682,0.627 1,1 1,1")
// CustomEase.create("custom6", "M0,0 C0.035,0.069 0.059,0.068 0.154,0.22 0.188,0.275 0.34,0.327 0.382,0.384 0.437,0.459 0.624,0.639 0.678,0.72 0.706,0.763 0.83,0.804 0.858,0.846 0.943,0.977 0.908,0.896 1,1")
// ease: CustomEase.create("bounce1", "M0,0 C0.181,0 0.259,1 0.259,1 0.259,1 0.297,0.51 0.41,0.51 0.5,0.51 0.567,1 0.567,1 0.567,1 0.596,0.783 0.657,0.783 0.705,0.783 0.75,1 0.75,1 0.75,1 0.768,0.913 0.804,0.913 0.832,0.913 0.859,1 0.859,1 0.859,1 0.869,0.968 0.891,0.968 0.909,0.968 0.924,1 0.924,1 0.924,1 0.929,0.989 0.943,0.989 0.954,0.989 0.963,1 0.963,1 0.963,1 0.965,0.997 0.974,0.997 0.981,0.997 0.986,1 0.986,1 0.986,1 0.987,0.999 0.993,0.999 0.997,0.999 1,1 1,1")

// var tl1 = new TimelineMax({paused:true});
// var tl2 = new TimelineMax({paused:true});
// var tl_s = new TimelineMax({paused:true});
// var tl_r = new TimelineMax({paused:true});

// document.getElementById("startClick").addEventListener("mousedown", function () {
//     tl1.play();
//     tl2.play();
//     tl_s.play();
//   TweenMax.to("#arrow_click", 0.5, {autoAlpha: 0});
// }, false);

// document.getElementById("restartClick").addEventListener("mousedown", function () {
//     tl1.restart();
//     tl2.restart();
//     tl_r.play();
// }, false);

// tl1.timeScale(0.6)
// tl2.timeScale(0.6)
// tl_s.timeScale(0.6)
// tl_r.timeScale(0.6)

// //set circle to be in middle of trajectory
// tl1.set("#ball", { x: "-50%", y: "-50%" })    
// tl1.set("#bBall1", { x: "-50%", y: "-50%" }) 
// tl1.set("#bBall2", { x: "-50%", y: "-50%" })

// // "wiggle "Click Start Button" text
// TweenMax.to("#arrow_click", 0.5, { rotation: 5, scaleY: 0.8,  x:5, transformOrigin: "50% 50%", delay:1.2, ease: "wiggle1"})

// // "Start" text
// tl_s.fromTo("#startText", 0.3, { x: -1 }, { x: 1, ease: RoughEase.ease.config({ strength: 6, points: 10, template: Linear.easeNone, randomize: false }), clearProps: "x" })   //tresem "strat" text
// tl_s.to("#startText", 0.5, { autoAlpha: 0 })
// tl_s.set("#startClick", {autoAlpha: 0})


// // "Reset" text
// tl_r.set("#restartText",  { autoAlpha: 1}, 0)                         //mora
// tl_r.to("#r_restart", 0.5, { scale:0, transformOrigin:"50% 50%"}, 0)  //slovo "R" (iz restart) sakrivam
// tl_r.fromTo("#restartText", 0.3, { x: -2 }, { x: 2, ease: RoughEase.ease.config({ strength: 6, points: 10, template: Linear.easeNone, randomize: false }), clearProps: "x" }, 0)   //tresem "restart" tekst
// tl_r.to("#restartText", 1, { autoAlpha: 0 })


// //   **  from start to "R"  and "C"
// tl1.to("#ball", 2, { bezier: { values: bezierPath1, type: "cubic" }, ease: "custom2" }, 0)
// tl2.fromTo("#path1_m", 2, { drawSVG: "0" }, { drawSVG: "5% 100%", ease: "custom2" }, 0);
// tl2.addCallback(letter_touch, 1.05, ["#r", 1.05, { rotation: 10, transformOrigin: "60% 0", ease: "wiggle1" }, { opacity: 1 }])
// tl2.to("#r_circle", 2, { attr: { r: 200 } }, 1.05)
// tl2.to("#path1_m", 0.3, { opacity: 0 }, 2);


// //   **  from "C2" to "C1" and "E"
// tl1.to("#ball", 1.7, { bezier: { values:bezierPath2, type: "cubic" }, ease: "custom1" }, 2)
// tl2.fromTo("#path2_m", 1.7, { drawSVG: "0" }, { drawSVG: "50% 100%", delay: 0.02, ease: "custom1" }, 2);
// tl2.addCallback(letter_touch, 2, ["#c2", 2, { rotation: 10, scaleY: 0.8, transformOrigin: "40% 0", ease: "wiggle1" }, { x: 470, y: 10, rotation: -25, transformOrigin: "50% 50%", opacity: 0 }])
// tl2.addCallback(letter_touch, 2.15, ["#c1", 2.15, { rotation: 10, scaleY: 0.8, transformOrigin: "40% 0", ease: "wiggle1" }, { x: 210, y: 0, rotation: 5, transformOrigin: "50% 50%", opacity: 0 }])
// tl2.to("#path2_m", 0.5, { opacity: 0 }, 3.7);


// //   **  from "E" to "T" 
// tl1.to("#ball", 0.7, { bezier: { values: bezierPath2_1, type: "cubic" }, ease: "custom4" }, 3.7)
// tl2.fromTo("#path2_1_m", 0.7, { drawSVG: "0" }, { drawSVG: "30% 100%", ease: "custom4" }, 3.7);
// tl2.addCallback(letter_touch, 3.6, ["#e", 3.695, { rotation: 10, scaleY: 0.8, transformOrigin: "40% 0", ease: "wiggle1" }, { x: 755, opacity: 0 }])
// tl2.to("#e_circle", 2, { attr: { r: 200 } }, 3.695)
// tl2.set("#e", { fill: "gray" }, 3.695) 
// tl2.to("#path2_1_m", 0.5, { opacity: 0 }, 4.2)


// //   **  second impact to "T" 
// tl1.to("#ball", 0.6, { bezier: { values: bezierPath3, type: "cubic" }, ease: "custom4" }, 4.4)
// tl2.fromTo("#path3_m", 0.6, { drawSVG: "0" }, { drawSVG: "30% 100%", ease: "custom4" }, 4.4);
// tl2.addCallback(letter_touch, 4.4, ["#t", 4.4, { scaleY: 0.6, transformOrigin: "30% 0", ease: "wiggle1" }, { x: 855, opacity: 0 }])
// tl2.to("#t", 0.3, { fill: "#fff" }, 4.4)
// tl2.to("#path3_m", 0.4, { opacity: 0 }, 4.9);


// //   **  third impact to "T" 
// tl1.to("#ball", 0.5, { bezier: { values: bezierPath4, type: "cubic" }, ease: "custom4" }, 5)
// tl2.fromTo("#path4_m", 0.5, { drawSVG: "0" }, { drawSVG: "20% 100%", ease: "custom4" }, 5);
// tl2.addCallback(letter_touch, 5, ["#t", 5, { rotation: 5, scaleY: 0.8, transformOrigin: "60% 0", ease: "wiggle1" }, { x: 900, opacity: 0 }])
// tl2.to("#tHide", 0.2, { y: "40%", ease: Elastic.easeOut.config(1, 0.3) }, 5)
// tl2.set("#t", { fill: "rgba(255,255,255,0.7)" }, 5)
// tl2.to("#path4_m", 0.3, { opacity: 0 }, 5.6);


// //   **  from "T" to "C" (com)
// tl1.to("#ball", 0.3, { bezier: { values: bezierPath5, type: "cubic" }, ease: "custom5" }, 5.5);
// tl2.fromTo("#path5_m", 0.3, { drawSVG: "0" }, { drawSVG: "0% 100%", ease: "custom5" }, 5.5);
// tl2.addCallback(letter_touch, 5.5, ["#t", 5.5, {  scaleY: 0.8, transformOrigin: "80% 0", ease: "wiggle1" }, { x: 940, opacity: 0 }])
// tl2.to("#t", 0.1,  { rotation: 8, yoyo:true, repeat:1 }, 5.5)
// tl2.to("#tHide", 0.3, { y: "80%", ease: Elastic.easeOut.config(1, 0.3) }, 5.5)
// tl2.set("#t", { fill: "rgba(255,255,255,0.4)" }, 5.5)
// tl2.to("#path5_m", 0.3, { opacity: 0 }, 5.9);


// //   **  from "C" to "M" (com)
// tl1.to("#ball", 0.2, { bezier: { values: bezierPath6, type: "cubic" }, ease: "custom4" }, 5.8);
// tl2.fromTo("#path6_m", 0.2, { drawSVG: "0" }, { drawSVG: "0% 100%", ease: "custom4" }, 5.8);
// tl1.to("#c_com", 0.3, { skewX: 20, yoyo: true, repeat: 1, ease: Power1.easeOut }, 5.8);
// tl1.to("#c_com", 0.3, { fill:"rgba(255,255,255,0.5)" }, 5.8);
// tl2.set("#com_circle", { autoAlpha: 1 }, 6.5)
// tl2.to("#com_circle", 1.5, { attr: { r: 200 } }, 6.5)
// tl2.to("#path6_m", 0.3, { opacity: 0 }, 6.2);


// //  **  bouncing on M""
// tl1.to("#ball", 0.3, { y: "-=80px", ease: Power1.easeOut }, 6);
// tl1.to("#ball", 0.6, { y: "+=80px", ease: Bounce.easeOut }, 6.3);
// tl2.addCallback(letter_touch, 6, ["#m_com", 6, { scaleY: 0.8, transformOrigin: "40% 0", ease: "wiggle1" }, { x: 1095, y: 80, opacity: 0 }])


// //   **  falling dot
// TweenMax.set("#dot_com", { y: "-1000px" })
// tl2.to("#dot_com", 0.7, { y: 0, ease: Bounce.easeOut }, 6.8)
// tl2.to("#red_com", 0.2, { rotation: -20, ease: "wiggle1" }, 7.1)


// //   **  from "M" to "O" 
// tl1.to("#ball", 0.8, { bezier: { values: bezierPath8, type: "cubic" }, ease: "custom4" }, 7.1);
// tl2.fromTo("#path8_m", 0.8, { drawSVG: "0" }, { drawSVG: "40% 100%", ease: "custom4" }, 7.1);
// tl2.to("#o", 0.15, { scaleY: 0.6, transformOrigin: "50% 100%", yoyo: true, repeat: 1 }, 7.9)
// tl2.to("#o", 0.3, { y: "-80px", repeat: 1, yoyoEase: Elastic.easeOut.config(1, 0.3) }, 8)
// tl2.to("#o", 0.3, { fill: "rgba(255,255,255,0.5)" }, 7.9)
// tl2.to("#path8_m", 0.3, { opacity: 0 }, 8);


// //   **  ball splitting
// tl1.to("#ball", 0.3, { scale: 0 }, 7.85)
// tl1.set("#bBall1", { opacity: 1 }, 7.9);
// tl1.set("#bBall2", { opacity: 1 }, 7.9);
// tl1.to("#bBall1", 0.7, { bezier: { values: bezierPathB1, type: "cubic" }, ease: "custom6" }, 7.9);
// tl1.to("#bBall2", 0.7, { bezier: { values: bezierPathB2, type: "cubic" }, ease: "custom6" }, 7.9);
// tl2.fromTo("#path_b1_m", 0.7, { drawSVG: "0" }, { drawSVG: "60% 100%", ease: "custom6" }, 7.9);
// tl2.fromTo("#path_b2_m", 0.7, { drawSVG: "0" }, { drawSVG: "60% 100%", ease: "custom6" }, 7.9);
// tl2.to("#c1", 0.2, { fill: "rgba(255,0,4,0.5)" }, 8.3);
// tl2.to("#c2", 0.2, { fill: "rgba(255,0,4,0.5)" }, 8.3);
// tl2.to("#c1", 0.1, { scaleY: 0.8, skewY: 20, transformOrigin: "30% 100%", yoyo: true, repeat: 1 }, 8.1)
// tl2.to("#c1", 0.2, { y: "-60px", repeat: 1, yoyoEase: Elastic.easeOut.config(1, 0.3) }, 8.2)
// tl2.to("#c2", 0.1, { scaleY: 0.8, skewY: 20, transformOrigin: "80% 100%", yoyo: true, repeat: 1 }, 8.1)
// tl2.to("#c2", 0.2, { y: "-60px", repeat: 1, yoyoEase: Elastic.easeOut.config(1, 0.3) }, 8.2)
// tl2.to("#path_b1_m", 0.3, { opacity: 0 }, 8.4);
// tl2.to("#path_b2_m", 0.3, { opacity: 0 }, 8.4);


// //   **  ball assembly
// tl1.set("#bBall1", { opacity: 0 }, 8.6);
// tl1.set("#bBall2", { opacity: 0 }, 8.6);
// tl1.to("#ball", 0.3, { fill: "red", scale: 1 }, 8.6)
// tl2.to("#o", 0.1, { scaleY: 0.7, transformOrigin: "50% 100%", yoyo: true, repeat: 1 }, 8.4)
// tl2.to("#o", 0.2, { y: "-110px", repeat: 1, yoyoEase: Elastic.easeOut.config(1, 0.3) }, 8.4)
// tl1.to("#ball", 0.8, { bezier: { values: bezierPath9, type: "cubic" }, ease: "custom4" }, 8.6);
// tl2.fromTo("#path9_m", 0.8, { drawSVG: "0" }, { drawSVG: "40% 100%", ease: "custom4" }, 8.6);


// //   **  "H"
// tl1.to("#ball", 0.6, { bezier: { values: bezierPath10, type: "cubic" }, ease: Power0.easeNone }, 9.4);
// tl2.fromTo("#path10_m", 0.6, { drawSVG: "0" }, { drawSVG: "80% 100%", ease: Power0.easeNone }, 9.4);
// tl2.addCallback(letter_touch, 9.4, ["#h", 9.4, { rotation: 10, scaleY: 0.8, transformOrigin: "80% 0", ease: "wiggle1" }, { x: 670, opacity: 0 }])
// tl2.to("#h", 0.2, { fill: "gray" }, 9.4)
// tl2.to("#h_circle", 0.3, { attr: { r: 200 } }, 9.4)
// tl2.to("#path9_m", 0.3, { opacity: 0 }, 9.4);
// tl2.to("#path10_m", 0.3, { opacity: 0 }, 10);


// //   **  from "H" to "I" 
// tl1.to("#ball", 1.2, { bezier: { values: bezierPath11, type: "cubic" }, ease: "custom4" }, 10);
// tl2.fromTo("#path11_m", 1.2, { drawSVG: "0" }, { drawSVG: "0% 100%", ease: "custom4" }, 10);
// tl2.to("#i", 0.3, { opacity: 1 }, 11.2);
// tl2.to("#i", 0.3, { y: 10, transformOrigin: "50% 100%", ease: "wiggle1" }, 11.2);
// tl2.to("#ball", 0.05, { scaleY: 0.5, fill: "#faa9a9", yoyo: true, repeat: 1 }, 11.2)
// tl2.to("#path11_m", 0.3, { opacity: 0 }, 11);


// //  **  bouncing on "I"
// tl1.to("#ball", 0.8, { attr: { r: 15 }, x: "+=4px", y: "-=300px", ease: Power1.easeOut }, 11.2);
// tl1.to("#ball", 1.2, { y: "+=320px", ease: "bounce1" }, 12);
// tl2.to("#i", 0.3, { scaleY: 0.8 }, 12.3)
// tl2.to("#i", 0.2, { y: 5, transformOrigin: "50% 100%", ease: "wiggle1" }, 12.3);
// tl2.to("#i", 0.1, { scaleY: 0.7 }, 12.7)
// tl2.to("#i", 0.2, { y: 3, transformOrigin: "50% 100%", ease: "wiggle1" }, 12.7);


// //  **  display restart text (and shine effect)
// tl2.set("#shine", {opacity:1}, 13.2)
// tl2.to("#shine", 0.7, {x:"-1000px"}, 13.2)
// tl2.set("#shine", {opacity:0}, 13.9)
// tl2.set("#restartClick", { autoAlpha: 1 }, 13.8);      //resetujem predhodne vrednosti 
// tl_r.set("#r_restart", { scale:1}, 13.8);              //resetujem predhodne vrednosti 
// tl2.to("#restartText", 1, { autoAlpha: 1 }, 13.8);


// /** A function that is activated each time the ball touches letter (for impact effect)
//  * 
//  * @param {String} string selector to letter we are currently animating.
//  * @param {Number} time for animation start.
//  * @param {Object} gsap Var Object for wiggle effect.
//  * @param {Object} gsap Var Object for #lines
//  */
// function letter_touch(letter, t1, wiggleVar, varObj2) {
//     tl2.to(letter, 0.3, { fill: "rgba(255,255,255,0.5)" }, t1);
//     tl2.to(letter, 0.3, wiggleVar, t1);
//     tl2.to("#ball", 0.05, { scaleY: 0.5, fill: "#faa9a9", yoyo: true, repeat: 1 }, t1)
//     tl2.to("#ball", 0.06, { scaleY: 0.5, yoyo: true, repeat: 1 }, t1)

//     tl2.set("#lines", varObj2, t1)
//     tl2.set(line[0], { attr: { x2: 197 } }, t1)
//     tl2.set(line[1], { attr: { x1: 203 } }, t1)
//     tl2.set(line[2], { attr: { y2: 407 } }, t1)
//     tl2.set(line[3], { attr: { y2: 406.5, x2: 196.4 } }, t1)
//     tl2.set(line[4], { attr: { y2: 407, x2: 202.8 } }, t1)

//     tl2.to("#lines", 0.1, { opacity: 1 }, t1)
//     tl2.to(line[0], 0.5, { attr: { x2: 183 } }, t1)
//     tl2.to(line[1], 0.5, { attr: { x1: 216.2 } }, t1)
//     tl2.to(line[2], 0.5, { attr: { y2: 421 } }, t1)
//     tl2.to(line[3], 0.5, { attr: { y2: 416.2, x2: 186.7 } }, t1)
//     tl2.to(line[4], 0.5, { attr: { y2: 416.6, x2: 212.5 } }, t1)
// }

// //fixs
// TweenMax.set("#paths", { opacity:1 })
// TweenMax.set("#restartText", { opacity:1 })
// TweenMax.set("#com_circle", { autoAlpha: 0 });
// TweenMax.set("#i", { opacity: 0, fill: "rgba(255,255,255,0.5)" });
// TweenMax.set("#restartText", { autoAlpha: 0 });
// TweenMax.set("#restartClick", { autoAlpha: 0 });