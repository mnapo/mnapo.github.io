const guion = document.getElementById("guion");
let texto_guion = true;

function titilarGuion(){
  if (texto_guion){
    guion.style.opacity = 0;
  }else{
    guion.style.opacity = 1;
  }
  texto_guion = !texto_guion;
  setTimeout(titilarGuion, 800);
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(titilarGuion, 800);
}, false);
