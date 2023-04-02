import Movie from "./Movie";
import axios from "axios";
let res = []

export default async function Home() {

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/basic',
    params: {
      country: 'us',
      services: 'netflix,prime.buy,hulu.addon.hbo,peacock.free',
      output_language: 'en',
      show_type: 'movie',
      genre: '18',
      show_original_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': `${process.env.API_KEY}`,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  await axios.request(options).then(function (response) {
    res = response.data.result
    console.log(res);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <main >
      <div className="grid gap-16 grid-cols-fluid">
        {res.map((movie) => (
          // Posters are not available from Russia, so we replace them with another picture
          <Movie
            key={movie.imdbId}
            id={movie.imdbId}
            title={movie.title}
            posterFullPath={`https://img.freepik.com/free-photo/real-life-cancer-zodiac-sign_23-2149627244.jpg`}
          // posterFullPath={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
          />
        ))}
      </div>
    </main>
  )
}
