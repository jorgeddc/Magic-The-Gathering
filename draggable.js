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
            document.querySelector('.cards').classList.add('ajuste')
            document.querySelector('.cartas').classList.add('entrar')
            document.querySelector('p').classList.add('texto')

            const itemContainer = document.querySelector('.item-container')
           itemContainer.addEventListener('mouseover' , e =>{
               if (e.target.classList.contains('onew1'))
               {
                   console.log(element)
                document.querySelector('.onew1').style.display='none'
                
               }
               if (element.classList.contains('onew2'))
               console.log(element)
               {
                // document.querySelector('.onew2').style.border='none'
                
               }
               if (element.classList.contains('onew3'))
               
               {
                   console.log(element)
                // document.querySelector('.onew3').style.border='none'
                
               }
           })
        //    if (document.querySelector('.cards').classList.contains('ajuste')){
        //    cont++
        //    document.querySelector('.onew3').style.border='none'
        //    }

   
    
     })
})
}