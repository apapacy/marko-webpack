// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        handleClick: function(e) {
          e.preventDefault();

          history.navigate(this.input.href);
        }
      },
    marko_componentType = "/marko-lasso-ex$1.0.0/src/components/a-tag/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_history = require("../../history"),
    history = module_history.default || module_history,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<a" +
    marko_attr("href", input.href) +
    ">");

  marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, "1");

  out.w("</a>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/marko-lasso-ex$1.0.0/src/components/a-tag/index.marko",
    component: "./"
  };
