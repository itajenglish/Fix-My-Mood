//React Deps
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Link } from 'react-router-dom';

//Testing Deps
import { mount, shallow, render } from 'enzyme';
import storageMock from './local_storage_mock';
//Components for testing
import App from '../src/App';
import Main from '../src/components/Main';
import Header from '../src/components/Header';

// mock the localStorage
window.localStorage = storageMock();
// mock the sessionStorage
window.sessionStorage = storageMock();

describe('Components Render On Page Load', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>, div);
    });
});
  
describe('All Componets Render On App Load', () => {
    it('Header component renders inside app', () => {
    const wrapper = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('.nav-wrapper').length).toEqual(1);
  })


  it('Buttons render in main component', () => {
    const wrapper = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    )
    
    expect(wrapper.find('.btn').length).toEqual(3);
  })
});
