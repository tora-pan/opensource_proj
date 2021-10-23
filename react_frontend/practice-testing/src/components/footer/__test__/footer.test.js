import React from 'react';
import Footer from '../Footer';

import { shallow } from 'enzyme';

describe('<Header />', () => {
	it('Footer Component', () => {
		const wrapper = shallow(<Footer />);
		expect(
			wrapper.containsMatchingElement(<h1>This is the footer.</h1>)
		).toBe(true);
	});
	it('footer component matches snapshot', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toMatchSnapshot();
	});
});
