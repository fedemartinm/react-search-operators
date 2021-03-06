import { Editor, EditorState, Modifier } from 'draft-js'
import React, { useEffect, useRef, useState } from 'react'

import ReactDOM from 'react-dom'
import highlight from './highlight'
import tokenStyles from './tokens'

//Limit text length to 128 ch
//See DraftEditor-editorContainer in app.css
const DRAFT_MAX_LENGTH = 128

const DraftInput = (props) => {
  const {
    //autowhatever props
    'aria-activedescendant': ariaActivedescendant,
    'aria-autocomplete': ariaAutoComplete,
    'aria-controls': ariaControls,
    autoComplete,
    className,
    onBlur,
    onFocus,
    onEnter,
    onTextChange,
    //parser
    text,
    tokens,
  } = props

  const editorRef = useRef()
  const [state, setState] = useState(EditorState.createEmpty())

  const hash = JSON.stringify(tokens)
  //Highlight syntax
  useEffect(() => {
    setState(highlight(state, tokens))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  //Fix scroll on delete all
  useEffect(() => {
    if (!text) {
      const editorDiv = ReactDOM.findDOMNode(editorRef.current)
      editorDiv.scrollLeft = 0
    }
  }, [text])

  //Events
  const onChange = (newEditorState) => {
    const text = newEditorState.getCurrentContent().getPlainText()
    setState(newEditorState)
    onTextChange(text)
  }

  const onReturn = () => {
    onEnter()
    return 'handled'
  }

  const handleBeforeInput = (chars) => {
    const totalLength =
      state.getCurrentContent().getPlainText().length + chars.length
    return totalLength > DRAFT_MAX_LENGTH
  }

  return (
    <div className={className}>
      <Editor
        ref={editorRef}
        className='editor'
        customStyleMap={tokenStyles}
        autoComplete={autoComplete}
        ariaActiveDescendantID={ariaActivedescendant}
        ariaAutoComplete={ariaAutoComplete}
        ariaControls={ariaControls}
        editorState={state}
        handleReturn={onReturn}
        handlePastedText={handleAsText(onChange)}
        stripPastedStyles={true}
        handleBeforeInput={handleBeforeInput}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  )
}

/* eslint-disable no-control-regex */
// Format, limit text on paste
// Prevent control characters
function handleAsText(onChange) {
  return (text, html, state) => {
    const currentLength = state.getCurrentContent().getPlainText().length
    if (text.length + currentLength > DRAFT_MAX_LENGTH) {
      text = text.slice(0, DRAFT_MAX_LENGTH - currentLength)
    }
    const content = Modifier.replaceText(
      state.getCurrentContent(),
      state.getSelection(),
      (text = text.replace(/[\u0000-\u001F]+/gm, ' '))
    )
    onChange(EditorState.push(state, content))
    return true
  }
}
/* eslint-enable no-control-regex */

export default DraftInput
