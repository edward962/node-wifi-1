const rescan = config => {
    const args = [
      'd',
      'w',
      'rescan',
    ];
  
  
    return {
      cmd: 'nmcli',
      args
    };
  };
  
  module.exports = rescan;