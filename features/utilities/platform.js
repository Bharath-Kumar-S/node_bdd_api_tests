const process = require('process');

var platform = process.platform;
let platformName = ""

module.exports = function () {

    switch(platform) {
        case 'darwin':
            console.log("Darwin platfrom(MacOS, IOS etc)");
            platformName = "MAC OSX"
            break;
        case 'linux':
            console.log("Linux Platform");
            platformName = "Linux"
            break;
        case 'win32':
            console.log("windows platform");
            platformName = "Windows"
            break;
        default:
            console.log("unknown platform");
            platformName = "Unknown"
    }

    return platformName
}
