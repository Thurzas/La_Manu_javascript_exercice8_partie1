function Hello(){
  var age=parseFloat(document.getElementById("age").value);

  if(!Object.is(age,NaN)&& age>=0)
    {
      if(age<18)
        alert("Vous êtes mineur !");
      else {
          alert("Vous êtes majeur !");
      }
    }
    else {
      alert("Erreur, nombre négatif/n'est pas un nombre");
    }

}
