import type { Meta, StoryObj } from '@storybook/svelte';

import Grid from './Grid.svelte';

const meta = {
	title: 'Example/Grid',
	component: Grid,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/7.0/svelte/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Desktop: Story = {};
export const Tablet: Story = {};
export const Mobile: Story = {};
