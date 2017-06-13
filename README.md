# react-starter
A starter kit for universal react applications.

## Includes

- **[Docker](https://www.docker.com)**
- **[Webpack 2](https://webpack.js.org)**
- **[React](https://facebook.github.io/react)**
- **[Redux](http://redux.js.org/)**
- **[Jest](https://facebook.github.io/jest)**
- **[ESLint](http://eslint.org/)**
- **[Prettier](https://github.com/prettier/prettier)**
- **[WebdriverIO](http://webdriver.io)**

## Install

```bash
git clone https://github.com/vigosan/react-starter.git
cd react-starter
```

### Redux
The master branch does not include `Redux`, if you need `Redux`:

```bash
git checkout redux
```

## Development

### Requirements

  - [Docker](https://docs.docker.com/engine/understanding-docker) & [Docker Compose](https://docs.docker.com/compose/install)

  Note: On Mac, if using Homebrew do ``brew cask install docker`` and that will install both Docker for Mac and Docker Compose.

  - Makefile (it's probably already on your OS)

### Set up

Run ``make up`` from the root directory to boot the development environment. Then, the application will be available on [http://localhost:8080](http://localhost:8080)

### Commands

- Boot up development server ``make up``
- Show logs ``make logs``
- Run tests ``make test``
- Run End-to-End tests ``make e2e``
- Stop development server ``make down``
- Build the application ``make build``

## Production

### Bundle

Run ``make build`` from the root directory to generate the `index.html` and `main.js` bundle. By default, both files are located in `dist` folder.

### Deployment for Static Sites

You can deploy easily the static site using [Surge](https://surge.sh/):

```bash
npm install --global surge
make build
surge -p dist
```

You'll be promted to introduce your email and a password.

### Deployment for Dynamic Sites

There is an [Express](https://expressjs.com/) server configured for running in production. Just run ``npm start`` and the application will be available on [http://localhost:8080](http://localhost:8080) or ``PORT=8000 npm start`` if you want to user other port.
