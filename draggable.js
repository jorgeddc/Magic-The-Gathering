
let llamadas=0

function recojo (contador,imagenNo)
{
    
    
    const contenedorWhite = document.querySelector(".container-white")
    llamadas++
       
   
    if (imagenNo=="http://127.0.0.1:5501/undefined"){
  
    pintarCards()
    console.log("UNDEFINIDO")
    }
    const draggable = document.querySelectorAll('.cards') 
    const containerWhite = document.querySelectorAll('.item-container')
    
    
    
    
    draggable.forEach(element =>{
        element.addEventListener('dragstart', (e)=>{
            element.classList.add('dragging')
            color=false
            color = e.target.classList.contains('White')
            
            
        })
        element.addEventListener('dragend', ()=>{
            element.classList.remove('dragging')
            
            
            
            
            
        })
    })
    
    containerWhite.forEach((element,index)=>{
        element.addEventListener('dragover', e =>{
            e.preventDefault()
            
        })

     
element.addEventListener('drop', e =>{
    e.preventDefault()
    
    const encima = document.querySelector('.dragging')
    //COLOCA LAS CARTAS EN ORDEN
    
    
    if (contador===0)
    {containerWhite[2].appendChild(encima)
        contenedorWhite.classList.add("expon")
        exponer(contenedorWhite)

    }
    else if (contador===1){ 
        containerWhite[1].appendChild(encima)
        // contenedorWhite.classList.add("expon")
        exponer(contenedorWhite)
        
        
    }
    else { containerWhite[0].appendChild(encima)
        // contenedorWhite.classList.add("expon")
        for (let i=0;i<=draggable.length;i++)
        {  console.log(i)
        exponer(contenedorWhite)
        }
        
    }
    document.querySelector(".item-container").classList.add(`onew${contador}`)
    
    
    
    
    draggable.forEach(element =>{ 
        document.querySelector('.cards').classList.add('ajuste')
    document.querySelector('.cartas').classList.add('entrar')
    document.querySelector('p').classList.add('texto')
})

containerWhite.forEach(element =>{  
    
    if (containerWhite[0].classList.contains("onew0") && containerWhite[0].classList.contains("onew1") && containerWhite[0].classList.contains("onew2"))
    {
        
        document.querySelector(".color-mag-white").classList.add("active")
    }
})

function exponer ()
{

    console.log(draggable.length)
    
    if (contenedorWhite.classList.contains("expon")  )
    {
         pintarCards()
       
     }
   
        if (draggable.length>1)
        {
            console.log("entro")
          
            contenedorWhite.classList.remove("expon")
        }  
        
    
}





})  
})

}


