
document.body.addEventListener('click', function(e){
    let divv = document.createElement('div');
    divv.style.width = '30px'; 
          divv.style.height = '30px'; 
          divv.style.position ="absolute";
          divv.style.borderRadius = '50%'
          divv.style.backgroundColor = 'red';
          divv.style.top = e.clientY - 15 + 'px';
          divv.style.left = e.clientX - 15 + 'px';
          document.body.append(divv);


});
