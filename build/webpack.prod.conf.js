const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./conf.js');
const webpackConfig = require('./webpack.conf.js');
const OptimizeCSSPlugin  = require("optimize-css-assets-webpack-plugin");
//vw
const autoprefixer = require('autoprefixer');
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');
const webpackProdConfig = {
  mode: 'production',
  output: {
    path: config.distRoot,
    filename: '[name].[chunkhash].js'
  },
  module: {
	  rules: [
		  {
			  test: /\.css$/,
			  use: [
				  require.resolve('style-loader'),
				  {
					  loader: require.resolve('css-loader'),
					  options: {
						  importLoaders: 1,
						  modules: false,
					  },
				  },
				  {
					  loader: require.resolve('postcss-loader'),
					  options: {
						  // Necessary for external CSS imports to work
						  // https://github.com/facebookincubator/create-react-app/issues/2677
						  ident: 'postcss',
						  plugins: () => [
							  require('postcss-flexbugs-fixes'),
							  autoprefixer({
								  browsers: [
									  '>1%',
									  'last 4 versions',
									  'Firefox ESR',
									  'not ie < 9', // React doesn't support IE8 anyway
								  ],
								  flexbox: 'no-2009',
							  }),
							  postcssAspectRatioMini({}),
							  postcssPxToViewport({
								  viewportWidth: 750, // (Number) The width of the viewport.
								  viewportHeight: 1334, // (Number) The height of the viewport.
								  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
								  viewportUnit: 'vw', // (String) Expected units.
								  selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
								  minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
								  mediaQuery: false // (Boolean) Allow px to be converted in media queries.
							  }),
							  postcssWriteSvg({
								  utf8: false
							  }),
							  postcssCssnext({}),
							  postcssViewportUnits({}),
							  cssnano({
								  preset: "advanced",
								  autoprefixer: false,
								  "postcss-zindex": false
							  })
						  ],
					  },
				  },
			  ],
		  },
		  {
			  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			  loader: 'file-loader',
			  options: {
				  limit: 10000
			  }
		  },
		  {
			  test: /\.html$/,
			  use: [{
				  loader: 'html-loader',
				  options: {
					  minimize: true
				  }
			  }],
		  }
	  ]
  },
  // devtool: '#source-map',
	devtool: 'false'

}

let plugins = [
  new ExtractTextPlugin({ filename: "styles.[chunkhash].css", allChunks: true }),
	new OptimizeCSSPlugin({
		cssProcessorOptions: {
			safe: true
		}
	})
	// new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false
  //   }
  // }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'common', // 将公共模块提取,生成名为`common`的chunk
  //   minChunks: 2 // 提取至少2个模块共有的部分
  // })
]
webpackConfig.plugins.push.apply(webpackConfig.plugins, plugins);
module.exports = merge(webpackConfig, webpackProdConfig);
