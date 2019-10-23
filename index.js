"use strict";

module.exports = {
  name: require("./package").name,
  options: {
    autoImport: {
      alias: {
        "pusher-js": "pusher-js/dist/web/pusher.min"
      }
    }
  }
};
