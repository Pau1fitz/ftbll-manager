import React, { Component } from 'react'
import styled from 'styled-components/native'
import FBSDK from 'react-native-fbsdk'

import { 
  LoginButton, 
  AccessToken, 
  GraphRequestManager, 
  GraphRequest 
} from 'react-native-fbsdk'

import {
	FlatList,
	Text,
	ScrollView,
	View,
	Image,
	TouchableHighlight,
	Button
} from 'react-native'

class HomeScreen extends Component  {

	state = {
		photo: null
	}

	componentDidMount() {
		this._getFbUser().catch(err => {
			console.warn(err)
		})
	}

	_getFbUser = () => {
		return new Promise((resolve, reject) => {
			AccessToken.getCurrentAccessToken().then(data => {
					if(data) {
						let accessToken = data.accessToken;
						const responseInfoCallback = (error, result) => {
							if (error) {
								reject(error)
							} else {
								this.setState({
									username: result.name,
									photo: result.picture.data.url,
									displayLogin: false,
									userId: result.id,
									birthday: result.birthday,
									loading: false
								})
								resolve(result)
							}
						}

						if(accessToken) {
							const infoRequest = new GraphRequest('/me',
								{
									accessToken: accessToken,
									parameters: {
										fields: {
											string: 'name,picture,birthday'
										}
									}
								}, responseInfoCallback);
							// Start the graph request.
							new GraphRequestManager().addRequest(infoRequest).start()
						}
					} else {
						this.setState({
							displayLogin: true,
							loading: false
						})
					}

				}).catch(err => {

					this.setState({
						displayLogin: true
					});

					console.log('err', err)
					reject(err)
				});
		});
	}

	render() {

		const { navigation } = this.props
    const { photo } = this.state
  
		return (
			<View>
				{ photo && (
					<UserImage source={{uri: photo}} />
				)}
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
						readPermissions={["user_birthday"]}
						onLoginFinished={
							(error, result) => {
								if (error) {
									alert("login has error: " + result.error)
								} else if (result.isCancelled) {
									alert("login is cancelled.")
								} else {
									this._getFbUser().then((result) => {
										console.log('getting FB user')
									}).catch(err => {
										console.warn(err)
									});
								}
							}
						}
						onLogoutFinished={() => alert("logout.")}
					/>
				</View>
			</View>
		)
	}
}

const NavView = styled.View`
	margin-bottom: 20px;
	margin-left: 20px;
	margin-right: 20px;
	justify-content: space-between;
`

const MenuText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 22px;
`

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
`

const TeamText = styled.Text`
  color: rgb(60, 0, 60);
	font-size: 16px;
	padding-top: 5px;
	text-align: center;
`

const TeamLogo = styled.Image`
  width: 35px;
	height: 35px;
`

const MainLogoContainer = styled.View`
	align-items: center;
`

const MainLogo = styled.Image`
	width: 120px;
	height: 120px;
`

const UserImage = styled.Image`
	height: 60px;
	width: 60px;
	border-radius: 30px;
`

export default HomeScreen