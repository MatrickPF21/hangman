const head = <div style={{
  width:'25px',
  height:'25px',
  position:'absolute',
  backgroundColor:'none',
  border:'5px solid black',
  borderRadius:'100%',
  top:'25px',
  right:'-15px'
}} ></div>

const body = <div style={{
  position:'absolute',
  width:'5px',
  height:'50px',
  backgroundColor:'black',
  right:'0',
  top:'60px'
}} ></div>

const rightArm = <div style={{
  position:'absolute',
  height:'5px',
  width:'50px',
  backgroundColor:'black',
  right:'-50px',
  top:'75px',
  rotate:'-30deg',
  transformOrigin: 'left bottom'
}} ></div>

const leftArm = <div style={{
  position:'absolute',
  height:'5px',
  width:'50px',
  backgroundColor:'black',
  right:'5px',
  top:'75px',
  rotate:'30deg',
  transformOrigin: 'right bottom'
}} ></div>

const rightLeg = <div style={{
  position:'absolute',
  height:'5px',
  width:'50px',
  backgroundColor:'black',
  right:0,
  top:'105px',
  rotate:'-60deg',
  transformOrigin: 'right bottom'
}} ></div>

const leftLeg = <div style={{
  position:'absolute',
  height:'5px',
  width:'50px',
  backgroundColor:'black',
  right:'-45px',
  top:'105px',
  rotate:'60deg',
  transformOrigin: 'left bottom'
}} ></div>

const man = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type Props = {
  incorrectLetters: number
}

export function HangMan({ incorrectLetters } : Props){
  return(
    <div style={{ position:'relative' }} >
      { man.slice(0, incorrectLetters) }
      <div style={{
        position:'absolute',
        width:'5px',
        height:'25px',
        backgroundColor:'black',
        right:'0',
        top:'0'
      }} ></div>
      <div style={{
        height:'5px',
        width:'100px',
        backgroundColor:'black',
        marginLeft:'70px'
      }}></div>
      <div style={{
        backgroundColor: 'black',
        width:'5px',
        height:'200px',
        marginLeft:'70px'
      }} ></div>
      <div style={{
        width: '150px',
        backgroundColor:'black',
        height: '5px',
        borderRadius: '10px',
      }} ></div>
    </div>
  )
};