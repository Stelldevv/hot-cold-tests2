import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
	  shallow(<GuessList guesses={[]} />);
    });

    it('Properly renders the GuessList', () => {
    	const simGuess = [2,4,6,8];
    	const wrapper = shallow(<GuessList guesses={simGuess} />);
    	const guessItems = wrapper.find('li');
    	expect(guessItems.length).toEqual(simGuess.length);
    	simGuess.forEach((guess, index) => {
    		expect(guessItems.at(index).text()).toEqual(guess.toString());
    	});
    });
}); 