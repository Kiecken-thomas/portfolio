const cards = document.querySelectorAll(".card")

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top

        if(top < window.innerHeight - 50){
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
        }

    })

})

function openModal(title, img, text){

  document.getElementById("modalTitle").innerText = title
  document.getElementById("modalImg").src = img
  document.getElementById("modalText").innerText = text

  document.getElementById("modal").style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeModal(){
  document.getElementById("modal").style.display = "none"
  document.body.style.overflow = "auto"
}

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closeModal()
  }
})

window.onclick = function(event){
  let modal = document.getElementById("modal")
  if(event.target == modal){
    closeModal()
  }
}