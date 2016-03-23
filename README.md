
# Nondescript senior citizen service platform

## Features
- React, redux, react-redux, react-router, react-router-redux
- Gulp, Babel and Webpack:
  - Webpack dev server
  - Hot-reloading
  - Compile SASS
  - Inject css and js dependencies into html
- Firebase
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting

## Dev
### Prereqs
`node >= 5.2`

### Start
```bash
$ npm install && npm start
```

- Builds the project
- Starts the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watches for changes to the source files and process changes
- Live-reloads the browser

### Testing
```bash
$ gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.


### Release Builds
```bash
$ gulp dist
```
- Generate bundled and minified artifacts and deposit into `/target` directory
- Inject style and script tags into index.html
