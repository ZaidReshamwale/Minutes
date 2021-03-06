
	 import axios from 'axios';
import './Search.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import { FontAwesomeIcon, FortAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Loader from './Loader.gif';

import Pagenavigation from './Pagenavigation.js'

import React from 'react';

class Search extends  React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
                        totalResults: 0,
		totalPages: 0,
		currentPageNo: 0,
		};
		this.cancel = '';

	}



getPagesCount = (total, denominator) => {
	const divisible = total % denominator === 0;
	const valueToBeAdded = divisible ? 0 : 1;
	return Math.floor(total / denominator) + valueToBeAdded;
};
	// functioNwhich takes two parameters updatedpagenumber and query

	fetchSearchResults = (updatedPageNo = '', query ) => {
const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
		const searchUrl = `https://pixabay.com/api/?key=20871467-b537840d7f40d60e65a4cd52e&q=${query}${pageNumber}`


		if (this.cancel) {
		// Cancel the previous request before making a new request
		this.cancel.cancel();
	}
	// Create a new CancelToken
	this.cancel = axios.CancelToken.source();
axios.get(searchUrl, {
			cancelToken: this.cancel.token,
		})
		.then((res) => {
			const total = res.data.total;
		const totalPagesCount = this.getPagesCount( total, 20 );
			const resultNotFoundMsg = !res.data.hits.length
				? 'There are no more search results. Please try a new search. Please try with new search'
				: '';

				console.warn(res);
			this.setState({
	results: res.data.hits,
			totalResults: res.data.total,
			currentPageNo: updatedPageNo,
			
				totalPages: totalPagesCount,
				message: resultNotFoundMsg,
				loading: false,
			});
		})
		.catch((error) => {
			if (axios.isCancel(error) || error) {
				this.setState({
					loading: false,
					message: 'Failed to fetch results.Please check network',
				});
			}
		});
};


	
handlePageClick = (type) => {

	const updatedPageNo =

		      'prev' === type
			      ? this.state.currentPageNo - 1
			      : this.state.currentPageNo + 1;
			     

	if (!this.state.loading) {
		this.setState({ loading: true, message: '' }, () => {
			// Fetch previous 20 Results
			this.fetchSearchResults(updatedPageNo, this.state.query);

		});
	}

};


	renderSearchResults = () => {
	const {results} = this.state;

	if (Object.keys(results).length && results.length) {
		return (
			<div className="results-container">
				{results.map((result) => {
					return (
						<a key={result.id} href={result.previewURL} className="result-items">
							<h6 className="image-username">{result.user}</h6>
							<div className="image-wrapper">
								<img className="image" src={result.previewURL} alt={`${result.username} image`}/>
							</div>
						</a>
					);
				})}
			</div>
		);
	}
};


	



	handleOnInputChange = (event) => {
	const query = event.target.value;
	console.warn (this.state);
       if ( ! query ) {
		this.setState({ query, results: {},totalResults: 0, totalPages: 0, currentPageNo: 0, message: '' } );
	} else {
		this.setState({ query, loading: true, message: '' }, () => {
			this.fetchSearchResults(1, query);
		});
	}
};

	render() {

		const{query,currentPageNo, loading , totalPages, message}= this.state;

const showPrevLink = 1 < currentPageNo;


const showNextLink = totalPages > currentPageNo;
		return (
		<>
				{/*Heading*/}
				{/*Search Input*/}

				 <form action="" >
      <input type="text" value={query} placeholder="Search Here...." id="search-input" name="query"  style={{width:'95%'}}   onChange= {this.handleOnInputChange} />
     
    </form>
{/*Error Message*/}
{ message && <p className="message">{ message }</p> }

{/*Loader*/}
<img  src={Loader} className={`search-loading ${loading ? 'show' : 'hide' }`}  alt="loader"/>
{/*Navigation Top*/}
<Pagenavigation loading={loading}
	showPrevLink={showPrevLink}
	showNextLink={showNextLink}
	handlePrevClick={() => this.handlePageClick('prev')}
	handleNextClick={() => this.handlePageClick('next')}/>

{/*result*/}
    			{this.renderSearchResults()}


				{/*Navigation Down*/}

<Pagenavigation
loading={loading}
	showPrevLink={showPrevLink}
	showNextLink={showNextLink}
	handlePrevClick={() => this.handlePageClick('prev')}
	handleNextClick={() => this.handlePageClick('next')}/>
			</>
			)
	}
}

export default Search;