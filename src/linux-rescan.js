const execute = require('./utils/executer');
const promiser = require('./utils/promiser');
const rescan = require('./linux/rescan/rescan.js');

const reScanWifi = config =>
execute(rescan(config)).then(output => (output));



module.exports = promiser(reScanWifi);