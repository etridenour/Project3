import uuid from 'uuid';

const initial_state = {
    playList: [],
    videoList: [],
    videoToPlay: {}
}

export function drumReducer (state = initial_state, action) {

    switch(action.type) {
        case 'ADD_PLAYLIST':
            
            
            return {
                ...state,
                playList: state.playList.concat({
                    rudiment: action.playListItem.rudiment,
                    uuid: uuid.v4(),
                    hyperlink: action.playListItem.hyperlink
                }),
                videoList: state.videoList
            }
        
        case 'DELETE_PLAYLIST':
            const updatedList = state.playList.filter(item => {
                return item.uuid !== action.playListItem.uuid
            })
            return{
                ...state,
                playList: updatedList,
                videoList: state.videoList

            }

        case 'DB_FETCH':
            return{
                ...state,
                videoList: action.dbList.data.fulfillmentValue,
                playList: action.dbList.playList.fulfillmentValue
                }

        case 'VIDEO_SEND':
                return{
                    ...state,
                    videoToPlay: {
                        rudiment: action.video.rudiment,
                        hyperlink: action.video.hyperlink

                    }
                }

        case 'CLEAR_PLAYLIST':
                return{
                    ...state,
                    playList: []
                }

        default:
            return state;
    }
}

export default drumReducer