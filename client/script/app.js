"use strict";

const BTC_PORT = 3333;
const ETH_PORT = 3334;
const LTC_PORT = 3335;

const bitcoinStream = new Stream(null, BTC_PORT);
const ethereumStream = new Stream(null, ETH_PORT);
const litecoinStream = new Stream(null, LTC_PORT);

bitcoinStream.connect();
setTimeout(() => {
    ethereumStream.connect();
    setTimeout(() => {
        litecoinStream.connect();
        }, 2000);
}, 2000);

window.onresize = () => {
    bitcoinStream.resizePlots();
    ethereumStream.resizePlots();
    litecoinStream.resizePlots();
};
