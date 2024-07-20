module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@ui': './app/ui',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@constants': './app/constants',
          /* MODULES */
          '@Sessions': './app/modules/sessions',
        },
      },
    ],
  ],
};
