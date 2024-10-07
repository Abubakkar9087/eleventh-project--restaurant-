// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation: Fade in and slide down on page load
    gsap.from("nav", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "bounce.out",
    });

    // Banner Animations
    gsap.from(".banner-h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".banner-p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 1,
    });

    gsap.from(".banner a", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 1,
    });

    // About Section Animations
    gsap.utils.toArray(".about .child").forEach((child, index) => {
        gsap.from(child, {
            scrollTrigger: {
                trigger: child,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: index * 0.3,
        });
    });
// category Section Animations
gsap.utils.toArray(".category .child").forEach((child, index) => {
    gsap.from(child, {
        scrollTrigger: {
            trigger: child,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: index * 0.2,
    });
});
    // Menu Section Animations
    // gsap.set('.menu .child', { opacity: 1 });
    // gsap.utils.toArray(".menu .child").forEach((child, index) => {
    //     gsap.from(child, {
    //         scrollTrigger: {
    //             trigger: child,
    //             start: "top 85%",
    //             toggleActions: "play none none reverse",
    //         },
    //         duration: 1,
    //         scale: 0.8,
    //         opacity: 0,
    //         ease: "back.out(1.7)",
    //         delay: index * 0.2,
    //     });
    // });

    // Service Section Animations
    gsap.from(".service .child", {
        scrollTrigger: {
            trigger: ".service",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
    });

    // Contact Section Animations
    gsap.from(".contact .child", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.3,
    });

    // Chef Section Animations
    gsap.utils.toArray(".cheff .child").forEach((child, index) => {
        gsap.from(child, {
            scrollTrigger: {
                trigger: child,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: index * 0.2,
        });
    });

    // Footer Animation: Fade in from bottom
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 100%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
    });

    // Button Hover Animations (Optional)
    // If you want to add hover animations with GSAP, you can use the following example:
    // Note: GSAP is generally used for scroll and load animations, while hover effects are typically handled via CSS.
});
