const url = new RegExp(/^.+:\/\/.*mangadex\.\w+.*$/i);
var enabled = false;
var tab;

browser.commands.onCommand.addListener((command) => {
    if (!enabled) return;

    switch (command) {
        case "copy-id":
            browser.tabs.sendMessage(tab.id, {}).catch((err) => {});
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});

browser.tabs.onActivated.addListener((activeInfo) => {
    browser.tabs.get(activeInfo.tabId).then((result) => {
        tab = result;

        changeState(tab.url);
    });
});

browser.tabs.onUpdated.addListener(
    (tabId, changeInfo, updatedTab) => {
        if (tab == null) tab = updatedTab;
        else if (tabId != tab.id) return;

        changeState(changeInfo.url);
    },
    { properties: ["url"] }
);

browser.runtime.onInstalled.addListener(() => {
    browser.action.disable();
});

const changeState = (check) => {
    if (!url.test(check)) {
        browser.action.disable(tab.id);
        enabled = false;
    } else {
        browser.action.enable(tab.id);
        enabled = true;
    }
};
