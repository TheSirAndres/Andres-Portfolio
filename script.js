// Objeto de traducciones
const translations = {
  es: {
    heroTitle: "Desarrollador Frontend",
    heroSubtitle: "Transformando ideas en experiencias digitales excepcionales",
    viewProjects: "Ver Proyectos",
    contactMe: "Contactar",
    aboutTitle: "Sobre Mí",
    aboutGreeting: "¡Hola! Soy Andrés, desarrollador frontend",
    aboutText1:
      "Me encanta programar, tomar fotos y pasar un buen rato con videojuegos. Llevo 3 años trabajando en desarrollo web y lo que más disfruto es crear interfaces claras, funcionales y con una experiencia de usuario que se sienta natural y fluida.",
    aboutText2:
      "Me enfoco en que cada proyecto tenga una buena combinación entre diseño (UI) y usabilidad (UX), cuidando tanto los detalles visuales como lo que el usuario realmente necesita. Además, tengo un excelente manejo del inglés, lo que me permite trabajar sin problema en equipos o proyectos internacionales.",
    aboutText3:
      "Siempre estoy buscando aprender cosas nuevas, probar ideas y seguir creciendo como desarrollador. Para mí, una buena interfaz no solo se ve bien… también se siente bien.",
    downloadCV: "Descargar CV",
    skillsTitle: "Mis Habilidades",
    frontendSkills: "Frontend",
    backendSkills: "Backend & Otros",
    designSkills: "Diseño & Herramientas",
    projectsTitle: "Mis Proyectos",
    project1Title: "Cotizador de Seguros de Automoviles",
    project1Desc:
      "Plataforma de cotizacion de seguros de automóviles con valor calculado dpendiendo del tipo de seguro, marca y modelo del vehículo.",
    project2Title: "Programming Course Academy",
    project2Desc:
      "Academia de cursos de programación con un panel de administración para gestionar cursos, usuarios y estadísticas, proyecto en progreso.",
    project3Title: "Administrador de Finanzas",
    project3Desc:
      "Aplicación de gestion de finanzas con un panel de administración para gestionar usuarios, transacciones y estadísticas, proyecto en progreso.",
    codeLink: "Código",
    demoLink: "Demo",
    experienceTitle: "Experiencia",
    date1: "2021 - 2023",
    job1Title: "Part-Time Web Developer",
    company1: "Robert Bosch",
    job1Desc:
      "Lideré el equipo de desarrollo en la creación de una herramienta inteligente que guiaba a los empleados paso a paso en la resolución de problemas durante llamadas con clientes. A partir de las acciones realizadas por el usuario, el sistema generaba automáticamente notas detalladas del caso, mejorando la eficiencia y la consistencia en el seguimiento de cada interacción.",
    date2: "2024 - 2025",
    job2Title: "Web Developer",
    company2: "Alpizar Landscaping",
    job2Desc:
      "Me encargué del desarrollo completo del sitio web para una empresa familiar, incluyendo la planificación, diseño, programación, publicación y mantenimiento. Gestioné cada etapa del proyecto por mi cuenta, asegurando una solución funcional, moderna y alineada con las necesidades del negocio.",
    date3: "2021 - 2023",
    job3Title: "Technical Support",
    company3: "Robert Bosch",
    job3Desc:
      "Trabajé en el área de soporte técnico para sistemas de seguridad en Bosch, donde adquirí sólidos conocimientos en servidores, resolución de problemas (troubleshooting) y trabajo en equipo. Esta experiencia fortaleció mis habilidades blandas, especialmente la comunicación efectiva, el servicio al cliente y mi capacidad para aprender rápidamente en entornos dinámicos.",
    contactTitle: "Contacto",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    subjectPlaceholder: "Asunto",
    messagePlaceholder: "Mensaje",
    sendMessage: "Enviar Mensaje",
    footerText: "© 2025 Mi Portafolio. Todos los derechos reservados.",
  },
  en: {
    heroTitle: "Frontend Developer",
    heroSubtitle: "Transforming ideas into exceptional digital experiences",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutTitle: "About Me",
    aboutGreeting: "Hello! I'm Andrés, frontend developer",
    aboutText1:
      "I love programming, taking photos, and spending quality time with video games. With 3 years of experience in web development, what I enjoy most is creating clear, functional interfaces with a natural and fluid user experience.",
    aboutText2:
      "I focus on ensuring each project has a good balance between design (UI) and usability (UX), paying attention to both visual details and what the user actually needs. Additionally, I have excellent English proficiency, allowing me to work seamlessly in international teams or projects.",
    aboutText3:
      "I'm always looking to learn new things, test ideas, and continue growing as a developer. For me, a good interface doesn't just look good... it feels good.",
    downloadCV: "Download CV",
    skillsTitle: "My Skills",
    frontendSkills: "Frontend",
    backendSkills: "Backend & Others",
    designSkills: "Design & Tools",
    projectsTitle: "My Projects",
    project1Title: "Car Insurance Quote",
    project1Desc:
      "Auto insurance quote platform with calculated value based on the type of insurance, make, and model of the vehicle.",
    project2Title: "Programming Course Academy",
    project2Desc:
      "Programming course academy with an admin panel to manage courses, users, and statistics, project in progress.",
    project3Title: "Finances Management App",
    project3Desc:
      "Finance management application with an admin panel to manage users, transactions, and statistics. Project in progress.",
    codeLink: "Code",
    demoLink: "Demo",
    experienceTitle: "Experience",
    date1: "2021 - 2023",
    job1Title: "Part-Time Web Developer",
    company1: "Robert Bosch",
    job1Desc:
      "Led the development team in creating an intelligent tool that guided employees step-by-step in solving problems during customer calls. Based on user actions, the system automatically generated detailed case notes, improving efficiency and consistency in tracking each interaction.",
    date2: "2024 - 2025",
    job2Title: "Web Developer",
    company2: "Alpizar Landscaping",
    job2Desc:
      "Handled the complete website development for a family business, including planning, design, programming, publishing, and maintenance. Managed every stage of the project independently, ensuring a functional, modern solution aligned with business needs.",
    date3: "2021 - 2023",
    job3Title: "Technical Support",
    company3: "Robert Bosch",
    job3Desc:
      "Worked in technical support for security systems at Bosch, where I gained solid knowledge in servers, troubleshooting, and teamwork. This experience strengthened my soft skills, especially effective communication, customer service, and my ability to learn quickly in dynamic environments.",
    contactTitle: "Contact",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    sendMessage: "Send Message",
    footerText: "© 2025 My Portfolio. All rights reserved.",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Cambio de tema
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const themeIcon = themeToggle.querySelector("i");

  // Comprobar preferencia del usuario
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const icon = themeToggle.querySelector("i");

    if (body.classList.contains("light-theme")) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });

  // Función para cambiar el idioma
  function changeLanguage(lang) {
    // Actualizar textos
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Actualizar placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
      const key = input.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        input.placeholder = translations[lang][key];
      }
    });

    // Actualizar texto del botón de idioma
    const langText = document.getElementById("langText");
    langText.textContent = lang === "es" ? "ES" : "EN";

    localStorage.setItem("language", lang);
  }

  // Inicializar idioma
  const savedLang = localStorage.getItem("language") || "es";
  changeLanguage(savedLang);

  // Cambio de idioma
  document.getElementById("langToggle").addEventListener("click", () => {
    const currentLang = localStorage.getItem("language") || "es";
    const newLang = currentLang === "es" ? "en" : "es";
    changeLanguage(newLang);
  });

  // Efecto typewriter para el hero
  function typeWriterEffect(element, text, speed) {
    element.innerHTML = "";
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerHTML = "";

    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        element.appendChild(cursor);
        i++;
        setTimeout(type, speed);
      } else {
        element.appendChild(cursor);
      }
    }
    type();
  }

  const titleElement = document.getElementById("typewriter-title");
  const subtitleElement = document.getElementById("typewriter-subtitle");

  if (titleElement && subtitleElement) {
    const titleText = translations[savedLang].heroTitle;
    const subtitleText = translations[savedLang].heroSubtitle;

    setTimeout(() => {
      typeWriterEffect(titleElement, titleText, 100);
    }, 500);

    setTimeout(() => {
      typeWriterEffect(subtitleElement, subtitleText, 50);
    }, 2000);
  }

  // Función para desplazarse a una sección
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Botones de navegación
  document
    .getElementById("goToProjects")
    .addEventListener("click", function () {
      scrollToSection("projects");
    });

  document.getElementById("goToContact").addEventListener("click", function () {
    scrollToSection("contact");
  });

  // Botón de inicio
  const homeButton = document.getElementById("homeButton");
  homeButton.addEventListener("click", function () {
    scrollToSection("hero");
  });

  // Mostrar/ocultar botón de inicio al hacer scroll
  function toggleHomeButton() {
    if (window.scrollY > 500) {
      homeButton.classList.add("visible");
    } else {
      homeButton.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleHomeButton);

  // Navegación con puntos
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetSection = dot.getAttribute("data-section");
      scrollToSection(targetSection);
    });
  });

  // Actualizar puntos de navegación al hacer scroll
  function updateNavDots() {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.getAttribute("data-section") === currentSection) {
        dot.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateNavDots);

  // Botón de descargar CV
  document.getElementById("downloadCV").addEventListener("click", function () {
    // Simular descarga
    const link = document.createElement("a");
    link.href = "#"; // Ruta a tu CV
    link.download = "Andres_Alpizar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Inicializar barras de habilidades
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    const progress = bar.querySelector(".skill-progress");
    progress.style.width = `${width}%`;
  });

  // Funcionalidad para iconos de contacto
  document.getElementById("emailContact").addEventListener("click", () => {
    window.location.href = "mailto:joseandresalpizarmurillo0@gmail.com";
  });

  document.getElementById("phoneContact").addEventListener("click", () => {
    window.location.href = "tel:+50661651780";
  });

  document.getElementById("locationContact").addEventListener("click", () => {
    window.open(
      "https://www.google.com/maps/place/San+Ramón,+Alajuela,+Costa+Rica",
      "_blank"
    );
  });

  // Animación al aparecer elementos al hacer scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".animate, .animate-left, .animate-right"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";

        if (element.classList.contains("animate")) {
          element.style.transform = "translateY(0)";
        } else if (element.classList.contains("animate-left")) {
          element.style.transform = "translateX(0)";
        } else if (element.classList.contains("animate-right")) {
          element.style.transform = "translateX(0)";
        }

        element.style.transition =
          "opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Inicializar

  // Validación de formulario
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      // Validar nombre
      const name = document.getElementById("name");
      const nameError = document.getElementById("nameError");
      if (name.value.trim() === "") {
        nameError.textContent =
          translations[savedLang].namePlaceholder + " is required";
        nameError.style.display = "block";
        valid = false;
      } else {
        nameError.style.display = "none";
      }

      // Validar email
      const email = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() === "") {
        emailError.textContent =
          translations[savedLang].emailPlaceholder + " is required";
        emailError.style.display = "block";
        valid = false;
      } else if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        valid = false;
      } else {
        emailError.style.display = "none";
      }

      // Validar mensaje
      const message = document.getElementById("message");
      const messageError = document.getElementById("messageError");
      if (message.value.trim() === "") {
        messageError.textContent =
          translations[savedLang].messagePlaceholder + " is required";
        messageError.style.display = "block";
        valid = false;
      } else {
        messageError.style.display = "none";
      }

      if (valid) {
        // Obtener el botón de enviar
        const submitBtn = this.querySelector(".submit-btn");
        const originalBtnText = submitBtn.innerHTML;

        // Cambiar a estado de carga
        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        // Crear FormData
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrblagoj";
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formData = new FormData(contactForm);
        formData.append("name", name);
        formData.append("email", email);
        formData.append(
          "subject",
          document.getElementById("subject").value || "Sin asunto"
        );
        formData.append("message", message);

        // Enviar a Formspree
        fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              // Éxito
              contactForm.reset();
              alert("¡Mensaje enviado con éxito!");
            } else {
              // Mostrar detalles del error
              return response.json().then((errorData) => {
                throw new Error(errorData.error || "Error en el servidor");
              });
            }
          })
          .catch((error) => {
            // Manejar errores
            console.error("Error de Formspree:", error);
            alert(`Error al enviar: ${error.message}`);
          })
          .finally(() => {
            // Restaurar estado del botón
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
          });
        contactForm.reset();
      }
    });
  }

  // Sistema de partículas para el fondo del Hero
  const canvas = document.getElementById("particles-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 50 + 50,
        color: `rgba(${Math.floor(Math.random() * 100) + 100}, ${
          Math.floor(Math.random() * 100) + 100
        }, ${Math.floor(Math.random() * 200) + 55}, ${
          Math.random() * 0.5 + 0.2
        })`,
      });
    }

    // Dibujar partículas
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Actualizar posición
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.angle = Math.PI - particle.angle;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.angle = -particle.angle;
        }

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Conectar partículas cercanas
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particle.distance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(126, 87, 194, ${
              1 - distance / particle.distance
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();

    // Redimensionar canvas al cambiar tamaño de ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
