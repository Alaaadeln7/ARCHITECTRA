// start nav bar responsive design
const barIcon = document.querySelector(".bar");
barIcon.onclick = () => {
  document.querySelector("nav").classList.toggle('show');
}
// end nav bar responsive design

//start loading
const loading = document.querySelector(".loader");
window.addEventListener("load",() => {
  loading.classList.add("hidden");
  loading.addEventListener("transitionend",() => {
    document.body.removeChild(loading)
  });
});
//end loading
// start nav project 
const navLinks = document.querySelectorAll(".nav-works ul li");
const worksItems = Array.from(document.querySelectorAll(".works .content div"))
navLinks.forEach(el => {
  el.addEventListener("click",addClassActive);
  el.addEventListener("click",filtering);
});
function addClassActive() {
  navLinks.forEach((el) => {
    el.classList.remove("active");
    this.classList.add("active");
  })
}
function filtering(){
  worksItems.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(this.dataset.category).forEach((el) => {
    el.style.display = 'flex';
  })
};
// end nav project 
// start statistics progress
window.onscroll = () => {
  const vision = document.getElementById("vision");
  let button = document.querySelector(".scroll-to-top");
  //statistics offset
  let visionOffsetTop = vision.offsetTop - 300;
  // let whyUsOffsetTop  = whyUs.offsetTop
  // let outterHeightWhyUs = whyUs.offsetHeight
  // window height
  let windowHeight = this.innerHeight;
  // outter height
  let outterHeight = vision.offsetHeight;
  // window scroll top
  let windowScrollTop = this.pageYOffset;
  if(windowScrollTop > (visionOffsetTop + outterHeight - windowHeight)){
    let allVision = document.querySelectorAll(".progress .progress-icon");
    allVision.forEach(el => {
      el.style.width = el.dataset.progress
    })
  }
    // start whyus section
  const whyUs = document.getElementById("why-us");
  let whyUsOffsetTop = whyUs.offsetTop - 300
  if( windowScrollTop>= whyUsOffsetTop){
    let img = document.querySelector(".why-us .img");
    let text = document.querySelector(".why-us .text")
    img.style.setProperty("animation","appear 1s  ease");
    img.style.setProperty("opacity","1");
    text.style.setProperty("animation","reverse-appear 1s  ease");
    text.style.setProperty("opacity","1");

  }
  // end whyus section
  // start about section
  const aboutUs = document.querySelector(".about");
  let aboutUsOffsetTop = aboutUs.offsetTop - 300
  if( windowScrollTop>= aboutUsOffsetTop){
    let img = document.querySelector(".about .img");
    let text = document.querySelector(".about .text")
    img.style.setProperty("animation","appear 1s  ease");
    img.style.setProperty("opacity","1");
    text.style.setProperty("animation","reverse-appear 1s  ease");
    text.style.setProperty("opacity","1");
  }
  // end about section
  // start blog section 
  let blogs = document.getElementById("blogs");
  let blogsOffsetTop = blogs.offsetTop - 300;
  if( windowScrollTop>= blogsOffsetTop){
    document.querySelector(".blogs .head .services-title").style.setProperty("animation","appear 1s  ease");
    document.querySelector(".blogs .head .services-prag").style.setProperty("animation","reverse-appear 1s  ease");
    document.querySelector(".blogs .content").style.setProperty("animation","appear-top 1s  ease");
  }
  // end blog section 
  // start vision section
  let visionsOffsetTop = vision.offsetTop - 300;
  let features = document.querySelectorAll(".feature");
  if( windowScrollTop>= visionsOffsetTop){
    document.querySelector(".vision .head .services-title").style.setProperty("animation","appear 1s  ease");
    document.querySelector(".vision .head .services-prag").style.setProperty("animation","reverse-appear 1s  ease");
      features[0].style.setProperty("animation","appear 1s  ease");
      features[0].style.setProperty("opacity","1");
      features[1].style.setProperty("animation","appear-down 1s  ease");
      features[1].style.setProperty("opacity","1");
      features[2].style.setProperty("animation","appear-top 1s  ease");
      features[2].style.setProperty("opacity","1");
      features[3].style.setProperty("animation","reverse-appear 1s  ease");
      features[3].style.setProperty("opacity","1");
  }
  // end vision section
  // start services section
  const services = document.querySelector(".services");
  let servicesOffsetTop = services.offsetTop - 300
  if( windowScrollTop>= servicesOffsetTop){
    let servicesTitle = document.querySelector(".services .head .services-title");
    let servicesPragraph = document.querySelector(".services .head .services-prag");
    servicesTitle.style.setProperty("animation","appear 1s  ease");
    servicesTitle.style.setProperty("opacity","1");
    servicesPragraph.style.setProperty("animation","reverse-appear 1s  ease");
    servicesPragraph.style.setProperty("opacity","1");
    document.querySelector(".services .content").style.setProperty("animation","appear-top 1s  ease");
    document.querySelector(".services .content").style.setProperty("opacity","1");

  }
  // end services section
  // start works section
  const works = document.querySelector(".works");
  let worksOffsetTop  = works.offsetTop - 300;
  if(windowScrollTop >= worksOffsetTop){
    document.querySelector(".works .head .services-title").style.setProperty("animation","appear 1s ease");
    document.querySelector(".works .head .services-title").style.setProperty("opacity","1");
    document.querySelector(".works .head .services-prag").style.setProperty("animation","reverse-appear 1s ease");
    document.querySelector(".works .head .services-prag").style.setProperty("opacity","1");
    document.querySelector(".works .nav-works").style.setProperty("animation","appear 1s ease");
    document.querySelector(".works .nav-works").style.setProperty("opacity","1");
    document.querySelector(".works .content").style.setProperty("animation","appear-top 1s ease");
    document.querySelector(".works .content").style.setProperty("opacity","1");
  }
  // end works section
  // start works section
  const team = document.querySelector(".team");
  let teamOffsetTop  = team.offsetTop - 300;
  if(windowScrollTop >= teamOffsetTop){
    document.querySelector(".team .head .services-title").style.setProperty("animation","appear 1s ease");
    document.querySelector(".team .head .services-title").style.setProperty("opacity","1");
    document.querySelector(".team .head .services-prag").style.setProperty("animation","reverse-appear 1s ease");
    document.querySelector(".team .head .services-prag").style.setProperty("opacity","1");
    document.querySelector(".team .content").style.setProperty("animation","appear-top 1s ease");
    document.querySelector(".team .content").style.setProperty("opacity","1");
  }
  // end works section
  // start footer
  const footer = document.querySelector("footer");
  let footerOffsetTop = footer.offsetTop - 700;
  if(windowScrollTop >= footerOffsetTop){
    document.querySelector("footer .text").style.setProperty("animation","appear 1s ease");
    document.querySelector("footer .text").style.setProperty("opacity","1");
    document.querySelector("footer .company").style.setProperty("animation","reverse-appear 1s ease");
    document.querySelector("footer .company").style.setProperty("opacity","1");
    document.querySelector("footer .products").style.setProperty("animation","appear-top 1s ease");
    document.querySelector("footer .products").style.setProperty("opacity","1");
    document.querySelector("footer .support").style.setProperty("animation","appear-down 1s ease");
    document.querySelector("footer .support").style.setProperty("opacity","1");
  }
  // end footer
  // start scroll to top 
  if(this.scrollY >= 800){
      button.style.display = "flex";
    }else{
      button.style.display = "none";
    }
  button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  });
}
// end scroll to top 
}

// start show blogs
const blogBtn = document.getElementById("show");
const blogs = document.querySelectorAll(".blogs .content .hidden")
blogBtn.onclick = () => {
  for (let index = 0; index < blogs.length; index++) {
    blogs[index].classList.toggle("show")
    if(blogs[index].classList.contains("show")){
      blogBtn.textContent = "Hidden Some Blogs"
    }else{
      blogBtn.textContent = "View All Blogs"
    }
  }
}
// end show blogs

// start show blogs
const engineersBtn = document.getElementById("show-engineers");
const engineers = document.querySelectorAll(".team .content .hidden")
engineersBtn.onclick = () => {
  for (let i = 0; i <= engineers.length; i++) {
    engineers[i].classList.toggle("show")
    if(engineers[i].classList.contains("show")){
      engineersBtn.textContent = "Hidden Some Engineers"
    }else{
      engineersBtn.textContent = "View All Engineers"
    }
  }
}
// end show blogs
