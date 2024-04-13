import CodeMirror from '@uiw/react-codemirror'
import { Dispatch, SetStateAction } from 'react'
import { EditorView } from '@codemirror/view'
import { atomone } from '@uiw/codemirror-theme-atomone'
import { EditorContainer, EditorName } from './styles'
import { extensions } from '@/utils'

type Props = {
  language: keyof typeof extensions
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

const Editor = ({ language, value, onChange }: Props) => {
  return (
    <EditorContainer>
      <EditorName>{language}</EditorName>
      <CodeMirror
        className='code-mirror'
        height='100%'
        theme={atomone}
        value={value}
        onChange={onChange}
        extensions={[extensions[language], EditorView.lineWrapping]}
      />
    </EditorContainer>
  )
}

export default Editor
