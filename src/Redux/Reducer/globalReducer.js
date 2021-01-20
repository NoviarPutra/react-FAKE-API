import ActionType from "./globalActionType";

const initialState = {
  totalOrder: 0,
};


const rootReducer = (state = initialState, action) => {
  if (action.type === ActionType.ADD) {
    return{
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if (action.type === ActionType.MINUS) {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
     return{
      ...state,
      totalOrder: state.totalOrder - 1
    }
    }
    return{
      ...state,
      totalOrder: totalOrder
    }
  }
  return state;
};

export default rootReducer;