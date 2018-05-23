const Chance = require('chance');
const moment = require('moment');

const chance = new Chance();

module.exports = (rvg) => {

    /**
     * returns a random date of birth where the age will be 18 within 21 days of today.
     * @returns {string} dob - the date of birth of the format __/__/____.
     */
    rvg(/^dob18Within21Days$/, () => {
        const birthday = moment().subtract(18, 'years');
        birthday.add(chance.integer({ min: 1, max: 21 }), 'days');
        return birthday.format('L');
    });

    /**
     * returns a random date of birth where the age will be 18 after at least 21 days from now.
     * @returns {string} dob - the date of birth of the format __/__/____.
     */
    rvg(/^dob18After21Days$/, () => {
        const birthday = moment().subtract(17, 'years');
        birthday.subtract(chance.integer({ min: 0, max: 344 }), 'days');
        return birthday.format('L');
    });

    /**
     * returns a random party affiliation from the given array.
     * @returns {string} party - A string representing a random party.
     */
    rvg(/^randomParty/, () => {
        const partyArray = [
            'Unaffiliated',
            'Democratic',
            'Republican',
            'Green Party',
            'Libertarian',
            'Reform Party',
            'U.S. Constitution Party',
            'Natural Law Party',
            'Conservative Party',
            'Socialist Party'
        ];
        return partyArray[Math.floor(Math.random() * partyArray.length)];
    });

    /**
     * returns a random NVRA code number from the given array.
     * @returns {string} nvra - A string representing a random NVRA code.
     */
    rvg(/^randomNvra$/, () => {
        const nvraArray = ['24', '33', '49', '54', '76', '82', '99', 'P', 'FP'];
        return nvraArray[Math.floor(Math.random() * nvraArray.length)];
    });

    /**
     * returns a random displayID for a voter.
     * @returns {string} displayID - A string representing a random voter displayId.
     */
    rvg(/^randomVoterID$/, () => {
        return `${chance.letter({casing: 'upper'})}${chance.string({length: 10, pool: '1234567890'})}`
    });
};