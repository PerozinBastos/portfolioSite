// menu hamburguer //

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');     /* css responsivo */

menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
};

window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
};



// emailjs//

function validacao () {
    let name= document.querySelector('.name')
    let email= document.querySelector('.email')
    let message= document.querySelector('.message')
    let sendBtn= document.querySelector('.send-btn')

sendBtn.addEventListener('click', (enviar) => {        // auto inicia//
    enviar.preventDefault();
    if (name.value == "" || email.value == "" || message.value == "" ){
        emptyerror();  // funcao retornará mensagem de erro//
    } else  { 
        sendmail(name.value, email.value, message.value);  // funcao que enviará o valor do campo selecionado pelo querySelector //
        sucess(); // funcao que retornará mensagem de sucesso // 
    }
})}

validacao();


function emptyerror(){
    swal({
        title:"Erro",
        text: "Preencha os campos",
        icon: "error",                                              // manter esse nome de icone padrao //
})} 


function sendmail (name,email,message){                          // const para enviar //
    emailjs.send("gmailMessage","template_g8px6je", {          // funcao disponivel no emailJS test template parameters //
        name: name,
        email: email,
        message: message,
})}


function sucess(){
    swal({
        title:"Enviado",
        text:"Irei te responder em até 24h",
        icon:"success",                                       // manter esse nome de icone padrao //
})}


// scroll //

let scrollTop = document.querySelector(".scroll-top");       // esta com o bottom -100%//

window.addEventListener('scroll', () => {

    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);    // vai mudar a classe de .scroll-top para scroll-active do css ( não colocar . aqui)
     // scrollY recebe um valor //
})

