import React, { useState } from 'react';
import SelectedLabel from './SelectedLabel';

const subgenres = {
  "SF": ["Super Hero SF", "Fantazy SF", "Action SF"],
  "Action": ["British Action", "Car chase Action", "SF Action", "Crime Action"],
  "Horror": ["Thriller horror", "Zombie horror", "Psychological horror", "Comedy horror"],
  "Comedy": ["Romantic Comedy", "Black Comedy", "Satiric Comedy"],
  "Drama": ["Melodrama", "Family Drama"],
  "British": ["Action British", "Comedy British"],
  "Tragedy": ["Family", "War Tragedy", "Psychological Tragedy"]
};

const GenreSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSubgenre, setSelectedSubgenre] = useState('');

  const genres = Object.keys(subgenres);
  const subgenresOfSelectedGenre = selectedGenre ? subgenres[selectedGenre] : [];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setSelectedSubgenre('');
  };

  const handleSubgenreChange = (event) => {
    setSelectedSubgenre(event.target.value);
  };

  return (
    <div>
      <label htmlFor="genreSelect">Choose a Genre:</label>
      <select id="genreSelect" onChange={handleGenreChange} value={selectedGenre}>
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      {selectedGenre && <SelectedLabel label={selectedGenre} />}

      {selectedGenre && (
        <div>
          <label htmlFor="subgenreSelect">Choose a Subgenre:</label>
          <select id="subgenreSelect" onChange={handleSubgenreChange} value={selectedSubgenre}>
            <option value="">Select Subgenre</option>
            {subgenresOfSelectedGenre.map((subgenre) => (
              <option key={subgenre} value={subgenre}>
                {subgenre}
              </option>
            ))}
          </select>
          {selectedSubgenre && <SelectedLabel label={selectedSubgenre} />}
        </div>
      )}
    </div>
  );
};

export default GenreSelector;
