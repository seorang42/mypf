// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

function TopBar__init() {
  var scrub = true;
  
  gsap.to('.top-bar__logo > span > span.fast1', {
    yPercent:30,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });

  gsap.to('.top-bar__logo > span > span.fast2', {
    yPercent:20,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });

  gsap.to('.top-bar__logo > span > span.fast3', {
    yPercent:10,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });

  gsap.to('.top-bar__logo > span > span.slow1', {
    yPercent:50,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });

  gsap.to('.top-bar__logo > span > span.slow2', {
    yPercent:60,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });

  gsap.to('.top-bar__logo > span > span.slow3', {
    yPercent:70,
    scrollTrigger:{
      trigger:'.top-bar__logo',
      markers:true,
      start:'top 100px',
      scrub:scrub
    }
  });
}

TopBar__init();