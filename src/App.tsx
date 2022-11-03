import { useCallback, useEffect, useState } from 'react'
import { HangMan } from './HangMan'
import { Keyboard } from './Keyboard'
import { Letters } from './Letters'
import { words } from './words'

function App() {
  const [ word, setWord ] = useState<string>(() => { return words[Math.floor(Math.random() * words.length)] })
  const [ letterAttemps, setLetterAttemps ] = useState<Array<string>>([])
  const incorrectLetters = letterAttemps.filter(letter => !word.includes(letter))
  const correctLetters = letterAttemps.filter(letter => word.includes(letter))
  const isLoser = incorrectLetters.length > 5
  const isWinner = word.split('').every((letter) => letterAttemps.includes(letter))
  const addLetterAttemp = useCallback(( letter : string )=>{
    if(letterAttemps.includes(letter)) return;
    setLetterAttemps(prev => [...prev, letter])
  },[letterAttemps])

  useEffect(()=>{
    const handler = ( e : KeyboardEvent ) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return;
      if(isWinner || isLoser) return;

      e.preventDefault()

      addLetterAttemp(key)
    }

    document.addEventListener('keypress', handler)

    return () => { document.removeEventListener('keypress', handler) }

  },[letterAttemps])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems:'center',
      margin:'0 auto'
    }}>
      <div style={{ textAlign: 'center', fontSize: '2rem' }} >
        { isLoser && <span>You lose! Refresh the page to try again</span> }
        { isWinner && <span>You won! Refresh the page to play again</span> }
      </div>
      <HangMan incorrectLetters={incorrectLetters.length} />
      <Letters word={word} correctLetters={correctLetters} isLoser={isLoser} />
      <div style={{alignSelf:'stretch'}} >
        <Keyboard
          activeLetters={correctLetters}
          disabledLetters={incorrectLetters}
          addLetter={addLetterAttemp}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  )
}

export default App
