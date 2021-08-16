module.exports = function(api) {
  const presets = ['react-app'];
  const plugins = [
    ['import', {
      libraryName: 'antd',
      style: 'css'
  }]
  ];
  if (api.env('development')) {
    plugins.push('react-hot-loader/babel');
  }
  return { presets, plugins };
};
