import React, { useState } from 'react'
import traverse from 'react-traverse'

function Admin(props) {
  const [myState, setState] = useState({})

  let changeValue = e => {
    setState({
      ...myState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    console.log(myState[e.target.name])
    var json = JSON.stringify(myState)
    const element = document.createElement('a')
    const file = new Blob([json], {
      type: 'application/json'
    })
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.json'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
    e.preventDefault()
  }

  let keyCount = 0

  const replacePsWithInputs = node =>
    traverse(node, {
      DOMElement(path) {
        if (path.node.type === 'p') {
          let newProps = {
            key: '.0',
            className: path.node.props.className,

            name: path.node.props.className,
            rows: path.node.props.children.length > 30 ? 10 : 1,
            cols:
              path.node.props.children.length > 30
                ? 50
                : path.node.props.children.length + 5,
            type: 'text',
            defaultValue: path.node.props.children,
            onChange: e => changeValue(e)
          }
          let textArea = React.createElement('textarea', newProps)
          let submit = React.createElement('input', {
            key: '.1',
            type: 'submit',
            value: 'Save'
          })
          let form = React.createElement('form', {
            name: path.node.props.className,
            className: path.node.props.className,
            key: '.' + keyCount,
            children: [textArea, submit],
            onSubmit: e => handleSubmit(e)
          })
          keyCount++
          return form
        }
        return React.cloneElement(
          path.node,
          path.node.props,
          ...path.traverseChildren()
        )
      }
    })
  console.log(props.nodes())
  return replacePsWithInputs(props.nodes())
}

export default Admin
