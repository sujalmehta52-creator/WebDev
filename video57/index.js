console.log("I am a tutorial on loops");
let a=1;
for (let index = 0; index <100; index++) {
   console.log(a+index); 
    
}
let obj={
   name:"Sujal",
    role:"Software Developer",
    company:"JP Morgan"

}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
    
    
}
for (const c of "Sujal") {
    console.log(c) 
    
}