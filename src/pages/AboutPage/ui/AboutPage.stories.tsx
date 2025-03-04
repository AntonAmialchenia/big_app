import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    render: () => <AboutPage />,
};

export const Dark: Story = {
    render: () => <AboutPage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
