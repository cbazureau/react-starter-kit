import React from 'react';
import renderer from 'react-test-renderer';
import Show from './Show';

const mock = {
  id: 12,
  name: 'Test Name',
  summary: '<p>Lorem ipsum</p>',
  image: {
    medium: 'http://img',
  },
};

describe('Show', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Show show={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
