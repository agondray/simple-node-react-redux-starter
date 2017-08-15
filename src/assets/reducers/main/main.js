import typeToReducer from 'type-to-reducer';

const UPDATE_TEST = "UPDATE_TEST";

const initialMainState = {
  test: 'hello world! (╯°□°)╯︵ ┻━┻',
  fun: '(ノ^_^)ノ ︵┻━┻ ノ( ^_^ノ)',
  isFulfilled: false,
  isPending: false,
  error: false,
};

export default typeToReducer({
  [UPDATE_TEST]: {
    PENDING: () => {
      return {
        ...initialMainState,
        isPending: true
      }
    },
    REJECTED: (state, action) => {
      return {
        ...initialMainState,
        error: true
      }
    },
    FULFILLED: (state, action) => {
      return {
        ...initialMainState,
        isFulfilled: true,
        test: action.payload
      }
    }
  }
}, initialMainState);
