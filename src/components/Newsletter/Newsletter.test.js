// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';

describe('Newsletter', () => {
  const props = {
    name: 'test',
    Newsletter: {
      viewBox: '0 0 0 0',
      path: '',
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Newsletter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
