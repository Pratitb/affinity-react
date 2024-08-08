import { useState } from 'react';
import './Accordion.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Accordion({ accordion_head, accordion_content }) {
	const [contentVisibility, setcontentVisibility] = useState(false);
	const showContent = () => {
		setcontentVisibility(!contentVisibility);
	};

	return (
		<div className="accordion">
			<div className="accordion_head" onClick={showContent}>
				{accordion_head}
				{contentVisibility ? (
					<FaMinus />
				) : (
					<FaPlus className="accordion_arrow" />
				)}
			</div>
			<div
				className={`accordion_content ${
					contentVisibility ? 'show_content' : ''
				}`}>
				{accordion_content}
			</div>
		</div>
	);
}

export default Accordion;
