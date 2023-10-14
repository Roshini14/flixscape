import {
  MoviesContainer,
  MoviesTitle,
  MoviesRow,
  MoviePoster,
} from "./Movies.styles";

function Movies({ title, movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
