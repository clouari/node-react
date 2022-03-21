 const button = document.querySelector('button');

 let modal;
 let backdrop;

 button.addEventListener('click', showModalHandler);

 function showModalHandler() {
     if(modal) {
         return;
     }
 }

 modal = document.createElement('div');
 modal.className - 'modal';

 const modalText = document.createElement('p');
 modalText.textContent = '정말 확실합니까?';

