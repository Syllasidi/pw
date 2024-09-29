import { repeatHelloYou } from "../hello-funcs";
import { test, expect } from "bun:test";
test("repeatHelloYou should return repeated greetings or an error based on inputs", () => {
    // Cas normal
    expect(repeatHelloYou(3, "Sidi")).toBe("Hello Sidi\nHello Sidi\nHello Sidi\n");

    // Cas d'erreur
    expect(repeatHelloYou(-1, "Sidi")).toBe("Erreur : Le nombre de répétitions doit être un entier positif.");
    expect(repeatHelloYou(3, "")).toBe("Erreur : Le nom doit être une chaîne de caractères non vide.");
    expect(repeatHelloYou(2.5, "Sidi" as any)).toBe("Erreur : Le nombre de répétitions doit être un entier positif.");
});
