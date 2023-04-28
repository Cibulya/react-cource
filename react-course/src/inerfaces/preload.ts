import { RootState } from '../rtk/store/store';

export interface IWindow extends Window {
    PRELOADED_STATE?: RootState;
}
