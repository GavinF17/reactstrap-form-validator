const {
  override,
  addWebpackAlias,
  removeModuleScopePlugin
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "reactstrap-form-validator": path.resolve(__dirname, 'lib')
  }),
  removeModuleScopePlugin()
);
