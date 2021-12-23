function recojo (contador, imagenNo,color)
{
   
   

const draggable = document.querySelectorAll('.cards')
if (color) 
{ 
draggable.forEach(element =>{
element.addEventListener('dragstart', (e)=>{
    element.classList.add('dragging')
})
})

draggable.forEach(element =>{    
    element.addEventListener('dragend', ()=>{
        
        const encima = document.querySelector('.dragging')
        chooseColor(encima,color,draggable)
        
        element.classList.remove('dragging')
        
        if (imagenNo=="http://127.0.0.1:5502/undefined" ){
           
        }
        else{ pintarCards()
        }
    })
})



document.querySelectorAll(`.item-${color}`).forEach((element,index)=>{
    element.addEventListener('dragover',e =>{
        e.preventDefault()
    })
    
    element.addEventListener('drop', e =>{
        e.preventDefault()
        





}) })  
}

 

}


