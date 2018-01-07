
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Players from './components/Players';
import TopScorers from './components/TopScorers';
import Results from './components/Results';

const RootNavigator = StackNavigator({
	TopScorers: {
		screen: TopScorers,
		navigationOptions: {
			headerTitle: 'Top Scorers',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: '#000'},
		},
	}
});

export default RootNavigator;
