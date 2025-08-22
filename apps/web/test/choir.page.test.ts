import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";

describe("Choir page", () => {
  it("renders header", async () => {
    const { default: ChoirPage } = await import(
      "../src/routes/choir/+page.svelte"
    );
    const { getByText } = render(ChoirPage);
    expect(getByText("Choir")).toBeTruthy();
  });
});
