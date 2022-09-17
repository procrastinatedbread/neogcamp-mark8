import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "💘": "Heart with Arrow",
  "💝": "Heart with Ribbon",
  "💖": "Sparkling Heart",
  "💗": "Growing Heart",
  "💓": "Beating Heart",
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "❤️‍🔥": "Heart on Fire",
  "❤️‍🩹": "Mending Heart"
};

var emojiWeKnow = Object.keys(emojiDictionary);

var headingText = "Inside outtt ";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
