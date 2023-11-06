const apiKey = import.meta.env.VITE_MOVIE_SEARCH_API_KEY;

export const getMovieInfo = async (movieId) => {
  // make fetch request and store response
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch from OMBD API");
  }

  // Parse JSON response into a javascript object
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Error fetching movie info");
    return null;
  }

  //   //set the Movie state to the movie
  //   setSelectedMovie(data);
};
