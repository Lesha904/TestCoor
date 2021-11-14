
let out = document.querySelector(".out");

function f1(e) {
    e.preventDefault(); 
    let form = document.querySelector('.form');
    let username = form.elements['username'].value;
    let symbols = username.split("");
    symbols.forEach(function (item)  { 
        var span = document.createElement('span');
        span.innerHTML = item;                 
        span.setAttribute("draggable", "true") 
        dragstart(span);
        out.appendChild(span);                
      });
}
document.querySelector('.button').onclick = f1;


let coordX;
let coordY;

function dragstart(el){
    el.onmousedown = function(e) {
        el.style.position = 'absolute';
        coordinates(e);
        document.body.appendChild(el);

        function coordinates(e) {
            el.style.left = e.pageX - el.offsetWidth / 2 + 'px';
            el.style.top = e.pageY - el.offsetHeight / 2 + 'px';
        }
        
        document.onmousemove = function(e) {
            coordinates(e);
        }

        el.onmouseup = function() {
            document.onmousemove = null;
            el.onmouseup = null;
        }
    }
}
