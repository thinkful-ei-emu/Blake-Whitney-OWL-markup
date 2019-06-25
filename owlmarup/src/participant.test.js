import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Participant from './participant';

describe('<Participant />', () => {
  // Smoke Test
  it('renders without crashing', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<Participant person={{
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }}/>, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot Test
  it('renders this UI as expected', () => {
    const tree = renderer.create(<Participant key={1} person={{
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});