import { action } from 'typesafe-actions';
import { Constants } from './types';
export const addItemToList = (item: string) => {
  return action(Constants.ADD_ITEM, {
    item,
  });
};

export const setLoading = (loading: boolean) => {
  return action(Constants.SET_LOADING, {
    loading,
  });
};
