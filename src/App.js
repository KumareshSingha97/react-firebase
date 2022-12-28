

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Routers from './Router';
import store, { persistor } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers></Routers>
        </PersistGate>
      </Provider>

    </div>
  );
}

export default App;
