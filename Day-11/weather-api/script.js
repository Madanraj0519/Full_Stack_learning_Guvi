
const  getWeather = async(lat, lng, card) => {
    let apiKey = '3fc8a028655f363852aca1b09b46c610';
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
    let weatherData = await res.json();
    // console.log(weatherData);
    toggleCard(card);
    card.querySelector('#title').innerText = `${weatherData.name}`;
    card.querySelector('#weatherDescription').innerText = `Weather: ${weatherData.weather[0].description}`;
    card.querySelector('#temperature').innerText = `Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
    card.querySelector('#wind-deg').innerText = `Wind-degree: ${weatherData.wind.deg}°`;
    card.querySelector('#wind-speed').innerText = `Wind-speed: ${weatherData.wind.speed}`;


}

const createCard = (data) => {
    data.slice(0, 40).forEach((item) => {

        let div = document.getElementById("root");
        let card = document.createElement("div");
        card.innerHTML = `
      <div class="col">
          <div class="card front h-100 p-2">
           <div class="card-header">
              <h4 class="card-title text-center text-info">${item.name.common}</h4>
            </div>
                <img src=${item.flags.png} class="card-img-top" alt="card">
            <div class="card-body">
              <h5 class="card-title text-center">Capital : ${item.capital}</h5>
              <p class="card-text text-center mt-3">Region : ${item.region}</p>
              <p class="card-text text-center"> Country code : ${item.flag}</p>
              <p class="card-text text-center"> Population : ${item.population}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
               <button class="btn btn-primary px-4" type="submit" onClick="getWeather(${item.latlng[0]}, ${item.latlng[1]}, this.parentNode.parentNode.parentNode)">Check weather</button>
            </div>
          </div>


           <div class="card back p-2" style="display: none;">
              <div class="card-header">
                <h4 class="card-title text-center text-info" id="title"></h4>
               </div>
                 <img src=${item.flags.png} class="card-img-top" alt="card">
               <div class="card-body">
                  <h5 class="card-title text-center" id="weatherDescription"></h5>
                  <p class="card-text text-center mt-3" id="temperature"></p>
                  <p class="card-text text-center" id="wind-deg"></p>
                  <p class="card-text text-center" id="wind-speed"></p>
                </div>
                <div class="card-footer d-flex justify-content-center">
                   <button class="btn btn-primary px-4" type="submit" onClick="toggleCard(this.parentNode.parentNode.parentNode)">Back</button>
                </div>
              </div>
        </div>
        `
        div.appendChild(card);
        console.log(item);
    });
}


function toggleCard(card) {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
    }
}



async function getData(){
    const res = await fetch('https://restcountries.com/v3.1/all',{method:'GET'});
    const data = await res.json();
    createCard(data);
}

getData();