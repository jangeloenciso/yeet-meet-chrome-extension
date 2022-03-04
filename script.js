function getNum() {
    var num = document.querySelector(
        '#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.MaVIwe > div.Ok4Bg > div > div > div:nth-child(2) > div > div'
    ).textContent;

    return num;
}

function leaveCall() {
    var exit = document.querySelector(
        '#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.NHaLPe.CoOyx > span > button'
    );

    exit.click();
}

function main() {
    setInterval(function () {
        console.log('Yeet Meet initialized!');

        if (getNum() <= 2) {
            console.log('Leaving call.');
            leaveCall();
        }
    }, 10000);
}

main();
