


// heart count  

const heartCount = document.getElementById("heartCount_id");
 
let count =0 ; 
document.addEventListener("click",function(e){ 

    if(e.target.classList.contains("heartt_class")){ 
      count ++ ; 
      heartCount.textContent =count ; 
    }

});

// alert button coin id 

//set gold 100

let goldCoins =100 ; 
  

document.getElementById('coin_id').innerText = goldCoins ;

// alert  text 

 
 document.addEventListener("click", function(e){ 
  if (e.target.classList.contains("call_button_class") ) {
    
    let card =e.target.parentNode.parentNode.parentNode;
 
    let serviceName= card.querySelector(".service-name").innerText ;
     let serviceNumber=card.querySelector(".service_number").innerText;

    if(goldCoins >= 20 ){ 
      goldCoins -= 20 ; 
    document.getElementById('coin_id').innerText=goldCoins;
    
    
      alert(`📞 Calling: ${serviceName} ${serviceNumber} `);



    }
    
    else { 
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }


  }

});



 

