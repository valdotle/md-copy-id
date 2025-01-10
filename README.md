Browser extension allowing to set a (customizable) shortcut to copy the ID of the hovered element on [Mangadex](https://mangadex.org/). 

To install on:
* Chromium: go to the extension manager and enable developer mode, then select "load unpacked" and load the Chrome folder
* Firefox: go to the extension manager, select "install add-on from file" and upload the .xpi file from the Firefox folder
* other browser: I haven't bothered with those, feel free to create a compatible version and make a PR for it though 

**The default shortcut is Alt+M.** To change it, navigate to extensions > (keyboard) shortcuts and change the shortcut for the "Copy hovered resource ID" command. Keep in mind that overwriting your browser's default shortcut may result in unexpected behavior (or the shortcut not working at all).

If it doesn't work after installation, try to refresh the (Mangadex) tab to make sure the content script gets injected into the page. In addition, the tab you want to copy from has to be focused (most recent click in the window), in order for the extension to be able to write to the clipboard from what I have found (correct me if I'm wrong please).
