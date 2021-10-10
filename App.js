import React from 'react';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import store from './src/redux';
import {Provider} from 'react-redux';

const persistor = persistStore(store);
const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  );
};

export default App;
