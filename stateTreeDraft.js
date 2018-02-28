const initialState = {

	operator: {
		connected: 'false',
		name: 'James',
		location: 'Portland, OR',
		chatList: {
			'42958240': {
				id: '42958240',
				messages: {
					1: {'Hello'},
					2: {'How\'s it going?'}
				}
			}
		}
		chatter: {
			connected: 'false',
			name: null,
			location: null,
			messages: {
				1: {'Hello'},
				2: {'How\'s it going?'}
			}
		}
	}

}


//* if on operator route, home and side content render different content inside. default is chatter route
