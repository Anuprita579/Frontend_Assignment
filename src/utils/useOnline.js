import React, {useEffect, useState} from "react"
const useOnline = () =>{

  const [isOnline, setIsOnline]= useState(true);
  const handleOnline = ()=>{
    setIsOnline(false);
  }
  const handleOffline = () => {
    setIsOnline(true);
  }
  useEffect(()=>{
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return() => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }
  }, [])
  
  return isOnline; //true or false
}
export default useOnline;