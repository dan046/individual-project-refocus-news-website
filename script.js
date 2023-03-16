const closeBtn = document.querySelectorAll(".delete-icon")
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const checkBtn = document.querySelectorAll("#check-circle")
const hearts = document.querySelectorAll(".fa-heart")

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart) {
      heart.classList.toggle("far")
      heart.classList.toggle("fas")
      heart.classList.toggle("clicked")
    }
  })
})

// closeBtn.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const gridItem = button.parentNode
//     gridItem.parentNode.removeChild(gridItem)
//   })
// })

closeBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    // I now understand why "closest" is the method function I should have used instead of the parentNode due to the fact that I've enclosed the upper container elements on a div.
    const cards = e.target.closest(".grid-item")
    cards.style.display = "none"
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
