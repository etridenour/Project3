import { ADD_PLAYLIST, DELETE_PLAYLIST, DB_FETCH, VIDEO_SEND, CLEAR_PLAYLIST, CHANGE_THEME } from '../actions/types';

export const addToPlaylist = item => ({
    type: ADD_PLAYLIST,
    playListItem: item
})

export const deleteFromPlaylist = item => ({
    type: DELETE_PLAYLIST,
    playListItem: item
})

export const dbFetch = response => ({
    type: DB_FETCH,
    dbList: response
})

export const videoSend = video => ({
    type: VIDEO_SEND,
    video: video
})

export const clearPlaylist = items => ({
    type: CLEAR_PLAYLIST,
    items: items
})

export const changeTheme = thing => ({
    type: CHANGE_THEME,
    thing: thing
})