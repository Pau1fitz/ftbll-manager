import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Players from './components/Players';
import TopScorers from './components/TopScorers';
import Results from './components/Results';
import Fixtures from './components/Fixtures';
import HomeScreen from './components/HomeScreen';

const RootNavigator = StackNavigator({

	Home: {
		screen: HomeScreen,
		navigationOptions: {
		headerTitle: 'Home',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
	},
	TopScorers: {
		screen: TopScorers,
		navigationOptions: {
			headerTitle: 'Top Scorers',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: '#000'},
		},
  },
  Results: {
		screen: Results,
		navigationOptions: {
		headerTitle: 'Results',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
  },
  Players: {
		screen: Players,
		navigationOptions: {
		headerTitle: 'Players',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
  },
  Fixtures: {
		screen: Fixtures,
		navigationOptions: {
		headerTitle: 'Fixtures',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: 'rgb(60, 0, 60)'},
		},
	}
});

export default RootNavigator;


