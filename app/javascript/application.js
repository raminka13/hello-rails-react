import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './components/Greeting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import { fetchGreeting } from './redux/greetings/greetingsSlice';

store.dispatch(fetchGreeting());

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Greeting />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
