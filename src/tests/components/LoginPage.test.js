import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage startLoginWithGoogle={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
  const startLoginWithGoogle = jest.fn();
  const wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle} />);
  wrapper.find('button').simulate('click');
  expect(startLoginWithGoogle).toHaveBeenCalled();
});