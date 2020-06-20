import { MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE } from './constants';

const initialState = {
    messagesLoading: false,
    messages: []
}

export default (state = initialState, action) => {

    if (action.type === MESSAGES_RECEIVED){
		return{
            ...state,
            messagesLoading: false,
             messages: [action.messages]

		}
    }

    if (action.type === MESSAGES_LOADING){
		return{
			...state,
			messagesLoading: true
		}
    }

    if (action.type === NEW_MESSAGE){
		return{
			...state,
			messages: state.messages.concat(action.message)
		}
	}

    return state;
};
