import { useState, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { generateSrcDoc } from './utils'
import { EditorSection } from './styles'
import Editor from './components/Editor'

const App = () => {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      const srcDoc = generateSrcDoc(html, css, js)
      setSrcDoc(srcDoc)
    }, 500)
    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <EditorSection>
        <Editor language='html' value={html} onChange={setHtml} />
        <Editor language='css' value={css} onChange={setCss} />
        <Editor language='js' value={js} onChange={setJs} />
      </EditorSection>
      <section>
        <iframe srcDoc={srcDoc} title='output' />
      </section>
    </>
  )
}

export default App
