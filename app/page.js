const axios = require("axios");
let res = '';

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

  console.log(res);

  return (
    <main >
      <h1 >Hello Next 13!</h1>
      {res.map((movie => (
        <div>
          <h1>{movie.l}</h1>
        </div>
      )))}
    </main>
  )
}
