const projects = [
  { name: "Todo App", description: "A simple todo app.", path: "projects/todo", category: "App" },
  { name: "Whether App", description: "Using Fetch api it fetch whether Whether data over the world", path: "projects/whether-app", category: "App" }
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
