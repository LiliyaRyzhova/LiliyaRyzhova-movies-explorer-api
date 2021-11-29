import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile(props){
	const currentUser = React.useContext(CurrentUserContext);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [editingMode, setEditingMode] = React.useState(false)
	const [nameError, setNameError] = React.useState("");
	const [emailError, setEmailError] = React.useState("");
	const [formValid, setFormValid] = React.useState(false);
	// const [nameIsChanged, setameIsChanged]=React.useState(false)

	function handleEditingModeOn()  {
		setEditingMode(true)
	}

	function handleNameChange(e) {
		const validName = /^[a-zA-Z- ]+$/.test(e.target.value);

    if (e.target.value.length < 2) {
      setNameError("Длина имени должна быть не менее 2 символов");
    } else if (e.target.value.length > 30) {
      setNameError("Длина имени должна должна быть не более 30 символов");
    } else if (!validName) {
      setNameError("Имя должно быть указано латиницей");
    } else {
      setNameError("");
    }
    setName(e.target.value)

}

function handleEmailChange(e) {
	const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
		e.target.value
);

if (!validEmail) {
		setEmailError("Неверный формат почты");
} else {
		setEmailError("");
}
	setEmail(e.target.value )
}

	function handleSubmit(e) {
  e.preventDefault();
  props.onUpdateUserData({
    name,
				email
  });
		// setameIsChanged(true)
		setEditingMode(false)
} 

	React.useEffect(() => {
		if (currentUser.name !== undefined) {
				setName(currentUser.name);
				setEmail(currentUser.email);
		}
}, [currentUser]);

React.useEffect(() => {
	if (nameError || emailError) {
			setFormValid(false);
	} else {
			setFormValid(true);
	}
}, [nameError, emailError]);

React.useEffect(() => {
	if (currentUser.name === name && currentUser.email === email) {
			setFormValid(false);
	} else {
			setFormValid(true);
	}
}, [name, email, currentUser.name, currentUser.email]);

console.log(currentUser)

	return(
  <section className="profile">
			 <Header color='black'/>
				<div className="profile__info-block">
					 {/* {nameIsChanged === false &&(<p className="profile__greeting">{`Привет, ${currentUser.name}!`}</p>)} */}
						<p className="profile__greeting">{`Привет, ${currentUser.name}!`}</p>
						<form className="profile__form" onSubmit={handleSubmit}>
							<div className="profile__form-item">
							 <span className="profile__input-title">Имя</span>
							 {editingMode === false && (<input className="profile__input" type="text" name="name" value={currentUser.name} placeholder={currentUser.name} onChange={handleNameChange} disabled/>)}
								{editingMode === true && (<input className="profile__input" type="text" name="name" value={name} placeholder={currentUser.name} onChange={handleNameChange} />)}
								</div>
								<p className="profile__input-err">{nameError}</p>
								<div className="profile__form-item">
								<span className="profile__input-title">Email</span>
							 {editingMode === false && (<input className="profile__input" type="text" name="email" value={currentUser.email} placeholder={currentUser.email} onChange={handleEmailChange} disabled/>)}
								{editingMode === true && (<input className="profile__input" type="text" name="email" value={email} placeholder={currentUser.email} onChange={handleEmailChange}/>)}
								</div>
								<p className="profile__input-err">{emailError}</p>
								{editingMode === true &&(<div className="profile__err-message">{props.message}</div>)}
								{ editingMode === false && (<button className="profile__button profile__button_edit" type="button" onClick={handleEditingModeOn}>Редактировать</button>)}
								{ editingMode === true &&(<button className={`profile__button profile__button_save-change ${ !formValid ? "profile__button_save-change_disable" : ""}`}
								type="submit" disabled={!formValid}>Сохранить</button>)}
						</form>
						{ editingMode === false && (<Link to="/signin" className="profile__button profile__button_exit" onClick={props.onLogout}>Выйти из аккаунта</Link>)}
				</div>
		</section>
	)
}

export default Profile;