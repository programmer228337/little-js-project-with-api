const button = document.querySelector(".btn")
const image = document.querySelector(".img")
let url = "http://aws.random.cat//meow"

async function handler() {


try {
  const resp = await fetch(url)
  const data = await resp.json()

  image.src = data.file
} catch(error)  {
  console.log(error)
}
}
button.addEventListener("click", () => {
  let isLoad = image.complete;
  if (isLoad) {
    handler()
  }
 
}) 








