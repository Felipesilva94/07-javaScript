// criar 3 const [button , input.value >= 8, img ser background da div]

const [input0, input1] = document.querySelectorAll("input");
const btn = document.querySelector('button')

function start(){

  if(input0.value && input1.value.length >= 8){
   btn.removeAttribute("disabled");
   btn.classList.add("ativo");
   
  }else{
    btn.setAttribute("disabled", "disabled");
    btn.classList.remove("ativo");
    }
}
input0.addEventListener("input", start)
input1.addEventListener("input", start)


function aviso(){
  alert("Volte a estudar!!! Ainda não esta ganhando 5k em 6 meses")
}

const body = document.body;

function corDeFundo(event){
    if(event.key === "b" || event.key === "B"){
        body.classList.toggle("corFundo");  
    }
}

addEventListener("keydown", corDeFundo);