const projects = [
  {
    name: "heart_tail_animation",
    description: "Heart animation by hovering over it",
    path:"projects/heart_tail_animation",
    category:"UI",
  },
  { name: "Digital Clock", description: "A live digital clock.", path: "projects/clock", category: "UI" },
  { name: "Todo App", description: "A simple todo app.", path: "projects/todo", category: "App" },
  { name: "Calculator", description: "A basic calculator.", path: "projects/calculator", category: "Utility" },
  {
    name: "Dark & Light Mode",
    description: "Toggle between light and dark themes dynamically.",
      path:"projects/dark & light mode",
       category:"UI",
  },

   {
    name: "Change Background color",
    description: "Progress bar that updates dynamically.",
    path:"projects/Change Background color",
    category:"UI",
  },
  {
    name: "Progress Updater",
    description: "Progress bar that updates dynamically.",
    path:"projects/Progress Updater",
    category:"UI",
  },

  {
    name: "auto_text_animation",
    description: "show dynamic text of myself",
    path:"projects/auto_text_animation",
    category:"UI",
  },

  
  { name: "age-calculator", description: "Calculates age from DOB", path: "projects/age-calculator", category: "Utility" },
  { name: "amine-pics-generator", description: "Generates random anime pictures", path: "projects/amine-pics-generator", category: "App" },
  { name: "animated-search-bar", description: "Expanding search input animation", path: "projects/animated-search-bar", category: "UI" },
  { name: "auto-text-effect-animation", description: "Typing animation effect text", path: "projects/auto-text-effect-animation", category: "UI" },
  { name: "background-image-scroll-effect", description: "Scroll-based background animation", path: "projects/background-image-scroll-effect", category: "UI" },
  { name: "background-video", description: "Video playing in page background", path: "projects/background-video", category: "UI" },
  { name: "basic-calculator", description: "Performs simple arithmetic operations", path: "projects/basic-calculator", category: "Utility" },
  { name: "blurred-background-popup", description: "Popup modal with blurred background", path: "projects/blurred-background-popup", category: "UI" },
  { name: "bmi-calculator", description: "Calculates Body Mass Index", path: "projects/bmi-calculator", category: "Utility" },
  { name: "button-ripple-effect", description: "Button with ripple click animation", path: "projects/button-ripple-effect", category: "UI" },
  { name: "clock", description: "Analog clock with hands", path: "projects/clock", category: "Utility" },
  { name: "counter", description: "Increments number on button click", path: "projects/counter", category: "Utility" },
  { name: "currency-converter", description: "Converts one currency to another", path: "projects/currency-converter", category: "App" },
  { name: "dad-jokes-generator", description: "Generates random dad jokes", path: "projects/dad-jokes-generator", category: "App" },
  { name: "dark-mode-toggle", description: "Switch between dark and light mode", path: "projects/dark-mode-toggle", category: "UI" },
  { name: "dice-roll-simulator", description: "Simulates rolling dice result", path: "projects/dice-roll-simulator", category: "App" },
  { name: "digital-clock", description: "Displays real-time digital clock", path: "projects/digital-clock", category: "Utility" },
  { name: "double-landing-page", description: "Two-section animated landing page", path: "projects/double-landing-page", category: "UI" },
  { name: "drum-kits", description: "Play drum sounds on key press", path: "projects/drum-kits", category: "App" },
  { name: "emoji-rating", description: "Rate using emoji expressions", path: "projects/emoji-rating", category: "UI" },
  { name: "english-dictionary", description: "Find word meanings instantly", path: "projects/english-dictionary", category: "App" },
  { name: "feedback-ui", description: "Collects user feedback visually", path: "projects/feedback-ui", category: "UI" },
  { name: "heart-trail-animation", description: "Heart icons follow mouse cursor", path: "projects/heart-trail-animation", category: "UI" },
  { name: "image-search-app", description: "Search and display images via API", path: "projects/image-search-app", category: "App" },
  { name: "image-slider", description: "Slides through multiple images", path: "projects/image-slider", category: "UI" },
  { name: "loading-bar", description: "Animated progress loading bar", path: "projects/loading-bar", category: "UI" },
  { name: "loan-calculator", description: "Calculates EMI and interest", path: "projects/loan-calculator", category: "Utility" },
  { name: "mini-calendar", description: "Displays small interactive calendar", path: "projects/mini-calendar", category: "Utility" },
  { name: "month-calender", description: "Shows full monthly calendar", path: "projects/month-calender", category: "Utility" },
  { name: "mouse-event", description: "Tracks and shows mouse events", path: "projects/mouse-event", category: "Utility" },
  { name: "multiplication-app", description: "Practices multiplication problems", path: "projects/multiplication-app", category: "App" },
  { name: "music-player", description: "Play, pause, and control songs", path: "projects/music-player", category: "App" },
  { name: "navbar", description: "Responsive navigation bar", path: "projects/navbar", category: "UI" },
  { name: "new-year-countdown", description: "Countdown timer to New Year", path: "projects/new-year-countdown", category: "App" },
  { name: "note-app", description: "Write and save personal notes", path: "projects/note-app", category: "App" },
  { name: "photo-gallery", description: "Displays images in grid view", path: "projects/photo-gallery", category: "UI" },
  { name: "pomodoro-timer", description: "Focus timer for productivity", path: "projects/pomodoro-timer", category: "Utility" },
  { name: "profile-statistics", description: "Shows profile analytics info", path: "projects/profile-statistics", category: "UI" },
  { name: "q-and-a-section", description: "Expandable FAQ accordion", path: "projects/q-and-a-section", category: "UI" },
  { name: "random-color-generator", description: "Generates random hex colors", path: "projects/random-color-generator", category: "Utility" },
  { name: "random-emoji", description: "Displays random emoji each time", path: "projects/random-emoji", category: "App" },
  { name: "random-password-generator", description: "Creates secure random passwords", path: "projects/random-password-generator", category: "Utility" },
  { name: "random-photos", description: "Loads random photos dynamically", path: "projects/random-photos", category: "App" },
  { name: "random-quote-generator", description: "Shows random inspirational quotes", path: "projects/random-quote-generator", category: "App" },
  { name: "real-time-character-counter", description: "Counts input characters live", path: "projects/real-time-character-counter", category: "UI" },
  { name: "recipe-book-app", description: "Displays recipes and ingredients", path: "projects/recipe-book-app", category: "App" },
  { name: "rock-paper-scissors-game", description: "Classic rock paper scissors game", path: "projects/rock-paper-scissors-game", category: "App" },
  { name: "rotating-image-gallery", description: "3D rotating image gallery", path: "projects/rotating-image-gallery", category: "UI" },
  { name: "sidebar", description: "Toggleable vertical sidebar", path: "projects/sidebar", category: "UI" },
  { name: "social-media-selector-menu", description: "Menu to choose social accounts", path: "projects/social-media-selector-menu", category: "UI" },
  { name: "step-progress-bar", description: "Multi-step progress bar indicator", path: "projects/step-progress-bar", category: "UI" },
  { name: "sticky-navbar", description: "Navbar stays fixed while scroll", path: "projects/sticky-navbar", category: "UI" },
  { name: "stopwatch", description: "Start, stop and reset stopwatch", path: "projects/stopwatch", category: "Utility" },
  { name: "tabs", description: "Switch content via tab buttons", path: "projects/tabs", category: "UI" },
  { name: "temperature-converter", description: "Converts Celsius and Fahrenheit", path: "projects/temperature-converter", category: "Utility" },
  { name: "testimonial-slider", description: "Slide user feedback cards", path: "projects/testimonial-slider", category: "UI" },
  { name: "tip-calculator", description: "Calculates tip and total bill", path: "projects/tip-calculator", category: "Utility" },
  { name: "to-do-list", description: "Add and manage daily tasks", path: "projects/to-do-list", category: "App" },
  { name: "video-trailer-popup", description: "Popup to play trailer videos", path: "projects/video-trailer-popup", category: "UI" },
  { name: "weather-app", description: "Displays weather using API", path: "projects/weather-app", category: "App" },
  { name: "weight-converter", description: "Converts weights between units", path: "projects/weight-converter", category: "Utility" },





];

