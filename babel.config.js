module.exports = api => {
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '@theme': './src/assets/theme',
          '@feature': './src/feature',
          '@common': './src/components/common',
          '@icons': './src/components/common/icons',
          '@globals': './src/globals',
          '@components': './src/components',
        },
      },
    ],
  ];

  if (api.env('production')) {
    plugins.push('transform-remove-console');
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins,
    };
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
