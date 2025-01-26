// modal logic
window.addEventListener('DOMContentLoaded', () => {
     const modalBtn = document.querySelectorAll(`[modal-trigger-id]`);
     const allModal = document.querySelectorAll(`[modal-id]`);

     allModal.forEach((modal) => {
          const modalContent = modal.querySelector('.modal-content') as HTMLElement;
          const modalWidth = modal.getAttribute('modal-width')?.trim() as string | null;

          modalContent.style.maxWidth = modalWidth || '50rem';

          const modalCloseBtn = document.createElement('button') as HTMLElement;
          modalCloseBtn.className = 'modal-close-btn';

          const modalCloseIcon = document.createElement('iconify-icon') as HTMLElement;
          modalCloseIcon.setAttribute('icon', 'ic:round-close');
          modalCloseBtn.appendChild(modalCloseIcon);

          modalContent.appendChild(modalCloseBtn);

          modalCloseBtn.addEventListener('click', () => {
               modal.classList.remove('show-modal');
          });
     });

     modalBtn.forEach((btn) => {
          btn.addEventListener('click', () => {
               const modalBtnID = btn.getAttribute('modal-trigger-id')?.trim() as string | null;

               allModal.forEach((modal) => {
                    const modalID = modal.getAttribute('modal-id')?.trim() as string | null;

                    if (modalID === modalBtnID) {
                         modal.classList.toggle('show-modal');

                         window.addEventListener('click', (e) => {
                              if (e.target === modal) {
                                   modal.classList.remove('show-modal');
                              }
                         });
                    }
               });
          });
     });
});
