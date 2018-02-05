import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Players from './components/Players';
import TopScorers from './components/TopScorers';
import Results from './components/Results';
import Fixtures from './components/Fixtures';
import HomeScreen from './components/HomeScreen';
import Chat from './components/Chat';

const RootNavigator = StackNavigator({

	Home: {
		screen: HomeScreen,
		navigationOptions: {
		headerTitle: 'Home',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: '#000'},
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
  },
  Fixtures: {
		screen: Fixtures,
		navigationOptions: {
		headerTitle: 'Fixtures',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: '#000'},
		},
	},
	Chat: {
		screen: Chat,
		navigationOptions: {
		headerTitle: 'Chat',
				headerTintColor: '#fff',
				headerStyle: { backgroundColor: '#000'},
		},
	}
});

export default RootNavigator;


