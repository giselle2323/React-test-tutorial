//User testing
import React from 'react';
import ReactDOM from'react-dom';
import App from './App';

import { render, cleanup } from '@testing-library/react';
import 'jest';


afterEach(cleanup);
it('renders correctly without crashing', () => {
  const div = document.createElement("div")
  ReactDOM.render(<App></App>, div)
});

