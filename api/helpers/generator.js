class Helpers {
    uid = '';

    constructor() {
    }

    generateId(length) {
        const idArray = [];

        for (let i = 0; i < length; i += 1) {
            const randomNum = Math.floor(Math.random() * 9 + 1);
            idArray.push(randomNum);
        }
        this.uid = idArray.join('').toString();
        return this.uid;
    }
}

module.exports = Helpers;
