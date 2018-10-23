<p align="center">
  <h1 align="center">💎 sketchxport-plugin</h1>

  <p align="center">
    <a href='./LICENSE'>
      <img src="https://badgen.net/badge/license/MIT/blue" alt="MIT License">
    </a>
    <img src="https://badgen.net/badge/platform/macOS?icon=apple" alt="" />
    <a href="https://github.com/inthepocket/sketchxport-plugin/releases">
      <img src="https://badgen.net/github/releases/inthepocket/sketchxport-plugin" />
    </a>
    <img src="https://badgen.net/github/last-commit/inthepocket/sketchxport-plugin" />
  </p>

<p align="center">
    Export configuration data like colors, fonts & text styles out of sketch to a universally parseable JSON format.<br/>
    This repository is an attempt to further automate design systems & tooling at In The Pocket.<br/>
    <br/>
    Assets can also be exported as platform-friendly PNG & SVG formats.
    [👷‍♀️UNDER CONSTRUCTION👷‍♂️]
  </p>
</p>

# 👉  Prerequisites

- macOS with Sketch 42+
- If you want to use the experimental upload to cloud feature, you'll need google-cloud-sdk (for gsutil) installed and authenticated

## ☁️  Uploading assets to online storage/cloud

There is functionality included to upload the generated assets from this plugin to a (cloud) storage provider.
Currently this feature is behind a debug flag as it is still experimental and relies on specific env setup.

By default it is disabled but you can enable it [in the debugConfig](https://github.com/inthepocket/sketchxport-plugin/blob/master/src/sketchxport.js#L9) by setting the `enableExperimentalFeatures` flag to true.

The only supported provider for the moment is Google Cloud Storage and it relies on having the gsutil CLI installed and a project configured. The bucket name is configured as a param passed to the `uploadToGoogleCloud` function and will default to `sketchxport-plugin-output`.

This feature is still under active development like the rest of this project and we will look for a more user friendly way to configure this.

## 🛠  Development

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Custom Configuration

### Babel

To customize Babel, you have two options:

* You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

* If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
}
```

## Debugging

To view the output of your `console.log`, you have a few different options:

* Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
* Open `Console.app` and look for the sketch logs
* Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

## Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
