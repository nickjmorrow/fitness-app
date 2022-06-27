// external
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// inter

// intra
import { history as createdHistory } from '~/redux/history';

export const createRootReducer = (history: typeof createdHistory) =>
    combineReducers({
        router: connectRouter(history),
    });
