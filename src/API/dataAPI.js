import axios from 'axios'
import {actionRequestSuccess, actionRequestLoading, actionRequestError} from '../store/shopReducer'

const dataProducts = (products) => async (dispatch) => {
  dispatch(actionRequestLoading())
  try {
    const responce = await axios.get(products)
    dispatch(actionRequestSuccess(responce.data))
  } catch (error) {
    dispatch(actionRequestError(error))
  }
}

export default dataProducts;