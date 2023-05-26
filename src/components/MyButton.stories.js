// src/stories/Button.story.js
import { Button } from './MyButton';

export default {
	title: 'Example/Button',
	componet: Button,
	args: {
		backgroundColor: '#000'
	},
	argTypes: {
		backgroundColor: {control: 'color'},
	},
};