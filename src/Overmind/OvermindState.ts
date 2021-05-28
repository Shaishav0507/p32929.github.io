import { GlobalVars } from "../Others/GlobalVars";

export interface State {
    primaryColor: string,
    isLeftShowing: boolean,
}

export const state: State = {
    primaryColor: GlobalVars.primaryColor,
    isLeftShowing: true
}
