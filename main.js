const menuprincipal = document.querySelectorAll('.menu-item');

menuprincipal.forEach(function(item){
   item.addEventListener('mouseover', function(e){
        const actualItem = document.querySelector('.active');
        actualItem.classList.remove('active');
        e.target.classList.add('active');
   });
});

const descripción = document.querySelectorAll('.menu-redes');

descripción.forEach(function(item){
   item.addEventListener('mouseover', function(e){
        const actualItem = document.querySelector('.Descripción');
        actualItem.classList.remove('Descripción');
        e.target.classList.add('Descripción');
   });
});






