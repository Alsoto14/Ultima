const menuprincipal = document.querySelectorAll('.menu-item');

menuprincipal.forEach(function(item){
   item.addEventListener('mouseover', function(e){
        const actualItem = document.querySelector('.active');
        actualItem.classList.remove('active');
        e.target.classList.add('active');
   });
});






