const { app, BrowserWindow, nativeImage } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

function createWindow() {
  const icon = nativeImage.createFromPath(
    `${app.getAppPath()}/electron/icon .png`,
  );

  if (app.dock) {
    app.dock.setIcon(icon);
  }
  
  mainWindow = new BrowserWindow({
    show: false,
    icon: icon,
    frame: false,
    fullscreen: true,
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.on('ready', createWindow);
