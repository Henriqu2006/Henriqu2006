function verificarEntrada(){
   donoFesta = 'henrique'
   nomeDonoFesta = document.getElementById('convida').value;
   nomeConvidado= document.getElementById('nome').value;
   convidadosHenrique = ['mari','larissa']

   if(convidadosHenrique.includes(nomeConvidado) && donoFesta.includes(nomeDonoFesta)){
    document.getElementById('permissaoEntrar').innerText = "Você pode entrar!"
   } else{
    document.getElementById('permissaoEntrar').innerText = "Você não pode entrar!"
   }
}

