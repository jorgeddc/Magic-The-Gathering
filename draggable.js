function draggable (containerCard)
{
    let cont = 0 ;
    const draggable = document.querySelectorAll('.cards') 
    const containerWhite = document.querySelectorAll('.item-container')
    
    draggable.forEach(element =>{
        element.addEventListener('dragstart', ()=>{
            element.classList.add('dragging')
        })
        element.addEventListener('dragend', ()=>{
            element.classList.remove('dragging')
        })
    })
    
    
    containerWhite.forEach(element=>{
        element.addEventListener('dragover', e =>{
            e.preventDefault()
          
         
        })
        element.addEventListener('drop', e =>{
            e.preventDefault()
            const encima = document.querySelector('.dragging')
    
            
            element.appendChild(encima)
            document.querySelector(".item-container").classList.add(`onew${cont}`)
            cont++
            document.querySelector('.cards').classList.add('ajuste')
            document.querySelector('.cartas').classList.add('entrar')
            document.querySelector('p').classList.add('texto')

         
            
       containerWhite.forEach(element =>{  
           if (containerWhite[0].classList.contains("onew0") && containerWhite[0].classList.contains("onew1") && containerWhite[0].classList.contains("onew2"))
            {
               document.querySelector(".container-white").style.display="none"
               document.querySelector(".color-mag-white").classList.add("active")
            }
        })
         
          
            
     
           
   
    
     })
})
}