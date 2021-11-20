export const BASE_URL='http://api.movie.nomoredomains.monster';

const checkResult = (response) => {
	if(response.ok) {
			return response.json();
	};
	return Promise.reject(`Ошибка: ${response.status}`);
};

export const register=(email, password, name)=> {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
				credentials: "include",
    body: JSON.stringify({email, password, name})
  })
		.then((response) => checkResult(response))
		.then((result) => {
					return result;
					})
}; 

export const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json'
			},
			credentials: "include",
			body: JSON.stringify({email, password})
	})
	.then((response) => checkResult(response))
	.then((data) => {
				if (data){
					localStorage.setItem('jwt', data.token);
     console.log(data)
					return data;
							
			}
	})
};

export const checkToken = (token) => {
	return fetch(`${BASE_URL}/user/me`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
},
   credentials: "include",
		})
.then((response) => checkResult(response))
.then((data) => {
	console.log(data)
	return data;
})
}
