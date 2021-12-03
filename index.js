const cards = []
const root = document.querySelector('.root')
const ul = document.createElement('ul')
fetch ("https://api.magicthegathering.io/v1/cards")

.then ((result) => result.json())
.then (data => {
cards.push(data)

pintarCards()
})


function pintarCards()
  {   
    
 cards[0].cards.forEach(element=>{
   console.log(element)
  let li = document.createElement('li')
  let imagen = document.createElement('img')
  let p = document.createElement('p')
  
  let name = element.name
  imagen.src = element.imageUrl
 

    // p.appendChild(name)
    li.appendChild(imagen)
    p.appendChild(name)
    li.appendChild(p)
    ul.appendChild(li)
    root.appendChild(ul)
 

   // root.innerHTML += `<img src=${element.imageUrl}> </img>`
  
  })
}
