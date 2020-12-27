import { Constants, IDemoState } from './types';
const init: IDemoState = {
  list: [],
  loading: false,
};
export const demoReducer = (
  state: IDemoState = init,
  action: any
): IDemoState => {
  switch (action.type) {
    case Constants.ADD_ITEM:
      return { list: [...state.list, action.payload.item], loading: false };
    case Constants.SET_LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
