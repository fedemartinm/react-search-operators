import { Editor, EditorState, Modifier } from 'draft-js'
import React, { useRef } from 'react'

import highlight from './highlight'
import styles from './tokens'

const DraftInput = React.forwardRef((props, ref) => {
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

  const prevText = useRef()
  const editorState = useRef(EditorState.createEmpty())

  if (prevText.current !== text) {
    editorState.current = highlight(editorState.current, tokens)
    prevText.current = text
  }

  const onChange = (newEditorState) => {
    editorState.current = newEditorState
    const nextText = newEditorState.getCurrentContent().getPlainText()
    if (text !== nextText) onTextChange(nextText)
  }

  const onReturn = () => {
    onEnter()
    return 'handled'
  }

  return (
    <div ref={ref} className={className}>
      <Editor
        className='editor'
        customStyleMap={styles}
        autoComplete={autoComplete}
        ariaActiveDescendantID={ariaActivedescendant}
        ariaAutoComplete={ariaAutoComplete}
        ariaControls={ariaControls}
        editorState={editorState.current}
        handleReturn={onReturn}
        handlePastedText={handleAsText(onChange)}
        stripPastedStyles={true}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  )
})

function handleAsText(onChange) {
  return (text, html, state) => {
    const content = Modifier.replaceText(
      state.getCurrentContent(),
      state.getSelection(),
      (text = text.replace(/[\u0000-\u001F]+/gm, ' '))
    )
    onChange(EditorState.push(state, content))
    return true
  }
}

export default DraftInput
