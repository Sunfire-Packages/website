import Prism from './prism';

Prism.manual = true;

highlightCode();
setupNavCurrentLinkHandling();

function highlightCode() {
    [...document.querySelectorAll('pre code')].forEach(el => {
        Prism.highlightElement(el);
    });
}

function setupNavCurrentLinkHandling() {
    // Can return two, one for mobile nav and one for desktop nav
    [...document.querySelectorAll('.docs_sidebar ul')].forEach(nav => {
        const current = nav.querySelector('li a[href="' + window.location.pathname + '"]');

        if (current) {
            current.parentNode.parentNode.parentNode.classList.add('sub--on', 'active');
            current.parentNode.classList.add('active');
        }
    });

    [...document.querySelectorAll('.docs_sidebar h2')].forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            const active = el.parentNode.classList.contains('sub--on');

            [...document.querySelectorAll('.docs_sidebar ul li')].forEach(
                el => el.classList.remove('sub--on')
            );

            if (!active) {
                el.parentNode.classList.add('sub--on');
            }
        });
    });
}
