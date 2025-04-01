onmessage = function(event) {
    const limit = event.data;
    const kezdesIdo = performance.now();

    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }

    const vegeIdo = performance.now();
    
    postMessage({ result: sum, time: vegeIdo - kezdesIdo });
};