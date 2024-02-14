const { useState } = React;

function Page() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
      "No",
      "Sicura?",
      "Sicura sicura?",
      "Iténtalo De Nuevo",
      "Pandro si sta arrabbiando",
      "Fallo per Witton!",
      "Last chance!",
      "Sei sicurissima?",
      "Ripensaci!",
      "Me duele el corazon!",
      "Che direbbe mimi!",
      "mmm e` la tua risposta definitiva?",
      "No vo'a hacer un papelón, pero",
      "Auch, mi corazón :("
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="centered-container">      
            <div className="valentine-container">
                {yesPressed ? (
                    <>
                        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Yay GIF" />
                        <div className="text-container">Evviva!!!</div>
                    </>
                ) : (
                    <>
                        <img
                            className="h-[200px]"
                            style={{ width: "400px", height: "240px" }}
                            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                            alt="Bear GIF"
                        />
                        <h1 className="text-container">Pamelina will you be my Valentine?</h1>
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
            </div>
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById('root'));