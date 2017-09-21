! function(e, t) {
    "function" == typeof define && define.amd ? define(function() {
        return e.Reveal = t(), e.Reveal
    }) : "object" == typeof exports ? module.exports = t() : e.Reveal = t()
}(this, function() {
    "use strict";

    function e(e) {
        if (zr !== !0)
            if (zr = !0, t(), $r.transforms2d || $r.transforms3d) {
                Ur.wrapper = document.querySelector(".reveal"), Ur.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", z, !1);
                var n = Ar.getQueryHash();
                "undefined" != typeof n.dependencies && delete n.dependencies, g(Br, e), g(Br, n), N(), r()
            } else {
                document.body.setAttribute("class", "no-transforms");
                for (var a = m(document.getElementsByTagName("img")), i = m(document.getElementsByTagName("iframe")), o = a.concat(i), s = 0, l = o.length; l > s; s++) {
                    var c = o[s];
                    c.getAttribute("data-src") && (c.setAttribute("src", c.getAttribute("data-src")), c.removeAttribute("data-src"))
                }
            }
    }

    function t() {
        Nr = /(iphone|ipod|ipad|android)/gi.test(Rr), Mr = /chrome/i.test(Rr) && !/edge/i.test(Rr);
        var e = document.createElement("div");
        $r.transforms3d = "WebkitPerspective" in e.style || "MozPerspective" in e.style || "msPerspective" in e.style || "OPerspective" in e.style || "perspective" in e.style, $r.transforms2d = "WebkitTransform" in e.style || "MozTransform" in e.style || "msTransform" in e.style || "OTransform" in e.style || "transform" in e.style, $r.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, $r.requestAnimationFrame = "function" == typeof $r.requestAnimationFrameMethod, $r.canvas = !!document.createElement("canvas").getContext, $r.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(Rr), $r.zoom = "zoom" in e.style && !Nr && (Mr || /Version\/[\d\.]+.*Safari/.test(Rr))
    }

    function r() {
        function e() {
            a.length && head.js.apply(null, a), n()
        }

        function t(t) {
            head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function() {
                "function" == typeof t.callback && t.callback.apply(this), 0 === --i && e()
            })
        }
        for (var r = [], a = [], i = 0, o = 0, s = Br.dependencies.length; s > o; o++) {
            var l = Br.dependencies[o];
            (!l.condition || l.condition()) && (l.async ? a.push(l.src) : r.push(l.src), t(l))
        }
        r.length ? (i = r.length, head.js.apply(null, r)) : e()
    }

    function n() {
        a(), p(), l(), it(), f(), Nt(), ht(!0), setTimeout(function() {
            Ur.slides.classList.remove("no-transition"), Wr = !0, Ur.wrapper.classList.add("ready"), T("ready", {
                indexh: Lr,
                indexv: Er,
                currentSlide: xr
            })
        }, 1), q() && (h(), "complete" === document.readyState ? s() : window.addEventListener("load", s))
    }

    function a() {
        Ur.slides.classList.add("no-transition"), Ur.background = c(Ur.wrapper, "div", "backgrounds", null), Ur.progress = c(Ur.wrapper, "div", "progress", "<span></span>"), Ur.progressbar = Ur.progress.querySelector("span"), c(Ur.wrapper, "aside", "controls", '<button class="navigate-left" aria-label="previous slide"></button><button class="navigate-right" aria-label="next slide"></button><button class="navigate-up" aria-label="above slide"></button><button class="navigate-down" aria-label="below slide"></button>'), Ur.slideNumber = c(Ur.wrapper, "div", "slide-number", ""), Ur.speakerNotes = c(Ur.wrapper, "div", "speaker-notes", null), Ur.speakerNotes.setAttribute("data-prevent-swipe", ""), Ur.speakerNotes.setAttribute("tabindex", "0"), c(Ur.wrapper, "div", "pause-overlay", null), Ur.controls = document.querySelector(".reveal .controls"), Ur.wrapper.setAttribute("role", "application"), Ur.controlsLeft = m(document.querySelectorAll(".navigate-left")), Ur.controlsRight = m(document.querySelectorAll(".navigate-right")), Ur.controlsUp = m(document.querySelectorAll(".navigate-up")), Ur.controlsDown = m(document.querySelectorAll(".navigate-down")), Ur.controlsPrev = m(document.querySelectorAll(".navigate-prev")), Ur.controlsNext = m(document.querySelectorAll(".navigate-next")), Ur.statusDiv = i()
    }

    function i() {
        var e = document.getElementById("aria-status-div");
        return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.setAttribute("id", "aria-status-div"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Ur.wrapper.appendChild(e)), e
    }

    function o(e) {
        var t = "";
        if (3 === e.nodeType) t += e.textContent;
        else if (1 === e.nodeType) {
            var r = e.getAttribute("aria-hidden"),
                n = "none" === window.getComputedStyle(e).display;
            "true" === r || n || m(e.childNodes).forEach(function(e) {
                t += o(e)
            })
        }
        return t
    }

    function s() {
        var e = O(window.innerWidth, window.innerHeight),
            t = Math.floor(e.width * (1 + Br.margin)),
            r = Math.floor(e.height * (1 + Br.margin)),
            n = e.width,
            a = e.height;
        A("@page{size:" + t + "px " + r + "px; margin: 0;}"), A(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + n + "px; max-height:" + a + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = t + "px", document.body.style.height = r + "px", m(Ur.wrapper.querySelectorAll(Pr)).forEach(function(e, t) {
            e.setAttribute("data-index-h", t), e.classList.contains("stack") && m(e.querySelectorAll("section")).forEach(function(e, r) {
                e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r)
            })
        }), m(Ur.wrapper.querySelectorAll(Cr)).forEach(function(e) {
            if (e.classList.contains("stack") === !1) {
                var i = (t - n) / 2,
                    o = (r - a) / 2,
                    s = e.scrollHeight,
                    l = Math.max(Math.ceil(s / r), 1);
                l = Math.min(l, Br.pdfMaxPagesPerSlide), (1 === l && Br.center || e.classList.contains("center")) && (o = Math.max((r - s) / 2, 0));
                var c = document.createElement("div");
                if (c.className = "pdf-page", c.style.height = r * l + "px", e.parentNode.insertBefore(c, e), c.appendChild(e), e.style.left = i + "px", e.style.top = o + "px", e.style.width = n + "px", e.slideBackgroundElement && c.insertBefore(e.slideBackgroundElement, e), Br.showNotes) {
                    var d = Ht(e);
                    if (d) {
                        var u = 8,
                            p = "string" == typeof Br.showNotes ? Br.showNotes : "inline",
                            f = document.createElement("div");
                        f.classList.add("speaker-notes"), f.classList.add("speaker-notes-pdf"), f.setAttribute("data-layout", p), f.innerHTML = d, "separate-page" === p ? c.parentNode.insertBefore(f, c.nextSibling) : (f.style.left = u + "px", f.style.bottom = u + "px", f.style.width = t - 2 * u + "px", c.appendChild(f))
                    }
                }
                if (Br.slideNumber) {
                    var v = parseInt(e.getAttribute("data-index-h"), 10) + 1,
                        h = parseInt(e.getAttribute("data-index-v"), 10) + 1,
                        g = document.createElement("div");
                    g.classList.add("slide-number"), g.classList.add("slide-number-pdf"), g.innerHTML = ft(v, ".", h), c.appendChild(g)
                }
            }
        }), m(Ur.wrapper.querySelectorAll(Cr + " .fragment")).forEach(function(e) {
            e.classList.add("visible")
        })
    }

    function l() {
        setInterval(function() {
            (0 !== Ur.wrapper.scrollTop || 0 !== Ur.wrapper.scrollLeft) && (Ur.wrapper.scrollTop = 0, Ur.wrapper.scrollLeft = 0)
        }, 1e3)
    }

    function c(e, t, r, n) {
        for (var a = e.querySelectorAll("." + r), i = 0; i < a.length; i++) {
            var o = a[i];
            if (o.parentNode === e) return o
        }
        var s = document.createElement(t);
        return s.classList.add(r), "string" == typeof n && (s.innerHTML = n), e.appendChild(s), s
    }

    function d() {
        q();
        Ur.background.innerHTML = "", Ur.background.classList.add("no-transition"), m(Ur.wrapper.querySelectorAll(Pr)).forEach(function(e) {
            var t = u(e, Ur.background);
            m(e.querySelectorAll("section")).forEach(function(e) {
                u(e, t), t.classList.add("stack")
            })
        }), Br.parallaxBackgroundImage ? (Ur.background.style.backgroundImage = 'url("' + Br.parallaxBackgroundImage + '")', Ur.background.style.backgroundSize = Br.parallaxBackgroundSize, setTimeout(function() {
            Ur.wrapper.classList.add("has-parallax-background")
        }, 1)) : (Ur.background.style.backgroundImage = "", Ur.wrapper.classList.remove("has-parallax-background"))
    }

    function u(e, t) {
        var r = {
                background: e.getAttribute("data-background"),
                backgroundSize: e.getAttribute("data-background-size"),
                backgroundImage: e.getAttribute("data-background-image"),
                backgroundVideo: e.getAttribute("data-background-video"),
                backgroundIframe: e.getAttribute("data-background-iframe"),
                backgroundColor: e.getAttribute("data-background-color"),
                backgroundRepeat: e.getAttribute("data-background-repeat"),
                backgroundPosition: e.getAttribute("data-background-position"),
                backgroundTransition: e.getAttribute("data-background-transition")
            },
            n = document.createElement("div");
        n.className = "slide-background " + e.className.replace(/present|past|future/, ""), r.background && (/^(http|file|\/\/)/gi.test(r.background) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(r.background) ? e.setAttribute("data-background-image", r.background) : n.style.background = r.background), (r.background || r.backgroundColor || r.backgroundImage || r.backgroundVideo || r.backgroundIframe) && n.setAttribute("data-background-hash", r.background + r.backgroundSize + r.backgroundImage + r.backgroundVideo + r.backgroundIframe + r.backgroundColor + r.backgroundRepeat + r.backgroundPosition + r.backgroundTransition), r.backgroundSize && (n.style.backgroundSize = r.backgroundSize), r.backgroundColor && (n.style.backgroundColor = r.backgroundColor), r.backgroundRepeat && (n.style.backgroundRepeat = r.backgroundRepeat), r.backgroundPosition && (n.style.backgroundPosition = r.backgroundPosition), r.backgroundTransition && n.setAttribute("data-background-transition", r.backgroundTransition), t.appendChild(n), e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), e.slideBackgroundElement = n;
        var a = window.getComputedStyle(n);
        if (a && a.backgroundColor) {
            var i = E(a.backgroundColor);
            i && 0 !== i.a && e.classList.add(S(a.backgroundColor) < 128 ? "has-dark-background" : "has-light-background")
        }
        return n
    }

    function p() {
        Br.postMessage && window.addEventListener("message", function(e) {
            var t = e.data;
            "string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof Ar[t.method] && Ar[t.method].apply(Ar, t.args))
        }, !1)
    }

    function f(e) {
        var t = Ur.wrapper.querySelectorAll(Cr).length;
        Ur.wrapper.classList.remove(Br.transition), "object" == typeof e && g(Br, e), $r.transforms3d === !1 && (Br.transition = "linear"), Ur.wrapper.classList.add(Br.transition), Ur.wrapper.setAttribute("data-transition-speed", Br.transitionSpeed), Ur.wrapper.setAttribute("data-background-transition", Br.backgroundTransition), Ur.controls.style.display = Br.controls ? "block" : "none", Ur.progress.style.display = Br.progress ? "block" : "none", Ur.slideNumber.style.display = Br.slideNumber && !q() ? "block" : "none", Br.shuffle && st(), Br.rtl ? Ur.wrapper.classList.add("rtl") : Ur.wrapper.classList.remove("rtl"), Br.center ? Ur.wrapper.classList.add("center") : Ur.wrapper.classList.remove("center"), Br.pause === !1 && Q(), Br.showNotes ? (Ur.speakerNotes.classList.add("visible"), Ur.speakerNotes.setAttribute("data-layout", "string" == typeof Br.showNotes ? Br.showNotes : "inline")) : Ur.speakerNotes.classList.remove("visible"), Br.mouseWheel ? (document.addEventListener("DOMMouseScroll", sr, !1), document.addEventListener("mousewheel", sr, !1)) : (document.removeEventListener("DOMMouseScroll", sr, !1), document.removeEventListener("mousewheel", sr, !1)), Br.rollingLinks ? I() : C(), Br.previewLinks ? P() : (H(), P("[data-preview-link]")), Tr && (Tr.destroy(), Tr = null), t > 1 && Br.autoSlide && Br.autoSlideStoppable && $r.canvas && $r.requestAnimationFrame && (Tr = new kr(Ur.wrapper, function() {
            return Math.min(Math.max((Date.now() - Gr) / Jr, 0), 1)
        }), Tr.on("click", wr), en = !1), Br.fragments === !1 && m(Ur.slides.querySelectorAll(".fragment")).forEach(function(e) {
            e.classList.add("visible"), e.classList.remove("current-fragment")
        }), at()
    }

    function v() {
        if (Zr = !0, window.addEventListener("hashchange", hr, !1), window.addEventListener("resize", gr, !1), Br.touch && (Ur.wrapper.addEventListener("touchstart", tr, !1), Ur.wrapper.addEventListener("touchmove", rr, !1), Ur.wrapper.addEventListener("touchend", nr, !1), window.navigator.pointerEnabled ? (Ur.wrapper.addEventListener("pointerdown", ar, !1), Ur.wrapper.addEventListener("pointermove", ir, !1), Ur.wrapper.addEventListener("pointerup", or, !1)) : window.navigator.msPointerEnabled && (Ur.wrapper.addEventListener("MSPointerDown", ar, !1), Ur.wrapper.addEventListener("MSPointerMove", ir, !1), Ur.wrapper.addEventListener("MSPointerUp", or, !1))), Br.keyboard && (document.addEventListener("keydown", er, !1), document.addEventListener("keypress", Gt, !1)), Br.progress && Ur.progress && Ur.progress.addEventListener("click", lr, !1), Br.focusBodyOnPageVisibilityChange) {
            var e;
            "hidden" in document ? e = "visibilitychange" : "msHidden" in document ? e = "msvisibilitychange" : "webkitHidden" in document && (e = "webkitvisibilitychange"), e && document.addEventListener(e, mr, !1)
        }
        var t = ["touchstart", "click"];
        Rr.match(/android/gi) && (t = ["touchstart"]), t.forEach(function(e) {
            Ur.controlsLeft.forEach(function(t) {
                t.addEventListener(e, cr, !1)
            }), Ur.controlsRight.forEach(function(t) {
                t.addEventListener(e, dr, !1)
            }), Ur.controlsUp.forEach(function(t) {
                t.addEventListener(e, ur, !1)
            }), Ur.controlsDown.forEach(function(t) {
                t.addEventListener(e, pr, !1)
            }), Ur.controlsPrev.forEach(function(t) {
                t.addEventListener(e, fr, !1)
            }), Ur.controlsNext.forEach(function(t) {
                t.addEventListener(e, vr, !1)
            })
        })
    }

    function h() {
        Zr = !1, document.removeEventListener("keydown", er, !1), document.removeEventListener("keypress", Gt, !1), window.removeEventListener("hashchange", hr, !1), window.removeEventListener("resize", gr, !1), Ur.wrapper.removeEventListener("touchstart", tr, !1), Ur.wrapper.removeEventListener("touchmove", rr, !1), Ur.wrapper.removeEventListener("touchend", nr, !1), window.navigator.pointerEnabled ? (Ur.wrapper.removeEventListener("pointerdown", ar, !1), Ur.wrapper.removeEventListener("pointermove", ir, !1), Ur.wrapper.removeEventListener("pointerup", or, !1)) : window.navigator.msPointerEnabled && (Ur.wrapper.removeEventListener("MSPointerDown", ar, !1), Ur.wrapper.removeEventListener("MSPointerMove", ir, !1), Ur.wrapper.removeEventListener("MSPointerUp", or, !1)), Br.progress && Ur.progress && Ur.progress.removeEventListener("click", lr, !1), ["touchstart", "click"].forEach(function(e) {
            Ur.controlsLeft.forEach(function(t) {
                t.removeEventListener(e, cr, !1)
            }), Ur.controlsRight.forEach(function(t) {
                t.removeEventListener(e, dr, !1)
            }), Ur.controlsUp.forEach(function(t) {
                t.removeEventListener(e, ur, !1)
            }), Ur.controlsDown.forEach(function(t) {
                t.removeEventListener(e, pr, !1)
            }), Ur.controlsPrev.forEach(function(t) {
                t.removeEventListener(e, fr, !1)
            }), Ur.controlsNext.forEach(function(t) {
                t.removeEventListener(e, vr, !1)
            })
        })
    }

    function g(e, t) {
        for (var r in t) e[r] = t[r]
    }

    function m(e) {
        return Array.prototype.slice.call(e)
    }

    function b(e) {
        if ("string" == typeof e) {
            if ("null" === e) return null;
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e.match(/^\d+$/)) return parseFloat(e)
        }
        return e
    }

    function y(e, t) {
        var r = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(r * r + n * n)
    }

    function w(e, t) {
        e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t
    }

    function k(e) {
        "string" == typeof e.layout && (Vr.layout = e.layout), "string" == typeof e.overview && (Vr.overview = e.overview), Vr.layout ? w(Ur.slides, Vr.layout + " " + Vr.overview) : w(Ur.slides, Vr.overview)
    }

    function A(e) {
        var t = document.createElement("style");
        t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
    }

    function L(e, t) {
        for (var r = e.parentNode; r;) {
            var n = r.matches || r.matchesSelector || r.msMatchesSelector;
            if (n && n.call(r, t)) return r;
            r = r.parentNode
        }
        return null
    }

    function E(e) {
        var t = e.match(/^#([0-9a-f]{3})$/i);
        if (t && t[1]) return t = t[1], {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16)
        };
        var r = e.match(/^#([0-9a-f]{6})$/i);
        if (r && r[1]) return r = r[1], {
            r: parseInt(r.substr(0, 2), 16),
            g: parseInt(r.substr(2, 2), 16),
            b: parseInt(r.substr(4, 2), 16)
        };
        var n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (n) return {
            r: parseInt(n[1], 10),
            g: parseInt(n[2], 10),
            b: parseInt(n[3], 10)
        };
        var a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
        return a ? {
            r: parseInt(a[1], 10),
            g: parseInt(a[2], 10),
            b: parseInt(a[3], 10),
            a: parseFloat(a[4])
        } : null
    }

    function S(e) {
        return "string" == typeof e && (e = E(e)), e ? (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 : null
    }

    function x(e, t) {
        if (t = t || 0, e) {
            var r, n = e.style.height;
            return e.style.height = "0px", r = t - e.parentNode.offsetHeight, e.style.height = n + "px", r
        }
        return t
    }

    function q() {
        return /print-pdf/gi.test(window.location.search)
    }

    function N() {
        Br.hideAddressBar && Nr && (window.addEventListener("load", M, !1), window.addEventListener("orientationchange", M, !1))
    }

    function M() {
        setTimeout(function() {
            window.scrollTo(0, 1)
        }, 10)
    }

    function T(e, t) {
        var r = document.createEvent("HTMLEvents", 1, 2);
        r.initEvent(e, !0, !0), g(r, t), Ur.wrapper.dispatchEvent(r), Br.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
            namespace: "reveal",
            eventName: e,
            state: Dt()
        }), "*")
    }

    function I() {
        if ($r.transforms3d && !("msPerspective" in document.body.style))
            for (var e = Ur.wrapper.querySelectorAll(Cr + " a"), t = 0, r = e.length; r > t; t++) {
                var n = e[t];
                if (!(!n.textContent || n.querySelector("*") || n.className && n.classList.contains(n, "roll"))) {
                    var a = document.createElement("span");
                    a.setAttribute("data-title", n.text), a.innerHTML = n.innerHTML, n.classList.add("roll"), n.innerHTML = "", n.appendChild(a)
                }
            }
    }

    function C() {
        for (var e = Ur.wrapper.querySelectorAll(Cr + " a.roll"), t = 0, r = e.length; r > t; t++) {
            var n = e[t],
                a = n.querySelector("span");
            a && (n.classList.remove("roll"), n.innerHTML = a.innerHTML)
        }
    }

    function P(e) {
        var t = m(document.querySelectorAll(e ? e : "a"));
        t.forEach(function(e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", yr, !1)
        })
    }

    function H() {
        var e = m(document.querySelectorAll("a"));
        e.forEach(function(e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", yr, !1)
        })
    }

    function D(e) {
        B(), Ur.overlay = document.createElement("div"), Ur.overlay.classList.add("overlay"), Ur.overlay.classList.add("overlay-preview"), Ur.wrapper.appendChild(Ur.overlay), Ur.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', "</div>"].join(""), Ur.overlay.querySelector("iframe").addEventListener("load", function() {
            Ur.overlay.classList.add("loaded")
        }, !1), Ur.overlay.querySelector(".close").addEventListener("click", function(e) {
            B(), e.preventDefault()
        }, !1), Ur.overlay.querySelector(".external").addEventListener("click", function() {
            B()
        }, !1), setTimeout(function() {
            Ur.overlay.classList.add("visible")
        }, 1)
    }

    function R() {
        if (Br.help) {
            B(), Ur.overlay = document.createElement("div"), Ur.overlay.classList.add("overlay"), Ur.overlay.classList.add("overlay-help"), Ur.wrapper.appendChild(Ur.overlay);
            var e = '<p class="title">Keyboard Shortcuts</p><br/>';
            e += "<table><th>KEY</th><th>ACTION</th>";
            for (var t in rn) e += "<tr><td>" + t + "</td><td>" + rn[t] + "</td></tr>";
            e += "</table>", Ur.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""), Ur.overlay.querySelector(".close").addEventListener("click", function(e) {
                B(), e.preventDefault()
            }, !1), setTimeout(function() {
                Ur.overlay.classList.add("visible")
            }, 1)
        }
    }

    function B() {
        Ur.overlay && (Ur.overlay.parentNode.removeChild(Ur.overlay), Ur.overlay = null)
    }

    function z() {
        if (Ur.wrapper && !q()) {
            var e = O();
            W(Br.width, Br.height), Ur.slides.style.width = e.width + "px", Ur.slides.style.height = e.height + "px", jr = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), jr = Math.max(jr, Br.minScale), jr = Math.min(jr, Br.maxScale), 1 === jr ? (Ur.slides.style.zoom = "", Ur.slides.style.left = "", Ur.slides.style.top = "", Ur.slides.style.bottom = "", Ur.slides.style.right = "", k({
                layout: ""
            })) : jr > 1 && $r.zoom ? (Ur.slides.style.zoom = jr, Ur.slides.style.left = "", Ur.slides.style.top = "", Ur.slides.style.bottom = "", Ur.slides.style.right = "", k({
                layout: ""
            })) : (Ur.slides.style.zoom = "", Ur.slides.style.left = "50%", Ur.slides.style.top = "50%", Ur.slides.style.bottom = "auto", Ur.slides.style.right = "auto", k({
                layout: "translate(-50%, -50%) scale(" + jr + ")"
            }));
            for (var t = m(Ur.wrapper.querySelectorAll(Cr)), r = 0, n = t.length; n > r; r++) {
                var a = t[r];
                "none" !== a.style.display && (a.style.top = Br.center || a.classList.contains("center") ? a.classList.contains("stack") ? 0 : Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : "")
            }
            ut(), gt()
        }
    }

    function W(e, t) {
        m(Ur.slides.querySelectorAll("section > .stretch")).forEach(function(r) {
            var n = x(r, t);
            if (/(img|video)/gi.test(r.nodeName)) {
                var a = r.naturalWidth || r.videoWidth,
                    i = r.naturalHeight || r.videoHeight,
                    o = Math.min(e / a, n / i);
                r.style.width = a * o + "px", r.style.height = i * o + "px"
            } else r.style.width = e + "px", r.style.height = n + "px"
        })
    }

    function O(e, t) {
        var r = {
            width: Br.width,
            height: Br.height,
            presentationWidth: e || Ur.wrapper.offsetWidth,
            presentationHeight: t || Ur.wrapper.offsetHeight
        };
        return r.presentationWidth -= r.presentationWidth * Br.margin, r.presentationHeight -= r.presentationHeight * Br.margin, "string" == typeof r.width && /%$/.test(r.width) && (r.width = parseInt(r.width, 10) / 100 * r.presentationWidth), "string" == typeof r.height && /%$/.test(r.height) && (r.height = parseInt(r.height, 10) / 100 * r.presentationHeight), r
    }

    function F(e, t) {
        "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
    }

    function Y(e) {
        if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
            var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
            return parseInt(e.getAttribute(t) || 0, 10)
        }
        return 0
    }

    function X() {
        if (Br.overview && !_()) {
            Or = !0, Ur.wrapper.classList.add("overview"), Ur.wrapper.classList.remove("overview-deactivating"), $r.overviewTransitions && setTimeout(function() {
                Ur.wrapper.classList.add("overview-animated")
            }, 1), Yt(), Ur.slides.appendChild(Ur.background), m(Ur.wrapper.querySelectorAll(Cr)).forEach(function(e) {
                e.classList.contains("stack") || e.addEventListener("click", br, !0)
            });
            var e = 70,
                t = O();
            Fr = t.width + e, Yr = t.height + e, Br.rtl && (Fr = -Fr), ct(), j(), V(), z(), T("overviewshown", {
                indexh: Lr,
                indexv: Er,
                currentSlide: xr
            })
        }
    }

    function j() {
        m(Ur.wrapper.querySelectorAll(Pr)).forEach(function(e, t) {
            e.setAttribute("data-index-h", t), w(e, "translate3d(" + t * Fr + "px, 0, 0)"), e.classList.contains("stack") && m(e.querySelectorAll("section")).forEach(function(e, r) {
                e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r), w(e, "translate3d(0, " + r * Yr + "px, 0)")
            })
        }), m(Ur.background.childNodes).forEach(function(e, t) {
            w(e, "translate3d(" + t * Fr + "px, 0, 0)"), m(e.querySelectorAll(".slide-background")).forEach(function(e, t) {
                w(e, "translate3d(0, " + t * Yr + "px, 0)")
            })
        })
    }

    function V() {
        k({
            overview: ["translateX(" + -Lr * Fr + "px)", "translateY(" + -Er * Yr + "px)", "translateZ(" + (window.innerWidth < 400 ? -1e3 : -2500) + "px)"].join(" ")
        })
    }

    function U() {
        Br.overview && (Or = !1, Ur.wrapper.classList.remove("overview"), Ur.wrapper.classList.remove("overview-animated"), Ur.wrapper.classList.add("overview-deactivating"), setTimeout(function() {
            Ur.wrapper.classList.remove("overview-deactivating")
        }, 1), Ur.wrapper.appendChild(Ur.background), m(Ur.wrapper.querySelectorAll(Cr)).forEach(function(e) {
            w(e, ""), e.removeEventListener("click", br, !0)
        }), m(Ur.background.querySelectorAll(".slide-background")).forEach(function(e) {
            w(e, "")
        }), k({
            overview: ""
        }), nt(Lr, Er), z(), Ft(), T("overviewhidden", {
            indexh: Lr,
            indexv: Er,
            currentSlide: xr
        }))
    }

    function $(e) {
        "boolean" == typeof e ? e ? X() : U() : _() ? U() : X()
    }

    function _() {
        return Or
    }

    function K(e) {
        return e = e ? e : xr, e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
    }

    function Z() {
        var e = document.documentElement,
            t = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
        t && t.apply(e)
    }

    function J() {
        if (Br.pause) {
            var e = Ur.wrapper.classList.contains("paused");
            Yt(), Ur.wrapper.classList.add("paused"), e === !1 && T("paused")
        }
    }

    function Q() {
        var e = Ur.wrapper.classList.contains("paused");
        Ur.wrapper.classList.remove("paused"), Ft(), e && T("resumed")
    }

    function G(e) {
        "boolean" == typeof e ? e ? J() : Q() : et() ? Q() : J()
    }

    function et() {
        return Ur.wrapper.classList.contains("paused")
    }

    function tt(e) {
        "boolean" == typeof e ? e ? jt() : Xt() : en ? jt() : Xt()
    }

    function rt() {
        return !(!Jr || en)
    }

    function nt(e, t, r, n) {
        Sr = xr;
        var a = Ur.wrapper.querySelectorAll(Pr);
        if (0 !== a.length) {
            void 0 !== t || _() || (t = Y(a[e])), Sr && Sr.parentNode && Sr.parentNode.classList.contains("stack") && F(Sr.parentNode, Er);
            var i = Xr.concat();
            Xr.length = 0;
            var s = Lr || 0,
                l = Er || 0;
            Lr = lt(Pr, void 0 === e ? Lr : e), Er = lt(Hr, void 0 === t ? Er : t), ct(), z();
            e: for (var c = 0, d = Xr.length; d > c; c++) {
                for (var u = 0; u < i.length; u++)
                    if (i[u] === Xr[c]) {
                        i.splice(u, 1);
                        continue e
                    }
                document.documentElement.classList.add(Xr[c]), T(Xr[c])
            }
            for (; i.length;) document.documentElement.classList.remove(i.pop());
            _() && V();
            var p = a[Lr],
                f = p.querySelectorAll("section");
            xr = f[Er] || p, "undefined" != typeof r && zt(r);
            var v = Lr !== s || Er !== l;
            v ? T("slidechanged", {
                indexh: Lr,
                indexv: Er,
                previousSlide: Sr,
                currentSlide: xr,
                origin: n
            }) : Sr = null, Sr && (Sr.classList.remove("present"), Sr.setAttribute("aria-hidden", "true"), Ur.wrapper.querySelector(Dr).classList.contains("present") && setTimeout(function() {
                var e, t = m(Ur.wrapper.querySelectorAll(Pr + ".stack"));
                for (e in t) t[e] && F(t[e], 0)
            }, 0)), (v || !Sr) && (Et(Sr), At(xr)), Ur.statusDiv.textContent = o(xr), vt(), ut(), ht(), gt(), pt(), dt(), Mt(), Ft()
        }
    }

    function at() {
        h(), v(), z(), Jr = Br.autoSlide, Ft(), d(), Mt(), ot(), vt(), ut(), ht(!0), pt(), ct(), dt(), kt(), At(xr), _() && j()
    }

    function it() {
        var e = m(Ur.wrapper.querySelectorAll(Pr));
        e.forEach(function(e) {
            var t = m(e.querySelectorAll("section"));
            t.forEach(function(e, t) {
                t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
            })
        })
    }

    function ot() {
        var e = m(Ur.wrapper.querySelectorAll(Pr));
        e.forEach(function(e) {
            var t = m(e.querySelectorAll("section"));
            t.forEach(function(e) {
                Bt(e.querySelectorAll(".fragment"))
            }), 0 === t.length && Bt(e.querySelectorAll(".fragment"))
        })
    }

    function st() {
        var e = m(Ur.wrapper.querySelectorAll(Pr));
        e.forEach(function(t) {
            Ur.slides.insertBefore(t, e[Math.floor(Math.random() * e.length)])
        })
    }

    function lt(e, t) {
        var r = m(Ur.wrapper.querySelectorAll(e)),
            n = r.length,
            a = q();
        if (n) {
            Br.loop && (t %= n, 0 > t && (t = n + t)), t = Math.max(Math.min(t, n - 1), 0);
            for (var i = 0; n > i; i++) {
                var o = r[i],
                    s = Br.rtl && !K(o);
                if (o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), a) o.classList.add("present");
                else if (t > i) {
                    if (o.classList.add(s ? "future" : "past"), Br.fragments)
                        for (var l = m(o.querySelectorAll(".fragment")); l.length;) {
                            var c = l.pop();
                            c.classList.add("visible"), c.classList.remove("current-fragment")
                        }
                } else if (i > t && (o.classList.add(s ? "past" : "future"), Br.fragments))
                    for (var d = m(o.querySelectorAll(".fragment.visible")); d.length;) {
                        var u = d.pop();
                        u.classList.remove("visible"), u.classList.remove("current-fragment")
                    }
            }
            r[t].classList.add("present"), r[t].removeAttribute("hidden"), r[t].removeAttribute("aria-hidden");
            var p = r[t].getAttribute("data-state");
            p && (Xr = Xr.concat(p.split(" ")))
        } else t = 0;
        return t
    }

    function ct() {
        var e, t, r = m(Ur.wrapper.querySelectorAll(Pr)),
            n = r.length;
        if (n && "undefined" != typeof Lr) {
            var a = _() ? 10 : Br.viewDistance;
            Nr && (a = _() ? 6 : 2), q() && (a = Number.MAX_VALUE);
            for (var i = 0; n > i; i++) {
                var o = r[i],
                    s = m(o.querySelectorAll("section")),
                    l = s.length;
                if (e = Math.abs((Lr || 0) - i) || 0, Br.loop && (e = Math.abs(((Lr || 0) - i) % (n - a)) || 0), a > e ? mt(o) : bt(o), l)
                    for (var c = Y(o), d = 0; l > d; d++) {
                        var u = s[d];
                        t = Math.abs(i === (Lr || 0) ? (Er || 0) - d : d - c), a > e + t ? mt(u) : bt(u)
                    }
            }
        }
    }

    function dt() {
        Br.showNotes && Ur.speakerNotes && xr && !q() && (Ur.speakerNotes.innerHTML = Ht() || "")
    }

    function ut() {
        Br.progress && Ur.progressbar && (Ur.progressbar.style.width = xt() * Ur.wrapper.offsetWidth + "px")
    }

    function pt() {
        if (Br.slideNumber && Ur.slideNumber) {
            var e = [],
                t = "h.v";
            switch ("string" == typeof Br.slideNumber && (t = Br.slideNumber), t) {
                case "c":
                    e.push(St() + 1);
                    break;
                case "c/t":
                    e.push(St() + 1, "/", It());
                    break;
                case "h/v":
                    e.push(Lr + 1), K() && e.push("/", Er + 1);
                    break;
                default:
                    e.push(Lr + 1), K() && e.push(".", Er + 1)
            }
            Ur.slideNumber.innerHTML = ft(e[0], e[1], e[2])
        }
    }

    function ft(e, t, r) {
        return "number" != typeof r || isNaN(r) ? '<span class="slide-number-a">' + e + "</span>" : '<span class="slide-number-a">' + e + '</span><span class="slide-number-delimiter">' + t + '</span><span class="slide-number-b">' + r + "</span>"
    }

    function vt() {
        var e = yt(),
            t = wt();
        Ur.controlsLeft.concat(Ur.controlsRight).concat(Ur.controlsUp).concat(Ur.controlsDown).concat(Ur.controlsPrev).concat(Ur.controlsNext).forEach(function(e) {
            e.classList.remove("enabled"), e.classList.remove("fragmented"), e.setAttribute("disabled", "disabled")
        }), e.left && Ur.controlsLeft.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.right && Ur.controlsRight.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.up && Ur.controlsUp.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.down && Ur.controlsDown.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), (e.left || e.up) && Ur.controlsPrev.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), (e.right || e.down) && Ur.controlsNext.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), xr && (t.prev && Ur.controlsPrev.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Ur.controlsNext.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), K(xr) ? (t.prev && Ur.controlsUp.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Ur.controlsDown.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        })) : (t.prev && Ur.controlsLeft.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Ur.controlsRight.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        })))
    }

    function ht(e) {
        var t = null,
            r = Br.rtl ? "future" : "past",
            n = Br.rtl ? "past" : "future";
        if (m(Ur.background.childNodes).forEach(function(a, i) {
                a.classList.remove("past"), a.classList.remove("present"), a.classList.remove("future"), Lr > i ? a.classList.add(r) : i > Lr ? a.classList.add(n) : (a.classList.add("present"), t = a), (e || i === Lr) && m(a.querySelectorAll(".slide-background")).forEach(function(e, r) {
                    e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), Er > r ? e.classList.add("past") : r > Er ? e.classList.add("future") : (e.classList.add("present"), i === Lr && (t = e))
                })
            }), qr) {
            var a = qr.querySelector("video");
            a && a.pause()
        }
        if (t) {
            var i = t.querySelector("video");
            if (i) {
                var o = function() {
                    i.currentTime = 0, i.play(), i.removeEventListener("loadeddata", o)
                };
                i.readyState > 1 ? o() : i.addEventListener("loadeddata", o)
            }
            var s = t.style.backgroundImage || "";
            /\.gif/i.test(s) && (t.style.backgroundImage = "", window.getComputedStyle(t).opacity, t.style.backgroundImage = s);
            var l = qr ? qr.getAttribute("data-background-hash") : null,
                c = t.getAttribute("data-background-hash");
            c && c === l && t !== qr && Ur.background.classList.add("no-transition"), qr = t
        }
        xr && ["has-light-background", "has-dark-background"].forEach(function(e) {
            xr.classList.contains(e) ? Ur.wrapper.classList.add(e) : Ur.wrapper.classList.remove(e)
        }), setTimeout(function() {
            Ur.background.classList.remove("no-transition")
        }, 1)
    }

    function gt() {
        if (Br.parallaxBackgroundImage) {
            var e, t, r = Ur.wrapper.querySelectorAll(Pr),
                n = Ur.wrapper.querySelectorAll(Hr),
                a = Ur.background.style.backgroundSize.split(" ");
            1 === a.length ? e = t = parseInt(a[0], 10) : (e = parseInt(a[0], 10), t = parseInt(a[1], 10));
            var i, o, s = Ur.background.offsetWidth,
                l = r.length;
            i = "number" == typeof Br.parallaxBackgroundHorizontal ? Br.parallaxBackgroundHorizontal : l > 1 ? (e - s) / (l - 1) : 0, o = i * Lr * -1;
            var c, d, u = Ur.background.offsetHeight,
                p = n.length;
            c = "number" == typeof Br.parallaxBackgroundVertical ? Br.parallaxBackgroundVertical : (t - u) / (p - 1), d = p > 0 ? c * Er : 0, Ur.background.style.backgroundPosition = o + "px " + -d + "px"
        }
    }

    function mt(e) {
        e.style.display = "block", m(e.querySelectorAll("img[data-src], video[data-src], audio[data-src]")).forEach(function(e) {
            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src")
        }), m(e.querySelectorAll("video, audio")).forEach(function(e) {
            var t = 0;
            m(e.querySelectorAll("source[data-src]")).forEach(function(e) {
                e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), t += 1
            }), t > 0 && e.load()
        });
        var t = Tt(e),
            r = Pt(t.h, t.v);
        if (r && (r.style.display = "block", r.hasAttribute("data-loaded") === !1)) {
            r.setAttribute("data-loaded", "true");
            var n = e.getAttribute("data-background-image"),
                a = e.getAttribute("data-background-video"),
                i = e.hasAttribute("data-background-video-loop"),
                o = e.hasAttribute("data-background-video-muted"),
                s = e.getAttribute("data-background-iframe");
            if (n) r.style.backgroundImage = "url(" + n + ")";
            else if (a && !qt()) {
                var l = document.createElement("video");
                i && l.setAttribute("loop", ""), o && (l.muted = !0), a.split(",").forEach(function(e) {
                    l.innerHTML += '<source src="' + e + '">'
                }), r.appendChild(l)
            } else if (s) {
                var c = document.createElement("iframe");
                c.setAttribute("src", s), c.style.width = "100%", c.style.height = "100%", c.style.maxHeight = "100%", c.style.maxWidth = "100%", r.appendChild(c)
            }
        }
    }

    function bt(e) {
        e.style.display = "none";
        var t = Tt(e),
            r = Pt(t.h, t.v);
        r && (r.style.display = "none")
    }

    function yt() {
        var e = Ur.wrapper.querySelectorAll(Pr),
            t = Ur.wrapper.querySelectorAll(Hr),
            r = {
                left: Lr > 0 || Br.loop,
                right: Lr < e.length - 1 || Br.loop,
                up: Er > 0,
                down: Er < t.length - 1
            };
        if (Br.rtl) {
            var n = r.left;
            r.left = r.right, r.right = n
        }
        return r
    }

    function wt() {
        if (xr && Br.fragments) {
            var e = xr.querySelectorAll(".fragment"),
                t = xr.querySelectorAll(".fragment:not(.visible)");
            return {
                prev: e.length - t.length > 0,
                next: !!t.length
            }
        }
        return {
            prev: !1,
            next: !1
        }
    }

    function kt() {
        var e = function(e, t, r) {
            m(Ur.slides.querySelectorAll("iframe[" + e + '*="' + t + '"]')).forEach(function(t) {
                var n = t.getAttribute(e);
                n && -1 === n.indexOf(r) && t.setAttribute(e, n + (/\?/.test(n) ? "&" : "?") + r)
            })
        };
        e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1")
    }

    function At(e) {
        e && !qt() && (m(e.querySelectorAll('img[src$=".gif"]')).forEach(function(e) {
            e.setAttribute("src", e.getAttribute("src"))
        }), m(e.querySelectorAll("video, audio")).forEach(function(e) {
            (!L(e, ".fragment") || L(e, ".fragment.visible")) && e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
        }), m(e.querySelectorAll("iframe[src]")).forEach(function(e) {
            (!L(e, ".fragment") || L(e, ".fragment.visible")) && Lt({
                target: e
            })
        }), m(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
            (!L(e, ".fragment") || L(e, ".fragment.visible")) && e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", Lt), e.addEventListener("load", Lt), e.setAttribute("src", e.getAttribute("data-src")))
        }))
    }

    function Lt(e) {
        var t = e.target;
        t && t.contentWindow && (/youtube\.com\/embed\//.test(t.getAttribute("src")) && t.hasAttribute("data-autoplay") ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && t.hasAttribute("data-autoplay") ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*"))
    }

    function Et(e) {
        e && e.parentNode && (m(e.querySelectorAll("video, audio")).forEach(function(e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.pause || e.pause()
        }), m(e.querySelectorAll("iframe")).forEach(function(e) {
            e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", Lt)
        }), m(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.contentWindow.postMessage || e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }), m(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.contentWindow.postMessage || e.contentWindow.postMessage('{"method":"pause"}', "*")
        }), m(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
            e.setAttribute("src", "about:blank"), e.removeAttribute("src")
        }))
    }

    function St() {
        var e = m(Ur.wrapper.querySelectorAll(Pr)),
            t = 0;
        e: for (var r = 0; r < e.length; r++) {
            for (var n = e[r], a = m(n.querySelectorAll("section")), i = 0; i < a.length; i++) {
                if (a[i].classList.contains("present")) break e;
                t++
            }
            if (n.classList.contains("present")) break;
            n.classList.contains("stack") === !1 && t++
        }
        return t
    }

    function xt() {
        var e = It(),
            t = St();
        if (xr) {
            var r = xr.querySelectorAll(".fragment");
            if (r.length > 0) {
                var n = xr.querySelectorAll(".fragment.visible"),
                    a = .9;
                t += n.length / r.length * a
            }
        }
        return t / (e - 1)
    }

    function qt() {
        return !!window.location.search.match(/receiver/gi)
    }

    function Nt() {
        var e = window.location.hash,
            t = e.slice(2).split("/"),
            r = e.replace(/#|\//gi, "");
        if (isNaN(parseInt(t[0], 10)) && r.length) {
            var n;
            if (/^[a-zA-Z][\w:.-]*$/.test(r) && (n = document.getElementById(r)), n) {
                var a = Ar.getIndices(n);
                nt(a.h, a.v)
            } else nt(Lr || 0, Er || 0)
        } else {
            var i = parseInt(t[0], 10) || 0,
                o = parseInt(t[1], 10) || 0;
            (i !== Lr || o !== Er) && nt(i, o)
        }
    }

    function Mt(e) {
        if (Br.history)
            if (clearTimeout(Kr), "number" == typeof e) Kr = setTimeout(Mt, e);
            else if (xr) {
            var t = "/",
                r = xr.getAttribute("id");
            r && (r = r.replace(/[^a-zA-Z0-9\-\_\:\.]/g, "")), "string" == typeof r && r.length ? t = "/" + r : ((Lr > 0 || Er > 0) && (t += Lr), Er > 0 && (t += "/" + Er)), window.location.hash = t
        }
    }

    function Tt(e) {
        var t, r = Lr,
            n = Er;
        if (e) {
            var a = K(e),
                i = a ? e.parentNode : e,
                o = m(Ur.wrapper.querySelectorAll(Pr));
            r = Math.max(o.indexOf(i), 0), n = void 0, a && (n = Math.max(m(e.parentNode.querySelectorAll("section")).indexOf(e), 0))
        }
        if (!e && xr) {
            var s = xr.querySelectorAll(".fragment").length > 0;
            if (s) {
                var l = xr.querySelector(".current-fragment");
                t = l && l.hasAttribute("data-fragment-index") ? parseInt(l.getAttribute("data-fragment-index"), 10) : xr.querySelectorAll(".fragment.visible").length - 1
            }
        }
        return {
            h: r,
            v: n,
            f: t
        }
    }

    function It() {
        return Ur.wrapper.querySelectorAll(Cr + ":not(.stack)").length
    }

    function Ct(e, t) {
        var r = Ur.wrapper.querySelectorAll(Pr)[e],
            n = r && r.querySelectorAll("section");
        return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : r
    }

    function Pt(e, t) {
        if (q()) {
            var r = Ct(e, t);
            return r ? r.slideBackgroundElement : void 0
        }
        var n = Ur.wrapper.querySelectorAll(".backgrounds>.slide-background")[e],
            a = n && n.querySelectorAll(".slide-background");
        return a && a.length && "number" == typeof t ? a ? a[t] : void 0 : n
    }

    function Ht(e) {
        if (e = e || xr, e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
        var t = e.querySelector("aside.notes");
        return t ? t.innerHTML : null
    }

    function Dt() {
        var e = Tt();
        return {
            indexh: e.h,
            indexv: e.v,
            indexf: e.f,
            paused: et(),
            overview: _()
        }
    }

    function Rt(e) {
        if ("object" == typeof e) {
            nt(b(e.indexh), b(e.indexv), b(e.indexf));
            var t = b(e.paused),
                r = b(e.overview);
            "boolean" == typeof t && t !== et() && G(t), "boolean" == typeof r && r !== _() && $(r)
        }
    }

    function Bt(e) {
        e = m(e);
        var t = [],
            r = [],
            n = [];
        e.forEach(function(e) {
            if (e.hasAttribute("data-fragment-index")) {
                var n = parseInt(e.getAttribute("data-fragment-index"), 10);
                t[n] || (t[n] = []), t[n].push(e)
            } else r.push([e])
        }), t = t.concat(r);
        var a = 0;
        return t.forEach(function(e) {
            e.forEach(function(e) {
                n.push(e), e.setAttribute("data-fragment-index", a)
            }), a++
        }), n
    }

    function zt(e, t) {
        if (xr && Br.fragments) {
            var r = Bt(xr.querySelectorAll(".fragment"));
            if (r.length) {
                if ("number" != typeof e) {
                    var n = Bt(xr.querySelectorAll(".fragment.visible")).pop();
                    e = n ? parseInt(n.getAttribute("data-fragment-index") || 0, 10) : -1
                }
                "number" == typeof t && (e += t);
                var a = [],
                    i = [];
                return m(r).forEach(function(t, r) {
                    t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), e >= r ? (t.classList.contains("visible") || a.push(t), t.classList.add("visible"), t.classList.remove("current-fragment"), Ur.statusDiv.textContent = o(t), r === e && (t.classList.add("current-fragment"), At(t))) : (t.classList.contains("visible") && i.push(t), t.classList.remove("visible"), t.classList.remove("current-fragment"))
                }), i.length && T("fragmenthidden", {
                    fragment: i[0],
                    fragments: i
                }), a.length && T("fragmentshown", {
                    fragment: a[0],
                    fragments: a
                }), vt(), ut(), !(!a.length && !i.length)
            }
        }
        return !1
    }

    function Wt() {
        return zt(null, 1)
    }

    function Ot() {
        return zt(null, -1)
    }

    function Ft() {
        if (Yt(), xr) {
            var e = xr.querySelector(".current-fragment");
            e || (e = xr.querySelector(".fragment"));
            var t = e ? e.getAttribute("data-autoslide") : null,
                r = xr.parentNode ? xr.parentNode.getAttribute("data-autoslide") : null,
                n = xr.getAttribute("data-autoslide");
            Jr = t ? parseInt(t, 10) : n ? parseInt(n, 10) : r ? parseInt(r, 10) : Br.autoSlide, 0 === xr.querySelectorAll(".fragment").length && m(xr.querySelectorAll("video, audio")).forEach(function(e) {
                e.hasAttribute("data-autoplay") && Jr && 1e3 * e.duration / e.playbackRate > Jr && (Jr = 1e3 * e.duration / e.playbackRate + 1e3)
            }), !Jr || en || et() || _() || Ar.isLastSlide() && !wt().next && Br.loop !== !0 || (Qr = setTimeout(function() {
                "function" == typeof Br.autoSlideMethod ? Br.autoSlideMethod() : Zt(), Ft()
            }, Jr), Gr = Date.now()), Tr && Tr.setPlaying(-1 !== Qr)
        }
    }

    function Yt() {
        clearTimeout(Qr), Qr = -1
    }

    function Xt() {
        Jr && !en && (en = !0, T("autoslidepaused"), clearTimeout(Qr), Tr && Tr.setPlaying(!1))
    }

    function jt() {
        Jr && en && (en = !1, T("autoslideresumed"), Ft())
    }

    function Vt() {
        Br.rtl ? (_() || Wt() === !1) && yt().left && nt(Lr + 1) : (_() || Ot() === !1) && yt().left && nt(Lr - 1)
    }

    function Ut() {
        Br.rtl ? (_() || Ot() === !1) && yt().right && nt(Lr - 1) : (_() || Wt() === !1) && yt().right && nt(Lr + 1)
    }

    function $t() {
        (_() || Ot() === !1) && yt().up && nt(Lr, Er - 1)
    }

    function _t() {
        (_() || Wt() === !1) && yt().down && nt(Lr, Er + 1)
    }

    function Kt() {
        if (Ot() === !1)
            if (yt().up) $t();
            else {
                var e;
                if (e = Br.rtl ? m(Ur.wrapper.querySelectorAll(Pr + ".future")).pop() : m(Ur.wrapper.querySelectorAll(Pr + ".past")).pop()) {
                    var t = e.querySelectorAll("section").length - 1 || void 0,
                        r = Lr - 1;
                    nt(r, t)
                }
            }
    }

    function Zt() {
        Wt() === !1 && (yt().down ? _t() : Br.rtl ? Vt() : Ut())
    }

    function Jt(e) {
        for (; e && "function" == typeof e.hasAttribute;) {
            if (e.hasAttribute("data-prevent-swipe")) return !0;
            e = e.parentNode
        }
        return !1
    }

    function Qt() {
        Br.autoSlideStoppable && Xt()
    }

    function Gt(e) {
        e.shiftKey && 63 === e.charCode && (Ur.overlay ? B() : R(!0))
    }

    function er(e) {
        if ("function" == typeof Br.keyboardCondition && Br.keyboardCondition() === !1) return !0;
        var t = en;
        Qt(e);
        var r = document.activeElement && "inherit" !== document.activeElement.contentEditable,
            n = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
            a = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className);
        if (!(r || n || a || e.shiftKey && 32 !== e.keyCode || e.altKey || e.ctrlKey || e.metaKey)) {
            var i, o = [66, 86, 190, 191];
            if ("object" == typeof Br.keyboard)
                for (i in Br.keyboard) "togglePause" === Br.keyboard[i] && o.push(parseInt(i, 10));
            if (et() && -1 === o.indexOf(e.keyCode)) return !1;
            var s = !1;
            if ("object" == typeof Br.keyboard)
                for (i in Br.keyboard)
                    if (parseInt(i, 10) === e.keyCode) {
                        var l = Br.keyboard[i];
                        "function" == typeof l ? l.apply(null, [e]) : "string" == typeof l && "function" == typeof Ar[l] && Ar[l].call(), s = !0
                    }
            if (s === !1) switch (s = !0, e.keyCode) {
                case 80:
                case 33:
                    Kt();
                    break;
                case 78:
                case 34:
                    Zt();
                    break;
                case 72:
                case 37:
                    Vt();
                    break;
                case 76:
                case 39:
                    Ut();
                    break;
                case 75:
                case 38:
                    $t();
                    break;
                case 74:
                case 40:
                    _t();
                    break;
                case 36:
                    nt(0);
                    break;
                case 35:
                    nt(Number.MAX_VALUE);
                    break;
                case 32:
                    _() ? U() : e.shiftKey ? Kt() : Zt();
                    break;
                case 13:
                    _() ? U() : s = !1;
                    break;
                case 58:
                case 59:
                case 66:
                case 86:
                case 190:
                case 191:
                    G();
                    break;
                case 70:
                    Z();
                    break;
                case 65:
                    Br.autoSlideStoppable && tt(t);
                    break;
                default:
                    s = !1
            }
            s ? e.preventDefault && e.preventDefault() : 27 !== e.keyCode && 79 !== e.keyCode || !$r.transforms3d || (Ur.overlay ? B() : $(), e.preventDefault && e.preventDefault()), Ft()
        }
    }

    function tr(e) {
        return Jt(e.target) ? !0 : (tn.startX = e.touches[0].clientX, tn.startY = e.touches[0].clientY, tn.startCount = e.touches.length, void(2 === e.touches.length && Br.overview && (tn.startSpan = y({
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }, {
            x: tn.startX,
            y: tn.startY
        }))))
    }

    function rr(e) {
        if (Jt(e.target)) return !0;
        if (tn.captured) Rr.match(/android/gi) && e.preventDefault();
        else {
            Qt(e);
            var t = e.touches[0].clientX,
                r = e.touches[0].clientY;
            if (2 === e.touches.length && 2 === tn.startCount && Br.overview) {
                var n = y({
                    x: e.touches[1].clientX,
                    y: e.touches[1].clientY
                }, {
                    x: tn.startX,
                    y: tn.startY
                });
                Math.abs(tn.startSpan - n) > tn.threshold && (tn.captured = !0, n < tn.startSpan ? X() : U()), e.preventDefault()
            } else if (1 === e.touches.length && 2 !== tn.startCount) {
                var a = t - tn.startX,
                    i = r - tn.startY;
                a > tn.threshold && Math.abs(a) > Math.abs(i) ? (tn.captured = !0, Vt()) : a < -tn.threshold && Math.abs(a) > Math.abs(i) ? (tn.captured = !0, Ut()) : i > tn.threshold ? (tn.captured = !0, $t()) : i < -tn.threshold && (tn.captured = !0, _t()), Br.embedded ? (tn.captured || K(xr)) && e.preventDefault() : e.preventDefault()
            }
        }
    }

    function nr() {
        tn.captured = !1
    }

    function ar(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], tr(e))
    }

    function ir(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], rr(e))
    }

    function or(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], nr(e))
    }

    function sr(e) {
        if (Date.now() - _r > 600) {
            _r = Date.now();
            var t = e.detail || -e.wheelDelta;
            t > 0 ? Zt() : 0 > t && Kt()
        }
    }

    function lr(e) {
        Qt(e), e.preventDefault();
        var t = m(Ur.wrapper.querySelectorAll(Pr)).length,
            r = Math.floor(e.clientX / Ur.wrapper.offsetWidth * t);
        Br.rtl && (r = t - r), nt(r)
    }

    function cr(e) {
        e.preventDefault(), Qt(), Vt()
    }

    function dr(e) {
        e.preventDefault(), Qt(), Ut()
    }

    function ur(e) {
        e.preventDefault(), Qt(), $t()
    }

    function pr(e) {
        e.preventDefault(), Qt(), _t()
    }

    function fr(e) {
        e.preventDefault(), Qt(), Kt()
    }

    function vr(e) {
        e.preventDefault(), Qt(), Zt()
    }

    function hr() {
        Nt()
    }

    function gr() {
        z()
    }

    function mr() {
        var e = document.webkitHidden || document.msHidden || document.hidden;
        e === !1 && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
    }

    function br(e) {
        if (Zr && _()) {
            e.preventDefault();
            for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
            if (t && !t.classList.contains("disabled") && (U(), t.nodeName.match(/section/gi))) {
                var r = parseInt(t.getAttribute("data-index-h"), 10),
                    n = parseInt(t.getAttribute("data-index-v"), 10);
                nt(r, n)
            }
        }
    }

    function yr(e) {
        if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
            var t = e.currentTarget.getAttribute("href");
            t && (D(t), e.preventDefault())
        }
    }

    function wr() {
        Ar.isLastSlide() && Br.loop === !1 ? (nt(0, 0), jt()) : en ? jt() : Xt()
    }

    function kr(e, t) {
        this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
    }
    var Ar, Lr, Er, Sr, xr, qr, Nr, Mr, Tr, Ir = "3.3.0",
        Cr = ".slides section",
        Pr = ".slides>section",
        Hr = ".slides>section.present>section",
        Dr = ".slides>section:first-of-type",
        Rr = navigator.userAgent,
        Br = {
            width: 960,
            height: 700,
            margin: .1,
            minScale: .2,
            maxScale: 2,
            controls: !0,
            progress: !0,
            slideNumber: !1,
            history: !1,
            keyboard: !0,
            keyboardCondition: null,
            overview: !0,
            center: !0,
            touch: !0,
            loop: !1,
            rtl: !1,
            shuffle: !1,
            fragments: !0,
            embedded: !1,
            help: !0,
            pause: !0,
            showNotes: !1,
            autoSlide: 0,
            autoSlideStoppable: !0,
            autoSlideMethod: null,
            mouseWheel: !1,
            rollingLinks: !1,
            hideAddressBar: !0,
            previewLinks: !1,
            postMessage: !0,
            postMessageEvents: !1,
            focusBodyOnPageVisibilityChange: !0,
            transition: "default",
            transitionSpeed: "default",
            backgroundTransition: "default",
            parallaxBackgroundImage: "",
            parallaxBackgroundSize: "",
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            viewDistance: 3,
            dependencies: []
        },
        zr = !1,
        Wr = !1,
        Or = !1,
        Fr = null,
        Yr = null,
        Xr = [],
        jr = 1,
        Vr = {
            layout: "",
            overview: ""
        },
        Ur = {},
        $r = {},
        _r = 0,
        Kr = 0,
        Zr = !1,
        Jr = 0,
        Qr = 0,
        Gr = -1,
        en = !1,
        tn = {
            startX: 0,
            startY: 0,
            startSpan: 0,
            startCount: 0,
            captured: !1,
            threshold: 40
        },
        rn = {
            "N  ,  SPACE": "Next slide",
            P: "Previous slide",
            "&#8592;  ,  H": "Navigate left",
            "&#8594;  ,  L": "Navigate right",
            "&#8593;  ,  K": "Navigate up",
            "&#8595;  ,  J": "Navigate down",
            Home: "First slide",
            End: "Last slide",
            "B  ,  .": "Pause",
            F: "Fullscreen",
            "ESC, O": "Slide overview"
        };
    return kr.prototype.setPlaying = function(e) {
        var t = this.playing;
        this.playing = e, !t && this.playing ? this.animate() : this.render()
    }, kr.prototype.animate = function() {
        var e = this.progress;
        this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && $r.requestAnimationFrameMethod.call(window, this.animate.bind(this))
    }, kr.prototype.render = function() {
        var e = this.playing ? this.progress : 0,
            t = this.diameter2 - this.thickness,
            r = this.diameter2,
            n = this.diameter2,
            a = 28;
        this.progressOffset += .1 * (1 - this.progressOffset);
        var i = -Math.PI / 2 + 2 * e * Math.PI,
            o = -Math.PI / 2 + 2 * this.progressOffset * Math.PI;
        this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(r, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(r, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#666", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(r, n, t, o, i, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(r - a / 2, n - a / 2), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, a / 2 - 4, a), this.context.fillRect(a / 2 + 4, 0, a / 2 - 4, a)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(a - 4, a / 2), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
    }, kr.prototype.on = function(e, t) {
        this.canvas.addEventListener(e, t, !1)
    }, kr.prototype.off = function(e, t) {
        this.canvas.removeEventListener(e, t, !1)
    }, kr.prototype.destroy = function() {
        this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
    }, Ar = {
        VERSION: Ir,
        initialize: e,
        configure: f,
        sync: at,
        slide: nt,
        left: Vt,
        right: Ut,
        up: $t,
        down: _t,
        prev: Kt,
        next: Zt,
        navigateFragment: zt,
        prevFragment: Ot,
        nextFragment: Wt,
        navigateTo: nt,
        navigateLeft: Vt,
        navigateRight: Ut,
        navigateUp: $t,
        navigateDown: _t,
        navigatePrev: Kt,
        navigateNext: Zt,
        showHelp: R,
        layout: z,
        shuffle: st,
        availableRoutes: yt,
        availableFragments: wt,
        toggleOverview: $,
        togglePause: G,
        toggleAutoSlide: tt,
        isOverview: _,
        isPaused: et,
        isAutoSliding: rt,
        addEventListeners: v,
        removeEventListeners: h,
        getState: Dt,
        setState: Rt,
        getProgress: xt,
        getIndices: Tt,
        getTotalSlides: It,
        getSlide: Ct,
        getSlideBackground: Pt,
        getSlideNotes: Ht,
        getPreviousSlide: function() {
            return Sr
        },
        getCurrentSlide: function() {
            return xr
        },
        getScale: function() {
            return jr
        },
        getConfig: function() {
            return Br
        },
        getQueryHash: function() {
            var e = {};
            location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) {
                e[t.split("=").shift()] = t.split("=").pop()
            });
            for (var t in e) {
                var r = e[t];
                e[t] = b(unescape(r))
            }
            return e
        },
        isFirstSlide: function() {
            return 0 === Lr && 0 === Er
        },
        isLastSlide: function() {
            return xr ? xr.nextElementSibling ? !1 : K(xr) && xr.parentNode.nextElementSibling ? !1 : !0 : !1
        },
        isReady: function() {
            return Wr
        },
        addEventListener: function(e, t, r) {
            "addEventListener" in window && (Ur.wrapper || document.querySelector(".reveal")).addEventListener(e, t, r)
        },
        removeEventListener: function(e, t, r) {
            "addEventListener" in window && (Ur.wrapper || document.querySelector(".reveal")).removeEventListener(e, t, r)
        },
        triggerKey: function(e) {
            er({
                keyCode: e
            })
        },
        registerKeyboardShortcut: function(e, t) {
            rn[e] = t
        }
    }
});