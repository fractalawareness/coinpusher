"use strict";

const BTC_PORT = 3333;
const ETH_PORT = 3334;
const LTC_PORT = 3335;

const bitcoinStream = new Stream(null, BTC_PORT, true);
const ethereumStream = new Stream(null, ETH_PORT, true);
const litecoinStream = new Stream(null, LTC_PORT, true);

bitcoinStream.connect();
ethereumStream.connect();
litecoinStream.connect();

window.onresize = () => {
    //bitcoinStream.resizePlots();
    //ethereumStream.resizePlots();
    litecoinStream.resizePlots();
};
