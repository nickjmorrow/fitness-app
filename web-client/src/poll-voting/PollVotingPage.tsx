// external
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VoteOnPollButton } from '~/poll-voting/components/VoteOnPollButton';
import { pollVotingActions } from '~/poll-voting/state/pollVotingActions';
import { PollContainer } from '~/polling/components/PollContainer';
import { QuestionList } from '~/polling/components/QuestionList';
import { TitleDescription } from '~/polling/components/TitleDescription';
import { useTypedSelector } from '~/redux/useTypedSelector';
import { routingSelectors } from '~/routing/routingSelectors';

export const PollVotingPage: React.FC = () => {
    const link = useTypedSelector(routingSelectors.getParam('/voting/:id', 'id'));

    const poll = useTypedSelector(state => state.pollVotingState.poll);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pollVotingActions.getPoll.request(link));
    }, []);

    if (poll === null) {
        return null;
    }

    return (
        <PollContainer>
            <TitleDescription title={poll.title} description={poll.description} />
            <QuestionList questions={poll.questions} />
            <VoteOnPollButton />
        </PollContainer>
    );
};
