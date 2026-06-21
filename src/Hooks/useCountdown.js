import { useState, useEffect } from "react";

export function useCountdown() {
    const [time, setTime] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
   useEffect(() => {
  setInterval(() => {
    
  }, 1000);
}, []);
    return time

 
}