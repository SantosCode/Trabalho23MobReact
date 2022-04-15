const svgr = require('@svgr/core').default;
const upstreamTransformer = require('metro-react-native-babel-transformer');

module.exports = {
  transform: ({src, filename, options}) => {
    const jsCode = svgr.sync(src, {
      native: true,
      replaceAttrValues: {
        '{props.color}': 'props.color',
      },
      jsx: {
        babelConfig: {
          plugins: [
            [
              '@svgr/babel-plugin-replace-jsx-attribute-value',
              {
                values: [
                  {
                    value: '{props.color}',
                    newValue: 'props.color',
                    literal: true,
                  },
                  {
                    value: '{props.backgroundColor}',
                    newValue: 'props.backgroundColor',
                    literal: true,
                  },
                  {
                    value: '{props.checkColor}',
                    newValue: 'props.checkColor',
                    literal: true,
                  },
                  {
                    value: '{props.circleColor}',
                    newValue: 'props.circleColor',
                    literal: true,
                  },
                ],
              },
            ],
          ],
        },
      },
      svgProps: {
        fill: '{props.fill}',
        stroke: '{props.stroke}',
      },
    });

    return upstreamTransformer.transform({
      src: jsCode,
      filename,
      options,
    });
  },
};
