// 把 src/star.html 包成 App 用的 www/index.html，並放入 Capacitor 核心程式
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
const s = readFileSync('src/star.html', 'utf8');
const i = s.indexOf('<style>'), j = s.indexOf('</style>') + 8, k = s.indexOf('<script>');
const head = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#23407A">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font-size:14px}img{max-width:100%}[hidden]{display:none!important}</style>
`;
const out = head + s.slice(0, j) + '\n</head>\n<body>\n' + s.slice(j, k)
  + '<script src="capacitor.js"></script>\n' + s.slice(k) + '\n</body>\n</html>\n';
mkdirSync('www', { recursive: true });
writeFileSync('www/index.html', out);
copyFileSync('node_modules/@capacitor/core/dist/capacitor.js', 'www/capacitor.js');
console.log('www/index.html 已產生');
