var controller = new ScrollMagic.Controller()

var tl__About = new TimelineMax()

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

var tl__Astronaut__Animation = new TimelineMax()

tl__Astronaut__Animation
    .set(".Astronaut__BG",{
        left:"0vw",
        top:"0vw",
        opacity:0.4,
        scale:1.5
    })
    .to(".Astronaut__BG", 5, {
        
            bezier:[{left:"15vw", top:"7vw"}, {left:"35vw", top:"18vw"}],
            rotation : -60,
        
        // ease: Power1.easeInOut,
        opacity:1,
        scale:0.8
    })    
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
    })

