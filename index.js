const cardsArray = []
let ColoR  = []
let j=0;
const root = document.querySelector(".root")
const ul = document.createElement("ul")

fetch ("https://api.magicthegathering.io/v1/cards")

.then ((result) => result.json())
.then (data => {
  cardsArray.push(data)
  pintarCards()
})



function pintarCards()
{   
  
  cardsArray[0].cards.forEach((element,index) =>{
    let i= Math.floor(Math.random() * 100)
 
    
    const li = document.createElement("li")
    const img = document.createElement("img")
    img.classList.add('cartas')
    const p = document.createElement("p")
    const containerCard = document.createElement('div')
    
    img.src =  cardsArray[0].cards[i].imageUrl
    let imagenNo = img.src
    let name =cardsArray[0].cards[i].name
    let colors =  cardsArray[0].cards[i].colors 
    let stringColors = String(colors) 
    
     if(j==0) //ESTA CONDICION ENVIA SOLO UN ARRAY RELLENO CON LOS COLORES
     { 
       ColoR.push(stringColors)
      colorCorrecto(ColoR)
    }  
      j++
     
    
        
    
    
    
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
        recojo()
        
        
      })
      
      function mov(containerCard){
        
        containerCard.classList.add("cards")
        const card = document.querySelectorAll('.cards')
        card.forEach((element,index) =>{  
          element.addEventListener('mouseover', e =>{
            
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

