let allCards=[]
const paint = document.querySelector(".all-cards")
fetch ("https://api.magicthegathering.io/v1/cards")

.then ((result) => result.json())
.then (data => {
  cardsArray.push(data)
allCards.push(data)
  pintarAllCards(allCards)
}) 

function pintarAllCards(data)
{
  data.forEach((element,index)=>{
      console.log()
      console.log(element)
      for (let i=0 ;i<data[0].cards.length;i++)
      {
          let nameAllcards = data[0].cards[i].name
          const ulAllcards = document.createElement("ul")
          ulAllcards.classList.add("ulAllcards")
          const liAllcards = document.createElement("li")
          const imgAllcards = document.createElement("img")
          imgAllcards.src =data[0].cards[i].imageUrl
          let imagenNo = imgAllcards.src
          if (imagenNo!="http://127.0.0.1:5502/undefined")
          {
        liAllcards.appendChild(imgAllcards)
        ulAllcards.appendChild(liAllcards)
        paint.appendChild(ulAllcards)
          }
        
}
    
  })
}