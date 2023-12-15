import * as React from "react"
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default function CodeBlock({ code }) {
  console.log(hljs.highlightAuto(code.join('')).value)
  return (
    <div className="w-full bg-gray-800 rounded-md p-4">
      <code className="whitespace-pre" dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code.join('')).value }} />
    </div>)
}
