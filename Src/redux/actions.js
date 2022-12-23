import  axios from 'axios';
import { BASE_URL } from '../utilities'


export const Action = {
    GET_COFFEE : 'fetch_Coffee',
    ADD_TO_WISHLIST: 'add_to_wishlist',
    REMOVE_FROM_WISHLIST: 'remove_from_wishlist',
    ON_ERROR: 'on_error'
}

export const fetchCoffee = () => {

    try{
        return async(dispatch) => {

             const response = await axios.get(`${BASE_URL}/`);
            
            //  console.log(response);
            if(response.data){
                dispatch({
                    type: Action.GET_COFFEE,
                    payload: response.data
                })
    
            }else{
                //throw error
                dispatch({
                    type: Action.ON_ERROR,
                    payload: 'Unable to fetch Coffee Shop'
                })
    
            }
    
        }

    }catch(err){
        //throw error
        dispatch({
            type: Action.ON_ERROR,
            payload: 'Unable to fetch Coffee Shop'
        }) 
    }


}


export const addToWishList = (movie) => (dispatch) => {
    console.log(movie)
    dispatch({
        type: Action.ADD_TO_WISHLIST,
        payload: movie
    })

}


export const removeFromWishlist = (movie) => (dispatch) => {

    dispatch({
        type: Action.REMOVE_FROM_WISHLIST,
        payload: movie
    })

}


