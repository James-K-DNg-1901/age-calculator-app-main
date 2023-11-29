var d_input = document.getElementsByTagName("input");
var warning = document.getElementsByTagName("em");
var title = document.getElementsByTagName("h1");
var btn = document.getElementById("btn1");
var show_to_screen = document.getElementsByTagName("strong");
var number = /^[-+]?[1-9]+$/;
var now = new Date();

btn.addEventListener("click", function complete () {
    for (let i = 0; i < 3; i++) {
        if (d_input[i].value == "") {
            warning[i].style.visibility = "visible";
            title[i].style.color = "hsl(0, 100%, 67%)";
            d_input[i].style.borderColor = "hsl(0, 100%, 67%)";
        } else {
            if (d_input[i].value.match(number)){
                warning[i].style.visibility = "hidden";
                title[i].style.color = "hsl(0, 1%, 44%)";
                d_input[i].style.borderColor = "hsl(0, 1%, 44%)";
                calculate (d_input[2].value, d_input[1].value, d_input[0].value);
            } else {
                warning[i].style.visibility = "visible";
                title[i].style.color = "hsl(0, 100%, 67%)";
                d_input[i].style.borderColor = "hsl(0, 100%, 67%)";
            }
        }
    }
});

function calculate (y, m, d,) {
    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);

    show_to_screen[0].innerText = year - y;
    show_to_screen[1].innerText = month - m;
    show_to_screen[2].innerText = day - d;
}
