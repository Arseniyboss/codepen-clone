import styled from 'styled-components'

export const EditorContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  .code-mirror {
    flex: 1;
  }

  .cm-editor {
    outline: none;
  }

  .cm-line,
  .cm-gutterElement {
    background: transparent;
  }
`

export const EditorName = styled.h2`
  background: #242529;
  color: white;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: var(--spacing);
`
