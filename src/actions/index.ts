export enum ActionType {
    CHANGE_STOP = 'CHANGE_STOP',
    SAVE_COMBINATION = 'SAVE_COMBINATION',
}

export type Action =
    ChangeStopAction |
    SaveCombinationAction;

export interface ChangeStopAction {
    type: ActionType.CHANGE_STOP;
    index: number;
}

export const changeStop = (index: number): ChangeStopAction => ({
    type: ActionType.CHANGE_STOP,
    index,
});

export interface SaveCombinationAction {
    type: ActionType.SAVE_COMBINATION;
}

export const saveCombination = (): SaveCombinationAction => ({
    type: ActionType.SAVE_COMBINATION,
});
