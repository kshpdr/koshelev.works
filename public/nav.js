(function () {
    var KEY = 'kw-nav';
    var EXIT_MS = 160;
    var ENTER_MS = 260;

    function getMain() {
        return document.querySelector('main');
    }

    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    // Enter animation: fade in from slightly below
    function enter() {
        var m = getMain();
        if (!m) return;

        if (!sessionStorage.getItem(KEY)) return;
        sessionStorage.removeItem(KEY);

        // Don't fight with home page's zoom-out animation
        if (m.classList.contains('zoom-out')) return;

        m.style.opacity = '0';
        m.style.transform = 'translateY(10px)';

        // Double rAF: first frame applies initial style, second triggers transition
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                m.style.transition =
                    'opacity ' + ENTER_MS + 'ms ease, transform ' + ENTER_MS + 'ms ease';
                m.style.opacity = '';
                m.style.transform = '';
                setTimeout(function () {
                    m.style.transition = '';
                }, ENTER_MS);
            });
        });
    }

    // Exit animation then navigate
    function navigate(url) {
        var m = getMain();
        if (!m) return;

        sessionStorage.setItem(KEY, '1');
        m.style.transition =
            'opacity ' + EXIT_MS + 'ms ease, transform ' + EXIT_MS + 'ms ease';
        m.style.opacity = '0';
        m.style.transform = 'translateY(-10px)';

        setTimeout(function () {
            window.location.href = url;
        }, EXIT_MS + 20);
    }

    // Intercept clicks on links inside <header> only
    document.addEventListener(
        'click',
        function (e) {
            var link = e.target.closest('a[href]');
            if (!link || !link.closest('header')) return;

            var href = link.getAttribute('href');
            if (!href) return;
            if (/^(https?:)?\/\//.test(href) || /^#/.test(href) || /\.\w+$/.test(href)) return;

            e.preventDefault();
            navigate(href);
        },
        true
    );

    // Restore clean state on bfcache restore (browser back/forward button)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            var m = getMain();
            if (m) {
                m.style.cssText = '';
            }
        }
    });

    onReady(enter);
})();
