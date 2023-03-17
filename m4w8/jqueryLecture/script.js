// const element = document.createElement("li");
// const textNode = document.createTextNode("Water");
// element.appendChild(textNode)
// document.querySelector("ul").appendChild(element);
$(document).ready(()=>{
    // $("ul").append( "<li>Water</li>" );
    //reference class
    // $(".class")
    // reference ID
    // $("#id")
    // create an element
    // $("<li>")
    // Searching element
    // $("li")
    // Searching for a specific child element
    // $("ul li:nth-child(2)")
    // $("ul .bread")
    $("#div1").on("click",(event)=>{
        event.stopPropagation()
        console.log("Outter Div, the blue one")
    })
    $("#div1").click((event)=>{
        event.stopPropagation()
        console.log("Outter Div, the blue one")
    })
    $("#div2").on("click",(event)=>{
        event.stopPropagation()
        console.log("Middle Div, the green one")
    })
    $("#div3").on("click",(event)=>{
        event.stopPropagation()
        console.log("Inner Div, the red one")
    })
})