import { useReducer } from "react";
import { formReducer, initialState } from "./formReducer";
import { DispatchContext, StateContext } from "./FormContext";


export function FormProvider({children}){
    const [state, dispatch] = useReducer(formReducer, initialState)

    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}