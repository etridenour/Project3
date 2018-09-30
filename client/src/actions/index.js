

export const addToPlaylist = item => ({
    type: 'ADD_PLAYLIST',
    playListItem: item,
})

export const deleteFromPlaylist = item => ({
    type: 'DELETE_PLAYLIST',
    playListItem: item,
})

export const dbFetch = data => ({
    type: 'DB_FETCH',
    dbList: item,
})

export const dbUpdate = data => ({
    type: 'DB_UPDATE',
    playListItem: item,
})