import { appWindow } from "@tauri-apps/api/window";

export async function init() {
  await appWindow.show();
}
