const newman = require('newman');
 
newman.run({
    collection: require('./collection/dmoney.json'),
    //collection:('https://crimson-space-226313.postman.co/workspace/SDET~a1d34181-6d55-4046-a985-896c33d30514/collection/19534263-dabebe77-f119-4434-8755-3ad905213410?action=share&creator=19534263'),
    //environment: require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});