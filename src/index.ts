/*import { helloWorld } from "./hello-funcs";
const msg = helloWorld();
console.log(msg);*/

import { helloyou , helloHuman , repeatHelloYou } from "./hello-funcs";
import type { Human } from "./types";
try {

    const msg = helloyou("sidi");
console.log(msg)

} catch ( e) {
    console.error("oups! error ", e);  
}


try {
    const johnDoe: Human = {firstname: "John", lastname: "Doe", birthyear: 1980,};
console.log(helloHuman(johnDoe))

} catch (error) {
    console.error("oups! error ", error);
    
}

try {
    console.log(repeatHelloYou(5,"sidi"));

} catch (error) {
    console.error("oups! error ", error);
    
}


