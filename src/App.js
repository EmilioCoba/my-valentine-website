import { useState } from "react";
import "./index.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart :(",
];

const gif = [
  "https://media.tenor.com/CNJSyzMIkskAAAAj/bubu-dudu-sseeyall.gif",
  "https://media.tenor.com/N-J4Str0DSEAAAAj/dudu-bubu-dudu-love.gif",
  "https://i.pinimg.com/originals/34/41/75/344175e00c79cc53cce97978418ba707.gif",
  "https://media.tenor.com/mrRRhRdxtXAAAAAj/dudu-giving-flowers-cute.gif",
  "https://media.tenor.com/4J9PeNzqAuwAAAAj/bubu-dudu-bubu-dudu-happy.gif",
  "https://media.tenor.com/lXKKsl6ZSBcAAAAj/dudu-sad.gif",
  "https://i.pinimg.com/originals/03/da/d1/03dad1bb74ceaae4037ddb15c60da3b7.gif",
];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noImg, setNoImg] = useState(
    "https://media.tenor.com/P9kCF-ZRvn8AAAAj/dudu-heart-cute.gif"
  );
  const yesButtonSize = noCount * 50 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    setNoImg(gif[Math.min(noCount + 1, gif.length - 1)]); // Update image
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed && noCount < 1 ? (
        <>
          <img
            alt="bears kissing"
            src="https://i.pinimg.com/originals/ae/f5/00/aef5000829c04e91f0259d58727459a3.gif"
          />
          <div className="text">
            <p>Yayy!!!</p>
          </div>
        </>
      ) : yesPressed && noCount < 2 ? (
        <>
          <img
            alt="bears kissing"
            src="https://gifdb.com/images/thumbnail/bubu-dudu-kiss-on-the-wall-1o5zknnn4l42vupr.gif"
          />
          <div className="text">
            <p className="">My magic worked!!</p>
          </div>
        </>
      ) : yesPressed && noCount < 9 ? (
        <>
          <img
            alt="bears kissing"
            src="https://i.pinimg.com/originals/7e/bd/71/7ebd71142a47c65e890af6471812fa88.gif"
          />
          <div className="text">
            <p>It's a date</p>
          </div>
        </>
      ) : (
        <>
          <img alt="bear with hearts" src={noImg} />
          <div>
            <p>Will you be my valentine?</p>
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            {noCount < 8 && (
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
