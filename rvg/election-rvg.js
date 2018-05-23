const Chance = require('chance');
const moment = require('moment');

const chance = new Chance();

module.exports = (rvg) => {

    /**
     * returns a random string of numbers and upper case letters.
     * @returns {string} val - A random string of letters.
     */
    rvg(/^randomCode$/, () => {
        return (`${chance.word({ length: 6 })}${Math.floor(Math.random() * 10000)}`).toUpperCase();
    });

};
