'use strict';

// global style
import '../styles/global.scss';

// iconify style
import 'iconify-icon';

// typescript code

window.addEventListener('DOMContentLoaded', () => {
     // button loader logic
     const allBtns = document.querySelectorAll(`[loading="true"]`);

     allBtns.forEach((btn) => {
          const iconifyIcon = document.createElement('iconify-icon') as HTMLElement;
          const userLoadingIcon = btn.getAttribute('loading-icon') as string | null;
          iconifyIcon.className = 'loader-icon';
          iconifyIcon.setAttribute('icon', `${userLoadingIcon ? userLoadingIcon : 'svg-spinners:ring-resize'}`);
          btn.appendChild(iconifyIcon);
     });
});
