const counterH1 = document.querySelector("#counter")
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector("#minus")
const heartButton = document.querySelector("#heart")
const likesList = document.querySelector(".likes")
const pauseBtn = document.querySelector("#pause")
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")


plusButton.addEventListener("click", function() {
    counter++
    counterH1.textContent = counter
})

minusButton.addEventListener("click", function() {
    counter--
    counterH1.textContent = counter
})

heartButton.addEventListener("click", function() {
    updateLikes()
})

pauseBtn.addEventListener("click", function() {
    togglePause()
})

commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const comment = document.querySelector("#comment-input").value
    const pTag = document.createElement("p")
    pTag.textContent = comment
    commentList.append(pTag)
    commentForm.reset()
})




let counter = 0
let likedNums = {}
let paused = false

setInterval(function() {
  if (!paused) {
    counter++
    counterH1.textContent = counter
  }
}, 1000)

function togglePause() {
    paused = !paused
    const allBtns = document.querySelectorAll("button")
    allBtns.forEach(btn => {
      if (btn.id !== "pause") {
        btn.disabled = paused
      }
    })
      if (paused) {
      pauseBtn.textContent = "resume"
    } else {
      pauseBtn.textContent = "pause"
    }
  }
  

function updateLikes() {
    if (likedNums[counter]) {
        likedNums[counter] += 1
        const li = document.querySelector(`[data-number='${counter}']`)
        li.textContent = `${counter} has been liked ${likedNums[counter]} times`
    } else {
        likedNums[counter] = 1
        const li = document.createElement("li")
        li.textContent = `${counter} has been liked 1 time`
        li.dataset.number = counter
        likesList.append(li)
    }
}