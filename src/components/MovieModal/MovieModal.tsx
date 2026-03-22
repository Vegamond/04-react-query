import { useEffect } from 'react';
import type { Movie } from '../../types/movie';
import css from './MovieModal.module.css';

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const FALLBACK_IMAGE =
  'https://via.placeholder.com/300x450?text=No+Image';

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          ×
        </button>

        <img
          className={css.image}
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : FALLBACK_IMAGE
          }
          alt={movie.title}
        />

        <div className={css.content}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.text}>{movie.overview || 'No description available.'}</p>
        </div>
      </div>
    </div>
  );
}
