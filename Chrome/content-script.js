const url = new RegExp(/^\/\w+\/\S+(\/.+)?$/);

var hoveredElement;

window.addEventListener("mouseover", (event) => {
    hoveredElement = event.target;
});

chrome.runtime.onMessage.addListener(() => {
    var element = hoveredElement;

    if (!element.hasAttribute("href")) {
        element = element.closest("a[href]");
    }

    if (element == null) {
        console.log("no hovered element found");
        return;
    }

    var href = element.getAttribute("href");

    if (!url.test(href)) {
        console.log("hovered element doesn't have a mangadex id");
        return;
    }

    navigator.clipboard.writeText(href.split("/")[2]).catch((err) => {
        console.warn("window must be focused to copy");
    });
});
