function changeMenu() {
  var btnMenue = document.getElementById("btnMenue");
  var navLinks = document.querySelector(".links");
  btnMenue.classList.toggle("fa-times");
  navLinks.classList.toggle("active");
}

function toggleText() {
  var moreText = document.getElementById("moreText");
  var button = document.querySelector("button");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    button.textContent = "View Less";
  } else {
    moreText.style.display = "none";
    button.textContent = "View More ";
  }
}

/*****   call external text   

document.addEventListener("DOMContentLoaded", function () {
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("textContent").textContent = data;
    })
    .catch((error) => console.error("Error fetching the text file:", error));
});
*******/
/*******                     Videos                  ****** */

document.addEventListener("DOMContentLoaded", (event) => {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const videoContainer = document.querySelector(".video-container");
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < 9) {
      // 10 videos, index range 0-9
      currentIndex++;

      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * 360; // video width
    videoContainer.style.transform = `translateX(${offset}px)`;
  }
});

/*******                     books                 ****** */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideBook");
  const prevButton = document.querySelector(".prevBook");
  const nextButton = document.querySelector(".nextBook");
  let currentIndex = 0;

  function showSlide(index) {
    const slider = document.querySelector(".sliderBook");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  // يمكنك إضافة التمرير التلقائي إذا أردت
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);
});
