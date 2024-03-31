import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  const addValue = () => {
    /*mujhe kaise pta chle ki ye function kaam kr rha hai.
    aur mujhe pta hai ki bar-bar button pe click krunga to wo 2 cirlce 3 circle
    bna deta hai isiliye math module ka use krte hai.
    */
   // console.log('value added',Math.random());
   /*
   abhi tk hmne check kr liya hai value add ho rhi mtlb
   counter bhi add ho skta hai.
   */
  // console.log('clicked ',Math.random())
  // counter = counter + 1
  /*
  ye krne bad bhi counter ki value increase nhi huyi.
  */
  console.log('clicked ',counter)
  counter = counter + 1
  if(counter<21)
  setCounter(counter)
  /*
  abhi tk hmne jo bhi kiya hua yha tk
  abhi tk sare concept chal rhe hai.
  div aa rhe hai tree bn rha hai parsing ho rhi hai.
  react ke elements bhi bn rhe hai,
  variables bhi chl rhe hai.

  variables update bhi ho rhe hai,classic javascript,

  lekin problem aa rhi hai UI updation me 
  yhi pe ui ki mazor power aa rhi hai.
  ek button pr click krne se 5 jagah chije update hona yhi main react
  ki power hai.

  ui pr jo updation hoga usko react control kregi

  react react krti hai variable ke updation pe
  isiye ise reactive library khte hai.
  means variable me ek jagah update hone pr hr jagah react krti hai.

  */
 /*
 ab hum aur kuchh chije kr rhe hai char pach 
 jagah counter ko rkhte hai.
 ab jaise ye kaam hum classic js me krte to 
 bhut sare refres ekttathe ho jate
 document.getElementById,byclassname 
 button ke under jake text change
 ....


 ab isse bachne ke react ne kha me aapko ek tarika
 deta hu Hooks
 Hooks ki kahani shuru hoti 
 isme bhut sare hook aur hr hook kuchh kaam 
 hai jyada chije nhi rkhte hai kuchh basic chije 
 hi rkhte hai 
 kyuki code clean rhta debugginging me asani rhti 
 hai.
 kuchh hi kaam ke hai.
 */

 /*
 ab chalu hoti hai khani hooks ki useState hook ki
 import { useState } from 'react'
 ye ab react ko import krne ki jrurt nhi hoti 
 kyuki babek kr deta hai behind the scene _JSX babel
 ab hooks ko use kaise krte hai 
 useState()
 ye hai state ko change krne ke liye responsible
yha change ka mtlb ye nhi hai value updation 
change ka mtlb hai is change ko prapogate kiya jata 
hai hmare ui ke uppr dom pr
useState() iske under koi bhi default value kisi bhi type ki de skte hai
jaise true,false,'','rohit',[],{},
dene ko function bhi de skte pr wo optimization wali baat 
abhi ke liye nhi dete hai.
abhi hmne default value 15 de di hai hmare question ke according
usestate hme do chije deta hai array ke format me 
const [counter , setCounter] = useState(15)
phla variable hai ,dusra function hai.
 */
  }

  const removeValue = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Rohit Varfa</h1>
      <h2>counter Value:{counter}</h2>
      <button 
      onClick={addValue}>add value:{counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value: {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
/*

*/
