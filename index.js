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
  let li = document.createElement('li')
  let imagen = document.createElement('img')
  imagen.src = element.imageUrl
  li.appendChild(imagen)
  ul.appendChild(li)
root.appendChild(ul)
 

   // root.innerHTML += `<img src=${element.imageUrl}> </img>`
  
  })
}
