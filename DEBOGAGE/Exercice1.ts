function deb1(): number {
    let j = 200;
    let tab =  []; 
    for(let i = 0; i < 10; i++){
        j -= 10;
        tab[i] = j;
    }
    return j; 
}
deb1();

 // EXERCICE 3

 function deb2(x: number, y: number): void {
    const tmp = y;
    y = x;
    x = tmp; 
    console.log(x, y);
}
let x = 10;
let y = 20;
deb2(x, y);
console.log(x, y);

 // EXERCICE 4

 function deb3(xy: number[]): void {
    let tmp = xy[0];
    xy[0] = xy[1];
    xy[1] = tmp;
    console.log(x, y);
}
let xy = [10, 20];

deb3(xy);

//Exercice 5
let j = 10;
deb4();
console.log(j);

function deb4(): number {
    let j = 25;
    let tab =  []; 
    for(let i = 0; i < 10; i++){
        j = 2 * i;
        console.log(j);
    }
    return j; 
}
deb1();