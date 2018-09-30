

export function drumReducer (state, action) {
    if(state === undefined){
        return{
            playList: [],
            videoList: []
        }
    }

    switch(action.type) {
        case 'ADD_PLAYLIST':
            return{
                ...state,
                playList: state.playList.concat({
                    playListItemName: action.playListItem.rudiment,
                    playListItemId: action.playListItem.id,
                    
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
                videoList
            }
    }
}