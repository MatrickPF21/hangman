type Props = {
  word : string,
  correctLetters: Array<string>,
  isLoser: boolean
}

export function Letters({ word, correctLetters, isLoser } : Props){
  const letters = word.split('')
  return(
    <div style={{
      display:'flex',
      gap:'.5em',
      fontSize:'5em',
      fontWeight:'bolder',
      textTransform:'uppercase',
      fontFamily:'sans-serif',
    }} >
      {letters.map((letter, idx) => (
        <span style={{
          borderBottom:'.05em solid black'
        }} key={idx} >
          <span style={{
            visibility: correctLetters.includes(letter) || isLoser ? 'visible' : 'hidden',
            color: !correctLetters.includes(letter) && isLoser ? 'red' : 'black'
          }} >{letter}</span>
        </span>
      ))}
    </div>
  )
}