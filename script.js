document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu a");
  const sections = document.querySelectorAll(".section");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-section");
      sections.forEach(sec => {
        sec.style.display = (sec.id === targetId) ? "block" : "none";
      });
    });
  });

  const btn = document.getElementById("greetBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  btn.addEventListener("click", () => { popup.style.display = "flex"; });
  closeBtn.addEventListener("click", () => { popup.style.display = "none"; });
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  const leavesContainer = document.querySelector(".leaves");
  const leafImages = ["Images/purpleleaf.png", "Images/redleaf.png"];

  function createLeaf() {
    const leaf = document.createElement("div");
    const img = leafImages[Math.floor(Math.random() * leafImages.length)];

    leaf.classList.add("leaf");
    leaf.style.left = Math.random() * 100 + "vw"; 
    leaf.style.backgroundImage = `url(${img})`;
    
    const size = 20 + Math.random() * 40;
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";

    const duration = 6 + Math.random() * 6;
    const delay = Math.random() * 5;
    leaf.style.animationDuration = duration + "s";
    leaf.style.animationDelay = delay + "s";

    leavesContainer.appendChild(leaf);
    setTimeout(() => { leaf.remove(); }, (duration + delay) * 1000);
  }

  setInterval(createLeaf, 500);
});
