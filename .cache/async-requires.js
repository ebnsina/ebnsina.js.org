// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-js": () => import("/Users/ebnsina/Documents/GitHub/js.ebnsina.me/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-page-js": () => import("/Users/ebnsina/Documents/GitHub/js.ebnsina.me/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-tags-js": () => import("/Users/ebnsina/Documents/GitHub/js.ebnsina.me/src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---src-pages-404-js": () => import("/Users/ebnsina/Documents/GitHub/js.ebnsina.me/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ebnsina/Documents/GitHub/js.ebnsina.me/.cache/data.json")

