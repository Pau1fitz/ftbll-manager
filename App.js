
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Players from './components/Players';
import Results from './components/Results';

const RootNavigator = StackNavigator({
	Results: {
		screen: Results,
		navigationOptions: {
			headerTitle: 'Results',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: '#000'},
		},
	},
	Players: {
		screen: Players,
		navigationOptions: {
			headerTitle: 'Players',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: '#000'},
		},
	}


});

export default RootNavigator;
