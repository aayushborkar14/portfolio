import * as React from "react"
import hljs from 'highlight.js'

export default function CodeBlock({ code }) {
  console.log(code)
  return (<code className="whitespace-pre" dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code.join('')).value }} />)
}
