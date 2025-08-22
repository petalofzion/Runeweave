import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

describe("Codex page", () => {
  it("renders header", async () => {
    const { default: CodexPage } = await import(
      "../src/routes/codex/+page.svelte"
    );
    const { getByText } = render(CodexPage);
    expect(getByText("Codex of Errors")).toBeTruthy();
  });
});
