import uuid from 'uuid';

const initial_state = {
    playList: [],
    videoList: [],
    videoToPlay: {},
    theme: 'heaven',
    toggle: 'left'
}

export function drumReducer (state = initial_state, action) {

    switch(action.type) {
        case 'ADD_PLAYLIST':
            
            
            return {
                ...state,
                playList: state.playList.concat({
                    rudiment: action.playListItem.rudiment,
                    uuid: uuid.v4(),
                    hyperlink: action.playListItem.hyperlink,
                    reference: action.playListItem.reference
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
                videoList: action.dbList.data,
                playList: action.dbList.playList
                }

        case 'VIDEO_SEND':
                return{
                    ...state,
                    videoToPlay: {
                        rudiment: action.video.rudiment,
                        hyperlink: action.video.hyperlink,
                        reference: action.video.reference

                    }
                }

        case 'CLEAR_PLAYLIST':
                return{
                    ...state,
                    playList: []
                }

        case 'CHANGE_THEME':
                let tempToggle;
                
                switch(state.theme){
                    case 'heaven':
                        console.log("hell")
                        tempToggle = "hell"
                        break;
                    case 'hell':
                    console.log("heaven")
                        tempToggle = "heaven"
                        break;
                    default:
                    console.log("default")
                        tempToggle = "heaven"
                        break;
                }
                return{
                    ...state,
                    theme: tempToggle
                }

        default:
            return state;
    }
}

export default drumReducer