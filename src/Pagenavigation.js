import React from 'react';
import Pagenavigation from './Pagenavigation.css';

export default (props) => {
	const {
		      showPrevLink,
		      showNextLink,
		      handlePrevClick,
		      handleNextClick,
		      loading,
	      } = props;

	return (
		<div className="nav-link-container dd">
			<a
				href="#"
				className={`
				nav-link ap 
				${ showPrevLink ? 'show' : 'hide'}
				${ loading ? 'greyed-out' : '' }
				`}
				onClick={handlePrevClick }
				>
				Prev
			</a>
			<a
				href="#"
				className={`
				nav-link
				${showNextLink ? 'show' : 'hide'}
				${ loading ? 'greyed-out' : '' }
				`}
				onClick={handleNextClick}
				>
				Next
			</a>
		</div>
	);
};

