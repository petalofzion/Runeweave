import { describe, it, expect } from "vitest";
import { fuse } from "../src/fusion";

describe("fuse", () => {
  it("fuses lenses deterministically", () => {
    expect(fuse("Rhetoric", "Persona")).toMatchInlineSnapshot(`
{
  "descriptor": "Rhetoric + Persona",
  "lml": {
    "invocation": "Combine Rhetoric with Persona.",
  },
}
`);
  });
});
