# Regex Playground

### Getting Started

On first run:

```
npm install
npm install -g webpack
npm install -g nodemon
```

If the install of `webpack` and `nodemon` fails:

```
sudo npm install -g webpack
sudo npm install -g nodemon
```

Start and `--watch` with `webpack`:

```
npm run build
```

Start `node` server with `nodemon`:

```
npm start
```

### Changing `npm start` and `npm run build`

You can alter these processes in your `package.json` file. The following is the current setup:

```
...
"scripts" : {
  "start" : "nodemon app.js",
  "build" : "webpack --progress --colors --watch"
},
...
```

### Technologies Used
- [Flexbox Grid](http://flexboxgrid.com/)
- [Material-UI](http://www.material-ui.com/#/)
