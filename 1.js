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
 //document.body.addEventListener('mousedown', function(e){
   //  let divv = document.createElement('div');
//     divv.style.width = '30px'; 
//     divv.style.height = '30px'; 
//     divv.style.position ="absolute";
//     divv.style.borderRadius = '50%'
//     divv.style.top = e.clientY - 15 + 'px';
//     divv.style.left = e.clientX - 15 + 'px';
//     document.body.append(divv); 
//     if(e.which == 1){
//        divv.style.backgroundColor = 'red';
//     }
//     if(e.which == 3){
//         divv.style.backgroundColor = 'blue';
//         }
//     document.body.addEventListener('contextmenu', function(e){
//         e.preventDefault()
//     });


 //});


 document.addEventListener('mousedown', function(e){
     let divv = document.createElement('div');
     divv.style.width = '30px'; 
    divv.style.height = '30px'; 
    divv.style.position ="absolute";
    divv.style.borderRadius = '50%'
    divv.style.top = e.clientY - 15 + 'px';
    divv.style.left = e.clientX - 15 + 'px';
    document.body.append(divv); 
 

        if(e.ctrlKey){
            divv.style.borderRadius = "0px"; 
            divv.style.backgroundColor = 'red';
        }
        if(e.shiftKey){
            divv.style.borderRadius = "0px";
            divv.style.width = "100px"
            divv.style.backgroundColor = 'blue';
        }
        if(e.altKey){
            divv.style.borderRadius = "0px";
            divv.style.width = "100px";
            divv.style.heigh = "100px";
          }


        });
