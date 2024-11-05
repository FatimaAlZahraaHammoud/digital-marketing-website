//Swiper

var swiper = new Swiper(".slide-content", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});

// GSAP animations for the Navbar and Methodology section

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".main-txt h1", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
    });

    gsap.from(".main-txt p", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.from(".main .main-txt button", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
        ease: "power2.out",
    });

    gsap.from(".marketing-img img", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        delay: 0.7,
        ease: "power2.out", 
    });

    gsap.from('.methodology-section', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.methodology-section',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    });

    gsap.from('.methodology-step', {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.methodology-section',
            start: 'top bottom',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    });

    gsap.from('.methodology-image img', {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        delay: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.methodology-section',
            start: 'top bottom',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
        }
    });
});
