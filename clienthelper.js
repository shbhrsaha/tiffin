/*
    Handles file interactions with remote server
*/

module.exports.save = function (localFileName, remoteFileName) {

    if (!localFileName) {
        console.log("You must include a local file name.");
        process.exit(1);
    }

}