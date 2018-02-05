import React, { Component } from 'react';
import styled from 'styled-components/native';

import {
	FlatList,
	Text,
	ScrollView,
	View,
	Image,
	TouchableHighlight,
	Button
} from 'react-native';

class HomeScreen extends Component {

  render() {

    return (
			<View>
				<NavView>

					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('TopScorers')}>
						<MenuText>Top Scorers</MenuText>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Fixtures')}>
						<MenuText>Fixtures</MenuText>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.props.navigation.navigate('Players')}>
						<MenuText>Players</MenuText>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.props.navigation.navigate('Results')}>
						<MenuText>Results</MenuText>
					</TouchableHighlight>

				</NavView>
      </View>
    );
  }
}

const NavView = styled.View`
	flex-direction: row;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-right: 20px;
	justify-content: space-between;
`;

const MenuText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 22px;
`;

const BoxView = styled.View`
	shadow-opacity: 0.75;
	shadow-radius: 1px;
	shadow-color: rgba(0, 0, 0, 0.8);
	shadow-offset: 0px 0px;
	flex: 1;
	margin: 5px;
	padding: 8px;
	justify-content: center;
	align-items: center;
`;

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	padding-top: 5px;
	text-align: center;
`;

const TeamLogo = styled.Image`
  width: 35px;
	height: 35px;
`;

const MainLogoContainer = styled.View`
	align-items: center;
`;

const MainLogo = styled.Image`
	width: 120px;
	height: 120px
`;

export default HomeScreen;
