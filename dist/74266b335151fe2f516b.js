import React from"react";import*as ReactDOMClient from"react-dom/client";import App from"./components/App";import"./styles/global.scss";var container=document.getElementById("root"),root=ReactDOMClient.createRoot(container);root.render(React.createElement(App,null));