const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("modal");
const previewFrame = document.getElementById("projectPreview");
const closeModal = document.getElementById("closeModal");

// === Code Modal Elements ===
const codeModal = document.createElement("div");
codeModal.classList.add("modal");
codeModal.innerHTML = `
  <div class="modal-content code-modal">
    <span id="closeCodeModal">&times;</span>
    <div class="code-tabs">
      <button data-file="index.html" class="active">HTML</button>
      <button data-file="style.css">CSS</button>
      <button data-file="script.js">JS</button>
    </div>
    <pre><code id="codeContent">Select a project...</code></pre>
  </div>
`;
document.body.appendChild(codeModal);
const codeContent = document.getElementById("codeContent");
const closeCodeModal = document.getElementById("closeCodeModal");

function renderProjects(list) {
  projectList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("project-item");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <button class="run-btn" data-path="${p.path}">▶ Run Project</button>
      <button class="code-btn" data-path="${p.path}">💻 View Code</button>
    `;
    projectList.appendChild(div);
  });
}
renderProjects(projects);

// === Preview Project ===
projectList.addEventListener("click", e => {
  if (e.target.classList.contains("run-btn")) {
    const path = e.target.getAttribute("data-path");
    previewFrame.src = `${path}/index.html`;
    modal.style.display = "flex";
  }

  if (e.target.classList.contains("code-btn")) {
    const path = e.target.getAttribute("data-path");
    openCodeModal(path);
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  previewFrame.src = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    previewFrame.src = "";
  }
  if (e.target === codeModal) {
    codeModal.style.display = "none";
  }
});

closeCodeModal.addEventListener("click", () => {
  codeModal.style.display = "none";
});

// === Search + Filter ===
searchInput.addEventListener("input", filterProjects);
categoryFilter.addEventListener("change", filterProjects);

function filterProjects() {
  const term = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = projects.filter(p =>
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(term)
  );
  renderProjects(filtered);
}

// === Code Modal Logic ===
function openCodeModal(path) {
  codeModal.style.display = "flex";
  loadCode(path, "index.html");

  const tabButtons = codeModal.querySelectorAll(".code-tabs button");
  tabButtons.forEach(btn => {
    btn.onclick = () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadCode(path, btn.getAttribute("data-file"));
    };
  });
}

async function loadCode(path, file) {
  try {
    const res = await fetch(`${path}/${file}`);
    const text = await res.text();
    codeContent.textContent = text;
  } catch {
    codeContent.textContent = "⚠️ Unable to load file.";
  }
}


const toggleBtn = document.getElementById("mybutton");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  // Optional: Change button text dynamically
  if (body.classList.contains("dark")) {
    mybutton.textContent = "Dark mode";
  } else {
    mybutton.textContent = "Light Mode";
  }
});