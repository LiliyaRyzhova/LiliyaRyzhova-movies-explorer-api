import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="filter-checkbox" htmlFor="checkbox">
      <input
        className="filter-checkbox__input"
        defaultChecked={props.checkBoxStatus}
        type="checkbox"
        name="short-film"
        id="checkbox"
        onChange={props.onFilter}
        checked={props.isShortMovie}
      />
      <span className="filter-checkbox__pseudo-input" />
    </label>
  );
}

export default FilterCheckbox;