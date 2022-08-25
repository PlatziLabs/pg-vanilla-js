import { runCode } from './challenge';

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8];
const rta = runCode(arrayA, arrayB);

document.getElementById("app").innerHTML = `
<h1>Hello World</h1>
<p>Array A: [1, 2, 3, 4]</p>
<p>Array B: [5, 6, 7, 8]</p>
<p>Rta: ${rta}</p>`;
