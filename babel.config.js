module.exports = {
  presets: [['@babel/preset-env', { loose: true, modules: false }], '@babel/preset-typescript', '@babel/preset-react'],
  ignore: ['**/__tests__/*'],
}
