import { TypeUsedSelectorHook, useDispatch, useSelector } from "react-redux";
import {RootState, AppDispatch} from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypeUsedSelectorHook<RootState> = useSelector;

// Essentially, this hooks file is to assign types for your dispatchers and 
// selectors to allow for you to use them elsewhere without having to import types
// in your components/screens. 