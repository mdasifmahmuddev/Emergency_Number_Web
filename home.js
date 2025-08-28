


// heart count  

const heartCount = document.getElementById("heartCount_id");

let count = 0;
document.addEventListener("click", function (e) {

  if (e.target.classList.contains("heartt_class")) {
    count++;
    heartCount.textContent = count;
  }

});

// alert button coin id 

//set gold 100

let goldCoins = 100;

document.getElementById('coin_id').innerText = goldCoins;

// alert  text 

//  call history

const historyAll = document.querySelector(".call-history-container");
const clearButton = document.querySelector(".clear-history-btn");






document.addEventListener("click", function (e) {
  if (e.target.classList.contains("call_button_class")) {

       let card = e.target.closest(".card_class");

    let serviceName = card.querySelector(".service-name").innerText;
    let serviceNumber = card.querySelector(".service_number").innerText;

    if (goldCoins >= 20) {
      goldCoins -= 20;

      // left side form 
      let now = new Date();
      let timeString = now.toLocaleTimeString();

      // create  div
      let entry = document.createElement("div");
      entry.classList.add("flex", "justify-between","bg-[#FAFAFAFF]","p-2","rounded-lg","mb-4");
      entry.innerHTML = `
        <div>
          <h1>${serviceName}</h1>
          <p class="text-[#5C5C5C]">${serviceNumber}</p>
        </div>
        <div>${timeString}</div>
      `;
      historyAll.prepend(entry);
      

      document.getElementById('coin_id').innerText = goldCoins;


      alert(`📞 Calling: ${serviceName} ${serviceNumber} `);



    }

    else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
    }


  }

});





clearButton.addEventListener("click", function () {
  historyAll.innerHTML = "";
});



// copy id increment 

 
let copyCount = 0;

document.addEventListener("click", function (e) {
 if (e.target.closest(".copy_button_class")) {
    // card parent element
    let card = e.target.closest(".card_class");  
    let serviceNumber = card.querySelector(".service_number").innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      copyCount++;
      document.getElementById("copy_id").innerText = copyCount;
      alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);
    }).catch(err => {
      console.error("Copy failed", err);
    });
  }










});
