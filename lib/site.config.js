module.exports = {
  build: {
    srcPath: './site',
    outputPath: './dict'
  },
  site: {
    title: 'site'
  },
  basePath: process.env.NODE_ENV === 'production' ? '/api' : ''  
};