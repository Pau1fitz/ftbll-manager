import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';


class Players extends Component {

  render() {

		const allPlayers = this.props.data.allPlayers || [];

    return (
      <ScrollView>
					<PlayerListHeader>
						<PlayerNameHeaderText>Name</PlayerNameHeaderText>
						<HeaderText>GP</HeaderText>
						<HeaderText>GLS</HeaderText>
						<YellowCardHeaderContainer>
							<YellowCardHeader />
						</YellowCardHeaderContainer>
						<RedCardHeaderContainer>
							<RedCardHeader />
						</RedCardHeaderContainer>
					</PlayerListHeader>
					{allPlayers.map(player => {
						return (
							<PlayerContainer key={player.id}>
								<PlayerImage source={{uri: player.photo}} />
								<PlayerName>{player.name}</PlayerName>
								<PlayerText>{player.gamesPlayed}</PlayerText>
								<PlayerText>{player.goalsScored}</PlayerText>
								<PlayerText>{player.yellowCards}</PlayerText>
								<PlayerText>{player.redCards}</PlayerText>
							</PlayerContainer>
						);
					})}
      </ScrollView>
    );
  }
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

const YellowCardHeaderContainer = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
`;

const YellowCardHeader = styled.View`
	height: 15px;
	width: 10px;
	background-color: #F5D600;
`;

const RedCardHeaderContainer = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
`;

const RedCardHeader = styled.View`
	height: 15px;
	width: 10px;
	background-color: #FD404A;
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
		allPlayers {
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

const createPlayer = gql`
  mutation createPlayer($name: String!) {
    createPlayer(
      name: $name,
      gamesPlayed: 1,
      goalsScored: 3,
      yellowCards: 1,
      redCards: 1,
      photo: "https://dummyimage.com/300"
    ) {
      name
      gamesPlayed
      goalsScored
      yellowCards
      redCards
      photo
    }
  }
`

const addPlayerToTeam = gql`
  mutation createPlayer($playerId: ID!) {
    addToTeamPlayers(
      teamTeamId: "cjcc18qt0a2a30178st78g4yg"
      playersPlayerId: $playerId
    ) {
      teamTeam {
        name
      }
      playersPlayer {
        id
        name
        gamesPlayed
        goalsScored
        yellowCards
        redCards
        photo
      }
    }
  }
`

export default compose(
    graphql(getAllPlayers),
    graphql(createPlayer, { name: 'createPlayer' }),
    graphql(addPlayerToTeam, { name: 'addPlayerToTeam' }),
)(Players);
