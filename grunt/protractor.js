module.exports = {
  options: {
    keepAlive: false, // If false, the grunt process stops when the test fails.
    noColor: false // If true, protractor will not use colors in its output.
  },
  default: {
    configFile: 'test/client/e2e/e2e.protractor.conf'
  }
};
