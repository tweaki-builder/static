(function() {

        document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    });
});

        const expiryDate = '20261020';
        const expiredUrl = 'https://tweaki.exportersmm.com/expired';

        const now = new Date();
        const today = now.getFullYear().toString()
                    + String(now.getMonth() + 1).padStart(2, '0')
                    + String(now.getDate()).padStart(2, '0');

        if (today > expiryDate) {
        window.location.href = expiredUrl;
}})();