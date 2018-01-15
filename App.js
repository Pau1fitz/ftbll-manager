import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Players from './components/Players';
import TopScorers from './components/TopScorers';
import Results from './components/Results';
import Fixtures from './components/Fixtures';

const RootNavigator = StackNavigator({
	Results: {
		screen: Results,
		navigationOptions: {
			headerTitle: 'Results',
			headerTintColor: '#fff',
			headerStyle: { backgroundColor: '#000'},
		},
	}
});

export default RootNavigator;
