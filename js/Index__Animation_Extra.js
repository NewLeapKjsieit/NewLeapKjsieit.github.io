/* 

    PREREQUISITES for understanding this file :

    1) JS
    2) GSAP 2.0 (Greensock Animation Platform)
    3) ScrollMagic 2.0.7
    4) Media Queries with JS

*/


var controller = new ScrollMagic.Controller()

var tl__About = new TimelineMax()
var tl__Astronaut__Animation = new TimelineMax()
var tl_GndStn = new TimelineMax()
var tl_Projects = new TimelineMax()
var tl_Satellite = new TimelineMax()


/* There will be two Sections of Animations in this file : MD (For device width > 768px)
and SM (For device width <= 768) determined by a simple if-else statement below.
The function below is very simple, it looks intimidating but its only lenghty, not hard*/



function widthDetermine(x) {
    if (mediaQuery.matches) { // If media query matches

        console.log("MD")

        /* MD Section (Eg. For Desktops/Laptops)*/


        /* About Section Animation */

        tl__About

            .from(".About__Heading", 1, {
                x: -500,
                y: - 500,
                ease: Power2.easeOut
            })

            .staggerFrom(".Nav a", 0.5, {
                y: -200,
                ease: Power4.easeOut
            }, 0.1)

            .fromTo(".Underline", 2, {
                width: 0,
                ease: Power3.easeOut,
                // opacity : 0
            },
                {
                    width: "100%",
                    // opacity : 1
                })



            .fromTo(".Nebula__BG", 2, {
                opacity: 0,
                borderRadius: "100%",
                width: 0,
                height: 0,
                ease: Elastic.EaseOut
            }, {
                opacity: 1,
                borderRadius: 0,
                width: "100%",
                height: "100%"
            })

        /* End of About Section Animation */



        /* Satellite Animation Section Animation */


        tl_Satellite
            .fromTo(".Ast1", 10, {
                x: "20vw",
                y: "-5vw",
                scale: 0.8
            }, {
                x: "30vw",
                y: "-12vw",
                scale: 0.4,
                rotation: 200,
                ease: Power3.EaseOut
            })
            /* .to(".Ast1",3,{
            rotation : 380,
            scale : 0.9,
            x :"3vw"
            }) */
            .fromTo(".Ast2", 8, {
                x: "50vw",
                y: "-7vw",
                scale: 0.8
            },
                {
                    x: "40vw",
                    y: "3vw",
                    scale: 1,
                    rotation: -200,
                    ease: Power2.EaseOut
                }, 2)
            .fromTo(".Ast3", 8, {
                x: "50vw",
                y: "0vw",
                scale: "1"
            },
                {
                    x: "80vw",
                    y: "-8vw",
                    rotation: 130,
                    scale: 1
                }
                , 2)
            .fromTo(".Ast4", 10, {
                x: "35vw",
                y: "12vw",
                scale: "0.7"
            },
                {
                    x: "20vw",
                    y: "20vw",
                    rotation: 130,
                    scale: 1
                }, 0)
            .fromTo(".Ast5", 10, {
                x: "60vw",
                y: "13vw",
                scale: "0.8"
            }, {
                x: "40vw",
                y: "16vw",
                scale: "0.4",
                rotation: 240,
                ease: Power2.EaseOut
            }, 2)

            .fromTo(".Ast6", 10, {
                x: "20vw",
                y: "16vw",
                scale: "1"
            },
                {
                    x: "6vw",
                    y: "6vw",
                    rotation: 130,
                    scale: 0.3,
                    ease: Power4.EaseOut
                }, 0)

        /* End of Satellite AnimationSection Animation */



        /* Gnd Stn Section Animation */

        tl_GndStn

            .staggerFromTo(".Asteroid", 0.5, {
                opacity: 0
            },
                {
                    opacity: 1,
                    ease: Power2.EaseOut
                }, 0.2)

            .fromTo(".Satelite__BG", 8, {
                left: "0vw",
                top: "0vw",
                scale: 0.6
            },
                {

                    bezier: [{ left: "15vw", top: "6vw" }, { left: "25vw", top: "2vw" }, { left: "40vw", top: "10vw" }],
                    scale: 1,
                    ease: Power2.easeInOut
                })


        /* End of Gnd Stn Section Animation */




        /* Astronaut Animation Section Animation */

        tl__Astronaut__Animation
            .fromTo(".Astronaut__BG",5, {
                left: "0vw",
                top: "0vw",
                opacity: 0.4,
                scale: 1.5
            }
            , {

                bezier: [{ left: "15vw", top: "7vw" }, { left: "35vw", top: "18vw" }],
                rotation: -60,

                // ease: Power1.easeInOut,
                opacity: 1,
                scale: 0.8
            },0)
            /* .from(".Astronaut__BG", 5, {
                top: 0,
                left: "10vw",
                opacity: 0,
            
            }) */
            .from(".Moon__BG", 3, {
                y: "20vw",
                opacity: 0
            }, 2.5)

            .from(".Flag", 0.5, {
                height: 0
            },4.5)



        /* End of Astronaut Animation Section Animation */




        /* Project Section Animation */


        tl_Projects
            .from(".Saturn__BG", 5, {
                opacity: 0,
                rotation: -20,
                x: "-8vw"
            })


        /* End of Project Section Animation */


        /* End of MD Section */



    } else {

        console.log("SM")

        /* SM Section (Eg. For Mobile Phones) */



        /* About Section Animation */

        tl__About

            .from(".About__Heading", 1, {
                x: -500,
                y: - 500,
                ease: Power2.easeOut
            })

            .staggerFrom(".Nav a", 0.5, {
                y: -200,
                ease: Power4.easeOut
            }, 0.1)

            .fromTo(".Underline", 2, {
                width: 0,
                ease: Power3.easeOut,
                // opacity : 0
            },
                {
                    width: "100%",
                    // opacity : 1
                })



            .fromTo(".Nebula__BG", 2, {
                opacity: 0,
                borderRadius: "100%",
                width: 0,
                height: 0,
                ease: Elastic.EaseOut
            }, {
                opacity: 1,
                borderRadius: 0,
                width: "100%",
                height: "100%"
            })

        /* End of About Section Animation */



        /* Satellite Animation Section Animation */


        tl_Satellite

        .fromTo(".Satelite__BG", 8, {
            left: "0vw",
            top: "0vw",
            scale: 0.6
        },
            {

                bezier: [{ left: "15vw", top: "6vh" }, { left: "12vw", top: "27vh" }],
                scale: 1,
                ease: Power2.easeInOut
            },0)

            

            .fromTo(".Ast1", 10, {
                x: "20vw",
                y: "-5vw",
                scale: 0.8
            }, {
                x: "30vw",
                y: "-12vw",
                scale: 0.4,
                rotation: 200,
                ease: Power3.EaseOut
            },0)
            /* .to(".Ast1",3,{
            rotation : 380,
            scale : 0.9,
            x :"3vw"
            }) */
            .fromTo(".Ast2", 8, {
                x: "50vw",
                y: "-7vw",
                scale: 0.8
            },
                {
                    x: "40vw",
                    y: "3vw",
                    scale: 1,
                    rotation: -200,
                    ease: Power2.EaseOut
                }, 2)
            .fromTo(".Ast3", 8, {
                x: "50vw",
                y: "0vw",
                scale: "1"
            },
                {
                    x: "80vw",
                    y: "-8vw",
                    rotation: 130,
                    scale: 1
                }
                , 2)
            .fromTo(".Ast4", 10, {
                x: "35vw",
                y: "12vw",
                scale: "0.7"
            },
                {
                    x: "8vw",
                    y: "30vh",
                    rotation: 130,
                    scale: 1
                }, 0)
            .fromTo(".Ast5", 10, {
                x: "60vw",
                y: "13vw",
                scale: "0.8"
            }, {
                x: "70vw",
                y: "20vh",
                scale: "0.4",
                rotation: 240,
                ease: Power2.EaseOut
            }, 2)

            .fromTo(".Ast6", 10, {
                x: "20vw",
                y: "16vw",
                scale: "1"
            },
                {
                    x: "6vw",
                    y: "6vw",
                    rotation: 130,
                    scale: 0.3,
                    ease: Power4.EaseOut
                }, 0)

        /* End of Satellite AnimationSection Animation */



        /* Gnd Stn Section Animation */



        /* End of Gnd Stn Section Animation */




        /* Astronaut Animation Section Animation */

        .fromTo(".Astronaut__BG",5, {
            left: "0vw",
            top: "0vw",
            opacity: 0.4,
            scale: 1.5
        }
        , {

            bezier: [{ left: "15vw", top: "7vh" }, { left: "40vw", top: "30vh" }],
            rotation: -60,

            // ease: Power1.easeInOut,
            opacity: 1,
            scale: 0.8
        },0)
            /* .from(".Astronaut__BG", 5, {
                top: 0,
                left: "10vw",
                opacity: 0,
            
            }) */
            .from(".Moon__BG", 3, {
                y: "20vw",
                opacity: 0
            }, 2.5)

            .from(".Flag", 0.5, {
                height: 0
            },4.5)



        /* End of Astronaut Animation Section Animation */




        /* Project Section Animation */


        tl_Projects
            .from(".Saturn__BG", 5, {
                opacity: 0,
                rotation: -20,
                x: "-8vw"
            })


        /* End of Project Section Animation */




        /* End of SM Section */


    }
}

var mediaQuery = window.matchMedia("(min-width: 768px)")
widthDetermine(mediaQuery) // Call listener function at run time
mediaQuery.addListener(widthDetermine) // Attach listener function on state changes

