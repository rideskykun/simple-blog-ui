import React, {useEffect, useState} from "react";

const useReadingProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const updateScrollProgress = () => {
            const current = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            if(height){
                setProgress(
                    Number((current/height).toFixed(2))*100
                )
            }
        }

        window.addEventListener('scroll', updateScrollProgress)

        return () => {
            removeEventListener('scroll', updateScrollProgress)
        }

    },[])

    return progress;
}

export default useReadingProgress