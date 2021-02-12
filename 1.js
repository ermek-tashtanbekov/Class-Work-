/*
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
*/
/////////////////////
document.body.addEventListener('mousedown', function(e){
    let divv = document.createElement('div');
    if(e.which == 1){
        divv.style.width = '30px'; 
          divv.style.height = '30px'; 
          divv.style.position ="absolute";
          divv.style.borderRadius = '50%'
          divv.style.backgroundColor = 'red';
          divv.style.top = e.clientY - 15 + 'px';
          divv.style.left = e.clientX - 15 + 'px';
          document.body.append(divv); 
    }
    if(e.which == 3){
        divv.style.width = '30px'; 
        divv.style.height = '30px'; 
        divv.style.position ="absolute";
        divv.style.borderRadius = '50%'
        divv.style.backgroundColor = 'blue';
        divv.style.top = e.clientY - 15 + 'px';
        divv.style.left = e.clientX - 15 + 'px';
        document.body.append(divv);
        console.log(e) 
    }
    document.body.addEventListener('contextmenu', function(e){
        e.preventDefault()
    })
});
