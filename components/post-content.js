import * as React from "react"
import Link from "next/link";
import CodeBlock from "./code-block";

export default function PostContent({ postContent }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{modifiedText}</b>)
      }
      if (obj.italic) {
        modifiedText = (<em key={index}>{modifiedText}</em>)
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{modifiedText}</u>)
      }
      if (obj.code) {
        modifiedText = (<span key={index} className="font-mono text-pink-600 bg-gray-800 rounded-sm p-1 text-sm">{modifiedText}</span>)
      }
      if (obj.type == 'link') {
        const text = obj.children.map(ob => ob.text).join(' ')
        modifiedText = (<Link key={index} href={obj.href} className="underline">{text}</Link>)
      }
    }

    switch (type) {
      case 'heading-one':
        return <h1 key={index} className="text-5xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>
      case 'heading-two':
        return <h2 key={index} className="text-4xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
      case 'heading-three':
        return <h3 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className="text-lg mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>
      case 'heading-five':
        return <h5 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h5>
      case 'heading-six':
        return <h6 key={index} className="text-lg font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h6>
      case 'code-block':
        return <div className="mb-8"><CodeBlock code={modifiedText} /></div>
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mb-8"
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="w-full">
      {postContent.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}
