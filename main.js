const { app, BrowserWindow, Tray, Menu } = require('electron');
require('dotenv').config();
const expressApp = require('./server'); // Import the Express app

let mainWindow;
let tray = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Display an initial loading message
  mainWindow.loadURL(`data:text/html,
    <html>
      <body>
        <h1>Checking Server Status...</h1>
      </body>
    </html>`);

  // Start the Express server
  const serverIP = process.env.SERVER_IP || '0.0.0.0';
  const port = process.env.PORT || 3000;
  expressApp.listen(port, serverIP, () => {
    console.log(`Application running at http://${serverIP}:${port}/`);
    mainWindow.loadURL(`data:text/html,
      <html>
        <body>
          <h1>Server Running</h1>
          <p>Your devices are available to connect.</p>
        </body>
      </html>`);
  }).on('error', (err) => {
    console.error('Server failed to start:', err);
    mainWindow.loadURL(`data:text/html,
      <html>
        <body>
          <h1>Server Error</h1>
          <p>Failed to start server. Please check your settings and try again.</p>
        </body>
      </html>`);
  });

  // System Tray Setup
  tray = new Tray('./icon-512-512.png'); // Replace with the path to your tray icon
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: () => mainWindow.show() },
    { label: 'Exit', click: () => {
      app.isQuiting = true;
      app.quit();
    }}
  ]);
  tray.setToolTip('Remote Control Server');
  tray.setContextMenu(contextMenu);

  // Hide the window instead of closing
  mainWindow.on('close', (event) => {
    app.isQuiting = true;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Prevent multiple instances of the app
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
    }
  });
}
