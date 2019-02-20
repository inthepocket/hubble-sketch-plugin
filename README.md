![Hubble Scripts Logo][logo]

[![LICENSE](https://badgen.net/badge/license/MIT/blue)][license]
![Platform](https://badgen.net/badge/platform/macOS?icon=apple)
[![Releases](https://badgen.net/github/releases/inthepocket/hubble-sketch-plugin)][releases]
![Last commit](https://badgen.net/github/last-commit/inthepocket/hubble-sketch-plugin)
[![Latest release](https://badgen.net/github/release/inthepocket/hubble-sketch-plugin/stable)][latest release]
[![Sketch Runner](https://badgen.net/badge/Sketch%20Runner/Compatible/green)][sketch runner]

> Sketch Plugin to couple your Sketch file to the [Hubble Design System][hubble homepage].

Takes your design data out of Sketch and connects it to the Hubble atmosphere.

# Contents

- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

# Prerequisites

- macOS with Sketch 41+ (latest Sketch recommended)
- [Hubble.app][hubble app repo] installed

# Installing

The easiest way to install is to download [one of the releases][releases] and install the plugin in Sketch. Once installed the plugin can be automatically updated through the Sketch Plugin Manager.

hubble-sketch-plugin can also be installed using [Sketch Runner][sketch runner].

# Usage

After the installation, the Hubble will be available in your plugin list. You should first configure your document and enter a unique identifier for your project.

![Configure Document using plugin][screenshot configure document]

This will store the identifier for this project in the Sketch file directly. After this you can start exporting your data to Hubble.app!

Check out the [detailed documentation][wiki] for more info on how to use hubble-sketch-plugin together with the Hubble ecosystem.

# Contributing

❤ We appreciate every form of contribution, but before you contribute please make sure you have read the [contribution guidelines][contributing]

## Development

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme][skpm repo]._
_Uses the [Sketch JS API][sketch js api] for grabbing certain properties_

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

For more on running in development mode, check the [wiki]

# License

[MIT][license]

<!-- LINKS -->
[hubble homepage]: https://hubble-design-system.netlify.com
[hubble app repo]: https://github.com/inthepocket/hubble-app

[logo]: https://github.com/inthepocket/hubble-sketch-plugin/blob/master/.github/hubble-sketch-plugin-banner.png
[license]: https://github.com/inthepocket/hubble-sketch-plugin/blob/master/LICENSE
[contributing]: https://github.com/inthepocket/hubble-sketch-plugin/blob/master/CONTRIBUTING.md
[releases]: https://github.com/inthepocket/hubble-sketch-plugin/releases
[latest release]: https://github.com/inthepocket/hubble-sketch-plugin/releases/latest
[wiki]: https://github.com/inthepocket/hubble-sketch-plugin/wiki

[sketch runner]: https://sketchrunner.com/
[sketch js api]: https://developer.sketchapp.com/reference/api/
[skpm repo]: https://github.com/skpm/skpm/blob/master/README.md

[screenshot configure document]: https://github.com/inthepocket/hubble-sketch-plugin/wiki/assets/configure-sketch-document.png
