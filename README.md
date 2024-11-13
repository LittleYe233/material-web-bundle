# Material Design Web Bundle

This repo provides an example to bundle pre-built [`material-web`](https://github.com/material-components/material-web) codebase to directly use in the browsers. The bundler is [Rollup](https://rollupjs.org/).

## Get the source

You can get the pre-built from [NPM registry](https://registry.npmjs.org/@material/web/-/web-2.2.0.tgz). Also you can download via `npm install @material/web`. Certainly it is included in the `package.json`.

## Build

I have tested it with Node.js v20.18.0.

```bash
npm install # Pull down all packages
npx rollup -c # Bundle it
```

## Test

The test HTML file is a bit modified from the referred document below. The typography settings are ignored.

```bash
npx http-server
```

## Reference

https://github.com/material-components/material-web/blob/main/docs/quick-start.md

