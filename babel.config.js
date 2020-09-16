module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@configs': './src/configs',
        '@services': '.src/services',
        '@errors': './src/errors',
        '@app': './src/app'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
