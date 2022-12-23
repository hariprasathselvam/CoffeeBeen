import { Action } from './actions'


const initialState = {
    Coffees: [],
    wishlist: [],
    users: []
}


export default function(state = initialState, action){

    switch(action.type){

        case Action.GET_COFFEE: 
            return {
                ...state,
                Coffees: action.payload
            }
        case Action.ADD_TO_WISHLIST: 
            return {
                ...state,
                wishlist:[...state.wishlist, action.payload]
            }
        case Action.REMOVE_FROM_WISHLIST: 
            return {
                ...state,
                wishlist: state.wishlist.filter((coffee) => coffee.id !== action.payload.id)
            }
        default:
            return state
    }


}

