(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
    !function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
        } : t(e);
    }("undefined" != typeof window ? window : void 0, (function(e, t) {
        "use strict";
        var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        }, y = function e(t) {
            return null != t && t === t.window;
        }, v = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function m(e, t, n) {
            var i, o = (t = t || r).createElement("script");
            if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]);
            t.head.appendChild(o).parentNode.removeChild(o);
        }
        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
        }
        var w = function(e, t) {
            return new w.fn.init(e, t);
        }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        w.fn = w.prototype = {
            jquery: "3.3.1",
            constructor: w,
            length: 0,
            toArray: function() {
                return o.call(this);
            },
            get: function(e) {
                return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function(e) {
                var t = w.merge(this.constructor(), e);
                return t.prevObject = this, t;
            },
            each: function(e) {
                return w.each(this, e);
            },
            map: function(e) {
                return this.pushStack(w.map(this, (function(t, n) {
                    return e.call(t, n, t);
                })));
            },
            slice: function() {
                return this.pushStack(o.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: s,
            sort: n.sort,
            splice: n.splice
        }, w.extend = w.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), 
            s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
            a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
            o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a;
        }, w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function(e) {
                m(e);
            },
            each: function(e, t) {
                var n, r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [ e ] : e) : s.call(n, e)), 
                n;
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e;
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, a = e.length, s = !n; o < a; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i;
            },
            map: function(e, t, n) {
                var r, i, o = 0, s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h
        }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), 
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        }));
        function C(e) {
            var t = !!e && "length" in e && e.length, n = x(e);
            return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
        }
        var E = function(e) {
            var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
                return e === t && (f = !0), 0;
            }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
            }, re = function() {
                p();
            }, ie = me((function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
            }), {
                dir: "parentNode",
                next: "legend"
            });
            try {
                L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
            } catch (e) {
                L = {
                    apply: A.length ? function(e, t) {
                        q.apply(e, H.call(t));
                    } : function(e, t) {
                        var n = e.length, r = 0;
                        while (e[n++] = t[r++]) ;
                        e.length = n - 1;
                    }
                };
            }
            function oe(e, t, r, i) {
                var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                    if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), 
                        r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), 
                        r;
                    }
                    if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                        if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), 
                            s = (h = a(e)).length;
                            while (s--) h[s] = "#" + c + " " + ve(h[s]);
                            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                        }
                        if (v) try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id");
                        }
                    }
                }
                return u(e.replace(B, "$1"), t, r, i);
            }
            function ae() {
                var e = [];
                function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
                }
                return t;
            }
            function se(e) {
                return e[b] = !0, e;
            }
            function ue(e) {
                var t = d.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null;
                }
            }
            function le(e, t) {
                var n = e.split("|"), i = n.length;
                while (i--) r.attrHandle[n[i]] = t;
            }
            function ce(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) while (n = n.nextSibling) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function fe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
            }
            function pe(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                };
            }
            function de(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                };
            }
            function he(e) {
                return se((function(t) {
                    return t = +t, se((function(n, r) {
                        var i, o = e([], n.length, t), a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }));
                }));
            }
            function ge(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e;
            }
            n = oe.support = {}, o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }, p = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, 
                g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
                n.attributes = ue((function(e) {
                    return e.className = "i", !e.getAttribute("className");
                })), n.getElementsByTagName = ue((function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue((function(e) {
                    return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
                })), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t;
                    };
                }, r.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [ n ] : [];
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                    };
                }, r.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        }
                        return [];
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                } : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r;
                    }
                    return o;
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue((function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                    e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), 
                    e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), 
                    e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), 
                    e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                })), ue((function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 
                    2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), 
                    h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), 
                    e.querySelectorAll("*,:x"), y.push(",.*:");
                }))), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                    n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
                })), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), 
                t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                } : function(e, t) {
                    if (t) while (t = t.parentNode) if (t === e) return !0;
                    return !1;
                }, D = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                    if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                }, d) : d;
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t);
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
                } catch (e) {}
                return oe(t, d, null, [ e ]).length > 0;
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne);
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }, oe.uniqueSort = function(e) {
                var t, r = [], i = 0, o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                    while (t = e[o++]) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return c = null, e;
            }, i = oe.getText = function(e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while (t = e[r++]) n += i(t);
                return n;
            }, (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
                        "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
                        e;
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                        e[2] = n.slice(0, t)), e.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0;
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                    },
                    CLASS: function(e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                        }));
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode;
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                            if (y) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (h = [ a ? y.firstChild : y.lastChild ], a && m) {
                                    x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], 
                                    p = d && y.childNodes[d];
                                    while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [ T, d, x ];
                                        break;
                                    }
                                } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), 
                                !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ T, x ]), 
                                p === t)) break;
                                return (x -= i) === r || x % r == 0 && x / r >= 0;
                            }
                        };
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function(e, n) {
                            var r, o = i(e, t), a = o.length;
                            while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
                        })) : function(e) {
                            return i(e, 0, n);
                        }) : i;
                    }
                },
                pseudos: {
                    not: se((function(e) {
                        var t = [], n = [], r = s(e.replace(B, "$1"));
                        return r[b] ? se((function(e, t, n, i) {
                            var o, a = r(e, null, i, []), s = e.length;
                            while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                        })) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                        };
                    })),
                    has: se((function(e) {
                        return function(t) {
                            return oe(e, t).length > 0;
                        };
                    })),
                    contains: se((function(e) {
                        return e = e.replace(Z, ee), function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                        };
                    })),
                    lang: se((function(e) {
                        return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), 
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        };
                    })),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function(e) {
                        return e === h;
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected;
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function(e) {
                        return Y.test(e.nodeName);
                    },
                    input: function(e) {
                        return G.test(e.nodeName);
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t;
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he((function() {
                        return [ 0 ];
                    })),
                    last: he((function(e, t) {
                        return [ t - 1 ];
                    })),
                    eq: he((function(e, t, n) {
                        return [ n < 0 ? n + t : n ];
                    })),
                    even: he((function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    })),
                    odd: he((function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    })),
                    lt: he((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    })),
                    gt: he((function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }))
                }
            }).pseudos.nth = r.pseudos.eq;
            for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
            for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);
            function ye() {}
            ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
                var n, i, o, a, s, u, l, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, u = [], l = r.preFilter;
                while (s) {
                    n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                    n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length));
                    for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            };
            function ve(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r;
            }
            function me(e, t, n) {
                var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                } : function(t, n, u) {
                    var l, c, f, p = [ T, s ];
                    if (u) {
                        while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), 
                    c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                        if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                    return !1;
                };
            }
            function xe(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--) if (!e[i](t, n, r)) return !1;
                    return !0;
                } : e[0];
            }
            function be(e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                return n;
            }
            function we(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
                l && t.push(s)));
                return a;
            }
            function Te(e, t, n, r, i, o) {
                return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se((function(o, a, s, u) {
                    var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                    if (n && n(y, v, s, u), r) {
                        l = we(v, d), r(l, [], s, u), c = l.length;
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                l = [], c = v.length;
                                while (c--) (f = v[c]) && l.push(y[c] = f);
                                i(null, v = [], l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
                }));
            }
            function Ce(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me((function(e) {
                    return e === t;
                }), s, !0), f = me((function(e) {
                    return O(t, e) > -1;
                }), s, !0), p = [ function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i;
                } ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ me(xe(p), n) ]; else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }
                    p.push(n);
                }
                return xe(p);
            }
            function Ee(e, t) {
                var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
                    var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++]) if (y(f, a || d, s)) {
                                u.push(f);
                                break;
                            }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && (T = E, l = w), x;
                };
                return n ? se(o) : o;
            }
            return s = oe.compile = function(e, t) {
                var n, r = [], i = [], o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), n = t.length;
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }, u = oe.select = function(e, t, n, i) {
                var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
                if (n = n || [], 1 === d.length) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (l = u[o], r.relative[c = l.type]) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
            }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, 
            p(), n.sortDetached = ue((function(e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })), ue((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
            })) || le("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            })), n.attributes && ue((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            })) || le("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            })), ue((function(e) {
                return null == e.getAttribute("disabled");
            })) || le(P, (function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            })), oe;
        }(e);
        w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, 
        w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
        var k = function(e, t, n) {
            var r = [], i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;
                r.push(e);
            }
            return r;
        }, S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }, D = w.expr.match.needsContext;
        function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e, t, n) {
            return g(t) ? w.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n;
            })) : t.nodeType ? w.grep(e, (function(e) {
                return e === t !== n;
            })) : "string" != typeof t ? w.grep(e, (function(e) {
                return u.call(t, e) > -1 !== n;
            })) : w.filter(t, e, n);
        }
        w.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [ r ] : [] : w.find.matches(e, w.grep(t, (function(e) {
                return 1 === e.nodeType;
            })));
        }, w.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e) return this.pushStack(w(e).filter((function() {
                    for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                })));
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            }
        });
        var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (w.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || q, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), 
                    A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this;
                }
                return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
        }).prototype = w.fn, q = w(r);
        var H = /^(?:parents|prev(?:Until|All))/, O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        w.fn.extend({
            has: function(e) {
                var t = w(e, this), n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
                }));
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
                if (!D.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                }
                return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
            },
            index: function(e) {
                return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(e, t) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
        });
        function P(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType) ;
            return e;
        }
        w.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
                return k(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function(e) {
                return P(e, "nextSibling");
            },
            prev: function(e) {
                return P(e, "previousSibling");
            },
            nextAll: function(e) {
                return k(e, "nextSibling");
            },
            prevAll: function(e) {
                return k(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function(e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
                return S(e.firstChild);
            },
            contents: function(e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), 
                w.merge([], e.childNodes));
            }
        }, (function(e, t) {
            w.fn[e] = function(n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 
                this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }));
        var M = /[^\x20\t\r\n\f]+/g;
        function R(e) {
            var t = {};
            return w.each(e.match(M) || [], (function(e, n) {
                t[n] = !0;
            })), t;
        }
        w.Callbacks = function(e) {
            e = "string" == typeof e ? R(e) : w.extend({}, e);
            var t, n, r, i, o = [], a = [], s = -1, u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
                    n = !1);
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
            }, l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, (function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                        }));
                    }(arguments), n && !t && u()), this;
                },
                remove: function() {
                    return w.each(arguments, (function(e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                    })), this;
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function() {
                    return o && (o = []), this;
                },
                disable: function() {
                    return i = a = [], o = n = "", this;
                },
                disabled: function() {
                    return !o;
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this;
                },
                locked: function() {
                    return !!i;
                },
                fireWith: function(e, n) {
                    return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                    this;
                },
                fire: function() {
                    return l.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!r;
                }
            };
            return l;
        };
        function I(e) {
            return e;
        }
        function W(e) {
            throw e;
        }
        function $(e, t, n, r) {
            var i;
            try {
                e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
            } catch (e) {
                n.apply(void 0, [ e ]);
            }
        }
        w.extend({
            Deferred: function(t) {
                var n = [ [ "notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2 ], [ "resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                    state: function() {
                        return r;
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return i.then(null, e);
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred((function(t) {
                            w.each(n, (function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]]((function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [ e ] : arguments);
                                }));
                            })), e = null;
                        })).promise();
                    },
                    then: function(t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function() {
                                var s = this, u = arguments, l = function() {
                                    var e, l;
                                    if (!(t < o)) {
                                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                        l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, 
                                        l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, 
                                        u = [ e ]), (i || n.resolveWith)(s, u));
                                    }
                                }, c = i ? l : function() {
                                    try {
                                        l();
                                    } catch (e) {
                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, 
                                        u = [ e ]), n.rejectWith(s, u));
                                    }
                                };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), 
                                e.setTimeout(c));
                            };
                        }
                        return w.Deferred((function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), 
                            n[2][3].add(a(0, e, g(r) ? r : W));
                        })).promise();
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i;
                    }
                }, o = {};
                return w.each(n, (function(e, t) {
                    var a = t[2], s = t[5];
                    i[t[1]] = a.add, s && a.add((function() {
                        r = s;
                    }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), 
                    o[t[0]] = function() {
                        return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                    }, o[t[0] + "With"] = a.fireWith;
                })), i.promise(o), t && t.call(o, o), o;
            },
            when: function(e) {
                var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                    };
                };
                if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                while (n--) $(i[n], s(n), a.reject);
                return a.promise();
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
        }, w.readyException = function(t) {
            e.setTimeout((function() {
                throw t;
            }));
        };
        var F = w.Deferred();
        w.fn.ready = function(e) {
            return F.then(e)["catch"]((function(e) {
                w.readyException(e);
            })), this;
        }, w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [ w ]));
            }
        }), w.ready.then = F.then;
        function _() {
            r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), 
            w.ready();
        }
        "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), 
        e.addEventListener("load", _));
        var z = function(e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, 
            t = function(e, t, n) {
                return l.call(w(e), n);
            })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        }, X = /^-ms-/, U = /-([a-z])/g;
        function V(e, t) {
            return t.toUpperCase();
        }
        function G(e) {
            return e.replace(X, "ms-").replace(U, V);
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function Q() {
            this.expando = w.expando + Q.uid++;
        }
        Q.uid = 1, Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t;
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                void 0 !== n ? n : t);
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [ t ] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            }
        };
        var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
        function te(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
        }
        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), 
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
            return n;
        }
        w.extend({
            hasData: function(e) {
                return K.hasData(e) || J.hasData(e);
            },
            data: function(e, t, n) {
                return K.access(e, t, n);
            },
            removeData: function(e, t) {
                K.remove(e, t);
            },
            _data: function(e, t, n) {
                return J.access(e, t, n);
            },
            _removeData: function(e, t) {
                J.remove(e, t);
            }
        }), w.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), 
                        ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e ? this.each((function() {
                    K.set(this, e);
                })) : z(this, (function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (void 0 !== (n = K.get(o, e))) return n;
                        if (void 0 !== (n = ne(o, e))) return n;
                    } else this.each((function() {
                        K.set(this, e, t);
                    }));
                }), null, t, arguments.length > 1, null, !0);
            },
            removeData: function(e) {
                return this.each((function() {
                    K.remove(this, e);
                }));
            }
        }), w.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), 
                r || [];
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function() {
                    w.dequeue(e, t);
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
                delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: w.Callbacks("once memory").add((function() {
                        J.remove(e, [ t + "queue", n ]);
                    }))
                });
            }
        }), w.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = w.queue(this, e, t);
                    w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                }));
            },
            dequeue: function(e) {
                return this.each((function() {
                    w.dequeue(this, e);
                }));
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [ o ]);
                };
                "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = [ "Top", "Right", "Bottom", "Left" ], ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
        }, se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
        function ue(e, t, n, r) {
            var i, o, a = 20, s = r ? function() {
                return r.cur();
            } : function() {
                return w.css(e, t, "");
            }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
            if (c && c[3] !== l) {
                u /= 2, l = l || c[3], c = +u || 1;
                while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
                c /= o;
                c *= 2, w.style(e, t, c + l), n = n || [];
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
            r.start = c, r.end = i)), i;
        }
        var le = {};
        function ce(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), 
            t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
        }
        function fe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
            t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), 
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", 
            J.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
        }
        w.fn.extend({
            show: function() {
                return fe(this, !0);
            },
            hide: function() {
                return fe(this);
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    ae(this) ? w(this).show() : w(this).hide();
                }));
            }
        });
        var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
        ge.th = ge.td;
        function ye(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
            void 0 === t || t && N(e, t) ? w.merge([ e ], n) : n;
        }
        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
        var me = /<|&#?\w+;/;
        function xe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
                u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
                while (c--) a = a.lastChild;
                w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
            f.textContent = "", d = 0;
            while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), 
            a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;
                while (o = a[c++]) he.test(o.type || "") && n.push(o);
            }
            return f;
        }
        !function() {
            var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
            e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
            e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
        }();
        var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
        function Ee() {
            return !0;
        }
        function ke() {
            return !1;
        }
        function Se() {
            try {
                return r.activeElement;
            } catch (e) {}
        }
        function De(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) De(e, s, n, r, t[s], o);
                return e;
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
            r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return w().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = w.guid++)), e.each((function() {
                w.event.add(this, t, i, r, n);
            }));
        }
        w.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
                if (y) {
                    n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), 
                    n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                        return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                    }), l = (t = (t || "").match(M) || [ "" ]).length;
                    while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                    d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                    f = w.event.special[d] || {}, c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                    w.event.global[d] = !0);
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
                if (y && (u = y.events)) {
                    l = (t = (t || "").match(M) || [ "" ]).length;
                    while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                    d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                        c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), 
                        delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                    w.isEmptyObject(u) && J.remove(e, "handle events");
                }
            },
            dispatch: function(e) {
                var n, r, i, o, a, s, t = w.event.fix(e), u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
                for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
                if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    s = w.event.handlers.call(this, t, l), n = 0;
                    while ((o = s[n++]) && !t.isPropagationStopped()) {
                        t.currentTarget = o.elem, r = 0;
                        while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
                        t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), 
                        t.stopPropagation()));
                    }
                    return c.postDispatch && c.postDispatch.call(this, t), t.result;
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [ l ]).length), 
                    a[i] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    });
                }
                return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s;
            },
            addProp: function(e, t) {
                Object.defineProperty(w.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: g(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent);
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        });
                    }
                });
            },
            fix: function(e) {
                return e[w.expando] ? e : new w.Event(e);
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Se() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Se() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), 
                        !1;
                    },
                    _default: function(e) {
                        return N(e.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                    }
                }
            }
        }, w.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }, w.Event = function(e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, 
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
            this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
            t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
        }, w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), 
                this.stopPropagation();
            }
        }, w.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
            }
        }, w.event.addProp), w.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function(e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                    e.type = t), n;
                }
            };
        })), w.fn.extend({
            on: function(e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function(e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), 
                this.each((function() {
                    w.event.remove(this, e, n, t);
                }));
            }
        });
        var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Le(e, t) {
            return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
        }
        function He(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
        }
        function Oe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
            e;
        }
        function Pe(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
                }
                K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
            }
        }
        function Me(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
        }
        function Re(e, t, n, r) {
            t = a.apply([], t);
            var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
            if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each((function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            }));
            if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), 
            o || r)) {
                for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), 
                u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
                if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], 
                he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
            }
            return e;
        }
        function Ie(e, t, n) {
            for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), 
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
            return e;
        }
        w.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ne, "<$1></$2>");
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
                if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), 
                r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
                if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
                return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
            },
            cleanData: function(e) {
                for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
            }
        }), w.fn.extend({
            detach: function(e) {
                return Ie(this, e, !0);
            },
            remove: function(e) {
                return Ie(this, e);
            },
            text: function(e) {
                return z(this, (function(e) {
                    return void 0 === e ? w.text(this) : this.empty().each((function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                    }));
                }), null, e, arguments.length);
            },
            append: function() {
                return Re(this, arguments, (function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
                }));
            },
            prepend: function() {
                return Re(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                }));
            },
            before: function() {
                return Re(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                }));
            },
            after: function() {
                return Re(this, arguments, (function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                }));
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), 
                e.textContent = "");
                return this;
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                    return w.clone(this, e, t);
                }));
            },
            html: function(e) {
                return z(this, (function(e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                        e = w.htmlPrefilter(e);
                        try {
                            for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), 
                            t.innerHTML = e);
                            t = 0;
                        } catch (e) {}
                    }
                    t && this.empty().append(e);
                }), null, e, arguments.length);
            },
            replaceWith: function() {
                var e = [];
                return Re(this, arguments, (function(t) {
                    var n = this.parentNode;
                    w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                }), e);
            }
        }), w.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function(e, t) {
            w.fn[e] = function(e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
                w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        }));
        var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t);
        }, Be = new RegExp(oe.join("|"), "i");
        !function() {
            function t() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                    be.appendChild(l).appendChild(c);
                    var t = e.getComputedStyle(c);
                    i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), 
                    o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", 
                    be.removeChild(l), c = null;
                }
            }
            function n(e) {
                return Math.round(parseFloat(e));
            }
            var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
            h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
                boxSizingReliable: function() {
                    return t(), o;
                },
                pixelBoxStyles: function() {
                    return t(), s;
                },
                pixelPosition: function() {
                    return t(), i;
                },
                reliableMarginLeft: function() {
                    return t(), u;
                },
                scrollboxSize: function() {
                    return t(), a;
                }
            }));
        }();
        function Fe(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), 
            !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, 
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
            s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
        }
        function _e(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                }
            };
        }
        var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Ge = [ "Webkit", "Moz", "ms" ], Ye = r.createElement("div").style;
        function Qe(e) {
            if (e in Ye) return e;
            var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
            while (n--) if ((e = Ge[n] + t) in Ye) return e;
        }
        function Je(e) {
            var t = w.cssProps[e];
            return t || (t = w.cssProps[e] = Qe(e) || e), t;
        }
        function Ke(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function Ze(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0, s = 0, u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (;a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), 
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), 
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), 
            u;
        }
        function et(e, t, n) {
            var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o;
            if (We.test(i)) {
                if (!n) return i;
                i = "auto";
            }
            return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], 
            a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
        }
        w.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Fe(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                    if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), 
                    null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), 
                    h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                    a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = G(t);
                return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
                void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), 
                !0 === n || isFinite(o) ? o || 0 : i) : i;
            }
        }), w.each([ "height", "width" ], (function(e, t) {
            w.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, (function() {
                        return et(e, t, r);
                    }));
                },
                set: function(e, n, r) {
                    var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                    return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), 
                    s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), 
                    Ke(e, n, s);
                }
            };
        })), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, (function(e, t) {
            if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left;
            }))) + "px";
        })), w.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function(e, t) {
            w.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                }
            }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
        })), w.fn.extend({
            css: function(e, t) {
                return z(this, (function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                        return o;
                    }
                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                }), e, t, arguments.length > 1);
            }
        });
        function tt(e, t, n, r, i) {
            return new tt.prototype.init(e, t, n, r, i);
        }
        w.Tween = tt, tt.prototype = {
            constructor: tt,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, 
                this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
            },
            cur: function() {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function(e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
            }
        }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function(e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
                }
            }
        }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
        }, w.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
        }, w.fx = tt.prototype.init, w.fx.step = {};
        var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
        function at() {
            rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), 
            w.fx.tick());
        }
        function st() {
            return e.setTimeout((function() {
                nt = void 0;
            })), nt = Date.now();
        }
        function ut(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
        }
        function lt(e, t, n) {
            for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
        }
        function ct(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
            n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, 
            a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, p.always((function() {
                p.always((function() {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                }));
            })));
            for (r in t) if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = y && y[r] || w.style(e, r);
            }
            if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([ e ], !0), 
                l = e.style.display || l, c = w.css(e, "display"), fe([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done((function() {
                    h.display = l;
                })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                n.overflow && (h.overflow = "hidden", p.always((function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                }))), u = !1;
                for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !g), g && fe([ e ], !0), p.done((function() {
                    g || fe([ e ]), J.remove(e, "fxshow");
                    for (r in d) w.style(e, r, d[r]);
                }))), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, 
                u.start = 0));
            }
        }
        function ft(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
            n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
        }
        function pt(e, t, n) {
            var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always((function() {
                delete u.elem;
            })), u = function() {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
                s.resolveWith(e, [ l ]), !1);
            }, l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function(t) {
                    var n = 0, r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                    this;
                }
            }), c = l.props;
            for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
            r;
            return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
            w.fx.timer(w.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l;
        }
        w.Animation = w.extend(pt, {
            tweeners: {
                "*": [ function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                } ]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = [ "*" ]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], 
                pt.tweeners[n].unshift(t);
            },
            prefilters: [ ct ],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            }
        }), w.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), 
            null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
            }, r;
        }, w.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r);
            },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function() {
                    var t = pt(this, w.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0);
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
                this.each((function() {
                    var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                    t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e);
                }));
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                    t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                    o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                }));
            }
        }), w.each([ "toggle", "show", "hide" ], (function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        })), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r);
            };
        })), w.timers = [], w.fx.tick = function() {
            var e, t = 0, n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0;
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start();
        }, w.fx.interval = 13, w.fx.start = function() {
            rt || (rt = !0, at());
        }, w.fx.stop = function() {
            rt = null;
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, (function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i);
                };
            }));
        }, function() {
            var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", 
            e.type = "radio", h.radioValue = "t" === e.value;
        }();
        var dt, ht = w.expr.attrHandle;
        w.fn.extend({
            attr: function(e, t) {
                return z(this, w.attr, e, t, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each((function() {
                    w.removeAttr(this, e);
                }));
            }
        }), w.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), 
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(M);
                if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
            }
        }), dt = {
            set: function(e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
        }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), 
                i;
            };
        }));
        var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
        w.fn.extend({
            prop: function(e, t) {
                return z(this, w.prop, e, t, arguments.length > 1);
            },
            removeProp: function(e) {
                return this.each((function() {
                    delete this[w.propFix[e] || e];
                }));
            }
        }), w.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, 
                i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), h.optSelected || (w.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
        }), w.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
            w.propFix[this.toLowerCase()] = this;
        }));
        function vt(e) {
            return (e.match(M) || []).join(" ");
        }
        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || "";
        }
        function xt(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
        }
        w.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (g(e)) return this.each((function(t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                }));
                if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = vt(r)) && n.setAttribute("class", s);
                }
                return this;
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (g(e)) return this.each((function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                    i !== (s = vt(r)) && n.setAttribute("class", s);
                }
                return this;
            },
            toggleClass: function(e, t) {
                var n = typeof e, r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each((function(n) {
                    w(this).toggleClass(e.call(this, n, mt(this), t), t);
                })) : this.each((function() {
                    var t, i, o, a;
                    if (r) {
                        i = 0, o = w(this), a = xt(e);
                        while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), 
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                }));
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
            }
        });
        var bt = /\r/g;
        w.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                if (arguments.length) return r = g(e), this.each((function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, (function(e) {
                        return null == e ? "" : e + "";
                    }))), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                }));
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        }), w.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t);
                        }
                        return s;
                    },
                    set: function(e, t) {
                        var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    }
                }
            }
        }), w.each([ "radio", "checkbox" ], (function() {
            w.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
                }
            }, h.checkOn || (w.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            });
        })), h.focusin = "onfocusin" in e;
        var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
            e.stopPropagation();
        };
        w.extend(w.event, {
            trigger: function(t, n, i, o) {
                var a, s, u, l, c, p, d, h, v = [ i || r ], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), 
                x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), 
                t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : w.makeArray(n, [ t ]), 
                d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!o && !d.noBubble && !y(i)) {
                        for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), 
                        u = s;
                        u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                    }
                    a = 0;
                    while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, 
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), 
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                    return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), 
                    w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), 
                    t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, 
                    u && (i[c] = u)), t.result;
                }
            },
            simulate: function(e, t, n) {
                var r = w.extend(new w.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                w.event.trigger(r, null, t);
            }
        }), w.fn.extend({
            trigger: function(e, t) {
                return this.each((function() {
                    w.event.trigger(e, t, this);
                }));
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            }
        }), h.focusin || w.each({
            focus: "focusin",
            blur: "focusout"
        }, (function(e, t) {
            var n = function(e) {
                w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this, i = J.access(r, t);
                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                },
                teardown: function() {
                    var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                }
            };
        }));
        var Ct = e.location, Et = Date.now(), kt = /\?/;
        w.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml");
            } catch (e) {
                n = void 0;
            }
            return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), 
            n;
        };
        var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
        function jt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) w.each(t, (function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            })); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
        }
        w.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
            if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, (function() {
                i(this.name, this.value);
            })); else for (n in e) jt(n, e[n], t, i);
            return r.join("&");
        }, w.fn.extend({
            serialize: function() {
                return w.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map((function() {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })).filter((function() {
                    var e = this.type;
                    return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                })).map((function(e, t) {
                    var n = w(this).val();
                    return null == n ? null : Array.isArray(n) ? w.map(n, (function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, "\r\n")
                        };
                    })) : {
                        name: t.name,
                        value: n.replace(Dt, "\r\n")
                    };
                })).get();
            }
        });
        var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
        Bt.href = Ct.href;
        function Ft(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(M) || [];
                if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
        }
        function _t(e, t, n, r) {
            var i = {}, o = e === Wt;
            function a(s) {
                var u;
                return i[s] = !0, w.each(e[s] || [], (function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                    a(l), !1);
                })), u;
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*");
        }
        function zt(e, t) {
            var n, r, i = w.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && w.extend(!0, e, r), e;
        }
        function Xt(e, t, n) {
            var r, i, o, a, s = e.contents, u = e.dataTypes;
            while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
            }
            if (u[0] in n) o = u[0]; else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                    }
                    a || (a = i);
                }
                o = o || a;
            }
            if (o) return o !== u[0] && u.unshift(o), n[o];
        }
        function Ut(e, t, n, r) {
            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            o = c.shift();
            while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
            u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                    break;
                }
                if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                    t = a(t);
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    };
                }
            }
            return {
                state: "success",
                data: t
            };
        }
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Pt.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": w.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(It),
            ajaxTransport: Ft(Wt),
            ajax: function(t, n) {
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null;
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), 
                        this;
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                        return this;
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    }
                };
                if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), 
                h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [ "" ], 
                null == h.crossDomain) {
                    l = r.createElement("a");
                    try {
                        l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), 
                _t(It, h, n, E), c) return E;
                (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), 
                h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), 
                h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, 
                delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), 
                h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), 
                w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), 
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                    if (E.readyState = 1, f && y.trigger("ajaxSend", [ E, h ]), c) return E;
                    h.async && h.timeout > 0 && (u = e.setTimeout((function() {
                        E.abort("timeout");
                    }), h.timeout));
                    try {
                        c = !1, i.send(b, k);
                    } catch (e) {
                        if (c) throw e;
                        k(-1, e);
                    }
                } else k(-1, "No Transport");
                function k(t, n, r, s) {
                    var l, p, d, b, T, C = n;
                    c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, 
                    l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), 
                    l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), 
                    (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                    p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                    E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [ p, C, E ]) : v.rejectWith(g, [ E, C, d ]), 
                    E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [ E, h, l ? p : d ]), 
                    m.fireWith(g, [ E, C ]), f && (y.trigger("ajaxComplete", [ E, h ]), --w.active || w.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function(e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return w.get(e, void 0, t, "script");
            }
        }), w.each([ "get", "post" ], (function(e, t) {
            w[t] = function(e, n, r, i) {
                return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, w.isPlainObject(e) && e));
            };
        })), w._evalUrl = function(e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            });
        }, w.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), 
                this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e;
                })).append(this)), this;
            },
            wrapInner: function(e) {
                return g(e) ? this.each((function(t) {
                    w(this).wrapInner(e.call(this, t));
                })) : this.each((function() {
                    var t = w(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                }));
            },
            wrap: function(e) {
                var t = g(e);
                return this.each((function(n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                }));
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each((function() {
                    w(this).replaceWith(this.childNodes);
                })), this;
            }
        }), w.expr.pseudos.hidden = function(e) {
            return !w.expr.pseudos.visible(e);
        }, w.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }, w.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest;
            } catch (e) {}
        };
        var Vt = {
            0: 200,
            1223: 204
        }, Gt = w.ajaxSettings.xhr();
        h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport((function(t) {
            var n, r;
            if (h.cors || Gt && !t.crossDomain) return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()));
                        };
                    }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout((function() {
                            n && r();
                        }));
                    }, n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null);
                    } catch (e) {
                        if (n) throw e;
                    }
                },
                abort: function() {
                    n && n();
                }
            };
        })), w.ajaxPrefilter((function(e) {
            e.crossDomain && (e.contents.script = !1);
        })), w.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return w.globalEval(e), e;
                }
            }
        }), w.ajaxPrefilter("script", (function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        })), w.ajaxTransport("script", (function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, o) {
                        t = w("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                        }), r.head.appendChild(t[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            }
        }));
        var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Yt.pop() || w.expando + "_" + Et++;
                return this[e] = !0, e;
            }
        }), w.ajaxPrefilter("json jsonp", (function(t, n, r) {
            var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"), a[0];
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                a = arguments;
            }, r.always((function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
                Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
            })), "script";
        })), h.createHTMLDocument = function() {
            var e = r.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
        }(), w.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, o, a;
            return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, 
            t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [ t.createElement(o[1]) ] : (o = xe([ e ], t, a), 
            a && a.length && w(a).remove(), w.merge([], o.childNodes));
        }, w.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
            a.length > 0 && w.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done((function(e) {
                o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })).always(n && function(e, t) {
                a.each((function() {
                    n.apply(this, o || [ e.responseText, t, e ]);
                }));
            }), this;
        }, w.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
            w.fn[t] = function(e) {
                return this.on(t, e);
            };
        })), w.expr.pseudos.animated = function(e) {
            return w.grep(w.timers, (function(t) {
                return e === t.elem;
            })).length;
        }, w.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c = w.css(e, "position"), f = w(e), p = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), 
                u = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = f.position()).top, 
                i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), 
                null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 
                "using" in t ? t.using.call(e, p) : f.css(p);
            }
        }, w.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                    w.offset.setOffset(this, e, t);
                }));
                var t, n, r = this[0];
                if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                };
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
                        t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), 
                        i.left += w.css(e, "borderLeftWidth", !0));
                    }
                    return {
                        top: t.top - i.top - w.css(r, "marginTop", !0),
                        left: t.left - i.left - w.css(r, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map((function() {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                }));
            }
        }), w.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function(e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function(r) {
                return z(this, (function(e, r, i) {
                    var o;
                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
                }), e, r, arguments.length);
            };
        })), w.each([ "top", "left" ], (function(e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, (function(e, n) {
                if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
            }));
        })), w.each({
            Height: "height",
            Width: "width"
        }, (function(e, t) {
            w.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function(n, r) {
                w.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(this, (function(t, n, i) {
                        var o;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                        Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                    }), t, a ? i : void 0, a);
                };
            }));
        })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
            w.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        })), w.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            }
        }), w.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            }
        }), w.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)));
            }, i.guid = e.guid = e.guid || w.guid++, i;
        }, w.holdReady = function(e) {
            e ? w.readyWait++ : w.ready(!0);
        }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, 
        w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }, "function" == typeof define && define.amd && define("jquery", [], (function() {
            return w;
        }));
        var Jt = e.jQuery, Kt = e.$;
        return w.noConflict = function(t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }, t || (e.jQuery = e.$ = w), w;
    }));
    !function(i) {
        "use strict";
        "function" == typeof define && define.amd ? define([ "jquery" ], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
    }((function(i) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(t, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: i(t),
                    appendDots: i(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return i('<button type="button" />').text(t + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, 
                n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, 
                n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, 
                n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, 
                n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, 
                n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), 
                n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", 
                n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", 
                n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), 
                n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), 
                n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), 
                n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), 
                n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), 
                n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
                n.registerBreakpoints(), n.init(!0);
            };
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            });
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
            var s = this;
            if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), 
            s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), 
            s.$slideTrack.append(s.$slides), s.$slides.each((function(e, t) {
                i(t).attr("data-slick-index", e);
            })), s.$slidesCache = s.$slides, s.reinit();
        }, e.prototype.animateHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: e
                }, i.options.speed);
            }
        }, e.prototype.animateSlide = function(e, t) {
            var o = {}, s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), 
            !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), 
            i({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(i) {
                    i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", 
                    s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
                },
                complete: function() {
                    t && t.call();
                }
            })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", 
            s.$slideTrack.css(o), t && setTimeout((function() {
                s.disableTransition(), t.call();
            }), s.options.speed));
        }, e.prototype.getNavTarget = function() {
            var e = this, t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }, e.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each((function() {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0);
            }));
        }, e.prototype.applyTransition = function(i) {
            var e = this, t = {};
            !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, 
            !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }, e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
        }, e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }, e.prototype.autoPlayIterator = function() {
            var i = this, e = i.currentSlide + i.options.slidesToScroll;
            i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, 
            i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), 
            e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
            e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), 
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), 
            !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }));
        }, e.prototype.buildDots = function() {
            var e, t, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), 
                e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
            e.slideCount = e.$slides.length, e.$slides.each((function(e, t) {
                i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
            })), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), 
            e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), 
            !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), 
            i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), 
            e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), 
            !0 === e.options.draggable && e.$list.addClass("draggable");
        }, e.prototype.buildRows = function() {
            var i, e, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o), l.$slider.children().children().children().css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                });
            }
        }, e.prototype.checkResponsive = function(e, t) {
            var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), 
            r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, 
                "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), 
                !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, 
                "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), 
                !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, 
                r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), 
                r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [ r, l ]);
            }
        }, e.prototype.changeSlide = function(e, t) {
            var o, s, n, r = this, l = i(e.currentTarget);
            switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, 
            o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
              case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;

              case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;

              case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;

              default:
                return;
            }
        }, e.prototype.checkNavigable = function(i) {
            var e, t;
            if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break;
                }
                t = e[o];
            }
            return i;
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), 
            !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), 
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), 
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), 
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), 
            e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), 
            e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), 
            i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), 
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), 
            i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), 
            i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), 
            i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }, e.prototype.cleanUpRows = function() {
            var i, e = this;
            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), 
            e.$slider.empty().append(i));
        }, e.prototype.clickHandler = function(i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
        }, e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), 
            t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                i(this).attr("style", i(this).data("originalStyling"));
            })), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), 
            t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), 
            t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), 
            t.unslicked = !0, e || t.$slider.trigger("destroy", [ t ]);
        }, e.prototype.disableTransition = function(i) {
            var e = this, t = {};
            t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }, e.prototype.fadeSlide = function(i, e) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                zIndex: t.options.zIndex
            }), t.$slides.eq(i).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }), e && setTimeout((function() {
                t.disableTransition(i), e.call();
            }), t.options.speed));
        }, e.prototype.fadeSlideOut = function(i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }));
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
            var e = this;
            null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
            e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(t) {
                t.stopImmediatePropagation();
                var o = i(this);
                setTimeout((function() {
                    e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
                }), 0);
            }));
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide;
        }, e.prototype.getDotCount = function() {
            var i = this, e = 0, t = 0, o = 0;
            if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (;e < i.slideCount; ) ++o, 
            e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (;e < i.slideCount; ) ++o, 
            e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1;
        }, e.prototype.getLeft = function(i) {
            var e, t, o, s, n = this, r = 0;
            return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, 
            s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), 
            r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, 
            r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, 
            r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, 
            r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, 
            r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, 
            n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, 
            !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), 
            e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
            !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), 
            e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, 
            e += (n.$list.width() - o.outerWidth()) / 2)), e;
        }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
            return this.options[i];
        }, e.prototype.getNavigableIndexes = function() {
            var i, e = this, t = 0, o = 0, s = [];
            for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, 
            o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i; ) s.push(t), t = o + e.options.slidesToScroll, 
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s;
        }, e.prototype.getSlick = function() {
            return this;
        }, e.prototype.getSlideCount = function() {
            var e, t, o = this;
            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, 
            !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(s, n) {
                if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
            })), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
        }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, e);
        }, e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), 
            t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), 
            t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [ t ]), 
            !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, 
            t.autoPlay());
        }, e.prototype.initADA = function() {
            var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter((function(i) {
                return i >= 0 && i < e.slideCount;
            }));
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(t) {
                var s = o.indexOf(t);
                i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }), -1 !== s && i(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + s
                });
            })), e.$dots.attr("role", "tablist").find("li").each((function(s) {
                var n = o[s];
                i(this).attr({
                    role: "presentation"
                }), i(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1"
                });
            })).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }, e.prototype.initArrowEvents = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), 
            i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), 
            !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), 
            e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), 
            !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
            i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), 
            i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), 
            i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
        }, e.prototype.initUI = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), 
            i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
        }, e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }));
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each((function() {
                    var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, (function() {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, (function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                            })), n.$slider.trigger("lazyLoaded", [ n, e, t ]);
                        }));
                    }, r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                        n.$slider.trigger("lazyLoadError", [ n, e, t ]);
                    }, r.src = t;
                }));
            }
            var t, o, s, n = this;
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), 
            s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, 
            s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, 
            s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), 
            t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
            e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
        }, e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(), i.$slideTrack.css({
                opacity: 1
            }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            });
        }, e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(), i.paused = !0;
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
        }, e.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), 
            t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), 
            t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            });
        }, e.prototype.preventDefault = function(i) {
            i.preventDefault();
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
            d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), 
            (r = document.createElement("img")).onload = function() {
                s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), 
                !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [ l, t, o ]), 
                l.progressiveLazyLoad();
            }, r.onerror = function() {
                e < 3 ? setTimeout((function() {
                    l.progressiveLazyLoad(e + 1);
                }), 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                l.$slider.trigger("lazyLoadError", [ l, t, o ]), l.progressiveLazyLoad());
            }, r.src = o) : l.$slider.trigger("allImagesLoaded", [ l ]);
        }, e.prototype.refresh = function(e) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), 
            s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, 
            s.destroy(!0), i.extend(s, s.initials, {
                currentSlide: t
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1);
        }, e.prototype.registerBreakpoints = function() {
            var e, t, o, s = this, n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), 
                    o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
                }
                s.breakpoints.sort((function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                }));
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, 
            e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), 
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), 
            e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), 
            e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), 
            e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), 
            e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), 
            e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [ e ]);
        }, e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function() {
                e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
            }), 50));
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
            var o = this;
            if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, 
            o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
            o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), 
            o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
            o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
        }, e.prototype.setCSS = function(i) {
            var e, t, o = this, s = {};
            !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", 
            t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, 
            !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", 
            o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", 
            o.$slideTrack.css(s)));
        }, e.prototype.setDimensions = function() {
            var i = this;
            !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), 
            !0 === i.options.centerMode && i.$list.css({
                padding: i.options.centerPadding + " 0px"
            })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), 
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), 
            i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }, e.prototype.setFade = function() {
            var e, t = this;
            t.$slides.each((function(o, s) {
                e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                }) : i(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                });
            })), t.$slides.eq(t.currentSlide).css({
                zIndex: t.options.zIndex - 1,
                opacity: 1
            });
        }, e.prototype.setHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, t, o, s, n, r = this, l = !1;
            if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], 
            s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), 
            "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, (function(i, e) {
                r.options[i] = e;
            })); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [ s[t] ]; else {
                for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), 
                e--;
                r.options.responsive.push(s[t]);
            }
            l && (r.unload(), r.reinit());
        }, e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), 
            i.$slider.trigger("setPosition", [ i ]);
        }, e.prototype.setProps = function() {
            var i = this, e = document.body.style;
            i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), 
            void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), 
            i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), 
            void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", 
            i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
            void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", 
            i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), 
            void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", 
            i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), 
            void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", 
            i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), 
            void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", 
            i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
        }, e.prototype.setSlideClasses = function(i) {
            var e, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
            n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, 
                t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
                0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), 
                n.$slides.eq(i).addClass("slick-center");
            } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, 
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
        }, e.prototype.setupInfinite = function() {
            var e, t, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, 
            s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, 
                e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                    i(this).attr("id", "");
                }));
            }
        }, e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(), e.interrupted = i;
        }, e.prototype.selectHandler = function(e) {
            var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
            s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
        }, e.prototype.slideHandler = function(i, e, t) {
            var o, s, n, r, l, d = null, a = this;
            if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), 
            o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, 
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
            !0 !== t ? a.animateSlide(r, (function() {
                a.postSlide(o);
            })) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, 
            !0 !== t ? a.animateSlide(r, (function() {
                a.postSlide(o);
            })) : a.postSlide(o)); else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, 
                a.animating = !0, a.$slider.trigger("beforeChange", [ a, a.currentSlide, s ]), n = a.currentSlide, 
                a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), 
                a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), 
                a.fadeSlide(s, (function() {
                    a.postSlide(s);
                }))) : a.postSlide(s), void a.animateHeight();
                !0 !== t ? a.animateSlide(d, (function() {
                    a.postSlide(s);
                })) : a.postSlide(s);
            }
        }, e.prototype.startLoad = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), 
            i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), 
            i.$slider.addClass("slick-loading");
        }, e.prototype.swipeDirection = function() {
            var i, e, t, o, s = this;
            return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, 
            t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), 
            o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
        }, e.prototype.swipeEnd = function(i) {
            var e, t, o = this;
            if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
            if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [ o, o.swipeDirection() ]), 
            o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                  case "left":
                  case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), 
                    o.currentDirection = 0;
                    break;

                  case "right":
                  case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), 
                    o.currentDirection = 1;
                }
                "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [ o, t ]));
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), 
            o.touchObject = {});
        }, e.prototype.swipeHandler = function(i) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, 
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), 
            i.data.action) {
              case "start":
                e.swipeStart(i);
                break;

              case "move":
                e.swipeMove(i);
                break;

              case "end":
                e.swipeEnd(i);
            }
        }, e.prototype.swipeMove = function(i) {
            var e, t, o, s, n, r, l = this;
            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), 
            l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, 
            l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), 
            r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), 
            !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), 
            t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, 
            i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), 
            !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), 
            o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, 
            l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, 
            !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, 
            !1) : void l.setCSS(l.swipeLeft))));
        }, e.prototype.swipeStart = function(i) {
            var e, t = this;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, 
            !1;
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), 
            t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, 
            t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, 
            t.dragging = !0;
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var i = this;
            null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), 
            i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
        }, e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), 
            e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }, e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [ e, i ]), e.destroy();
        }, e.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
            i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
            i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }, e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
        }, e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
        }, i.fn.slick = function() {
            var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), 
            void 0 !== t) return t;
            return o;
        };
    }));
    !function(a) {
        "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
    }((function(a) {
        var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
        a.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, a.fn.extend({
            caret: function(a, b) {
                var c;
                if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, 
                this.each((function() {
                    this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), 
                    c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
                }))) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), 
                a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                    begin: a,
                    end: b
                });
            },
            unmask: function() {
                return this.trigger("unmask");
            },
            mask: function(c, g) {
                var h, i, j, k, l, m, n, o;
                if (!c && this.length > 0) {
                    h = a(this[0]);
                    var p = h.data(a.mask.dataName);
                    return p ? p() : void 0;
                }
                return g = a.extend({
                    autoclear: a.mask.autoclear,
                    placeholder: a.mask.placeholder,
                    completed: null
                }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), (function(a, b) {
                    "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), 
                    k > a && (m = j.length - 1)) : j.push(null);
                })), this.trigger("unmask").each((function() {
                    function h() {
                        if (g.completed) {
                            for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return;
                            g.completed.call(B);
                        }
                    }
                    function p(a) {
                        return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
                    }
                    function q(a) {
                        for (;++a < n && !j[a]; ) ;
                        return a;
                    }
                    function r(a) {
                        for (;--a >= 0 && !j[a]; ) ;
                        return a;
                    }
                    function s(a, b) {
                        var c, d;
                        if (!(0 > a)) {
                            for (c = a, d = q(b); n > c; c++) if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;
                                C[c] = C[d], C[d] = p(d), d = q(d);
                            }
                            z(), B.caret(Math.max(l, a));
                        }
                    }
                    function t(a) {
                        var b, c, d, e;
                        for (b = a, c = p(a); n > b; b++) if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                            c = e;
                        }
                    }
                    function u() {
                        var a = B.val(), b = B.caret();
                        if (o && o.length && o.length > a.length) {
                            for (A(!0); b.begin > 0 && !j[b.begin - 1]; ) b.begin--;
                            if (0 === b.begin) for (;b.begin < l && !j[b.begin]; ) b.begin++;
                            B.caret(b.begin, b.begin);
                        } else {
                            for (A(!0); b.begin < n && !j[b.begin]; ) b.begin++;
                            B.caret(b.begin, b.begin);
                        }
                        h();
                    }
                    function v() {
                        A(), B.val() != E && B.change();
                    }
                    function w(a) {
                        if (!B.prop("readonly")) {
                            var b, c, e, f = a.which || a.keyCode;
                            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, 
                            e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), 
                            y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), 
                            B.caret(0, A()), a.preventDefault());
                        }
                    }
                    function x(b) {
                        if (!B.prop("readonly")) {
                            var c, d, e, g = b.which || b.keyCode, i = B.caret();
                            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                                if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), 
                                n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                    if (t(c), C[c] = d, z(), e = q(c), f) {
                                        var k = function() {
                                            a.proxy(a.fn.caret, B, e)();
                                        };
                                        setTimeout(k, 0);
                                    } else B.caret(e);
                                    i.begin <= m && h();
                                }
                                b.preventDefault();
                            }
                        }
                    }
                    function y(a, b) {
                        var c;
                        for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c));
                    }
                    function z() {
                        B.val(C.join(""));
                    }
                    function A(a) {
                        var b, c, d, e = B.val(), f = -1;
                        for (b = 0, d = 0; n > b; b++) if (j[b]) {
                            for (C[b] = p(b); d++ < e.length; ) if (c = e.charAt(d - 1), j[b].test(c)) {
                                C[b] = c, f = b;
                                break;
                            }
                            if (d > e.length) {
                                y(b + 1, n);
                                break;
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                        return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), 
                        y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
                    }
                    var B = a(this), C = a.map(c.split(""), (function(a, b) {
                        return "?" != a ? i[a] ? p(b) : a : void 0;
                    })), D = C.join(""), E = B.val();
                    B.data(a.mask.dataName, (function() {
                        return a.map(C, (function(a, b) {
                            return j[b] && a != p(b) ? a : null;
                        })).join("");
                    })), B.one("unmask", (function() {
                        B.off(".mask").removeData(a.mask.dataName);
                    })).on("focus.mask", (function() {
                        if (!B.prop("readonly")) {
                            clearTimeout(b);
                            var a;
                            E = B.val(), a = A(), b = setTimeout((function() {
                                B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
                            }), 10);
                        }
                    })).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", (function() {
                        B.prop("readonly") || setTimeout((function() {
                            var a = A(!0);
                            B.caret(a), h();
                        }), 0);
                    })), e && f && B.off("input.mask").on("input.mask", u), A();
                }));
            }
        });
    }));
    /*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
    !function(a) {
        "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
    }((function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), 
                a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", (function(b) {
                    c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), 
                    void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
                })), this.on("submit.validate", (function(b) {
                    function d() {
                        var d, e;
                        return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), 
                        !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), 
                        d && d.remove(), void 0 !== e && e);
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, 
                    d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), 
                    !1);
                }))), c);
            },
            valid: function() {
                var b, c, d;
                return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), 
                this.each((function() {
                    b = c.element(this) && b, b || (d = d.concat(c.errorList));
                })), c.errorList = d), b;
            },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0], k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), 
                null != j.form)) {
                    if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), 
                    b) {
                      case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;

                      case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), (function(a, b) {
                            i[b] = f[b], delete f[b];
                        })), i) : (delete e[j.name], f);
                    }
                    return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), 
                    g.required && (h = g.required, delete g.required, g = a.extend({
                        required: h
                    }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                        remote: h
                    })), g;
                }
            }
        }), a.extend(a.expr.pseudos || a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + a(b).val());
            },
            filled: function(b) {
                var c = a(b).val();
                return null !== c && !!a.trim("" + c);
            },
            unchecked: function(b) {
                return !a(b).prop("checked");
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, 
            this.init();
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c);
            } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), 
            c.constructor !== Array && (c = [ c ]), a.each(c, (function(a, c) {
                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), (function() {
                    return c;
                }));
            })), b);
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) {
                    this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), 
                    this.hideThese(this.errorsFor(a)));
                },
                onfocusout: function(a) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
                },
                onkeyup: function(b, c) {
                    var d = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];
                    9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
                },
                onclick: function(a) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b);
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}."),
                step: a.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                        if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), 
                        d === this.form) {
                            var e = a.data(this.form, "validator"), f = "on" + b.type.replace(/^validate/, ""), g = e.settings;
                            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
                        }
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), 
                    this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), 
                    this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, 
                    this.invalid = {}, this.reset();
                    var c, d = this.currentForm, e = this.groups = {};
                    a.each(this.settings.groups, (function(b, c) {
                        "string" == typeof c && (c = c.split(/\s/)), a.each(c, (function(a, c) {
                            e[c] = b;
                        }));
                    })), c = this.settings.rules, a.each(c, (function(b, d) {
                        c[b] = a.validator.normalizeRule(d);
                    })), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), 
                    this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), 
                    this.valid() || a(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                    this.valid();
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid();
                },
                element: function(b) {
                    var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                    return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), 
                    d = this.groups[f.name], d && a.each(this.groups, (function(a, b) {
                        b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), 
                        e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
                    })), c = !1 !== this.check(f), h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, 
                    this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), 
                    a(b).attr("aria-invalid", !c)), h;
                },
                showErrors: function(b) {
                    if (b) {
                        var c = this;
                        a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, (function(a, b) {
                            return {
                                message: a,
                                element: c.findByName(b)[0]
                            };
                        })), this.successList = a.grep(this.successList, (function(a) {
                            return !(a.name in b);
                        }));
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, 
                    this.prepareForm(), this.hideErrors();
                    var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(b);
                },
                resetElements: function(a) {
                    var b;
                    if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), 
                    this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid);
                },
                objectLength: function(a) {
                    var b, c = 0;
                    for (b in a) void 0 !== a[b] && null !== a[b] && !1 !== a[b] && c++;
                    return c;
                },
                hideErrors: function() {
                    this.hideThese(this.toHide);
                },
                hideThese: function(a) {
                    a.not(this.containers).text(""), this.addWrapper(a).hide();
                },
                valid: function() {
                    return 0 === this.size();
                },
                size: function() {
                    return this.errorList.length;
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
                    } catch (b) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, (function(a) {
                        return a.element.name === b.name;
                    })).length && b;
                },
                elements: function() {
                    var b = this, c = {};
                    return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                        var d = this.name || a(this).attr("name"), e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                        return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), 
                        e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, 
                        !0);
                    }));
                },
                clean: function(b) {
                    return a(b)[0];
                },
                errors: function() {
                    var b = this.settings.errorClass.split(" ").join(".");
                    return a(this.settings.errorElement + "." + b, this.errorContext);
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), 
                    this.toHide = a([]);
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = a([]);
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers);
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a);
                },
                elementValue: function(b) {
                    var c, d, e = a(b), f = b.type, g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                    return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), 
                    "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), 
                    d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f, g = a(b).rules(), h = a.map(g, (function(a, b) {
                        return b;
                    })).length, i = !1, j = this.elementValue(b);
                    "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), 
                    f && (j = f.call(b, j), delete g.normalizer);
                    for (d in g) {
                        e = {
                            method: d,
                            parameters: g[d]
                        };
                        try {
                            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                                i = !0;
                                continue;
                            }
                            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, e), !1;
                        } catch (k) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), 
                            k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), 
                            k;
                        }
                    }
                    if (!i) return this.objectLength(g) && this.successList.push(b), !0;
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b]);
                },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                },
                defaultMessage: function(b, c) {
                    "string" == typeof c && (c = {
                        method: c
                    });
                    var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"), e = /\$?\{(\d+)\}/g;
                    return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), 
                    d;
                },
                formatAndAdd: function(a, b) {
                    var c = this.defaultMessage(a, b);
                    this.errorList.push({
                        message: c,
                        element: a,
                        method: b.method
                    }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
                },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), 
                    this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function() {
                    return a(this.errorList).map((function() {
                        return this.element;
                    }));
                },
                showLabel: function(b, c) {
                    var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                    h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                    h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), 
                    d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                    this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), 
                    h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), 
                    j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, 
                    a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, (function(b, c) {
                        c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                    }))))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), 
                    this.toShow = this.toShow.add(h);
                },
                errorsFor: function(b) {
                    var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
                },
                escapeCssMeta: function(a) {
                    return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
                },
                validationTargetFor: function(b) {
                    return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type);
                },
                findByName: function(b) {
                    return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                      case "select":
                        return a("option:selected", c).length;

                      case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                    }
                    return b.length;
                },
                depend: function(a, b) {
                    return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b);
                },
                dependTypes: {
                    boolean: function(a) {
                        return a;
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length;
                    },
                    function: function(a, b) {
                        return a(b);
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
                },
                startRequest: function(b) {
                    this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), 
                    this.pending[b.name] = !0);
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], 
                    a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), 
                    this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), 
                    this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                    this.formSubmitted = !1);
                },
                previousValue: function(b, c) {
                    return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, {
                            method: c
                        })
                    });
                },
                destroy: function() {
                    this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
            },
            classRules: function(b) {
                var c = {}, d = a(b).attr("class");
                return d && a.each(d.split(" "), (function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                })), c;
            },
            normalizeAttributeRule: function(a, b, c, d) {
                /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), 
                isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
            },
            attributeRules: function(b) {
                var c, d, e = {}, f = a(b), g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), 
                d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, 
                e;
            },
            dataRules: function(b) {
                var c, d, e = {}, f = a(b), g = b.getAttribute("type");
                for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), 
                "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
                return e;
            },
            staticRules: function(b) {
                var c = {}, d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), 
                c;
            },
            normalizeRules: function(b, c) {
                return a.each(b, (function(d, e) {
                    if (!1 === e) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                          case "string":
                            f = !!a(e.depends, c.form).length;
                            break;

                          case "function":
                            f = e.depends.call(c, c);
                        }
                        f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), 
                        delete b[d]);
                    }
                })), a.each(b, (function(d, e) {
                    b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
                })), a.each([ "minlength", "maxlength" ], (function() {
                    b[this] && (b[this] = Number(b[this]));
                })), a.each([ "rangelength", "range" ], (function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [ Number(b[this][0]), Number(b[this][1]) ] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), 
                    b[this] = [ Number(c[0]), Number(c[1]) ]));
                })), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [ b.min, b.max ], 
                delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [ b.minlength, b.maxlength ], 
                delete b.minlength, delete b.maxlength)), b;
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), (function() {
                        c[this] = !0;
                    })), b = c;
                }
                return b;
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], 
                c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0;
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
                },
                email: function(a, b) {
                    return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                },
                url: function(a, b) {
                    return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
                },
                date: function() {
                    var a = !1;
                    return function(b, c) {
                        return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), 
                        this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
                    };
                }(),
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
                },
                number: function(a, b) {
                    return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a);
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d;
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e <= d;
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(b, c);
                    return this.optional(c) || e >= d[0] && e <= d[1];
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c;
                },
                max: function(a, b, c) {
                    return this.optional(b) || a <= c;
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1];
                },
                step: function(b, c, d) {
                    var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = [ "text", "number", "range" ], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0;
                    }, l = function(a) {
                        return Math.round(a * Math.pow(10, e));
                    }, m = !0;
                    if (j) throw new Error(g);
                    return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                        a(c).valid();
                    })), b === e.val();
                },
                remote: function(b, c, d, e) {
                    if (this.optional(c)) return "dependency-mismatch";
                    e = "string" == typeof e && e || "remote";
                    var f, g, h, i = this.previousValue(c, e);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), 
                    i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, 
                    d = "string" == typeof d && {
                        url: d
                    } || d, h = a.param(a.extend({
                        data: b
                    }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), 
                    g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        context: f.currentForm,
                        success: function(a) {
                            var d, g, h, j = !0 === a || "true" === a;
                            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), 
                            f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, 
                            f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                                method: e,
                                parameters: b
                            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, 
                            f.stopRequest(c, j);
                        }
                    }, d)), "pending");
                }
            }
        });
        var b, c = {};
        return a.ajaxPrefilter ? a.ajaxPrefilter((function(a, b, d) {
            var e = a.port;
            "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
        })) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
        }), a;
    }));
    (function($) {
        $.fn.viewportChecker = function(useroptions) {
            var options = {
                classToAdd: "visible",
                classToRemove: "invisible",
                classToAddForFullView: "full-visible",
                removeClassAfterAnimation: false,
                offset: 100,
                repeat: false,
                invertBottomOffset: true,
                callbackFunction: function(elem, action) {},
                scrollHorizontal: false,
                scrollBox: window
            };
            $.extend(options, useroptions);
            var $elem = this, boxSize = {
                height: $(options.scrollBox).height(),
                width: $(options.scrollBox).width()
            };
            this.checkElements = function() {
                var viewportStart, viewportEnd;
                if (!options.scrollHorizontal) {
                    viewportStart = Math.max($("html").scrollTop(), $("body").scrollTop(), $(window).scrollTop());
                    viewportEnd = viewportStart + boxSize.height;
                } else {
                    viewportStart = Math.max($("html").scrollLeft(), $("body").scrollLeft(), $(window).scrollLeft());
                    viewportEnd = viewportStart + boxSize.width;
                }
                $elem.each((function() {
                    var $obj = $(this), objOptions = {}, attrOptions = {};
                    if ($obj.data("vp-add-class")) attrOptions.classToAdd = $obj.data("vp-add-class");
                    if ($obj.data("vp-remove-class")) attrOptions.classToRemove = $obj.data("vp-remove-class");
                    if ($obj.data("vp-add-class-full-view")) attrOptions.classToAddForFullView = $obj.data("vp-add-class-full-view");
                    if ($obj.data("vp-keep-add-class")) attrOptions.removeClassAfterAnimation = $obj.data("vp-remove-after-animation");
                    if ($obj.data("vp-offset")) attrOptions.offset = $obj.data("vp-offset");
                    if ($obj.data("vp-repeat")) attrOptions.repeat = $obj.data("vp-repeat");
                    if ($obj.data("vp-scrollHorizontal")) attrOptions.scrollHorizontal = $obj.data("vp-scrollHorizontal");
                    if ($obj.data("vp-invertBottomOffset")) attrOptions.scrollHorizontal = $obj.data("vp-invertBottomOffset");
                    $.extend(objOptions, options);
                    $.extend(objOptions, attrOptions);
                    if ($obj.data("vp-animated") && !objOptions.repeat) return;
                    if (String(objOptions.offset).indexOf("%") > 0) objOptions.offset = parseInt(objOptions.offset) / 100 * boxSize.height;
                    var rawStart = !objOptions.scrollHorizontal ? $obj.offset().top : $obj.offset().left, rawEnd = !objOptions.scrollHorizontal ? rawStart + $obj.height() : rawStart + $obj.width();
                    var elemStart = Math.round(rawStart) + objOptions.offset, elemEnd = !objOptions.scrollHorizontal ? elemStart + $obj.height() : elemStart + $obj.width();
                    if (objOptions.invertBottomOffset) elemEnd -= 2 * objOptions.offset;
                    if (elemStart < viewportEnd && elemEnd > viewportStart) {
                        $obj.removeClass(objOptions.classToRemove);
                        $obj.addClass(objOptions.classToAdd);
                        objOptions.callbackFunction($obj, "add");
                        if (rawEnd <= viewportEnd && rawStart >= viewportStart) $obj.addClass(objOptions.classToAddForFullView); else $obj.removeClass(objOptions.classToAddForFullView);
                        $obj.data("vp-animated", true);
                        if (objOptions.removeClassAfterAnimation) $obj.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function() {
                            $obj.removeClass(objOptions.classToAdd);
                        }));
                    } else if ($obj.hasClass(objOptions.classToAdd) && objOptions.repeat) {
                        $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);
                        objOptions.callbackFunction($obj, "remove");
                        $obj.data("vp-animated", false);
                    }
                }));
            };
            if ("ontouchstart" in window || "onmsgesturechange" in window) $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
            $(options.scrollBox).bind("load scroll", this.checkElements);
            $(window).resize((function(e) {
                boxSize = {
                    height: $(options.scrollBox).height(),
                    width: $(options.scrollBox).width()
                };
                $elem.checkElements();
            }));
            this.checkElements();
            return this;
        };
    })(jQuery);
    /*! jQuery UI - v1.13.1 - 2022-04-13
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
    !function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
    }((function(V) {
        "use strict";
        V.ui = V.ui || {};
        V.ui.version = "1.13.1";
        var n, i = 0, a = Array.prototype.hasOwnProperty, r = Array.prototype.slice;
        V.cleanData = (n = V.cleanData, function(t) {
            for (var e, i, s = 0; null != (i = t[s]); s++) (e = V._data(i, "events")) && e.remove && V(i).triggerHandler("remove");
            n(t);
        }), V.widget = function(t, i, e) {
            var s, n, o, a = {}, r = t.split(".")[0], l = r + "-" + (t = t.split(".")[1]);
            return e || (e = i, i = V.Widget), Array.isArray(e) && (e = V.extend.apply(null, [ {} ].concat(e))), 
            V.expr.pseudos[l.toLowerCase()] = function(t) {
                return !!V.data(t, l);
            }, V[r] = V[r] || {}, s = V[r][t], n = V[r][t] = function(t, e) {
                if (!this || !this._createWidget) return new n(t, e);
                arguments.length && this._createWidget(t, e);
            }, V.extend(n, s, {
                version: e.version,
                _proto: V.extend({}, e),
                _childConstructors: []
            }), (o = new i).options = V.widget.extend({}, o.options), V.each(e, (function(e, s) {
                function n() {
                    return i.prototype[e].apply(this, arguments);
                }
                function o(t) {
                    return i.prototype[e].apply(this, t);
                }
                a[e] = "function" == typeof s ? function() {
                    var t, e = this._super, i = this._superApply;
                    return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, 
                    this._superApply = i, t;
                } : s;
            })), n.prototype = V.widget.extend(o, {
                widgetEventPrefix: s && o.widgetEventPrefix || t
            }, a, {
                constructor: n,
                namespace: r,
                widgetName: t,
                widgetFullName: l
            }), s ? (V.each(s._childConstructors, (function(t, e) {
                var i = e.prototype;
                V.widget(i.namespace + "." + i.widgetName, n, e._proto);
            })), delete s._childConstructors) : i._childConstructors.push(n), V.widget.bridge(t, n), 
            n;
        }, V.widget.extend = function(t) {
            for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++) for (e in s[n]) i = s[n][e], 
            a.call(s[n], e) && void 0 !== i && (V.isPlainObject(i) ? t[e] = V.isPlainObject(t[e]) ? V.widget.extend({}, t[e], i) : V.widget.extend({}, i) : t[e] = i);
            return t;
        }, V.widget.bridge = function(o, e) {
            var a = e.prototype.widgetFullName || o;
            V.fn[o] = function(i) {
                var t = "string" == typeof i, s = r.call(arguments, 1), n = this;
                return t ? this.length || "instance" !== i ? this.each((function() {
                    var t, e = V.data(this, a);
                    return "instance" === i ? (n = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? V.error("no such method '" + i + "' for " + o + " widget instance") : (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, 
                    !1) : void 0 : V.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'");
                })) : n = void 0 : (s.length && (i = V.widget.extend.apply(null, [ i ].concat(s))), 
                this.each((function() {
                    var t = V.data(this, a);
                    t ? (t.option(i || {}), t._init && t._init()) : V.data(this, a, new e(i, this));
                }))), n;
            };
        }, V.Widget = function() {}, V.Widget._childConstructors = [], V.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, e) {
                e = V(e || this.defaultElement || this)[0], this.element = V(e), this.uuid = i++, 
                this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = V(), this.hoverable = V(), 
                this.focusable = V(), this.classesElementLookup = {}, e !== this && (V.data(e, this.widgetFullName, this), 
                this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === e && this.destroy();
                    }
                }), this.document = V(e.style ? e.ownerDocument : e.document || e), this.window = V(this.document[0].defaultView || this.document[0].parentWindow)), 
                this.options = V.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), 
                this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
                this._init();
            },
            _getCreateOptions: function() {
                return {};
            },
            _getCreateEventData: V.noop,
            _create: V.noop,
            _init: V.noop,
            destroy: function() {
                var i = this;
                this._destroy(), V.each(this.classesElementLookup, (function(t, e) {
                    i._removeClass(e, t);
                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
                this.bindings.off(this.eventNamespace);
            },
            _destroy: V.noop,
            widget: function() {
                return this.element;
            },
            option: function(t, e) {
                var i, s, n, o = t;
                if (0 === arguments.length) return V.widget.extend({}, this.options);
                if ("string" == typeof t) if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (s = o[t] = V.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, 
                    s = s[i[n]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = e;
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e;
                }
                return this._setOptions(o), this;
            },
            _setOptions: function(t) {
                for (var e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
                this;
            },
            _setOptionClasses: function(t) {
                var e, i, s;
                for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = V(s.get()), 
                this._removeClass(s, e), i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })));
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
                t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                });
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                });
            },
            _classes: function(n) {
                var o = [], a = this;
                function t(t, e) {
                    for (var i, s = 0; s < t.length; s++) i = a.classesElementLookup[t[s]] || V(), i = n.add ? (function() {
                        var i = [];
                        n.element.each((function(t, e) {
                            V.map(a.classesElementLookup, (function(t) {
                                return t;
                            })).some((function(t) {
                                return t.is(e);
                            })) || i.push(e);
                        })), a._on(V(i), {
                            remove: "_untrackClassesElement"
                        });
                    }(), V(V.uniqueSort(i.get().concat(n.element.get())))) : V(i.not(n.element).get()), 
                    a.classesElementLookup[t[s]] = i, o.push(t[s]), e && n.classes[t[s]] && o.push(n.classes[t[s]]);
                }
                return (n = V.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, n)).keys && t(n.keys.match(/\S+/g) || [], !0), n.extra && t(n.extra.match(/\S+/g) || []), 
                o.join(" ");
            },
            _untrackClassesElement: function(i) {
                var s = this;
                V.each(s.classesElementLookup, (function(t, e) {
                    -1 !== V.inArray(i.target, e) && (s.classesElementLookup[t] = V(e.not(i.target).get()));
                })), this._off(V(i.target));
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1);
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0);
            },
            _toggleClass: function(t, e, i, s) {
                var n = "string" == typeof t || null === t;
                i = {
                    extra: n ? e : i,
                    keys: n ? t : e,
                    element: n ? this.element : t,
                    add: s = "boolean" == typeof s ? s : i
                };
                return i.element.toggleClass(this._classes(i), s), this;
            },
            _on: function(n, o, t) {
                var a, r = this;
                "boolean" != typeof n && (t = o, o = n, n = !1), t ? (o = a = V(o), this.bindings = this.bindings.add(o)) : (t = o, 
                o = this.element, a = this.widget()), V.each(t, (function(t, e) {
                    function i() {
                        if (n || !0 !== r.options.disabled && !V(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? r[e] : e).apply(r, arguments);
                    }
                    "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || V.guid++);
                    var s = t.match(/^([\w:-]*)\s*(.*)$/);
                    t = s[1] + r.eventNamespace, s = s[2];
                    s ? a.on(t, s, i) : o.on(t, i);
                }));
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
                t.off(e), this.bindings = V(this.bindings.not(t).get()), this.focusable = V(this.focusable.not(t).get()), 
                this.hoverable = V(this.hoverable.not(t).get());
            },
            _delay: function(t, e) {
                var i = this;
                return setTimeout((function() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments);
                }), e || 0);
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(V(t.currentTarget), null, "ui-state-hover");
                    },
                    mouseleave: function(t) {
                        this._removeClass(V(t.currentTarget), null, "ui-state-hover");
                    }
                });
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(V(t.currentTarget), null, "ui-state-focus");
                    },
                    focusout: function(t) {
                        this._removeClass(V(t.currentTarget), null, "ui-state-focus");
                    }
                });
            },
            _trigger: function(t, e, i) {
                var s, n, o = this.options[t];
                if (i = i || {}, (e = V.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
                e.target = this.element[0], n = e.originalEvent) for (s in n) s in e || (e[s] = n[s]);
                return this.element.trigger(e, i), !("function" == typeof o && !1 === o.apply(this.element[0], [ e ].concat(i)) || e.isDefaultPrevented());
            }
        }, V.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, (function(o, a) {
            V.Widget.prototype["_" + o] = function(e, t, i) {
                var s, n = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || a : o;
                "number" == typeof (t = t || {}) ? t = {
                    duration: t
                } : !0 === t && (t = {}), s = !V.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), 
                s && V.effects && V.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue((function(t) {
                    V(this)[o](), i && i.call(e[0]), t();
                }));
            };
        }));
        var s, x, k, o, l, h, c, u, C;
        V.widget;
        function D(t, e, i) {
            return [ parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1) ];
        }
        function I(t, e) {
            return parseInt(V.css(t, e), 10) || 0;
        }
        function T(t) {
            return null != t && t === t.window;
        }
        x = Math.max, k = Math.abs, o = /left|center|right/, l = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, 
        c = /^\w+/, u = /%$/, C = V.fn.position, V.position = {
            scrollbarWidth: function() {
                if (void 0 !== s) return s;
                var t, e = V("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"), i = e.children()[0];
                return V("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), 
                e.remove(), s = t - i;
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y");
                e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? V.position.scrollbarWidth() : 0,
                    height: e ? V.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(t) {
                var e = V(t || window), i = T(e[0]), s = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: s,
                    offset: !i && !s ? V(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                };
            }
        }, V.fn.position = function(u) {
            if (!u || !u.of) return C.apply(this, arguments);
            var d, p, f, g, m, t, _ = "string" == typeof (u = V.extend({}, u)).of ? V(document).find(u.of) : V(u.of), v = V.position.getWithinInfo(u.within), b = V.position.getScrollInfo(v), y = (u.collision || "flip").split(" "), w = {}, e = 9 === (t = (e = _)[0]).nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : T(t) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : t.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: t.pageY,
                    left: t.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            };
            return _[0].preventDefault && (u.at = "left top"), p = e.width, f = e.height, m = V.extend({}, g = e.offset), 
            V.each([ "my", "at" ], (function() {
                var t, e, i = (u[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat([ "center" ]) : l.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ] : i)[0] = o.test(i[0]) ? i[0] : "center", 
                i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), w[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], 
                u[this] = [ c.exec(i[0])[0], c.exec(i[1])[0] ];
            })), 1 === y.length && (y[1] = y[0]), "right" === u.at[0] ? m.left += p : "center" === u.at[0] && (m.left += p / 2), 
            "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), d = D(w.at, p, f), 
            m.left += d[0], m.top += d[1], this.each((function() {
                var i, t, a = V(this), r = a.outerWidth(), l = a.outerHeight(), e = I(this, "marginLeft"), s = I(this, "marginTop"), n = r + e + I(this, "marginRight") + b.width, o = l + s + I(this, "marginBottom") + b.height, h = V.extend({}, m), c = D(w.my, a.outerWidth(), a.outerHeight());
                "right" === u.my[0] ? h.left -= r : "center" === u.my[0] && (h.left -= r / 2), "bottom" === u.my[1] ? h.top -= l : "center" === u.my[1] && (h.top -= l / 2), 
                h.left += c[0], h.top += c[1], i = {
                    marginLeft: e,
                    marginTop: s
                }, V.each([ "left", "top" ], (function(t, e) {
                    V.ui.position[y[t]] && V.ui.position[y[t]][e](h, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: r,
                        elemHeight: l,
                        collisionPosition: i,
                        collisionWidth: n,
                        collisionHeight: o,
                        offset: [ d[0] + c[0], d[1] + c[1] ],
                        my: u.my,
                        at: u.at,
                        within: v,
                        elem: a
                    });
                })), u.using && (t = function(t) {
                    var e = g.left - h.left, i = e + p - r, s = g.top - h.top, n = s + f - l, o = {
                        target: {
                            element: _,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: a,
                            left: h.left,
                            top: h.top,
                            width: r,
                            height: l
                        },
                        horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                        vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
                    };
                    p < r && k(e + i) < p && (o.horizontal = "center"), f < l && k(s + n) < f && (o.vertical = "middle"), 
                    x(k(e), k(i)) > x(k(s), k(n)) ? o.important = "horizontal" : o.important = "vertical", 
                    u.using.call(this, t, o);
                }), a.offset(V.extend(h, {
                    using: t
                }));
            }));
        }, V.ui.position = {
            fit: {
                left: function(t, e) {
                    var i = e.within, s = i.isWindow ? i.scrollLeft : i.offset.left, n = i.width, o = t.left - e.collisionPosition.marginLeft, a = s - o, r = o + e.collisionWidth - n - s;
                    e.collisionWidth > n ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - n - s, 
                    t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = x(t.left - o, t.left);
                },
                top: function(t, e) {
                    var i = e.within, s = i.isWindow ? i.scrollTop : i.offset.top, n = e.within.height, o = t.top - e.collisionPosition.marginTop, a = s - o, r = o + e.collisionHeight - n - s;
                    e.collisionHeight > n ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - n - s, 
                    t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = x(t.top - o, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within, s = i.offset.left + i.scrollLeft, n = i.width, o = i.isWindow ? i.scrollLeft : i.offset.left, a = t.left - e.collisionPosition.marginLeft, r = a - o, l = a + e.collisionWidth - n - o, h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0;
                    i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, 
                    a = -2 * e.offset[0];
                    r < 0 ? ((s = t.left + h + i + a + e.collisionWidth - n - s) < 0 || s < k(r)) && (t.left += h + i + a) : 0 < l && (0 < (o = t.left - e.collisionPosition.marginLeft + h + i + a - o) || k(o) < l) && (t.left += h + i + a);
                },
                top: function(t, e) {
                    var i = e.within, s = i.offset.top + i.scrollTop, n = i.height, o = i.isWindow ? i.scrollTop : i.offset.top, a = t.top - e.collisionPosition.marginTop, r = a - o, l = a + e.collisionHeight - n - o, h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0;
                    i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, 
                    a = -2 * e.offset[1];
                    r < 0 ? ((s = t.top + h + i + a + e.collisionHeight - n - s) < 0 || s < k(r)) && (t.top += h + i + a) : 0 < l && (0 < (o = t.top - e.collisionPosition.marginTop + h + i + a - o) || k(o) < l) && (t.top += h + i + a);
                }
            },
            flipfit: {
                left: function() {
                    V.ui.position.flip.left.apply(this, arguments), V.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    V.ui.position.flip.top.apply(this, arguments), V.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
        var t;
        V.ui.position, V.extend(V.expr.pseudos, {
            data: V.expr.createPseudo ? V.expr.createPseudo((function(e) {
                return function(t) {
                    return !!V.data(t, e);
                };
            })) : function(t, e, i) {
                return !!V.data(t, i[3]);
            }
        }), V.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", 
            function() {
                return this.on(t + ".ui-disableSelection", (function(t) {
                    t.preventDefault();
                }));
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection");
            }
        });
        V.ui.focusable = function(t, e) {
            var i, s, n, o, a = t.nodeName.toLowerCase();
            return "area" === a ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && 0 < (s = V("img[usemap='#" + s + "']")).length && s.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(a) ? (n = !t.disabled) && (o = V(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === a && t.href || e, 
            n && V(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;"inherit" === e; ) t = t.parent(), e = t.css("visibility");
                return "visible" === e;
            }(V(t)));
        }, V.extend(V.expr.pseudos, {
            focusable: function(t) {
                return V.ui.focusable(t, null != V.attr(t, "tabindex"));
            }
        });
        var e, d;
        V.ui.focusable, V.fn._form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : V(this[0].form);
        }, V.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = V(this);
                setTimeout((function() {
                    var t = e.data("ui-form-reset-instances");
                    V.each(t, (function() {
                        this.refresh();
                    }));
                }));
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element._form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), 
                t.push(this), this.form.data("ui-form-reset-instances", t));
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(V.inArray(this, t), 1), 
                t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
            }
        };
        V.expr.pseudos || (V.expr.pseudos = V.expr[":"]), V.uniqueSort || (V.uniqueSort = V.unique), 
        V.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, d = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        }, V.escapeSelector = function(t) {
            return (t + "").replace(e, d);
        }), V.fn.even && V.fn.odd || V.fn.extend({
            even: function() {
                return this.filter((function(t) {
                    return t % 2 == 0;
                }));
            },
            odd: function() {
                return this.filter((function(t) {
                    return t % 2 == 1;
                }));
            }
        });
        V.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, V.fn.labels = function() {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), 
            (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), 
            t = "label[for='" + V.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), 
            this.pushStack(e)) : this.pushStack([]);
        }, V.fn.scrollParent = function(t) {
            var e = this.css("position"), i = "absolute" === e, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            t = this.parents().filter((function() {
                var t = V(this);
                return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
            })).eq(0);
            return "fixed" !== e && t.length ? t : V(this[0].ownerDocument || document);
        }, V.extend(V.expr.pseudos, {
            tabbable: function(t) {
                var e = V.attr(t, "tabindex"), i = null != e;
                return (!i || 0 <= e) && V.ui.focusable(t, i);
            }
        }), V.fn.extend({
            uniqueId: (p = 0, function() {
                return this.each((function() {
                    this.id || (this.id = "ui-id-" + ++p);
                }));
            }),
            removeUniqueId: function() {
                return this.each((function() {
                    /^ui-id-\d+$/.test(this.id) && V(this).removeAttr("id");
                }));
            }
        }), V.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        var p, f = !1;
        V(document).on("mouseup", (function() {
            f = !1;
        }));
        V.widget("ui.mouse", {
            version: "1.13.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, (function(t) {
                    return e._mouseDown(t);
                })).on("click." + this.widgetName, (function(t) {
                    if (!0 === V.data(t.target, e.widgetName + ".preventClickEvent")) return V.removeData(t.target, e.widgetName + ".preventClickEvent"), 
                    t.stopImmediatePropagation(), !1;
                })), this.started = !1;
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function(t) {
                if (!f) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this, i = 1 === t.which, s = !("string" != typeof this.options.cancel || !t.target.nodeName) && V(t.target).closest(this.options.cancel).length;
                    return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, 
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                        e.mouseDelayMet = !0;
                    }), this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), 
                    !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === V.data(t.target, this.widgetName + ".preventClickEvent") && V.removeData(t.target, this.widgetName + ".preventClickEvent"), 
                    this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t);
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t);
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                    t.preventDefault(), f = !0)) : !0;
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (V.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(t);
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), 
                t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), 
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
            },
            _mouseUp: function(t) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
                this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && V.data(t.target, this.widgetName + ".preventClickEvent", !0), 
                this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
                delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, f = !1, t.preventDefault();
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet;
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0;
            }
        }), V.ui.plugin = {
            add: function(t, e, i) {
                var s, n = V.ui[t].prototype;
                for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([ e, i[s] ]);
            },
            call: function(t, e, i, s) {
                var n, o = t.plugins[e];
                if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
            }
        }, V.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement;
            } catch (t) {
                i = e.body;
            }
            return i = !(i = i || e.body).nodeName ? e.body : i;
        }, V.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && V(t).trigger("blur");
        };
        V.widget("ui.draggable", V.ui.mouse, {
            version: "1.13.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), 
                this._setHandleClassName(), this._mouseInit();
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
            },
            _destroy: function() {
                (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), 
                this._mouseDestroy());
            },
            _mouseCapture: function(t) {
                var e = this.options;
                return !(this.helper || e.disabled || 0 < V(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), 
                !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), 
                !0));
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map((function() {
                    var t = V(this);
                    return V("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
                }));
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _blurActiveElement: function(t) {
                var e = V.ui.safeActiveElement(this.document[0]);
                V(t.target).closest(e).length || V.ui.safeBlur(e);
            },
            _mouseStart: function(t) {
                var e = this.options;
                return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), 
                this._cacheHelperProportions(), V.ui.ddmanager && (V.ui.ddmanager.current = this), 
                this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
                this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter((function() {
                    return "fixed" === V(this).css("position");
                })).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), 
                this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), 
                this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
                V.ui.ddmanager && !e.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), 
                V.ui.ddmanager && V.ui.ddmanager.dragStart(this, t), !0);
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                };
            },
            _mouseDrag: function(t, e) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), 
                this.positionAbs = this._convertPositionTo("absolute"), !e) {
                    e = this._uiHash();
                    if (!1 === this._trigger("drag", t, e)) return this._mouseUp(new V.Event("mouseup", t)), 
                    !1;
                    this.position = e.position;
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
                V.ui.ddmanager && V.ui.ddmanager.drag(this, t), !1;
            },
            _mouseStop: function(t) {
                var e = this, i = !1;
                return V.ui.ddmanager && !this.options.dropBehaviour && (i = V.ui.ddmanager.drop(this, t)), 
                this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || "function" == typeof this.options.revert && this.options.revert.call(this.element, i) ? V(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function() {
                    !1 !== e._trigger("stop", t) && e._clear();
                })) : !1 !== this._trigger("stop", t) && this._clear(), !1;
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), V.ui.ddmanager && V.ui.ddmanager.dragStop(this, t), 
                this.handleElement.is(t.target) && this.element.trigger("focus"), V.ui.mouse.prototype._mouseUp.call(this, t);
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new V.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this;
            },
            _getHandle: function(t) {
                return !this.options.handle || !!V(t.target).closest(this.element.find(this.options.handle)).length;
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
                this._addClass(this.handleElement, "ui-draggable-handle");
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle");
            },
            _createHelper: function(t) {
                var e = this.options, i = "function" == typeof e.helper;
                t = i ? V(e.helper.apply(this.element[0], [ t ])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                return t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), 
                i && t[0] === this.element[0] && this._setPositionRelative(), t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"), 
                t;
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), "left" in (t = Array.isArray(t) ? {
                    left: +t[0],
                    top: +t[1] || 0
                } : t) && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
                "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0];
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(), e = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== e && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
                t.top += this.scrollParent.scrollTop()), {
                    top: (t = this._isRootNode(this.offsetParent[0]) ? {
                        top: 0,
                        left: 0
                    } : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                };
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                };
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                };
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                };
            },
            _setContainment: function() {
                var t, e, i, s = this.options, n = this.document[0];
                this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), 
                (i = (e = V(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), 
                this.containment = [ (parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
                this.relativeContainer = e)) : this.containment = s.containment : this.containment = [ 0, 0, V(n).width() - this.helperProportions.width - this.margins.left, (V(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = [ V(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, V(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, V(window).scrollLeft() + V(window).width() - this.helperProportions.width - this.margins.left, V(window).scrollTop() + (V(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = null;
            },
            _convertPositionTo: function(t, e) {
                e = e || this.position;
                var i = "absolute" === t ? 1 : -1;
                t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left) * i
                };
            },
            _generatePosition: function(t, e) {
                var i, s = this.options, n = this._isRootNode(this.scrollParent[0]), o = t.pageX, a = t.pageY;
                return n && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (i = this.relativeContainer ? (i = this.relativeContainer.offset(), 
                [ this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top ]) : this.containment, 
                t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), 
                t.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), 
                t.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)), s.grid && (t = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, 
                a = !i || t - this.offset.click.top >= i[1] || t - this.offset.click.top > i[3] ? t : t - this.offset.click.top >= i[1] ? t - s.grid[1] : t + s.grid[1], 
                t = s.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, 
                o = !i || t - this.offset.click.left >= i[0] || t - this.offset.click.left > i[2] ? t : t - this.offset.click.left >= i[0] ? t - s.grid[0] : t + s.grid[0]), 
                "y" === s.axis && (o = this.originalPageX), "x" === s.axis && (a = this.originalPageY)), 
                {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left)
                };
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
                this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
            },
            _trigger: function(t, e, i) {
                return i = i || this._uiHash(), V.ui.plugin.call(this, t, [ e, i, this ], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), 
                i.offset = this.positionAbs), V.Widget.prototype._trigger.call(this, t, e, i);
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                };
            }
        }), V.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, t, i) {
                var s = V.extend({}, t, {
                    item: i.element
                });
                i.sortables = [], V(i.options.connectToSortable).each((function() {
                    var t = V(this).sortable("instance");
                    t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s));
                }));
            },
            stop: function(e, t, i) {
                var s = V.extend({}, t, {
                    item: i.element
                });
                i.cancelHelperRemoval = !1, V.each(i.sortables, (function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, 
                    t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, 
                    t._trigger("deactivate", e, s));
                }));
            },
            drag: function(i, s, n) {
                V.each(n.sortables, (function() {
                    var t = !1, e = this;
                    e.positionAbs = n.positionAbs, e.helperProportions = n.helperProportions, e.offset.click = n.offset.click, 
                    e._intersectsWith(e.containerCache) && (t = !0, V.each(n.sortables, (function() {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, 
                        this.offset.click = n.offset.click, t = this !== e && this._intersectsWith(this.containerCache) && V.contains(e.element[0], this.element[0]) ? !1 : t;
                    }))), t ? (e.isOver || (e.isOver = 1, n._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), 
                    e.options._helper = e.options.helper, e.options.helper = function() {
                        return s.helper[0];
                    }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), 
                    e.offset.click.top = n.offset.click.top, e.offset.click.left = n.offset.click.left, 
                    e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top, 
                    n._trigger("toSortable", i), n.dropped = e.element, V.each(n.sortables, (function() {
                        this.refreshPositions();
                    })), n.currentItem = n.element, e.fromOutside = n), e.currentItem && (e._mouseDrag(i), 
                    s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, 
                    e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), 
                    e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, 
                    e.placeholder && e.placeholder.remove(), s.helper.appendTo(n._parent), n._refreshOffsets(i), 
                    s.position = n._generatePosition(i, !0), n._trigger("fromSortable", i), n.dropped = !1, 
                    V.each(n.sortables, (function() {
                        this.refreshPositions();
                    })));
                }));
            }
        }), V.ui.plugin.add("draggable", "cursor", {
            start: function(t, e, i) {
                var s = V("body");
                i = i.options;
                s.css("cursor") && (i._cursor = s.css("cursor")), s.css("cursor", i.cursor);
            },
            stop: function(t, e, i) {
                i = i.options;
                i._cursor && V("body").css("cursor", i._cursor);
            }
        }), V.ui.plugin.add("draggable", "opacity", {
            start: function(t, e, i) {
                e = V(e.helper), i = i.options;
                e.css("opacity") && (i._opacity = e.css("opacity")), e.css("opacity", i.opacity);
            },
            stop: function(t, e, i) {
                i = i.options;
                i._opacity && V(e.helper).css("opacity", i._opacity);
            }
        }), V.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), 
                i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
            },
            drag: function(t, e, i) {
                var s = i.options, n = !1, o = i.scrollParentNotHidden[0], a = i.document[0];
                o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = n = o.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)), 
                s.axis && "y" === s.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - V(a).scrollTop() < s.scrollSensitivity ? n = V(a).scrollTop(V(a).scrollTop() - s.scrollSpeed) : V(window).height() - (t.pageY - V(a).scrollTop()) < s.scrollSensitivity && (n = V(a).scrollTop(V(a).scrollTop() + s.scrollSpeed))), 
                s.axis && "y" === s.axis || (t.pageX - V(a).scrollLeft() < s.scrollSensitivity ? n = V(a).scrollLeft(V(a).scrollLeft() - s.scrollSpeed) : V(window).width() - (t.pageX - V(a).scrollLeft()) < s.scrollSensitivity && (n = V(a).scrollLeft(V(a).scrollLeft() + s.scrollSpeed)))), 
                !1 !== n && V.ui.ddmanager && !s.dropBehaviour && V.ui.ddmanager.prepareOffsets(i, t);
            }
        }), V.ui.plugin.add("draggable", "snap", {
            start: function(t, e, i) {
                var s = i.options;
                i.snapElements = [], V(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each((function() {
                    var t = V(this), e = t.offset();
                    this !== i.element[0] && i.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: e.top,
                        left: e.left
                    });
                }));
            },
            drag: function(t, e, i) {
                for (var s, n, o, a, r, l, h, c, u, d = i.options, p = d.snapTolerance, f = e.offset.left, g = f + i.helperProportions.width, m = e.offset.top, _ = m + i.helperProportions.height, v = i.snapElements.length - 1; 0 <= v; v--) l = (r = i.snapElements[v].left - i.margins.left) + i.snapElements[v].width, 
                c = (h = i.snapElements[v].top - i.margins.top) + i.snapElements[v].height, g < r - p || l + p < f || _ < h - p || c + p < m || !V.contains(i.snapElements[v].item.ownerDocument, i.snapElements[v].item) ? (i.snapElements[v].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, V.extend(i._uiHash(), {
                    snapItem: i.snapElements[v].item
                })), i.snapElements[v].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(h - _) <= p, 
                n = Math.abs(c - m) <= p, o = Math.abs(r - g) <= p, a = Math.abs(l - f) <= p, s && (e.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top), n && (e.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r - i.helperProportions.width
                }).left), a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), u = s || n || o || a, "outer" !== d.snapMode && (s = Math.abs(h - m) <= p, 
                n = Math.abs(c - _) <= p, o = Math.abs(r - f) <= p, a = Math.abs(l - g) <= p, s && (e.position.top = i._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top), n && (e.position.top = i._convertPositionTo("relative", {
                    top: c - i.helperProportions.height,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left), a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)), !i.snapElements[v].snapping && (s || n || o || a || u) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, V.extend(i._uiHash(), {
                    snapItem: i.snapElements[v].item
                })), i.snapElements[v].snapping = s || n || o || a || u);
            }
        }), V.ui.plugin.add("draggable", "stack", {
            start: function(t, e, i) {
                var s;
                i = i.options, i = V.makeArray(V(i.stack)).sort((function(t, e) {
                    return (parseInt(V(t).css("zIndex"), 10) || 0) - (parseInt(V(e).css("zIndex"), 10) || 0);
                }));
                i.length && (s = parseInt(V(i[0]).css("zIndex"), 10) || 0, V(i).each((function(t) {
                    V(this).css("zIndex", s + t);
                })), this.css("zIndex", s + i.length));
            }
        }), V.ui.plugin.add("draggable", "zIndex", {
            start: function(t, e, i) {
                e = V(e.helper), i = i.options;
                e.css("zIndex") && (i._zIndex = e.css("zIndex")), e.css("zIndex", i.zIndex);
            },
            stop: function(t, e, i) {
                i = i.options;
                i._zIndex && V(e.helper).css("zIndex", i._zIndex);
            }
        });
        V.ui.draggable;
        function g(t, e, i) {
            return e <= t && t < e + i;
        }
        V.widget("ui.droppable", {
            version: "1.13.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, e = this.options, i = e.accept;
                this.isover = !1, this.isout = !0, this.accept = "function" == typeof i ? i : function(t) {
                    return t.is(i);
                }, this.proportions = function() {
                    if (!arguments.length) return t = t || {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    };
                    t = arguments[0];
                }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable");
            },
            _addToManager: function(t) {
                V.ui.ddmanager.droppables[t] = V.ui.ddmanager.droppables[t] || [], V.ui.ddmanager.droppables[t].push(this);
            },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
            },
            _destroy: function() {
                var t = V.ui.ddmanager.droppables[this.options.scope];
                this._splice(t);
            },
            _setOption: function(t, e) {
                var i;
                "accept" === t ? this.accept = "function" == typeof e ? e : function(t) {
                    return t.is(e);
                } : "scope" === t && (i = V.ui.ddmanager.droppables[this.options.scope], this._splice(i), 
                this._addToManager(e)), this._super(t, e);
            },
            _activate: function(t) {
                var e = V.ui.ddmanager.current;
                this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
            },
            _deactivate: function(t) {
                var e = V.ui.ddmanager.current;
                this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e));
            },
            _over: function(t) {
                var e = V.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), 
                this._trigger("over", t, this.ui(e)));
            },
            _out: function(t) {
                var e = V.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), 
                this._trigger("out", t, this.ui(e)));
            },
            _drop: function(e, t) {
                var i = t || V.ui.ddmanager.current, s = !1;
                return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function() {
                    var t = V(this).droppable("instance");
                    if (t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && V.ui.intersect(i, V.extend(t, {
                        offset: t.element.offset()
                    }), t.options.tolerance, e)) return !(s = !0);
                })), !s && !!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), 
                this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element));
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                };
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover");
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover");
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active");
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active");
            }
        }), V.ui.intersect = function(t, e, i, s) {
            if (!e.offset) return !1;
            var n = (t.positionAbs || t.position.absolute).left + t.margins.left, o = (t.positionAbs || t.position.absolute).top + t.margins.top, a = n + t.helperProportions.width, r = o + t.helperProportions.height, l = e.offset.left, h = e.offset.top, c = l + e.proportions().width, u = h + e.proportions().height;
            switch (i) {
              case "fit":
                return l <= n && a <= c && h <= o && r <= u;

              case "intersect":
                return l < n + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && h < o + t.helperProportions.height / 2 && r - t.helperProportions.height / 2 < u;

              case "pointer":
                return g(s.pageY, h, e.proportions().height) && g(s.pageX, l, e.proportions().width);

              case "touch":
                return (h <= o && o <= u || h <= r && r <= u || o < h && u < r) && (l <= n && n <= c || l <= a && a <= c || n < l && c < a);

              default:
                return !1;
            }
        }, !(V.ui.ddmanager = {
            current: null,
            droppables: {
                default: []
            },
            prepareOffsets: function(t, e) {
                var i, s, n = V.ui.ddmanager.droppables[t.options.scope] || [], o = e ? e.type : null, a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; i < n.length; i++) if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element))) {
                    for (s = 0; s < a.length; s++) if (a[s] === n[i].element[0]) {
                        n[i].proportions().height = 0;
                        continue t;
                    }
                    n[i].visible = "none" !== n[i].element.css("display"), n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), 
                    n[i].offset = n[i].element.offset(), n[i].proportions({
                        width: n[i].element[0].offsetWidth,
                        height: n[i].element[0].offsetHeight
                    }));
                }
            },
            drop: function(t, e) {
                var i = !1;
                return V.each((V.ui.ddmanager.droppables[t.options.scope] || []).slice(), (function() {
                    this.options && (!this.options.disabled && this.visible && V.ui.intersect(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), 
                    !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, 
                    this.isover = !1, this._deactivate.call(this, e)));
                })), i;
            },
            dragStart: function(t, e) {
                t.element.parentsUntil("body").on("scroll.droppable", (function() {
                    t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
                }));
            },
            drag: function(n, o) {
                n.options.refreshPositions && V.ui.ddmanager.prepareOffsets(n, o), V.each(V.ui.ddmanager.droppables[n.options.scope] || [], (function() {
                    var t, e, i, s;
                    this.options.disabled || this.greedyChild || !this.visible || (s = !(i = V.ui.intersect(n, this, this.options.tolerance, o)) && this.isover ? "isout" : i && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, 
                    (i = this.element.parents(":data(ui-droppable)").filter((function() {
                        return V(this).droppable("instance").options.scope === e;
                    }))).length && ((t = V(i[0]).droppable("instance")).greedyChild = "isover" === s)), 
                    t && "isover" === s && (t.isover = !1, t.isout = !0, t._out.call(t, o)), this[s] = !0, 
                    this["isout" === s ? "isover" : "isout"] = !1, this["isover" === s ? "_over" : "_out"].call(this, o), 
                    t && "isout" === s && (t.isout = !1, t.isover = !0, t._over.call(t, o)));
                }));
            },
            dragStop: function(t, e) {
                t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || V.ui.ddmanager.prepareOffsets(t, e);
            }
        }) !== V.uiBackCompat && V.widget("ui.droppable", V.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
            },
            _removeActiveClass: function() {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
            },
            _addHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
            },
            _removeHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
            }
        });
        V.ui.droppable;
        V.widget("ui.resizable", V.ui.mouse, {
            version: "1.13.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseFloat(t) || 0;
            },
            _isNumber: function(t) {
                return !isNaN(parseFloat(t));
            },
            _hasScroll: function(t, e) {
                if ("hidden" === V(t).css("overflow")) return !1;
                var i = e && "left" === e ? "scrollLeft" : "scrollTop";
                e = !1;
                if (0 < t[i]) return !0;
                try {
                    t[i] = 1, e = 0 < t[i], t[i] = 0;
                } catch (t) {}
                return e;
            },
            _create: function() {
                var t, e = this.options, i = this;
                this._addClass("ui-resizable"), V.extend(this, {
                    _aspectRatio: !!e.aspectRatio,
                    aspectRatio: e.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(V("<div class='ui-wrapper'></div>").css({
                    overflow: "hidden",
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
                this.elementIsWrapper = !0, t = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
                this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), 
                e.autoHide && V(this.element).on("mouseenter", (function() {
                    e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show());
                })).on("mouseleave", (function() {
                    e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide());
                })), this._mouseInit();
            },
            _destroy: function() {
                this._mouseDestroy(), this._addedHandles.remove();
                function t(t) {
                    V(t).removeData("resizable").removeData("ui-resizable").off(".resizable");
                }
                var e;
                return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
                t(this.originalElement), this;
            },
            _setOption: function(t, e) {
                switch (this._super(t, e), t) {
                  case "handles":
                    this._removeHandles(), this._setupHandles();
                    break;

                  case "aspectRatio":
                    this._aspectRatio = !!e;
                }
            },
            _setupHandles: function() {
                var t, e, i, s, n, o = this.options, a = this;
                if (this.handles = o.handles || (V(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = V(), this._addedHandles = V(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
                i = this.handles.split(","), this.handles = {}, e = 0; e < i.length; e++) s = "ui-resizable-" + (t = String.prototype.trim.call(i[e])), 
                n = V("<div>"), this._addClass(n, "ui-resizable-handle " + s), n.css({
                    zIndex: o.zIndex
                }), this.handles[t] = ".ui-resizable-" + t, this.element.children(this.handles[t]).length || (this.element.append(n), 
                this._addedHandles = this._addedHandles.add(n));
                this._renderAxis = function(t) {
                    var e, i, s;
                    for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = V(this.handles[e]), 
                    this._on(this.handles[e], {
                        mousedown: a._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = V(this.handles[e], this.element), 
                    s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), i = [ "padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left" ].join(""), 
                    t.css(i, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e]);
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
                this._handles.disableSelection(), this._handles.on("mouseover", (function() {
                    a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                    a.axis = n && n[1] ? n[1] : "se");
                })), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
            },
            _removeHandles: function() {
                this._addedHandles.remove();
            },
            _mouseCapture: function(t) {
                var e, i, s = !1;
                for (e in this.handles) (i = V(this.handles[e])[0]) !== t.target && !V.contains(i, t.target) || (s = !0);
                return !this.options.disabled && s;
            },
            _mouseStart: function(t) {
                var e, i, s = this.options, n = this.element;
                return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), 
                i = this._num(this.helper.css("top")), s.containment && (e += V(s.containment).scrollLeft() || 0, 
                i += V(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: e,
                    top: i
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: n.width(),
                    height: n.height()
                }, this.originalSize = this._helper ? {
                    width: n.outerWidth(),
                    height: n.outerHeight()
                } : {
                    width: n.width(),
                    height: n.height()
                }, this.sizeDiff = {
                    width: n.outerWidth() - n.width(),
                    height: n.outerHeight() - n.height()
                }, this.originalPosition = {
                    left: e,
                    top: i
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
                s = V(".ui-resizable-" + this.axis).css("cursor"), V("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), 
                this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
            },
            _mouseDrag: function(t) {
                var e = this.originalMousePosition, i = this.axis, s = t.pageX - e.left || 0;
                e = t.pageY - e.top || 0, i = this._change[i];
                return this._updatePrevProperties(), i && (e = i.apply(this, [ t, s, e ]), this._updateVirtualBoundaries(t.shiftKey), 
                (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), 
                this._updateCache(e), this._propagate("resize", t), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
                V.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), 
                this._applyChanges())), !1;
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var e, i, s, n = this.options, o = this;
                return this._helper && (s = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : o.sizeDiff.height, 
                i = e ? 0 : o.sizeDiff.width, e = {
                    width: o.helper.width() - i,
                    height: o.helper.height() - s
                }, i = parseFloat(o.element.css("left")) + (o.position.left - o.originalPosition.left) || null, 
                s = parseFloat(o.element.css("top")) + (o.position.top - o.originalPosition.top) || null, 
                n.animate || this.element.css(V.extend(e, {
                    top: s,
                    left: i
                })), o.helper.height(o.size.height), o.helper.width(o.size.width), this._helper && !n.animate && this._proportionallyResize()), 
                V("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), 
                this._helper && this.helper.remove(), !1;
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                };
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), 
                this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), 
                this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), 
                this.helper.css(t), t;
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, s = this.options, n = {
                    minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                    maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                    minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                    maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
                };
                (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, i = n.minWidth / this.aspectRatio, 
                s = n.maxHeight * this.aspectRatio, t = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), 
                i > n.minHeight && (n.minHeight = i), s < n.maxWidth && (n.maxWidth = s), t < n.maxHeight && (n.maxHeight = t)), 
                this._vBoundaries = n;
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), 
                this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), 
                this._isNumber(t.width) && (this.size.width = t.width);
            },
            _updateRatio: function(t) {
                var e = this.position, i = this.size, s = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), 
                "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), 
                t.left = e.left + (i.width - t.width)), t;
            },
            _respectSize: function(t) {
                var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width, l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i);
                i = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), 
                n && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), 
                a && i && (t.top = l - e.minHeight), n && i && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, 
                t;
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], s = [ t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth") ], n = [ t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft") ]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, 
                i[e] += parseFloat(n[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                };
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], 
                this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), 
                t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                });
            },
            _renderProxy: function() {
                var t = this.element, e = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || V("<div></div>").css({
                    overflow: "hidden"
                }), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++e.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    };
                },
                w: function(t, e) {
                    var i = this.originalSize;
                    return {
                        left: this.originalPosition.left + e,
                        width: i.width - e
                    };
                },
                n: function(t, e, i) {
                    var s = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: s.height - i
                    };
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    };
                },
                se: function(t, e, i) {
                    return V.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ t, e, i ]));
                },
                sw: function(t, e, i) {
                    return V.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ t, e, i ]));
                },
                ne: function(t, e, i) {
                    return V.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ t, e, i ]));
                },
                nw: function(t, e, i) {
                    return V.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ t, e, i ]));
                }
            },
            _propagate: function(t, e) {
                V.ui.plugin.call(this, t, [ e, this.ui() ]), "resize" !== t && this._trigger(t, e, this.ui());
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                };
            }
        }), V.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = V(this).resizable("instance"), t = i.options, s = i._proportionallyResizeElements, n = s.length && /textarea/i.test(s[0].nodeName), o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, a = n ? 0 : i.sizeDiff.width;
                n = {
                    width: i.size.width - a,
                    height: i.size.height - o
                }, a = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, 
                o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(V.extend(n, o && a ? {
                    top: o,
                    left: a
                } : {}), {
                    duration: t.animateDuration,
                    easing: t.animateEasing,
                    step: function() {
                        var t = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && V(s[0]).css({
                            width: t.width,
                            height: t.height
                        }), i._updateCache(t), i._propagate("resize", e);
                    }
                });
            }
        }), V.ui.plugin.add("resizable", "containment", {
            start: function() {
                var i, s, n = V(this).resizable("instance"), t = n.options, e = n.element, o = t.containment, a = o instanceof V ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
                a && (n.containerElement = V(a), /document/.test(o) || o === document ? (n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: V(document),
                    left: 0,
                    top: 0,
                    width: V(document).width(),
                    height: V(document).height() || document.body.parentNode.scrollHeight
                }) : (i = V(a), s = [], V([ "Top", "Right", "Left", "Bottom" ]).each((function(t, e) {
                    s[t] = n._num(i.css("padding" + e));
                })), n.containerOffset = i.offset(), n.containerPosition = i.position(), n.containerSize = {
                    height: i.innerHeight() - s[3],
                    width: i.innerWidth() - s[1]
                }, t = n.containerOffset, e = n.containerSize.height, o = n.containerSize.width, 
                o = n._hasScroll(a, "left") ? a.scrollWidth : o, e = n._hasScroll(a) ? a.scrollHeight : e, 
                n.parentData = {
                    element: a,
                    left: t.left,
                    top: t.top,
                    width: o,
                    height: e
                }));
            },
            resize: function(t) {
                var e = V(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.position, o = e._aspectRatio || t.shiftKey, a = {
                    top: 0,
                    left: 0
                }, r = e.containerElement;
                t = !0;
                r[0] !== document && /static/.test(r.css("position")) && (a = s), n.left < (e._helper ? s.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - a.left), 
                o && (e.size.height = e.size.width / e.aspectRatio, t = !1), e.position.left = i.helper ? s.left : 0), 
                n.top < (e._helper ? s.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top), 
                o && (e.size.width = e.size.height * e.aspectRatio, t = !1), e.position.top = e._helper ? s.top : 0), 
                i = e.containerElement.get(0) === e.element.parent().get(0), n = /relative|absolute/.test(e.containerElement.css("position")), 
                i && n ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, 
                e.offset.top = e.element.offset().top), n = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - s.left)), 
                s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - s.top)), 
                n + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - n, 
                o && (e.size.height = e.size.width / e.aspectRatio, t = !1)), s + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - s, 
                o && (e.size.width = e.size.height * e.aspectRatio, t = !1)), t || (e.position.left = e.prevPosition.left, 
                e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height);
            },
            stop: function() {
                var t = V(this).resizable("instance"), e = t.options, i = t.containerOffset, s = t.containerPosition, n = t.containerElement, o = V(t.helper), a = o.offset(), r = o.outerWidth() - t.sizeDiff.width;
                o = o.outerHeight() - t.sizeDiff.height;
                t._helper && !e.animate && /relative/.test(n.css("position")) && V(this).css({
                    left: a.left - s.left - i.left,
                    width: r,
                    height: o
                }), t._helper && !e.animate && /static/.test(n.css("position")) && V(this).css({
                    left: a.left - s.left - i.left,
                    width: r,
                    height: o
                });
            }
        }), V.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = V(this).resizable("instance").options;
                V(t.alsoResize).each((function() {
                    var t = V(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseFloat(t.width()),
                        height: parseFloat(t.height()),
                        left: parseFloat(t.css("left")),
                        top: parseFloat(t.css("top"))
                    });
                }));
            },
            resize: function(t, i) {
                var e = V(this).resizable("instance"), s = e.options, n = e.originalSize, o = e.originalPosition, a = {
                    height: e.size.height - n.height || 0,
                    width: e.size.width - n.width || 0,
                    top: e.position.top - o.top || 0,
                    left: e.position.left - o.left || 0
                };
                V(s.alsoResize).each((function() {
                    var t = V(this), s = V(this).data("ui-resizable-alsoresize"), n = {}, e = t.parents(i.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                    V.each(e, (function(t, e) {
                        var i = (s[e] || 0) + (a[e] || 0);
                        i && 0 <= i && (n[e] = i || null);
                    })), t.css(n);
                }));
            },
            stop: function() {
                V(this).removeData("ui-resizable-alsoresize");
            }
        }), V.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = V(this).resizable("instance"), e = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: e.height,
                    width: e.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== V.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), 
                t.ghost.appendTo(t.helper);
            },
            resize: function() {
                var t = V(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                });
            },
            stop: function() {
                var t = V(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
            }
        }), V.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, e = V(this).resizable("instance"), i = e.options, s = e.size, n = e.originalSize, o = e.originalPosition, a = e.axis, r = "number" == typeof i.grid ? [ i.grid, i.grid ] : i.grid, l = r[0] || 1, h = r[1] || 1, c = Math.round((s.width - n.width) / l) * l, u = Math.round((s.height - n.height) / h) * h, d = n.width + c, p = n.height + u, f = i.maxWidth && i.maxWidth < d, g = i.maxHeight && i.maxHeight < p, m = i.minWidth && i.minWidth > d;
                s = i.minHeight && i.minHeight > p;
                i.grid = r, m && (d += l), s && (p += h), f && (d -= l), g && (p -= h), /^(se|s|e)$/.test(a) ? (e.size.width = d, 
                e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, 
                e.size.height = p, e.position.left = o.left - c) : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 
                0 < p - h ? (e.size.height = p, e.position.top = o.top - u) : (p = h - t.height, 
                e.size.height = p, e.position.top = o.top + n.height - p), 0 < d - l ? (e.size.width = d, 
                e.position.left = o.left - c) : (d = l - t.width, e.size.width = d, e.position.left = o.left + n.width - d));
            }
        });
        V.ui.resizable, V.widget("ui.selectable", V.ui.mouse, {
            version: "1.13.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var i = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    i.elementPos = V(i.element[0]).offset(), i.selectees = V(i.options.filter, i.element[0]), 
                    i._addClass(i.selectees, "ui-selectee"), i.selectees.each((function() {
                        var t = V(this), e = t.offset();
                        e = {
                            left: e.left - i.elementPos.left,
                            top: e.top - i.elementPos.top
                        };
                        V.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: e.left,
                            top: e.top,
                            right: e.left + t.outerWidth(),
                            bottom: e.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        });
                    }));
                }, this.refresh(), this._mouseInit(), this.helper = V("<div>"), this._addClass(this.helper, "ui-selectable-helper");
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"), this._mouseDestroy();
            },
            _mouseStart: function(i) {
                var s = this, t = this.options;
                this.opos = [ i.pageX, i.pageY ], this.elementPos = V(this.element[0]).offset(), 
                this.options.disabled || (this.selectees = V(t.filter, this.element[0]), this._trigger("start", i), 
                V(t.appendTo).append(this.helper), this.helper.css({
                    left: i.pageX,
                    top: i.pageY,
                    width: 0,
                    height: 0
                }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each((function() {
                    var t = V.data(this, "selectable-item");
                    t.startselected = !0, i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"), 
                    t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, 
                    s._trigger("unselecting", i, {
                        unselecting: t.element
                    }));
                })), V(i.target).parents().addBack().each((function() {
                    var t, e = V.data(this, "selectable-item");
                    if (e) return t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), 
                    s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), 
                    e.unselecting = !t, e.selecting = t, (e.selected = t) ? s._trigger("selecting", i, {
                        selecting: e.element
                    }) : s._trigger("unselecting", i, {
                        unselecting: e.element
                    }), !1;
                })));
            },
            _mouseDrag: function(s) {
                if (this.dragged = !0, !this.options.disabled) {
                    var t, n = this, o = this.options, a = this.opos[0], r = this.opos[1], l = s.pageX, h = s.pageY;
                    return l < a && (t = l, l = a, a = t), h < r && (t = h, h = r, r = t), this.helper.css({
                        left: a,
                        top: r,
                        width: l - a,
                        height: h - r
                    }), this.selectees.each((function() {
                        var t = V.data(this, "selectable-item"), e = !1, i = {};
                        t && t.element !== n.element[0] && (i.left = t.left + n.elementPos.left, i.right = t.right + n.elementPos.left, 
                        i.top = t.top + n.elementPos.top, i.bottom = t.bottom + n.elementPos.top, "touch" === o.tolerance ? e = !(i.left > l || i.right < a || i.top > h || i.bottom < r) : "fit" === o.tolerance && (e = i.left > a && i.right < l && i.top > r && i.bottom < h), 
                        e ? (t.selected && (n._removeClass(t.$element, "ui-selected"), t.selected = !1), 
                        t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), 
                        t.selecting || (n._addClass(t.$element, "ui-selecting"), t.selecting = !0, n._trigger("selecting", s, {
                            selecting: t.element
                        }))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (n._removeClass(t.$element, "ui-selecting"), 
                        t.selecting = !1, n._addClass(t.$element, "ui-selected"), t.selected = !0) : (n._removeClass(t.$element, "ui-selecting"), 
                        t.selecting = !1, t.startselected && (n._addClass(t.$element, "ui-unselecting"), 
                        t.unselecting = !0), n._trigger("unselecting", s, {
                            unselecting: t.element
                        }))), t.selected && (s.metaKey || s.ctrlKey || t.startselected || (n._removeClass(t.$element, "ui-selected"), 
                        t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, 
                        n._trigger("unselecting", s, {
                            unselecting: t.element
                        })))));
                    })), !1;
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, V(".ui-unselecting", this.element[0]).each((function() {
                    var t = V.data(this, "selectable-item");
                    i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, 
                    i._trigger("unselected", e, {
                        unselected: t.element
                    });
                })), V(".ui-selecting", this.element[0]).each((function() {
                    var t = V.data(this, "selectable-item");
                    i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), 
                    t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {
                        selected: t.element
                    });
                })), this._trigger("stop", e), this.helper.remove(), !1;
            }
        }), V.widget("ui.sortable", V.ui.mouse, {
            version: "1.13.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return e <= t && t < e + i;
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
            },
            _create: function() {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
                this._mouseInit(), this._setHandleClassName(), this.ready = !0;
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName();
            },
            _setHandleClassName: function() {
                var t = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
                V.each(this.items, (function() {
                    t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
                }));
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this;
            },
            _mouseCapture: function(t, e) {
                var i = null, s = !1, n = this;
                return !this.reverting && !this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), 
                V(t.target).parents().each((function() {
                    if (V.data(this, n.widgetName + "-item") === n) return i = V(this), !1;
                })), !!(i = V.data(t.target, n.widgetName + "-item") === n ? V(t.target) : i) && !(this.options.handle && !e && (V(this.options.handle, i).find("*").addBack().each((function() {
                    this === t.target && (s = !0);
                })), !s)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0));
            },
            _mouseStart: function(t, e, i) {
                var s, n, o = this.options;
                if ((this.currentContainer = this).refreshPositions(), this.appendTo = V("parent" !== o.appendTo ? o.appendTo : this.currentItem.parent()), 
                this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), 
                this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, V.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
                o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
                this.scrollParent = this.placeholder.scrollParent(), V.extend(this.offset, {
                    parent: this._getParentOffset()
                }), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), 
                this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = V("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), 
                o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
                this.helper.css("zIndex", o.zIndex)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
                this.helper.css("opacity", o.opacity)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
                this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
                !i) for (s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
                return V.ui.ddmanager && (V.ui.ddmanager.current = this), V.ui.ddmanager && !o.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t), 
                this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this.helper.parent().is(this.appendTo) || (this.helper.detach().appendTo(this.appendTo), 
                this.offset.parent = this._getParentOffset()), this.position = this.originalPosition = this._generatePosition(t), 
                this.originalPageX = t.pageX, this.originalPageY = t.pageY, this.lastPositionAbs = this.positionAbs = this._convertPositionTo("absolute"), 
                this._mouseDrag(t), !0;
            },
            _scroll: function(t) {
                var e = this.options, i = !1;
                return this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < e.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + e.scrollSpeed : t.pageY - this.overflowOffset.top < e.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - e.scrollSpeed), 
                this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < e.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + e.scrollSpeed : t.pageX - this.overflowOffset.left < e.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - e.scrollSpeed)) : (t.pageY - this.document.scrollTop() < e.scrollSensitivity ? i = this.document.scrollTop(this.document.scrollTop() - e.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < e.scrollSensitivity && (i = this.document.scrollTop(this.document.scrollTop() + e.scrollSpeed)), 
                t.pageX - this.document.scrollLeft() < e.scrollSensitivity ? i = this.document.scrollLeft(this.document.scrollLeft() - e.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < e.scrollSensitivity && (i = this.document.scrollLeft(this.document.scrollLeft() + e.scrollSpeed))), 
                i;
            },
            _mouseDrag: function(t) {
                var e, i, s, n, o = this.options;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
                this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
                this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
                o.scroll && !1 !== this._scroll(t) && (this._refreshItemPositions(!0), V.ui.ddmanager && !o.dropBehaviour && V.ui.ddmanager.prepareOffsets(this, t)), 
                this.dragDirection = {
                    vertical: this._getDragVerticalDirection(),
                    horizontal: this._getDragHorizontalDirection()
                }, e = this.items.length - 1; 0 <= e; e--) if (s = (i = this.items[e]).item[0], 
                (n = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === n ? "next" : "prev"]()[0] === s || V.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && V.contains(this.element[0], s))) {
                    if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                    this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                    break;
                }
                return this._contactContainers(t), V.ui.ddmanager && V.ui.ddmanager.drag(this, t), 
                this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
                !1;
            },
            _mouseStop: function(t, e) {
                var i, s, n, o;
                if (t) return V.ui.ddmanager && !this.options.dropBehaviour && V.ui.ddmanager.drop(this, t), 
                this.options.revert ? (s = (i = this).placeholder.offset(), o = {}, (n = this.options.axis) && "x" !== n || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                n && "y" !== n || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                this.reverting = !0, V(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, (function() {
                    i._clear(t);
                }))) : this._clear(t, e), !1;
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new V.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                    this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), 
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), 
                    this.containers[t].containerCache.over = 0);
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
                "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
                V.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? V(this.domPosition.prev).after(this.currentItem) : V(this.domPosition.parent).prepend(this.currentItem)), 
                this;
            },
            serialize: function(e) {
                var t = this._getItemsAsjQuery(e && e.connected), i = [];
                return e = e || {}, V(t).each((function() {
                    var t = (V(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]));
                })), !i.length && e.key && i.push(e.key + "="), i.join("&");
            },
            toArray: function(t) {
                var e = this._getItemsAsjQuery(t && t.connected), i = [];
                return t = t || {}, e.each((function() {
                    i.push(V(t.item || this).attr(t.attribute || "id") || "");
                })), i;
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, l = r + t.height, h = this.offset.click.top, c = this.offset.click.left;
                h = "x" === this.options.axis || r < s + h && s + h < l, c = "y" === this.options.axis || o < e + c && e + c < a;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? h && c : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l;
            },
            _intersectsWithPointer: function(t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height);
                t = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !(!e || !t) && (e = this.dragDirection.vertical, t = this.dragDirection.horizontal, 
                this.floating ? "right" === t || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this.dragDirection.vertical;
                t = this.dragDirection.horizontal;
                return this.floating && t ? "right" === t && i || "left" === t && !i : s && ("down" === s && e || "up" === s && !e);
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != t && (0 < t ? "down" : "up");
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != t && (0 < t ? "right" : "left");
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
                this;
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
            },
            _getItemsAsjQuery: function(t) {
                var e, i, s, n, o = [], a = [], r = this._connectWith();
                if (r && t) for (e = r.length - 1; 0 <= e; e--) for (i = (s = V(r[e], this.document[0])).length - 1; 0 <= i; i--) (n = V.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && a.push([ "function" == typeof n.options.items ? n.options.items.call(n.element) : V(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n ]);
                function l() {
                    o.push(this);
                }
                for (a.push([ "function" == typeof this.options.items ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : V(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
                e = a.length - 1; 0 <= e; e--) a[e][0].each(l);
                return V(o);
            },
            _removeCurrentsFromItems: function() {
                var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = V.grep(this.items, (function(t) {
                    for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1;
                    return !0;
                }));
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [ this ];
                var e, i, s, n, o, a, r, l, h = this.items, c = [ [ "function" == typeof this.options.items ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem
                }) : V(this.options.items, this.element), this ] ], u = this._connectWith();
                if (u && this.ready) for (e = u.length - 1; 0 <= e; e--) for (i = (s = V(u[e], this.document[0])).length - 1; 0 <= i; i--) (n = V.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && (c.push([ "function" == typeof n.options.items ? n.options.items.call(n.element[0], t, {
                    item: this.currentItem
                }) : V(n.options.items, n.element), n ]), this.containers.push(n));
                for (e = c.length - 1; 0 <= e; e--) for (o = c[e][1], l = (a = c[e][i = 0]).length; i < l; i++) (r = V(a[i])).data(this.widgetName + "-item", o), 
                h.push({
                    item: r,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                });
            },
            _refreshItemPositions: function(t) {
                for (var e, i, s = this.items.length - 1; 0 <= s; s--) e = this.items[s], this.currentContainer && e.instance !== this.currentContainer && e.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? V(this.options.toleranceElement, e.item) : e.item, 
                t || (e.width = i.outerWidth(), e.height = i.outerHeight()), i = i.offset(), e.left = i.left, 
                e.top = i.top);
            },
            refreshPositions: function(t) {
                var e, i;
                if (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), 
                this._refreshItemPositions(t), this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (e = this.containers.length - 1; 0 <= e; e--) i = this.containers[e].element.offset(), 
                this.containers[e].containerCache.left = i.left, this.containers[e].containerCache.top = i.top, 
                this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), 
                this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                return this;
            },
            _createPlaceholder: function(i) {
                var s, n, o = (i = i || this).options;
                o.placeholder && o.placeholder.constructor !== String || (s = o.placeholder, n = i.currentItem[0].nodeName.toLowerCase(), 
                o.placeholder = {
                    element: function() {
                        var t = V("<" + n + ">", i.document[0]);
                        return i._addClass(t, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(t, "ui-sortable-helper"), 
                        "tbody" === n ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), V("<tr>", i.document[0]).appendTo(t)) : "tr" === n ? i._createTrPlaceholder(i.currentItem, t) : "img" === n && t.attr("src", i.currentItem.attr("src")), 
                        s || t.css("visibility", "hidden"), t;
                    },
                    update: function(t, e) {
                        s && !o.forcePlaceholderSize || (e.height() && (!o.forcePlaceholderSize || "tbody" !== n && "tr" !== n) || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), 
                        e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)));
                    }
                }), i.placeholder = V(o.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), 
                o.placeholder.update(i, i.placeholder);
            },
            _createTrPlaceholder: function(t, e) {
                var i = this;
                t.children().each((function() {
                    V("<td>&#160;</td>", i.document[0]).attr("colspan", V(this).attr("colspan") || 1).appendTo(e);
                }));
            },
            _contactContainers: function(t) {
                for (var e, i, s, n, o, a, r, l, h, c = null, u = null, d = this.containers.length - 1; 0 <= d; d--) V.contains(this.currentItem[0], this.containers[d].element[0]) || (this._intersectsWith(this.containers[d].containerCache) ? c && V.contains(this.containers[d].element[0], c.element[0]) || (c = this.containers[d], 
                u = d) : this.containers[d].containerCache.over && (this.containers[d]._trigger("out", t, this._uiHash(this)), 
                this.containers[d].containerCache.over = 0));
                if (c) if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)), 
                this.containers[u].containerCache.over = 1); else {
                    for (i = 1e4, s = null, n = (l = c.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                    o = l ? "width" : "height", h = l ? "pageX" : "pageY", e = this.items.length - 1; 0 <= e; e--) V.contains(this.containers[u].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (a = this.items[e].item.offset()[n], 
                    r = !1, t[h] - a > this.items[e][o] / 2 && (r = !0), Math.abs(t[h] - a) < i && (i = Math.abs(t[h] - a), 
                    s = this.items[e], this.direction = r ? "up" : "down"));
                    (s || this.options.dropOnEmpty) && (this.currentContainer !== this.containers[u] ? (s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[u].element, !0), 
                    this._trigger("change", t, this._uiHash()), this.containers[u]._trigger("change", t, this._uiHash(this)), 
                    this.currentContainer = this.containers[u], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                    this.scrollParent = this.placeholder.scrollParent(), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
                    this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1) : this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash()), 
                    this.currentContainer.containerCache.over = 1));
                }
            },
            _createHelper: function(t) {
                var e = this.options;
                t = "function" == typeof e.helper ? V(e.helper.apply(this.element[0], [ t, this.currentItem ])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                return t.parents("body").length || this.appendTo[0].appendChild(t[0]), t[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), t[0].style.width && !e.forceHelperSize || t.width(this.currentItem.width()), 
                t[0].style.height && !e.forceHelperSize || t.height(this.currentItem.height()), 
                t;
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), "left" in (t = Array.isArray(t) ? {
                    left: +t[0],
                    top: +t[1] || 0
                } : t) && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
                "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
                t.top += this.scrollParent.scrollTop()), {
                    top: (t = this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && V.ui.ie ? {
                        top: 0,
                        left: 0
                    } : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                };
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                };
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                };
            },
            _setContainment: function() {
                var t, e, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode), "document" !== i.containment && "window" !== i.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
                /^(document|window|parent)$/.test(i.containment) || (t = V(i.containment)[0], e = V(i.containment).offset(), 
                i = "hidden" !== V(t).css("overflow"), this.containment = [ e.left + (parseInt(V(t).css("borderLeftWidth"), 10) || 0) + (parseInt(V(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(V(t).css("borderTopWidth"), 10) || 0) + (parseInt(V(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(V(t).css("borderLeftWidth"), 10) || 0) - (parseInt(V(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(V(t).css("borderTopWidth"), 10) || 0) - (parseInt(V(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
            },
            _convertPositionTo: function(t, e) {
                e = e || this.position;
                var i = "absolute" === t ? 1 : -1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                t = /(html|body)/i.test(s[0].tagName);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : t ? 0 : s.scrollTop()) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : t ? 0 : s.scrollLeft()) * i
                };
            },
            _generatePosition: function(t) {
                var e = this.options, i = t.pageX, s = t.pageY, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && V.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
                this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (i = this.containment[0] + this.offset.click.left), 
                t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), 
                t.pageX - this.offset.click.left > this.containment[2] && (i = this.containment[2] + this.offset.click.left), 
                t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), 
                e.grid && (t = this.originalPageY + Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1], 
                s = !this.containment || t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - e.grid[1] : t + e.grid[1], 
                t = this.originalPageX + Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0], 
                i = !this.containment || t - this.offset.click.left >= this.containment[0] && t - this.offset.click.left <= this.containment[2] ? t : t - this.offset.click.left >= this.containment[0] ? t - e.grid[0] : t + e.grid[0])), 
                {
                    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()),
                    left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft())
                };
            },
            _rearrange: function(t, e, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
                this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay((function() {
                    n === this.counter && this.refreshPositions(!s);
                }));
            },
            _clear: function(t, e) {
                this.reverting = !1;
                var i, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
                this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
                } else this.currentItem.show();
                function n(e, i, s) {
                    return function(t) {
                        s._trigger(e, t, i._uiHash(i));
                    };
                }
                for (this.fromOutside && !e && s.push((function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside));
                })), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push((function(t) {
                    this._trigger("update", t, this._uiHash());
                })), this !== this.currentContainer && (e || (s.push((function(t) {
                    this._trigger("remove", t, this._uiHash());
                })), s.push(function(e) {
                    return function(t) {
                        e._trigger("receive", t, this._uiHash(this));
                    };
                }.call(this, this.currentContainer)), s.push(function(e) {
                    return function(t) {
                        e._trigger("update", t, this._uiHash(this));
                    };
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) e || s.push(n("deactivate", this, this.containers[i])), 
                this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), 
                this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
                this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
                this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
                this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
                this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
                this.helper = null), !e) {
                    for (i = 0; i < s.length; i++) s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash());
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval;
            },
            _trigger: function() {
                !1 === V.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
            },
            _uiHash: function(t) {
                var e = t || this;
                return {
                    helper: e.helper,
                    placeholder: e.placeholder || V([]),
                    position: e.position,
                    originalPosition: e.originalPosition,
                    offset: e.positionAbs,
                    item: e.currentItem,
                    sender: t ? t.element : null
                };
            }
        }), V.widget("ui.accordion", {
            version: "1.13.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: function(t) {
                    return t.find("> li > :first-child").add(t.find("> :not(li)").even());
                },
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = V(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
                this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), 
                this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh();
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : V()
                };
            },
            _createIcons: function() {
                var t, e = this.options.icons;
                e && (t = V("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header), 
                t.prependTo(this.headers), t = this.active.children(".ui-accordion-header-icon"), 
                this._removeClass(t, e.header)._addClass(t, null, e.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
                this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
                "content" !== this.options.heightStyle && t.css("height", "");
            },
            _setOption: function(t, e) {
                "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
                this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), 
                "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e);
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), 
                this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var e = V.ui.keyCode, i = this.headers.length, s = this.headers.index(t.target), n = !1;
                    switch (t.keyCode) {
                      case e.RIGHT:
                      case e.DOWN:
                        n = this.headers[(s + 1) % i];
                        break;

                      case e.LEFT:
                      case e.UP:
                        n = this.headers[(s - 1 + i) % i];
                        break;

                      case e.SPACE:
                      case e.ENTER:
                        this._eventHandler(t);
                        break;

                      case e.HOME:
                        n = this.headers[0];
                        break;

                      case e.END:
                        n = this.headers[i - 1];
                    }
                    n && (V(t.target).attr("tabIndex", -1), V(n).attr("tabIndex", 0), V(n).trigger("focus"), 
                    t.preventDefault());
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === V.ui.keyCode.UP && t.ctrlKey && V(t.currentTarget).prev().trigger("focus");
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, 
                this.active = V()) : !1 === t.active ? this._activate(0) : this.active.length && !V.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, 
                this.active = V()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), 
                this._destroyIcons(), this._refresh();
            },
            _processPanels: function() {
                var t = this.headers, e = this.panels;
                "function" == typeof this.options.header ? this.headers = this.options.header(this.element) : this.headers = this.element.find(this.options.header), 
                this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
                this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
                this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
                e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
            },
            _refresh: function() {
                var i, t = this.options, e = t.heightStyle, s = this.element.parent();
                this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
                this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
                this.headers.attr("role", "tab").each((function() {
                    var t = V(this), e = t.uniqueId().attr("id"), i = t.next(), s = i.uniqueId().attr("id");
                    t.attr("aria-controls", s), i.attr("aria-labelledby", e);
                })).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), 
                "fill" === e ? (i = s.height(), this.element.siblings(":visible").each((function() {
                    var t = V(this), e = t.css("position");
                    "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
                })), this.headers.each((function() {
                    i -= V(this).outerHeight(!0);
                })), this.headers.next().each((function() {
                    V(this).height(Math.max(0, i - V(this).innerHeight() + V(this).height()));
                })).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each((function() {
                    var t = V(this).is(":visible");
                    t || V(this).show(), i = Math.max(i, V(this).css("height", "").height()), t || V(this).hide();
                })).height(i));
            },
            _activate: function(t) {
                t = this._findActive(t)[0];
                t !== this.active[0] && (t = t || this.active[0], this._eventHandler({
                    target: t,
                    currentTarget: t,
                    preventDefault: V.noop
                }));
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : V();
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && V.each(t.split(" "), (function(t, e) {
                    i[e] = "_eventHandler";
                })), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), 
                this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers);
            },
            _eventHandler: function(t) {
                var e = this.options, i = this.active, s = V(t.currentTarget), n = s[0] === i[0], o = n && e.collapsible, a = o ? V() : s.next(), r = i.next();
                a = {
                    oldHeader: i,
                    oldPanel: r,
                    newHeader: o ? V() : s,
                    newPanel: a
                };
                t.preventDefault(), n && !e.collapsible || !1 === this._trigger("beforeActivate", t, a) || (e.active = !o && this.headers.index(s), 
                this.active = n ? V() : s, this._toggle(a), this._removeClass(i, "ui-accordion-header-active", "ui-state-active"), 
                e.icons && (i = i.children(".ui-accordion-header-icon"), this._removeClass(i, null, e.icons.activeHeader)._addClass(i, null, e.icons.header)), 
                n || (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(s, "ui-accordion-header-active", "ui-state-active"), 
                e.icons && (n = s.children(".ui-accordion-header-icon"), this._removeClass(n, null, e.icons.header)._addClass(n, null, e.icons.activeHeader)), 
                this._addClass(s.next(), "ui-accordion-content-active")));
            },
            _toggle: function(t) {
                var e = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, 
                this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), 
                i.attr({
                    "aria-hidden": "true"
                }), i.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), e.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : e.length && this.headers.filter((function() {
                    return 0 === parseInt(V(this).attr("tabIndex"), 10);
                })).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
            },
            _animate: function(t, i, e) {
                var s, n, o, a = this, r = 0, l = t.css("box-sizing"), h = t.length && (!i.length || t.index() < i.index()), c = this.options.animate || {}, u = h && c.down || c;
                h = function() {
                    a._toggleComplete(e);
                };
                return n = (n = "string" == typeof u ? u : n) || u.easing || c.easing, o = (o = "number" == typeof u ? u : o) || u.duration || c.duration, 
                i.length ? t.length ? (s = t.show().outerHeight(), i.animate(this.hideProps, {
                    duration: o,
                    easing: n,
                    step: function(t, e) {
                        e.now = Math.round(t);
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: n,
                    complete: h,
                    step: function(t, e) {
                        e.now = Math.round(t), "height" !== e.prop ? "content-box" === l && (r += e.now) : "content" !== a.options.heightStyle && (e.now = Math.round(s - i.outerHeight() - r), 
                        r = 0);
                    }
                })) : i.animate(this.hideProps, o, n, h) : t.animate(this.showProps, o, n, h);
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel, i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), 
                e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
            }
        }), V.widget("ui.menu", {
            version: "1.13.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.lastMousePosition = {
                    x: null,
                    y: null
                }, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault(), this._activateItem(t);
                    },
                    "click .ui-menu-item": function(t) {
                        var e = V(t.target), i = V(V.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
                        e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                        this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                    },
                    "mouseenter .ui-menu-item": "_activateItem",
                    "mousemove .ui-menu-item": "_activateItem",
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this._menuItems().first();
                        e || this.focus(t, i);
                    },
                    blur: function(t) {
                        this._delay((function() {
                            V.contains(this.element[0], V.ui.safeActiveElement(this.document[0])) || this.collapseAll(t);
                        }));
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t, !0), this.mouseHandled = !1;
                    }
                });
            },
            _activateItem: function(t) {
                var e, i;
                this.previousFilter || t.clientX === this.lastMousePosition.x && t.clientY === this.lastMousePosition.y || (this.lastMousePosition = {
                    x: t.clientX,
                    y: t.clientY
                }, e = V(t.target).closest(".ui-menu-item"), i = V(t.currentTarget), e[0] === i[0] && (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                this.focus(t, i))));
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
                t.children().each((function() {
                    var t = V(this);
                    t.data("ui-menu-submenu-caret") && t.remove();
                }));
            },
            _keydown: function(t) {
                var e, i, s, n = !0;
                switch (t.keyCode) {
                  case V.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;

                  case V.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;

                  case V.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;

                  case V.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;

                  case V.ui.keyCode.UP:
                    this.previous(t);
                    break;

                  case V.ui.keyCode.DOWN:
                    this.next(t);
                    break;

                  case V.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;

                  case V.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;

                  case V.ui.keyCode.ENTER:
                  case V.ui.keyCode.SPACE:
                    this._activate(t);
                    break;

                  case V.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;

                  default:
                    e = this.previousFilter || "", s = n = !1, i = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), 
                    clearTimeout(this.filterTimer), i === e ? s = !0 : i = e + i, e = this._filterMenuItems(i), 
                    (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (i = String.fromCharCode(t.keyCode), 
                    e = this._filterMenuItems(i)), e.length ? (this.focus(t, e), this.previousFilter = i, 
                    this.filterTimer = this._delay((function() {
                        delete this.previousFilter;
                    }), 1e3)) : delete this.previousFilter;
                }
                n && t.preventDefault();
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
            },
            refresh: function() {
                var t, e, s = this, n = this.options.icons.submenu, i = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
                e = i.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each((function() {
                    var t = V(this), e = t.prev(), i = V("<span>").data("ui-menu-submenu-caret", !0);
                    s._addClass(i, "ui-menu-icon", "ui-icon " + n), e.attr("aria-haspopup", "true").prepend(i), 
                    t.attr("aria-labelledby", e.attr("id"));
                })), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function() {
                    var t = V(this);
                    s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content");
                })), i = (e = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(e, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
                this.active && !V.contains(this.element[0], this.active[0]) && this.blur();
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role];
            },
            _setOption: function(t, e) {
                var i;
                "icons" === t && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)), 
                this._super(t, e);
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t);
            },
            focus: function(t, e) {
                var i;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
                i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), 
                this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
                this._addClass(i, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay((function() {
                    this._close();
                }), this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), 
                this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                });
            },
            _scrollIntoView: function(t) {
                var e, i, s;
                this._hasScroll() && (i = parseFloat(V.css(this.activeMenu[0], "borderTopWidth")) || 0, 
                s = parseFloat(V.css(this.activeMenu[0], "paddingTop")) || 0, e = t.offset().top - this.activeMenu.offset().top - i - s, 
                i = this.activeMenu.scrollTop(), s = this.activeMenu.height(), t = t.outerHeight(), 
                e < 0 ? this.activeMenu.scrollTop(i + e) : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
                this._trigger("blur", t, {
                    item: this.active
                }), this.active = null);
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay((function() {
                    this._close(), this._open(t);
                }), this.delay));
            },
            _open: function(t) {
                var e = V.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
                t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e);
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay((function() {
                    var t = i ? this.element : V(e && e.target).closest(this.element.find(".ui-menu"));
                    t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), 
                    this.activeMenu = t;
                }), i ? 0 : this.delay);
            },
            _close: function(t) {
                (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
            },
            _closeOnDocumentClick: function(t) {
                return !V(t.target).closest(".ui-menu").length;
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text());
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e));
            },
            expand: function(t) {
                var e = this.active && this._menuItems(this.active.children(".ui-menu")).first();
                e && e.length && (this._open(e.parent()), this._delay((function() {
                    this.focus(t, e);
                })));
            },
            next: function(t) {
                this._move("next", "first", t);
            },
            previous: function(t) {
                this._move("prev", "last", t);
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length;
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length;
            },
            _menuItems: function(t) {
                return (t || this.element).find(this.options.items).filter(".ui-menu-item");
            },
            _move: function(t, e, i) {
                var s;
                (s = this.active ? "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[t + "All"](".ui-menu-item").first() : s) && s.length && this.active || (s = this._menuItems(this.activeMenu)[e]()), 
                this.focus(i, s);
            },
            nextPage: function(t) {
                var e, i, s;
                this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, 
                s = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), 
                this.active.nextAll(".ui-menu-item").each((function() {
                    return (e = V(this)).offset().top - i - s < 0;
                })), this.focus(t, e)) : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(t);
            },
            previousPage: function(t) {
                var e, i, s;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, 
                s = this.element.innerHeight(), 0 === V.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()), 
                this.active.prevAll(".ui-menu-item").each((function() {
                    return 0 < (e = V(this)).offset().top - i + s;
                })), this.focus(t, e)) : this.focus(t, this._menuItems(this.activeMenu).first())) : this.next(t);
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight");
            },
            select: function(t) {
                this.active = this.active || V(t.target).closest(".ui-menu-item");
                var e = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e);
            },
            _filterMenuItems: function(t) {
                t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                var e = new RegExp("^" + t, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function() {
                    return e.test(String.prototype.trim.call(V(this).children(".ui-menu-item-wrapper").text()));
                }));
            }
        });
        V.widget("ui.autocomplete", {
            version: "1.13.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            liveRegionTimer: null,
            _create: function() {
                var i, s, n, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t;
                t = "input" === t;
                this.isMultiLine = e || !t && this._isContentEditable(this.element), this.valueMethod = this.element[e || t ? "val" : "text"], 
                this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
                this._on(this.element, {
                    keydown: function(t) {
                        if (this.element.prop("readOnly")) s = n = i = !0; else {
                            s = n = i = !1;
                            var e = V.ui.keyCode;
                            switch (t.keyCode) {
                              case e.PAGE_UP:
                                i = !0, this._move("previousPage", t);
                                break;

                              case e.PAGE_DOWN:
                                i = !0, this._move("nextPage", t);
                                break;

                              case e.UP:
                                i = !0, this._keyEvent("previous", t);
                                break;

                              case e.DOWN:
                                i = !0, this._keyEvent("next", t);
                                break;

                              case e.ENTER:
                                this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                break;

                              case e.TAB:
                                this.menu.active && this.menu.select(t);
                                break;

                              case e.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                                this.close(t), t.preventDefault());
                                break;

                              default:
                                s = !0, this._searchTimeout(t);
                            }
                        }
                    },
                    keypress: function(t) {
                        if (i) return i = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                        if (!s) {
                            var e = V.ui.keyCode;
                            switch (t.keyCode) {
                              case e.PAGE_UP:
                                this._move("previousPage", t);
                                break;

                              case e.PAGE_DOWN:
                                this._move("nextPage", t);
                                break;

                              case e.UP:
                                this._keyEvent("previous", t);
                                break;

                              case e.DOWN:
                                this._keyEvent("next", t);
                            }
                        }
                    },
                    input: function(t) {
                        if (n) return n = !1, void t.preventDefault();
                        this._searchTimeout(t);
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value();
                    },
                    blur: function(t) {
                        clearTimeout(this.searching), this.close(t), this._change(t);
                    }
                }), this._initSource(), this.menu = V("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().attr({
                    unselectable: "on"
                }).menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
                this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault();
                    },
                    menufocus: function(t, e) {
                        var i, s;
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), 
                        void this.document.one("mousemove", (function() {
                            V(t.target).trigger(t.originalEvent);
                        }));
                        s = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: s
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), 
                        (i = e.item.attr("aria-label") || s.value) && String.prototype.trim.call(i).length && (clearTimeout(this.liveRegionTimer), 
                        this.liveRegionTimer = this._delay((function() {
                            this.liveRegion.html(V("<div>").text(i));
                        }), 100));
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item"), s = this.previous;
                        this.element[0] !== V.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                        this.previous = s, this._delay((function() {
                            this.previous = s, this.selectedItem = i;
                        }))), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i;
                    }
                }), this.liveRegion = V("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete");
                    }
                });
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), 
                this.liveRegion.remove();
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), 
                "disabled" === t && e && this.xhr && this.xhr.abort();
            },
            _isEventTargetInWidget: function(t) {
                var e = this.menu.element[0];
                return t.target === this.element[0] || t.target === e || V.contains(e, t.target);
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close();
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t = !(t = !(t = t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front, dialog") : t).length ? this.document[0].body : t;
            },
            _initSource: function() {
                var i, s, n = this;
                Array.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, e) {
                    e(V.ui.autocomplete.filter(i, t.term));
                }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function(t, e) {
                    n.xhr && n.xhr.abort(), n.xhr = V.ajax({
                        url: s,
                        data: t,
                        dataType: "json",
                        success: function(t) {
                            e(t);
                        },
                        error: function() {
                            e([]);
                        }
                    });
                }) : this.source = this.options.source;
            },
            _searchTimeout: function(s) {
                clearTimeout(this.searching), this.searching = this._delay((function() {
                    var t = this.term === this._value(), e = this.menu.element.is(":visible"), i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                    t && (e || i) || (this.selectedItem = null, this.search(null, s));
                }), this.options.delay);
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
            },
            _search: function(t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
                this.source({
                    term: t
                }, this._response());
            },
            _response: function() {
                var e = ++this.requestIndex;
                return function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
                }.bind(this);
            },
            __response: function(t) {
                t = t && this._normalize(t), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), 
                this._trigger("open")) : this._close();
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t);
            },
            _close: function(t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
                this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                });
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : V.map(t, (function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : V.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    });
                }));
            },
            _suggest: function(t) {
                var e = this.menu.element.empty();
                this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), 
                e.position(V.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                });
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
            },
            _renderMenu: function(i, t) {
                var s = this;
                V.each(t, (function(t, e) {
                    s._renderItemData(i, e);
                }));
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e);
            },
            _renderItem: function(t, e) {
                return V("<li>").append(V("<div>").text(e.label)).appendTo(t);
            },
            _move: function(t, e) {
                if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), 
                void this.menu.blur()) : void this.menu[t](e);
                this.search(null, e);
            },
            widget: function() {
                return this.menu.element;
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments);
            },
            _keyEvent: function(t, e) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault());
            },
            _isContentEditable: function(t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
            }
        }), V.extend(V.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            },
            filter: function(t, e) {
                var i = new RegExp(V.ui.autocomplete.escapeRegex(e), "i");
                return V.grep(t, (function(t) {
                    return i.test(t.label || t.value || t);
                }));
            }
        }), V.widget("ui.autocomplete", V.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, 
                clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay((function() {
                    this.liveRegion.html(V("<div>").text(e));
                }), 100));
            }
        });
        V.ui.autocomplete;
        var m = /ui-corner-([a-z]){2,6}/g;
        V.widget("ui.controlgroup", {
            version: "1.13.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function() {
                this._enhance();
            },
            _enhance: function() {
                this.element.attr("role", "toolbar"), this.refresh();
            },
            _destroy: function() {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
                this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
            },
            _initWidgets: function() {
                var o = this, a = [];
                V.each(this.options.items, (function(s, t) {
                    var e, n = {};
                    if (t) return "controlgroupLabel" === s ? ((e = o.element.find(t)).each((function() {
                        var t = V(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                    })), o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void (a = a.concat(e.get()))) : void (V.fn[s] && (n = o["_" + s + "Options"] ? o["_" + s + "Options"]("middle") : {
                        classes: {}
                    }, o.element.find(t).each((function() {
                        var t = V(this), e = t[s]("instance"), i = V.widget.extend({}, n);
                        "button" === s && t.parent(".ui-spinner").length || ((e = e || t[s]()[s]("instance")) && (i.classes = o._resolveClassesValues(i.classes, e)), 
                        t[s](i), i = t[s]("widget"), V.data(i[0], "ui-controlgroup-data", e || t[s]("instance")), 
                        a.push(i[0]));
                    }))));
                })), this.childWidgets = V(V.uniqueSort(a)), this._addClass(this.childWidgets, "ui-controlgroup-item");
            },
            _callChildMethod: function(e) {
                this.childWidgets.each((function() {
                    var t = V(this).data("ui-controlgroup-data");
                    t && t[e] && t[e]();
                }));
            },
            _updateCornerClass: function(t, e) {
                e = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
                this._addClass(t, null, e);
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction, s = {
                    classes: {}
                };
                return s.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], s;
            },
            _spinnerOptions: function(t) {
                t = this._buildSimpleOptions(t, "ui-spinner");
                return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t;
            },
            _buttonOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-button");
            },
            _checkboxradioOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label");
            },
            _selectmenuOptions: function(t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                };
            },
            _resolveClassesValues: function(i, s) {
                var n = {};
                return V.each(i, (function(t) {
                    var e = s.options.classes[t] || "";
                    e = String.prototype.trim.call(e.replace(m, ""));
                    n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
                })), n;
            },
            _setOption: function(t, e) {
                "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), 
                this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable");
            },
            refresh: function() {
                var n, o = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
                this._initWidgets(), n = this.childWidgets, (n = this.options.onlyVisible ? n.filter(":visible") : n).length && (V.each([ "first", "last" ], (function(t, e) {
                    var i, s = n[e]().data("ui-controlgroup-data");
                    s && o["_" + s.widgetName + "Options"] ? ((i = o["_" + s.widgetName + "Options"](1 === n.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, s), 
                    s.element[s.widgetName](i)) : o._updateCornerClass(n[e](), e);
                })), this._callChildMethod("refresh"));
            }
        });
        V.widget("ui.checkboxradio", [ V.ui.formResetMixin, {
            version: "1.13.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function() {
                var t, e = this, i = this._super() || {};
                return this._readType(), t = this.element.labels(), this.label = V(t[t.length - 1]), 
                this.label.length || V.error("No label found for checkboxradio widget"), this.originalLabel = "", 
                this.label.contents().not(this.element[0]).each((function() {
                    e.originalLabel += 3 === this.nodeType ? V(this).text() : this.outerHTML;
                })), this.originalLabel && (i.label = this.originalLabel), null != (t = this.element[0].disabled) && (i.disabled = t), 
                i;
            },
            _create: function() {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
                this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
                this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
                this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
                this._enhance(), t && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
                this._on({
                    change: "_toggleClasses",
                    focus: function() {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                    },
                    blur: function() {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                    }
                });
            },
            _readType: function() {
                var t = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || V.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type);
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked);
            },
            widget: function() {
                return this.label;
            },
            _getRadioGroup: function() {
                var t = this.element[0].name, e = "input[name='" + V.escapeSelector(t) + "']";
                return t ? (this.form.length ? V(this.form[0].elements).filter(e) : V(e).filter((function() {
                    return 0 === V(this)._form().length;
                }))).not(this.element) : V([]);
            },
            _toggleClasses: function() {
                var t = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
                this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), 
                "radio" === this.type && this._getRadioGroup().each((function() {
                    var t = V(this).checkboxradio("instance");
                    t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active");
                }));
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
            },
            _setOption: function(t, e) {
                if ("label" !== t || e) {
                    if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), 
                    void (this.element[0].disabled = e);
                    this.refresh();
                }
            },
            _updateIcon: function(t) {
                var e = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = V("<span>"), this.iconSpace = V("<span> </span>"), 
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
                this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", 
                this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
                this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
                this.iconSpace.remove(), delete this.icon);
            },
            _updateLabel: function() {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), (t = this.iconSpace ? t.not(this.iconSpace[0]) : t).remove(), 
                this.label.append(this.options.label);
            },
            refresh: function() {
                var t = this.element[0].checked, e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
                null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                });
            }
        } ]);
        var _;
        V.ui.checkboxradio;
        V.widget("ui.button", {
            version: "1.13.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), 
                this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), 
                e;
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
                this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
                this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
                this._enhance(), this.element.is("a") && this._on({
                    keyup: function(t) {
                        t.keyCode === V.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                    }
                });
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
                this._updateTooltip());
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
            },
            _updateIcon: function(t, e) {
                var i = "iconPosition" !== t, s = i ? this.options.iconPosition : e;
                t = "top" === s || "bottom" === s;
                this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = V("<span>"), 
                this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
                i && this._addClass(this.icon, null, e), this._attachIcon(s), t ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
                this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = V("<span> </span>"), 
                this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
                this._attachIconSpace(s));
            },
            _destroy: function() {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
                this.hasTitle || this.element.removeAttr("title");
            },
            _attachIconSpace: function(t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
            },
            _attachIcon: function(t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
            },
            _setOptions: function(t) {
                var e = (void 0 === t.showLabel ? this.options : t).showLabel, i = (void 0 === t.icon ? this.options : t).icon;
                e || i || (t.showLabel = !0), this._super(t);
            },
            _setOption: function(t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), 
                this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), 
                "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), 
                "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), 
                this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), 
                (this.element[0].disabled = e) && this.element.trigger("blur"));
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip();
            }
        }), !1 !== V.uiBackCompat && (V.widget("ui.button", V.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
                !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
                this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
                this.options.iconPosition = "end"), this._super();
            },
            _setOption: function(t, e) {
                "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), 
                "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), 
                this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e);
            }
        }), V.fn.button = (_ = V.fn.button, function(i) {
            var t = "string" == typeof i, s = Array.prototype.slice.call(arguments, 1), n = this;
            return t ? this.length || "instance" !== i ? this.each((function() {
                var t = V(this).attr("type"), e = V.data(this, "ui-" + ("checkbox" !== t && "radio" !== t ? "button" : "checkboxradio"));
                return "instance" === i ? (n = e, !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? V.error("no such method '" + i + "' for button widget instance") : (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, 
                !1) : void 0 : V.error("cannot call methods on button prior to initialization; attempted to call method '" + i + "'");
            })) : n = void 0 : (s.length && (i = V.widget.extend.apply(null, [ i ].concat(s))), 
            this.each((function() {
                var t = V(this).attr("type"), e = "checkbox" !== t && "radio" !== t ? "button" : "checkboxradio";
                t = V.data(this, "ui-" + e);
                t ? (t.option(i || {}), t._init && t._init()) : "button" != e ? V(this).checkboxradio(V.extend({
                    icon: !1
                }, i)) : _.call(V(this), i);
            }))), n;
        }), V.fn.buttonset = function() {
            return V.ui.controlgroup || V.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments));
        });
        var v;
        V.ui.button;
        function b() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
            this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
            this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
            this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
            this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
            this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: "",
                selectMonthLabel: "Select month",
                selectYearLabel: "Select year"
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                onUpdateDatepicker: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, V.extend(this._defaults, this.regional[""]), this.regional.en = V.extend(!0, {}, this.regional[""]), 
            this.regional["en-US"] = V.extend(!0, {}, this.regional.en), this.dpDiv = y(V("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
        }
        function y(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", e, (function() {
                V(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).removeClass("ui-datepicker-prev-hover"), 
                -1 !== this.className.indexOf("ui-datepicker-next") && V(this).removeClass("ui-datepicker-next-hover");
            })).on("mouseover", e, w);
        }
        function w() {
            V.datepicker._isDisabledDatepicker((v.inline ? v.dpDiv.parent() : v.input)[0]) || (V(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
            V(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && V(this).addClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && V(this).addClass("ui-datepicker-next-hover"));
        }
        function P(t, e) {
            for (var i in V.extend(t, e), e) null == e[i] && (t[i] = e[i]);
            return t;
        }
        V.extend(V.ui, {
            datepicker: {
                version: "1.13.1"
            }
        }), V.extend(b.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv;
            },
            setDefaults: function(t) {
                return P(this._defaults, t || {}), this;
            },
            _attachDatepicker: function(t, e) {
                var i, s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s;
                t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (i = this._newInst(V(t), n)).settings = V.extend({}, e || {}), 
                "input" === s ? this._connectDatepicker(t, i) : n && this._inlineDatepicker(t, i);
            },
            _newInst: function(t, e) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? y(V("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                };
            },
            _connectDatepicker: function(t, e) {
                var i = V(t);
                e.append = V([]), e.trigger = V([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), 
                i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
                this._autoSize(e), V.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t));
            },
            _attachments: function(t, e) {
                var i, s = this._get(e, "appendText"), n = this._get(e, "isRTL");
                e.append && e.append.remove(), s && (e.append = V("<span>").addClass(this._appendClass).text(s), 
                t[n ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), 
                "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker), 
                "button" !== i && "both" !== i || (s = this._get(e, "buttonText"), i = this._get(e, "buttonImage"), 
                this._get(e, "buttonImageOnly") ? e.trigger = V("<img>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: s,
                    title: s
                }) : (e.trigger = V("<button type='button'>").addClass(this._triggerClass), i ? e.trigger.html(V("<img>").attr({
                    src: i,
                    alt: s,
                    title: s
                })) : e.trigger.text(s)), t[n ? "before" : "after"](e.trigger), e.trigger.on("click", (function() {
                    return V.datepicker._datepickerShowing && V.datepicker._lastInput === t[0] ? V.datepicker._hideDatepicker() : (V.datepicker._datepickerShowing && V.datepicker._lastInput !== t[0] && V.datepicker._hideDatepicker(), 
                    V.datepicker._showDatepicker(t[0])), !1;
                })));
            },
            _autoSize: function(t) {
                var e, i, s, n, o, a;
                this._get(t, "autoSize") && !t.inline && (o = new Date(2009, 11, 20), (a = this._get(t, "dateFormat")).match(/[DM]/) && (e = function(t) {
                    for (n = s = i = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), 
                t.input.attr("size", this._formatDate(t, o).length));
            },
            _inlineDatepicker: function(t, e) {
                var i = V(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), 
                V.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), 
                this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"));
            },
            _dialogDatepicker: function(t, e, i, s, n) {
                var o, a = this._dialogInst;
                return a || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = V("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
                this._dialogInput.on("keydown", this._doKeyDown), V("body").append(this._dialogInput), 
                (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, V.data(this._dialogInput[0], "datepicker", a)), 
                P(a.settings, s || {}), e = e && e.constructor === Date ? this._formatDate(a, e) : e, 
                this._dialogInput.val(e), this._pos = n ? n.length ? n : [ n.pageX, n.pageY ] : null, 
                this._pos || (o = document.documentElement.clientWidth, s = document.documentElement.clientHeight, 
                e = document.documentElement.scrollLeft || document.body.scrollLeft, n = document.documentElement.scrollTop || document.body.scrollTop, 
                this._pos = [ o / 2 - 100 + e, s / 2 - 150 + n ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
                a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
                this._showDatepicker(this._dialogInput[0]), V.blockUI && V.blockUI(this.dpDiv), 
                V.data(this._dialogInput[0], "datepicker", a), this;
            },
            _destroyDatepicker: function(t) {
                var e, i = V(t), s = V.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), V.removeData(t, "datepicker"), 
                "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(), 
                v === s && (v = null, this._curInst = null));
            },
            _enableDatepicker: function(e) {
                var t, i = V(e), s = V.data(e, "datepicker");
                i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, 
                s.trigger.filter("button").each((function() {
                    this.disabled = !1;
                })).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), 
                i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
                this._disabledInputs = V.map(this._disabledInputs, (function(t) {
                    return t === e ? null : t;
                })));
            },
            _disableDatepicker: function(e) {
                var t, i = V(e), s = V.data(e, "datepicker");
                i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, 
                s.trigger.filter("button").each((function() {
                    this.disabled = !0;
                })).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), 
                i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
                this._disabledInputs = V.map(this._disabledInputs, (function(t) {
                    return t === e ? null : t;
                })), this._disabledInputs[this._disabledInputs.length] = e);
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
                return !1;
            },
            _getInst: function(t) {
                try {
                    return V.data(t, "datepicker");
                } catch (t) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(t, e, i) {
                var s, n, o = this._getInst(t);
                if (2 === arguments.length && "string" == typeof e) return "defaults" === e ? V.extend({}, V.datepicker._defaults) : o ? "all" === e ? V.extend({}, o.settings) : this._get(o, e) : null;
                s = e || {}, "string" == typeof e && ((s = {})[e] = i), o && (this._curInst === o && this._hideDatepicker(), 
                n = this._getDateDatepicker(t, !0), e = this._getMinMaxDate(o, "min"), i = this._getMinMaxDate(o, "max"), 
                P(o.settings, s), null !== e && void 0 !== s.dateFormat && void 0 === s.minDate && (o.settings.minDate = this._formatDate(o, e)), 
                null !== i && void 0 !== s.dateFormat && void 0 === s.maxDate && (o.settings.maxDate = this._formatDate(o, i)), 
                "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), 
                this._attachments(V(t), o), this._autoSize(o), this._setDate(o, n), this._updateAlternate(o), 
                this._updateDatepicker(o));
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i);
            },
            _refreshDatepicker: function(t) {
                t = this._getInst(t);
                t && this._updateDatepicker(t);
            },
            _setDateDatepicker: function(t, e) {
                t = this._getInst(t);
                t && (this._setDate(t, e), this._updateDatepicker(t), this._updateAlternate(t));
            },
            _getDateDatepicker: function(t, e) {
                t = this._getInst(t);
                return t && !t.inline && this._setDateFromField(t, e), t ? this._getDate(t) : null;
            },
            _doKeyDown: function(t) {
                var e, i, s = V.datepicker._getInst(t.target), n = !0, o = s.dpDiv.is(".ui-datepicker-rtl");
                if (s._keyEvent = !0, V.datepicker._datepickerShowing) switch (t.keyCode) {
                  case 9:
                    V.datepicker._hideDatepicker(), n = !1;
                    break;

                  case 13:
                    return (i = V("td." + V.datepicker._dayOverClass + ":not(." + V.datepicker._currentClass + ")", s.dpDiv))[0] && V.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), 
                    (e = V.datepicker._get(s, "onSelect")) ? (i = V.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [ i, s ])) : V.datepicker._hideDatepicker(), 
                    !1;

                  case 27:
                    V.datepicker._hideDatepicker();
                    break;

                  case 33:
                    V.datepicker._adjustDate(t.target, t.ctrlKey ? -V.datepicker._get(s, "stepBigMonths") : -V.datepicker._get(s, "stepMonths"), "M");
                    break;

                  case 34:
                    V.datepicker._adjustDate(t.target, t.ctrlKey ? +V.datepicker._get(s, "stepBigMonths") : +V.datepicker._get(s, "stepMonths"), "M");
                    break;

                  case 35:
                    (t.ctrlKey || t.metaKey) && V.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
                    break;

                  case 36:
                    (t.ctrlKey || t.metaKey) && V.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
                    break;

                  case 37:
                    (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), 
                    n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && V.datepicker._adjustDate(t.target, t.ctrlKey ? -V.datepicker._get(s, "stepBigMonths") : -V.datepicker._get(s, "stepMonths"), "M");
                    break;

                  case 38:
                    (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, -7, "D"), n = t.ctrlKey || t.metaKey;
                    break;

                  case 39:
                    (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), 
                    n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && V.datepicker._adjustDate(t.target, t.ctrlKey ? +V.datepicker._get(s, "stepBigMonths") : +V.datepicker._get(s, "stepMonths"), "M");
                    break;

                  case 40:
                    (t.ctrlKey || t.metaKey) && V.datepicker._adjustDate(t.target, 7, "D"), n = t.ctrlKey || t.metaKey;
                    break;

                  default:
                    n = !1;
                } else 36 === t.keyCode && t.ctrlKey ? V.datepicker._showDatepicker(this) : n = !1;
                n && (t.preventDefault(), t.stopPropagation());
            },
            _doKeyPress: function(t) {
                var e, i = V.datepicker._getInst(t.target);
                if (V.datepicker._get(i, "constrainInput")) return e = V.datepicker._possibleChars(V.datepicker._get(i, "dateFormat")), 
                i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i);
            },
            _doKeyUp: function(t) {
                t = V.datepicker._getInst(t.target);
                if (t.input.val() !== t.lastVal) try {
                    V.datepicker.parseDate(V.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, V.datepicker._getFormatConfig(t)) && (V.datepicker._setDateFromField(t), 
                    V.datepicker._updateAlternate(t), V.datepicker._updateDatepicker(t));
                } catch (t) {}
                return !0;
            },
            _showDatepicker: function(t) {
                var e, i, s, n;
                "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = V("input", t.parentNode)[0]), 
                V.datepicker._isDisabledDatepicker(t) || V.datepicker._lastInput === t || (n = V.datepicker._getInst(t), 
                V.datepicker._curInst && V.datepicker._curInst !== n && (V.datepicker._curInst.dpDiv.stop(!0, !0), 
                n && V.datepicker._datepickerShowing && V.datepicker._hideDatepicker(V.datepicker._curInst.input[0])), 
                !1 !== (i = (s = V.datepicker._get(n, "beforeShow")) ? s.apply(t, [ t, n ]) : {}) && (P(n.settings, i), 
                n.lastVal = null, V.datepicker._lastInput = t, V.datepicker._setDateFromField(n), 
                V.datepicker._inDialog && (t.value = ""), V.datepicker._pos || (V.datepicker._pos = V.datepicker._findPos(t), 
                V.datepicker._pos[1] += t.offsetHeight), e = !1, V(t).parents().each((function() {
                    return !(e |= "fixed" === V(this).css("position"));
                })), s = {
                    left: V.datepicker._pos[0],
                    top: V.datepicker._pos[1]
                }, V.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), V.datepicker._updateDatepicker(n), s = V.datepicker._checkOffset(n, s, e), n.dpDiv.css({
                    position: V.datepicker._inDialog && V.blockUI ? "static" : e ? "fixed" : "absolute",
                    display: "none",
                    left: s.left + "px",
                    top: s.top + "px"
                }), n.inline || (i = V.datepicker._get(n, "showAnim"), s = V.datepicker._get(n, "duration"), 
                n.dpDiv.css("z-index", function(t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), 
                        !isNaN(i) && 0 !== i)) return i;
                        t = t.parent();
                    }
                    return 0;
                }(V(t)) + 1), V.datepicker._datepickerShowing = !0, V.effects && V.effects.effect[i] ? n.dpDiv.show(i, V.datepicker._get(n, "showOptions"), s) : n.dpDiv[i || "show"](i ? s : null), 
                V.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), V.datepicker._curInst = n)));
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, (v = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var e, i = this._getNumberOfMonths(t), s = i[1], n = t.dpDiv.find("." + this._dayOverClass + " a"), o = V.datepicker._get(t, "onUpdateDatepicker");
                0 < n.length && w.apply(n.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
                1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), 
                t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
                t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
                t === V.datepicker._curInst && V.datepicker._datepickerShowing && V.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), 
                t.yearshtml && (e = t.yearshtml, setTimeout((function() {
                    e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year").first().replaceWith(t.yearshtml), 
                    e = t.yearshtml = null;
                }), 0)), o && o.apply(t.input ? t.input[0] : null, [ t ]);
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
            },
            _checkOffset: function(t, e, i) {
                var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, a = t.input ? t.input.outerHeight() : 0, r = document.documentElement.clientWidth + (i ? 0 : V(document).scrollLeft()), l = document.documentElement.clientHeight + (i ? 0 : V(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left === t.input.offset().left ? V(document).scrollLeft() : 0, 
                e.top -= i && e.top === t.input.offset().top + a ? V(document).scrollTop() : 0, 
                e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0), 
                e.top -= Math.min(e.top, e.top + n > l && n < l ? Math.abs(n + a) : 0), e;
            },
            _findPos: function(t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || V.expr.pseudos.hidden(t)); ) t = t[i ? "previousSibling" : "nextSibling"];
                return [ (e = V(t).offset()).left, e.top ];
            },
            _hideDatepicker: function(t) {
                var e, i, s = this._curInst;
                !s || t && s !== V.data(t, "datepicker") || this._datepickerShowing && (e = this._get(s, "showAnim"), 
                i = this._get(s, "duration"), t = function() {
                    V.datepicker._tidyDialog(s);
                }, V.effects && (V.effects.effect[e] || V.effects[e]) ? s.dpDiv.hide(e, V.datepicker._get(s, "showOptions"), i, t) : s.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, t), 
                e || t(), this._datepickerShowing = !1, (t = this._get(s, "onClose")) && t.apply(s.input ? s.input[0] : null, [ s.input ? s.input.val() : "", s ]), 
                this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), V.blockUI && (V.unblockUI(), V("body").append(this.dpDiv))), this._inDialog = !1);
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
            },
            _checkExternalClick: function(t) {
                var e;
                V.datepicker._curInst && (e = V(t.target), t = V.datepicker._getInst(e[0]), (e[0].id === V.datepicker._mainDivId || 0 !== e.parents("#" + V.datepicker._mainDivId).length || e.hasClass(V.datepicker.markerClassName) || e.closest("." + V.datepicker._triggerClass).length || !V.datepicker._datepickerShowing || V.datepicker._inDialog && V.blockUI) && (!e.hasClass(V.datepicker.markerClassName) || V.datepicker._curInst === t) || V.datepicker._hideDatepicker());
            },
            _adjustDate: function(t, e, i) {
                var s = V(t);
                t = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(t, e, i), this._updateDatepicker(t));
            },
            _gotoToday: function(t) {
                var e = V(t), i = this._getInst(e[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, 
                i.drawYear = i.selectedYear = i.currentYear) : (t = new Date, i.selectedDay = t.getDate(), 
                i.drawMonth = i.selectedMonth = t.getMonth(), i.drawYear = i.selectedYear = t.getFullYear()), 
                this._notifyChange(i), this._adjustDate(e);
            },
            _selectMonthYear: function(t, e, i) {
                var s = V(t);
                t = this._getInst(s[0]);
                t["selected" + ("M" === i ? "Month" : "Year")] = t["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), 
                this._notifyChange(t), this._adjustDate(s);
            },
            _selectDay: function(t, e, i, s) {
                var n = V(t);
                V(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || ((n = this._getInst(n[0])).selectedDay = n.currentDay = parseInt(V("a", s).attr("data-date")), 
                n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
            },
            _clearDate: function(t) {
                t = V(t);
                this._selectDate(t, "");
            },
            _selectDate: function(t, e) {
                var i = V(t);
                t = this._getInst(i[0]);
                e = null != e ? e : this._formatDate(t), t.input && t.input.val(e), this._updateAlternate(t), 
                (i = this._get(t, "onSelect")) ? i.apply(t.input ? t.input[0] : null, [ e, t ]) : t.input && t.input.trigger("change"), 
                t.inline ? this._updateDatepicker(t) : (this._hideDatepicker(), this._lastInput = t.input[0], 
                "object" != typeof t.input[0] && t.input.trigger("focus"), this._lastInput = null);
            },
            _updateAlternate: function(t) {
                var e, i, s = this._get(t, "altField");
                s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), 
                t = this.formatDate(e, i, this._getFormatConfig(t)), V(document).find(s).val(t));
            },
            noWeekends: function(t) {
                t = t.getDay();
                return [ 0 < t && t < 6, "" ];
            },
            iso8601Week: function(t) {
                var e = new Date(t.getTime());
                return e.setDate(e.getDate() + 4 - (e.getDay() || 7)), t = e.getTime(), e.setMonth(0), 
                e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1;
            },
            parseDate: function(e, n, t) {
                if (null == e || null == n) throw "Invalid arguments";
                if ("" === (n = "object" == typeof n ? n.toString() : n + "")) return null;
                for (var i, s, o, a = 0, r = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = (r = "string" != typeof r ? r : (new Date).getFullYear() % 100 + parseInt(r, 10), 
                (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort), h = (t ? t.dayNames : null) || this._defaults.dayNames, c = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, u = (t ? t.monthNames : null) || this._defaults.monthNames, d = -1, p = -1, f = -1, g = -1, m = !1, _ = function(t) {
                    t = w + 1 < e.length && e.charAt(w + 1) === t;
                    return t && w++, t;
                }, v = function(t) {
                    var e = _(t);
                    e = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}"), 
                    e = n.substring(a).match(e);
                    if (!e) throw "Missing number at position " + a;
                    return a += e[0].length, parseInt(e[0], 10);
                }, b = function(t, e, i) {
                    var s = -1;
                    e = V.map(_(t) ? i : e, (function(t, e) {
                        return [ [ e, t ] ];
                    })).sort((function(t, e) {
                        return -(t[1].length - e[1].length);
                    }));
                    if (V.each(e, (function(t, e) {
                        var i = e[1];
                        if (n.substr(a, i.length).toLowerCase() === i.toLowerCase()) return s = e[0], a += i.length, 
                        !1;
                    })), -1 !== s) return s + 1;
                    throw "Unknown name at position " + a;
                }, y = function() {
                    if (n.charAt(a) !== e.charAt(w)) throw "Unexpected literal at position " + a;
                    a++;
                }, w = 0; w < e.length; w++) if (m) "'" !== e.charAt(w) || _("'") ? y() : m = !1; else switch (e.charAt(w)) {
                  case "d":
                    f = v("d");
                    break;

                  case "D":
                    b("D", l, h);
                    break;

                  case "o":
                    g = v("o");
                    break;

                  case "m":
                    p = v("m");
                    break;

                  case "M":
                    p = b("M", c, u);
                    break;

                  case "y":
                    d = v("y");
                    break;

                  case "@":
                    d = (o = new Date(v("@"))).getFullYear(), p = o.getMonth() + 1, f = o.getDate();
                    break;

                  case "!":
                    d = (o = new Date((v("!") - this._ticksTo1970) / 1e4)).getFullYear(), p = o.getMonth() + 1, 
                    f = o.getDate();
                    break;

                  case "'":
                    _("'") ? y() : m = !0;
                    break;

                  default:
                    y();
                }
                if (a < n.length && (s = n.substr(a), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
                if (-1 === d ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= r ? 0 : -100)), 
                -1 < g) for (p = 1, f = g; ;) {
                    if (f <= (i = this._getDaysInMonth(d, p - 1))) break;
                    p++, f -= i;
                }
                if ((o = this._daylightSavingAdjust(new Date(d, p - 1, f))).getFullYear() !== d || o.getMonth() + 1 !== p || o.getDate() !== f) throw "Invalid date";
                return o;
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, i) {
                if (!t) return "";
                function s(t, e, i) {
                    var s = "" + e;
                    if (c(t)) for (;s.length < i; ) s = "0" + s;
                    return s;
                }
                function n(t, e, i, s) {
                    return (c(t) ? s : i)[e];
                }
                var o, a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, h = (i ? i.monthNames : null) || this._defaults.monthNames, c = function(t) {
                    t = o + 1 < e.length && e.charAt(o + 1) === t;
                    return t && o++, t;
                }, u = "", d = !1;
                if (t) for (o = 0; o < e.length; o++) if (d) "'" !== e.charAt(o) || c("'") ? u += e.charAt(o) : d = !1; else switch (e.charAt(o)) {
                  case "d":
                    u += s("d", t.getDate(), 2);
                    break;

                  case "D":
                    u += n("D", t.getDay(), a, r);
                    break;

                  case "o":
                    u += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;

                  case "m":
                    u += s("m", t.getMonth() + 1, 2);
                    break;

                  case "M":
                    u += n("M", t.getMonth(), l, h);
                    break;

                  case "y":
                    u += c("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                    break;

                  case "@":
                    u += t.getTime();
                    break;

                  case "!":
                    u += 1e4 * t.getTime() + this._ticksTo1970;
                    break;

                  case "'":
                    c("'") ? u += "'" : d = !0;
                    break;

                  default:
                    u += e.charAt(o);
                }
                return u;
            },
            _possibleChars: function(e) {
                for (var t = "", i = !1, s = function(t) {
                    t = n + 1 < e.length && e.charAt(n + 1) === t;
                    return t && n++, t;
                }, n = 0; n < e.length; n++) if (i) "'" !== e.charAt(n) || s("'") ? t += e.charAt(n) : i = !1; else switch (e.charAt(n)) {
                  case "d":
                  case "m":
                  case "y":
                  case "@":
                    t += "0123456789";
                    break;

                  case "D":
                  case "M":
                    return null;

                  case "'":
                    s("'") ? t += "'" : i = !0;
                    break;

                  default:
                    t += e.charAt(n);
                }
                return t;
            },
            _get: function(t, e) {
                return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, s, a) || n;
                    } catch (t) {
                        s = e ? "" : s;
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), 
                    t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, 
                    this._adjustInstDate(t);
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date));
            },
            _determineDate: function(r, t, e) {
                var i, s;
                t = null == t || "" === t ? e : "string" == typeof t ? function(t) {
                    try {
                        return V.datepicker.parseDate(V.datepicker._get(r, "dateFormat"), t, V.datepicker._getFormatConfig(r));
                    } catch (t) {}
                    for (var e = (t.toLowerCase().match(/^c/) ? V.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = o.exec(t); a; ) {
                        switch (a[2] || "d") {
                          case "d":
                          case "D":
                            n += parseInt(a[1], 10);
                            break;

                          case "w":
                          case "W":
                            n += 7 * parseInt(a[1], 10);
                            break;

                          case "m":
                          case "M":
                            s += parseInt(a[1], 10), n = Math.min(n, V.datepicker._getDaysInMonth(i, s));
                            break;

                          case "y":
                          case "Y":
                            i += parseInt(a[1], 10), n = Math.min(n, V.datepicker._getDaysInMonth(i, s));
                        }
                        a = o.exec(t);
                    }
                    return new Date(i, s, n);
                }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (s = new Date).setDate(s.getDate() + i), 
                s) : new Date(t.getTime());
                return (t = t && "Invalid Date" === t.toString() ? e : t) && (t.setHours(0), t.setMinutes(0), 
                t.setSeconds(0), t.setMilliseconds(0)), this._daylightSavingAdjust(t);
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
            },
            _setDate: function(t, e, i) {
                var s = !e, n = t.selectedMonth, o = t.selectedYear;
                e = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = e.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth(), 
                t.drawYear = t.selectedYear = t.currentYear = e.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), 
                this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map((function() {
                    var t = {
                        prev: function() {
                            V.datepicker._adjustDate(i, -e, "M");
                        },
                        next: function() {
                            V.datepicker._adjustDate(i, +e, "M");
                        },
                        hide: function() {
                            V.datepicker._hideDatepicker();
                        },
                        today: function() {
                            V.datepicker._gotoToday(i);
                        },
                        selectDay: function() {
                            return V.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                            !1;
                        },
                        selectMonth: function() {
                            return V.datepicker._selectMonthYear(i, this, "M"), !1;
                        },
                        selectYear: function() {
                            return V.datepicker._selectMonthYear(i, this, "Y"), !1;
                        }
                    };
                    V(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
                }));
            },
            _generateHTML: function(t) {
                var e, i, s, n, o, a, r, l, h, c, u, d, p, f, g, m, _, v, b, y, w, x, k, C, D, I, T, P, M, S, H, z, A = new Date, O = this._daylightSavingAdjust(new Date(A.getFullYear(), A.getMonth(), A.getDate())), N = this._get(t, "isRTL"), E = this._get(t, "showButtonPanel"), W = this._get(t, "hideIfNoPrevNext"), F = this._get(t, "navigationAsDateFormat"), L = this._getNumberOfMonths(t), R = this._get(t, "showCurrentAtPos"), Y = (A = this._get(t, "stepMonths"), 
                1 !== L[0] || 1 !== L[1]), B = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), j = this._getMinMaxDate(t, "min"), q = this._getMinMaxDate(t, "max"), K = t.drawMonth - R, U = t.drawYear;
                if (K < 0 && (K += 12, U--), q) for (e = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth() - L[0] * L[1] + 1, q.getDate())), 
                e = j && e < j ? j : e; this._daylightSavingAdjust(new Date(U, K, 1)) > e; ) --K < 0 && (K = 11, 
                U--);
                for (t.drawMonth = K, t.drawYear = U, R = this._get(t, "prevText"), R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K - A, 1)), this._getFormatConfig(t)) : R, 
                i = this._canAdjustMonth(t, -1, U, K) ? V("<a>").attr({
                    class: "ui-datepicker-prev ui-corner-all",
                    "data-handler": "prev",
                    "data-event": "click",
                    title: R
                }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")).text(R))[0].outerHTML : W ? "" : V("<a>").attr({
                    class: "ui-datepicker-prev ui-corner-all ui-state-disabled",
                    title: R
                }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w")).text(R))[0].outerHTML, 
                R = this._get(t, "nextText"), R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K + A, 1)), this._getFormatConfig(t)) : R, 
                s = this._canAdjustMonth(t, 1, U, K) ? V("<a>").attr({
                    class: "ui-datepicker-next ui-corner-all",
                    "data-handler": "next",
                    "data-event": "click",
                    title: R
                }).append(V("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")).text(R))[0].outerHTML : W ? "" : V("<a>").attr({
                    class: "ui-datepicker-next ui-corner-all ui-state-disabled",
                    title: R
                }).append(V("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e")).text(R))[0].outerHTML, 
                A = this._get(t, "currentText"), W = this._get(t, "gotoCurrent") && t.currentDay ? B : O, 
                A = F ? this.formatDate(A, W, this._getFormatConfig(t)) : A, R = "", t.inline || (R = V("<button>").attr({
                    type: "button",
                    class: "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
                    "data-handler": "hide",
                    "data-event": "click"
                }).text(this._get(t, "closeText"))[0].outerHTML), F = "", E && (F = V("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(N ? R : "").append(this._isInRange(t, W) ? V("<button>").attr({
                    type: "button",
                    class: "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
                    "data-handler": "today",
                    "data-event": "click"
                }).text(A) : "").append(N ? "" : R)[0].outerHTML), n = parseInt(this._get(t, "firstDay"), 10), 
                n = isNaN(n) ? 0 : n, o = this._get(t, "showWeek"), a = this._get(t, "dayNames"), 
                r = this._get(t, "dayNamesMin"), l = this._get(t, "monthNames"), h = this._get(t, "monthNamesShort"), 
                c = this._get(t, "beforeShowDay"), u = this._get(t, "showOtherMonths"), d = this._get(t, "selectOtherMonths"), 
                p = this._getDefaultDate(t), f = "", m = 0; m < L[0]; m++) {
                    for (_ = "", this.maxRows = 4, v = 0; v < L[1]; v++) {
                        if (b = this._daylightSavingAdjust(new Date(U, K, t.selectedDay)), y = " ui-corner-all", 
                        w = "", Y) {
                            if (w += "<div class='ui-datepicker-group", 1 < L[1]) switch (v) {
                              case 0:
                                w += " ui-datepicker-group-first", y = " ui-corner-" + (N ? "right" : "left");
                                break;

                              case L[1] - 1:
                                w += " ui-datepicker-group-last", y = " ui-corner-" + (N ? "left" : "right");
                                break;

                              default:
                                w += " ui-datepicker-group-middle", y = "";
                            }
                            w += "'>";
                        }
                        for (w += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + y + "'>" + (/all|left/.test(y) && 0 === m ? N ? s : i : "") + (/all|right/.test(y) && 0 === m ? N ? i : s : "") + this._generateMonthYearHeader(t, K, U, j, q, 0 < m || 0 < v, l, h) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                        x = o ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", 
                        g = 0; g < 7; g++) x += "<th scope='col'" + (5 <= (g + n + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + a[k = (g + n) % 7] + "'>" + r[k] + "</span></th>";
                        for (w += x + "</tr></thead><tbody>", D = this._getDaysInMonth(U, K), U === t.selectedYear && K === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)), 
                        C = (this._getFirstDayOfMonth(U, K) - n + 7) % 7, D = Math.ceil((C + D) / 7), I = Y && this.maxRows > D ? this.maxRows : D, 
                        this.maxRows = I, T = this._daylightSavingAdjust(new Date(U, K, 1 - C)), P = 0; P < I; P++) {
                            for (w += "<tr>", M = o ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(T) + "</td>" : "", 
                            g = 0; g < 7; g++) S = c ? c.apply(t.input ? t.input[0] : null, [ T ]) : [ !0, "" ], 
                            z = (H = T.getMonth() !== K) && !d || !S[0] || j && T < j || q && q < T, M += "<td class='" + (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (T.getTime() === b.getTime() && K === t.selectedMonth && t._keyEvent || p.getTime() === T.getTime() && p.getTime() === b.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !u ? "" : " " + S[1] + (T.getTime() === B.getTime() ? " " + this._currentClass : "") + (T.getTime() === O.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !u || !S[2] ? "" : " title='" + S[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + T.getMonth() + "' data-year='" + T.getFullYear() + "'") + ">" + (H && !u ? "&#xa0;" : z ? "<span class='ui-state-default'>" + T.getDate() + "</span>" : "<a class='ui-state-default" + (T.getTime() === O.getTime() ? " ui-state-highlight" : "") + (T.getTime() === B.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#' aria-current='" + (T.getTime() === B.getTime() ? "true" : "false") + "' data-date='" + T.getDate() + "'>" + T.getDate() + "</a>") + "</td>", 
                            T.setDate(T.getDate() + 1), T = this._daylightSavingAdjust(T);
                            w += M + "</tr>";
                        }
                        11 < ++K && (K = 0, U++), _ += w += "</tbody></table>" + (Y ? "</div>" + (0 < L[0] && v === L[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    }
                    f += _;
                }
                return f += F, t._keyEvent = !1, f;
            },
            _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
                var l, h, c, u, d, p, f = this._get(t, "changeMonth"), g = this._get(t, "changeYear"), m = this._get(t, "showMonthAfterYear"), _ = this._get(t, "selectMonthLabel"), v = this._get(t, "selectYearLabel"), b = "<div class='ui-datepicker-title'>", y = "";
                if (o || !f) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                    for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' aria-label='" + _ + "' data-handler='selectMonth' data-event='change'>", 
                    c = 0; c < 12; c++) (!l || c >= s.getMonth()) && (!h || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    y += "</select>";
                }
                if (m || (b += y + (!o && f && g ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", 
                o || !g) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                    for (a = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), d = (_ = function(t) {
                        t = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(t) ? u : t;
                    })(a[0]), p = Math.max(d, _(a[1] || "")), d = s ? Math.max(d, s.getFullYear()) : d, 
                    p = n ? Math.min(p, n.getFullYear()) : p, t.yearshtml += "<select class='ui-datepicker-year' aria-label='" + v + "' data-handler='selectYear' data-event='change'>"; d <= p; d++) t.yearshtml += "<option value='" + d + "'" + (d === i ? " selected='selected'" : "") + ">" + d + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
                }
                return b += this._get(t, "yearSuffix"), m && (b += (!o && f && g ? "" : "&#xa0;") + y), 
                b += "</div>";
            },
            _adjustInstDate: function(t, e, i) {
                var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0);
                e = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), e = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, e)));
                t.selectedDay = e.getDate(), t.drawMonth = t.selectedMonth = e.getMonth(), t.drawYear = t.selectedYear = e.getFullYear(), 
                "M" !== i && "Y" !== i || this._notifyChange(t);
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min");
                t = this._getMinMaxDate(t, "max"), e = i && e < i ? i : e;
                return t && t < e ? t : e;
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [ t.selectedYear, t.selectedMonth + 1, t ]);
            },
            _getNumberOfMonths: function(t) {
                t = this._get(t, "numberOfMonths");
                return null == t ? [ 1, 1 ] : "number" == typeof t ? [ 1, t ] : t;
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null);
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay();
            },
            _canAdjustMonth: function(t, e, i, s) {
                var n = this._getNumberOfMonths(t);
                n = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                return e < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), 
                this._isInRange(t, n);
            },
            _isInRange: function(t, e) {
                var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = null, o = null, a = this._get(t, "yearRange");
                return a && (t = a.split(":"), a = (new Date).getFullYear(), n = parseInt(t[0], 10), 
                o = parseInt(t[1], 10), t[0].match(/[+\-].*/) && (n += a), t[1].match(/[+\-].*/) && (o += a)), 
                (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime()) && (!n || e.getFullYear() >= n) && (!o || e.getFullYear() <= o);
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                };
            },
            _formatDate: function(t, e, i, s) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                e = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), e, this._getFormatConfig(t));
            }
        }), V.fn.datepicker = function(t) {
            if (!this.length) return this;
            V.datepicker.initialized || (V(document).on("mousedown", V.datepicker._checkExternalClick), 
            V.datepicker.initialized = !0), 0 === V("#" + V.datepicker._mainDivId).length && V("body").append(V.datepicker.dpDiv);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t) || "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? V.datepicker["_" + t + "Datepicker"].apply(V.datepicker, [ this[0] ].concat(e)) : this.each((function() {
                "string" == typeof t ? V.datepicker["_" + t + "Datepicker"].apply(V.datepicker, [ this ].concat(e)) : V.datepicker._attachDatepicker(this, t);
            }));
        }, V.datepicker = new b, V.datepicker.initialized = !1, V.datepicker.uuid = (new Date).getTime(), 
        V.datepicker.version = "1.13.1";
        V.datepicker;
        V.widget("ui.dialog", {
            version: "1.13.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(t) {
                        var e = V(this).css(t).offset().top;
                        e < 0 && V(this).css("top", t.top - e);
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), 
                this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), 
                this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), 
                this._createButtonPane(), this.options.draggable && V.fn.draggable && this._makeDraggable(), 
                this.options.resizable && V.fn.resizable && this._makeResizable(), this._isOpen = !1, 
                this._trackFocus();
            },
            _init: function() {
                this.options.autoOpen && this.open();
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? V(t) : this.document.find(t || "body").eq(0);
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
                this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
                (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
            },
            widget: function() {
                return this.uiDialog;
            },
            disable: V.noop,
            enable: V.noop,
            close: function(t) {
                var e = this;
                this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, 
                this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || V.ui.safeBlur(V.ui.safeActiveElement(this.document[0])), 
                this._hide(this.uiDialog, this.options.hide, (function() {
                    e._trigger("close", t);
                })));
            },
            isOpen: function() {
                return this._isOpen;
            },
            moveToTop: function() {
                this._moveToTop();
            },
            _moveToTop: function(t, e) {
                var i = !1, s = this.uiDialog.siblings(".ui-front:visible").map((function() {
                    return +V(this).css("z-index");
                })).get();
                s = Math.max.apply(null, s);
                return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), 
                i = !0), i && !e && this._trigger("focus", t), i;
            },
            open: function() {
                var t = this;
                this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, 
                this.opener = V(V.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
                this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
                this._show(this.uiDialog, this.options.show, (function() {
                    t._focusTabbable(), t._trigger("focus");
                })), this._makeFocusTarget(), this._trigger("open"));
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                (t = !(t = !(t = !(t = !(t = t || this.element.find("[autofocus]")).length ? this.element.find(":tabbable") : t).length ? this.uiDialogButtonPane.find(":tabbable") : t).length ? this.uiDialogTitlebarClose.filter(":tabbable") : t).length ? this.uiDialog : t).eq(0).trigger("focus");
            },
            _restoreTabbableFocus: function() {
                var t = V.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === t || V.contains(this.uiDialog[0], t) || this._focusTabbable();
            },
            _keepFocus: function(t) {
                t.preventDefault(), this._restoreTabbableFocus(), this._delay(this._restoreTabbableFocus);
            },
            _createWrapper: function() {
                this.uiDialog = V("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
                this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === V.ui.keyCode.ESCAPE) return t.preventDefault(), 
                        void this.close(t);
                        var e, i, s;
                        t.keyCode !== V.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"), 
                        i = e.first(), s = e.last(), t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay((function() {
                            s.trigger("focus");
                        })), t.preventDefault()) : (this._delay((function() {
                            i.trigger("focus");
                        })), t.preventDefault()));
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable();
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                });
            },
            _createTitlebar: function() {
                var t;
                this.uiDialogTitlebar = V("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        V(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                    }
                }), this.uiDialogTitlebarClose = V("<button type='button'></button>").button({
                    label: V("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
                this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t);
                    }
                }), t = V("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), 
                this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                });
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;");
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = V("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
                this.uiButtonSet = V("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
                this._createButtons();
            },
            _createButtons: function() {
                var s = this, t = this.options.buttons;
                this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), V.isEmptyObject(t) || Array.isArray(t) && !t.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (V.each(t, (function(t, e) {
                    var i;
                    e = V.extend({
                        type: "button"
                    }, e = "function" == typeof e ? {
                        click: e,
                        text: t
                    } : e), i = e.click, t = {
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        showLabel: e.showLabel,
                        icons: e.icons,
                        text: e.text
                    }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, 
                    "boolean" == typeof e.text && delete e.text, V("<button></button>", e).button(t).appendTo(s.uiButtonSet).on("click", (function() {
                        i.apply(s.element[0], arguments);
                    }));
                })), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
            },
            _makeDraggable: function() {
                var n = this, o = this.options;
                function a(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    };
                }
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(t, e) {
                        n._addClass(V(this), "ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", t, a(e));
                    },
                    drag: function(t, e) {
                        n._trigger("drag", t, a(e));
                    },
                    stop: function(t, e) {
                        var i = e.offset.left - n.document.scrollLeft(), s = e.offset.top - n.document.scrollTop();
                        o.position = {
                            my: "left top",
                            at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
                            of: n.window
                        }, n._removeClass(V(this), "ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", t, a(e));
                    }
                });
            },
            _makeResizable: function() {
                var n = this, o = this.options, t = o.resizable, e = this.uiDialog.css("position");
                t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
                function a(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    };
                }
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: o.maxWidth,
                    maxHeight: o.maxHeight,
                    minWidth: o.minWidth,
                    minHeight: this._minHeight(),
                    handles: t,
                    start: function(t, e) {
                        n._addClass(V(this), "ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", t, a(e));
                    },
                    resize: function(t, e) {
                        n._trigger("resize", t, a(e));
                    },
                    stop: function(t, e) {
                        var i = n.uiDialog.offset(), s = i.left - n.document.scrollLeft();
                        i = i.top - n.document.scrollTop();
                        o.height = n.uiDialog.height(), o.width = n.uiDialog.width(), o.position = {
                            my: "left top",
                            at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= i ? "+" : "") + i,
                            of: n.window
                        }, n._removeClass(V(this), "ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", t, a(e));
                    }
                }).css("position", e);
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(t) {
                        this._makeFocusTarget(), this._focusedElement = V(t.target);
                    }
                });
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this);
            },
            _untrackInstance: function() {
                var t = this._trackingInstances(), e = V.inArray(this, t);
                -1 !== e && t.splice(e, 1);
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || this.document.data("ui-dialog-instances", t = []), t;
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
            },
            _setOptions: function(t) {
                var i = this, s = !1, n = {};
                V.each(t, (function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
                })), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
            },
            _setOption: function(t, e) {
                var i, s = this.uiDialog;
                "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), 
                "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: V("<a>").text("" + this.options.closeText).html()
                }), "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"), 
                !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"), 
                i && "string" == typeof e && s.resizable("option", "handles", e), i || !1 === e || this._makeResizable()), 
                "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
            },
            _size: function() {
                var t, e, i, s = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: s.width
                }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", 
                "auto" === s.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map((function() {
                    var t = V(this);
                    return V("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0];
                }));
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _allowInteraction: function(t) {
                return !!V(t.target).closest(".ui-dialog").length || !!V(t.target).closest(".ui-datepicker").length;
            },
            _createOverlay: function() {
                var i, s;
                this.options.modal && (i = V.fn.jquery.substring(0, 4), s = !0, this._delay((function() {
                    s = !1;
                })), this.document.data("ui-dialog-overlays") || this.document.on("focusin.ui-dialog", function(t) {
                    var e;
                    s || (e = this._trackingInstances()[0])._allowInteraction(t) || (t.preventDefault(), 
                    e._focusTabbable(), "3.4." !== i && "3.5." !== i || e._delay(e._restoreTabbableFocus));
                }.bind(this)), this.overlay = V("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
            },
            _destroyOverlay: function() {
                var t;
                this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this.document.off("focusin.ui-dialog"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null);
            }
        }), !1 !== V.uiBackCompat && V.widget("ui.dialog", V.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(), this.uiDialog.addClass(this.options.dialogClass);
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), 
                this._superApply(arguments);
            }
        });
        V.ui.dialog, V.widget("ui.progressbar", {
            version: "1.13.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = V("<div>").appendTo(this.element), 
                this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
            },
            value: function(t) {
                if (void 0 === t) return this.options.value;
                this.options.value = this._constrainedValue(t), this._refreshValue();
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, 
                "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), 
                this._refreshValue();
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
            },
            _refreshValue: function() {
                var t = this.options.value, e = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), 
                this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = V("<div>").appendTo(this.valueDiv), 
                this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, 
                this._trigger("change")), t === this.options.max && this._trigger("complete");
            }
        }), V.widget("ui.selectmenu", [ V.ui.formResetMixin, {
            version: "1.13.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
                this.menuItems = V();
            },
            _drawButton: function() {
                var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function(t) {
                        this.button.trigger("focus"), t.preventDefault();
                    }
                }), this.element.hide(), this.button = V("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
                t = V("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
                this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
                this._on(this.button, this._buttonEvents), this.button.one("focusin", (function() {
                    e._rendered || e._refreshMenu();
                }));
            },
            _drawMenu: function() {
                var i = this;
                this.menu = V("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = V("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
                this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, e) {
                        t.preventDefault(), i._setSelection(), i._select(e.item.data("ui-selectmenu-item"), t);
                    },
                    focus: function(t, e) {
                        e = e.item.data("ui-selectmenu-item");
                        null != i.focusIndex && e.index !== i.focusIndex && (i._trigger("focus", t, {
                            item: e
                        }), i.isOpen || i._select(e, t)), i.focusIndex = e.index, i.button.attr("aria-activedescendant", i.menuItems.eq(e.index).attr("id"));
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1;
                }, this.menuInstance._isDivider = function() {
                    return !1;
                };
            },
            refresh: function() {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
                null === this.options.width && this._resizeButton();
            },
            _refreshMenu: function() {
                var t = this.element.find("option");
                this.menu.empty(), this._parseOptions(t), this._renderMenu(this.menu, this.items), 
                this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
                this._rendered = !0, t.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), 
                this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
                this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
                this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
                this._trigger("open", t)));
            },
            _position: function() {
                this.menuWrap.position(V.extend({
                    of: this.button
                }, this.options.position));
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
                this._trigger("close", t));
            },
            widget: function() {
                return this.button;
            },
            menuWidget: function() {
                return this.menu;
            },
            _renderButtonItem: function(t) {
                var e = V("<span>");
                return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e;
            },
            _renderMenu: function(s, t) {
                var n = this, o = "";
                V.each(t, (function(t, e) {
                    var i;
                    e.optgroup !== o && (i = V("<li>", {
                        text: e.optgroup
                    }), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                    i.appendTo(s), o = e.optgroup), n._renderItemData(s, e);
                }));
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e);
            },
            _renderItem: function(t, e) {
                var i = V("<li>"), s = V("<div>", {
                    title: e.element.attr("title")
                });
                return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), 
                i.append(s).appendTo(t);
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;");
            },
            _move: function(t, e) {
                var i, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
                s += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, s);
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t);
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), 
                t.addRange(this.range)) : this.range.select(), this.button.focus());
            },
            _documentClick: {
                mousedown: function(t) {
                    this.isOpen && (V(t.target).closest(".ui-selectmenu-menu, #" + V.escapeSelector(this.ids.button)).length || this.close(t));
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t);
                },
                keydown: function(t) {
                    var e = !0;
                    switch (t.keyCode) {
                      case V.ui.keyCode.TAB:
                      case V.ui.keyCode.ESCAPE:
                        this.close(t), e = !1;
                        break;

                      case V.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;

                      case V.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;

                      case V.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;

                      case V.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;

                      case V.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;

                      case V.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;

                      case V.ui.keyCode.HOME:
                      case V.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;

                      case V.ui.keyCode.END:
                      case V.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;

                      default:
                        this.menu.trigger(t), e = !1;
                    }
                    e && t.preventDefault();
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), 
                this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e);
            },
            _setAria: function(t) {
                t = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": t,
                    "aria-activedescendant": t
                }), this.menu.attr("aria-activedescendant", t);
            },
            _setOption: function(t, e) {
                var i;
                "icons" === t && (i = this.button.find("span.ui-icon"), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)), 
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), 
                "width" === t && this._resizeButton();
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), 
                this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), 
                t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t = !(t = !(t = t && (t.jquery || t.nodeType ? V(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front, dialog") : t).length ? this.document[0].body : t;
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
                this.menu.attr("aria-hidden", !this.isOpen);
            },
            _resizeButton: function() {
                var t = this.options.width;
                !1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), 
                this.button.outerWidth(t)) : this.button.css("width", "");
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t;
            },
            _parseOptions: function(t) {
                var i = this, s = [];
                t.each((function(t, e) {
                    e.hidden || s.push(i._parseOption(V(e), t));
                })), this.items = s;
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                };
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
                this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
            }
        } ]), V.widget("ui.slider", V.ui.mouse, {
            version: "1.13.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
                this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
                this._refresh(), this._animateOff = !1;
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
            },
            _createHandles: function() {
                var t, e = this.options, i = this.element.find(".ui-slider-handle"), s = [], n = e.values && e.values.length || 1;
                for (i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; t < n; t++) s.push("<span tabindex='0'></span>");
                this.handles = i.add(V(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
                this.handle = this.handles.eq(0), this.handles.each((function(t) {
                    V(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
                }));
            },
            _createRange: function() {
                var t = this.options;
                t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [ t.values[0], t.values[0] ] : Array.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [ this._valueMin(), this._valueMin() ]), 
                this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
                this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = V("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
                "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), 
                this.range = null);
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
                this._focusable(this.handles);
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
            },
            _mouseCapture: function(t) {
                var i, s, n, o, e, a, r = this, l = this.options;
                return !l.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), a = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(a), s = this._valueMax() - this._valueMin() + 1, 
                this.handles.each((function(t) {
                    var e = Math.abs(i - r.values(t));
                    (e < s || s === e && (t === r._lastChangedValue || r.values(t) === l.min)) && (s = e, 
                    n = V(this), o = t);
                })), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, 
                this._addClass(n, null, "ui-state-active"), n.trigger("focus"), e = n.offset(), 
                a = !V(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - e.left - n.width() / 2,
                    top: t.pageY - e.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0));
            },
            _mouseStart: function() {
                return !0;
            },
            _mouseDrag: function(t) {
                var e = {
                    x: t.pageX,
                    y: t.pageY
                };
                e = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, e), !1;
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
                this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, 
                this._clickOffset = null, this._animateOff = !1;
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
            },
            _normValueFromMouse: function(t) {
                var e;
                t = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
                t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
                t /= e;
                return (t = 1 < t ? 1 : t) < 0 && (t = 0), "vertical" === this.orientation && (t = 1 - t), 
                e = this._valueMax() - this._valueMin(), e = this._valueMin() + t * e, this._trimAlignValue(e);
            },
            _uiHash: function(t, e, i) {
                var s = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), 
                s.values = i || this.values()), s;
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length;
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e));
            },
            _slide: function(t, e, i) {
                var s, n = this.value(), o = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), 
                o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e));
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
                void this._change(null, 0)) : this._value();
            },
            values: function(t, e) {
                var i, s, n;
                if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), 
                this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!Array.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
                for (i = this.options.values, s = t, n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), 
                this._change(null, n);
                this._refreshValue();
            },
            _setOption: function(t, e) {
                var i, s = 0;
                switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), 
                this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), 
                this.options.values = null)), Array.isArray(this.options.values) && (s = this.options.values.length), 
                this._super(t, e), t) {
                  case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                    this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                    break;

                  case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;

                  case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;

                  case "step":
                  case "min":
                  case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;

                  case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1;
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t);
            },
            _values: function(t) {
                var e, i;
                if (arguments.length) return t = this.options.values[t], t = this._trimAlignValue(t);
                if (this._hasMultipleValues()) {
                    for (e = this.options.values.slice(), i = 0; i < e.length; i += 1) e[i] = this._trimAlignValue(e[i]);
                    return e;
                }
                return [];
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = 0 < this.options.step ? this.options.step : 1, i = (t - this._valueMin()) % e;
                t -= i;
                return 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e), parseFloat(t.toFixed(5));
            },
            _calculateNewMax: function() {
                var t = this.options.max, e = this._valueMin(), i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return t = null !== this.options.min ? Math.max(t, this._precisionOf(this.options.min)) : t;
            },
            _precisionOf: function(t) {
                var e = t.toString();
                t = e.indexOf(".");
                return -1 === t ? 0 : e.length - t - 1;
            },
            _valueMin: function() {
                return this.options.min;
            },
            _valueMax: function() {
                return this.max;
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                });
            },
            _refreshValue: function() {
                var e, i, t, s, n, o = this.options.range, a = this.options, r = this, l = !this._animateOff && a.animate, h = {};
                this._hasMultipleValues() ? this.handles.each((function(t) {
                    i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, h["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", 
                    V(this).stop(1, 1)[l ? "animate" : "css"](h, a.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                        left: i + "%"
                    }, a.animate), 1 === t && r.range[l ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({
                        bottom: i + "%"
                    }, a.animate), 1 === t && r.range[l ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i;
                })) : (t = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (t - s) / (n - s) * 100 : 0, 
                h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](h, a.animate), 
                "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: i + "%"
                }, a.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, a.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: i + "%"
                }, a.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, a.animate));
            },
            _handleEvents: {
                keydown: function(t) {
                    var e, i, s, n = V(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                      case V.ui.keyCode.HOME:
                      case V.ui.keyCode.END:
                      case V.ui.keyCode.PAGE_UP:
                      case V.ui.keyCode.PAGE_DOWN:
                      case V.ui.keyCode.UP:
                      case V.ui.keyCode.RIGHT:
                      case V.ui.keyCode.DOWN:
                      case V.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(V(t.target), null, "ui-state-active"), 
                        !1 === this._start(t, n))) return;
                    }
                    switch (s = this.options.step, e = i = this._hasMultipleValues() ? this.values(n) : this.value(), 
                    t.keyCode) {
                      case V.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;

                      case V.ui.keyCode.END:
                        i = this._valueMax();
                        break;

                      case V.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;

                      case V.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;

                      case V.ui.keyCode.UP:
                      case V.ui.keyCode.RIGHT:
                        if (e === this._valueMax()) return;
                        i = this._trimAlignValue(e + s);
                        break;

                      case V.ui.keyCode.DOWN:
                      case V.ui.keyCode.LEFT:
                        if (e === this._valueMin()) return;
                        i = this._trimAlignValue(e - s);
                    }
                    this._slide(t, n, i);
                },
                keyup: function(t) {
                    var e = V(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), 
                    this._removeClass(V(t.target), null, "ui-state-active"));
                }
            }
        });
        function M(e) {
            return function() {
                var t = this.element.val();
                e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
            };
        }
        V.widget("ui.spinner", {
            version: "1.13.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
                this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
                this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete");
                    }
                });
            },
            _getCreateOptions: function() {
                var s = this._super(), n = this.element;
                return V.each([ "min", "max", "step" ], (function(t, e) {
                    var i = n.attr(e);
                    null != i && i.length && (s[e] = i);
                })), s;
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault();
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val();
                },
                blur: function(t) {
                    this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t));
                },
                mousewheel: function(t, e) {
                    var i = V.ui.safeActiveElement(this.document[0]);
                    if (this.element[0] === i && e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), 
                        this.mousewheelTimer = this._delay((function() {
                            this.spinning && this._stop(t);
                        }), 100), t.preventDefault();
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    var e;
                    function i() {
                        this.element[0] === V.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                        this.previous = e, this._delay((function() {
                            this.previous = e;
                        })));
                    }
                    e = this.element[0] === V.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                    t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay((function() {
                        delete this.cancelBlur, i.call(this);
                    })), !1 !== this._start(t) && this._repeat(null, V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    if (V(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, V(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
            },
            _draw: function() {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
                this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
                this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
            },
            _keydown: function(t) {
                var e = this.options, i = V.ui.keyCode;
                switch (t.keyCode) {
                  case i.UP:
                    return this._repeat(null, 1, t), !0;

                  case i.DOWN:
                    return this._repeat(null, -1, t), !0;

                  case i.PAGE_UP:
                    return this._repeat(null, e.page, t), !0;

                  case i.PAGE_DOWN:
                    return this._repeat(null, -e.page, t), !0;
                }
                return !1;
            },
            _start: function(t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), 
                this.spinning = !0);
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay((function() {
                    this._repeat(40, e, i);
                }), t), this._spin(e * this.options.step, i);
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), 
                this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i), this.counter++);
            },
            _increment: function(t) {
                var e = this.options.incremental;
                return e ? "function" == typeof e ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return t = null !== this.options.min ? Math.max(t, this._precisionOf(this.options.min)) : t;
            },
            _precisionOf: function(t) {
                var e = t.toString();
                t = e.indexOf(".");
                return -1 === t ? 0 : e.length - t - 1;
            },
            _adjustValue: function(t) {
                var e = this.options, i = null !== e.min ? e.min : 0, s = t - i;
                return t = i + Math.round(s / e.step) * e.step, t = parseFloat(t.toFixed(this._precision())), 
                null !== e.max && t > e.max ? e.max : null !== e.min && t < e.min ? e.min : t;
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
                this.counter = 0, this.spinning = !1, this._trigger("stop", t));
            },
            _setOption: function(t, e) {
                var i;
                if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), 
                this.options[t] = e, void this.element.val(this._format(i));
                "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), 
                "icons" === t && (i = this.buttons.first().find(".ui-icon"), this._removeClass(i, null, this.options.icons.up), 
                this._addClass(i, null, e.up), i = this.buttons.last().find(".ui-icon"), this._removeClass(i, null, this.options.icons.down), 
                this._addClass(i, null, e.down)), this._super(t, e);
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), 
                this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
            },
            _setOptions: M((function(t) {
                this._super(t);
            })),
            _parse: function(t) {
                return "" === (t = "string" == typeof t && "" !== t ? window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t : t) || isNaN(t) ? null : t;
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                });
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t);
            },
            _value: function(t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), 
                this.element.val(t), this._refresh();
            },
            _destroy: function() {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
                this.uiSpinner.replaceWith(this.element);
            },
            stepUp: M((function(t) {
                this._stepUp(t);
            })),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop());
            },
            stepDown: M((function(t) {
                this._stepDown(t);
            })),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
            },
            pageUp: M((function(t) {
                this._stepUp((t || 1) * this.options.page);
            })),
            pageDown: M((function(t) {
                this._stepDown((t || 1) * this.options.page);
            })),
            value: function(t) {
                if (!arguments.length) return this._parse(this.element.val());
                M(this._value).call(this, t);
            },
            widget: function() {
                return this.uiSpinner;
            }
        }), !1 !== V.uiBackCompat && V.widget("ui.spinner", V.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            },
            _uiSpinnerHtml: function() {
                return "<span>";
            },
            _buttonHtml: function() {
                return "<a></a><a></a>";
            }
        });
        var S;
        V.ui.spinner;
        V.widget("ui.tabs", {
            version: "1.13.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: (S = /#.*$/, function(t) {
                var e = t.href.replace(S, ""), i = location.href.replace(S, "");
                try {
                    e = decodeURIComponent(e);
                } catch (t) {}
                try {
                    i = decodeURIComponent(i);
                } catch (t) {}
                return 1 < t.hash.length && e === i;
            }),
            _create: function() {
                var e = this, t = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), 
                this._processTabs(), t.active = this._initialActive(), Array.isArray(t.disabled) && (t.disabled = V.uniqueSort(t.disabled.concat(V.map(this.tabs.filter(".ui-state-disabled"), (function(t) {
                    return e.tabs.index(t);
                })))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = V(), 
                this._refresh(), this.active.length && this.load(t.active);
            },
            _initialActive: function() {
                var i = this.options.active, t = this.options.collapsible, s = location.hash.substring(1);
                return null === i && (s && this.tabs.each((function(t, e) {
                    if (V(e).attr("aria-controls") === s) return i = t, !1;
                })), null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)), 
                !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), i = !t && !1 === i && this.anchors.length ? 0 : i;
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : V()
                };
            },
            _tabKeydown: function(t) {
                var e = V(V.ui.safeActiveElement(this.document[0])).closest("li"), i = this.tabs.index(e), s = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                      case V.ui.keyCode.RIGHT:
                      case V.ui.keyCode.DOWN:
                        i++;
                        break;

                      case V.ui.keyCode.UP:
                      case V.ui.keyCode.LEFT:
                        s = !1, i--;
                        break;

                      case V.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;

                      case V.ui.keyCode.HOME:
                        i = 0;
                        break;

                      case V.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);

                      case V.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);

                      default:
                        return;
                    }
                    t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), 
                    t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), 
                    this.activating = this._delay((function() {
                        this.option("active", i);
                    }), this.delay));
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === V.ui.keyCode.UP && (t.preventDefault(), 
                this.active.trigger("focus"));
            },
            _handlePageNav: function(t) {
                return t.altKey && t.keyCode === V.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
                !0) : t.altKey && t.keyCode === V.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
                !0) : void 0;
            },
            _findNextTab: function(t, e) {
                var i = this.tabs.length - 1;
                for (;-1 !== V.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled); ) t = e ? t + 1 : t - 1;
                return t;
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
            },
            _setOption: function(t, e) {
                "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), 
                e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), 
                "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e);
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
            },
            refresh: function() {
                var t = this.options, e = this.tablist.children(":has(a[href])");
                t.disabled = V.map(e.filter(".ui-state-disabled"), (function(t) {
                    return e.index(t);
                })), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !V.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, 
                this.active = V()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, 
                this.active = V()), this._refresh();
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
                this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0);
            },
            _processTabs: function() {
                var l = this, t = this.tabs, e = this.anchors, i = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
                this.tablist.on("mousedown" + this.eventNamespace, "> li", (function(t) {
                    V(this).is(".ui-state-disabled") && t.preventDefault();
                })).on("focus" + this.eventNamespace, ".ui-tabs-anchor", (function() {
                    V(this).closest("li").is(".ui-state-disabled") && this.blur();
                })), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map((function() {
                    return V("a", this)[0];
                })).attr({
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = V(), this.anchors.each((function(t, e) {
                    var i, s, n, o = V(e).uniqueId().attr("id"), a = V(e).closest("li"), r = a.attr("aria-controls");
                    l._isLocal(e) ? (n = (i = e.hash).substring(1), s = l.element.find(l._sanitizeSelector(i))) : (n = a.attr("aria-controls") || V({}).uniqueId()[0].id, 
                    (s = l.element.find(i = "#" + n)).length || (s = l._createPanel(n)).insertAfter(l.panels[t - 1] || l.tablist), 
                    s.attr("aria-live", "polite")), s.length && (l.panels = l.panels.add(s)), r && a.data("ui-tabs-aria-controls", r), 
                    a.attr({
                        "aria-controls": n,
                        "aria-labelledby": o
                    }), s.attr("aria-labelledby", o);
                })), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
                t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)));
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0);
            },
            _createPanel: function(t) {
                return V("<div>").attr("id", t).data("ui-tabs-destroy", !0);
            },
            _setOptionDisabled: function(t) {
                var e, i;
                for (Array.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), 
                i = 0; e = this.tabs[i]; i++) e = V(e), !0 === t || -1 !== V.inArray(i, t) ? (e.attr("aria-disabled", "true"), 
                this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), 
                this._removeClass(e, null, "ui-state-disabled"));
                this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t);
            },
            _setupEvents: function(t) {
                var i = {};
                t && V.each(t.split(" "), (function(t, e) {
                    i[e] = "_eventHandler";
                })), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault();
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs);
            },
            _setupHeightStyle: function(t) {
                var i, e = this.element.parent();
                "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), 
                this.element.siblings(":visible").each((function() {
                    var t = V(this), e = t.css("position");
                    "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
                })), this.element.children().not(this.panels).each((function() {
                    i -= V(this).outerHeight(!0);
                })), this.panels.each((function() {
                    V(this).height(Math.max(0, i - V(this).innerHeight() + V(this).height()));
                })).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each((function() {
                    i = Math.max(i, V(this).height("").height());
                })).height(i));
            },
            _eventHandler: function(t) {
                var e = this.options, i = this.active, s = V(t.currentTarget).closest("li"), n = s[0] === i[0], o = n && e.collapsible, a = o ? V() : this._getPanelForTab(s), r = i.length ? this._getPanelForTab(i) : V();
                i = {
                    oldTab: i,
                    oldPanel: r,
                    newTab: o ? V() : s,
                    newPanel: a
                };
                t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !o && this.tabs.index(s), 
                this.active = n ? V() : s, this.xhr && this.xhr.abort(), r.length || a.length || V.error("jQuery UI Tabs: Mismatching fragment identifier."), 
                a.length && this.load(this.tabs.index(s), t), this._toggle(t, i));
            },
            _toggle: function(t, e) {
                var i = this, s = e.newPanel, n = e.oldPanel;
                function o() {
                    i.running = !1, i._trigger("activate", t, e);
                }
                function a() {
                    i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), s.length && i.options.show ? i._show(s, i.options.show, o) : (s.show(), 
                    o());
                }
                this.running = !0, n.length && this.options.hide ? this._hide(n, this.options.hide, (function() {
                    i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a();
                })) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
                n.hide(), a()), n.attr("aria-hidden", "true"), e.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), s.length && n.length ? e.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter((function() {
                    return 0 === V(this).attr("tabIndex");
                })).attr("tabIndex", -1), s.attr("aria-hidden", "false"), e.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
            },
            _activate: function(t) {
                t = this._findActive(t);
                t[0] !== this.active[0] && (t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0], 
                this._eventHandler({
                    target: t,
                    currentTarget: t,
                    preventDefault: V.noop
                }));
            },
            _findActive: function(t) {
                return !1 === t ? V() : this.tabs.eq(t);
            },
            _getIndex: function(t) {
                return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + V.escapeSelector(t) + "']")) : t;
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
                this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each((function() {
                    V.data(this, "ui-tabs-destroy") ? V(this).remove() : V(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                })), this.tabs.each((function() {
                    var t = V(this), e = t.data("ui-tabs-aria-controls");
                    e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
                })), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
            },
            enable: function(i) {
                var t = this.options.disabled;
                !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), Array.isArray(t) ? V.map(t, (function(t) {
                    return t !== i ? t : null;
                })) : V.map(this.tabs, (function(t, e) {
                    return e !== i ? e : null;
                }))), this._setOptionDisabled(t));
            },
            disable: function(t) {
                var e = this.options.disabled;
                if (!0 !== e) {
                    if (void 0 === t) e = !0; else {
                        if (t = this._getIndex(t), -1 !== V.inArray(t, e)) return;
                        e = Array.isArray(e) ? V.merge([ t ], e).sort() : [ t ];
                    }
                    this._setOptionDisabled(e);
                }
            },
            load: function(t, s) {
                t = this._getIndex(t);
                function n(t, e) {
                    "abort" === e && o.panels.stop(!1, !0), o._removeClass(i, "ui-tabs-loading"), a.removeAttr("aria-busy"), 
                    t === o.xhr && delete o.xhr;
                }
                var o = this, i = this.tabs.eq(t), a = (t = i.find(".ui-tabs-anchor"), this._getPanelForTab(i)), r = {
                    tab: i,
                    panel: a
                };
                this._isLocal(t[0]) || (this.xhr = V.ajax(this._ajaxSettings(t, s, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), 
                a.attr("aria-busy", "true"), this.xhr.done((function(t, e, i) {
                    setTimeout((function() {
                        a.html(t), o._trigger("load", s, r), n(i, e);
                    }), 1);
                })).fail((function(t, e) {
                    setTimeout((function() {
                        n(t, e);
                    }), 1);
                }))));
            },
            _ajaxSettings: function(t, i, s) {
                var n = this;
                return {
                    url: t.attr("href").replace(/#.*$/, ""),
                    beforeSend: function(t, e) {
                        return n._trigger("beforeLoad", i, V.extend({
                            jqXHR: t,
                            ajaxSettings: e
                        }, s));
                    }
                };
            },
            _getPanelForTab: function(t) {
                t = V(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + t));
            }
        }), !1 !== V.uiBackCompat && V.widget("ui.tabs", V.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
            }
        });
        V.ui.tabs;
        V.widget("ui.tooltip", {
            version: "1.13.1",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var t = V(this).attr("title");
                    return V("<a>").text(t).html();
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, e) {
                var i = (t.attr("aria-describedby") || "").split(/\s+/);
                i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", String.prototype.trim.call(i.join(" ")));
            },
            _removeDescribedBy: function(t) {
                var e = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/);
                e = V.inArray(e, i);
                -1 !== e && i.splice(e, 1), t.removeData("ui-tooltip-id"), (i = String.prototype.trim.call(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby");
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = V("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
                this.disabledTitles = V([]);
            },
            _setOption: function(t, e) {
                var i = this;
                this._super(t, e), "content" === t && V.each(this.tooltips, (function(t, e) {
                    i._updateContent(e.element);
                }));
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]();
            },
            _disable: function() {
                var s = this;
                V.each(this.tooltips, (function(t, e) {
                    var i = V.Event("blur");
                    i.target = i.currentTarget = e.element[0], s.close(i, !0);
                })), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function() {
                    var t = V(this);
                    if (t.is("[title]")) return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
                })));
            },
            _enable: function() {
                this.disabledTitles.each((function() {
                    var t = V(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
                })), this.disabledTitles = V([]);
            },
            open: function(t) {
                var i = this, e = V(t ? t.target : this.element).closest(this.options.items);
                e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), 
                e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each((function() {
                    var t, e = V(this);
                    e.data("ui-tooltip-open") && ((t = V.Event("blur")).target = t.currentTarget = this, 
                    i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: e.attr("title")
                    }, e.attr("title", ""));
                })), this._registerCloseHandlers(t, e), this._updateContent(e, t));
            },
            _updateContent: function(e, i) {
                var t = this.options.content, s = this, n = i ? i.type : null;
                if ("string" == typeof t || t.nodeType || t.jquery) return this._open(i, e, t);
                (t = t.call(e[0], (function(t) {
                    s._delay((function() {
                        e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t));
                    }));
                }))) && this._open(i, e, t);
            },
            _open: function(t, e, i) {
                var s, n, o, a = V.extend({}, this.options.position);
                function r(t) {
                    a.of = t, n.is(":hidden") || n.position(a);
                }
                i && ((s = this._find(e)) ? s.tooltip.find(".ui-tooltip-content").html(i) : (e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), 
                s = this._tooltip(e), n = s.tooltip, this._addDescribedBy(e, n.attr("id")), n.find(".ui-tooltip-content").html(i), 
                this.liveRegion.children().hide(), (i = V("<div>").html(n.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), 
                i.removeAttr("id").find("[id]").removeAttr("id"), i.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: r
                }), r(t)) : n.position(V.extend({
                    of: e
                }, this.options.position)), n.hide(), this._show(n, this.options.show), this.options.track && this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval((function() {
                    n.is(":visible") && (r(a.of), clearInterval(o));
                }), 13)), this._trigger("open", t, {
                    tooltip: n
                })));
            },
            _registerCloseHandlers: function(t, e) {
                var i = {
                    keyup: function(t) {
                        t.keyCode === V.ui.keyCode.ESCAPE && ((t = V.Event(t)).currentTarget = e[0], this.close(t, !0));
                    }
                };
                e[0] !== this.element[0] && (i.remove = function() {
                    var t = this._find(e);
                    t && this._removeTooltip(t.tooltip);
                }), t && "mouseover" !== t.type || (i.mouseleave = "close"), t && "focusin" !== t.type || (i.focusout = "close"), 
                this._on(!0, e, i);
            },
            close: function(t) {
                var e, i = this, s = V(t ? t.currentTarget : this.element), n = this._find(s);
                n ? (e = n.tooltip, n.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), 
                this._removeDescribedBy(s), n.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, (function() {
                    i._removeTooltip(V(this));
                })), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), 
                s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), 
                t && "mouseleave" === t.type && V.each(this.parents, (function(t, e) {
                    V(e.element).attr("title", e.title), delete i.parents[t];
                })), n.closing = !0, this._trigger("close", t, {
                    tooltip: e
                }), n.hiding || (n.closing = !1))) : s.removeData("ui-tooltip-open");
            },
            _tooltip: function(t) {
                var e = V("<div>").attr("role", "tooltip"), i = V("<div>").appendTo(e), s = e.uniqueId().attr("id");
                return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), 
                e.appendTo(this._appendTo(t)), this.tooltips[s] = {
                    element: t,
                    tooltip: e
                };
            },
            _find: function(t) {
                t = t.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null;
            },
            _removeTooltip: function(t) {
                clearInterval(this.delayedShow), t.remove(), delete this.tooltips[t.attr("id")];
            },
            _appendTo: function(t) {
                t = t.closest(".ui-front, dialog");
                return t = !t.length ? this.document[0].body : t;
            },
            _destroy: function() {
                var s = this;
                V.each(this.tooltips, (function(t, e) {
                    var i = V.Event("blur");
                    e = e.element;
                    i.target = i.currentTarget = e[0], s.close(i, !0), V("#" + t).remove(), e.data("ui-tooltip-title") && (e.attr("title") || e.attr("title", e.data("ui-tooltip-title")), 
                    e.removeData("ui-tooltip-title"));
                })), this.liveRegion.remove();
            }
        }), !1 !== V.uiBackCompat && V.widget("ui.tooltip", V.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), 
                t;
            }
        });
        V.ui.tooltip;
        var H = V, z = {}, A = z.toString, O = /^([\-+])=\s*(\d+\.?\d*)/, N = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1 ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1 ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], E = H.Color = function(t, e, i, s) {
            return new H.Color.fn.parse(t, e, i, s);
        }, W = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, F = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, L = E.support = {}, R = H("<p>")[0], Y = H.each;
        function B(t) {
            return null == t ? t + "" : "object" == typeof t ? z[A.call(t)] || "object" : typeof t;
        }
        function j(t, e, i) {
            var s = F[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : Math.min(s.max, Math.max(0, t)));
        }
        function q(s) {
            var n = E(), o = n._rgba = [];
            return s = s.toLowerCase(), Y(N, (function(t, e) {
                var i = e.re.exec(s);
                i = i && e.parse(i), e = e.space || "rgba";
                if (i) return i = n[e](i), n[W[e].cache] = i[W[e].cache], o = n._rgba = i._rgba, 
                !1;
            })), o.length ? ("0,0,0,0" === o.join() && H.extend(o, st.transparent), n) : st[s];
        }
        function K(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
        }
        R.style.cssText = "background-color:rgba(1,1,1,.5)", L.rgba = -1 < R.style.backgroundColor.indexOf("rgba"), 
        Y(W, (function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        })), H.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
            z["[object " + e + "]"] = e.toLowerCase();
        })), (E.fn = H.extend(E.prototype, {
            parse: function(n, t, e, i) {
                if (void 0 === n) return this._rgba = [ null, null, null, null ], this;
                (n.jquery || n.nodeType) && (n = H(n).css(t), t = void 0);
                var o = this, s = B(n), a = this._rgba = [];
                return void 0 !== t && (n = [ n, t, e, i ], s = "array"), "string" === s ? this.parse(q(n) || st._default) : "array" === s ? (Y(W.rgba.props, (function(t, e) {
                    a[e.idx] = j(n[e.idx], e);
                })), this) : "object" === s ? (Y(W, n instanceof E ? function(t, e) {
                    n[e.cache] && (o[e.cache] = n[e.cache].slice());
                } : function(t, i) {
                    var s = i.cache;
                    Y(i.props, (function(t, e) {
                        if (!o[s] && i.to) {
                            if ("alpha" === t || null == n[t]) return;
                            o[s] = i.to(o._rgba);
                        }
                        o[s][e.idx] = j(n[t], e, !0);
                    })), o[s] && H.inArray(null, o[s].slice(0, 3)) < 0 && (null == o[s][3] && (o[s][3] = 1), 
                    i.from && (o._rgba = i.from(o[s])));
                }), this) : void 0;
            },
            is: function(t) {
                var n = E(t), o = !0, a = this;
                return Y(W, (function(t, e) {
                    var i, s = n[e.cache];
                    return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], Y(e.props, (function(t, e) {
                        if (null != s[e.idx]) return o = s[e.idx] === i[e.idx];
                    }))), o;
                })), o;
            },
            _space: function() {
                var i = [], s = this;
                return Y(W, (function(t, e) {
                    s[e.cache] && i.push(t);
                })), i.pop();
            },
            transition: function(t, a) {
                var e = (h = E(t))._space(), i = W[e], r = (t = 0 === this.alpha() ? E("transparent") : this, 
                t[i.cache] || i.to(t._rgba)), l = r.slice(), h = h[i.cache];
                return Y(i.props, (function(t, e) {
                    var i = e.idx, s = r[i], n = h[i], o = F[e.type] || {};
                    null !== n && (null === s ? l[i] = n : (o.mod && (n - s > o.mod / 2 ? s += o.mod : s - n > o.mod / 2 && (s -= o.mod)), 
                    l[i] = j((n - s) * a + s, e)));
                })), this[e](l);
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var e = this._rgba.slice(), i = e.pop(), s = E(t)._rgba;
                return E(H.map(e, (function(t, e) {
                    return (1 - i) * s[e] + i * t;
                })));
            },
            toRgbaString: function() {
                var t = "rgba(", e = H.map(this._rgba, (function(t, e) {
                    return null != t ? t : 2 < e ? 1 : 0;
                }));
                return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")";
            },
            toHslaString: function() {
                var t = "hsla(", e = H.map(this.hsla(), (function(t, e) {
                    return null == t && (t = 2 < e ? 1 : 0), t = e && e < 3 ? Math.round(100 * t) + "%" : t;
                }));
                return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")";
            },
            toHexString: function(t) {
                var e = this._rgba.slice(), i = e.pop();
                return t && e.push(~~(255 * i)), "#" + H.map(e, (function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                })).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        })).parse.prototype = E.fn, W.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 255, i = t[1] / 255, s = t[2] / 255, n = t[3], o = Math.max(e, i, s), a = Math.min(e, i, s), r = o - a, l = o + a;
            t = .5 * l, i = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240, 
            l = 0 == r ? 0 : t <= .5 ? r / l : r / (2 - l);
            return [ Math.round(i) % 360, l, t, null == n ? 1 : n ];
        }, W.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], s = t[2];
            t = t[3], i = s <= .5 ? s * (1 + i) : s + i - s * i, s = 2 * s - i;
            return [ Math.round(255 * K(s, i, e + 1 / 3)), Math.round(255 * K(s, i, e)), Math.round(255 * K(s, i, e - 1 / 3)), t ];
        }, Y(W, (function(l, t) {
            var e = t.props, o = t.cache, a = t.to, r = t.from;
            E.fn[l] = function(t) {
                if (a && !this[o] && (this[o] = a(this._rgba)), void 0 === t) return this[o].slice();
                var i = B(t), s = "array" === i || "object" === i ? t : arguments, n = this[o].slice();
                return Y(e, (function(t, e) {
                    t = s["object" === i ? t : e.idx];
                    null == t && (t = n[e.idx]), n[e.idx] = j(t, e);
                })), r ? ((t = E(r(n)))[o] = n, t) : E(n);
            }, Y(e, (function(a, r) {
                E.fn[a] || (E.fn[a] = function(t) {
                    var e, i = B(t), s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : l, n = this[s](), o = n[r.idx];
                    return "undefined" === i ? o : ("function" === i && (i = B(t = t.call(this, o))), 
                    null == t && r.empty ? this : ("string" === i && (e = O.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), 
                    n[r.idx] = t, this[s](n)));
                });
            }));
        })), (E.hook = function(t) {
            t = t.split(" ");
            Y(t, (function(t, o) {
                H.cssHooks[o] = {
                    set: function(t, e) {
                        var i, s, n = "";
                        if ("transparent" !== e && ("string" !== B(e) || (i = q(e)))) {
                            if (e = E(i || e), !L.rgba && 1 !== e._rgba[3]) {
                                for (s = "backgroundColor" === o ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style; ) try {
                                    n = H.css(s, "backgroundColor"), s = s.parentNode;
                                } catch (t) {}
                                e = e.blend(n && "transparent" !== n ? n : "_default");
                            }
                            e = e.toRgbaString();
                        }
                        try {
                            t.style[o] = e;
                        } catch (t) {}
                    }
                }, H.fx.step[o] = function(t) {
                    t.colorInit || (t.start = E(t.elem, o), t.end = E(t.end), t.colorInit = !0), H.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
                };
            }));
        })("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        H.cssHooks.borderColor = {
            expand: function(i) {
                var s = {};
                return Y([ "Top", "Right", "Bottom", "Left" ], (function(t, e) {
                    s["border" + e + "Color"] = i;
                })), s;
            }
        };
        var U, X, $, G, Q, J, Z, tt, et, it, st = H.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        }, nt = "ui-effects-", ot = "ui-effects-style", at = "ui-effects-animated";
        function rt(t) {
            var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, n = {};
            if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--; ) "string" == typeof s[e = s[i]] && (n[e.replace(/-([\da-z])/gi, (function(t, e) {
                return e.toUpperCase();
            }))] = s[e]); else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
            return n;
        }
        function lt(t, e, i, s) {
            return t = {
                effect: t = V.isPlainObject(t) ? (e = t).effect : t
            }, "function" == typeof (e = null == e ? {} : e) && (s = e, i = null, e = {}), "number" != typeof e && !V.fx.speeds[e] || (s = i, 
            i = e, e = {}), "function" == typeof i && (s = i, i = null), e && V.extend(t, e), 
            i = i || e.duration, t.duration = V.fx.off ? 0 : "number" == typeof i ? i : i in V.fx.speeds ? V.fx.speeds[i] : V.fx.speeds._default, 
            t.complete = s || e.complete, t;
        }
        function ht(t) {
            return !t || "number" == typeof t || V.fx.speeds[t] || "string" == typeof t && !V.effects.effect[t] || "function" == typeof t || "object" == typeof t && !t.effect;
        }
        function ct(t, e) {
            var i = e.outerWidth();
            e = e.outerHeight(), t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || [ "", 0, i, e, 0 ];
            return {
                top: parseFloat(t[1]) || 0,
                right: "auto" === t[2] ? i : parseFloat(t[2]),
                bottom: "auto" === t[3] ? e : parseFloat(t[3]),
                left: parseFloat(t[4]) || 0
            };
        }
        V.effects = {
            effect: {}
        }, G = [ "add", "remove", "toggle" ], Q = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        }, V.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], (function(t, e) {
            V.fx.step[e] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (H.style(t.elem, e, t.end), 
                t.setAttr = !0);
            };
        })), V.fn.addBack || (V.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), V.effects.animateClass = function(n, t, e, i) {
            var o = V.speed(t, e, i);
            return this.queue((function() {
                var i = V(this), t = i.attr("class") || "", e = (e = o.children ? i.find("*").addBack() : i).map((function() {
                    return {
                        el: V(this),
                        start: rt(this)
                    };
                })), s = function() {
                    V.each(G, (function(t, e) {
                        n[e] && i[e + "Class"](n[e]);
                    }));
                };
                s(), e = e.map((function() {
                    return this.end = rt(this.el[0]), this.diff = function(t, e) {
                        var i, s, n = {};
                        for (i in e) s = e[i], t[i] !== s && (Q[i] || !V.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s));
                        return n;
                    }(this.start, this.end), this;
                })), i.attr("class", t), e = e.map((function() {
                    var t = this, e = V.Deferred(), i = V.extend({}, o, {
                        queue: !1,
                        complete: function() {
                            e.resolve(t);
                        }
                    });
                    return this.el.animate(this.diff, i), e.promise();
                })), V.when.apply(V, e.get()).done((function() {
                    s(), V.each(arguments, (function() {
                        var e = this.el;
                        V.each(this.diff, (function(t) {
                            e.css(t, "");
                        }));
                    })), o.complete.call(i[0]);
                }));
            }));
        }, V.fn.extend({
            addClass: ($ = V.fn.addClass, function(t, e, i, s) {
                return e ? V.effects.animateClass.call(this, {
                    add: t
                }, e, i, s) : $.apply(this, arguments);
            }),
            removeClass: (X = V.fn.removeClass, function(t, e, i, s) {
                return 1 < arguments.length ? V.effects.animateClass.call(this, {
                    remove: t
                }, e, i, s) : X.apply(this, arguments);
            }),
            toggleClass: (U = V.fn.toggleClass, function(t, e, i, s, n) {
                return "boolean" == typeof e || void 0 === e ? i ? V.effects.animateClass.call(this, e ? {
                    add: t
                } : {
                    remove: t
                }, i, s, n) : U.apply(this, arguments) : V.effects.animateClass.call(this, {
                    toggle: t
                }, e, i, s);
            }),
            switchClass: function(t, e, i, s, n) {
                return V.effects.animateClass.call(this, {
                    add: e,
                    remove: t
                }, i, s, n);
            }
        }), V.expr && V.expr.pseudos && V.expr.pseudos.animated && (V.expr.pseudos.animated = (J = V.expr.pseudos.animated, 
        function(t) {
            return !!V(t).data(at) || J(t);
        })), !1 !== V.uiBackCompat && V.extend(V.effects, {
            save: function(t, e) {
                for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(nt + e[i], t[0].style[e[i]]);
            },
            restore: function(t, e) {
                for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data(nt + e[s]), 
                t.css(e[s], i));
            },
            setMode: function(t, e) {
                return e = "toggle" === e ? t.is(":hidden") ? "show" : "hide" : e;
            },
            createWrapper: function(i) {
                if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                var s = {
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    float: i.css("float")
                }, t = V("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {
                    width: i.width(),
                    height: i.height()
                }, n = document.activeElement;
                try {
                    n.id;
                } catch (t) {
                    n = document.body;
                }
                return i.wrap(t), i[0] !== n && !V.contains(i[0], n) || V(n).trigger("focus"), t = i.parent(), 
                "static" === i.css("position") ? (t.css({
                    position: "relative"
                }), i.css({
                    position: "relative"
                })) : (V.extend(s, {
                    position: i.css("position"),
                    zIndex: i.css("z-index")
                }), V.each([ "top", "left", "bottom", "right" ], (function(t, e) {
                    s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                })), i.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), i.css(e), t.css(s).show();
            },
            removeWrapper: function(t) {
                var e = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !V.contains(t[0], e) || V(e).trigger("focus")), 
                t;
            }
        }), V.extend(V.effects, {
            version: "1.13.1",
            define: function(t, e, i) {
                return i || (i = e, e = "effect"), V.effects.effect[t] = i, V.effects.effect[t].mode = e, 
                i;
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1;
                e = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * e,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * e,
                    outerWidth: t.outerWidth() * s
                };
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                1 < e && s.splice.apply(s, [ 1, 0 ].concat(s.splice(e, i))), t.dequeue();
            },
            saveStyle: function(t) {
                t.data(ot, t[0].style.cssText);
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data(ot) || "", t.removeData(ot);
            },
            mode: function(t, e) {
                t = t.is(":hidden");
                return "toggle" === e && (e = t ? "show" : "hide"), e = (t ? "hide" === e : "show" === e) ? "none" : e;
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    s = 0;
                    break;

                  case "center":
                    s = .5;
                    break;

                  case "right":
                    s = 1;
                    break;

                  default:
                    s = t[1] / e.width;
                }
                return {
                    x: s,
                    y: i
                };
            },
            createPlaceholder: function(t) {
                var e, i = t.css("position"), s = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", 
                e = V("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), 
                t.data(nt + "placeholder", e)), t.css({
                    position: i,
                    left: s.left,
                    top: s.top
                }), e;
            },
            removePlaceholder: function(t) {
                var e = nt + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            },
            cleanUp: function(t) {
                V.effects.restoreStyle(t), V.effects.removePlaceholder(t);
            },
            setTransition: function(s, t, n, o) {
                return o = o || {}, V.each(t, (function(t, e) {
                    var i = s.cssUnit(e);
                    0 < i[0] && (o[e] = i[0] * n + i[1]);
                })), o;
            }
        }), V.fn.extend({
            effect: function() {
                function t(t) {
                    var e = V(this), i = V.effects.mode(e, r) || o;
                    e.data(at, !0), l.push(i), o && ("show" === i || i === o && "hide" === i) && e.show(), 
                    o && "none" === i || V.effects.saveStyle(e), "function" == typeof t && t();
                }
                var s = lt.apply(this, arguments), n = V.effects.effect[s.effect], o = n.mode, e = s.queue, i = e || "fx", a = s.complete, r = s.mode, l = [];
                return V.fx.off || !n ? r ? this[r](s.duration, a) : this.each((function() {
                    a && a.call(this);
                })) : !1 === e ? this.each(t).each(h) : this.queue(i, t).queue(i, h);
                function h(t) {
                    var e = V(this);
                    function i() {
                        "function" == typeof a && a.call(e[0]), "function" == typeof t && t();
                    }
                    s.mode = l.shift(), !1 === V.uiBackCompat || o ? "none" === s.mode ? (e[r](), i()) : n.call(e[0], s, (function() {
                        e.removeData(at), V.effects.cleanUp(e), "hide" === s.mode && e.hide(), i();
                    })) : (e.is(":hidden") ? "hide" === r : "show" === r) ? (e[r](), i()) : n.call(e[0], s, i);
                }
            },
            show: (et = V.fn.show, function(t) {
                if (ht(t)) return et.apply(this, arguments);
                t = lt.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t);
            }),
            hide: (tt = V.fn.hide, function(t) {
                if (ht(t)) return tt.apply(this, arguments);
                t = lt.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t);
            }),
            toggle: (Z = V.fn.toggle, function(t) {
                if (ht(t) || "boolean" == typeof t) return Z.apply(this, arguments);
                t = lt.apply(this, arguments);
                return t.mode = "toggle", this.effect.call(this, t);
            }),
            cssUnit: function(t) {
                var i = this.css(t), s = [];
                return V.each([ "em", "px", "%", "pt" ], (function(t, e) {
                    0 < i.indexOf(e) && (s = [ parseFloat(i), e ]);
                })), s;
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : ct(this.css("clip"), this);
            },
            transfer: function(t, e) {
                var i = V(this), s = V(t.to), n = "fixed" === s.css("position"), o = V("body"), a = n ? o.scrollTop() : 0, r = n ? o.scrollLeft() : 0, l = (o = s.offset(), 
                o = {
                    top: o.top - a,
                    left: o.left - r,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                }, s = i.offset(), V("<div class='ui-effects-transfer'></div>"));
                l.appendTo("body").addClass(t.className).css({
                    top: s.top - a,
                    left: s.left - r,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: n ? "fixed" : "absolute"
                }).animate(o, t.duration, t.easing, (function() {
                    l.remove(), "function" == typeof e && e();
                }));
            }
        }), V.fx.step.clip = function(t) {
            t.clipInit || (t.start = V(t.elem).cssClip(), "string" == typeof t.end && (t.end = ct(t.end, t.elem)), 
            t.clipInit = !0), V(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            });
        }, it = {}, V.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], (function(e, t) {
            it[t] = function(t) {
                return Math.pow(t, e + 2);
            };
        })), V.extend(it, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), V.each(it, (function(t, e) {
            V.easing["easeIn" + t] = e, V.easing["easeOut" + t] = function(t) {
                return 1 - e(1 - t);
            }, V.easing["easeInOut" + t] = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
            };
        }));
        R = V.effects, V.effects.define("blind", "hide", (function(t, e) {
            var i = {
                up: [ "bottom", "top" ],
                vertical: [ "bottom", "top" ],
                down: [ "top", "bottom" ],
                left: [ "right", "left" ],
                horizontal: [ "right", "left" ],
                right: [ "left", "right" ]
            }, s = V(this), n = t.direction || "up", o = s.cssClip(), a = {
                clip: V.extend({}, o)
            }, r = V.effects.createPlaceholder(s);
            a.clip[i[n][0]] = a.clip[i[n][1]], "show" === t.mode && (s.cssClip(a.clip), r && r.css(V.effects.clipToBox(a)), 
            a.clip = o), r && r.animate(V.effects.clipToBox(a), t.duration, t.easing), s.animate(a, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), V.effects.define("bounce", (function(t, e) {
            var i, s, n = V(this), o = t.mode, a = "hide" === o, r = "show" === o, l = t.direction || "up", h = t.distance, c = t.times || 5, u = (o = 2 * c + (r || a ? 1 : 0), 
            t.duration / o), d = t.easing, p = "up" === l || "down" === l ? "top" : "left", f = "up" === l || "left" === l, g = 0;
            t = n.queue().length;
            for (V.effects.createPlaceholder(n), l = n.css(p), h = h || n["top" == p ? "outerHeight" : "outerWidth"]() / 3, 
            r && ((s = {
                opacity: 1
            })[p] = l, n.css("opacity", 0).css(p, f ? 2 * -h : 2 * h).animate(s, u, d)), a && (h /= Math.pow(2, c - 1)), 
            (s = {})[p] = l; g < c; g++) (i = {})[p] = (f ? "-=" : "+=") + h, n.animate(i, u, d).animate(s, u, d), 
            h = a ? 2 * h : h / 2;
            a && ((i = {
                opacity: 0
            })[p] = (f ? "-=" : "+=") + h, n.animate(i, u, d)), n.queue(e), V.effects.unshift(n, t, 1 + o);
        })), V.effects.define("clip", "hide", (function(t, e) {
            var i = {}, s = V(this), n = t.direction || "vertical", o = "both" === n, a = o || "horizontal" === n;
            o = o || "vertical" === n, n = s.cssClip();
            i.clip = {
                top: o ? (n.bottom - n.top) / 2 : n.top,
                right: a ? (n.right - n.left) / 2 : n.right,
                bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
                left: a ? (n.right - n.left) / 2 : n.left
            }, V.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(i.clip), i.clip = n), 
            s.animate(i, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), V.effects.define("drop", "hide", (function(t, e) {
            var i = V(this), s = "show" === t.mode, n = t.direction || "left", o = "up" === n || "down" === n ? "top" : "left", a = "up" === n || "left" === n ? "-=" : "+=", r = "+=" == a ? "-=" : "+=", l = {
                opacity: 0
            };
            V.effects.createPlaceholder(i), n = t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2, 
            l[o] = a + n, s && (i.css(l), l[o] = r + n, l.opacity = 1), i.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), V.effects.define("explode", "hide", (function(t, e) {
            var i, s, n, o, a, r, l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, h = l, c = V(this), u = "show" === t.mode, d = c.show().css("visibility", "hidden").offset(), p = Math.ceil(c.outerWidth() / h), f = Math.ceil(c.outerHeight() / l), g = [];
            function m() {
                g.push(this), g.length === l * h && (c.css({
                    visibility: "visible"
                }), V(g).remove(), e());
            }
            for (i = 0; i < l; i++) for (o = d.top + i * f, r = i - (l - 1) / 2, s = 0; s < h; s++) n = d.left + s * p, 
            a = s - (h - 1) / 2, c.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -s * p,
                top: -i * f
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: p,
                height: f,
                left: n + (u ? a * p : 0),
                top: o + (u ? r * f : 0),
                opacity: u ? 0 : 1
            }).animate({
                left: n + (u ? 0 : a * p),
                top: o + (u ? 0 : r * f),
                opacity: u ? 1 : 0
            }, t.duration || 500, t.easing, m);
        })), V.effects.define("fade", "toggle", (function(t, e) {
            var i = "show" === t.mode;
            V(this).css("opacity", i ? 0 : 1).animate({
                opacity: i ? 1 : 0
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), V.effects.define("fold", "hide", (function(e, t) {
            var i = V(this), s = e.mode, n = "show" === s, o = "hide" === s, a = e.size || 15, r = /([0-9]+)%/.exec(a), l = !!e.horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], h = e.duration / 2, c = V.effects.createPlaceholder(i), u = i.cssClip(), d = {
                clip: V.extend({}, u)
            }, p = {
                clip: V.extend({}, u)
            }, f = [ u[l[0]], u[l[1]] ];
            s = i.queue().length;
            r && (a = parseInt(r[1], 10) / 100 * f[o ? 0 : 1]), d.clip[l[0]] = a, p.clip[l[0]] = a, 
            p.clip[l[1]] = 0, n && (i.cssClip(p.clip), c && c.css(V.effects.clipToBox(p)), p.clip = u), 
            i.queue((function(t) {
                c && c.animate(V.effects.clipToBox(d), h, e.easing).animate(V.effects.clipToBox(p), h, e.easing), 
                t();
            })).animate(d, h, e.easing).animate(p, h, e.easing).queue(t), V.effects.unshift(i, s, 4);
        })), V.effects.define("highlight", "show", (function(t, e) {
            var i = V(this), s = {
                backgroundColor: i.css("backgroundColor")
            };
            "hide" === t.mode && (s.opacity = 0), V.effects.saveStyle(i), i.css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), V.effects.define("size", (function(s, e) {
            var n, i = V(this), t = [ "fontSize" ], o = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], a = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], r = s.mode, l = "effect" !== r, h = s.scale || "both", c = s.origin || [ "middle", "center" ], u = i.css("position"), d = i.position(), p = V.effects.scaledDimensions(i), f = s.from || p, g = s.to || V.effects.scaledDimensions(i, 0);
            V.effects.createPlaceholder(i), "show" === r && (r = f, f = g, g = r), n = {
                from: {
                    y: f.height / p.height,
                    x: f.width / p.width
                },
                to: {
                    y: g.height / p.height,
                    x: g.width / p.width
                }
            }, "box" !== h && "both" !== h || (n.from.y !== n.to.y && (f = V.effects.setTransition(i, o, n.from.y, f), 
            g = V.effects.setTransition(i, o, n.to.y, g)), n.from.x !== n.to.x && (f = V.effects.setTransition(i, a, n.from.x, f), 
            g = V.effects.setTransition(i, a, n.to.x, g))), "content" !== h && "both" !== h || n.from.y !== n.to.y && (f = V.effects.setTransition(i, t, n.from.y, f), 
            g = V.effects.setTransition(i, t, n.to.y, g)), c && (c = V.effects.getBaseline(c, p), 
            f.top = (p.outerHeight - f.outerHeight) * c.y + d.top, f.left = (p.outerWidth - f.outerWidth) * c.x + d.left, 
            g.top = (p.outerHeight - g.outerHeight) * c.y + d.top, g.left = (p.outerWidth - g.outerWidth) * c.x + d.left), 
            delete f.outerHeight, delete f.outerWidth, i.css(f), "content" !== h && "both" !== h || (o = o.concat([ "marginTop", "marginBottom" ]).concat(t), 
            a = a.concat([ "marginLeft", "marginRight" ]), i.find("*[width]").each((function() {
                var t = V(this), e = V.effects.scaledDimensions(t), i = {
                    height: e.height * n.from.y,
                    width: e.width * n.from.x,
                    outerHeight: e.outerHeight * n.from.y,
                    outerWidth: e.outerWidth * n.from.x
                };
                e = {
                    height: e.height * n.to.y,
                    width: e.width * n.to.x,
                    outerHeight: e.height * n.to.y,
                    outerWidth: e.width * n.to.x
                };
                n.from.y !== n.to.y && (i = V.effects.setTransition(t, o, n.from.y, i), e = V.effects.setTransition(t, o, n.to.y, e)), 
                n.from.x !== n.to.x && (i = V.effects.setTransition(t, a, n.from.x, i), e = V.effects.setTransition(t, a, n.to.x, e)), 
                l && V.effects.saveStyle(t), t.css(i), t.animate(e, s.duration, s.easing, (function() {
                    l && V.effects.restoreStyle(t);
                }));
            }))), i.animate(g, {
                queue: !1,
                duration: s.duration,
                easing: s.easing,
                complete: function() {
                    var t = i.offset();
                    0 === g.opacity && i.css("opacity", f.opacity), l || (i.css("position", "static" === u ? "relative" : u).offset(t), 
                    V.effects.saveStyle(i)), e();
                }
            });
        })), V.effects.define("scale", (function(t, e) {
            var i = V(this), s = t.mode;
            s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100), 
            s = V.extend(!0, {
                from: V.effects.scaledDimensions(i),
                to: V.effects.scaledDimensions(i, s, t.direction || "both"),
                origin: t.origin || [ "middle", "center" ]
            }, t);
            t.fade && (s.from.opacity = 1, s.to.opacity = 0), V.effects.effect.size.call(this, s, e);
        })), V.effects.define("puff", "hide", (function(t, e) {
            t = V.extend(!0, {}, t, {
                fade: !0,
                percent: parseInt(t.percent, 10) || 150
            });
            V.effects.effect.scale.call(this, t, e);
        })), V.effects.define("pulsate", "show", (function(t, e) {
            var i = V(this), s = t.mode, n = "show" === s, o = 2 * (t.times || 5) + (n || "hide" === s ? 1 : 0), a = t.duration / o, r = 0, l = 1;
            s = i.queue().length;
            for (!n && i.is(":visible") || (i.css("opacity", 0).show(), r = 1); l < o; l++) i.animate({
                opacity: r
            }, a, t.easing), r = 1 - r;
            i.animate({
                opacity: r
            }, a, t.easing), i.queue(e), V.effects.unshift(i, s, 1 + o);
        })), V.effects.define("shake", (function(t, e) {
            var i = 1, s = V(this), n = t.direction || "left", o = t.distance || 20, a = t.times || 3, r = 2 * a + 1, l = Math.round(t.duration / r), h = "up" === n || "down" === n ? "top" : "left", c = "up" === n || "left" === n, u = {}, d = {}, p = {};
            n = s.queue().length;
            for (V.effects.createPlaceholder(s), u[h] = (c ? "-=" : "+=") + o, d[h] = (c ? "+=" : "-=") + 2 * o, 
            p[h] = (c ? "-=" : "+=") + 2 * o, s.animate(u, l, t.easing); i < a; i++) s.animate(d, l, t.easing).animate(p, l, t.easing);
            s.animate(d, l, t.easing).animate(u, l / 2, t.easing).queue(e), V.effects.unshift(s, n, 1 + r);
        })), V.effects.define("slide", "show", (function(t, e) {
            var i, s, n = V(this), o = {
                up: [ "bottom", "top" ],
                down: [ "top", "bottom" ],
                left: [ "right", "left" ],
                right: [ "left", "right" ]
            }, a = t.mode, r = t.direction || "left", l = "up" === r || "down" === r ? "top" : "left", h = "up" === r || "left" === r, c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0), u = {};
            V.effects.createPlaceholder(n), i = n.cssClip(), s = n.position()[l], u[l] = (h ? -1 : 1) * c + s, 
            u.clip = n.cssClip(), u.clip[o[r][1]] = u.clip[o[r][0]], "show" === a && (n.cssClip(u.clip), 
            n.css(l, u[l]), u.clip = i, u[l] = s), n.animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            });
        })), !1 !== V.uiBackCompat && V.effects.define("transfer", (function(t, e) {
            V(this).transfer(t, e);
        }));
    }));
    $("#max-label").addClass("fix");
    $((function() {
        let minVal = 0;
        let maxVal = 409764;
        $("#range").slider({
            range: true,
            min: minVal,
            max: maxVal,
            values: [ minVal, maxVal ],
            slide: function(event, ui) {
                $("#min").val(ui.values[0]);
                $("#max").val(ui.values[1]);
                if ($("#max").val() > maxVal / 100 * 96) $("#max-label").addClass("fix"); else $("#max-label").removeClass("fix");
                var delay = function() {
                    $("#range").find(".ui-slider-handle").each((function(index) {
                        var label = 0 == index ? "#min-label" : "#max-label";
                        $(label).html(ui.values[index]).position({
                            my: "center bottom",
                            at: "center top",
                            of: $(this),
                            offset: "0, 10"
                        });
                    }));
                };
                setTimeout(delay, 5);
            }
        });
        $("#min, #max").keypress((function(event) {
            if (13 == event.keyCode && parseInt($("#min").val()) < parseInt($("#max").val())) {
                $("#range").slider({
                    values: [ $("#min").val(), $("#max").val() ]
                });
                if ($("#max").val() > maxVal / 100 * 96) $("#max-label").addClass("fix"); else $("#max-label").removeClass("fix");
                $("#range").find(".ui-slider-handle").each((function(index) {
                    var label = 0 == index ? "#min-label" : "#max-label";
                    console.log(index);
                    $(label).html($("#range").slider("values")[index]).position({
                        my: "center bottom",
                        at: "center top",
                        of: $(this),
                        offset: "0, 10"
                    });
                }));
            }
        }));
    }));
    window.addEventListener("load", (function() {
        setTimeout((function() {
            $(".hasAnimation").each((function() {
                var animateName = $(this).data("animate");
                $(this).addClass("hidden").viewportChecker({
                    classToRemove: "hidden",
                    classToAdd: "visible animate__animated " + animateName,
                    offset: 0
                });
            }));
        }), 200);
    }));
    $(document).ready((function() {
        setTimeout((function() {
            $(".product-preview-wrapper").height($(".product-preview-wrapper").height());
        }), 300);
        $(".validates-as-tel").mask("+7 (999) 999-9999");
        popupInitialize();
        bestsellerSlider();
        newProductSlider();
        collectionSlider();
        productKitSlider();
        productSlider();
        productDetailSlider();
        geberitSlider();
        info__toggler();
        popularCategoriesToggler();
        headerPhonesToggle();
        headerAccountPopup();
        headerMenuToggle();
        sidebar__acc();
        tabsInit();
        catalogFilterToggle();
        busketCounter();
        busketPopupCounter();
        headerSearch();
        mobileSortDropdown();
        feedbackWidget();
        description__lines();
        main_showMore();
        account_auth_popup();
        show_menu_stores();
        katalogMenu();
        mainMenu();
        $(".product-preview__images").HvrSlider();
    }));
    $(window).resize((function() {
        show_menu_stores();
    }));
    function popularCategoriesToggler() {
        let ths = $(".popular-categories__body-media");
        let btn = $(".popular-categories__buttons-item");
        ths.find(".popular-categories__media-text").not(":first").hide();
        ths.find(".popular-categories__media-image").not(":first").hide();
        btn.mouseenter((function() {
            $(".popular-categories__buttons-item").removeClass("active").eq($(this).index()).addClass("active");
            $(".popular-categories__media-text").hide().eq($(this).index()).show();
            $(".popular-categories__media-image").hide().eq($(this).index()).show();
        }));
    }
    function info__toggler() {
        $(".info-section__button").mouseenter((function() {
            let bannerid = $(this).data("bannerid");
            $(".info-section__button").removeClass("info-section__button_active");
            $(this).addClass("info-section__button_active");
            $(".info-section__item").hide();
            $(".info-section__item#bannerid-" + bannerid).show();
        }));
    }
    function headerPhonesToggle() {
        $(".header-top__phones svg").click((function() {
            $(this).toggleClass("active");
            $(this).parent().find(".header-top__phones-list").slideToggle(300, (function() {}));
        }));
    }
    function headerAccountPopup() {
        $(".header-top__account-profile").click((function() {
            $(this).toggleClass("active");
            $(this).parent().find(".header-top__account-popup").slideToggle(300, (function() {}));
        }));
        $(document).mouseup((function(e) {
            var container = $(".header-top__account-popup");
            if (!container.is(e.target) && 0 === container.has(e.target).length) {
                $(".header-top__account-popup").hide();
                $(".header-top__account-profile").removeClass("active");
            }
        }));
    }
    function headerMenuToggle() {
        let menuMain = $(".header-top__menu-item");
        menuMain.click((function() {
            $(this).toggleClass("active");
            $(this).find(".header-top__submenu-list").slideToggle(300, (function() {}));
        }));
        $(document).mouseup((function(e) {
            menuMain.each((function() {
                if ($(this).hasClass("active")) {
                    var div = $(this);
                    if (!div.is(e.target) && 0 === div.has(e.target).length) {
                        div.find(".header-top__submenu-list").slideUp(300, (function() {}));
                        menuMain.removeClass("active");
                    }
                }
            }));
        }));
    }
    function collectionSlider() {
        $(".collections-section__slider-list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: ".collections-section__arrows",
            prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'></button>",
            fade: true,
            asNavFor: ".collections-section__slider-nav"
        });
        $(".collections-section__slider-nav").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true,
            variableWidth: true,
            asNavFor: ".collections-section__slider-list",
            responsive: [ {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false
                }
            } ]
        });
    }
    function newProductSlider() {
        let images = $(".new-products-slider__images");
        let product = $(".new-products-slider__products");
        images.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false
        });
        product.slick({
            dots: false,
            arrows: true,
            fade: true,
            autoplay: false,
            autoplaySpeed: 1e3,
            asNavFor: ".new-products-slider__images",
            speed: 500,
            cssEase: "linear",
            appendArrows: ".new-products-slider .slider-arrows",
            prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'></button>",
            responsive: [ {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1,
                    fade: false,
                    slidesToScroll: 1
                }
            } ]
        });
        $(window).resize((function() {
            images.slick("unslick");
            product.slick("unslick");
            if (window.innerWidth <= 1080) {
                images.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows: false
                });
                product.slick({
                    dots: false,
                    arrows: true,
                    fade: false,
                    autoplay: false,
                    autoplaySpeed: 1e3,
                    asNavFor: ".new-products-slider__images",
                    speed: 500,
                    slidesToScroll: 1,
                    cssEase: "linear",
                    slidesToShow: 1,
                    appendArrows: ".new-products-slider .slider-arrows",
                    prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
                    nextArrow: "<button type='button' class='slick-next pull-right'></button>"
                });
            } else if (window.innerWidth > 1080) {
                images.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    arrows: false
                });
                product.slick({
                    dots: false,
                    arrows: true,
                    fade: true,
                    autoplay: false,
                    autoplaySpeed: 1e3,
                    asNavFor: ".new-products-slider__images",
                    speed: 500,
                    cssEase: "linear",
                    appendArrows: ".new-products-slider .slider-arrows",
                    prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
                    nextArrow: "<button type='button' class='slick-next pull-right'></button>"
                });
            }
        }));
    }
    function bestsellerSlider() {
        $(".bestseller-section__slider").slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            appendArrows: ".bestseller-section__head .slider-arrows",
            prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'></button>",
            responsive: [ {
                breakpoint: 1600,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            } ]
        });
    }
    function productKitSlider() {
        $(".product-kit__slider").slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [ {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5
                }
            }, {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1080,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            } ]
        });
    }
    function productSlider() {
        $(".product-slider").slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [ {
                breakpoint: 1700,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                }
            } ]
        });
    }
    function productDetailSlider() {
        $(".product-detail__slider-main").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: ".product-detail__slider-nav"
        });
        $(".product-detail__slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".product-detail__slider-main",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: true,
            variableWidth: true,
            responsive: [ {
                breakpoint: 1080,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 380,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 3
                }
            } ]
        });
    }
    function geberitSlider() {
        $(".geberit-slider").slick({
            infinite: true,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            responsive: [ {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1440,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            } ]
        });
    }
    function catalogFilterToggle() {
        $(".responive-btns__filter").click((function() {
            $(".sidebar").addClass("active");
            $(".body-filters-on").fadeIn(300);
            $("body").addClass("body-overflow");
        }));
        $(".sidebar__head-cross, .body-filters-on").click((function() {
            $(".sidebar").removeClass("active");
            $(".body-filters-on").fadeOut(300);
            $("body").removeClass("body-overflow");
        }));
    }
    function tabsInit() {
        $(".tab-buttons__item").each((function() {
            let ths = $(this);
            ths.parent().parent().parent().find(".tab-item").not(":first").hide();
            ths.click((function() {
                ths.parent().find(".tab-buttons__item").removeClass("tab-buttons__item_active");
                ths.addClass("tab-buttons__item_active");
                ths.parent().parent().parent().find(".tab-item").hide().eq($(this).index()).fadeIn();
                description__lines();
                $(".product-slider").slick("unslick");
                productSlider();
            })).eq(0);
        }));
    }
    function sidebar__acc() {
        $(".sidebar__acc-head").click((function() {
            $(this).next().slideToggle(300).find(".sidebar__acc-scroll-wrapper").each((function() {
                if ($(this).height() > 144) {
                    $(this).parent().find(".sidebar__acc-more").addClass("button-visibility");
                    $(this).parent().find(".sidebar__acc-scroll-wrapper").removeClass("show-scroll");
                }
            }));
            $(this).find($(".sidebar__plus-ico")).toggleClass("sidebar__plus-ico_opened");
            setTimeout((function() {
                $("#min-label").html($("#range").slider("values", 0)).position({
                    my: "center bottom",
                    at: "center top",
                    of: $("#range .ui-slider-handle:eq(0)"),
                    offset: "0, 10"
                });
                $("#max-label").html($("#range").slider("values", 1)).position({
                    my: "center bottom",
                    at: "center top",
                    of: $("#range .ui-slider-handle:eq(1)"),
                    offset: "0, 10"
                });
            }), 100);
        }));
        $(".sidebar__acc-body").each((function() {
            $(this).slideToggle(0, (function() {}));
        }));
        $(".sidebar__acc-more").click((function() {
            $(this).parent().find(".sidebar__acc-scroll-wrapper ").toggleClass("show-scroll");
            if ("Показать ещё" == $(this).html()) $(this).html("Скрыть"); else $(this).html("Показать ещё");
        }));
    }
    function description__lines() {
        $(".description__lines-wrapper").each((function() {
            if ($(this).height() > 325) {
                $(this).parent().find(".description__show-more").addClass("button-visibility");
                $(this).parent().find(".description__lines-wrapper").removeClass("visible");
            }
        }));
        $(".description__show-more").html("Все характеристики");
    }
    function busketCounter() {
        $(".basket__item").each((function() {
            let amount = $(this).find(".number").val();
            $(this).find(".plus").click((function() {
                amount++;
                $(this).parent().find(".number").val(amount);
                $(this).parent().find(".minus").removeClass("unactive");
            }));
            $(this).find(".minus").click((function() {
                if (amount > 1) {
                    amount--;
                    $(this).parent().find(".number").val(amount);
                }
                if (1 == amount) $(this).parent().find(".minus").addClass("unactive");
            }));
        }));
    }
    function busketPopupCounter() {
        $(".busket-add__small-product-count").each((function() {
            let amount = $(this).find(".number").val();
            $(this).find(".plus").click((function() {
                amount++;
                $(this).parent().find(".number").val(amount);
                $(this).parent().find(".minus").removeClass("unactive");
            }));
            $(this).find(".minus").click((function() {
                if (amount > 1) {
                    amount--;
                    $(this).parent().find(".number").val(amount);
                }
                if (1 == amount) $(this).parent().find(".minus").addClass("unactive");
            }));
        }));
    }
    function headerSearch() {
        $(".header-bottom__form-submit").click((function(e) {
            if ($(".header-bottom__form-text").is(":visible") && $(".header-bottom__search-ico-mobile").is(":hidden")) {
                $(this).submit();
                console.log("visible");
            } else if ($(".header-bottom__form-text").is(":hidden") && $(".header-bottom__search-ico-mobile").is(":hidden")) {
                e.preventDefault();
                $(".header-bottom__form-text").show();
                $(".header-bottom__search").addClass("opened");
                console.log("hidden");
            }
        }));
        $(".header-bottom__search-form").on("keyup", (function() {
            $(this).val().toLowerCase();
            $(this).toggleClass("active");
            $(".header-bottom__search-dropdown").show();
        }));
        $(".header-bottom__search-ico-mobile").click((function() {
            $(".header-bottom__search, .header-bottom__form-text").toggle();
        }));
        $(".header-bottom__form-close").click((function(e) {
            e.preventDefault();
            $(".header-bottom__search, .header-bottom__form-text").hide();
        }));
    }
    function mobileSortDropdown() {
        $(".sorting-tags__sort").click((function() {
            $(this).toggleClass("active");
            $(".sorting-tags__sort-dropdown").slideToggle(300);
        }));
        $(document).mouseup((function(e) {
            if ($(".sorting-tags__sort").hasClass("active")) {
                var div = $(".sorting-tags__sort-dropdown");
                if (!div.parent().is(e.target) && 0 === div.parent().has(e.target).length) {
                    div.slideUp(300);
                    $(".sorting-tags__sort").removeClass("active");
                }
            }
        }));
    }
    function feedbackWidget() {
        $(".feedback-widget__btn").click((function() {
            $(".feedback-widget__item").toggleClass("hidden");
            $(".feedback-widget__btn").toggleClass("active");
            $(".feedback-widget__list").toggleClass("upper-z-index");
        }));
    }
    function main_showMore() {
        $(".description__show-more").click((function() {
            $(this).parent().find(".description__lines-wrapper").toggleClass("visible");
            let name = $(this).html();
            if ($(this).html() == name) $(this).html("Скрыть"); else $(this).html(name);
        }));
    }
    function account_auth_popup() {
        $(".popup__enter-btn").click((function() {
            $(".tab-item.register").hide();
            $(".tab-item.login").show();
            $(".popup__register-btn").removeClass("active");
            $(this).addClass("active");
        }));
        $(".popup__register-btn").click((function() {
            $(".tab-item.register").show();
            $(".tab-item.login").hide();
            $(".popup__enter-btn").removeClass("active");
            $(this).addClass("active");
        }));
    }
    function show_menu_stores() {
        let headerSuperTopHeight = $(".header-supertop").outerHeight();
        let windowWidth = window.innerWidth;
        $(".header-top__menu-item_our-stores").click((function() {
            if (windowWidth <= 1080 && headerSuperTopHeight) {
                $(".menu-stores").css("top", "-" + headerSuperTopHeight + "px");
                $(".menu-stores:hidden").fadeIn(300);
                $(".body-filters-on").show();
                $("body").toggleClass("overflowed");
            } else {
                $(".menu-stores:hidden").slideDown(300);
                $(".menu-stores").css("top", "auto");
                $(".body-filters-on").hide();
            }
        }));
        if (windowWidth <= 1080 && headerSuperTopHeight) {
            $(".menu-stores").css("top", "-" + headerSuperTopHeight + "px");
            $(document).mouseup((function(e) {
                var div = $(".menu-stores");
                if (!div.is(e.target) && 0 === div.has(e.target).length) {
                    div.fadeOut(300);
                    $(".body-filters-on").fadeOut();
                }
            }));
        } else {
            $(".body-filters-on").hide();
            $(".menu-stores").css("top", "auto");
            $(document).mouseup((function(e) {
                var div = $(".menu-stores");
                if (!div.is(e.target) && 0 === div.has(e.target).length) div.slideUp(300);
            }));
        }
        $(".menu-stores__close").click((function() {
            $(".menu-stores").slideUp(300);
            $(".body-filters-on").hide();
        }));
    }
    function popupInitialize() {
        $(".btn-show-popup").each((function() {
            var idPopup = $(this).data("popup");
            $(this).click((function() {
                if ($(this).data("register")) {
                    $(".tab-item.register").show();
                    $(".tab-item.login").hide();
                    $(".popup__enter-btn").removeClass("active");
                    $(".popup__register-btn").addClass("active");
                    console.log("register");
                }
                if ($(this).data("enter")) {
                    $(".tab-item.register").hide();
                    $(".tab-item.login").show();
                    $(".popup__register-btn").removeClass("active");
                    $(".popup__enter-btn").addClass("active");
                    console.log("enter");
                }
                showPopup(idPopup);
            }));
        }));
        $(".popup").find(".close-popup").click((function() {
            var idPopup = $(this).closest(".popup").attr("id");
            hidePopup(idPopup);
        }));
        $(document).mouseup((function(e) {
            var container = $(".popup-inner");
            var idPopup = $(e.target).closest(".popup").attr("id");
            if (container.is(e.target) && 0 === container.has(e.target).length) hidePopup(idPopup);
        }));
    }
    function showPopup(id) {
        var animatedIn = $("#" + id).find(".popup-content").data("animatedin");
        $("body").addClass("overflowed");
        $("#" + id).addClass("opened");
        $("#" + id).fadeIn();
        $("#" + id).find(".popup-content").addClass(animatedIn);
    }
    function hidePopup(id) {
        var animatedIn = $("#" + id).find(".popup-content").data("animatedin");
        var animatedOut = $("#" + id).find(".popup-content").data("animatedout");
        $("#" + id).removeClass("opened");
        $("#" + id).find(".popup-content").removeClass(animatedIn).addClass(animatedOut);
        $("#" + id).fadeOut();
        setTimeout((function() {
            if (0 === $(".popup.opened").length) $("body").removeClass("overflowed");
            $("#" + id).find(".popup-content").removeClass(animatedOut);
        }), 400);
    }
    function katalogMenu() {
        $(".katalog-btn").click((function() {
            var heightHeader = $("header.header").height() + $(".header-supertop").outerHeight();
            $("body").toggleClass("overflowed");
            $(".katalog").toggleClass("active");
            $(".body-mobileMenu-on").fadeToggle().css("top", heightHeader);
            $(".katalog").css("top", $("header.header").height());
        }));
        $(".mobile-menu__item_katalog").click((function(e) {
            e.preventDefault();
            var superTopHeight = $(".header-supertop").outerHeight();
            $("body").addClass("overflowed");
            $(".mobile-menu").removeClass("active");
            $(".katalog").addClass("active");
            $(".katalog").css("top", "-" + superTopHeight + "px");
            $(".body-mobileMenu-on").fadeIn().css("top", 0);
        }));
        $(".katalog__close").click((function() {
            $("body").toggleClass("overflowed");
            $(".katalog").toggleClass("active");
            $(".body-mobileMenu-on").hide().css("top", 0);
        }));
        $(".katalog__item_firstlevel").click((function(e) {
            var sclvl = $(this).data("secondlvl");
            if (sclvl) e.preventDefault();
            $(".katalog__item_firstlevel").removeClass("active");
            $(this).addClass("active");
            $(".katalog__secondlevel").hide();
            $("#" + sclvl).show();
            $(".katalog__mobile-back").show();
            $(".katalog__mobile-back").click((function() {
                $(".katalog__secondlevel").hide();
                $(".katalog__mobile-back").hide();
            }));
        }));
    }
    function mainMenu() {
        $(".header-top__menu-btn").click((function() {
            var superTopHeight = $(".header-supertop").outerHeight();
            $("body").toggleClass("overflowed");
            $(".mobile-menu").toggleClass("active");
            $(".mobile-menu").css("top", "-" + superTopHeight + "px");
            $(".body-mobileMenu-on").fadeToggle().css("top", 0);
        }));
        $(".mobile-menu__close").click((function() {
            $("body").removeClass("overflowed");
            $(".mobile-menu").toggleClass("active");
            $(".body-mobileMenu-on").hide().css("top", 0);
        }));
    }
    (function($) {
        $.fn.HvrSlider = function() {
            return this.each((function() {
                var el = $(this);
                if (el.find("img").length > 1) {
                    var hvr = $("<div>", {
                        class: "hvr",
                        append: [ $("<div>", {
                            class: "hvr__images",
                            append: $("<div>", {
                                class: "hvr__sectors"
                            })
                        }), $("<div>", {
                            class: "hvr__dots"
                        }) ],
                        insertAfter: el,
                        prepend: el
                    });
                    var hvrImages = $(".hvr__images", hvr);
                    var hvrImage = $("img", hvr);
                    var hvrSectors = $(".hvr__sectors", hvr);
                    var hvrDots = $(".hvr__dots", hvr);
                    el.prependTo(hvrImages);
                    hvrImage.each((function() {
                        hvrSectors.prepend('<div class="hvr__sector"></div>');
                        hvrDots.append('<div class="hvr__dot"></div>');
                    }));
                    $(".hvr__dot:first", hvrDots).addClass("hvr__dot--active");
                    var setActiveEl = function(el) {
                        hvrImage.hide().eq(el.index()).show();
                        $(".hvr__dot", hvrDots).removeClass("hvr__dot--active").eq(el.index()).addClass("hvr__dot--active");
                    };
                    $(".hvr__sector", hvrSectors).hover((function() {
                        setActiveEl($(this));
                    }));
                    setActiveEl($(".hvr__sector:first"));
                    hvrSectors.on("touchmove", (function(e) {
                        var position = e.originalEvent.changedTouches[0];
                        var target = document.elementFromPoint(position.clientX, position.clientY);
                        if ($(target).is(".hvr__sector")) setActiveEl($(target));
                    }));
                }
            }));
        };
    })(jQuery);
    window["FLS"] = true;
    isWebp();
})();