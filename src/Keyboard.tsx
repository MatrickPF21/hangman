import { Dispatch, SetStateAction } from "react"

const keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

type Props = {
  activeLetters: Array<string>,
  disabledLetters: Array<string>,
  addLetter: (letter : string) => void,
  disabled: boolean
}

export function Keyboard({ activeLetters, disabledLetters, addLetter, disabled } : Props){
  return(
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(37.5px, .5fr))',
      gap:'.25rem',
    }} >
      { keys.map((key, idx) => {
        const isActive = activeLetters.includes(key)
        const isInactive = disabledLetters.includes(key)
        return <button className={`btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive': ''}`} 
          key={idx}
          onClick={() => addLetter(key)}
          disabled={isInactive || isActive || disabled}
        >{key}</button>
      }) }
    </div>
  )
}