import React from 'react';
import '../../pages/Register/Login.css';
import { MdArrowBack } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';

const NavigationPanel = (props) => {

	return (
		<div className='NavigationPanel'>
			<MdArrowBack onClick={props.initialState} className='back' />
			<div className='dots'>
				<FaCircle className='dotSelected' />
				<FaCircle className='dot' />
				<FaCircle className='dot' />
			</div>
			<div style={{ flex: 2 }}></div>
		</div>
	);
}



export default NavigationPanel;