const { app, BrowserWindow, Menu } = require('electron');

// اضافه کردن این خط برای فعال کردن ری‌لود خودکار
// require('electron-reload')(__dirname, {
//   electron: require(`${__dirname}/node_modules/electron`)
// });


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    transparent: true,
    frame: true, // حذف فریم پیش‌فرض
    webPreferences: {
      nodeIntegration: true, // فعال کردن nodeIntegration برای استفاده از کدهای Node.js در renderer
    }
  });

  // حذف منوی پیش‌فرض
  Menu.setApplicationMenu(null);

  mainWindow.loadFile('index.html');
});