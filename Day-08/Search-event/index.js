var eventCard = [];
var cards = document.getElementById("cards");

let events = 10;

const buildCard = (i) => {

    let randomNumber = Math.floor(Math.random() * 100);

    eventCard[i] = `
      <div class="card col ms-5" style="width:20rem">
        <div class="card-header border-0">
           Event ${i}
        </div>
        <div class="card-body d-flex flex-row">
           <div class="card-image p-2">
             <img class="img-fluid" src="//placehold.it/150" alt="" />
           </div>
           <div class="card-content p-3">
              <p>23-May-2023</p>
              <p>Seats Available: ${randomNumber % 3 === 0 ? "0" : randomNumber}</p>
              <button type="button" class="btn ${randomNumber % 3 === 0 ? "btn-danger" : "btn-light btn-outline-dark"}">${randomNumber % 3 === 0 ? "Sold Out" : "Book Now"}</button>
           </div>
        </div>
      </div>
    `
}

for(let i=1; i<=events; i++){
    buildCard(i);
    cards.innerHTML = eventCard.join('');
};