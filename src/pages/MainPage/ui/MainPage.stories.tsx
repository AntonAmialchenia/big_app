import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    render: () => <MainPage />,
};

export const Dark: Story = {
    render: () => <MainPage />,
    decorators: [ThemeDecorator(Theme.DARK)],
};
