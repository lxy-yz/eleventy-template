const fs = require("fs")
const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js")
  eleventyConfig.addWatchTarget("./styles/tailwind.css")

  eleventyConfig.addPassthroughCopy("./images")
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  })

  eleventyConfig.addShortcode("version", function () {
    return now
  })

  eleventyConfig.addFilter("json", (value) => {
    return JSON.stringify(value, null, 2)
  })

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content404 = fs.readFileSync("_site/404.html")
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
          res.write(content404)
          res.end()
        })
      },
    },
  })
}
