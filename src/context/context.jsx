import { createContext, useState } from "react";

export const Context = createContext();

 export const Provider = ({ children }) => {
    const [zoomin, setzoomin] = useState(14);
    const [zoomout, setzoomout] = useState(zoomin);

    function funczoomin() {
        setzoomin((prev) => prev + 2);
        
    }
    function funczoomout() {
        setzoomin((prev) => prev - 2);
    }

    const value = {
        zoomin,
        setzoomin,
        zoomout,
        setzoomout,
        funczoomin,
        funczoomout,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
