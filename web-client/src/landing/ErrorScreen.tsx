import React from 'react';
import { Typography } from '~/core/atoms/Typography';
import { theme } from '~/theming';

export const ErrorScreen = () => {
    return <div style={{ padding: theme.spacing.ss8 }}><Typography>An error has occurred! We apologize. Please refresh your browser.</Typography></div>
}