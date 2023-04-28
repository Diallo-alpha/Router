import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetailsPage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, description, posterURL, rating, trailerLink } = movie;

  return (
    <div className="movie-details">
      <h2>{title}</h2>
      <div className="movie-details-content">
        <img src={posterURL} alt={title} />
        <div className="movie-details-text">
          <p>{description}</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
      <div className="movie-details-trailer">
        <iframe
          src={trailerLink}
          title={title}
          width="560"
          height="315"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour Acceuill</Link>
    </div>
  );
};

export default MovieDetailsPage
