import React from 'react';
import Box from './Box';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
	title: 'Box',
	component: Box,
} as Meta;

const Template = (args) => <Box {...args} />;
export const SetWidthAndHeight = Template.bind({});

SetWidthAndHeight.args = {
	css: { height: '100px', width: '100px', background: 'black' },
};
