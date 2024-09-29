import type { Human } from "./types";

export function   helloWorld(): string{
    return "Hello, word";
}
export function   helloyou(name : string ): string{
    if (!name || typeof name !== "string") {
        return "Erreur : Le nom doit être une chaîne de caractères non vide.";
    }
    return "Hello, "+name+"!!";
}


export function helloHuman (human: Human) : string {
    if (!human.firstname || typeof human.firstname !== "string") {
        return "Erreur : Le prenom doit être une chaîne de caractères non vide.";
    }
    if (!human.lastname || typeof human.lastname !== "string") {
        return "Erreur : Le nom doit être une chaîne de caractères non vide.";
    }
    if (!Number.isInteger(human.birthyear) || human.birthyear <= 0 || human.birthyear > new Date().getFullYear()) {
        return "Erreur : Le nom doit être une chaîne de caractères non vide.";
    }
    
    const age = new Date().getFullYear() - human.birthyear;
    return  `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;

}

export function repeatHelloYou(n : number, name : string) : string {
    if (!name || typeof name !== "string") {
        return "Erreur : Le nom doit être une chaîne de caractères non vide.";
    }
    if (!Number.isInteger(n) || n <= 0) {
        return "Erreur : Le nombre de répétitions doit être un entier positif.";
    }

return  (`Hello ${name}\n`).repeat(n) ;
}