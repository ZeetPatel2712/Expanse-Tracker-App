window.addEventListener('DOMContentLoaded', () => {
     const allInputs = document.querySelectorAll('input');

     // add autocomplete="off" to all inputs
     allInputs.forEach((input) => {
          const inputHasAutoComplete = input.getAttribute('autocomplete')?.trim() as string | null;

          if (!inputHasAutoComplete) {
               input.setAttribute('autocomplete', 'off');
          }
     });

     const allSearchInputWp = document.querySelectorAll('.input-search-wp');

     allSearchInputWp.forEach((inputWp) => {
          const searchIcon = document.createElement('iconify-icon') as HTMLElement;
          searchIcon.setAttribute('icon', 'uil:search');
          searchIcon.className = 'input-search-icon';

          inputWp.appendChild(searchIcon);
     });
});
