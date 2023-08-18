
const getcolor= ()=>{
    // hexcode
const randomnumber=Math.floor(Math.random()*16777215); 
const hexcode = "#"+randomnumber.toString(16);
document.body.style.backgroundColor=hexcode;
document.getElementById("color-code").innerHTML= hexcode;
}

//FLOOR ALWAYS HELP TO GET NEAR VALUES FROM A DECIMAL VALUE AND 16777215 - IS FOR HEXA DECIMAL CODE TO GENERATE RANDOM COLOR 
 
document.getElementById("btn").addEventListener("click",getcolor)

getcolor();