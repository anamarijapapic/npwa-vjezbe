import React, { useState, useEffect } from 'react';
import SelectedLabel from './SelectedLabel';

const GenreSelector = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSubgenre, setSelectedSubgenre] = useState('');
  const [subgenres, setSubgenres] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://demo7168568.mockable.io/subgenres');
        const data = await response.json();
        setSubgenres(data.subgenres);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching subgenres:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {loading ? (
        <p>Loading subgenres...</p>
      ) : (
        <>
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
              <select
                id="subgenreSelect"
                onChange={handleSubgenreChange}
                value={selectedSubgenre}
              >
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
        </>
      )}
    </div>
  );
};

export default GenreSelector;
