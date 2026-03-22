import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

export interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const FALLBACK_IMAGE = 'https://via.placeholder.com/300x450?text=No+Image';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const FALLBACK_IMAGE =
  'https://via.placeholder.com/300x450?text=No+Image';

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <button
            className={css.card}
            type="button"
            onClick={() => onSelect(movie)}
          >
            <img
              className={css.image}
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : FALLBACK_IMAGE
              }
              alt={movie.title}
            />
            <h2 className={css.title}>{movie.title}</h2>
          </button>
        </li>
      ))}
    </ul>
  );
}
