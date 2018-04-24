import * as constants from '../constants';

export type Action = ChangeStopAction;

export interface ChangeStopAction {
    type: constants.CHANGE_STOP;
    index: number;
}

export const changeStop = (index: number) => ({
    type: constants.CHANGE_STOP,
    index,
}) as ChangeStopAction;
