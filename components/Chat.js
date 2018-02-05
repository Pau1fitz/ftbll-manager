import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import styled from 'styled-components/native';

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


    return (
      <MainContainer>
				<GiftedChat
				 messages={this.state.messages}
				 renderBubble={this.renderBubble}
				 onInputTextChanged={this.updateText}
				/>
			</MainContainer>
    );
  }
}

const MainContainer = styled.View`
	display: flex;
	flex: 1;
`

export default Chat;