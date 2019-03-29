import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../pages/Register/Login.css';
import { Motion, spring } from 'react-motion';
import Input from './input';
import SubmitButton from './SubmitButton';
import axios from 'axios';

class SignExpanded extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.routeChange = this.routeChange.bind(this);
	// }

	// routeChange() {
	// 	let path = `/trip`;
	// 	this.props.history.push(path);
	// 	// localStorage.setItem("email", this.state.email)
	// 	// localStorage.setItem("password", this.state.password);
	// 	console.log(this.state)
	// }

	state = {
		email: "",
		password: ""
	}


	componentDidMount() {
		this.setState({ flexState: !this.state.flexState });
	}


	isFinished = () => {
		this.setState({ animIsFinished: true });
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};


	handleSubmit = (e) => {
		e.preventDefault();
		//send signIn call to server
		if (this.props.type === 'signIn') {
			let userInfo = {
				email: this.state.email,
				password: this.state.password
			}
			//axios /v1/signin
			axios.post("/v1/signin", userInfo)
				.then(({ data }) => {
					console.log(data);
					this.setState({
						email: "",
						password: ""
					})

					if(data.token !== null){
					//set token in local storage
					localStorage.setItem("token", data.token);

						//new axios call to "/api/save" send req.body = {origin: ..., destination: ....}
						
						
						console.log(this.props)
						console.log(this)
						let path = `/trip`;
						this.props.history.push(path);
					}else{
						alert("Bad signin. Try again!");
					}


				})
				.catch(err => console.log(err));
		}
		//send signUp call to server
		if (this.props.type === 'signUp') {
			let userInfo = {
				email: this.state.email,
				password: this.state.password
			}
			//axios /v1/signup
			axios.post("/v1/signup", userInfo)
				.then(({ data }) => {
					console.log(data);
					this.setState({
						email: "",
						password: ""
					})
					if (data.token.user) {
						this.props.history.push("/")

					} else {
						console.log(
							"not working")
					}
					//if token
					// use react router to redirect
					//else
					//alert

				})
				.catch(err => console.log(err));
		}

	}

	render() {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
				{({ flexVal }) =>
					<div className={this.props.type === 'signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
						flexGrow: `${flexVal}`
					}}>
						<Motion style={{
							opacity: spring(this.state.flexState ? 1 : 0, { stiffness: 300, damping: 17 }),
							y: spring(this.state.flexState ? 0 : 50, { stiffness: 100, damping: 17 })
						}} >
							{({ opacity, y }) =>
								<form className='logForm' style={{
									WebkitTransform: `translate3d(0, ${y}px, 0)`,
									transform: `translate3d(0, ${y}px, 0)`,
									opacity: `${opacity}`
								}}>
									<h2>{this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
									<Input
										id="email"
										type="text"
										name="email"
										value={this.state.email}
										onChange={this.handleInputChange}
										placeholder="EMAIL" />
									<Input
										id="password"
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleInputChange}
										placeholder="PASSWORD" />
									<SubmitButton type={this.props.type} clickListenerFn={this.handleSubmit}></SubmitButton>
									<a href="url" className='forgotPass'>{this.props.type === 'signIn'}</a>
									<a href="url" className='forgotPass'>{this.props.type === 'signUp'}</a>
								</form>
							}
						</Motion>
					</div>
				}
			</Motion>
		);

	}

}

SignExpanded.propTypes = {
	type: PropTypes.string
};

export default SignExpanded;