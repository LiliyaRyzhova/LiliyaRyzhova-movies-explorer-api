import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm(props){

	return(
  <div className="search">
			 <form className="serach__form">
					<div className="search__container">
					 <input className="search_input"
						type="search"
						aria-label="Поле поиска по каталогу фильмов"
						placeholder="Фильм" 
						required="true"></input>
						<button className="search__button" type="submit"></button>
						</div>
						<div className="search__checkbox">
							 <p className="search__checkbox-name">Короткометражки</p>
								{/* <input className="search__checkbox-input" type="checkbox"></input> */}
								<FilterCheckbox />
						</div>
				</form>
		</div>
	)
}

export default SearchForm;