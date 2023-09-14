import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({children}) => {

    const [lang, setLang] = useState("es");

    return (
        <LangContext.Provider value ={ {
            lang,
            setLang
        } }>
            {children}
        </LangContext.Provider>
    )

}