import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const results = [
	{
		opponent: 'Wilton Utd',
		score: '1-0',
		wLD: 'W',
		homeAway: 'H',
		date: '01 Sept 2016'
	}
];

class Results extends Component {
  render() {

    const results = this.props.data.allResults || [];

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

const getAllResults = gql`
  query {
    allResults {
      id
      opponent
      date
      homeAway
      score
      wLD
    }
  }
`;

export default compose(
  graphql(getAllResults)
)(Results);
