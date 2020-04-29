import { EditorState, Modifier, RichUtils } from 'draft-js'

import styles from './tokens'

/**
 * Syntax Highlighting.
 *
 */
function highlight(state, tokens) {
  //Cancel execution after 32 tokens
  if (tokens.length > 32) {
    return state
  }

  //console.time('highlighting')

  let editingState = state
  const originalSelection = editingState.getSelection()

  //Calculate select all
  let currentContent = editingState.getCurrentContent()
  const allText = editingState.getSelection().merge({
    anchorKey: currentContent.getFirstBlock().getKey(),
    anchorOffset: 0,
    focusOffset: currentContent.getLastBlock().getText().length,
    focusKey: currentContent.getLastBlock().getKey(),
  })
  //Apply select all
  editingState = EditorState.forceSelection(editingState, allText)

  //Delete all styles
  editingState = EditorState.push(
    editingState,
    Object.keys(styles).reduce(
      (contentState, color) =>
        Modifier.removeInlineStyle(contentState, allText, color),
      editingState.getCurrentContent()
    ),
    'change-inline-style'
  )

  tokens.forEach(({ type, startOffset, endOffset }) => {
    editingState = EditorState.forceSelection(
      editingState,
      originalSelection.merge({
        anchorOffset: startOffset,
        focusOffset: endOffset,
      })
    )

    const currentStyle = editingState.getCurrentInlineStyle()

    //Apply token style
    const styleToApply = styles[type]
    if (!currentStyle.has(styleToApply)) {
      editingState = RichUtils.toggleInlineStyle(editingState, type)
    }
  })
  EditorState.push(
    editingState,
    editingState.getCurrentContent(),
    'change-inline-style'
  )

  //Restore selection
  editingState = EditorState.forceSelection(editingState, originalSelection)

  //console.log('✅Highlighted')
  //console.timeEnd('highlighting')

  return editingState
}

export default highlight
