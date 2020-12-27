import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootState } from './store';
import * as asyncactions from './store/demo/async-actions';
import { DemoActions } from './store/demo/types';

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
  return {
    addItem: (item: string) => asyncactions.addItemAsync(dispatch, item),
  };
};
const mapStateToProps = ({ demo }: IRootState) => {
  const { list, loading } = demo;
  return { list, loading };
};
type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

const App: React.FC<ReduxType> = ({ list, addItem, loading }) => {
  const [state, setState] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleButtonClick = () => {
    if (state === '') return;
    addItem(state);
    setState('');
  };
  return (
    <div style={{ margin: '20px' }}>
      <input value={state} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add</button>
      <ul>
        {list?.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatcherToProps)(App);
