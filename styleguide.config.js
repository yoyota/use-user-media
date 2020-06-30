const path = require("path")

module.exports = {
  title: "PoseNet React",
  pagePerSection: true,
  sections: [
    {
      name: "Documentation",
      content: "docs/documentation.md",
      exampleMode: "expand"
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  styleguideDir: "dist-docs",
  moduleAliases: {
    "use-user-media": path.resolve(__dirname, "src")
  }
}
