import { helloyou } from "../hello-funcs";
import { test, expect } from "bun:test";
test("helloyou should return a greeting or an error based on the name", () => {
    // Cas normal
    expect(helloyou("Sidi")).toBe("Hello, Sidi!!");

    // Cas d'erreur
    expect(helloyou("")).toBe("Erreur : Le nom doit être une chaîne de caractères non vide.");
    expect(helloyou(123 as any)).toBe("Erreur : Le nom doit être une chaîne de caractères non vide.");
});
