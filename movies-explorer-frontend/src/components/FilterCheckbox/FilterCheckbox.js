import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="filter-checkbox" htmlFor="checkbox">
      <input
        className="filter-checkbox__input"
        defaultChecked={false}
        type="checkbox"
        name="short-film"
        id="checkbox"
      />
      <span className="filter-checkbox__pseudo-input" />
    </label>
  );
}

export default FilterCheckbox;