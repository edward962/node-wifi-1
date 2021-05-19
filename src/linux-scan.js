const execute = require('./utils/executer');
const promiser = require('./utils/promiser');
const command = require('./linux/scan/command.js');
const rescan = require('./linux/scan/rescan.js');
const parse = require('./linux/scan/parser');

const scanWifi = (config) =>{
  setTimeout(rescan,1000);
  execute(command(config)).then(output => parse(output));

}

module.exports = promiser(scanWifi);
