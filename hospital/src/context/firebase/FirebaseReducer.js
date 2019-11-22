import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../Types";


const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {playload}) => ({...state, notes:[...state.notes, playload]}),
    [FETCH_NOTES]: (state, {playload}) => ({...state, notes: playload, loading: false}),
    [REMOVE_NOTE]: (state, {playload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== playload)
    }),

  DEFAULT: state => state
};

export const FirebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};