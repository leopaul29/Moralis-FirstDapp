import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton, Modal } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";
import { abouts } from './about.js'

const App = () => {

const [btc, setBtc] = useState(80);
const [eth, setEth] = useState(38);
const [link, setLink] = useState(62);

const [visible, setVisible] = useState(false);
const [modalToken, setModalToken] = useState();

  return (
    <>
     <div className="header">
        <div className="logo">
            <img src={logo} alt="logo" height="50px"/> Sentiment
        </div>
        <ConnectButton/>
     </div>
     <div className="instructions">
        Where do you think these tokens are going? Up or Down?
     </div>

    <div className="list">
         <Coin
            perc={btc}
            setPerc={setBtc}
            token={"BTC"}
            setModalToken={setModalToken}
            setVisible={setVisible}
          />
         <Coin
            perc={eth}
            setPerc={setEth}
            token={"ETH"}
            setModalToken={setModalToken}
            setVisible={setVisible}
         />
         <Coin
            perc={link}
            setPerc={setLink}
            token={"LINK"}
            setModalToken={setModalToken}
            setVisible={setVisible}
        />
     </div>

     <Modal
        isVisible={visible}
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
        title={modalToken}
        >
        <div>
            <span>About</span>
        </div>
        <div>
            {modalToken && abouts[abouts.findIndex((x) => x.token === modalToken)].about}
        </div>
     </Modal>
    </>
  );
};

export default App;
