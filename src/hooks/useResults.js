import { useState , useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState( [] );//Result from the api
	const [errorMessage, setErrorMessage] = useState('')// Error hanler

	//Search function using api start
	const searchApi = async (searchTerm) => {
		try{
			const response = await yelp.get('/search', {
				params:{
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			} );
			setResults(response.data.businesses);
		}
		catch (err){
			setErrorMessage('Something went wrong')
		} 
	};
	//Search function using api end

	//going to call a Function only once when we render the screen for first time start 
	useEffect( () => {
		searchApi('pasta');
	}, [] );

	return [searchApi, results, errorMessage];
};
