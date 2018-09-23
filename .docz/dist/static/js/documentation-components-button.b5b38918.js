(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./documentation/components/Button.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/react-emotion/dist/index.esm.js");function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  ",";\n  ",";\n  cursor: pointer;\n  margin: 3px 5px;\n  border: none;\n  border-radius: 3px;\n"]);return m=function(){return e},e}var u={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},s=Object(c.default)("button")(m(),function(e){var n=e.kind,t=void 0===n?"primary":n,a=e.outline;return function(e){var n=function(e){return function(n,t){var a=e?n:"transparent";return"\n    background: ".concat(e?"transparent":n,";\n    box-shadow: inset 0 0 0 1px ").concat(a,";\n    color: ").concat(e?n:t,";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(a,";\n      color: ").concat(t,";\n    }\n  ")}}(e);return{primary:n("#1FB6FF","white"),secondary:n("#5352ED","white"),cancel:n("#FF4949","white"),dark:n("#273444","white"),gray:n("#8492A6","white")}}(void 0!==a&&a)[t]},function(e){var n=e.scale;return u[void 0===n?"normal":n]}),p=function(e){var n=e.children,t=l(e,["children"]);return o.a.createElement(s,t,n)};function d(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}p.defaultProps={scales:"normal",kind:"primary",outline:!1},p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{scales:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'normal'",computed:!1},{value:"'big'",computed:!1}]},required:!1,description:""},kind:{defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'cancel'",computed:!1},{value:"'dark'",computed:!1},{value:"'gray'",computed:!1}]},required:!1,description:""},outline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};n.default=function(e){var n=e.components,t=d(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"best-practices"}},"Best practices"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Group buttons logically into sets based on usage and importance."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Ensure that button actions are clear and consistent."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The main action of a group set can be a primary button."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Select a single button variation and do not mix them.")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),o.a.createElement(i.PropsTable,{of:p}),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),o.a.createElement(i.Playground,{__position:1,__code:"<Button>Click me</Button>",__scope:{props:t,Button:p}},o.a.createElement(p,null,"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"with-different-sizes"}},"With different sizes"),o.a.createElement(i.Playground,{__position:2,__code:'<Button scale="small">Click me</Button>\n<Button scale="normal">Click me</Button>\n<Button scale="big">Click me</Button>',__scope:{props:t,Button:p}},o.a.createElement(p,{scale:"small"},"Click me"),o.a.createElement(p,{scale:"normal"},"Click me"),o.a.createElement(p,{scale:"big"},"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"with-different-colors"}},"With different colors"),o.a.createElement(i.Playground,{__position:3,__code:'<Button kind="primary">Click me</Button>\n<Button kind="secondary">Click me</Button>\n<Button kind="cancel">Click me</Button>\n<Button kind="dark">Click me</Button>\n<Button kind="gray">Click me</Button>',__scope:{props:t,Button:p}},o.a.createElement(p,{kind:"primary"},"Click me"),o.a.createElement(p,{kind:"secondary"},"Click me"),o.a.createElement(p,{kind:"cancel"},"Click me"),o.a.createElement(p,{kind:"dark"},"Click me"),o.a.createElement(p,{kind:"gray"},"Click me")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"outlined"}},"Outlined"),o.a.createElement(i.Playground,{__position:4,__code:'<Button kind="primary" outline>\n  Click me\n</Button>\n<Button kind="secondary" outline>\n  Click me\n</Button>\n<Button kind="cancel" outline>\n  Click me\n</Button>\n<Button kind="dark" outline>\n  Click me\n</Button>\n<Button kind="gray" outline>\n  Click me\n</Button>',__scope:{props:t,Button:p}},o.a.createElement(p,{kind:"primary",outline:!0},"Click me"),o.a.createElement(p,{kind:"secondary",outline:!0},"Click me"),o.a.createElement(p,{kind:"cancel",outline:!0},"Click me"),o.a.createElement(p,{kind:"dark",outline:!0},"Click me"),o.a.createElement(p,{kind:"gray",outline:!0},"Click me")))}}}]);