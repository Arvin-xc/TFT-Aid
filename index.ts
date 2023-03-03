const { app, BrowserWindow } = require("electron");

const createWindow = ({ width, height }) => {
  const win = new BrowserWindow({
    // fullscreen: true,
    transparent: true,
    resizable: false,
    movable: true,
  });

  if (app.isPackaged) {
    win.loadFile("./dist/index.html");
  } else {
    win.loadURL("http://localhost:5173");
  }
};

app.whenReady().then(() => {
  // We cannot require the screen module until the app is ready.
  const { screen } = require("electron");

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  createWindow({ width, height });
});
