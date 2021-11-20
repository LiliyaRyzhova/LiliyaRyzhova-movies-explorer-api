import React from 'react';
import './Register.css';
import StartPage from '../StartPage/StartPage';
import StartPageInputItem from '../StartPageInputItem/StartPageInputItem';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { checkToken } from '../../utils/auth';

class Register extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			email: '',
			password: '',
			name: '',
			emailErr: '',
			nameErr: '',
			passwordErr: '',
			isValid: false
		}
		// this.handleChange = this.handleChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.checkValidity = this.checkValidity.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// }

	handleEmailChange = (e) => {
		const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
			e.target.value
	);
	
	if (!validEmail) {
		this.setState({emailErr: "Неверный формат почты"})
	} else {
			this.setState({emailErr: ""})
	}
		this.setState({email: e.target.value })
		this.checkValidity()
	}

	handleNameChange = (e) => {
		const validName = /^[a-zA-Z- ]+$/.test(e.target.value);
	
		if (e.target.value.length < 2) {
			this.setState({nameErr: "Длина имени должна быть не менее 2 символов"})
	} else if (e.target.value.length > 30) {
		this.setState({nameErr: "Длина имени должна должна быть не более 30 символов"})
	} else if (!validName) {
		this.setState({nameErr: "Имя должно быть указано латиницей"})
	} else {
		this.setState({nameErr: ""})
	}
	this.setState({name: e.target.value });
	this.checkValidity()
}

handlePasswordChange =(e) => {
	if (e.target.value.length < 10) {
		this.setState({passwordErr: "Пароль должен быть не менее 10 символов"})
} else {
	this.setState({passwordErr: ""})
}
this.setState({password: e.target.value });
this.checkValidity()
}

checkValidity = () =>{
	if (this.state.emailErr === '' && this.state.nameErr === '' && this.state.passwordErr === '') {
  this.setState({isValid: true})
	} else {
		this.setState({isValid: false})
	}
}

	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onRegister(this.state.email, this.state.password, this.state.name)
	};



	render() {
			return(
				<section className="sign-up">
						<StartPage>
							<form className="sign-up__form" onSubmit={this.handleSubmit} onChange={this.checkValidity}>
								<StartPageInputItem title='Имя' inputType='text' inputValue={this.state.name} inputName='name' onChange={this.handleNameChange}/>
								<p className="sign-up__erorr-field">{this.state.nameErr}</p>
								<StartPageInputItem title='E-mail' inputType='email' inputValue={this.state.email} inputName='email' onChange={this.handleEmailChange}/>
								<p className="sign-up__erorr-field">{this.state.emailErr}</p>
								<StartPageInputItem title='Пароль' inputType='password' inputValue={this.state.password} inputName='password' onChange={this.handlePasswordChange}/>
								<p className="sign-up__erorr-field">{this.state.passwordErr}</p>
								<p className="sign-up__err">{this.props.message}</p>
								<button className={`sign-up__button ${this.state.isValid ? '' : "sign-up_button_disable"}`} type='submit' disabled={this.state.emailErr != '' || this.state.nameErr != '' || this.state.passwordErr != ''}>Зарегистрироваться</button>
								</form>
						</StartPage>
				</section>
		)
	}
}

export default Register;