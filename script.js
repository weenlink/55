let posts = []

function createPost(){

let input = document.getElementById("postInput")
let text = input.value

if(text.trim() === "") return

posts.unshift(text)

renderPosts()

input.value = ""

}

function renderPosts(){

let container = document.getElementById("posts")
container.innerHTML = ""

posts.forEach(post => {

let div = document.createElement("div")
div.className = "post"
div.innerText = post

container.appendChild(div)

})

}
