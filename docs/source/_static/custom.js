document.addEventListener('DOMContentLoaded', function () {
       var script = document.createElement('script');
       script.src = 'https://widget.kapa.ai/kapa-widget.bundle.js';
       script.setAttribute('data-website-id', '4223d017-a3d2-4b92-b191-ea4d425a23c3');
       script.setAttribute('data-project-name', 'SkyPilot');
       script.setAttribute('data-project-color', '#4C4C4D');
       script.setAttribute('data-project-logo', 'https://avatars.githubusercontent.com/u/109387420?s=100&v=4');
       script.setAttribute('data-modal-disclaimer', 'Results are automatically generated and may be inaccurate or contain inappropriate information. Do not include any sensitive information in your query.\n**To get further assistance, you can chat directly with the development team** by joining the [SkyPilot Slack](https://slack.skypilot.co/).');
       script.setAttribute('data-modal-title', 'SkyPilot Docs AI - Ask a Question.');
       script.setAttribute('data-button-position-bottom', '100px');
       script.setAttribute('data-user-analytics-fingerprint-enabled', 'true');
       script.async = true;
       document.head.appendChild(script);
});

(function(h,o,t,j,a,r){
       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
       h._hjSettings={hjid:3768396,hjsv:6};
       a=o.getElementsByTagName('head')[0];
       r=o.createElement('script');r.async=1;
       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
       a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
!function(t){var k="ko",i=(window.globalKoalaKey=window.globalKoalaKey||k);if(window[i])return;var ko=(window[i]=[]);["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_d9bb6290ccb8a01b2d181fc0c8cf0dbb9836/sdk.js"),(document.body || document.head).appendChild(n)}();

// New items: add 'new-item' class for for new items.
document.addEventListener('DOMContentLoaded', () => {
    // New items:
    const newItems = [
        { selector: '.toctree-l2 > a', text: 'HTTPS Encryption' },
        { selector: '.toctree-l1 > a', text: 'Examples' },
        { selector: '.toctree-l1 > a', text: 'Workspaces: Isolating Teams' },
        { selector: '.toctree-l1 > a', text: 'External Logging Storage' },
        { selector: '.toctree-l1 > a', text: 'Authentication and RBAC' },
        { selector: '.toctree-l1 > a', text: 'Volumes' },
        { selector: '.toctree-l2 > a', text: 'Upgrading API Server' },
    ];
    newItems.forEach(({ selector, text }) => {
        document.querySelectorAll(selector).forEach((el) => {
            if (el.textContent.includes(text)) {
                el.classList.add('new-item');
            }
        });
    });
});

// Remove Previous button from every first page of each tab.
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        var style = document.createElement('style');
        style.innerHTML = '.prev-next-area a.left-prev { display: none; }';
        document.head.appendChild(style);
    }
});
