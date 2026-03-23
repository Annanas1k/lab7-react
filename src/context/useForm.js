import { useContext } from "react";
import {  DispatchContext, StateContext } from "./FormContext";


export function useFormState(){
    return useContext(StateContext)
}

export function useFormDispatch(){
    return useContext(DispatchContext)
}