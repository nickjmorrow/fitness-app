import { all, AllEffect, fork } from 'redux-saga/effects';

export function* rootSaga(): Generator<AllEffect<never>, void, unknown> {
    const apis: { sagas: any }[] = [];
    const sagas = apis.flatMap(a => a.sagas);
    yield all(sagas.map(s => fork(s)) as any);
}
