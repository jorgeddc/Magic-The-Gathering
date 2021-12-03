const cards = []
const root = document.querySelector(".root")
const ul = document.createElement("ul")
fetch ("https://api.magicthegathering.io/v1/cards")

.then ((result) => result.json())
.then (data => {
cards.push(data)
pintarCards()
})


function pintarCards()
  {
    
     cards[0].cards.forEach(element=>{
       const li = document.createElement("li")
       const img = document.createElement("img")
       const p = document.createElement("p")
       img.src = element.imageUrl
       let imagenNo = img.src
       let name = element.name
      console.log(imagenNo)
    
       p.innerText+=name
       li.appendChild(p)
       if (imagenNo!="http://127.0.0.1:5501/undefined")
       {
       li.appendChild(img)
       ul.appendChild(li)
       root.appendChild(ul)      
      }
      
      
      
       

     })
  
  }

