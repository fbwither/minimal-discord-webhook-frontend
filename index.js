const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // и загрузить index.html приложения.
  win.loadFile('index.html')
}

app.on('ready', createWindow)