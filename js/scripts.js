function toggleMenu() {
    var menuLinks = document.getElementById("menuLinks");
    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}


function openPopup() {
    var popup = document.getElementById("popupForm");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popupForm");
    popup.style.display = "none";
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseover", () => {
cards.forEach(c => {
if (c !== card) {
c.classList.add("blur");
}
});
});

card.addEventListener("mouseout", () => {
cards.forEach(c => {
c.classList.remove("blur");
});
});
});

function playVideo() {
    var video = document.getElementById("video");
    video.play();
};

  // JavaScript para controlar o slide
  let slideIndex = 0;
  const intervalTime = 3000; // Intervalo de tempo em milissegundos (30 segundos)

  function showSlide(n) {
    const slides = document.querySelectorAll(".slide-item");
    const radios = document.querySelectorAll(".radio-btn");
    
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    radios.forEach((radio) => {
      radio.checked = false;
    });

    slides[n].style.display = "block";
    radios[n].checked = true;
  }

  function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".slide-item");

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
  }

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    changeSlide(-1);
  });

  nextBtn.addEventListener("click", () => {
    changeSlide(1);
  });

  const radioBtns = document.querySelectorAll(".radio-btn");

  radioBtns.forEach((radio, index) => {
    radio.addEventListener("click", () => {
      slideIndex = index;
      showSlide(slideIndex);
    });
  });

  // Função para mudar automaticamente o slide a cada intervalTime
  function autoChangeSlide() {
    changeSlide(1);
  }

  // Iniciar a mudança automática de slide
  setInterval(autoChangeSlide, intervalTime);

  showSlide(slideIndex);


