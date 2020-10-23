import React, { useState }  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
	const [term , setTerm] = useState(''); //Searched term
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) =>{
		//price === '$'|| '$$'|| '$$$'
		return results.filter( result => {
			return result.price === price;
		});
	};

	//cosmetic
	return (
		<View style={{ flex: 1 }} >
			<SearchBar term={term} 
				onTermChange={ newTerm => setTerm(newTerm) }
				onTermSubmit={ () => searchApi(term) }

			/>
			<ScrollView>
			<ResultsList 
				title='Cost Effective' 
				results={filterResultsByPrice('$')} 
				navigation={navigation} 
			/>
			<ResultsList 
				title='Bit Pricier' 
				results={filterResultsByPrice('$$')} 
				navigation={navigation}
			/>
			<ResultsList 
				title='Big Spender' 
				results={filterResultsByPrice('$$$')} 
				navigation={navigation}
			/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;