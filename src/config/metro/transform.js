const upstreamTransformer = require('metro-react-native-babel-transformer');
const svgTransformer = require('./svgTransformer');

module.exports.transform = ({src, filename, options}) => {
  if (filename.endsWith('.svg')) {
    return svgTransformer.transform({src, filename, options});
  }

  return upstreamTransformer.transform({src, filename, options});
};
