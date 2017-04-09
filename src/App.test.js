//React Deps
import React from 'react';
import ReactDOM from 'react-dom';

//Testing Deps
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom'

//Components for testing
import App from './App';
import Main from '../src/components/Main'

describe('Components Render On Page Load', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>, div);
    });
});


describe('description', () => {
    it('Main component renders inside app', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <App>
          <Main /> 
        </App>
      </MemoryRouter>
    );
    
    expect(wrapper.find(Main));
  })
});
