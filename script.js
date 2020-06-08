//getting all the stuffs here
const searchField = document.querySelector(".inputValue");
const searchButton = document.querySelector(".searchIcon");
const poster = document.querySelector(".poster");
const image = document.querySelector(".posterImage");
const details = document.querySelector(".details");

//for placing the data
const movieTitle = document.querySelector(".movieTitle");
const release = document.querySelector(".release");
const type = document.querySelector(".type");
const runtime = document.querySelector(".runtime");
const actors = document.querySelector(".actors");
const awards = document.querySelector(".awards");
const country = document.querySelector(".country");
const director = document.querySelector(".director");
const genre = document.querySelector(".genre");
const language = document.querySelector(".language");
const metascore = document.querySelector(".metascore");
const writers = document.querySelector(".writers");
const imdbvotes = document.querySelector(".imdbvotes");
const imdbrating = document.querySelector(".imdbrating");
const rotten = document.querySelector(".rotten");
const metacritic = document.querySelector(".metacritic");
//flag
var count = 0;

searchButton.addEventListener("click", () => {
  if (count > 0) {
    //clearing everything for the repaint
    movieTitle.removeChild(movieTitle.childNodes[1]);
    release.removeChild(release.childNodes[1]);
    type.removeChild(type.childNodes[1]);
    runtime.removeChild(runtime.childNodes[1]);
    actors.removeChild(actors.childNodes[1]);
    awards.removeChild(awards.childNodes[1]);
    country.removeChild(country.childNodes[1]);
    director.removeChild(director.childNodes[1]);
    genre.removeChild(genre.childNodes[1]);
    language.removeChild(language.childNodes[1]);
    metascore.removeChild(metascore.childNodes[1]);
    writers.removeChild(writers.childNodes[1]);
    imdbvotes.removeChild(imdbvotes.childNodes[1]);
    imdbrating.removeChild(imdbrating.childNodes[1]);
    rotten.removeChild(rotten.childNodes[1]);
    metacritic.removeChild(metacritic.childNodes[1]);
  }
  const movie = searchField.value;
  fetch(`http://www.omdbapi.com/?t=${movie}&apikey=5e322a32`)
    .then((response) => {
      return response.json();
    })
    .then((response2) => {
      if (response2.Response === "False") {
        alert("Movie not found!");
      }
      console.log(response2);
      //incrementing the count
      count += 1;
      //setting up the poster
      image.src = response2.Poster;
      //setting up the movie title
      movieTitle.appendChild(document.createTextNode(response2.Title));
      //release date
      release.appendChild(document.createTextNode(response2.Released));
      //type
      type.appendChild(document.createTextNode(response2.Type));
      //runtime
      runtime.appendChild(document.createTextNode(response2.Runtime));
      //actors
      actors.appendChild(document.createTextNode(response2.Actors));
      //awards
      awards.appendChild(document.createTextNode(response2.Awards));
      //country
      country.appendChild(document.createTextNode(response2.Country));
      //director
      director.appendChild(document.createTextNode(response2.Director));
      //genre
      genre.appendChild(document.createTextNode(response2.Genre));
      //language
      language.appendChild(document.createTextNode(response2.Language));
      //metascore
      metascore.appendChild(document.createTextNode(response2.Metascore));
      //writers
      writers.appendChild(document.createTextNode(response2.Writer));
      //imdb votes
      imdbvotes.appendChild(document.createTextNode(response2.imdbVotes));
      //imdb rating
      imdbrating.appendChild(
        document.createTextNode(response2["Ratings"][0].Value)
      );
      //rotten tomatoes rating
      rotten.appendChild(
        document.createTextNode(response2["Ratings"][1].Value)
      );
      //metacritic rating
      metacritic.appendChild(
        document.createTextNode(response2["Ratings"][2].Value)
      );
      //clearing the searchfield
      searchField.value = "";
    });
});
