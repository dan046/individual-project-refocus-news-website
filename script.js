const closeBtn = document.querySelectorAll(".delete-icon")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const checkBtn = document.querySelectorAll("#check-circle")
const cards = document.querySelectorAll(".grid-item")

closeBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const gridItem = button.parentNode
    gridItem.parentNode.removeChild(gridItem)
  })
})

checkBtn.forEach((button) => {
  let isActive = false
  button.addEventListener("click", () => {
    if (isActive) {
      button.style.color = "#192140"
      isActive = false
      button.classList.remove("active")
    } else {
      button.style.color = "#0266FF"
      button.style.visibility = "visible"
      isActive = true
      button.classList.add("active")
    }
  })
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  }
})
