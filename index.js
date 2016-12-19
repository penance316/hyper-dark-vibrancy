module.exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

module.exports.decorateConfig = config => {
  
  config.backgroundColor = 'rgba(0,0,0,0.5)';
  return config;
}