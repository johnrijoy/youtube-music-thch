// import { BrowserWindow, session } from 'electron';

module.exports = win => {
    // const win = new BrowserWindow();
    const path = require('path');
    win.webContents.session.loadExtension(path.join(__dirname, 'extension/WebNowPlaying-BrowserExtension'),{ allowFileAccess: true});
    
}