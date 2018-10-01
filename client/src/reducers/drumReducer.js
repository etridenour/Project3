const initial_state = {
    playList: [],
    videoList: []
}

export function drumReducer (state = initial_state, action) {


    // if(state === undefined){
    //     return{
    //         playList: [],
    //         videoList: []
    //     }
    // } 

    switch(action.type) {
        case 'ADD_PLAYLIST':
            
            
            return {
                ...state,
                playList: state.playList.concat({
                    rudiment: action.playListItem.rudiment,
                    id: action.playListItem.id,
                    uuid: action.playListItem.uuid
                }),
                videoList: state.videoList
            }
        
        case 'DELETE_PLAYLIST':
            const updatedList = state.playList.filter(item => {
                return item.id !== action.playListItem.id
            })
            return{
                ...state,
                playList: updatedList,
                videoList: state.videoList

            }

        case 'DB_FETCH':
            return{
                ...state,

                videoList: action.dbList.data.fulfillmentValue
                }

        default:
            return state;
    }
}

export default drumReducer