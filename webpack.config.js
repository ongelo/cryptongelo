module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "Build.js"
	},
	watch: true,
	module: {
		rules: [
		{
			test: /\.js$/, 
			exclude: /node_modules/,
			use: {
       			loader: 'babel-loader',
        		options: {
          			presets: ['react']
        		}
        	}
        }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	node: {
  		fs: 'empty',
        net: 'empty',
      	tls: 'empty',
      	dns: 'empty'
	},
	mode: 'development'	

};