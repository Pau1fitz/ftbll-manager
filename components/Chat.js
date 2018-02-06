import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class Chat extends Component {

	state = {
		message: '',
		messages: [],
		userId: null
  }


	updateText = (e) => {
		this.setState({
			message: e
		});
  }
  
  sendMessage = (e) => {
    this.props.addMessageToTeam({
      variables: {
        message: e[0].text,
      }
    });
  }

	renderBubble (props) {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					right: {
						backgroundColor:'#000'
					}
				}}
			/>
		)
	}

  render() {

    let allMessages = this.props.data.allMessages || [];

    allMessages = allMessages.map(msg => {
      return {
        _id: msg.id,
        text: msg.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        }
      }
    });

    return (
      <MainContainer>
        <GiftedChat
				  messages={ allMessages }
				  renderBubble={this.renderBubble}
				  onInputTextChanged={this.updateText}
				  onSend={this.sendMessage}
          user={{ _id: 12345 }}
				/>
			</MainContainer>
    );
  }
}

const MainContainer = styled.View`
	display: flex;
	flex: 1;
`

const getAllMessages = gql`
  query {
    allMessages {
      id
      message
    }
  }
`;

const addMessageToTeam = gql`
  mutation CreateMessage($message: String!) {
    createMessage(
    message: $message,
    teamId: "cjcgrv6a8g09u0128v1crk9r0"
  ) {
      id
      message
    }
  }
`;

export default compose(
  graphql(getAllMessages),
  graphql(addMessageToTeam, { name: 'addMessageToTeam' }),
)(Chat);