import { useState, useEffect} from "react";

export const useOffline = () =>{

    const [isOffLine, setIsOffline] = useState(false);

    useEffect(()=>{

        const onlineHandle = ()=>{
            setIsOffline(false);
        }

        const offlineHandle = () =>{
            setIsOffline(true);
        }

        window.addEventListener("online", onlineHandle);
        window.addEventListener("offline", offlineHandle);

        return ()=>{
            window.removeEventListener("online", onlineHandle);
            window.removeEventListener("offline", offlineHandle);
        }

    }, []);

    return isOffLine;
}