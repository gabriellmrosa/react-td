import { createContext, ReactNode } from "react";

interface PropMap {

}

export const propMapContext = createContext({} as PropMap);

interface Props {
    children: ReactNode;
}

export const PropMapContextProvider = ({ children }: Props) => {

    return (
        <propMapContext.Provider value={{ oi: 'oi' }}>
            {children}
        </propMapContext.Provider>
    );
};