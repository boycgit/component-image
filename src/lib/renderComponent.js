const RaxServerRenderer = require('rax-server-renderer');

module.exports = function(
  component,
  renderer = RaxServerRenderer.renderToString
) {
  try {
    const renderedComponent = renderer(component);
    return renderedComponent;
  } catch (e) {
    throw Error('Not a valid Rax component');
  }
};
