
// Created a  function to display the Character card
const createCard = (data) => {
    
  // Loop through the data and create a card for each Character
    data.slice(0, 40).forEach((item) => {
        let div = document.getElementById('root');
        let Card = document.createElement('div');

        Card.innerHTML = `
        <div class="col">
           <div class="card h-100 bg-black">
             <h5 class="text-center p-2 text-warning fw-bolder fst-italic">${item.title}</h5>
             <img src=${item.imageUrl} class="card-img-top p-2" alt=${item.image}>
             <div class="card-body">
             <h5 class="card-title text-center text-white fst-italic">" ${item.fullName} "</h5>
             <p class="card-text text-center text-white fst-italic">Family : ${item.family}</p>
            </div>
         </div>
        </div>

        `
        div.append(Card);
        console.log(item);
    });
}



// fetch the data from the Character by using asynchronous functions
async function fetchCharacter(){
  try{
    const response = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const data = await response.json();
    console.log(data);
    createCard(data); 
  }catch(err){
    console.error(err);
  }
}


fetchCharacter();





