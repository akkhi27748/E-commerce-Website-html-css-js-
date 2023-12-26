"using strict";

window.addEventListener('scroll', function () {
  const navbar = document.querySelector(".navbar");
  const scrollHeight = window.scrollY;
  const targetScroll = 300;
    const opacity = Math.min(1, (scrollHeight / targetScroll) / 200);
    console.log(opacity);
    const hexOpacity = Math.round((opacity*50) * 255).toString(16).padStart(2, "0");
    console.log(hexOpacity*10);
    if (scrollHeight > targetScroll && scrollHeight < 1000) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.remove('bg-body-tertiary');
    navbar.style.backgroundColor = `rgba(0, 0, 0, 0.${hexOpacity*10})`;
    navbar.classList.add("fixed-navbar");
    } else if(scrollHeight < targetScroll){
        navbar.classList.add("bg-transparent");
        navbar.classList.add("bg-body-tertiary");
    navbar.classList.remove("fixed-navbar");
  }
});

// Function to perform search
function performSearch() {
  const searchInput = document.getElementById("searchInput").value;

  // Perform the search (Here you might implement search functionality)
  // For simplicity, let's just log the search query
  console.log("Search query:", searchInput);

  // Update recent searches
  updateRecentSearches(searchInput);
}

// Function to update recent searches
function updateRecentSearches(query) {
  const recentList = document.getElementById("recentList");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(query));

  // Add click event to recent search items
  li.onclick = function () {
    // Perform search using this recent query (e.g., fill search input with this query)
    document.getElementById("searchInput").value = query;
    // PerformSearch(); // You might call performSearch here if needed
  };

  // Add the recent query to the recent searches list
  recentList.appendChild(li);
}

const dynamicText = document.getElementById("slogan-dynamic");
const words = ["Seamless", "Shopping"];
let wordIndex = 0;
let isDeleting = false;
let txt = "";

function typeEffect() {
  const currentWord = words[wordIndex % words.length];

  if (!isDeleting) {
    txt = currentWord.substring(0, txt.length + 1);
  } else {
    txt = currentWord.substring(0, txt.length - 1);
  }

  dynamicText.textContent = txt;

  let speed = 200;

  if (isDeleting) {
    speed /= 2;
  }

  if (!isDeleting && txt === currentWord) {
    isDeleting = true;
    speed = 1000;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    wordIndex++;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

// Start the typewriter effect
typeEffect();
