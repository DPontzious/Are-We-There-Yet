import React from 'react';
import '../../pages/Register/Login.css';
import { MdArrowBack } from 'react-icons/md';
import { Link } from "react-router-dom";


const NavigationPanel = (props) => {

	return (
		<div className='NavigationPanel'>
			<div className='dots'>
			<Link to="/" className={ window.location.pathname === "/" || window.location.pathname === "/about"
            	? "nav-link active" : "nav-link"}>
				<MdArrowBack />
			</Link>
			</div>
			<div style={{ flex: 2 }}></div>
		</div>
	);
}



export default NavigationPanel;