

export const addToPlaylist = item => ({
    type: 'ADD_PLAYLIST',
    playListItem: item
})

export const deleteFromPlaylist = item => ({
    type: 'DELETE_PLAYLIST',
    playListItem: item
})

export const dbFetch = response => ({
    type: 'DB_FETCH',
    dbList: response
})

export const dbUpdate = data => ({
    type: 'DB_UPDATE',
    playListItem: data
})