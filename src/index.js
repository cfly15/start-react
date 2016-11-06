import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Login from './components/Login';
import App from './components/App';
import NotFound from './components/NotFound';
import './css/style.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
      <Match exactly pattern="/" component={Login} />
      <Match exactly pattern="/dashboard" component={App} />
      <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
