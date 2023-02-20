window.addEventListener("load", function(){

    const contactForm = document.querySelector('.contact-form')

    contactForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        console.log("hello button is working")
    })
})