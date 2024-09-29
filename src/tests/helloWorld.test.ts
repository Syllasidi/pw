import { test, expect } from "bun:test";
import { helloWorld } from "../hello-funcs";

test("helloWorld should return 'Hello, word'", () => {
    expect(helloWorld()).toBe("Hello, word");
});