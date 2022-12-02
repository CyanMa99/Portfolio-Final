const navUl = document.querySelector('nav ul');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () =>{
    const visibility = navUl.getAttribute('data-visible')
    // console.log(visibility);
    if (visibility == "false") {
        navUl.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }else {
        navUl.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

// if ($(window).width() > 768) {
//     navUl.setAttribute("data-visible", true);
//     navToggle.setAttribute("aria-expanded", true)
//  }