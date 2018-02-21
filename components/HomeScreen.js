import React, { Component } from 'react';
import styled from 'styled-components/native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import {
	FlatList,
	Text,
	ScrollView,
	View,
	Image,
	TouchableHighlight,
	Button
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <NavView>

        <TouchableHighlight
          onPress={() => navigation.navigate('TopScorers')}>
          <MenuText>Top Scorers</MenuText>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigation.navigate('Fixtures')}>
          <MenuText>Fixtures</MenuText>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('Players')}>
          <MenuText>Players</MenuText>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('Results')}>
          <MenuText>Results</MenuText>
        </TouchableHighlight>

				<TouchableHighlight onPress={() => navigation.navigate('Chat')}>
          <MenuText>Chat</MenuText>
        </TouchableHighlight>

      </NavView>

			<View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    </View>
  );
};

const NavView = styled.View`
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