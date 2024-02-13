(() => {
    "use strict";
    var e, t, n, r, o, i, a, c, d, u, s, l, f, m, p, b, g, h = {
            957: (e, t, n) => {
                (window.TextEncoder ? Promise.resolve() : n.e(379).then(n.t.bind(n, 379, 19)).then((e => {
                    window.TextEncoder = e.TextEncoder, window.TextDecoder = e.TextDecoder
                }))).then((() => n.e(249).then(n.bind(n, 249)))).then((e => {
                    const t = () => {
                        const t = document.getElementById("input").files;
                        if (0 == t.length) return;
                        window.mixpanel && window.mixpanel.track("Render", {});
                        const n = t[0];
                        document.getElementById("inputname").innerHTML = n.name;
                        const r = document.getElementById("outputwidth"),
                            o = parseFloat(r.value);
                        if (Number.isNaN(o) || 0 === o) return;
                        const i = document.getElementById("spacing"),
                            a = parseFloat(i.value);
                        if (Number.isNaN(a) || 0 === a) return;
                        const c = !document.getElementById("invert").checked,
                            d = document.getElementById("cutpaths").checked,
                            u = document.getElementById("spinner-overlay");
                        u.className = "";
                        const s = new FileReader;
                        s.onload = () => {
                            const t = s.result,
                                n = new Uint8Array(t),
                                r = e.run(n, o, a, document.getElementById("shape").value, document.getElementById("grid").value, c, d);
                            document.getElementById("target").innerHTML = r || "<p>Something went wrong when generating the SVG. Sorry!</p>", u.className = "is-invisible";
                            const i = btoa('<?xml version="1.0" encoding="UTF-8" standalone="no"?>' + r);
                            document.getElementById("download").href = "data:application/octet-stream;base64," + i
                        }, s.readAsArrayBuffer(n)
                    };
                    document.getElementById("input").onchange = t, document.getElementById("outputwidth").onchange = t, document.getElementById("spacing").onchange = t, document.getElementById("shape").onchange = t, document.getElementById("grid").onchange = t, document.getElementById("invert").onchange = t, document.getElementById("cutpaths").onchange = t
                }))
            }
        },
        y = {};

    function _(e) {
        var t = y[e];
        if (void 0 !== t) return t.exports;
        var n = y[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return h[e](n, n.exports, _), n.loaded = !0, n.exports
    }
    _.m = h, _.c = y, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, _.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var o = Object.create(null);
        _.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var a = 2 & r && n;
            "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach((e => i[e] = () => n[e]));
        return i.default = () => n, _.d(o, i), o
    }, _.d = (e, t) => {
        for (var n in t) _.o(t, n) && !_.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, _.f = {}, _.e = e => Promise.all(Object.keys(_.f).reduce(((t, n) => (_.f[n](e, t), t)), [])), _.u = e => e + ".bundle.js", _.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), _.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), _.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "svg-halftone-web:", _.l = (e, t, o, i) => {
        if (n[e]) n[e].push(t);
        else {
            var a, c;
            if (void 0 !== o)
                for (var d = document.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                    var s = d[u];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + o) {
                        a = s;
                        break
                    }
                }
            a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, _.nc && a.setAttribute("nonce", _.nc), a.setAttribute("data-webpack", r + o), a.src = e), n[e] = [t];
            var l = (t, r) => {
                    a.onerror = a.onload = null, clearTimeout(f);
                    var o = n[e];
                    if (delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(r))), t) return t(r)
                },
                f = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: a
                }), 12e4);
            a.onerror = l.bind(null, a.onerror), a.onload = l.bind(null, a.onload), c && document.head.appendChild(a)
        }
    }, _.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        _.g.importScripts && (e = _.g.location + "");
        var t = _.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && !e;) e = n[r--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), _.p = e
    })(), (() => {
        var e = {
            179: 0
        };
        _.f.j = (t, n) => {
            var r = _.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var o = new Promise(((n, o) => r = e[t] = [n, o]));
                    n.push(r[2] = o);
                    var i = _.p + _.u(t),
                        a = new Error;
                    _.l(i, (n => {
                        if (_.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, r[1](a)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, o, [i, a, c] = n,
                    d = 0;
                if (i.some((t => 0 !== e[t]))) {
                    for (r in a) _.o(a, r) && (_.m[r] = a[r]);
                    c && c(_)
                }
                for (t && t(n); d < i.length; d++) o = i[d], _.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            n = self.webpackChunksvg_halftone_web = self.webpackChunksvg_halftone_web || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), p = {}, b = {
        448: function() {
            return {
                "./index_bg.js": {
                    __wbindgen_object_drop_ref: function(e) {
                        return void 0 === o && (o = _.c[193].exports), o.ug(e)
                    },
                    __wbg_randomFillSync_6f956029658662ec: function(e, t, n) {
                        return void 0 === i && (i = _.c[193].exports), i.GJ(e, t, n)
                    },
                    __wbg_getRandomValues_3ac1b33c90b52596: function(e, t, n) {
                        return void 0 === a && (a = _.c[193].exports), a.Cp(e, t, n)
                    },
                    __wbg_self_1c83eb4471d9eb9b: function() {
                        return void 0 === c && (c = _.c[193].exports), c.tE()
                    },
                    __wbg_crypto_c12f14e810edcaa2: function(e) {
                        return void 0 === d && (d = _.c[193].exports), d.JG(e)
                    },
                    __wbg_msCrypto_679be765111ba775: function(e) {
                        return void 0 === u && (u = _.c[193].exports), u.GZ(e)
                    },
                    __wbindgen_is_undefined: function(e) {
                        return void 0 === s && (s = _.c[193].exports), s.XP(e)
                    },
                    __wbg_static_accessor_MODULE_abf5ae284bffdf45: function() {
                        return void 0 === l && (l = _.c[193].exports), l.jQ()
                    },
                    __wbg_require_5b2b5b594d809d9f: function(e, t, n) {
                        return void 0 === f && (f = _.c[193].exports), f.bd(e, t, n)
                    },
                    __wbg_getRandomValues_05a60bf171bfc2be: function(e) {
                        return void 0 === m && (m = _.c[193].exports), m._H(e)
                    }
                }
            }
        }
    }, g = {
        249: [448]
    }, _.w = {}, _.f.wasm = function(e, t) {
        (g[e] || []).forEach((function(n, r) {
            var o = p[n];
            if (o) t.push(o);
            else {
                var i, a = b[n](),
                    c = fetch(_.p + "" + {
                        249: {
                            448: "74fdee5d1cbcda1890be"
                        }
                    }[e][n] + ".module.wasm");
                i = a && "function" == typeof a.then && "function" == typeof WebAssembly.compileStreaming ? Promise.all([WebAssembly.compileStreaming(c), a]).then((function(e) {
                    return WebAssembly.instantiate(e[0], e[1])
                })) : "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(c, a) : c.then((function(e) {
                    return e.arrayBuffer()
                })).then((function(e) {
                    return WebAssembly.instantiate(e, a)
                })), t.push(p[n] = i.then((function(e) {
                    return _.w[n] = (e.instance || e).exports
                })))
            }
        }))
    }, _(957)
})();