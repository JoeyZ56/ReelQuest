const apiKey = import.meta.env.VITE_MOVIE_SEARCH_API_KEY;

export const getMovies = async (searchTerm) => {
  // make fetch request and store response
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch from OMBD API");
  }

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching movie info");
  }
};
