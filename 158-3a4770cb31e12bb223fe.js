(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{"827+":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return r})),t.d(e,"_demoSrcFiles",(function(){return a}));var o=t("mXGw"),s=t.n(o),i=t("BgHK");var r=function(n){var e,t;function o(e,t){var o;return(o=n.call(this,e,t)||this).onClose=function(){o.setState({visible:!1})},o.state={visible:!1},o}t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r=o.prototype;return r.onClick=function(){this.setState({visible:!this.state.visible})},r.render=function(){return s.a.createElement("span",null,s.a.createElement(i.Loading,{visible:this.state.visible,fullScreen:!0,shape:"fusion-reactor",onVisibleChange:this.onClose.bind(this)},s.a.createElement(i.Button,{onClick:this.onClick.bind(this)},"Full Screen")))},o}(s.a.Component),a={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo4";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo4.js":"import React from 'react'\nimport { Loading, Button } from '@alicloud/console-components';\n\nexport default class Demo4 extends React.Component {\n\n  constructor(props, context) {\n    super(props, context)\n      this.state = {\n        visible: false\n      }\n  }\n\n  onClick() {\n    this.setState({visible: !this.state.visible})\n  }\n\n  onClose = () => {\n    this.setState({\n      visible: false\n    })\n  }\n\n  render() {\n    return (\n      <span>\n        <Loading \n          visible={this.state.visible} \n          fullScreen shape=\"fusion-reactor\"\n          onVisibleChange={this.onClose.bind(this)}>\n          <Button onClick={this.onClick.bind(this)} >Full Screen</Button>\n        </Loading>\n      </span>\n    )\n  }\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo4.js"}'}}}]);
//# sourceMappingURL=158-3a4770cb31e12bb223fe.js.map