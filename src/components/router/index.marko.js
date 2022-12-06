// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
    onCreate: function ({page, data}) {
        this.state = {
            component: require(`../${ page }/index.marko`),
            data
        };
        history.listen(this.handle.bind(this));
    },
    handle: async function ({location}) {
        const route = await router.resolve(location);
        this.state.data = route.data;
        this.state.component = require(`../${ route.page }/index.marko`);
    },
    dispatch: function (type) {
        store.dispatch({ type: type });
    }
},
    marko_componentType = "/marko-lasso-ex$1.0.0/src/components/router/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    layout_template = require("../layout"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    layout_tag = marko_loadTag(layout_template),
    module_history = require("../../history"),
    history = module_history.default || module_history,
    module_router = require("../../router"),
    router = module_router.default || module_router,
    module_store = require("../../store"),
    store = module_store.default || module_store;

function render(input, out, __component, component, state) {
  var data = input;

  layout_tag({
      renderBody: function(out) {
        marko_dynamicTag(out, state.component, function() {
          return {
              store: store.getState(),
              data: state.data
            };
        }, null, null, null, __component, "1");
      }
    }, out, __component, "0", [
    [
      "increment",
      "dispatch",
      false,
      [
          "INCREMENT"
        ]
    ]
  ]);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "package: ./browser.json"
    ],
    id: "/marko-lasso-ex$1.0.0/src/components/router/index.marko",
    component: "./",
    tags: [
      "../layout"
    ]
  };
