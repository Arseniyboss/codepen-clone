import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'

export const extensions = {
  html: html(),
  css: css(),
  js: javascript({ jsx: true }),
}

export const generateSrcDoc = (html: string, css: string, js: string) => {
  return `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `
}
