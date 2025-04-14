import React, {useState, useEffect} from "react";

function Stopper(){
    const [seconds, setSeconds] = useState(0);
    const [isActice, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActice) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }else{
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActice]);

    const toggle = () => {
        setIsActive(!isActice);
    };

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    return (
        <div>
            <h1>Stopper</h1>
            <h2>{seconds} másodperc</h2>
            <button onClick={toggle}>{isActice ? 'Szünet' : 'Indítás'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopper;