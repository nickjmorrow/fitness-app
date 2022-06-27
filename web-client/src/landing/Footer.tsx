// external
import React from 'react';
import styled from 'styled-components';

// inter
import { Typography } from '~/core/atoms/Typography';
import { theme } from '~/theming';

export const Footer: React.FC = () => {
    const color = theme.neutralColor.cs5;
    return (
        <StyledFooter>
            <Typography style={{ marginRight: theme.spacing.ss8, color }}>Nicholas Morrow</Typography>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${({ theme }) => `
		height: ${theme.spacing.ss16};
		padding: 0 ${theme.spacing.ss8};
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: ${theme.neutralColor.cs2};
	`}
`;
