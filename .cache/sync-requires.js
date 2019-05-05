const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": hot(preferDefault(require("/Users/ebnsina/Documents/tests/js.ebnsina.me/src/templates/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/ebnsina/Documents/tests/js.ebnsina.me/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/ebnsina/Documents/tests/js.ebnsina.me/src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ebnsina/Documents/tests/js.ebnsina.me/src/pages/404.js")))
}

