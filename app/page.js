import Movie from "./about/Movie";

const axios = require("axios");
let res = [];

export default function Home() {

  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: { q: 'western' },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    res = response.data.d
  }).catch(function (error) {
    console.error(error)
  });

  return (
    <main >
      <h1 >Hello Next 13!</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.map((movie) => (
          movie.i
            ?
            <Movie
              key={movie.id}
              title={movie.l}
              poster_path={movie.i.imageUrl}
            />
            :
            <Movie
              key={movie.id}
              title={movie.l}
              poster_path="https://m.media-amazon.com/images/M/MV5BYzY4ZDFjMTQtYTVkNS00NmViLTg5ZWMtMWM0OWRkYWUwOGVmXkEyXkFqcGdeQXVyMTk2ODc0MjY@._V1_.jpg"
            />
        ))}
      </div>
    </main>
  )
}
