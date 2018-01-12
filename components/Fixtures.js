import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';


class Fixtures extends Component {
  render() {

		const fixtures = this.props.data.allFixtures || [];

    return (
			<FixturesView>
				<TopRow>
					<TeamLogo source={{uri: 'https://s8.postimg.org/9ktyx779h/UCC_Crest_Transparent.png'}}/>
					<Text>UCC Diaspora</Text>
				</TopRow>
				<ScrollView>
					{
						fixtures.map(fixture => {
							return(
								<FixturesContainer key={fixture.date}>
									<FixtureContainer>
										<OpponentText>{ fixture.opponent }</OpponentText>
										<FixtureText>{ fixture.homeAway }</FixtureText>
										<DateText>{ fixture.date }</DateText>
									</FixtureContainer>
								</FixturesContainer>
							);
						})
					}
				</ScrollView>
			</FixturesView>
    );
  }
}

const FixturesView = styled.View`
	flex: 1;
`;

const TopRow = styled.View`
	display: flex;
	flex-direction: row;
	margin-left: 10;
	margin-right: 10;
	margin-top: 10;
	margin-bottom: 10;
	align-items: center;
`

const TeamLogo = styled.Image`
  width: 50px;
	height: 50px;
	border-radius: 25px;
`;

const FixturesContainer = styled.ScrollView`
	flex-grow: 1
`;

const FixturesHeader = styled.View`
`;

const FixtureContainer = styled.View`
	display: flex;
	flex-direction: row;
	border-bottom-color: rgb(241, 241, 241);
	border-bottom-width: 1px;
	border-style: solid;
	padding: 8px;
	align-items: center;
	justify-content: space-between;
`;

const OpponentText = styled.Text`
	flex: 2;
`;

const DateText = styled.Text`
	flex: 2;
	text-align: right;
`;

const FixtureText = styled.Text`
	flex: 1;
	text-align: center;
`;

const getAllFixtures = gql`
  query {
		allFixtures {
			id
	    opponent
	    date
	    homeAway
    }
  }
`;


export default compose(
	graphql(getAllFixtures)
)(Fixtures);
