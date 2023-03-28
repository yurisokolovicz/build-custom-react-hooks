import { useState, useEffect } from 'react';

// useCounter is a custom hook. It is a function that starts with use and returns an array. The array can contain any number of elements. The first element is the counter and the second element is the function that updates the counter. In this case, the function is setCounter. It is a good practice to name the custom hook with a prefix of use. This is a convention that React uses.
const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // retrun the counter is to allow it to be be used in the components. Also, it is a good practice to return the counter.
    return counter;
};

export default useCounter;
