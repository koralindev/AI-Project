import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:3000");
}

ipcMain.handle(
  "dialog:openFile",
  async (_, options?: Electron.OpenDialogOptions) => {
    const result = await dialog.showOpenDialog({
      properties: ["openFile"],
      ...options,
    });

    return result.canceled ? null : result.filePaths[0];
  },
);

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
