// import { createActions } from 'redux-actions';

const UPDATE_TEST = 'UPDATE_TEST';

const updateTest = () => ({
  type: UPDATE_TEST,
  payload: new Promise(resolve => {
    resolve('HUZZAH!!!');
  })
})

export const updateTestAsync = () => {
  return dispatch => {
    return dispatch(updateTest()).then((value, action) => {
      console.log('post-dispatch value: ', value);
      console.log('post-dispatch action: ', action.type);
    })
  }
}
