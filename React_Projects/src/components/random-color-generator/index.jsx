import { useEffect, useState } from "react";

export default function RandomColor() {
    const [typeOfColor,setTypeofColor]=useState('hex');
    const [color,setColor]=useState("#000000")
    function RandomColorUtility(length){
      return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor(){
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexcolor="#";
for(let i=0;i<6;i++){
  hexcolor+=hex[RandomColorUtility(hex.length)]
}
console.log(hexcolor)
setColor(hexcolor)
    }
function handleCreateRandomRgbColor(){
  let r=RandomColorUtility(256)
  let g=RandomColorUtility(256)
  let b=RandomColorUtility(256)
  setColor(`rgb(${r},${g},${b})`)
console.log(color)
}
useEffect(()=>{
  if(typeOfColor==='rgb') handleCreateRandomRgbColor();
  else handleCreateRandomHexColor();
},[typeOfColor]);
  return (
    <div 
    style={{ height:"100vh",
        width:"100vw",
        background:color

    }}className="container">
      
        <button onClick={()=>setTypeofColor('hex')}>Create Hex Color</button>
        <button onClick={()=>setTypeofColor('rgb')}>Create RGB Color</button>
      <button onClick={typeOfColor==='hex'?()=>handleCreateRandomHexColor():()=>handleCreateRandomRgbColor()}>Generate Random Color</button>
    <div style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#ffffff",
      fontSize:"60px",
      marginTop:"50px",
      flexDirection:"column",
      gap:"20px"
    }}>
      <h3>{typeOfColor==='rgb'?"RGB Color":"HEX Color"}</h3>
      <h1>{color}</h1>

    </div>
    </div>
  );
}
