function size (){
    let width = window.screen.width;
    let height = window.screen.height;
    let message = document.getElementById("message");

    message.innerHTML=`Screen width is ${width} and Screen height is ${height}`;
}