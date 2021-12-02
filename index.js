const cards = []
fetch ("https://api.magicthegathering.io/v1/cards")

.then ((result) => result.json())
.then (data => {
cards.push(data)
pintarCards()
})


function pintarCards()
  {
    
     console.log(cards[0])
  
  }
