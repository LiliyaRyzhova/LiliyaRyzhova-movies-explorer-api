import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

function SearchForm(props){

	 const [findedMovie, setFindedMovie] = React.useState("");
  const [error, setError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);
		// const [shortMovies, setShortMovies] = React.useState(false);

  function handleSearchMovie(e) {
    setFindedMovie(e.target.value);
    if (e.target.value.length === 0) {
      setError("Нужно ввести ключевое слово");
    } else {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    props.onGetMovies(findedMovie);
    setFindedMovie("");
  }

  React.useEffect(() => {
    if (findedMovie && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [findedMovie, error]);

	return(
  <div className="search">
			 <form className="serach__form" onSubmit={handleSubmit}>
					<div className="search__container">
					 <input className="search_input"
						type="search"
						aria-label="Поле поиска по каталогу фильмов"
						placeholder="Фильм" 
						required={true}
						value={findedMovie}
						onChange={handleSearchMovie}></input>
						<button className="search__button" type="submit" onClick={handleSubmit} disabled={!formValid}></button>
						</div>
						<div className="search__checkbox">
							 <p className="search__checkbox-name">Короткометражки</p>
								{/* <input className="search__checkbox-input" type="checkbox"></input> */}
								<FilterCheckbox onFilter={props.onFilter}/>
						</div>
				</form>
		</div>
	)
}

export default SearchForm;