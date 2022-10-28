// ***********************************************
// © 2022 Latest news next. All Rights Reserved.
// ***********************************************
import React, {createContext, useReducer} from 'react';
import actionTypes from './ActionTypes';

const initialState = {
    clientType: null,
};

type ContextProps = {
    clientType: string;
    initializeGlobalStates?: (data: any) => void;
};

export const GlobalContext = createContext<ContextProps>({...initialState});

const globalReducer = (state, {type, payload}) => {
    const {
        INITIALIZE_STATE,
    } = actionTypes;

    switch (type) {
        case INITIALIZE_STATE:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

function GlobalProvider({children}) {
    const [globalStats, dispatchGlobal] = useReducer(globalReducer, initialState);

    const initializeGlobalStates = (payload) => dispatchGlobal({type: actionTypes.INITIALIZE_STATE, payload});

    const finalValues: ContextProps = {
        clientType: globalStats.clientType,
        initializeGlobalStates,
    };

    return <GlobalContext.Provider value={finalValues}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
