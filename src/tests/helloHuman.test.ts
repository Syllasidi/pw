import { helloHuman } from "../hello-funcs";
import type { Human } from "../types";
import { test, expect } from "bun:test";



test("helloHuman should return a greeting or an error based on human attributes", () => {
    const currentYear = new Date().getFullYear();

    // Cas normal
    const human: Human = { firstname: "John", lastname: "Doe", birthyear: 1990 };
    expect(helloHuman(human)).toBe(`Hello, John Doe! You are ${currentYear - 1990} years old.`);

    // Cas d'erreur
    expect(helloHuman({ firstname: "", lastname: "Doe", birthyear: 1990 })).toBe("Erreur : Le prenom doit être une chaîne de caractères non vide.");
    expect(helloHuman({ firstname: "John", lastname: "", birthyear: 1990 })).toBe("Erreur : Le nom doit être une chaîne de caractères non vide.");
    expect(helloHuman({ firstname: "John", lastname: "Doe", birthyear: 2025 })).toBe("Erreur : Le nom doit être une chaîne de caractères non vide."); // Vérifie l'année future
});
