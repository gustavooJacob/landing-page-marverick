document.addEventListener("DOMContentLoaded", () => {
    // Menu mobile toggle
    const menuMobile = document.querySelector(".menu-mobile")
    const navMenu = document.querySelector("nav ul")
  
    if (menuMobile) {
      menuMobile.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        menuMobile.classList.toggle("active")
      })
    }
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Verifica a posição inicial da página ao carregar
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
  
          // Close mobile menu if open
          if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active")
            menuMobile.classList.remove("active")
          }
        }
      })
    })
  
    // Testimonial slider
    const dots = document.querySelectorAll(".dot")
    const slides = document.querySelectorAll(".testimonial-slide")
    let currentSlide = 0
  
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
  
      slides[index].classList.add("active")
      dots[index].classList.add("active")
      currentSlide = index
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
      })
    })
  
    // Auto slide change
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }, 5000)
    
    // Form submission
    const contactForm = document.querySelector(".contact-form")
    const registrationForm = document.getElementById("registrationForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulação de envio de formulário
        const submitButton = contactForm.querySelector(".submit-button")
        const originalText = submitButton.textContent
  
        submitButton.textContent = "ENVIANDO..."
        submitButton.disabled = true
  
        setTimeout(() => {
          alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
          contactForm.reset()
          submitButton.textContent = originalText
          submitButton.disabled = false
        }, 1500)
      })
    }
  
    if (registrationForm) {
      registrationForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simulação de envio de formulário
        const submitButton = registrationForm.querySelector(".submit-button")
        const originalText = submitButton.textContent
  
        submitButton.textContent = "PROCESSANDO..."
        submitButton.disabled = true
  
        setTimeout(() => {
          alert("Inscrição realizada com sucesso! Você receberá um email com a confirmação.")
          registrationForm.reset()
          submitButton.textContent = originalText
          submitButton.disabled = false
          modal.style.display = "none"
          document.body.style.overflow = "auto"
        }, 1500)
      })
    }
  
    // Animação de entrada para elementos quando entram no viewport
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".talk-card, .event-item, .about-content, .contact-content")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate")
        }
      })
    }
  
    // Adiciona classe CSS para animação
    document.head.insertAdjacentHTML(
      "beforeend",
      `
          <style>
              .talk-card, .event-item, .about-content, .contact-content {
                  opacity: 0;
                  transform: translateY(30px);
                  transition: opacity 0.6s ease, transform 0.6s ease;
              }
              
              .talk-card.animate, .event-item.animate, .about-content.animate, .contact-content.animate {
                  opacity: 1;
                  transform: translateY(0);
              }
              
              .event-item:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .event-item:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              .talk-card:nth-child(2) {
                  transition-delay: 0.2s;
              }
              
              .talk-card:nth-child(3) {
                  transition-delay: 0.4s;
              }
              
              nav ul.active {
                  display: flex;
                  flex-direction: column;
                  position: absolute;
                  top: 100%;
                  right: 0;
                  background-color: rgba(42, 31, 16, 0.95);
                  padding: 20px;
                  width: 200px;
              }
              
              nav ul.active li {
                  margin: 10px 0;
              }
              
              .menu-mobile.active .bar:nth-child(1) {
                  transform: rotate(-45deg) translate(-5px, 6px);
              }
              
              .menu-mobile.active .bar:nth-child(2) {
                  opacity: 0;
              }
              
              .menu-mobile.active .bar:nth-child(3) {
                  transform: rotate(45deg) translate(-5px, -6px);
              }
          </style>
      `,
    )
  
    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Executa uma vez no carregamento da página
  })
  