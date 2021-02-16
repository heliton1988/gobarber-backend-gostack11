module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // this will convert the code for the actual version of the node.js that you are using on your machine
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@modules": "./src/modules",
        "@config": "./src/config",
        "@shared": "./src/shared",
      }
    }],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
  ],
}
