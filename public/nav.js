(function () {
    var KEY = 'kw-nav';
    var EXIT_MS = 160;
    var CONTENT_DELAY_MS = 30;
    var CONTENT_IN_MS = 300;
    var SCRAMBLE_MS = 580;
    var SCRAMBLE_FRAMES = 22;
    var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&<>?|{}[]+-=_~';

    // ── helpers ────────────────────────────────────────────────────────────────

    function rchar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

    function onReady(fn) {
        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', fn)
            : fn();
    }

    // Wrap all non-header children of <main> in #page-body so we can animate
    // content independently from the header.
    function setup() {
        var m = document.querySelector('main');
        var h = document.querySelector('header');
        if (!m || !h || document.getElementById('page-body')) return;

        var wrap = document.createElement('div');
        wrap.id = 'page-body';
        Array.from(m.childNodes)
            .filter(function (n) { return n !== h; })
            .forEach(function (n) { wrap.appendChild(n); });
        m.appendChild(wrap);
    }

    // ── scramble ───────────────────────────────────────────────────────────────

    // Animate el.textContent: every char cycles through random symbols, then
    // resolves left-to-right into finalText (or back into itself if omitted).
    function scramble(el, duration, finalText) {
        var target = finalText !== undefined ? finalText : el.textContent;
        var frame  = 0;
        var keep   = ' /-·.'; // characters that pass through unchanged

        var timer = setInterval(function () {
            var out = '';
            var progress = frame / SCRAMBLE_FRAMES; // 0 → 1

            for (var i = 0; i < target.length; i++) {
                var ch = target[i];
                if (keep.indexOf(ch) >= 0) {
                    out += ch;
                } else if (progress >= (i + 1) / target.length) {
                    out += ch; // this position has resolved
                } else {
                    out += rchar();
                }
            }

            el.textContent = out;
            frame++;

            if (frame > SCRAMBLE_FRAMES) {
                clearInterval(timer);
                el.textContent = target;
            }
        }, Math.floor(duration / SCRAMBLE_FRAMES));

        return timer;
    }

    // Scramble all meaningful text elements in the <header>.
    function scrambleHeader(duration, toRandom) {
        var h = document.querySelector('header');
        if (!h) return;
        h.querySelectorAll('.title, a').forEach(function (el) {
            if (toRandom) {
                // Exit: scramble toward noise, don't resolve
                var orig = el.textContent;
                var keep = ' /-·.';
                var f = 0, frames = 10;
                var t = setInterval(function () {
                    var out = '';
                    for (var i = 0; i < orig.length; i++) {
                        out += keep.indexOf(orig[i]) >= 0 ? orig[i] : rchar();
                    }
                    el.textContent = out;
                    if (++f >= frames) clearInterval(t);
                }, Math.floor(EXIT_MS / 10));
            } else {
                scramble(el, duration);
            }
        });
    }

    // ── enter animation ────────────────────────────────────────────────────────

    function enter() {
        if (!sessionStorage.getItem(KEY)) return;
        sessionStorage.removeItem(KEY);

        var m = document.querySelector('main');
        var b = document.getElementById('page-body');
        if (!b) return;

        // Don't fight home page's zoom-out animation
        if (m && m.classList.contains('zoom-out')) return;

        // Hide content, leave header visible for scramble
        b.style.opacity = '0';
        b.style.transform = 'translateY(12px)';

        // Scramble header text into its real value
        scrambleHeader(SCRAMBLE_MS, false);

        // Fade content in after a short delay
        setTimeout(function () {
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    b.style.transition =
                        'opacity ' + CONTENT_IN_MS + 'ms ease, transform ' + CONTENT_IN_MS + 'ms ease';
                    b.style.opacity   = '';
                    b.style.transform = '';
                    setTimeout(function () { b.style.transition = ''; }, CONTENT_IN_MS);
                });
            });
        }, CONTENT_DELAY_MS);
    }

    // ── exit animation ─────────────────────────────────────────────────────────

    function navigate(url) {
        var b = document.getElementById('page-body');
        if (!b) return;

        sessionStorage.setItem(KEY, '1');

        // Scramble header to noise while content fades out
        scrambleHeader(EXIT_MS, true);

        b.style.transition =
            'opacity ' + EXIT_MS + 'ms ease, transform ' + EXIT_MS + 'ms ease';
        b.style.opacity   = '0';
        b.style.transform = 'translateY(-12px)';

        setTimeout(function () { window.location.href = url; }, EXIT_MS + 20);
    }

    // ── event wiring ───────────────────────────────────────────────────────────

    // Intercept only <header> links that point to internal paths
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href]');
        if (!link || !link.closest('header')) return;

        var href = link.getAttribute('href');
        if (!href) return;
        if (/^(https?:)?\/\//.test(href)) return;
        if (/^#/.test(href)) return;
        if (/\.\w+$/.test(href)) return;

        e.preventDefault();
        navigate(href);
    }, true);

    // bfcache restore: ensure styles are clean
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            var b = document.getElementById('page-body');
            if (b) b.style.cssText = '';
        }
    });

    onReady(function () {
        setup();
        enter();
    });
})();
