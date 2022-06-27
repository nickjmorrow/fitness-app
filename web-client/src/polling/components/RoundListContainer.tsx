// external
import React from 'react';
import styled from 'styled-components';

// inter
import { Round } from '~/polling/types/Round';
import { Option } from '~/polling/types/Option';
import { RoundButtonBar } from '~/polling/components/RoundButtonBar';

export const RoundListContainer: React.FC<{
    rounds: Round[];
    options: Option[];
    activeRound: Round;
    onClick: (round: Round) => void;
    style?: React.CSSProperties;
}> = ({ rounds, options, activeRound, onClick: handleClick, style }) => {
    const isExpanded = (round: Round) => round.roundId === activeRound.roundId;
    return (
        <Container style={style}>
            {rounds
                .slice()
                .sort((a, b) => (a.roundId < b.roundId ? 1 : -1))
                .map(r => (
                    <RoundButtonBar
                        key={r.roundId}
                        round={r}
                        options={options}
                        isExpanded={isExpanded(r)}
                        onClick={() => handleClick(r)}
                    />
                ))}
        </Container>
    );
};

const Container = styled.div`
    margin: ${p => p.theme.spacing.ss8} 0;
`;
