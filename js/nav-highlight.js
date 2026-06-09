(function () {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if (!page) page = 'index.html';

    // Campus detail pages should highlight "Campuses" in nav
    if (page.indexOf('campus_') === 0) page = 'campuses.html';

    // Highlight matching links in desktop and mobile nav
    document.querySelectorAll('header nav a, #mobileMenu a').forEach(function (link) {
        var href = (link.getAttribute('href') || '').split('/').pop();
        if (href === page || (page === 'index.html' && (href === 'index.html' || href === ''))) {
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });

    // Highlight parent dropdown button when a sub-page is active
    var underAbout = ['profile.html', 'broad_management.html', 'activities.html', 'gallery.html'];
    var underRegistration = ['prospectus.html'];
    var dropdownBtns = document.querySelectorAll('header nav .relative.group > button');

    if (underAbout.indexOf(page) !== -1 && dropdownBtns[0]) {
        dropdownBtns[0].classList.add('text-blue-600', 'font-semibold');
    }
    if (underRegistration.indexOf(page) !== -1 && dropdownBtns[1]) {
        dropdownBtns[1].classList.add('text-blue-600', 'font-semibold');
    }
})();
