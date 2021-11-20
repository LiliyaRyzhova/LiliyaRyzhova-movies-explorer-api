const mainUrl = "http://api.movie.nomoredomains.monster"

const checkResponse = (res)=> {
	if (res.ok) {
			return res.json();
	}
	return Promise.reject(`Ошибка ${res.status}`);
}

const saveUserMovie = (movie) =>{
	return fetch(`${mainUrl}/movies`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
				country: movie.country,
				director: movie.director,
				duration: movie.duration,
				year: movie.year,
				description: movie.description,
				image: movie.image,
				trailer: movie.trailer,
				thumbnail: movie.thumbnail,
				movieId: movie.movieId,
				nameRU: movie.nameRU,
				nameEN: movie.nameEN,
		}),
}).then(checkResponse);
}

const getUserMovies = () => {
	return fetch(`${mainUrl}/movies`, {
			method: 'GET',
			credentials: 'include',
			headers: {
					'Content-Type': 'application/json'
			},
	})
			.then(checkResponse)
	// .then((res) => {console.log(res)})
}

const deleteMovie = (id) => {
	return fetch(`${mainUrl}/movies/${id}`, {
			method: "DELETE",
			credentials: 'include',
			headers: {
					"Content-Type": "application/json",
			},
	}).then(checkResponse);
}

const getUserData = () => {
	return fetch(`${mainUrl}/users/me`, {
			method: 'GET',
			credentials: 'include',
			headers: {
					'Content-Type': 'application/json'
			},
	})
			.then(checkResponse)
	// .then((res) => {console.log(res)})

}

const changeUserData =(inputValues) =>{
	return fetch(`${mainUrl}/users/me`, {
		method: 'PATCH',
		credentials: 'include',
		headers: {
				'Content-Type': 'application/json'
		},
		body: JSON.stringify({
				name: inputValues.name,
				email: inputValues.email,

		})
})
		.then(checkResponse)
}


const logOut =() => {
	return fetch(`${mainUrl}/signout`, {
		method: 'POST',
		credentials: 'include',
		headers: {
				'Content-Type': 'application/json'
		},
})
		.then(checkResponse)
}

export {saveUserMovie, deleteMovie, getUserMovies, getUserData, logOut, changeUserData};