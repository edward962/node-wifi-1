const rescan = () => {
    const args = [
      'device',
      'wifi',
      'rescan'
    ];
  
  
    return {
      cmd: 'nmcli',
      args
    };
  };
  
  module.exports = rescan;
  