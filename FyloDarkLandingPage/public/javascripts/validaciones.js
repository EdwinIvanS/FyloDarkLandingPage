  let formulario = document.querySelector('#email');
  let span = document.querySelector('span');
  

    formulario.addEventListener('blur', ()=>{
    span.innerHTML += 'Ingrese un Email correcto';
    span.style.color= 'red';

  })
