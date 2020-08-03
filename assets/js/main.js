
window.addEventListener("load", function() {
    let btnAbracadabra = document.getElementById('abracadabra');
    btnAbracadabra.addEventListener('click', () => {
        let name = prompt('Ingresa tu nombre:');
        let titular = document.getElementById("titular");
        titular.firstElementChild.innerHTML = name;
    });
    let btnGetInTouch = document.getElementById("btnGetInTouch");
    btnGetInTouch.addEventListener('dblclick', () => {
        let parrafo = document.getElementsByClassName("parrafo-color"); //devuelve array
        parrafo[0].style.color = colorAlAzar();
    });
    function colorAlAzar(){
        let colores = ["red", "green", "white", "blue", "black"];
        let colorAzar = colores[Math.floor(Math.random() * 4)];
        return colorAzar;
    }
    const boxesWork = document.querySelectorAll("section.box.style1");
    boxesWork.forEach(box => {
        box.addEventListener("click", () => {
            let boxTitle = box.querySelector("h3").innerHTML;
            alert(`Clickeaste sobre ${boxTitle}`);
        });
    });
    let btnWork = document.getElementById("btnWork");
    btnWork.addEventListener('mouseover', () => {
        let parColor = document.getElementById("paraWork"); //devuelve array
        parColor.style.color = colorAlAzar();
    });
    btnWork.addEventListener('mouseleave', ()=>{
        let parColor = document.getElementById("paraWork");
        parColor.style.color = '#888'
    })
    let imgLechuza = document.getElementById("lechuza");
    imgLechuza.addEventListener("click", ()=>{
        alert("Preparate para el futuro");
        setTimeout(function(){ alert("Preparate que ya llega tu momento chiquito/a");}, 5000);
    });
    /*window.addEventListener('keypress', ()=>{
        alert("Ey tocaste una tecla!");
    });*/
    /*window.addEventListener('keypress', (event)=>{
        if(event.code == "Space"){
            alert("Ey tocaste la tecla espaciadora!");
        }
    });*/
    let inputEmail = document.getElementById("email");
    inputEmail.addEventListener('keypress', (event)=>{
        if(event.code == "Space"){
           event.preventDefault()

        }
    });
    let estadoSecreto = 0;
    window.addEventListener("keypress", (e) => {
        if (e.key == "s") {
            estadoSecreto = 1;
        }
        if (e.key == "e" && estadoSecreto == 1) {
            estadoSecreto = 2;
        }
        if (e.key == "c" && estadoSecreto == 2) {
            estadoSecreto = 3;
        }
        if (e.key == "r" && estadoSecreto == 3) {
            estadoSecreto = 4;
        }
        if (e.key == "e" && estadoSecreto == 4) {
            estadoSecreto = 5;
        }
        if (e.key == "t" && estadoSecreto == 5) {
            estadoSecreto = 6;
        }
        if (e.key == "o" && estadoSecreto == 6) {
            estadoSecreto = 0;
            alert("SECRETO MAGICO");
        }
    });






});
