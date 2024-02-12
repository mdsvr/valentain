import React, { useState, useEffect } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showFinalGif, setShowFinalGif] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  useEffect(() => {
    if (noCount === 16) {
      setShowFinalGif(true);
    }
  }, [noCount]);

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            {showFinalGif ? (
              <>
                <img
                  className="h-[200px]"
                  style={{ width: "400px", height: "240px" }}
                  src="https://media.tenor.com/YoAqt_jAr-UAAAAi/sad-broken-heart.gif"
                  alt="Final GIF"
                />
                <div className="text-container">I hate you 💔</div>
              </>
            ) : (
              <>
                <img
                  className="h-[200px]"
                  style={{ width: "400px", height: "240px" }}
                  src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                  alt="Valentine Bear"
                />
                <h1 className="text-container">Will you be my Valentine?</h1>
                <div>
                  <button
                    className={"yes-button"}
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                  >
                    Yes
                  </button>

                  <button onClick={handleNoClick} className="no-button">
                    {noCount === 0 ? "No" : getNoButtonText()}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
