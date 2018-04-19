const isArray = require('./isArray');

const sample = function(arr: Array<any>, numberOfElements: number = 1): any {
    let sampledElements: Array<any> = [];
    if (!isArray(arr)) {
        return arr;
    }

    for (let i = 0; i < numberOfElements; i++) {
        sampledElements.push(arr[Math.floor(Math.random() * arr.length)]);
    }

    return numberOfElements === 1 ? sampledElements[0] : sampledElements;
}

export = sample;