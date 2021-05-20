const command = config => {
  const args = [
    '--terse',
    '--fields',
  'active,ssid,bssid,mode,chan,freq,signal,security,wpa-flags,rsn-flags',
    'd',
    'w',
    'list'
  ];


  if (config.iface) {
    args.push('ifname');
    args.push(config.iface);
  }

  return {
    cmd: 'nmcli',
    args
  }
};

module.exports = command;
