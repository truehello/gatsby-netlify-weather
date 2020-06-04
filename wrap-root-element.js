const React = require("react");

const { Provider } = require("./weather-context");


module.exports = ({ element }) => (
  <Provider>
    {element}
  </Provider>
);