
class Movie{
    
    // a) Write a constructor for the class Movie,
         // which takes a String representing the title of the movie,a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
    // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    constructor(movie, studio, rating = "PG"){
        this.movie = movie;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(PGmovies){
        let result = PGmovies.filter((ele) => ele.rating === "PG");
        console.log(result);
    }
}


  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
  const newMovie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
  const newMovie2 = new Movie("The Dark Knight", "Warner Bros.", "R");
  const newMovie3 = new Movie("Inception", "Lionsgate", "PG-13");

