const burgerMenuSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-select')

    
    burger.addEventListener('click',()=> {

        //Toggle Button For Burger Menu
        nav.classList.toggle('ul-nav-active')

        //Animation for Links
        navLinks.forEach((item, i) => {

        if(item.style.animation) {
            item.style.animation = ''
        } else {
            item.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`
        }

        })
        //Burger menu Animation 
        burger.classList.toggle('toggle')
    })
}

burgerMenuSlide()