import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';

const results = [
	{
		opponent: 'Wilton Utd',
		score: '1-0',
		wLD: 'W',
		homeAway: 'H',
		date: '01 Sept 2016'
	},
	{
		opponent: 'Greenwood',
		score: '1-1',
		wLD: 'D',
		homeAway: 'H',
		date: '10 Sept 2016'
	},
	{
		opponent: 'Everton',
		score: '0-2',
		wLD: 'L',
		homeAway: 'H',
		date: '01 Oct 2016'
	},
	{
		opponent: 'Leeds',
		score: '1-0',
		wLD: 'W',
		homeAway: 'H',
		date: '11 Oct 2016'
	},
	{
		opponent: 'Avondale',
		score: '1-1',
		wLD: 'D',
		homeAway: 'A',
		date: '10 Nov 2016'
	},
	{
		opponent: 'College Corinthians',
		score: '1-1',
		wLD: 'D',
		homeAway: 'A',
		date: '17 Nov 2016'
	},
	{
		opponent: 'UCD',
		score: '2-1',
		wLD: 'W',
		homeAway: 'A',
		date: '26 Nov 2016'
	}
]

export default class Results extends Component {
  render() {
    return (
			<ResultsView>
				<TopRow>
					<TeamLogo source={{uri: 'https://s8.postimg.org/9ktyx779h/UCC_Crest_Transparent.png'}}/>
					<Text>UCC Diaspora</Text>
				</TopRow>
	      <ScrollView>
					{
						results.map(result => {
							return(
								<ResultsContainer key={result.date}>
									<ResultContainer>
										<OpponentText>{ result.opponent }</OpponentText>
										<ResultText>{ result.score }</ResultText>
										<ResultText>{ result.wLD }</ResultText>
										<ResultText>{ result.homeAway }</ResultText>
										<DateText>{ result.date }</DateText>
									</ResultContainer>
								</ResultsContainer>
							);
						})
					}
	      </ScrollView>
			</ResultsView>
    );
  }
}


const ResultsView = styled.View`
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

const ResultsContainer = styled.ScrollView`
	flex-grow: 1
`;

const ResultContainer = styled.View`
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

const ResultText = styled.Text`
	flex: 1;
	text-align: center;
`;
