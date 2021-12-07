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
    const containerCard = document.createElement('div')
    
       img.src = element.imageUrl
       let imagenNo = img.src
       let name = element.name
     
    
       p.innerText+=name
       li.appendChild(p)
       if (imagenNo!="http://127.0.0.1:5501/undefined")
       {
       li.appendChild(img)
       containerCard.appendChild(li)      
       ul.appendChild(containerCard)
       root.appendChild(ul)
      }
      
      
      mov(containerCard)
       

     })
     
  function mov(containerCard){
    
        containerCard.classList.add("cards")
        const card = document.querySelectorAll('.cards')
        card.forEach((element,index) =>{  
        element.addEventListener('mouseover', e =>{
        // if(e.target.classList.contains('p'))
          card[index].classList.add('tePille')

             VanillaTilt.init(document.querySelector('.tePille'), {
              max: 25,
             speed: 400
         });
        })
       element.addEventListener('mouseout', e =>{
         card[index].classList.remove('tePille')
       })
        })
      }  



   
  
               
               
          
  
  }

