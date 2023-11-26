request.onload = function () {
    var studentData = JSON.parse(this.responseText);
  
    // a. Get all the countries from Asia Continent/region using filter function
    const asiaCountries = studentData.filter(country => country.continents.includes("Asia") || country.region === "Asia");
    console.log(asiaCountries);
  
    // b. Get all the countries with a population of less than 2 lakhs using filter function
    const lessPopulatedCountries = studentData.filter(country => country.population < 200000);
    console.log(lessPopulatedCountries);
  
    // c. Print the following details name, capital, flag using forEach function
    studentData.forEach(country => {
      if (country.capital)
        console.log(`${country.name.common}, ${country.capital[0]}, ${country.flags.png}`);
      // display_image(country.flags.png, 276, 110, "JavaScriptImage");
    });
  
    // d. Print the total population using reduce function (showns flags in browser window)
    const wholePopulation = studentData.reduce((total, country) => total + country.population, 0);
    console.log(`Total population of all countries: ${wholePopulation}`);
  
    // e. Print the country which uses US dollars as currency
    const usdCountries = studentData.filter(country => country?.currencies?.USD).map(country => country.name.common);
    console.log(usdCountries);
  };
  