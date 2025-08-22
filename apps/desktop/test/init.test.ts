import { describe, it, expect, vi } from "vitest";

vi.mock("@tauri-apps/api/window", () => ({
  appWindow: { show: vi.fn().mockResolvedValue(undefined) },
}));

import { init } from "../src";

describe("desktop init", () => {
  it("opens the Tauri window", async () => {
    const { appWindow } = await import("@tauri-apps/api/window");
    await init();
    expect(appWindow.show).toHaveBeenCalled();
  });
});
