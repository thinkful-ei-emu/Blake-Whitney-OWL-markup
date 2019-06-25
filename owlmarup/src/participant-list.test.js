import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ParticipantList from './participant-list';

describe('<ParticipantList />', () => {
  // Smoke Test
  it('renders without crashing', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<ParticipantList />, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot Test
  it('renders this UI as expected', () => {
    const tree = renderer.create(<ParticipantList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});