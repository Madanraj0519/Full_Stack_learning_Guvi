const apikey = "AIzaSyC3aMeS4XLrQJpCFlTiwmRIHiuvk6JQXKE";
var input = '';

// input value from the user
const bookName = document.getElementById('bookName');


// Created a  function to display the book
const createCard = (data) => {
    
  // Loop through the data and create a card for each book
    data.forEach((item) => {
        let div = document.getElementById('root');
        let Card = document.createElement('div');

        Card.innerHTML = `
        <div class="col mt-5">
          <div class="card">
            <img src=${item.volumeInfo.imageLinks.smallThumbnail} class="card-img-top p-2" alt="Book-image">
            <div class="card-body">
              <h6 class="card-title text-center text-info">${item.volumeInfo.title}</h6>
              <p class="card-text text-center">Author : ${item.volumeInfo.authors[0]}</p>
              <p class="card-text text-center">Publisher : ${item.volumeInfo.publisher}</p>
              <p class="card-text text-center">PublishedDate : ${item.volumeInfo.publishedDate}</p>
            </div>
          </div>
        </div>
        `
        
        div.append(Card);
        console.log(item);
    });
}


fetch(`https://www.googleapis.com/books/v1/volumes?q=fullstack:keyes&key=${apikey}`)
     .then(response => response.json())
     .then(data => {
      createCard(data.items);
    })
    .catch(error => {
          console.error('Error fetching data:', error);
  })

  

// fetch the data from the Google-book-api by using asynchronous functions
async function fetchBook(){
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}:keyes&key=${apikey}`);
    const data = await response.json();
    // console.log(data.items);
    createCard(data.items); 
}

function submitData(){
  input = bookName.value;
  fetchBook();
}






