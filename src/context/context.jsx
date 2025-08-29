import { useSize } from "radix-ui/internal";
import { createContext, useState } from "react";

export const context = createContext();

export const Provider = ({ children }) => {
    const [zoomin, setzoomin] = useState(14);
    const [zoomout, setzoomout] = useSize(zoomin);

    function funczoomin() {
        setzoomin((prev) => prev + 1);
    }
    function funczoomout() {
        setzoomin((prev) => prev - 1);
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
        <context.Provider value={value}>
            {children}
        </context.Provider>
    );
};
