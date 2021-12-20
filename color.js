arrayColorW=[]
arrayColorB=[]
arrayColorBl=[]

function chooseColor (encima,color){
  console.log(encima)
switch (color) {
    case "White":
   arrayColorW.push(color)
  
     if (arrayColorW.length === 1) { 
        document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)}
        if (arrayColorW.length === 2) { 
          document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)}
          if (arrayColorW.length === 3) { 
            document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)}
        
    
     
  
    
      break
    case "Blue":
      console.log('blue-color')
    
      arrayColorB.push(color)
  
      if (arrayColorB.length === 1) { 
         document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)}
         if (arrayColorB.length === 2) { 
           document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)}
           if (arrayColorB.length === 3) { 
             document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)}
    
      break

    case "Black":
      arrayColorBl.push(color)
  
      if (arrayColorBl.length === 1) { 
         document.querySelectorAll(`.item-${color}`)[2].appendChild(encima)}
         if (arrayColorBl.length === 2) { 
           document.querySelectorAll(`.item-${color}`)[1].appendChild(encima)}
           if (arrayColorBl.length === 3) { 
             document.querySelectorAll(`.item-${color}`)[0].appendChild(encima)}
      break;
   
  }
}