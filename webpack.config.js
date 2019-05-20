const config = {
  entry: `${__dirname}/client/app.js`,
  output: {
    path: `${__dirname}/client/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development'
};

module.exports = config;
