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
        '@services': './src/service',
        '@configs': './src/config',
        '@commons': './src/common',
        '@errors': './src/error',
        '@app': './src/app'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
