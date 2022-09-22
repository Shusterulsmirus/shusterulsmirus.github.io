const tl = gsap.timeline({defaults: { ease: "power1.out"} });

tl.fromTo('.brand', {opacity: 0}, {opacity: 1, duration: 1.5 });
tl.fromTo('.menu', {opacity: 0}, {opacity: 1, duration: 1 });
tl.fromTo('.tools', {opacity: 0}, {opacity: 1, duration: 1 });

