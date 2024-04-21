import styled from 'styled-components'

export const EditorSection = styled.section`
  height: 50dvh;
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  gap: var(--spacing);
  padding: var(--spacing);
  background: #3c3e44;
  overflow-x: scroll;
`
