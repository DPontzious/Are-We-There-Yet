import React from 'react';
import PropTypes from 'prop-types';
import '../../pages/Register/Login.css';
import { MdArrowForward } from 'react-icons/md';
// import { Motion, spring } from 'react-motion';

const SubmitButton = (props) => {

	let socialNets = null;

	if (props.type === 'signIn') {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	} else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
			{socialNets}
			<button onClick={(e) => props.clickListenerFn(e)} className={props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward /></button>
		</div>


	);
}
// esint-disable-next-line react/no-typos
SubmitButton.propTypes = {
	// esint-disable-next-line react/no-typos
	type: PropTypes.string
};

export default SubmitButton;