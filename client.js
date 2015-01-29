/*
    Entry point for tiffin commands
*/

var clienthelper = require('./clienthelper.js');

var command = process.argv[2];

switch(command) {
    case undefined:
        console.log("Browse not implemented yet.");
        break;
    case "save":
        clienthelper.save(process.argv[3], process.argv[4]);
        break;
    default:
        console.log("Command not recognized.")
}