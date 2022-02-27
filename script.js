function getElementByXpath(path) {
    return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

var classesOrThings = document.getElementsByClassName(
    'css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'
);

var num = document.querySelector(
    '#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.MaVIwe > div.Ok4Bg > div > div > div:nth-child(2) > div > div'
).textContent;

alert(num);
