import React, { useState } from 'react';

function useDropdown(options, defaultOption) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const Dropdown = () => (
    <select
      value={selectedOption}
      onChange={(e) => {
        const newValue = e.target.value;
        setSelectedOption(newValue);
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return [selectedOption, Dropdown];
}

export default useDropdown;
