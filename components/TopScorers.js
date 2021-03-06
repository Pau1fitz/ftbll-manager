import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const players = [
	{
		name: 'Luke Wilson',
		gamesPlayed: 12,
		goalsScored: 0,
		yellowCards: 0,
		redCards: 0,
		photo: 'https://dummyimage.com/300'
	}
];

const TopScorers = ({ data }) => {

	const allPlayers = data.allPlayers || [];

	return (
		<ScrollView>
			<PlayerListHeader>
				<PlayerNameHeaderText>Name</PlayerNameHeaderText>
				<HeaderText>GP</HeaderText>
				<HeaderText>GLS</HeaderText>
			</PlayerListHeader>
			{ allPlayers.map(player => {
				return (
					<PlayerContainer key={ player.name }>
						<PlayerImage source={{ uri: player.photo} } />
						<PlayerName>{ player.name }</PlayerName>
						<PlayerText>{ player.gamesPlayed }</PlayerText>
						<PlayerText>{ player.goalsScored }</PlayerText>
					</PlayerContainer>
				);
			})}
	</ScrollView>
	)
}

const PlayerListHeader = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 8px;
	align-items: center;
`;

const HeaderText = styled.Text`
	flex: 1;
	text-align: center;
`;

const PlayerNameHeaderText = styled.Text`
	margin-left: 60px;
	flex: 3;
`;

const PlayerContainer = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 8px;
	align-items: center;
`;

const PlayerImage = styled.Image`
	height: 50px;
	width: 50px;
	border-radius: 25px;
	margin-right: 10px;
`;

const PlayerName = styled.Text`
	flex: 3;
`;

const PlayerText = styled.Text`
	flex: 1;
	text-align: center;
`;

const getAllPlayers = gql`
  query {
    allPlayers (
      orderBy: goalsScored_DESC
    ) {
      id
      name
      gamesPlayed
      goalsScored
      yellowCards
      redCards
      photo
      team {
        name
      }
    }
  }
`;

export default compose(
  graphql(getAllPlayers),
)(TopScorers);
