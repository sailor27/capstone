## Project Guide
atom packages:
```
monokai theme 😎
linter-eslint
```

.gitignore:
```
.DS_STORE
node_modules
build
```

Install webpack, React, ReactDOM, propTypes, babel transpiler, linter, webpack server, HMR, weback eslint loader, and style jsx.
```
npm install webpack@3.4.0 webpack-dev-server@2.5.0 eslint eslint-plugin-react -g   
```
```
npm install react@15.5.4 react-dom@15.5.4 react-router-dom prop-types@15.5.10 --save
```
```
npm install webpack@3.4.0 babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 webpack-dev-server@2.5.0 react-hot-loader@3.0.0-beta.7 html-webpack-plugin@2.29.0 eslint eslint-plugin-react eslint-loader  url-loader@0.6.2 file-loader@1.1.6 --save-dev
```
```
npm install --save styled-jsx
```

Configure .eslintrc.json, template.ejs, webpack.config
 * Copy config files from practice repo
 * eslint --init (set up eslint config file)
 * webpack-dev-server
 * npm run start
 * npm run lint
 * npm run lint-fix
