import React from 'react';
import './Login.css';
import StartPageInputItem from '../StartPageInputItem/StartPageInputItem';
import StartPage from '../StartPage/StartPage';

class Login extends React.Component {
	constructor(props){
			super(props);
			console.log(props)
			this.state = {
					email: '',
					password: '',
					emailErr: '',
					passwordErr: '',
					isValid: false,
					validEmail: false,
					validPassword: false
			}
			// this.handleChange = this.handleChange.bind(this);
			this.handleEmailChange = this.handleEmailChange.bind(this)
			this.handlePasswordChange = this.handlePasswordChange.bind(this)
			this.checkValidity = this.checkValidity.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this);
				}

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
					this.setState({validEmail: true })
					this.checkValidity()
				}

				handlePasswordChange =(e) => {
					const validPassword =  /[a-z0-9]{10,20}/ig.test(e.target.value);

					if (!validPassword || e.target.value.length < 10) {
						this.setState({passwordErr: "Пароль должен содержать не менее 10 символов"})
				} else {
					this.setState({passwordErr: ""})
				}
				this.setState({password: e.target.value });
				this.setState({validpass: true })
				this.checkValidity()
				}

				checkValidity = () =>{
					if (this.state.validEmail ||  this.state.validPassword) {
						this.setState({isValid: true})
					} else {
						this.setState({isValid: false})
					}
				}

	handleSubmit(e){
							e.preventDefault()
			this.props.onLogin(this.state.email, this.state.password)};
					
	 render(){

	return(
		<section className="sign-in">
			 <StartPage>
					<form className="sign-in__form" onSubmit={this.handleSubmit} onChange={this.checkValidity}>
				<StartPageInputItem title='E-mail' inputType='email' inputValue={this.state.email} inputName='email' onChange={this.handleEmailChange}/>
				<p className="sign-in__erorr-field">{this.state.emailErr}</p>
				<StartPageInputItem title='Пароль' inputType='password' inputValue={this.state.password} inputName='password' onChange={this.handlePasswordChange}/>
				<p className="sign-in__erorr-field">{this.state.passwordErr}</p>
				<p className="sign-in__err">{this.props.message}</p>
				<button className={`sign-in__button ${this.state.isValid ? '' : "sign-in_button_disable"}`} type='submit' disabled={!this.state.isValid}>Войти</button>
				</form>
				</StartPage>
		</section>
	)
}
}

export default Login;
