const url = new RegExp(/^.+:\/\/.*mangadex\.\w+.*$/i);
var enabled = false;
var tab;

chrome.commands.onCommand.addListener((command) => {
    if (!enabled) return;

    switch (command) {
        case "copy-id":
            chrome.tabs.sendMessage(tab.id, {}).catch((err) => {});
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId).then((result) => {
        tab = result;

        if (!url.test(tab.url)) {
            chrome.action.disable(tab.id);
            enabled = false;
        } else {
            chrome.action.enable(tab.id);
            enabled = true;
        }
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
});
