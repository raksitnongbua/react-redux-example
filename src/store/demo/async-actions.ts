import { Dispatch } from 'redux';
import * as actions from './actions';
import { DemoActions } from './types';
const sleep = (timeout: number) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(undefined), timeout)
  );
};
export async function addItemAsync(
  dispatch: Dispatch<DemoActions>,
  item: string
) {
  dispatch(actions.setLoading(true));

  await sleep(1000);
  dispatch(actions.addItemToList(item));
  dispatch(actions.setLoading(false));
}
