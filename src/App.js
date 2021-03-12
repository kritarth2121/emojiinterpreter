import './App.css';
import React,{useState} from 'react';
const App=()=> {
  const [emoji,setEmoji]=useState();
  var dict={
    "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes"
  };
const emojichange=(event)=>{
var ee=event.target.value;
if (ee!==""){
setEmoji(dict[ee]);}
}
const emojii =(val)=>{
  setEmoji(dict[val]);
}
var a=["😘","😉","🤣","🙃","😁"];
const renderered=a.map((aa) => {                                                                                          
  return (
      <span key={aa} onClick={(e)=>emojii(aa)}>{aa}</span>
  )
});
const handleKeypress = e => {
  //it triggers by pressing the enter key
  console.log(e.keyCode,e.key);
if (e.key === "Enter") {
  console.log("fuck");
  emojichange(e);
}
};
  return (
    <div className="App">
      <h2>Emoji Interpreter App</h2>
      <img alt="emojis" src="https://img.etimg.com/thumb/width-640,height-480,imgsize-343027,resizemode-1,msid-70259600/magazines/panache/world-emoji-day-gets-special-icon-abcd-least-used-symbol-on-twitter-yawn-smiley-to-arrive-soon/emojis_gettyimages.jpg"></img>
      <input style={{width: "80%",
 padding: "12px 20px",
  margin: "8px 8px",
  }} onChange={(e)=>emojichange(e)}  onKeyPress={(e)=>handleKeypress(e)}></input>
  <div className="sample">
  {renderered}
  </div>
  

  <div className="sample">


  {emoji}
</div>


    </div>
  );
}

export default App;
