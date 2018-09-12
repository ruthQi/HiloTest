! function () {
    function e(e, t, i) {
        var n, a, r = document.querySelector('meta[name="viewport"]'),
            o = document.documentElement.clientWidth;
        switch (e) {
        case "fixed":
            n = t, a = o / t;
            break;
        case "rem":
            var p = window.devicePixelRatio || 1;
            n = o * p, a = 1 / p, document.documentElement.style.fontSize = 100 * (o * p / t) + "px"
        }
        r.setAttribute("content", "width=" + n + ",initial-scale=" + a + ",maximum-scale=" + a + ",minimum-scale=" + a), i && window.addEventListener("DOMContentLoaded", function () {
            document.body.style.fontSize = 50 / a + "px"
        })
    }
    e("fixed", 750)
}();
var Zepto = function () {
    function e(e) {
        return null == e ? String(e) : q[Z.call(e)] || "object"
    }

    function t(t) {
        return "function" == e(t)
    }

    function i(e) {
        return null != e && e == e.window
    }

    function n(e) {
        return null != e && e.nodeType == e.DOCUMENT_NODE
    }

    function a(t) {
        return "object" == e(t)
    }

    function r(e) {
        return a(e) && !i(e) && Object.getPrototypeOf(e) == Object.prototype
    }

    function o(e) {
        return "number" == typeof e.length
    }

    function p(e) {
        return L.call(e, function (e) {
            return null != e
        })
    }

    function s(e) {
        return e.length > 0 ? E.fn.concat.apply([], e) : e
    }

    function l(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function c(e) {
        return e in R ? R[e] : R[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }

    function u(e, t) {
        return "number" != typeof t || I[l(e)] ? t : t + "px"
    }

    function h(e) {
        var t, i;
        return P[e] || (t = M.createElement(e), M.body.appendChild(t), i = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == i && (i = "block"), P[e] = i), P[e]
    }

    function d(e) {
        return "children" in e ? k.call(e.children) : E.map(e.childNodes, function (e) {
            if (1 == e.nodeType) return e
        })
    }

    function m(e, t) {
        var i, n = e ? e.length : 0;
        for (i = 0; i < n; i++) this[i] = e[i];
        this.length = n, this.selector = t || ""
    }

    function f(e, t, i) {
        for (T in t) i && (r(t[T]) || K(t[T])) ? (r(t[T]) && !r(e[T]) && (e[T] = {}), K(t[T]) && !K(e[T]) && (e[T] = []), f(e[T], t[T], i)) : t[T] !== b && (e[T] = t[T])
    }

    function _(e, t) {
        return null == t ? E(e) : E(e).filter(t)
    }

    function g(e, i, n, a) {
        return t(i) ? i.call(e, n, a) : i
    }

    function y(e, t, i) {
        null == i ? e.removeAttribute(t) : e.setAttribute(t, i)
    }

    function v(e, t) {
        var i = e.className || "",
            n = i && i.baseVal !== b;
        return t === b ? n ? i.baseVal : i : void(n ? i.baseVal = t : e.className = t)
    }

    function x(e) {
        try {
            return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? E.parseJSON(e) : e) : e
        } catch (t) {
            return e
        }
    }

    function w(e, t) {
        t(e);
        for (var i = 0, n = e.childNodes.length; i < n; i++) w(e.childNodes[i], t)
    }
    var b, T, E, S, C, A, B = [],
        D = B.concat,
        L = B.filter,
        k = B.slice,
        M = window.document,
        P = {},
        R = {},
        I = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        z = /^\s*<(\w+|!)[^>]*>/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        X = /^(?:body|html)$/i,
        Y = /([A-Z])/g,
        F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        j = ["after", "prepend", "before", "append"],
        H = M.createElement("table"),
        U = M.createElement("tr"),
        V = {
            tr: M.createElement("tbody"),
            tbody: H,
            thead: H,
            tfoot: H,
            td: U,
            th: U,
            "*": M.createElement("div")
        },
        G = /complete|loaded|interactive/,
        W = /^[\w-]*$/,
        q = {},
        Z = q.toString,
        $ = {},
        J = M.createElement("div"),
        Q = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        K = Array.isArray || function (e) {
            return e instanceof Array
        };
    return $.matches = function (e, t) {
        if (!t || !e || 1 !== e.nodeType) return !1;
        var i = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (i) return i.call(e, t);
        var n, a = e.parentNode,
            r = !a;
        return r && (a = J).appendChild(e), n = ~$.qsa(a, t).indexOf(e), r && J.removeChild(e), n
    }, C = function (e) {
        return e.replace(/-+(.)?/g, function (e, t) {
            return t ? t.toUpperCase() : ""
        })
    }, A = function (e) {
        return L.call(e, function (t, i) {
            return e.indexOf(t) == i
        })
    }, $.fragment = function (e, t, i) {
        var n, a, o;
        return N.test(e) && (n = E(M.createElement(RegExp.$1))), n || (e.replace && (e = e.replace(O, "<$1></$2>")), t === b && (t = z.test(e) && RegExp.$1), t in V || (t = "*"), o = V[t], o.innerHTML = "" + e, n = E.each(k.call(o.childNodes), function () {
            o.removeChild(this)
        })), r(i) && (a = E(n), E.each(i, function (e, t) {
            F.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
        })), n
    }, $.Z = function (e, t) {
        return new m(e, t)
    }, $.isZ = function (e) {
        return e instanceof $.Z
    }, $.init = function (e, i) {
        var n;
        if (!e) return $.Z();
        if ("string" == typeof e)
            if (e = e.trim(), "<" == e[0] && z.test(e)) n = $.fragment(e, RegExp.$1, i), e = null;
            else {
                if (i !== b) return E(i).find(e);
                n = $.qsa(M, e)
            } else {
            if (t(e)) return E(M).ready(e);
            if ($.isZ(e)) return e;
            if (K(e)) n = p(e);
            else if (a(e)) n = [e], e = null;
            else if (z.test(e)) n = $.fragment(e.trim(), RegExp.$1, i), e = null;
            else {
                if (i !== b) return E(i).find(e);
                n = $.qsa(M, e)
            }
        }
        return $.Z(n, e)
    }, E = function (e, t) {
        return $.init(e, t)
    }, E.extend = function (e) {
        var t, i = k.call(arguments, 1);
        return "boolean" == typeof e && (t = e, e = i.shift()), i.forEach(function (i) {
            f(e, i, t)
        }), e
    }, $.qsa = function (e, t) {
        var i, n = "#" == t[0],
            a = !n && "." == t[0],
            r = n || a ? t.slice(1) : t,
            o = W.test(r);
        return e.getElementById && o && n ? (i = e.getElementById(r)) ? [i] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : k.call(o && !n && e.getElementsByClassName ? a ? e.getElementsByClassName(r) : e.getElementsByTagName(t) : e.querySelectorAll(t))
    }, E.contains = M.documentElement.contains ? function (e, t) {
        return e !== t && e.contains(t)
    } : function (e, t) {
        for (; t && (t = t.parentNode);)
            if (t === e) return !0;
        return !1
    }, E.type = e, E.isFunction = t, E.isWindow = i, E.isArray = K, E.isPlainObject = r, E.isEmptyObject = function (e) {
        var t;
        for (t in e) return !1;
        return !0
    }, E.inArray = function (e, t, i) {
        return B.indexOf.call(t, e, i)
    }, E.camelCase = C, E.trim = function (e) {
        return null == e ? "" : String.prototype.trim.call(e)
    }, E.uuid = 0, E.support = {}, E.expr = {}, E.noop = function () {}, E.map = function (e, t) {
        var i, n, a, r = [];
        if (o(e))
            for (n = 0; n < e.length; n++) i = t(e[n], n), null != i && r.push(i);
        else
            for (a in e) i = t(e[a], a), null != i && r.push(i);
        return s(r)
    }, E.each = function (e, t) {
        var i, n;
        if (o(e)) {
            for (i = 0; i < e.length; i++)
                if (t.call(e[i], i, e[i]) === !1) return e
        } else
            for (n in e)
                if (t.call(e[n], n, e[n]) === !1) return e; return e
    }, E.grep = function (e, t) {
        return L.call(e, t)
    }, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        q["[object " + t + "]"] = t.toLowerCase()
    }), E.fn = {
        constructor: $.Z,
        length: 0,
        forEach: B.forEach,
        reduce: B.reduce,
        push: B.push,
        sort: B.sort,
        splice: B.splice,
        indexOf: B.indexOf,
        concat: function () {
            var e, t, i = [];
            for (e = 0; e < arguments.length; e++) t = arguments[e], i[e] = $.isZ(t) ? t.toArray() : t;
            return D.apply($.isZ(this) ? this.toArray() : this, i)
        }, map: function (e) {
            return E(E.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, slice: function () {
            return E(k.apply(this, arguments))
        }, ready: function (e) {
            return G.test(M.readyState) && M.body ? e(E) : M.addEventListener("DOMContentLoaded", function () {
                e(E)
            }, !1), this
        }, get: function (e) {
            return e === b ? k.call(this) : this[e >= 0 ? e : e + this.length]
        }, toArray: function () {
            return this.get()
        }, size: function () {
            return this.length
        }, remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        }, each: function (e) {
            return B.every.call(this, function (t, i) {
                return e.call(t, i, t) !== !1
            }), this
        }, filter: function (e) {
            return t(e) ? this.not(this.not(e)) : E(L.call(this, function (t) {
                return $.matches(t, e)
            }))
        }, add: function (e, t) {
            return E(A(this.concat(E(e, t))))
        }, is: function (e) {
            return this.length > 0 && $.matches(this[0], e)
        }, not: function (e) {
            var i = [];
            if (t(e) && e.call !== b) this.each(function (t) {
                e.call(this, t) || i.push(this)
            });
            else {
                var n = "string" == typeof e ? this.filter(e) : o(e) && t(e.item) ? k.call(e) : E(e);
                this.forEach(function (e) {
                    n.indexOf(e) < 0 && i.push(e)
                })
            }
            return E(i)
        }, has: function (e) {
            return this.filter(function () {
                return a(e) ? E.contains(this, e) : E(this).find(e).size()
            })
        }, eq: function (e) {
            return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
        }, first: function () {
            var e = this[0];
            return e && !a(e) ? e : E(e)
        }, last: function () {
            var e = this[this.length - 1];
            return e && !a(e) ? e : E(e)
        }, find: function (e) {
            var t, i = this;
            return t = e ? "object" == typeof e ? E(e).filter(function () {
                var e = this;
                return B.some.call(i, function (t) {
                    return E.contains(t, e)
                })
            }) : 1 == this.length ? E($.qsa(this[0], e)) : this.map(function () {
                return $.qsa(this, e)
            }) : E()
        }, closest: function (e, t) {
            var i = this[0],
                a = !1;
            for ("object" == typeof e && (a = E(e)); i && !(a ? a.indexOf(i) >= 0 : $.matches(i, e));) i = i !== t && !n(i) && i.parentNode;
            return E(i)
        }, parents: function (e) {
            for (var t = [], i = this; i.length > 0;) i = E.map(i, function (e) {
                if ((e = e.parentNode) && !n(e) && t.indexOf(e) < 0) return t.push(e), e
            });
            return _(t, e)
        }, parent: function (e) {
            return _(A(this.pluck("parentNode")), e)
        }, children: function (e) {
            return _(this.map(function () {
                return d(this)
            }), e)
        }, contents: function () {
            return this.map(function () {
                return this.contentDocument || k.call(this.childNodes)
            })
        }, siblings: function (e) {
            return _(this.map(function (e, t) {
                return L.call(d(t.parentNode), function (e) {
                    return e !== t
                })
            }), e)
        }, empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        }, pluck: function (e) {
            return E.map(this, function (t) {
                return t[e]
            })
        }, show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        }, replaceWith: function (e) {
            return this.before(e).remove()
        }, wrap: function (e) {
            var i = t(e);
            if (this[0] && !i) var n = E(e).get(0),
                a = n.parentNode || this.length > 1;
            return this.each(function (t) {
                E(this).wrapAll(i ? e.call(this, t) : a ? n.cloneNode(!0) : n)
            })
        }, wrapAll: function (e) {
            if (this[0]) {
                E(this[0]).before(e = E(e));
                for (var t;
                    (t = e.children()).length;) e = t.first();
                E(e).append(this)
            }
            return this
        }, wrapInner: function (e) {
            var i = t(e);
            return this.each(function (t) {
                var n = E(this),
                    a = n.contents(),
                    r = i ? e.call(this, t) : e;
                a.length ? a.wrapAll(r) : n.append(r)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                E(this).replaceWith(E(this).children())
            }), this
        }, clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        }, hide: function () {
            return this.css("display", "none")
        }, toggle: function (e) {
            return this.each(function () {
                var t = E(this);
                (e === b ? "none" == t.css("display") : e) ? t.show(): t.hide()
            })
        }, prev: function (e) {
            return E(this.pluck("previousElementSibling")).filter(e || "*")
        }, next: function (e) {
            return E(this.pluck("nextElementSibling")).filter(e || "*")
        }, html: function (e) {
            return 0 in arguments ? this.each(function (t) {
                var i = this.innerHTML;
                E(this).empty().append(g(this, e, t, i))
            }) : 0 in this ? this[0].innerHTML : null
        }, text: function (e) {
            return 0 in arguments ? this.each(function (t) {
                var i = g(this, e, t, this.textContent);
                this.textContent = null == i ? "" : "" + i
            }) : 0 in this ? this[0].textContent : null
        }, attr: function (e, t) {
            var i;
            return "string" != typeof e || 1 in arguments ? this.each(function (i) {
                if (1 === this.nodeType)
                    if (a(e))
                        for (T in e) y(this, T, e[T]);
                    else y(this, e, g(this, t, i, this.getAttribute(e)))
            }) : this.length && 1 === this[0].nodeType ? !(i = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : i : b
        }, removeAttr: function (e) {
            return this.each(function () {
                1 === this.nodeType && e.split(" ").forEach(function (e) {
                    y(this, e)
                }, this)
            })
        }, prop: function (e, t) {
            return e = Q[e] || e, 1 in arguments ? this.each(function (i) {
                this[e] = g(this, t, i, this[e])
            }) : this[0] && this[0][e]
        }, data: function (e, t) {
            var i = "data-" + e.replace(Y, "-$1").toLowerCase(),
                n = 1 in arguments ? this.attr(i, t) : this.attr(i);
            return null !== n ? x(n) : b
        }, val: function (e) {
            return 0 in arguments ? this.each(function (t) {
                this.value = g(this, e, t, this.value)
            }) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        }, offset: function (e) {
            if (e) return this.each(function (t) {
                var i = E(this),
                    n = g(this, e, t, i.offset()),
                    a = i.offsetParent().offset(),
                    r = {
                        top: n.top - a.top,
                        left: n.left - a.left
                    };
                "static" == i.css("position") && (r.position = "relative"), i.css(r)
            });
            if (!this.length) return null;
            if (!E.contains(M.documentElement, this[0])) return {
                top: 0,
                left: 0
            };
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
            }
        }, css: function (t, i) {
            if (arguments.length < 2) {
                var n, a = this[0];
                if (!a) return;
                if (n = getComputedStyle(a, ""), "string" == typeof t) return a.style[C(t)] || n.getPropertyValue(t);
                if (K(t)) {
                    var r = {};
                    return E.each(t, function (e, t) {
                        r[t] = a.style[C(t)] || n.getPropertyValue(t)
                    }), r
                }
            }
            var o = "";
            if ("string" == e(t)) i || 0 === i ? o = l(t) + ":" + u(t, i) : this.each(function () {
                this.style.removeProperty(l(t))
            });
            else
                for (T in t) t[T] || 0 === t[T] ? o += l(T) + ":" + u(T, t[T]) + ";" : this.each(function () {
                    this.style.removeProperty(l(T))
                });
            return this.each(function () {
                this.style.cssText += ";" + o
            })
        }, index: function (e) {
            return e ? this.indexOf(E(e)[0]) : this.parent().children().indexOf(this[0])
        }, hasClass: function (e) {
            return !!e && B.some.call(this, function (e) {
                return this.test(v(e))
            }, c(e))
        }, addClass: function (e) {
            return e ? this.each(function (t) {
                if ("className" in this) {
                    S = [];
                    var i = v(this),
                        n = g(this, e, t, i);
                    n.split(/\s+/g).forEach(function (e) {
                        E(this).hasClass(e) || S.push(e)
                    }, this), S.length && v(this, i + (i ? " " : "") + S.join(" "))
                }
            }) : this
        }, removeClass: function (e) {
            return this.each(function (t) {
                if ("className" in this) {
                    if (e === b) return v(this, "");
                    S = v(this), g(this, e, t, S).split(/\s+/g).forEach(function (e) {
                        S = S.replace(c(e), " ")
                    }), v(this, S.trim())
                }
            })
        }, toggleClass: function (e, t) {
            return e ? this.each(function (i) {
                var n = E(this),
                    a = g(this, e, i, v(this));
                a.split(/\s+/g).forEach(function (e) {
                    (t === b ? !n.hasClass(e) : t) ? n.addClass(e): n.removeClass(e)
                })
            }) : this
        }, scrollTop: function (e) {
            if (this.length) {
                var t = "scrollTop" in this[0];
                return e === b ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
                    this.scrollTop = e
                } : function () {
                    this.scrollTo(this.scrollX, e)
                })
            }
        }, scrollLeft: function (e) {
            if (this.length) {
                var t = "scrollLeft" in this[0];
                return e === b ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
                    this.scrollLeft = e
                } : function () {
                    this.scrollTo(e, this.scrollY)
                })
            }
        }, position: function () {
            if (this.length) {
                var e = this[0],
                    t = this.offsetParent(),
                    i = this.offset(),
                    n = X.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return i.top -= parseFloat(E(e).css("margin-top")) || 0, i.left -= parseFloat(E(e).css("margin-left")) || 0, n.top += parseFloat(E(t[0]).css("border-top-width")) || 0, n.left += parseFloat(E(t[0]).css("border-left-width")) || 0, {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || M.body; e && !X.test(e.nodeName) && "static" == E(e).css("position");) e = e.offsetParent;
                return e
            })
        }
    }, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function (e) {
        var t = e.replace(/./, function (e) {
            return e[0].toUpperCase()
        });
        E.fn[e] = function (a) {
            var r, o = this[0];
            return a === b ? i(o) ? o["inner" + t] : n(o) ? o.documentElement["scroll" + t] : (r = this.offset()) && r[e] : this.each(function (t) {
                o = E(this), o.css(e, g(this, a, t, o[e]()))
            })
        }
    }), j.forEach(function (t, i) {
        var n = i % 2;
        E.fn[t] = function () {
            var t, a, r = E.map(arguments, function (i) {
                    return t = e(i), "object" == t || "array" == t || null == i ? i : $.fragment(i)
                }),
                o = this.length > 1;
            return r.length < 1 ? this : this.each(function (e, t) {
                a = n ? t : t.parentNode, t = 0 == i ? t.nextSibling : 1 == i ? t.firstChild : 2 == i ? t : null;
                var p = E.contains(M.documentElement, a);
                r.forEach(function (e) {
                    if (o) e = e.cloneNode(!0);
                    else if (!a) return E(e).remove();
                    a.insertBefore(e, t), p && w(e, function (e) {
                        null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                    })
                })
            })
        }, E.fn[n ? t + "To" : "insert" + (i ? "Before" : "After")] = function (e) {
            return E(e)[t](this), this
        }
    }), $.Z.prototype = m.prototype = E.fn, $.uniq = A, $.deserializeValue = x, E.zepto = $, E
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function (e) {
        function t(t, i, n) {
            var a = e.Event(i);
            return e(t).trigger(a, n), !a.isDefaultPrevented()
        }

        function i(e, i, n, a) {
            if (e.global) return t(i || y, n, a)
        }

        function n(t) {
            t.global && 0 === e.active++ && i(t, null, "ajaxStart")
        }

        function a(t) {
            t.global && !--e.active && i(t, null, "ajaxStop")
        }

        function r(e, t) {
            var n = t.context;
            return t.beforeSend.call(n, e, t) !== !1 && i(t, n, "ajaxBeforeSend", [e, t]) !== !1 && void i(t, n, "ajaxSend", [e, t])
        }

        function o(e, t, n, a) {
            var r = n.context,
                o = "success";
            n.success.call(r, e, o, t), a && a.resolveWith(r, [e, o, t]), i(n, r, "ajaxSuccess", [t, n, e]), s(o, t, n)
        }

        function p(e, t, n, a, r) {
            var o = a.context;
            a.error.call(o, n, t, e), r && r.rejectWith(o, [n, t, e]), i(a, o, "ajaxError", [n, a, e || t]), s(t, n, a)
        }

        function s(e, t, n) {
            var r = n.context;
            n.complete.call(r, t, e), i(n, r, "ajaxComplete", [t, n]), a(n)
        }

        function l() {}

        function c(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == T ? "html" : e == b ? "json" : x.test(e) ? "script" : w.test(e) && "xml") || "text"
        }

        function u(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function h(t) {
            t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = u(t.url, t.data), t.data = void 0)
        }

        function d(t, i, n, a) {
            return e.isFunction(i) && (a = n, n = i, i = void 0), e.isFunction(n) || (a = n, n = void 0), {
                url: t,
                data: i,
                success: n,
                dataType: a
            }
        }

        function m(t, i, n, a) {
            var r, o = e.isArray(i),
                p = e.isPlainObject(i);
            e.each(i, function (i, s) {
                r = e.type(s), a && (i = n ? a : a + "[" + (p || "object" == r || "array" == r ? i : "") + "]"), !a && o ? t.add(s.name, s.value) : "array" == r || !n && "object" == r ? m(t, s, n, i) : t.add(i, s)
            })
        }
        var f, _, g = 0,
            y = window.document,
            v = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            x = /^(?:text|application)\/javascript/i,
            w = /^(?:text|application)\/xml/i,
            b = "application/json",
            T = "text/html",
            E = /^\s*$/,
            S = y.createElement("a");
        S.href = window.location.href, e.active = 0, e.ajaxJSONP = function (t, i) {
            if (!("type" in t)) return e.ajax(t);
            var n, a, s = t.jsonpCallback,
                l = (e.isFunction(s) ? s() : s) || "jsonp" + ++g,
                c = y.createElement("script"),
                u = window[l],
                h = function (t) {
                    e(c).triggerHandler("error", t || "abort")
                },
                d = {
                    abort: h
                };
            return i && i.promise(d), e(c).on("load error", function (r, s) {
                clearTimeout(a), e(c).off().remove(), "error" != r.type && n ? o(n[0], d, t, i) : p(null, s || "error", d, t, i), window[l] = u, n && e.isFunction(u) && u(n[0]), u = n = void 0
            }), r(d, t) === !1 ? (h("abort"), d) : (window[l] = function () {
                n = arguments
            }, c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l), y.head.appendChild(c), t.timeout > 0 && (a = setTimeout(function () {
                h("timeout")
            }, t.timeout)), d)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: l,
            success: l,
            error: l,
            complete: l,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            }, accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: b,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            }, crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, e.ajax = function (t) {
            var i, a, s = e.extend({}, t || {}),
                d = e.Deferred && e.Deferred();
            for (f in e.ajaxSettings) void 0 === s[f] && (s[f] = e.ajaxSettings[f]);
            n(s), s.crossDomain || (i = y.createElement("a"), i.href = s.url, i.href = i.href, s.crossDomain = S.protocol + "//" + S.host != i.protocol + "//" + i.host), s.url || (s.url = window.location.toString()), (a = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, a)), h(s);
            var m = s.dataType,
                g = /\?.+=\?/.test(s.url);
            if (g && (m = "jsonp"), s.cache !== !1 && (t && t.cache === !0 || "script" != m && "jsonp" != m) || (s.url = u(s.url, "_=" + Date.now())), "jsonp" == m) return g || (s.url = u(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(s, d);
            var v, x = s.accepts[m],
                w = {},
                b = function (e, t) {
                    w[e.toLowerCase()] = [e, t]
                },
                T = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol,
                C = s.xhr(),
                A = C.setRequestHeader;
            if (d && d.promise(C), s.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", x || "*/*"), (x = s.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(x)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && b("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                for (_ in s.headers) b(_, s.headers[_]);
            if (C.setRequestHeader = b, C.onreadystatechange = function () {
                if (4 == C.readyState) {
                    C.onreadystatechange = l, clearTimeout(v);
                    var t, i = !1;
                    if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == T) {
                        m = m || c(s.mimeType || C.getResponseHeader("content-type")), t = C.responseText;
                        try {
                            "script" == m ? (0, eval)(t) : "xml" == m ? t = C.responseXML : "json" == m && (t = E.test(t) ? null : e.parseJSON(t))
                        } catch (n) {
                            i = n
                        }
                        i ? p(i, "parsererror", C, s, d) : o(t, C, s, d)
                    } else p(C.statusText || null, C.status ? "error" : "abort", C, s, d)
                }
            }, r(C, s) === !1) return C.abort(), p(null, "abort", C, s, d), C;
            if (s.xhrFields)
                for (_ in s.xhrFields) C[_] = s.xhrFields[_];
            var B = !("async" in s) || s.async;
            C.open(s.type, s.url, B, s.username, s.password);
            for (_ in w) A.apply(C, w[_]);
            return s.timeout > 0 && (v = setTimeout(function () {
                C.onreadystatechange = l, C.abort(), p(null, "timeout", C, s, d)
            }, s.timeout)), C.send(s.data ? s.data : null), C
        }, e.get = function () {
            return e.ajax(d.apply(null, arguments))
        }, e.post = function () {
            var t = d.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = d.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, i, n) {
            if (!this.length) return this;
            var a, r = this,
                o = t.split(/\s/),
                p = d(t, i, n),
                s = p.success;
            return o.length > 1 && (p.url = o[0], a = o[1]), p.success = function (t) {
                r.html(a ? e("<div>").html(t.replace(v, "")).find(a) : t), s && s.apply(r, arguments)
            }, e.ajax(p), this
        };
        var C = encodeURIComponent;
        e.param = function (t, i) {
            var n = [];
            return n.add = function (t, i) {
                e.isFunction(i) && (i = i()), null == i && (i = ""), this.push(C(t) + "=" + C(i))
            }, m(n, t, i), n.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function (e) {
        function t(e, t) {
            var i = this.os = {},
                n = this.browser = {},
                a = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                o = !!e.match(/\(Macintosh\; Intel /),
                p = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !p && e.match(/(iPhone\sOS)\s([\d_]+)/),
                c = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                u = /Win\d{2}|Windows/.test(t),
                h = e.match(/Windows Phone ([\d.]+)/),
                d = c && e.match(/TouchPad/),
                m = e.match(/Kindle\/([\d.]+)/),
                f = e.match(/Silk\/([\d._]+)/),
                _ = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                g = e.match(/(BB10).*Version\/([\d.]+)/),
                y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                v = e.match(/PlayBook/),
                x = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                w = e.match(/Firefox\/([\d.]+)/),
                b = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                T = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                E = !x && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                S = E || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
            (n.webkit = !!a) && (n.version = a[1]), r && (i.android = !0, i.version = r[2]), l && !s && (i.ios = i.iphone = !0, i.version = l[2].replace(/_/g, ".")), p && (i.ios = i.ipad = !0, i.version = p[2].replace(/_/g, ".")), s && (i.ios = i.ipod = !0, i.version = s[3] ? s[3].replace(/_/g, ".") : null), h && (i.wp = !0, i.version = h[1]), c && (i.webos = !0, i.version = c[2]), d && (i.touchpad = !0), _ && (i.blackberry = !0, i.version = _[2]), g && (i.bb10 = !0, i.version = g[2]), y && (i.rimtabletos = !0, i.version = y[2]), v && (n.playbook = !0), m && (i.kindle = !0, i.version = m[1]), f && (n.silk = !0, n.version = f[1]), !f && i.android && e.match(/Kindle Fire/) && (n.silk = !0), x && (n.chrome = !0, n.version = x[1]), w && (n.firefox = !0, n.version = w[1]), b && (i.firefoxos = !0, i.version = b[1]), T && (n.ie = !0, n.version = T[1]), S && (o || i.ios || u) && (n.safari = !0, i.ios || (n.version = S[1])), E && (n.webview = !0), i.tablet = !!(p || v || r && !e.match(/Mobile/) || w && e.match(/Tablet/) || T && !e.match(/Phone/) && e.match(/Touch/)), i.phone = !(i.tablet || i.ipod || !(r || l || c || _ || g || x && e.match(/Android/) || x && e.match(/CriOS\/([\d.]+)/) || w && e.match(/Mobile/) || T && e.match(/Touch/)))
        }
        t.call(e, navigator.userAgent, navigator.platform), e.__detect = t
    }(Zepto),
    function (e) {
        function t(e) {
            return e._zid || (e._zid = h++)
        }

        function i(e, i, r, o) {
            if (i = n(i), i.ns) var p = a(i.ns);
            return (_[t(e)] || []).filter(function (e) {
                return e && (!i.e || e.e == i.e) && (!i.ns || p.test(e.ns)) && (!r || t(e.fn) === t(r)) && (!o || e.sel == o)
            })
        }

        function n(e) {
            var t = ("" + e).split(".");
            return {
                e: t[0],
                ns: t.slice(1).sort().join(" ")
            }
        }

        function a(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function r(e, t) {
            return e.del && !y && e.e in v || !!t
        }

        function o(e) {
            return x[e] || y && v[e] || e
        }

        function p(i, a, p, s, c, h, d) {
            var m = t(i),
                f = _[m] || (_[m] = []);
            a.split(/\s/).forEach(function (t) {
                if ("ready" == t) return e(document).ready(p);
                var a = n(t);
                a.fn = p, a.sel = c, a.e in x && (p = function (t) {
                    var i = t.relatedTarget;
                    if (!i || i !== this && !e.contains(this, i)) return a.fn.apply(this, arguments)
                }), a.del = h;
                var m = h || p;
                a.proxy = function (e) {
                    if (e = l(e), !e.isImmediatePropagationStopped()) {
                        e.data = s;
                        var t = m.apply(i, e._args == u ? [e] : [e].concat(e._args));
                        return t === !1 && (e.preventDefault(), e.stopPropagation()), t
                    }
                }, a.i = f.length, f.push(a), "addEventListener" in i && i.addEventListener(o(a.e), a.proxy, r(a, d))
            })
        }

        function s(e, n, a, p, s) {
            var l = t(e);
            (n || "").split(/\s/).forEach(function (t) {
                i(e, t, a, p).forEach(function (t) {
                    delete _[l][t.i], "removeEventListener" in e && e.removeEventListener(o(t.e), t.proxy, r(t, s))
                })
            })
        }

        function l(t, i) {
            return !i && t.isDefaultPrevented || (i || (i = t), e.each(E, function (e, n) {
                var a = i[e];
                t[e] = function () {
                    return this[n] = w, a && a.apply(i, arguments)
                }, t[n] = b
            }), (i.defaultPrevented !== u ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (t.isDefaultPrevented = w)), t
        }

        function c(e) {
            var t, i = {
                originalEvent: e
            };
            for (t in e) T.test(t) || e[t] === u || (i[t] = e[t]);
            return l(i, e)
        }
        var u, h = 1,
            d = Array.prototype.slice,
            m = e.isFunction,
            f = function (e) {
                return "string" == typeof e
            },
            _ = {},
            g = {},
            y = "onfocusin" in window,
            v = {
                focus: "focusin",
                blur: "focusout"
            },
            x = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", e.event = {
            add: p,
            remove: s
        }, e.proxy = function (i, n) {
            var a = 2 in arguments && d.call(arguments, 2);
            if (m(i)) {
                var r = function () {
                    return i.apply(n, a ? a.concat(d.call(arguments)) : arguments)
                };
                return r._zid = t(i), r
            }
            if (f(n)) return a ? (a.unshift(i[n], i), e.proxy.apply(null, a)) : e.proxy(i[n], i);
            throw new TypeError("expected function")
        }, e.fn.bind = function (e, t, i) {
            return this.on(e, t, i)
        }, e.fn.unbind = function (e, t) {
            return this.off(e, t)
        }, e.fn.one = function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        };
        var w = function () {
                return !0
            },
            b = function () {
                return !1
            },
            T = /^([A-Z]|returnValue$|layer[XY]$)/,
            E = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        e.fn.delegate = function (e, t, i) {
            return this.on(t, e, i)
        }, e.fn.undelegate = function (e, t, i) {
            return this.off(t, e, i)
        }, e.fn.live = function (t, i) {
            return e(document.body).delegate(this.selector, t, i), this
        }, e.fn.die = function (t, i) {
            return e(document.body).undelegate(this.selector, t, i), this
        }, e.fn.on = function (t, i, n, a, r) {
            var o, l, h = this;
            return t && !f(t) ? (e.each(t, function (e, t) {
                h.on(e, i, n, t, r)
            }), h) : (f(i) || m(a) || a === !1 || (a = n, n = i, i = u), a !== u && n !== !1 || (a = n, n = u), a === !1 && (a = b), h.each(function (u, h) {
                r && (o = function (e) {
                    return s(h, e.type, a), a.apply(this, arguments)
                }), i && (l = function (t) {
                    var n, r = e(t.target).closest(i, h).get(0);
                    if (r && r !== h) return n = e.extend(c(t), {
                        currentTarget: r,
                        liveFired: h
                    }), (o || a).apply(r, [n].concat(d.call(arguments, 1)))
                }), p(h, t, a, n, i, l || o)
            }))
        }, e.fn.off = function (t, i, n) {
            var a = this;
            return t && !f(t) ? (e.each(t, function (e, t) {
                a.off(e, i, t)
            }), a) : (f(i) || m(n) || n === !1 || (n = i, i = u), n === !1 && (n = b), a.each(function () {
                s(this, t, n, i)
            }))
        }, e.fn.trigger = function (t, i) {
            return t = f(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = i, this.each(function () {
                t.type in v && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, i)
            })
        }, e.fn.triggerHandler = function (t, n) {
            var a, r;
            return this.each(function (o, p) {
                a = c(f(t) ? e.Event(t) : t), a._args = n, a.target = p, e.each(i(p, t.type || t), function (e, t) {
                    if (r = t.proxy(a), a.isImmediatePropagationStopped()) return !1
                })
            }), r
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (e, t) {
            f(e) || (t = e, e = t.type);
            var i = document.createEvent(g[e] || "Events"),
                n = !0;
            if (t)
                for (var a in t) "bubbles" == a ? n = !!t[a] : i[a] = t[a];
            return i.initEvent(e, n, !0), l(i)
        }
    }(Zepto),
    function (e) {
        e.fn.serializeArray = function () {
            var t, i, n = [],
                a = function (e) {
                    return e.forEach ? e.forEach(a) : void n.push({
                        name: t,
                        value: e
                    })
                };
            return this[0] && e.each(this[0].elements, function (n, r) {
                i = r.type, t = r.name, t && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || r.checked) && a(e(r).val())
            }), n
        }, e.fn.serialize = function () {
            var e = [];
            return this.serializeArray().forEach(function (t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function (t) {
            if (0 in arguments) this.bind("submit", t);
            else if (this.length) {
                var i = e.Event("submit");
                this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function (e, t) {
        function i(e) {
            return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function n(e) {
            return a ? a + e : e.toLowerCase()
        }
        var a, r, o, p, s, l, c, u, h, d, m = "",
            f = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            },
            _ = document.createElement("div"),
            g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            y = {};
        e.each(f, function (e, i) {
            if (_.style[e + "TransitionProperty"] !== t) return m = "-" + e.toLowerCase() + "-", a = i, !1
        }), r = m + "transform", y[o = m + "transition-property"] = y[p = m + "transition-duration"] = y[l = m + "transition-delay"] = y[s = m + "transition-timing-function"] = y[c = m + "animation-name"] = y[u = m + "animation-duration"] = y[d = m + "animation-delay"] = y[h = m + "animation-timing-function"] = "", e.fx = {
            off: a === t && _.style.transitionProperty === t,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: m,
            transitionEnd: n("TransitionEnd"),
            animationEnd: n("AnimationEnd")
        }, e.fn.animate = function (i, n, a, r, o) {
            return e.isFunction(n) && (r = n, a = t, n = t), e.isFunction(a) && (r = a, a = t), e.isPlainObject(n) && (a = n.easing, r = n.complete, o = n.delay, n = n.duration), n && (n = ("number" == typeof n ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3), o && (o = parseFloat(o) / 1e3), this.anim(i, n, a, r, o)
        }, e.fn.anim = function (n, a, m, f, _) {
            var v, x, w, b = {},
                T = "",
                E = this,
                S = e.fx.transitionEnd,
                C = !1;
            if (a === t && (a = e.fx.speeds._default / 1e3), _ === t && (_ = 0), e.fx.off && (a = 0), "string" == typeof n) b[c] = n, b[u] = a + "s", b[d] = _ + "s", b[h] = m || "linear", S = e.fx.animationEnd;
            else {
                x = [];
                for (v in n) g.test(v) ? T += v + "(" + n[v] + ") " : (b[v] = n[v], x.push(i(v)));
                T && (b[r] = T, x.push(r)), a > 0 && "object" == typeof n && (b[o] = x.join(", "), b[p] = a + "s", b[l] = _ + "s", b[s] = m || "linear")
            }
            return w = function (t) {
                if ("undefined" != typeof t) {
                    if (t.target !== t.currentTarget) return;
                    e(t.target).unbind(S, w)
                } else e(this).unbind(S, w);
                C = !0, e(this).css(y), f && f.call(this)
            }, a > 0 && (this.bind(S, w), setTimeout(function () {
                C || w.call(E)
            }, 1e3 * (a + _) + 25)), this.size() && this.get(0).clientLeft, this.css(b), a <= 0 && setTimeout(function () {
                E.each(function () {
                    w.call(this)
                })
            }, 0), this
        }, _ = null
    }(Zepto),
    function (e, t) {
        function i(i, n, a, r, o) {
            "function" != typeof n || o || (o = n, n = t);
            var p = {
                opacity: a
            };
            return r && (p.scale = r, i.css(e.fx.cssPrefix + "transform-origin", "0 0")), i.animate(p, n, null, o)
        }

        function n(t, n, a, r) {
            return i(t, n, 0, a, function () {
                o.call(e(this)), r && r.call(this)
            })
        }
        var a = window.document,
            r = (a.documentElement, e.fn.show),
            o = e.fn.hide,
            p = e.fn.toggle;
        e.fn.show = function (e, n) {
            return r.call(this), e === t ? e = 0 : this.css("opacity", 0), i(this, e, 1, "1,1", n)
        }, e.fn.hide = function (e, i) {
            return e === t ? o.call(this) : n(this, e, "0,0", i)
        }, e.fn.toggle = function (i, n) {
            return i === t || "boolean" == typeof i ? p.call(this, i) : this.each(function () {
                var t = e(this);
                t["none" == t.css("display") ? "show" : "hide"](i, n)
            })
        }, e.fn.fadeTo = function (e, t, n) {
            return i(this, e, t, null, n)
        }, e.fn.fadeIn = function (e, t) {
            var i = this.css("opacity");
            return i > 0 ? this.css("opacity", 0) : i = 1, r.call(this).fadeTo(e, i, t)
        }, e.fn.fadeOut = function (e, t) {
            return n(this, e, null, t)
        }, e.fn.fadeToggle = function (t, i) {
            return this.each(function () {
                var n = e(this);
                n[0 == n.css("opacity") || "none" == n.css("display") ? "fadeIn" : "fadeOut"](t, i)
            })
        }
    }(Zepto),
    function (e) {
        function t(e) {
            return "tagName" in e ? e : e.parentNode
        }
        if (e.os.ios) {
            var i, n = {};
            e(document).bind("gesturestart", function (e) {
                var a = Date.now();
                a - (n.last || a);
                n.target = t(e.target), i && clearTimeout(i), n.e1 = e.scale, n.last = a
            }).bind("gesturechange", function (e) {
                n.e2 = e.scale
            }).bind("gestureend", function (t) {
                n.e2 > 0 ? (0 != Math.abs(n.e1 - n.e2) && e(n.target).trigger("pinch") && e(n.target).trigger("pinch" + (n.e1 - n.e2 > 0 ? "In" : "Out")), n.e1 = n.e2 = n.last = 0) : "last" in n && (n = {})
            }), ["pinch", "pinchIn", "pinchOut"].forEach(function (t) {
                e.fn[t] = function (e) {
                    return this.bind(t, e)
                }
            })
        }
    }(Zepto),
    function (e) {
        function t(t) {
            return t = e(t), !(!t.width() && !t.height()) && "none" !== t.css("display")
        }

        function i(e, t) {
            e = e.replace(/=#\]/g, '="#"]');
            var i, n, a = p.exec(e);
            if (a && a[2] in o && (i = o[a[2]], n = a[3], e = a[1], n)) {
                var r = Number(n);
                n = isNaN(r) ? n.replace(/^["']|["']$/g, "") : r
            }
            return t(e, i, n)
        }
        var n = e.zepto,
            a = n.qsa,
            r = n.matches,
            o = e.expr[":"] = {
                visible: function () {
                    if (t(this)) return this
                }, hidden: function () {
                    if (!t(this)) return this
                }, selected: function () {
                    if (this.selected) return this
                }, checked: function () {
                    if (this.checked) return this
                }, parent: function () {
                    return this.parentNode
                }, first: function (e) {
                    if (0 === e) return this
                }, last: function (e, t) {
                    if (e === t.length - 1) return this
                }, eq: function (e, t, i) {
                    if (e === i) return this
                }, contains: function (t, i, n) {
                    if (e(this).text().indexOf(n) > -1) return this;
                }, has: function (e, t, i) {
                    if (n.qsa(this, i).length) return this
                }
            },
            p = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
            s = /^\s*>/,
            l = "Zepto" + +new Date;
        n.qsa = function (t, r) {
            return i(r, function (i, o, p) {
                try {
                    var c;
                    !i && o ? i = "*" : s.test(i) && (c = e(t).addClass(l), i = "." + l + " " + i);
                    var u = a(t, i)
                } catch (h) {
                    throw console.error("error performing selector: %o", r), h
                } finally {
                    c && c.removeClass(l)
                }
                return o ? n.uniq(e.map(u, function (e, t) {
                    return o.call(e, t, u, p)
                })) : u
            })
        }, n.matches = function (e, t) {
            return i(t, function (t, i, n) {
                return (!t || r(e, t)) && (!i || i.call(e, null, n) === e)
            })
        }
    }(Zepto),
    function (e) {
        e.fn.end = function () {
            return this.prevObject || e()
        }, e.fn.andSelf = function () {
            return this.add(this.prevObject || e())
        }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function (t) {
            var i = e.fn[t];
            e.fn[t] = function () {
                var e = i.apply(this, arguments);
                return e.prevObject = this, e
            }
        })
    }(Zepto),
    function (e) {
        function t(e, t, i, n) {
            return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
        }

        function i() {
            c = null, h.last && (h.el.trigger("longTap"), h = {})
        }

        function n() {
            c && clearTimeout(c), c = null
        }

        function a() {
            p && clearTimeout(p), s && clearTimeout(s), l && clearTimeout(l), c && clearTimeout(c), p = s = l = c = null, h = {}
        }

        function r(e) {
            return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
        }

        function o(e, t) {
            return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
        }
        var p, s, l, c, u, h = {},
            d = 750;
        e(document).ready(function () {
            var m, f, _, g, y = 0,
                v = 0;
            "MSGesture" in window && (u = new MSGesture, u.target = document.body), e(document).bind("MSGestureEnd", function (e) {
                var t = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                t && (h.el && h.el.trigger("swipe"), h.el && h.el.trigger("swipe" + t))
            }).on("touchstart MSPointerDown pointerdown", function (t) {
                (g = o(t, "down")) && !r(t) || (_ = g ? t : t.touches[0], t.touches && 1 === t.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), m = Date.now(), f = m - (h.last || m), h.el = e("tagName" in _.target ? _.target : _.target.parentNode), p && clearTimeout(p), h.x1 = _.pageX, h.y1 = _.pageY, f > 0 && f <= 250 && (h.isDoubleTap = !0), h.last = m, c = setTimeout(i, d), u && g && u.addPointer(t.pointerId))
            }).on("touchmove MSPointerMove pointermove", function (e) {
                (g = o(e, "move")) && !r(e) || (_ = g ? e : e.touches[0], n(), h.x2 = _.pageX, h.y2 = _.pageY, y += Math.abs(h.x1 - h.x2), v += Math.abs(h.y1 - h.y2))
            }).on("touchend MSPointerUp pointerup", function (i) {
                (g = o(i, "up")) && !r(i) || (n(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? l = setTimeout(function () {
                    h.el && h.el.trigger("swipe"), h.el && h.el.trigger("swipe" + t(h.x1, h.x2, h.y1, h.y2)), h = {}
                }, 0) : "last" in h && (y < 30 && v < 30 ? s = setTimeout(function () {
                    var t = e.Event("tap");
                    t.cancelTouch = a, h.el && h.el.length && h.el[0].trigger ? h.el[0].trigger(t) : "", h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : p = setTimeout(function () {
                        p = null, h.el && h.el.trigger("singleTap"), h = {}
                    }, 250)
                }, 0) : h = {}), y = v = 0)
            }).on("touchcancel MSPointerCancel pointercancel", a), e(window).on("scroll", a)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (t) {
            e.fn[t] = function (e) {
                return this.on(t, e)
            }
        })
    }(Zepto);
var QRCode;
! function () {
    function e(e) {
        this.mode = l.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
        for (var t = 0, i = this.data.length; i > t; t++) {
            var n = [],
                a = this.data.charCodeAt(t);
            a > 65536 ? (n[0] = 240 | (1835008 & a) >>> 18, n[1] = 128 | (258048 & a) >>> 12, n[2] = 128 | (4032 & a) >>> 6, n[3] = 128 | 63 & a) : a > 2048 ? (n[0] = 224 | (61440 & a) >>> 12, n[1] = 128 | (4032 & a) >>> 6, n[2] = 128 | 63 & a) : a > 128 ? (n[0] = 192 | (1984 & a) >>> 6, n[1] = 128 | 63 & a) : n[0] = a, this.parsedData.push(n)
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function t(e, t) {
        this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function i(e, t) {
        if (void 0 == e.length) throw new Error(e.length + "/" + t);
        for (var i = 0; i < e.length && 0 == e[i];) i++;
        this.num = new Array(e.length - i + t);
        for (var n = 0; n < e.length - i; n++) this.num[n] = e[n + i]
    }

    function n(e, t) {
        this.totalCount = e, this.dataCount = t
    }

    function a() {
        this.buffer = [], this.length = 0
    }

    function r() {
        return "undefined" != typeof CanvasRenderingContext2D
    }

    function o() {
        var e = !1,
            t = navigator.userAgent;
        if (/android/i.test(t)) {
            e = !0;
            var i = t.toString().match(/android ([0-9]\.[0-9])/i);
            i && i[1] && (e = parseFloat(i[1]))
        }
        return e
    }

    function p(e, t) {
        for (var i = 1, n = s(e), a = 0, r = f.length; r >= a; a++) {
            var o = 0;
            switch (t) {
            case c.L:
                o = f[a][0];
                break;
            case c.M:
                o = f[a][1];
                break;
            case c.Q:
                o = f[a][2];
                break;
            case c.H:
                o = f[a][3]
            }
            if (o >= n) break;
            i++
        }
        if (i > f.length) throw new Error("Too long data");
        return i
    }

    function s(e) {
        var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return t.length + (t.length != e ? 3 : 0)
    }
    e.prototype = {
        getLength: function () {
            return this.parsedData.length
        }, write: function (e) {
            for (var t = 0, i = this.parsedData.length; i > t; t++) e.put(this.parsedData[t], 8)
        }
    }, t.prototype = {
        addData: function (t) {
            var i = new e(t);
            this.dataList.push(i), this.dataCache = null
        }, isDark: function (e, t) {
            if (0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
            return this.modules[e][t]
        }, getModuleCount: function () {
            return this.moduleCount
        }, make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
        }, makeImpl: function (e, i) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) {
                this.modules[n] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++) this.modules[n][a] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, i), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, i)
        }, setupPositionProbePattern: function (e, t) {
            for (var i = -1; 7 >= i; i++)
                if (!(-1 >= e + i || this.moduleCount <= e + i))
                    for (var n = -1; 7 >= n; n++) - 1 >= t + n || this.moduleCount <= t + n || (this.modules[e + i][t + n] = i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n)
        }, getBestMaskPattern: function () {
            for (var e = 0, t = 0, i = 0; 8 > i; i++) {
                this.makeImpl(!0, i);
                var n = h.getLostPoint(this);
                (0 == i || e > n) && (e = n, t = i)
            }
            return t
        }, createMovieClip: function (e, t, i) {
            var n = e.createEmptyMovieClip(t, i),
                a = 1;
            this.make();
            for (var r = 0; r < this.modules.length; r++)
                for (var o = r * a, p = 0; p < this.modules[r].length; p++) {
                    var s = p * a,
                        l = this.modules[r][p];
                    l && (n.beginFill(0, 100), n.moveTo(s, o), n.lineTo(s + a, o), n.lineTo(s + a, o + a), n.lineTo(s, o + a), n.endFill())
                }
            return n
        }, setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
        }, setupPositionAdjustPattern: function () {
            for (var e = h.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                for (var i = 0; i < e.length; i++) {
                    var n = e[t],
                        a = e[i];
                    if (null == this.modules[n][a])
                        for (var r = -2; 2 >= r; r++)
                            for (var o = -2; 2 >= o; o++) this.modules[n + r][a + o] = -2 == r || 2 == r || -2 == o || 2 == o || 0 == r && 0 == o
                }
        }, setupTypeNumber: function (e) {
            for (var t = h.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
                var n = !e && 1 == (t >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
            }
            for (var i = 0; 18 > i; i++) {
                var n = !e && 1 == (t >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
            }
        }, setupTypeInfo: function (e, t) {
            for (var i = this.errorCorrectLevel << 3 | t, n = h.getBCHTypeInfo(i), a = 0; 15 > a; a++) {
                var r = !e && 1 == (n >> a & 1);
                6 > a ? this.modules[a][8] = r : 8 > a ? this.modules[a + 1][8] = r : this.modules[this.moduleCount - 15 + a][8] = r
            }
            for (var a = 0; 15 > a; a++) {
                var r = !e && 1 == (n >> a & 1);
                8 > a ? this.modules[8][this.moduleCount - a - 1] = r : 9 > a ? this.modules[8][15 - a - 1 + 1] = r : this.modules[8][15 - a - 1] = r
            }
            this.modules[this.moduleCount - 8][8] = !e
        }, mapData: function (e, t) {
            for (var i = -1, n = this.moduleCount - 1, a = 7, r = 0, o = this.moduleCount - 1; o > 0; o -= 2)
                for (6 == o && o--;;) {
                    for (var p = 0; 2 > p; p++)
                        if (null == this.modules[n][o - p]) {
                            var s = !1;
                            r < e.length && (s = 1 == (e[r] >>> a & 1));
                            var l = h.getMask(t, n, o - p);
                            l && (s = !s), this.modules[n][o - p] = s, a--, -1 == a && (r++, a = 7)
                        }
                    if (n += i, 0 > n || this.moduleCount <= n) {
                        n -= i, i = -i;
                        break
                    }
                }
        }
    }, t.PAD0 = 236, t.PAD1 = 17, t.createData = function (e, i, r) {
        for (var o = n.getRSBlocks(e, i), p = new a, s = 0; s < r.length; s++) {
            var l = r[s];
            p.put(l.mode, 4), p.put(l.getLength(), h.getLengthInBits(l.mode, e)), l.write(p)
        }
        for (var c = 0, s = 0; s < o.length; s++) c += o[s].dataCount;
        if (p.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + p.getLengthInBits() + ">" + 8 * c + ")");
        for (p.getLengthInBits() + 4 <= 8 * c && p.put(0, 4); p.getLengthInBits() % 8 != 0;) p.putBit(!1);
        for (; !(p.getLengthInBits() >= 8 * c) && (p.put(t.PAD0, 8), !(p.getLengthInBits() >= 8 * c));) p.put(t.PAD1, 8);
        return t.createBytes(p, o)
    }, t.createBytes = function (e, t) {
        for (var n = 0, a = 0, r = 0, o = new Array(t.length), p = new Array(t.length), s = 0; s < t.length; s++) {
            var l = t[s].dataCount,
                c = t[s].totalCount - l;
            a = Math.max(a, l), r = Math.max(r, c), o[s] = new Array(l);
            for (var u = 0; u < o[s].length; u++) o[s][u] = 255 & e.buffer[u + n];
            n += l;
            var d = h.getErrorCorrectPolynomial(c),
                m = new i(o[s], d.getLength() - 1),
                f = m.mod(d);
            p[s] = new Array(d.getLength() - 1);
            for (var u = 0; u < p[s].length; u++) {
                var _ = u + f.getLength() - p[s].length;
                p[s][u] = _ >= 0 ? f.get(_) : 0
            }
        }
        for (var g = 0, u = 0; u < t.length; u++) g += t[u].totalCount;
        for (var y = new Array(g), v = 0, u = 0; a > u; u++)
            for (var s = 0; s < t.length; s++) u < o[s].length && (y[v++] = o[s][u]);
        for (var u = 0; r > u; u++)
            for (var s = 0; s < t.length; s++) u < p[s].length && (y[v++] = p[s][u]);
        return y
    };
    for (var l = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, c = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, u = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, h = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
            for (var t = e << 10; h.getBCHDigit(t) - h.getBCHDigit(h.G15) >= 0;) t ^= h.G15 << h.getBCHDigit(t) - h.getBCHDigit(h.G15);
            return (e << 10 | t) ^ h.G15_MASK
        }, getBCHTypeNumber: function (e) {
            for (var t = e << 12; h.getBCHDigit(t) - h.getBCHDigit(h.G18) >= 0;) t ^= h.G18 << h.getBCHDigit(t) - h.getBCHDigit(h.G18);
            return e << 12 | t
        }, getBCHDigit: function (e) {
            for (var t = 0; 0 != e;) t++, e >>>= 1;
            return t
        }, getPatternPosition: function (e) {
            return h.PATTERN_POSITION_TABLE[e - 1]
        }, getMask: function (e, t, i) {
            switch (e) {
            case u.PATTERN000:
                return (t + i) % 2 == 0;
            case u.PATTERN001:
                return t % 2 == 0;
            case u.PATTERN010:
                return i % 3 == 0;
            case u.PATTERN011:
                return (t + i) % 3 == 0;
            case u.PATTERN100:
                return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
            case u.PATTERN101:
                return t * i % 2 + t * i % 3 == 0;
            case u.PATTERN110:
                return (t * i % 2 + t * i % 3) % 2 == 0;
            case u.PATTERN111:
                return (t * i % 3 + (t + i) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
            }
        }, getErrorCorrectPolynomial: function (e) {
            for (var t = new i([1], 0), n = 0; e > n; n++) t = t.multiply(new i([1, d.gexp(n)], 0));
            return t
        }, getLengthInBits: function (e, t) {
            if (t >= 1 && 10 > t) switch (e) {
            case l.MODE_NUMBER:
                return 10;
            case l.MODE_ALPHA_NUM:
                return 9;
            case l.MODE_8BIT_BYTE:
                return 8;
            case l.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + e)
            } else if (27 > t) switch (e) {
            case l.MODE_NUMBER:
                return 12;
            case l.MODE_ALPHA_NUM:
                return 11;
            case l.MODE_8BIT_BYTE:
                return 16;
            case l.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + e)
            } else {
                if (!(41 > t)) throw new Error("type:" + t);
                switch (e) {
                case l.MODE_NUMBER:
                    return 14;
                case l.MODE_ALPHA_NUM:
                    return 13;
                case l.MODE_8BIT_BYTE:
                    return 16;
                case l.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + e)
                }
            }
        }, getLostPoint: function (e) {
            for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n++)
                for (var a = 0; t > a; a++) {
                    for (var r = 0, o = e.isDark(n, a), p = -1; 1 >= p; p++)
                        if (!(0 > n + p || n + p >= t))
                            for (var s = -1; 1 >= s; s++) 0 > a + s || a + s >= t || (0 != p || 0 != s) && o == e.isDark(n + p, a + s) && r++;
                    r > 5 && (i += 3 + r - 5)
                }
            for (var n = 0; t - 1 > n; n++)
                for (var a = 0; t - 1 > a; a++) {
                    var l = 0;
                    e.isDark(n, a) && l++, e.isDark(n + 1, a) && l++, e.isDark(n, a + 1) && l++, e.isDark(n + 1, a + 1) && l++, (0 == l || 4 == l) && (i += 3)
                }
            for (var n = 0; t > n; n++)
                for (var a = 0; t - 6 > a; a++) e.isDark(n, a) && !e.isDark(n, a + 1) && e.isDark(n, a + 2) && e.isDark(n, a + 3) && e.isDark(n, a + 4) && !e.isDark(n, a + 5) && e.isDark(n, a + 6) && (i += 40);
            for (var a = 0; t > a; a++)
                for (var n = 0; t - 6 > n; n++) e.isDark(n, a) && !e.isDark(n + 1, a) && e.isDark(n + 2, a) && e.isDark(n + 3, a) && e.isDark(n + 4, a) && !e.isDark(n + 5, a) && e.isDark(n + 6, a) && (i += 40);
            for (var c = 0, a = 0; t > a; a++)
                for (var n = 0; t > n; n++) e.isDark(n, a) && c++;
            var u = Math.abs(100 * c / t / t - 50) / 5;
            return i += 10 * u
        }
    }, d = {
        glog: function (e) {
            if (1 > e) throw new Error("glog(" + e + ")");
            return d.LOG_TABLE[e]
        }, gexp: function (e) {
            for (; 0 > e;) e += 255;
            for (; e >= 256;) e -= 255;
            return d.EXP_TABLE[e]
        }, EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, m = 0; 8 > m; m++) d.EXP_TABLE[m] = 1 << m;
    for (var m = 8; 256 > m; m++) d.EXP_TABLE[m] = d.EXP_TABLE[m - 4] ^ d.EXP_TABLE[m - 5] ^ d.EXP_TABLE[m - 6] ^ d.EXP_TABLE[m - 8];
    for (var m = 0; 255 > m; m++) d.LOG_TABLE[d.EXP_TABLE[m]] = m;
    i.prototype = {
        get: function (e) {
            return this.num[e]
        }, getLength: function () {
            return this.num.length
        }, multiply: function (e) {
            for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                for (var a = 0; a < e.getLength(); a++) t[n + a] ^= d.gexp(d.glog(this.get(n)) + d.glog(e.get(a)));
            return new i(t, 0)
        }, mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this;
            for (var t = d.glog(this.get(0)) - d.glog(e.get(0)), n = new Array(this.getLength()), a = 0; a < this.getLength(); a++) n[a] = this.get(a);
            for (var a = 0; a < e.getLength(); a++) n[a] ^= d.gexp(d.glog(e.get(a)) + t);
            return new i(n, 0).mod(e)
        }
    }, n.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], n.getRSBlocks = function (e, t) {
        var i = n.getRsBlockTable(e, t);
        if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
        for (var a = i.length / 3, r = [], o = 0; a > o; o++)
            for (var p = i[3 * o + 0], s = i[3 * o + 1], l = i[3 * o + 2], c = 0; p > c; c++) r.push(new n(s, l));
        return r
    }, n.getRsBlockTable = function (e, t) {
        switch (t) {
        case c.L:
            return n.RS_BLOCK_TABLE[4 * (e - 1) + 0];
        case c.M:
            return n.RS_BLOCK_TABLE[4 * (e - 1) + 1];
        case c.Q:
            return n.RS_BLOCK_TABLE[4 * (e - 1) + 2];
        case c.H:
            return n.RS_BLOCK_TABLE[4 * (e - 1) + 3];
        default:
            return
        }
    }, a.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        }, put: function (e, t) {
            for (var i = 0; t > i; i++) this.putBit(1 == (e >>> t - i - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    };
    var f = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        _ = function () {
            var e = function (e, t) {
                this._el = e, this._htOption = t
            };
            return e.prototype.draw = function (e) {
                function t(e, t) {
                    var i = document.createElementNS("http://www.w3.org/2000/svg", e);
                    for (var n in t) t.hasOwnProperty(n) && i.setAttribute(n, t[n]);
                    return i
                }
                var i = this._htOption,
                    n = this._el,
                    a = e.getModuleCount();
                Math.floor(i.width / a), Math.floor(i.height / a), this.clear();
                var r = t("svg", {
                    viewBox: "0 0 " + String(a) + " " + String(a),
                    width: "100%",
                    height: "100%",
                    fill: i.colorLight
                });
                r.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.appendChild(r), r.appendChild(t("rect", {
                    fill: i.colorLight,
                    width: "100%",
                    height: "100%"
                })), r.appendChild(t("rect", {
                    fill: i.colorDark,
                    width: "1",
                    height: "1",
                    id: "template"
                }));
                for (var o = 0; a > o; o++)
                    for (var p = 0; a > p; p++)
                        if (e.isDark(o, p)) {
                            var s = t("use", {
                                x: String(o),
                                y: String(p)
                            });
                            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), r.appendChild(s)
                        }
            }, e.prototype.clear = function () {
                for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, e
        }(),
        g = "svg" === document.documentElement.tagName.toLowerCase(),
        y = g ? _ : r() ? function () {
            function e() {
                this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
            }

            function t(e, t) {
                var i = this;
                if (i._fFail = t, i._fSuccess = e, null === i._bSupportDataURI) {
                    var n = document.createElement("img"),
                        a = function () {
                            i._bSupportDataURI = !1, i._fFail && i._fFail.call(i)
                        },
                        r = function () {
                            i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i)
                        };
                    return n.onabort = a, n.onerror = a, n.onload = r, void(n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                }
                i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) : i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i)
            }
            if (this._android && this._android <= 2.1) {
                var i = 1 / window.devicePixelRatio,
                    n = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function (e, t, a, r, o, p, s, l) {
                    if ("nodeName" in e && /img/i.test(e.nodeName))
                        for (var c = arguments.length - 1; c >= 1; c--) arguments[c] = arguments[c] * i;
                    else "undefined" == typeof l && (arguments[1] *= i, arguments[2] *= i, arguments[3] *= i, arguments[4] *= i);
                    n.apply(this, arguments)
                }
            }
            var a = function (e, t) {
                this._bIsPainted = !1, this._android = o(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
            };
            return a.prototype.draw = function (e) {
                var t = this._elImage,
                    i = this._oContext,
                    n = this._htOption,
                    a = e.getModuleCount(),
                    r = n.width / a,
                    o = n.height / a,
                    p = Math.round(r),
                    s = Math.round(o);
                t.style.display = "none", this.clear();
                for (var l = 0; a > l; l++)
                    for (var c = 0; a > c; c++) {
                        var u = e.isDark(l, c),
                            h = c * r,
                            d = l * o;
                        i.strokeStyle = u ? n.colorDark : n.colorLight, i.lineWidth = 1, i.fillStyle = u ? n.colorDark : n.colorLight, i.fillRect(h, d, r, o), i.strokeRect(Math.floor(h) + .5, Math.floor(d) + .5, p, s), i.strokeRect(Math.ceil(h) - .5, Math.ceil(d) - .5, p, s)
                    }
                this._bIsPainted = !0
            }, a.prototype.makeImage = function () {
                this._bIsPainted && t.call(this, e)
            }, a.prototype.isPainted = function () {
                return this._bIsPainted
            }, a.prototype.clear = function () {
                this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
            }, a.prototype.round = function (e) {
                return e ? Math.floor(1e3 * e) / 1e3 : e
            }, a
        }() : function () {
            var e = function (e, t) {
                this._el = e, this._htOption = t
            };
            return e.prototype.draw = function (e) {
                for (var t = this._htOption, i = this._el, n = e.getModuleCount(), a = Math.floor(t.width / n), r = Math.floor(t.height / n), o = ['<table style="border:0;border-collapse:collapse;">'], p = 0; n > p; p++) {
                    o.push("<tr>");
                    for (var s = 0; n > s; s++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + a + "px;height:" + r + "px;background-color:" + (e.isDark(p, s) ? t.colorDark : t.colorLight) + ';"></td>');
                    o.push("</tr>")
                }
                o.push("</table>"), i.innerHTML = o.join("");
                var l = i.childNodes[0],
                    c = (t.width - l.offsetWidth) / 2,
                    u = (t.height - l.offsetHeight) / 2;
                c > 0 && u > 0 && (l.style.margin = u + "px " + c + "px")
            }, e.prototype.clear = function () {
                this._el.innerHTML = ""
            }, e
        }();
    QRCode = function (e, t) {
        if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: c.H
        }, "string" == typeof t && (t = {
            text: t
        }), t)
            for (var i in t) this._htOption[i] = t[i];
        "string" == typeof e && (e = document.getElementById(e)), this._htOption.useSVG && (y = _), this._android = o(), this._el = e, this._oQRCode = null, this._oDrawing = new y(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function (e) {
        this._oQRCode = new t(p(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage()
    }, QRCode.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
    }, QRCode.prototype.clear = function () {
        this._oDrawing.clear()
    }, QRCode.CorrectLevel = c
}(),
function () {
    var e, t, i, n, a, r, o, p, s, l, c, u, h, d, m, f, _, g, y, v, x, w, b, T, E, S, C, A, B, D, L, k, M, P, R, I, z, N, O, X, Y, F, j, H, U, V, G, W, q, Z = [].slice,
        $ = {}.hasOwnProperty,
        J = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) $.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        Q = [].indexOf || function (e) {
            for (var t = 0, i = this.length; t < i; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    for (x = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "#common-loading-center",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, B = function () {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }, L = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, v = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == L && (L = function (e) {
        return setTimeout(e, 50)
    }, v = function (e) {
        return clearTimeout(e)
    }), M = function (e) {
        var t, i;
        return t = B(), (i = function () {
            var n;
            return n = B() - t, n >= 33 ? (t = B(), e(n, function () {
                return L(i)
            })) : setTimeout(i, 33 - n)
        })()
    }, k = function () {
        var e, t, i;
        return i = arguments[0], t = arguments[1], e = 3 <= arguments.length ? Z.call(arguments, 2) : [], "function" == typeof i[t] ? i[t].apply(i, e) : i[t]
    }, w = function () {
        var e, t, i, n, a, r, o;
        for (t = arguments[0], n = 2 <= arguments.length ? Z.call(arguments, 1) : [], r = 0, o = n.length; r < o; r++)
            if (i = n[r])
                for (e in i) $.call(i, e) && (a = i[e], null != t[e] && "object" == typeof t[e] && null != a && "object" == typeof a ? w(t[e], a) : t[e] = a);
        return t
    }, _ = function (e) {
        var t, i, n, a, r;
        for (i = t = 0, a = 0, r = e.length; a < r; a++) n = e[a], i += Math.abs(n), t++;
        return i / t
    }, T = function (e, t) {
        var i, n, a;
        if (null == e && (e = "options"), null == t && (t = !0), a = document.querySelector("[data-pace-" + e + "]")) {
            if (i = a.getAttribute("data-pace-" + e), !t) return i;
            try {
                return JSON.parse(i)
            } catch (r) {
                return n = r, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
            }
        }
    }, o = function () {
        function e() {}
        return e.prototype.on = function (e, t, i, n) {
            var a;
            return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (a = this.bindings)[e] && (a[e] = []), this.bindings[e].push({
                handler: t,
                ctx: i,
                once: n
            })
        }, e.prototype.once = function (e, t, i) {
            return this.on(e, t, i, !0)
        }, e.prototype.off = function (e, t) {
            var i, n, a;
            if (null != (null != (n = this.bindings) ? n[e] : void 0)) {
                if (null == t) return delete this.bindings[e];
                for (i = 0, a = []; i < this.bindings[e].length;) this.bindings[e][i].handler === t ? a.push(this.bindings[e].splice(i, 1)) : a.push(i++);
                return a
            }
        }, e.prototype.trigger = function () {
            var e, t, i, n, a, r, o, p, s;
            if (i = arguments[0], e = 2 <= arguments.length ? Z.call(arguments, 1) : [], null != (o = this.bindings) ? o[i] : void 0) {
                for (a = 0, s = []; a < this.bindings[i].length;) p = this.bindings[i][a], n = p.handler, t = p.ctx, r = p.once, n.apply(null != t ? t : this, e), r ? s.push(this.bindings[i].splice(a, 1)) : s.push(a++);
                return s
            }
        }, e
    }(), l = window.Pace || {}, window.Pace = l, w(l, o.prototype), D = l.options = w({}, x, window.paceOptions, T()), G = ["ajax", "document", "eventLag", "elements"], j = 0, U = G.length; j < U; j++) z = G[j], D[z] === !0 && (D[z] = x[z]);
    s = function (e) {
        function t() {
            return W = t.__super__.constructor.apply(this, arguments)
        }
        return J(t, e), t
    }(Error), t = function () {
        function e() {
            this.progress = 0
        }
        return e.prototype.getElement = function () {
            if (null == this.el && (this.el = document.querySelector(D.target), !this.el)) throw new s;
            return this.el
        }, e.prototype.finish = function () {
            var e;
            e = this.getElement(), e.parentNode.style.display = "none";
            var t = document.createEvent("HTMLEvents");
            t.initEvent("preloaddone", !1, !1), document.dispatchEvent(t)
        }, e.prototype.update = function (e) {
            return this.progress = e, this.render()
        }, e.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                s = e
            }
            return this.el = void 0
        }, e.prototype.render = function () {
            var e;
            return e = this.getElement(), (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.innerHTML = (0 | this.progress) + "%", e.setAttribute("data-progress", 0 | this.progress)), this.lastRenderedProgress = this.progress
        }, e.prototype.done = function () {
            return this.progress >= 100
        }, e
    }(), p = function () {
        function e() {
            this.bindings = {}
        }
        return e.prototype.trigger = function (e, t) {
            var i, n, a, r, o;
            if (null != this.bindings[e]) {
                for (r = this.bindings[e], o = [], n = 0, a = r.length; n < a; n++) i = r[n], o.push(i.call(this, t));
                return o
            }
        }, e.prototype.on = function (e, t) {
            var i;
            return null == (i = this.bindings)[e] && (i[e] = []), this.bindings[e].push(t)
        }, e
    }(), F = window.XMLHttpRequest, Y = window.XDomainRequest, X = window.WebSocket, b = function (e, t) {
        var i, n, a;
        a = [];
        for (n in t.prototype) try {
            null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? a.push(Object.defineProperty(e, n, {
                get: function () {
                    return t.prototype[n]
                }, configurable: !0,
                enumerable: !0
            })) : a.push(e[n] = t.prototype[n]) : a.push(void 0)
        } catch (r) {
            i = r
        }
        return a
    }, C = [], l.ignore = function () {
        var e, t, i;
        return t = arguments[0], e = 2 <= arguments.length ? Z.call(arguments, 1) : [], C.unshift("ignore"), i = t.apply(null, e), C.shift(), i
    }, l.track = function () {
        var e, t, i;
        return t = arguments[0], e = 2 <= arguments.length ? Z.call(arguments, 1) : [], C.unshift("track"), i = t.apply(null, e), C.shift(), i
    }, I = function (e) {
        var t;
        if (null == e && (e = "GET"), "track" === C[0]) return "force";
        if (!C.length && D.ajax) {
            if ("socket" === e && D.ajax.trackWebSockets) return !0;
            if (t = e.toUpperCase(), Q.call(D.ajax.trackMethods, t) >= 0) return !0
        }
        return !1
    }, c = function (e) {
        function t() {
            var e, i = this;
            t.__super__.constructor.apply(this, arguments), e = function (e) {
                var t;
                return t = e.open, e.open = function (n, a, r) {
                    return I(n) && i.trigger("request", {
                        type: n,
                        url: a,
                        request: e
                    }), t.apply(e, arguments)
                }
            }, window.XMLHttpRequest = function (t) {
                var i;
                return i = new F(t), e(i), i
            };
            try {
                b(window.XMLHttpRequest, F)
            } catch (n) {}
            if (null != Y) {
                window.XDomainRequest = function () {
                    var t;
                    return t = new Y, e(t), t
                };
                try {
                    b(window.XDomainRequest, Y)
                } catch (n) {}
            }
            if (null != X && D.ajax.trackWebSockets) {
                window.WebSocket = function (e, t) {
                    var n;
                    return n = null != t ? new X(e, t) : new X(e), I("socket") && i.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: n
                    }), n
                };
                try {
                    b(window.WebSocket, X)
                } catch (n) {}
            }
        }
        return J(t, e), t
    }(p), H = null, E = function () {
        return null == H && (H = new c), H
    }, R = function (e) {
        var t, i, n, a;
        for (a = D.ajax.ignoreURLs, i = 0, n = a.length; i < n; i++)
            if (t = a[i], "string" == typeof t) {
                if (e.indexOf(t) !== -1) return !0
            } else if (t.test(e)) return !0;
        return !1
    }, E().on("request", function (t) {
        var i, n, a, r, o;
        if (r = t.type, a = t.request, o = t.url, !R(o)) return l.running || D.restartOnRequestAfter === !1 && "force" !== I(r) ? void 0 : (n = arguments, i = D.restartOnRequestAfter || 0, "boolean" == typeof i && (i = 0), setTimeout(function () {
            var t, i, o, p, s, c;
            if (t = "socket" === r ? a.readyState < 2 : 0 < (p = a.readyState) && p < 4) {
                for (l.restart(), s = l.sources, c = [], i = 0, o = s.length; i < o; i++) {
                    if (z = s[i], z instanceof e) {
                        z.watch.apply(z, n);
                        break
                    }
                    c.push(void 0)
                }
                return c
            }
        }, i))
    }), e = function () {
        function e() {
            var e = this;
            this.elements = [], E().on("request", function () {
                return e.watch.apply(e, arguments)
            })
        }
        return e.prototype.watch = function (e) {
            var t, i, n, a;
            if (n = e.type, t = e.request, a = e.url, !R(a)) return i = "socket" === n ? new d(t) : new m(t), this.elements.push(i)
        }, e
    }(), m = function () {
        function e(e) {
            var t, i, n, a, r, o, p = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (i = null, e.addEventListener("progress", function (e) {
                    return e.lengthComputable ? p.progress = 100 * e.loaded / e.total : p.progress = p.progress + (100 - p.progress) / 2
                }, !1), o = ["load", "abort", "timeout", "error"], n = 0, a = o.length; n < a; n++) t = o[n], e.addEventListener(t, function () {
                    return p.progress = 100
                }, !1);
            else r = e.onreadystatechange, e.onreadystatechange = function () {
                var t;
                return 0 === (t = e.readyState) || 4 === t ? p.progress = 100 : 3 === e.readyState && (p.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
            }
        }
        return e
    }(), d = function () {
        function e(e) {
            var t, i, n, a, r = this;
            for (this.progress = 0, a = ["error", "open"], i = 0, n = a.length; i < n; i++) t = a[i], e.addEventListener(t, function () {
                return r.progress = 100
            }, !1)
        }
        return e
    }(), n = function () {
        function e(e) {
            var t, i, n, r;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), r = e.selectors, i = 0, n = r.length; i < n; i++) t = r[i], this.elements.push(new a(t))
        }
        return e
    }(), a = function () {
        function e(e) {
            this.selector = e, this.progress = 0, this.check()
        }
        return e.prototype.check = function () {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return e.check()
            }, D.elements.checkInterval)
        }, e.prototype.done = function () {
            return this.progress = 100
        }, e
    }(), i = function () {
        function e() {
            var e, t, i = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function () {
                return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }
        return e.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, e
    }(), r = function () {
        function e() {
            var e, t, i, n, a, r = this;
            this.progress = 0, e = 0, a = [], n = 0, i = B(), t = setInterval(function () {
                var o;
                return o = B() - i - 50,
                    i = B(), a.push(o), a.length > D.eventLag.sampleCount && a.shift(), e = _(a), ++n >= D.eventLag.minSamples && e < D.eventLag.lagThreshold ? (r.progress = 100, clearInterval(t)) : r.progress = 100 * (3 / (e + 3))
            }, 50)
        }
        return e
    }(), h = function () {
        function e(e) {
            this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = k(this.source, "progress"))
        }
        return e.prototype.tick = function (e, t) {
            var i;
            return null == t && (t = k(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), i = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += i * this.rate * e, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, e
    }(), N = null, P = null, g = null, O = null, f = null, y = null, l.running = !1, S = function () {
        if (D.restartOnPushState) return l.restart()
    }, null != window.history.pushState && (V = window.history.pushState, window.history.pushState = function () {
        return S(), V.apply(window.history, arguments)
    }), null != window.history.replaceState && (q = window.history.replaceState, window.history.replaceState = function () {
        return S(), q.apply(window.history, arguments)
    }), u = {
        ajax: e,
        elements: n,
        document: i,
        eventLag: r
    }, (A = function () {
        var e, i, n, a, r, o, p, s;
        for (l.sources = N = [], o = ["ajax", "elements", "document", "eventLag"], i = 0, a = o.length; i < a; i++) e = o[i], D[e] !== !1 && N.push(new u[e](D[e]));
        for (s = null != (p = D.extraSources) ? p : [], n = 0, r = s.length; n < r; n++) z = s[n], N.push(new z(D));
        return l.bar = g = new t, P = [], O = new h
    })(), l.stop = function () {
        return l.trigger("stop"), l.running = !1, g.destroy(), y = !0, null != f && ("function" == typeof v && v(f), f = null), A()
    }, l.restart = function () {
        return l.trigger("restart"), l.stop(), l.start()
    }, l.go = function () {
        var e;
        return l.running = !0, g.render(), e = B(), y = !1, f = M(function (t, i) {
            var n, a, r, o, p, s, c, u, d, m, f, _, v, x, w, b;
            for (u = 100 - g.progress, a = f = 0, r = !0, s = _ = 0, x = N.length; _ < x; s = ++_)
                for (z = N[s], m = null != P[s] ? P[s] : P[s] = [], p = null != (b = z.elements) ? b : [z], c = v = 0, w = p.length; v < w; c = ++v) o = p[c], d = null != m[c] ? m[c] : m[c] = new h(o), r &= d.done, d.done || (a++, f += d.tick(t));
            return n = f / a, g.update(O.tick(t, n)), g.done() || r || y ? (g.update(100), l.trigger("done"), setTimeout(function () {
                return g.finish(), l.running = !1, l.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (B() - e), 0)))) : i()
        })
    }, l.start = function (e) {
        w(D, e), l.running = !0;
        try {
            g.render()
        } catch (t) {
            s = t
        }
        return document.querySelector(D.target) ? (l.trigger("start"), l.go()) : setTimeout(l.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function () {
        return l
    }) : "object" == typeof exports ? module.exports = l : D.startOnPageLoad && l.start()
}.call(this),
    function (e) {
        function t(t) {
            function i() {
                k = !0
            }

            function n() {
                return D || k
            }

            function a(e, i) {
                if (t(e, !0), k && i) {
                    var n = e.match(/[\w]:\/\/(.*)/);
                    i(n && n[1])
                }
            }

            function r(e, t) {
                if (A[t] && A[t].length > 0) {
                    var i = A[t].shift();
                    i && i.call(this, e)
                }
            }

            function o() {
                a(B.updateprofile)
            }

            function p(e) {
                A.afterLogin.push(e), a(B.login, e)
            }

            function s(e) {
                A.afterUserinfo.push(e), a(B.userinfo, e)
            }

            function l(e) {
                A.afterDevice.push(e), a(B.device, e)
            }

            function c(e, t) {
                A.afterShare.push(e), a(B.share.replace("{TYPE}", t || ""), e)
            }

            function u(e) {
                a(B.pushview.replace("{TYPE}", e))
            }

            function h(t, i) {
                A.afterEncrypt.push(i), e.extra && e.extra.__newsapp_encrypt ? r(e.extra.__newsapp_encrypt(t), "afterEncrypt") : a(B.encrypt + encodeURIComponent(t), i)
            }

            function d(e, t, i) {
                A.afterUploadImage.push(i), a(B.uploadImageByCamera.replace("{W}", e).replace("{H}", t), i)
            }

            function m(e, t, i) {
                A.afterUploadImage.push(i), a(B.uploadImageByAlbum.replace("{W}", e).replace("{H}", t), i)
            }

            function f(e, t, i) {
                a(B.openComment.replace("{BOARD_ID}", e).replace("{DOC_ID}", t).replace("{TITLE}", i || ""))
            }

            function _(e) {
                A.afterComment.push(e), a(B.comment, e)
            }

            function g(e, t) {
                A.afterOtherappinfo.push(t), a(B.otherappinfo + e, t)
            }

            function y(e) {
                a(B.copy + e)
            }

            function v(e) {
                a(B.toolbar.replace("{COMMAND}", e))
            }

            function x(e) {
                document.title = e || document.title, a(B.modifytitle.replace("{TITLE}", encodeURIComponent(e)))
            }

            function w(e, t) {
                A.afterActionbutton.push(t), a(B.actionbutton.replace("{NAME}", encodeURIComponent(e)), t)
            }

            function b(t) {
                A.afterAddAlarm.push(t), e.extra && e.extra.__newsapp_alarm_add_done ? r(e.extra.__newsapp_alarm_add_done(), "afterAddAlarm") : a(B.addAlarm, t)
            }

            function T(t) {
                A.afterRemoveAlarm.push(t), e.extra && e.extra.__newsapp_alarm_remove_done ? r(e.extra.__newsapp_alarm_remove_done(), "afterRemoveAlarm") : a(B.removeAlarm, t)
            }

            function E(t) {
                A.afterCheckAlarm.push(t), e.extra && e.extra.__newsapp_alarm_check_done ? r(e.extra.__newsapp_alarm_check_done(), "afterCheckAlarm") : a(B.checkAlarm, t)
            }

            function S(e) {
                A.afterTrashId.push(e), a(B.trashid, e)
            }

            function C(e) {
                A.afterLocation.push(e), a(B.location, e)
            }
            var A, B, D = /NewsApp/gi.test(navigator.userAgent),
                L = /Android/gi,
                k = !1,
                M = L.test(navigator.platform) || L.test(navigator.userAgent);
            return A = {
                afterEncrypt: [],
                afterShare: [],
                afterUserinfo: [],
                afterLogin: [],
                afterDevice: [],
                afterUploadImage: [],
                afterComment: [],
                afterOtherappinfo: [],
                afterActionbutton: [],
                afterAddAlarm: [],
                afterRemoveAlarm: [],
                afterCheckAlarm: [],
                afterTrashId: [],
                afterLocation: []
            }, B = {
                share: "share://{TYPE}",
                updateprofile: "updateprofile://",
                encrypt: "encrypt://",
                pushview: "pushview://{TYPE}",
                userinfo: "userinfo://",
                login: "login://",
                device: "device://",
                uploadImageByCamera: "uploadimage://camera/{W}_{H}",
                uploadImageByAlbum: "uploadimage://album/{W}_{H}",
                openComment: "newsapp://comment/{BOARD_ID}/{DOC_ID}/{TITLE}",
                comment: "comment://",
                otherappinfo: M ? "otherappinfo://" : "otherappinfo://intent/",
                copy: "copy://",
                toolbar: "docmode://toolbar/{COMMAND}",
                modifytitle: "docmode://modifytitle/{TITLE}",
                actionbutton: "docmode://actionbutton/{NAME}",
                addAlarm: "alarm://add",
                removeAlarm: "alarm://remove",
                checkAlarm: "alarm://check",
                trashid: "trashid://",
                location: "location://current"
            }, e.__newsapp_share_done = function (e) {
                r(e, "afterShare")
            }, e.__newsapp_encrypt_done = function (e) {
                r(e, "afterEncrypt")
            }, e.__newsapp_userinfo_done = function (e) {
                r(e, "afterUserinfo")
            }, e.__newsapp_login_done = function (e) {
                r(e, "afterLogin")
            }, e.__newsapp_device_done = function (e) {
                r(e, "afterDevice")
            }, e.__newsapp_upload_image_done = function (e) {
                r(e, "afterUploadImage")
            }, e.__newsapp_comment_done = function (e) {
                r(e, "afterComment")
            }, e.__newsapp_otherappinfo_done = function (e) {
                r(e, "afterOtherappinfo")
            }, e.__newsapp_browser_actionbutton = function (e) {
                r(e, "afterActionbutton")
            }, e.__newsapp_alarm_add_done = function (e) {
                r(e, "afterAddAlarm")
            }, e.__newsapp_alarm_remove_done = function (e) {
                r(e, "afterRemoveAlarm")
            }, e.__newsapp_alarm_check_done = function (e) {
                r(e, "afterCheckAlarm")
            }, e.__newsapp_trashid_done = function (e) {
                r(e, "afterTrashId")
            }, e.__newsapp_location_done = function (e) {
                r(e, "afterLocation")
            }, {
                isNewsApp: n,
                login: p,
                userInfo: s,
                device: l,
                share: c,
                encrypt: h,
                updateProfile: o,
                uploadImageByCamera: d,
                uploadImageByAlbum: m,
                pushView: u,
                openComment: f,
                comment: _,
                otherappinfo: g,
                copy: y,
                toolbar: v,
                modifyTitle: x,
                actionbutton: w,
                enableDebug: i,
                addAlarm: b,
                removeAlarm: T,
                checkAlarm: E,
                trashId: S,
                location: C,
                protocol: a,
                Callbacks: A
            }
        }
        var i = function () {
            function t(e) {
                var t = document.createElement("iframe");
                return t.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;"), t.setAttribute("height", "0px"), t.setAttribute("width", "0px"), t.setAttribute("frameborder", "0"), e ? t.setAttribute("src", e) : document.documentElement.appendChild(t), t
            }

            function i(e) {
                e && e.parentNode.removeChild(e)
            }

            function n(n, r, p) {
                var s, l;
                return p ? void(e.location.href = n) : void(r ? (o ? (s = t(), s.setAttribute("src", n)) : (s = t(n), document.documentElement.appendChild(s)), l = setTimeout(function () {
                    s && i(s)
                }, 3e4), s.onload = s.onreadystatechange = function () {
                    l && clearTimeout(l), s && i(s)
                }) : (a = a || t(), a.setAttribute("src", n)))
            }
            var a, r = /Android/gi,
                o = r.test(navigator.platform) || r.test(navigator.userAgent);
            return a = null, {
                protocol: n
            }
        }();
        e.NewsAppClient = t(i.protocol)
    }(window),
    function (e) {
        var t = Date.now || function () {
                return +new Date
            },
            i = 60,
            n = 1e3,
            a = {},
            r = 1;
        e.core ? core.effect || (core.effect = {}) : e.core = {
            effect: {}
        }, core.effect.Animate = {
            requestAnimationFrame: function () {
                var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
                    i = !!t;
                if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (i = !1), i) return function (e, i) {
                    t(e, i)
                };
                var n = 60,
                    a = {},
                    r = 0,
                    o = 1,
                    p = null,
                    s = +new Date;
                return function (e, t) {
                    var i = o++;
                    return a[i] = e, r++, null === p && (p = setInterval(function () {
                        var e = +new Date,
                            t = a;
                        a = {}, r = 0;
                        for (var i in t) t.hasOwnProperty(i) && (t[i](e), s = e);
                        e - s > 2500 && (clearInterval(p), p = null)
                    }, 1e3 / n)), i
                }
            }(),
            stop: function (e) {
                var t = null != a[e];
                return t && (a[e] = null), t
            }, isRunning: function (e) {
                return null != a[e]
            }, start: function (e, o, p, s, l, c) {
                var u = t(),
                    h = u,
                    d = 0,
                    m = 0,
                    f = r++;
                if (c || (c = document.body), f % 20 === 0) {
                    var _ = {};
                    for (var g in a) _[g] = !0;
                    a = _
                }
                var y = function (r) {
                    var _ = r !== !0,
                        g = t();
                    if (!a[f] || o && !o(f)) return a[f] = null, void(p && p(i - m / ((g - u) / n), f, !1));
                    if (_)
                        for (var v = Math.round((g - h) / (n / i)) - 1, x = 0; x < Math.min(v, 4); x++) y(!0), m++;
                    s && (d = (g - u) / s, d > 1 && (d = 1));
                    var w = l ? l(d) : d;
                    e(w, g, _) !== !1 && 1 !== d || !_ ? _ && (h = g, core.effect.Animate.requestAnimationFrame(y, c)) : (a[f] = null, p && p(i - m / ((g - u) / n), f, 1 === d || null == s))
                };
                return a[f] = !0, core.effect.Animate.requestAnimationFrame(y, c), f
            }
        }
    }(this);
var Scroller;
! function () {
    var e = function () {};
    Scroller = function (t, i) {
        this.__callback = t, this.options = {
            scrollingX: !0,
            scrollingY: !0,
            animating: !0,
            animationDuration: 250,
            bouncing: !0,
            locking: !0,
            paging: !1,
            snapping: !1,
            zooming: !1,
            minZoom: .5,
            maxZoom: 3,
            speedMultiplier: 1,
            scrollingComplete: e,
            penetrationDeceleration: .03,
            penetrationAcceleration: .08
        };
        for (var n in i) this.options[n] = i[n]
    };
    var t = function (e) {
            return Math.pow(e - 1, 3) + 1
        },
        i = function (e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        },
        n = {
            __isSingleTouch: !1,
            __isTracking: !1,
            __didDecelerationComplete: !1,
            __isGesturing: !1,
            __isDragging: !1,
            __isDecelerating: !1,
            __isAnimating: !1,
            __clientLeft: 0,
            __clientTop: 0,
            __clientWidth: 0,
            __clientHeight: 0,
            __contentWidth: 0,
            __contentHeight: 0,
            __snapWidth: 100,
            __snapHeight: 100,
            __refreshHeight: null,
            __refreshActive: !1,
            __refreshActivate: null,
            __refreshDeactivate: null,
            __refreshStart: null,
            __zoomLevel: 1,
            __scrollLeft: 0,
            __scrollTop: 0,
            __maxScrollLeft: 0,
            __maxScrollTop: 0,
            __scheduledLeft: 0,
            __scheduledTop: 0,
            __scheduledZoom: 0,
            __lastTouchLeft: null,
            __lastTouchTop: null,
            __lastTouchMove: null,
            __positions: null,
            __minDecelerationScrollLeft: null,
            __minDecelerationScrollTop: null,
            __maxDecelerationScrollLeft: null,
            __maxDecelerationScrollTop: null,
            __decelerationVelocityX: null,
            __decelerationVelocityY: null,
            setDimensions: function (e, t, i, n) {
                var a = this;
                e === +e && (a.__clientWidth = e), t === +t && (a.__clientHeight = t), i === +i && (a.__contentWidth = i), n === +n && (a.__contentHeight = n), a.__computeScrollMax(), a.scrollTo(a.__scrollLeft, a.__scrollTop, !0)
            }, setPosition: function (e, t) {
                var i = this;
                i.__clientLeft = e || 0, i.__clientTop = t || 0
            }, setSnapSize: function (e, t) {
                var i = this;
                i.__snapWidth = e, i.__snapHeight = t
            }, activatePullToRefresh: function (e, t, i, n) {
                var a = this;
                a.__refreshHeight = e, a.__refreshActivate = t, a.__refreshDeactivate = i, a.__refreshStart = n
            }, triggerPullToRefresh: function () {
                this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0), this.__refreshStart && this.__refreshStart()
            }, finishPullToRefresh: function () {
                var e = this;
                e.__refreshActive = !1, e.__refreshDeactivate && e.__refreshDeactivate(), e.scrollTo(e.__scrollLeft, e.__scrollTop, !0)
            }, getValues: function () {
                var e = this;
                return {
                    left: e.__scrollLeft,
                    top: e.__scrollTop,
                    zoom: e.__zoomLevel
                }
            }, getScrollMax: function () {
                var e = this;
                return {
                    left: e.__maxScrollLeft,
                    top: e.__maxScrollTop
                }
            }, zoomTo: function (e, t, i, n, a) {
                var r = this;
                if (!r.options.zooming) throw new Error("Zooming is not enabled!");
                a && (r.__zoomComplete = a), r.__isDecelerating && (core.effect.Animate.stop(r.__isDecelerating), r.__isDecelerating = !1);
                var o = r.__zoomLevel;
                null == i && (i = r.__clientWidth / 2), null == n && (n = r.__clientHeight / 2), e = Math.max(Math.min(e, r.options.maxZoom), r.options.minZoom), r.__computeScrollMax(e);
                var p = (i + r.__scrollLeft) * e / o - i,
                    s = (n + r.__scrollTop) * e / o - n;
                p > r.__maxScrollLeft ? p = r.__maxScrollLeft : p < 0 && (p = 0), s > r.__maxScrollTop ? s = r.__maxScrollTop : s < 0 && (s = 0), r.__publish(p, s, e, t)
            }, zoomBy: function (e, t, i, n, a) {
                var r = this;
                r.zoomTo(r.__zoomLevel * e, t, i, n, a)
            }, scrollTo: function (e, t, i, n) {
                var a = this;
                if (a.__isDecelerating && (core.effect.Animate.stop(a.__isDecelerating), a.__isDecelerating = !1), null != n && n !== a.__zoomLevel) {
                    if (!a.options.zooming) throw new Error("Zooming is not enabled!");
                    e *= n, t *= n, a.__computeScrollMax(n)
                } else n = a.__zoomLevel;
                a.options.scrollingX ? a.options.paging ? e = Math.round(e / a.__clientWidth) * a.__clientWidth : a.options.snapping && (e = Math.round(e / a.__snapWidth) * a.__snapWidth) : e = a.__scrollLeft, a.options.scrollingY ? a.options.paging ? t = Math.round(t / a.__clientHeight) * a.__clientHeight : a.options.snapping && (t = Math.round(t / a.__snapHeight) * a.__snapHeight) : t = a.__scrollTop, e = Math.max(Math.min(a.__maxScrollLeft, e), 0), t = Math.max(Math.min(a.__maxScrollTop, t), 0), e === a.__scrollLeft && t === a.__scrollTop && (i = !1), a.__isTracking || a.__publish(e, t, n, i)
            }, scrollBy: function (e, t, i) {
                var n = this,
                    a = n.__isAnimating ? n.__scheduledLeft : n.__scrollLeft,
                    r = n.__isAnimating ? n.__scheduledTop : n.__scrollTop;
                n.scrollTo(a + (e || 0), r + (t || 0), i)
            }, doMouseZoom: function (e, t, i, n) {
                var a = this,
                    r = e > 0 ? .97 : 1.03;
                return a.zoomTo(a.__zoomLevel * r, !1, i - a.__clientLeft, n - a.__clientTop)
            }, doTouchStart: function (e, t) {
                if (null == e.length) throw new Error("Invalid touch list: " + e);
                if (t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);
                var i = this;
                i.__interruptedAnimation = !0, i.__isDecelerating && (core.effect.Animate.stop(i.__isDecelerating), i.__isDecelerating = !1, i.__interruptedAnimation = !0), i.__isAnimating && (core.effect.Animate.stop(i.__isAnimating), i.__isAnimating = !1, i.__interruptedAnimation = !0);
                var n, a, r = 1 === e.length;
                r ? (n = e[0].pageX, a = e[0].pageY) : (n = Math.abs(e[0].pageX + e[1].pageX) / 2, a = Math.abs(e[0].pageY + e[1].pageY) / 2), i.__initialTouchLeft = n, i.__initialTouchTop = a, i.__zoomLevelStart = i.__zoomLevel, i.__lastTouchLeft = n, i.__lastTouchTop = a, i.__lastTouchMove = t, i.__lastScale = 1, i.__enableScrollX = !r && i.options.scrollingX, i.__enableScrollY = !r && i.options.scrollingY, i.__isTracking = !0, i.__didDecelerationComplete = !1, i.__isDragging = !r, i.__isSingleTouch = r, i.__positions = []
            }, doTouchMove: function (e, t, i) {
                if (null == e.length) throw new Error("Invalid touch list: " + e);
                if (t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);
                var n = this;
                if (n.__isTracking) {
                    var a, r;
                    2 === e.length ? (a = Math.abs(e[0].pageX + e[1].pageX) / 2, r = Math.abs(e[0].pageY + e[1].pageY) / 2) : (a = e[0].pageX, r = e[0].pageY);
                    var o = n.__positions;
                    if (n.__isDragging) {
                        var p = a - n.__lastTouchLeft,
                            s = r - n.__lastTouchTop,
                            l = n.__scrollLeft,
                            c = n.__scrollTop,
                            u = n.__zoomLevel;
                        if (null != i && n.options.zooming) {
                            var h = u;
                            if (u = u / n.__lastScale * i, u = Math.max(Math.min(u, n.options.maxZoom), n.options.minZoom), h !== u) {
                                var d = a - n.__clientLeft,
                                    m = r - n.__clientTop;
                                l = (d + l) * u / h - d, c = (m + c) * u / h - m, n.__computeScrollMax(u)
                            }
                        }
                        if (n.__enableScrollX) {
                            l -= p * this.options.speedMultiplier;
                            var f = n.__maxScrollLeft;
                            (l > f || l < 0) && (n.options.bouncing ? l += p / 2 * this.options.speedMultiplier : l = l > f ? f : 0)
                        }
                        if (n.__enableScrollY) {
                            c -= s * this.options.speedMultiplier;
                            var _ = n.__maxScrollTop;
                            (c > _ || c < 0) && (n.options.bouncing ? (c += s / 2 * this.options.speedMultiplier, n.__enableScrollX || null == n.__refreshHeight || (!n.__refreshActive && c <= -n.__refreshHeight ? (n.__refreshActive = !0, n.__refreshActivate && n.__refreshActivate()) : n.__refreshActive && c > -n.__refreshHeight && (n.__refreshActive = !1, n.__refreshDeactivate && n.__refreshDeactivate()))) : c = c > _ ? _ : 0)
                        }
                        o.length > 60 && o.splice(0, 30), o.push(l, c, t), n.__publish(l, c, u)
                    } else {
                        var g = n.options.locking ? 3 : 0,
                            y = 5,
                            v = Math.abs(a - n.__initialTouchLeft),
                            x = Math.abs(r - n.__initialTouchTop);
                        n.__enableScrollX = n.options.scrollingX && v >= g, n.__enableScrollY = n.options.scrollingY && x >= g, o.push(n.__scrollLeft, n.__scrollTop, t), n.__isDragging = (n.__enableScrollX || n.__enableScrollY) && (v >= y || x >= y), n.__isDragging && (n.__interruptedAnimation = !1)
                    }
                    n.__lastTouchLeft = a, n.__lastTouchTop = r, n.__lastTouchMove = t, n.__lastScale = i
                }
            }, doTouchEnd: function (e) {
                if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);
                var t = this;
                if (t.__isTracking) {
                    if (t.__isTracking = !1, t.__isDragging)
                        if (t.__isDragging = !1, t.__isSingleTouch && t.options.animating && e - t.__lastTouchMove <= 100) {
                            for (var i = t.__positions, n = i.length - 1, a = n, r = n; r > 0 && i[r] > t.__lastTouchMove - 100; r -= 3) a = r;
                            if (a !== n) {
                                var o = i[n] - i[a],
                                    p = t.__scrollLeft - i[a - 2],
                                    s = t.__scrollTop - i[a - 1];
                                t.__decelerationVelocityX = p / o * (1e3 / 60), t.__decelerationVelocityY = s / o * (1e3 / 60);
                                var l = t.options.paging || t.options.snapping ? 4 : 1;
                                Math.abs(t.__decelerationVelocityX) > l || Math.abs(t.__decelerationVelocityY) > l ? t.__refreshActive || t.__startDeceleration(e) : t.options.scrollingComplete()
                            } else t.options.scrollingComplete()
                        } else e - t.__lastTouchMove > 100 && t.options.scrollingComplete();
                    t.__isDecelerating || (t.__refreshActive && t.__refreshStart ? (t.__publish(t.__scrollLeft, -t.__refreshHeight, t.__zoomLevel, !0), t.__refreshStart && t.__refreshStart()) : ((t.__interruptedAnimation || t.__isDragging) && t.options.scrollingComplete(), t.scrollTo(t.__scrollLeft, t.__scrollTop, !0, t.__zoomLevel), t.__refreshActive && (t.__refreshActive = !1, t.__refreshDeactivate && t.__refreshDeactivate()))), t.__positions.length = 0
                }
            }, __publish: function (e, n, a, r) {
                var o = this,
                    p = o.__isAnimating;
                if (p && (core.effect.Animate.stop(p), o.__isAnimating = !1), r && o.options.animating) {
                    o.__scheduledLeft = e, o.__scheduledTop = n, o.__scheduledZoom = a;
                    var s = o.__scrollLeft,
                        l = o.__scrollTop,
                        c = o.__zoomLevel,
                        u = e - s,
                        h = n - l,
                        d = a - c,
                        m = function (e, t, i) {
                            i && (o.__scrollLeft = s + u * e, o.__scrollTop = l + h * e, o.__zoomLevel = c + d * e, o.__callback && o.__callback(o.__scrollLeft, o.__scrollTop, o.__zoomLevel))
                        },
                        f = function (e) {
                            return o.__isAnimating === e
                        },
                        _ = function (e, t, i) {
                            t === o.__isAnimating && (o.__isAnimating = !1), (o.__didDecelerationComplete || i) && o.options.scrollingComplete(), o.options.zooming && (o.__computeScrollMax(), o.__zoomComplete && (o.__zoomComplete(), o.__zoomComplete = null))
                        };
                    o.__isAnimating = core.effect.Animate.start(m, f, _, o.options.animationDuration, p ? t : i)
                } else o.__scheduledLeft = o.__scrollLeft = e, o.__scheduledTop = o.__scrollTop = n, o.__scheduledZoom = o.__zoomLevel = a, o.__callback && o.__callback(e, n, a), o.options.zooming && (o.__computeScrollMax(), o.__zoomComplete && (o.__zoomComplete(), o.__zoomComplete = null))
            }, __computeScrollMax: function (e) {
                var t = this;
                null == e && (e = t.__zoomLevel), t.__maxScrollLeft = Math.max(t.__contentWidth * e - t.__clientWidth, 0), t.__maxScrollTop = Math.max(t.__contentHeight * e - t.__clientHeight, 0)
            }, __startDeceleration: function (e) {
                var t = this;
                if (t.options.paging) {
                    var i = Math.max(Math.min(t.__scrollLeft, t.__maxScrollLeft), 0),
                        n = Math.max(Math.min(t.__scrollTop, t.__maxScrollTop), 0),
                        a = t.__clientWidth,
                        r = t.__clientHeight;
                    t.__minDecelerationScrollLeft = Math.floor(i / a) * a, t.__minDecelerationScrollTop = Math.floor(n / r) * r, t.__maxDecelerationScrollLeft = Math.ceil(i / a) * a, t.__maxDecelerationScrollTop = Math.ceil(n / r) * r
                } else t.__minDecelerationScrollLeft = 0, t.__minDecelerationScrollTop = 0, t.__maxDecelerationScrollLeft = t.__maxScrollLeft, t.__maxDecelerationScrollTop = t.__maxScrollTop;
                var o = function (e, i, n) {
                        t.__stepThroughDeceleration(n)
                    },
                    p = t.options.snapping ? 4 : .001,
                    s = function () {
                        var e = Math.abs(t.__decelerationVelocityX) >= p || Math.abs(t.__decelerationVelocityY) >= p;
                        return e || (t.__didDecelerationComplete = !0), e
                    },
                    l = function (e, i, n) {
                        t.__isDecelerating = !1, t.__didDecelerationComplete && t.options.scrollingComplete(), t.scrollTo(t.__scrollLeft, t.__scrollTop, t.options.snapping)
                    };
                t.__isDecelerating = core.effect.Animate.start(o, s, l)
            }, __stepThroughDeceleration: function (e) {
                var t = this,
                    i = t.__scrollLeft + t.__decelerationVelocityX,
                    n = t.__scrollTop + t.__decelerationVelocityY;
                if (!t.options.bouncing) {
                    var a = Math.max(Math.min(t.__maxDecelerationScrollLeft, i), t.__minDecelerationScrollLeft);
                    a !== i && (i = a, t.__decelerationVelocityX = 0);
                    var r = Math.max(Math.min(t.__maxDecelerationScrollTop, n), t.__minDecelerationScrollTop);
                    r !== n && (n = r, t.__decelerationVelocityY = 0)
                }
                if (e ? t.__publish(i, n, t.__zoomLevel) : (t.__scrollLeft = i, t.__scrollTop = n), !t.options.paging) {
                    var o = .95;
                    t.__decelerationVelocityX *= o, t.__decelerationVelocityY *= o
                }
                if (t.options.bouncing) {
                    var p = 0,
                        s = 0,
                        l = t.options.penetrationDeceleration,
                        c = t.options.penetrationAcceleration;
                    i < t.__minDecelerationScrollLeft ? p = t.__minDecelerationScrollLeft - i : i > t.__maxDecelerationScrollLeft && (p = t.__maxDecelerationScrollLeft - i), n < t.__minDecelerationScrollTop ? s = t.__minDecelerationScrollTop - n : n > t.__maxDecelerationScrollTop && (s = t.__maxDecelerationScrollTop - n), 0 !== p && (p * t.__decelerationVelocityX <= 0 ? t.__decelerationVelocityX += p * l : t.__decelerationVelocityX = p * c), 0 !== s && (s * t.__decelerationVelocityY <= 0 ? t.__decelerationVelocityY += s * l : t.__decelerationVelocityY = s * c)
                }
            }
        };
    for (var a in n) Scroller.prototype[a] = n[a]
}(),
function (e) {
    var t = function () {
        var i = e,
            n = document,
            a = n.documentElement,
            r = 0;
        return {
            version: "1.0.1",
            getUid: function (e) {
                var t = ++r;
                if (e) {
                    var i = e.charCodeAt(e.length - 1);
                    return i >= 48 && i <= 57 && (e += "_"), e + t
                }
                return t
            }, viewToString: function (e) {
                for (var t, i = e; i;) t = t ? i.id + "." + t : i.id, i = i.parent;
                return t
            }, copy: function (e, t, i) {
                for (var n in t) i && !e.hasOwnProperty(n) && void 0 === e[n] || (e[n] = t[n]);
                return e
            }, browser: function () {
                var e = navigator.userAgent,
                    t = {
                        iphone: /iphone/i.test(e),
                        ipad: /ipad/i.test(e),
                        ipod: /ipod/i.test(e),
                        ios: /iphone|ipad|ipod/i.test(e),
                        android: /android/i.test(e),
                        webkit: /webkit/i.test(e),
                        chrome: /chrome/i.test(e),
                        safari: /safari/i.test(e),
                        firefox: /firefox/i.test(e),
                        ie: /msie/i.test(e),
                        opera: /opera/i.test(e),
                        supportTouch: "ontouchstart" in i,
                        supportCanvas: null != n.createElement("canvas").getContext,
                        supportStorage: !1,
                        supportOrientation: "orientation" in i,
                        supportDeviceMotion: "ondevicemotion" in i
                    };
                try {
                    var r = "hilo";
                    localStorage.setItem(r, r), localStorage.removeItem(r), t.supportStorage = !0
                } catch (o) {}
                var p = t.jsVendor = t.webkit ? "webkit" : t.firefox ? "moz" : t.opera ? "o" : t.ie ? "ms" : "",
                    s = t.cssVendor = "-" + p + "-",
                    l = n.createElement("div"),
                    c = l.style,
                    u = void 0 != c[p + "Transform"],
                    h = void 0 != c[p + "Perspective"];
                return h && (l.id = "test3d", c = n.createElement("style"), c.textContent = "@media (" + s + "transform-3d){#test3d{height:3px}}", n.head.appendChild(c), a.appendChild(l), h = 3 == l.offsetHeight, n.head.removeChild(c), a.removeChild(l)), t.supportTransform = u, t.supportTransform3D = h, t
            }(),
            event: function () {
                var e = "ontouchstart" in i;
                return {
                    POINTER_START: e ? "touchstart" : "mousedown",
                    POINTER_MOVE: e ? "touchmove" : "mousemove",
                    POINTER_END: e ? "touchend" : "mouseup"
                }
            }(),
            align: {
                TOP_LEFT: "TL",
                TOP: "T",
                TOP_RIGHT: "TR",
                LEFT: "L",
                CENTER: "C",
                RIGHT: "R",
                BOTTOM_LEFT: "BL",
                BOTTOM: "B",
                BOTTOM_RIGHT: "BR"
            },
            getElementRect: function (e) {
                try {
                    var t = e.getBoundingClientRect()
                } catch (n) {
                    t = {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        bottom: e.offsetTop + e.offsetHeight
                    }
                }
                var r = (i.pageXOffset || a.scrollLeft) - (a.clientLeft || 0) || 0,
                    o = (i.pageYOffset || a.scrollTop) - (a.clientTop || 0) || 0,
                    p = i.getComputedStyle ? getComputedStyle(e) : e.currentStyle,
                    s = parseInt,
                    l = s(p.paddingLeft) + s(p.borderLeftWidth) || 0,
                    c = s(p.paddingTop) + s(p.borderTopWidth) || 0,
                    u = s(p.paddingRight) + s(p.borderRightWidth) || 0,
                    h = s(p.paddingBottom) + s(p.borderBottomWidth) || 0,
                    d = t.top || 0,
                    m = t.left || 0,
                    f = t.right || 0,
                    _ = t.bottom || 0;
                return {
                    left: m + r + l,
                    top: d + o + c,
                    width: f - u - m - l,
                    height: _ - h - d - c
                }
            }, createElement: function (e, t) {
                var i, a, r, o = n.createElement(e);
                for (i in t)
                    if (a = t[i], "style" === i)
                        for (r in a) o.style[r] = a[r];
                    else o[i] = a;
                return o
            }, getElement: function (e) {
                return n.getElementById(e)
            }, setElementStyleByView: function (e) {
                var i = e.drawable,
                    n = i.domElement.style,
                    a = e._stateCache || (e._stateCache = {}),
                    r = t.browser.jsVendor,
                    o = "px",
                    p = !1;
                if (this.cacheStateIfChanged(e, ["visible"], a) && (n.display = e.visible ? "" : "none"), this.cacheStateIfChanged(e, ["alpha"], a) && (n.opacity = e.alpha), e.visible && !(e.alpha <= 0)) {
                    this.cacheStateIfChanged(e, ["width"], a) && (n.width = e.width + o), this.cacheStateIfChanged(e, ["height"], a) && (n.height = e.height + o), this.cacheStateIfChanged(e, ["depth"], a) && (n.zIndex = e.depth + 1), (p = this.cacheStateIfChanged(e, ["pivotX", "pivotY"], a)) && (n[r + "TransformOrigin"] = e.pivotX + o + " " + e.pivotY + o), (this.cacheStateIfChanged(e, ["x", "y", "rotation", "scaleX", "scaleY"], a) || p) && (n[r + "Transform"] = this.getTransformCSS(e)), this.cacheStateIfChanged(e, ["background"], a) && (n.backgroundColor = e.background), n.pointerEvents || (n.pointerEvents = "none");
                    var s = i.image;
                    if (s) {
                        var l = s.src;
                        l !== a.image && (a.image = l, n.backgroundImage = "url(" + l + ")");
                        var c = i.rect;
                        if (c) {
                            var u = c[0],
                                h = c[1];
                            u !== a.sx && (a.sx = u, n.backgroundPositionX = -u + o), h !== a.sy && (a.sy = h, n.backgroundPositionY = -h + o)
                        }
                    }
                    var d = e.mask;
                    if (d) {
                        var m = d.drawable.domElement.style.backgroundImage;
                        m !== a.maskImage && (a.maskImage = m, n[r + "MaskImage"] = m, n[r + "MaskRepeat"] = "no-repeat");
                        var f = d.x,
                            _ = d.y;
                        f === a.maskX && _ === a.maskY || (a.maskX = f, a.maskY = _, n[r + "MaskPosition"] = f + o + " " + _ + o)
                    }
                }
            }, cacheStateIfChanged: function (e, t, i) {
                var n, a, r, o, p = !1;
                for (n = 0, a = t.length; n < a; n++) r = t[n], o = e[r], o != i[r] && (i[r] = o, p = !0);
                return p
            }, getTransformCSS: function (e) {
                var t = this.browser.supportTransform3D,
                    i = t ? "3d" : "";
                return "translate" + i + "(" + (e.x - e.pivotX) + "px, " + (e.y - e.pivotY) + (t ? "px, 0px)" : "px)") + "rotate" + i + (t ? "(0, 0, 1, " : "(") + e.rotation + "deg)scale" + i + "(" + e.scaleX + ", " + e.scaleY + (t ? ", 1)" : ")")
            }
        }
    }();
    e.Hilo = t
}(window),
function (e) {
    var t = e.Hilo,
        i = function () {
            var e = function (e) {
                    e = e || {};
                    var i = e.hasOwnProperty("constructor") ? e.constructor : function () {};
                    return t.call(i, e), i
                },
                t = function (e) {
                    var t, n, r = {};
                    for (t in e) n = e[t], i.hasOwnProperty(t) ? i[t].call(this, n) : r[t] = n;
                    a(this.prototype, r)
                },
                i = {
                    Extends: function (e) {
                        var t = this.prototype,
                            i = n(e.prototype);
                        a(this, e), a(i, t), i.constructor = this, this.prototype = i, this.superclass = e.prototype
                    }, Mixes: function (e) {
                        e instanceof Array || (e = [e]);
                        for (var t, i = this.prototype; t = e.shift();) a(i, t.prototype || t)
                    }, Statics: function (e) {
                        a(this, e)
                    }
                },
                n = function () {
                    if (Object.__proto__) return function (e) {
                        return {
                            __proto__: e
                        }
                    };
                    var e = function () {};
                    return function (t) {
                        return e.prototype = t, new e
                    }
                }(),
                a = function (e) {
                    for (var t = 1, i = arguments.length; t < i; t++) {
                        var n, a = arguments[t];
                        for (var r in a) {
                            var p = a[r];
                            !p || "object" != typeof p || void 0 === p.value && "function" != typeof p.get && "function" != typeof p.set ? e[r] = p : (n = n || {}, n[r] = p)
                        }
                        n && o(e, n)
                    }
                    return e
                };
            try {
                var r = Object.defineProperty,
                    o = Object.defineProperties;
                r({}, "$", {
                    value: 0
                })
            } catch (p) {
                "__defineGetter__" in Object && (r = function (e, t, i) {
                    return "value" in i && (e[t] = i.value), "get" in i && e.__defineGetter__(t, i.get), "set" in i && e.__defineSetter__(t, i.set), e
                }, o = function (e, t) {
                    for (var i in t) t.hasOwnProperty(i) && r(e, i, t[i]);
                    return e
                })
            }
            return {
                create: e,
                mix: a
            }
        }();
    t.Class = i
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            constructor: function (e, t, i, n, a, r) {
                this.a = e, this.b = t, this.c = i, this.d = n, this.tx = a, this.ty = r
            }, concat: function (e) {
                var t = arguments,
                    i = this.a,
                    n = this.b,
                    a = this.c,
                    r = this.d,
                    o = this.tx,
                    p = this.ty;
                if (t.length >= 6) var s = t[0],
                    l = t[1],
                    c = t[2],
                    u = t[3],
                    h = t[4],
                    d = t[5];
                else s = e.a, l = e.b, c = e.c, u = e.d, h = e.tx, d = e.ty;
                return this.a = i * s + n * c, this.b = i * l + n * u, this.c = a * s + r * c, this.d = a * l + r * u, this.tx = o * s + p * c + h, this.ty = o * l + p * u + d, this
            }, rotate: function (e) {
                var t = Math.sin(e),
                    i = Math.cos(e),
                    n = this.a,
                    a = this.b,
                    r = this.c,
                    o = this.d,
                    p = this.tx,
                    s = this.ty;
                return this.a = n * i - a * t, this.b = n * t + a * i, this.c = r * i - o * t, this.d = r * t + o * i, this.tx = p * i - s * t, this.ty = p * t + s * i, this
            }, scale: function (e, t) {
                return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this
            }, translate: function (e, t) {
                return this.tx += e, this.ty += t, this
            }, identity: function () {
                return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
            }, invert: function () {
                var e = this.a,
                    t = this.b,
                    i = this.c,
                    n = this.d,
                    a = this.tx,
                    r = e * n - t * i;
                return this.a = n / r, this.b = -t / r, this.c = -i / r, this.d = e / r, this.tx = (i * this.ty - n * a) / r, this.ty = -(e * this.ty - t * a) / r, this
            }, transformPoint: function (e, t, i) {
                var n = e.x * this.a + e.y * this.c + this.tx,
                    a = e.x * this.b + e.y * this.d + this.ty;
                return t && (n = n + .5 >> 0, a = a + .5 >> 0), i ? {
                    x: n,
                    y: a
                } : (e.x = n, e.y = a, e)
            }
        });
    t.Matrix = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = {
            _listeners: null,
            on: function (e, t, i) {
                for (var n = this._listeners = this._listeners || {}, a = n[e] = n[e] || [], r = 0, o = a.length; r < o; r++) {
                    var p = a[r];
                    if (p.listener === t) return
                }
                return a.push({
                    listener: t,
                    once: i
                }), this
            }, off: function (e, t) {
                if (0 == arguments.length) return this._listeners = null, this;
                var i = this._listeners && this._listeners[e];
                if (i) {
                    if (1 == arguments.length) return delete this._listeners[e], this;
                    for (var n = 0, a = i.length; n < a; n++) {
                        var r = i[n];
                        if (r.listener === t) {
                            i.splice(n, 1), 0 === i.length && delete this._listeners[e];
                            break
                        }
                    }
                }
                return this
            }, fire: function (e, t) {
                var i, n;
                "string" == typeof e ? n = e : (i = e, n = e.type);
                var r = this._listeners;
                if (!r) return !1;
                var o = r[n];
                if (o) {
                    var p = o.slice(0);
                    if (i = i || new a(n, this, t), i._stopped) return !1;
                    for (var s = 0; s < p.length; s++) {
                        var l = p[s];
                        if (l.listener.call(this, i), l.once) {
                            var c = o.indexOf(l);
                            c > -1 && o.splice(c, 1)
                        }
                    }
                    return 0 == o.length && delete r[n], !0
                }
                return !1
            }
        },
        a = i.create({
            constructor: function (e, t, i) {
                this.type = e, this.target = t, this.detail = i, this.timeStamp = +new Date
            }, type: null,
            target: null,
            detail: null,
            timeStamp: 0,
            stopImmediatePropagation: function () {
                this._stopped = !0
            }
        }),
        r = e.Event;
    if (r) {
        var o = r.prototype,
            p = o.stopImmediatePropagation;
        o.stopImmediatePropagation = function () {
            p && p.call(this), this._stopped = !0
        }
    }
    t.EventMixin = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            constructor: function (e) {
                this.init(e)
            }, image: null,
            rect: null,
            init: function (e) {
                var i = this,
                    a = i.image;
                n.isDrawable(e) ? i.image = e : t.copy(i, e, !0);
                var r = i.image;
                if ("string" == typeof r) {
                    if (!a || r !== a.getAttribute("src")) {
                        i.image = null;
                        var o = new Image;
                        return o.onload = function () {
                            o.onload = null, i.init(o)
                        }, void(o.src = r)
                    }
                    r = i.image = a
                }
                r && !i.rect && (i.rect = [0, 0, r.width, r.height])
            }, Statics: {
                isDrawable: function (e) {
                    if (!e || !e.tagName) return !1;
                    var t = e.tagName.toLowerCase();
                    return "img" === t || "canvas" === t || "video" === t
                }
            }
        });
    t.Drawable = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            constructor: function (e) {
                e = e || {}, t.copy(this, e, !0)
            }, renderType: null,
            canvas: null,
            stage: null,
            startDraw: function (e) {}, draw: function (e) {}, endDraw: function (e) {}, transform: function () {}, hide: function () {}, remove: function (e) {}, clear: function (e, t, i, n) {}, resize: function (e, t) {}
        });
    t.Renderer = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.Renderer,
        a = i.create({
            Extends: n,
            constructor: function (e) {
                a.superclass.constructor.call(this, e), this.context = this.canvas.getContext("2d")
            }, renderType: "canvas",
            context: null,
            startDraw: function (e) {
                return !!(e.visible && e.alpha > 0) && (e === this.stage && this.context.clearRect(0, 0, e.width, e.height), this.context.save(), !0)
            }, draw: function (e) {
                var t = this.context,
                    i = e.width,
                    n = e.height,
                    a = e.background;
                a && (t.fillStyle = a, t.fillRect(0, 0, i, n));
                var r = e.drawable,
                    o = r && r.image;
                if (o) {
                    var p = r.rect,
                        s = p[2],
                        l = p[3],
                        c = p[4],
                        u = p[5];
                    if (!s || !l) return;
                    i || n || (i = e.width = s, n = e.height = l), (c || u) && t.translate(c - .5 * s, u - .5 * l), t.drawImage(o, p[0], p[1], s, l, 0, 0, i, n)
                }
            }, endDraw: function (e) {
                this.context.restore()
            }, transform: function (e) {
                var i = e.drawable;
                if (i && i.domElement) return void t.setElementStyleByView(e);
                var n = this.context,
                    a = e.scaleX,
                    r = e.scaleY;
                if (e === this.stage) {
                    var o = this.canvas.style,
                        p = e._scaleX,
                        s = e._scaleY,
                        l = !1;
                    (!p && 1 != a || p && p != a) && (e._scaleX = a, o.width = a * e.width + "px", l = !0), (!s && 1 != r || s && s != r) && (e._scaleY = r, o.height = r * e.height + "px", l = !0), l && e.updateViewport()
                } else {
                    var c = e.x,
                        u = e.y,
                        h = e.pivotX,
                        d = e.pivotY,
                        m = e.rotation % 360,
                        f = e.mask;
                    f && (f._render(this), n.clip());
                    var _ = e.align;
                    if (_)
                        if ("function" == typeof _) e.align();
                        else {
                            var g = e.parent;
                            if (g) {
                                var y = e.width,
                                    v = e.height,
                                    x = g.width,
                                    w = g.height;
                                switch (_) {
                                case "TL":
                                    c = 0, u = 0;
                                    break;
                                case "T":
                                    c = x - y >> 1, u = 0;
                                    break;
                                case "TR":
                                    c = x - y, u = 0;
                                    break;
                                case "L":
                                    c = 0, u = w - v >> 1;
                                    break;
                                case "C":
                                    c = x - y >> 1, u = w - v >> 1;
                                    break;
                                case "R":
                                    c = x - y, u = w - v >> 1;
                                    break;
                                case "BL":
                                    c = 0, u = w - v;
                                    break;
                                case "B":
                                    c = x - y >> 1, u = w - v;
                                    break;
                                case "BR":
                                    c = x - y, u = w - v
                                }
                            }
                        }
                    0 == c && 0 == u || n.translate(c, u), 0 != m && n.rotate(m * Math.PI / 180), 1 == a && 1 == r || n.scale(a, r), 0 == h && 0 == d || n.translate(-h, -d)
                }
                e.alpha > 0 && (n.globalAlpha *= e.alpha)
            }, remove: function (e) {
                var t = e.drawable,
                    i = t && t.domElement;
                if (i) {
                    var n = i.parentNode;
                    n && n.removeChild(i)
                }
            }, clear: function (e, t, i, n) {
                this.context.clearRect(e, t, i, n)
            }, resize: function (e, t) {
                var i = this.canvas,
                    n = this.stage,
                    a = i.style;
                i.width = e, i.height = t, a.width = n.width * n.scaleX + "px", a.height = n.height * n.scaleY + "px"
            }
        });
    t.CanvasRenderer = a
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.Renderer,
        a = t.Drawable,
        r = function () {
            function e(e, i) {
                var n = e.tagName || "div",
                    a = i.image,
                    r = e.width || a && a.width,
                    o = e.height || a && a.height,
                    p = t.createElement(n),
                    s = p.style;
                if (e.id && (p.id = e.id), s.position = "absolute", s.left = (e.left || 0) + "px", s.top = (e.top || 0) + "px", s.width = r + "px", s.height = o + "px", "canvas" == n) {
                    if (p.width = r, p.height = o, a) {
                        var l = p.getContext("2d"),
                            c = i.rect || [0, 0, r, o];
                        l.drawImage(a, c[0], c[1], c[2], c[3], e.x || 0, e.y || 0, e.width || c[2], e.height || c[3]);
                    }
                } else if (s.opacity = void 0 != e.alpha ? e.alpha : 1, (e === this.stage || e.clipChildren) && (s.overflow = "hidden"), a && a.src) {
                    s.backgroundImage = "url(" + a.src + ")";
                    var u = e.rectX || 0,
                        h = e.rectY || 0;
                    s.backgroundPosition = -u + "px " + -h + "px"
                }
                return p
            }
            return i.create({
                Extends: n,
                constructor: function (e) {
                    r.superclass.constructor.call(this, e)
                }, renderType: "dom",
                startDraw: function (t) {
                    var i = t.drawable = t.drawable || new a;
                    return i.domElement = i.domElement || e(t, i), !0
                }, draw: function (e) {
                    var t = e.parent,
                        i = e.drawable.domElement,
                        n = i.parentNode;
                    if (t) {
                        var a = t.drawable.domElement;
                        if (a != n && a.appendChild(i), !e.width && !e.height) {
                            var r = e.drawable.rect;
                            r && (r[2] || r[3]) && (e.width = r[2], e.height = r[3])
                        }
                    } else e !== this.stage || n || (i.style.overflow = "hidden", this.canvas.appendChild(i))
                }, transform: function (e) {
                    if (t.setElementStyleByView(e), e === this.stage) {
                        var i = this.canvas.style,
                            n = e._scaleX,
                            a = e._scaleY,
                            r = e.scaleX,
                            o = e.scaleY;
                        (!n && 1 != r || n && n != r) && (e._scaleX = r, i.width = r * e.width + "px"), (!a && 1 != o || a && a != o) && (e._scaleY = o, i.height = o * e.height + "px")
                    }
                }, remove: function (e) {
                    var t = e.drawable,
                        i = t && t.domElement;
                    if (i) {
                        var n = i.parentNode;
                        n && n.removeChild(i)
                    }
                }, hide: function (e) {
                    var t = e.drawable && e.drawable.domElement;
                    t && (t.style.display = "none")
                }, resize: function (e, t) {
                    var i = this.canvas.style;
                    i.width = e + "px", i.height = t + "px", "absolute" != i.position && (i.position = "relative")
                }
            })
        }();
    t.DOMRenderer = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.Renderer,
        a = t.Matrix,
        r = Math.PI / 180,
        o = i.create({
            Extends: n,
            Statics: {
                MAX_BATCH_NUM: 2e3,
                ATTRIBUTE_NUM: 5,
                isSupport: function () {
                    if (void 0 == this._isSupported) {
                        var e = document.createElement("canvas");
                        e.getContext && (e.getContext("webgl") || e.getContext("experimental-webgl")) ? this._isSupported = !0 : this._isSupported = !1
                    }
                    return this._isSupported
                }
            },
            renderType: "webgl",
            gl: null,
            _isContextLost: !1,
            _cacheTexture: {},
            constructor: function (e) {
                o.superclass.constructor.call(this, e);
                var t = this;
                this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
                this.maxBatchNum = o.MAX_BATCH_NUM, this.positionStride = 4 * o.ATTRIBUTE_NUM;
                var i = this.maxBatchNum * o.ATTRIBUTE_NUM * 4,
                    n = 6 * this.maxBatchNum;
                this.arrayBuffer = new ArrayBuffer(4 * i), this.float32Array = new Float32Array(this.arrayBuffer), this.uint32Array = new Uint32Array(this.arrayBuffer), this.indexs = new Uint16Array(n);
                for (var a = 0, r = 0; a < n; a += 6, r += 4) this.indexs[a + 0] = r + 0, this.indexs[a + 1] = r + 1, this.indexs[a + 2] = r + 2, this.indexs[a + 3] = r + 1, this.indexs[a + 4] = r + 2, this.indexs[a + 5] = r + 3;
                this.batchIndex = 0, this.sprites = [], this.canvas.addEventListener("webglcontextlost", function (e) {
                    t._isContextLost = !0, e.preventDefault()
                }, !1), this.canvas.addEventListener("webglcontextrestored", function (e) {
                    t._isContextLost = !1, t.setupWebGLStateAndResource()
                }, !1), this.setupWebGLStateAndResource()
            }, setupWebGLStateAndResource: function () {
                var e = this.gl;
                e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.clearColor(0, 0, 0, 0), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.enable(e.BLEND), this._cacheTexture = {}, this._initShaders(), this.defaultShader.active(), this.positionBuffer = e.createBuffer(), this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indexs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this.positionBuffer), e.bufferData(e.ARRAY_BUFFER, this.arrayBuffer, e.DYNAMIC_DRAW), e.vertexAttribPointer(this.a_position, 2, e.FLOAT, !1, this.positionStride, 0), e.vertexAttribPointer(this.a_TexCoord, 2, e.FLOAT, !1, this.positionStride, 8), e.vertexAttribPointer(this.a_tint, 4, e.UNSIGNED_BYTE, !0, this.positionStride, 16)
            }, context: null,
            startDraw: function (e) {
                return !!(e.visible && e.alpha > 0) && (e === this.stage && this.clear(), !0)
            }, draw: function (e) {
                var t = (this.context, e.width),
                    i = e.height,
                    n = (e.background, e.drawable),
                    a = n && n.image;
                if (a) {
                    var r = (this.gl, n.rect),
                        o = r[2],
                        p = r[3];
                    r[4], r[5];
                    t || i || (t = e.width = o, i = e.height = p), this.batchIndex >= this.maxBatchNum && this._renderBatches();
                    var s = this._createVertexs(a, r[0], r[1], o, p, 0, 0, t, i),
                        l = this.batchIndex * this.positionStride,
                        c = this.float32Array,
                        u = this.uint32Array,
                        h = (e.tint >> 16) + (65280 & e.tint) + ((255 & e.tint) << 16) + (255 * e.__webglRenderAlpha << 24);
                    c[l + 0] = s[0], c[l + 1] = s[1], c[l + 2] = s[2], c[l + 3] = s[3], u[l + 4] = h, c[l + 5] = s[4], c[l + 6] = s[5], c[l + 7] = s[6], c[l + 8] = s[7], u[l + 9] = h, c[l + 10] = s[8], c[l + 11] = s[9], c[l + 12] = s[10], c[l + 13] = s[11], u[l + 14] = h, c[l + 15] = s[12], c[l + 16] = s[13], c[l + 17] = s[14], c[l + 18] = s[15], u[l + 19] = h;
                    for (var d = e.__webglWorldMatrix, m = 0; m < 4; m++) {
                        var f = c[l + 5 * m],
                            _ = c[l + 5 * m + 1];
                        c[l + 5 * m] = d.a * f + d.c * _ + d.tx, c[l + 5 * m + 1] = d.b * f + d.d * _ + d.ty
                    }
                    e.__textureImage = a, this.sprites[this.batchIndex++] = e
                }
            }, endDraw: function (e) {
                e === this.stage && this._renderBatches()
            }, transform: function (e) {
                var i = e.drawable;
                if (i && i.domElement) return void t.setElementStyleByView(e);
                var n = (this.context, e.scaleX),
                    r = e.scaleY;
                if (e === this.stage) {
                    var o = this.canvas.style,
                        p = e._scaleX,
                        s = e._scaleY,
                        l = !1;
                    (!p && 1 != n || p && p != n) && (e._scaleX = n, o.width = n * e.width + "px", l = !0), (!s && 1 != r || s && s != r) && (e._scaleY = r, o.height = r * e.height + "px", l = !0), l && e.updateViewport(), e.__webglWorldMatrix = e.__webglWorldMatrix || new a(1, 0, 0, 1, 0, 0)
                } else e.parent && (e.__webglWorldMatrix = e.__webglWorldMatrix || new a(1, 0, 0, 1, 0, 0), this._setConcatenatedMatrix(e, e.parent));
                e.alpha > 0 && (e.parent && e.parent.__webglRenderAlpha ? e.__webglRenderAlpha = e.alpha * e.parent.__webglRenderAlpha : e.__webglRenderAlpha = e.alpha)
            }, remove: function (e) {
                var t = e.drawable,
                    i = t && t.domElement;
                if (i) {
                    var n = i.parentNode;
                    n && n.removeChild(i)
                }
            }, clear: function (e, t, i, n) {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT)
            }, resize: function (e, t) {
                if (this.width !== e || this.height !== t) {
                    var i = this.canvas,
                        n = this.stage,
                        a = i.style;
                    this.width = i.width = e, this.height = i.height = t, a.width = n.width * n.scaleX + "px", a.height = n.height * n.scaleY + "px", this.gl.viewport(0, 0, e, t), this.canvasHalfWidth = .5 * e, this.canvasHalfHeight = .5 * t, this._uploadProjectionTransform(!0)
                }
            }, _renderBatches: function () {
                var e = this.gl;
                e.bufferSubData(e.ARRAY_BUFFER, 0, this.uint32Array.subarray(0, this.batchIndex * this.positionStride));
                for (var t = 0, i = 0, n = null, a = 0; a < this.batchIndex; a++) {
                    var r = this.sprites[a];
                    n && n !== r.__textureImage && (this._renderBatch(t, a), t = a, i = 1), n = r.__textureImage
                }
                this._renderBatch(t, this.batchIndex), this.batchIndex = 0
            }, _renderBatch: function (e, t) {
                var i = this.gl,
                    n = t - e;
                n > 0 && (i.bindTexture(i.TEXTURE_2D, this._getTexture(this.sprites[e])), i.drawElements(i.TRIANGLES, 6 * n, i.UNSIGNED_SHORT, 6 * e * 2))
            }, _uploadProjectionTransform: function (e) {
                this._projectionTransformElements && !e || (this._projectionTransformElements = new Float32Array([1 / this.canvasHalfWidth, 0, 0, 0, -1 / this.canvasHalfHeight, 0, -1, 1, 1])), this.gl.uniformMatrix3fv(this.u_projectionTransform, !1, this._projectionTransformElements)
            }, _initShaders: function () {
                var e = "            attribute vec2 a_position;\n            attribute vec2 a_TexCoord;\n            attribute vec4 a_tint;\n            uniform mat3 u_projectionTransform;\n            varying vec2 v_TexCoord;\n            varying vec4 v_tint;\n            void main(){\n                gl_Position =  vec4((u_projectionTransform * vec3(a_position, 1.0)).xy, 1.0, 1.0);\n                v_TexCoord = a_TexCoord;\n                v_tint = vec4(a_tint.rgb * a_tint.a, a_tint.a);\n            }\n        ",
                    t = "\n            precision mediump float;\n            uniform sampler2D u_Sampler;\n            varying vec2 v_TexCoord;\n            varying vec4 v_tint;\n            void main(){\n                gl_FragColor = texture2D(u_Sampler, v_TexCoord) * v_tint;\n            }\n        ";
                this.defaultShader = new p(this, {
                    v: e,
                    f: t
                }, {
                    attributes: ["a_position", "a_TexCoord", "a_tint"],
                    uniforms: ["u_projectionTransform", "u_Sampler"]
                })
            }, _createVertexs: function (e, t, i, n, a, r, o, p, s) {
                var l = this.__tempVertexs || [],
                    c = e.width,
                    u = e.height;
                n /= c, a /= u, t /= c, i /= u, p = p, s = s, r = r, o = o, n + t > 1 && (n = 1 - t), a + i > 1 && (a = 1 - i);
                var h = 0;
                return l[h++] = r, l[h++] = o, l[h++] = t, l[h++] = i, l[h++] = r + p, l[h++] = o, l[h++] = t + n, l[h++] = i, l[h++] = r, l[h++] = o + s, l[h++] = t, l[h++] = i + a, l[h++] = r + p, l[h++] = o + s, l[h++] = t + n, l[h++] = i + a, l
            }, _setConcatenatedMatrix: function (e, t) {
                var i = e.__webglWorldMatrix,
                    n = 1,
                    a = 0,
                    o = e.rotation % 360,
                    p = e.pivotX,
                    s = e.pivotY,
                    l = e.scaleX,
                    c = e.scaleY;
                if (o) {
                    var u = o * r;
                    n = Math.cos(u), a = Math.sin(u)
                }
                i.a = n * l, i.b = a * l, i.c = -a * c, i.d = n * c, i.tx = e.x - i.a * p - i.c * s, i.ty = e.y - i.b * p - i.d * s, i.concat(t.__webglWorldMatrix)
            }, _getTexture: function (e) {
                var t = e.__textureImage,
                    i = this._cacheTexture[t.src];
                return i || (i = this.activeShader.uploadTexture(t)), i
            }
        }),
        p = function (e, t, i) {
            this.renderer = e, this.gl = e.gl, this.program = this._createProgram(this.gl, t.v, t.f), i = i || {}, this.attributes = i.attributes || [], this.uniforms = i.uniforms || []
        };
    p.prototype = {
        active: function () {
            var e = this,
                t = e.renderer,
                i = e.gl,
                n = e.program;
            n && i && (t.activeShader = e, i.useProgram(n), e.attributes.forEach(function (e) {
                t[e] = i.getAttribLocation(n, e), i.enableVertexAttribArray(t[e])
            }), e.uniforms.forEach(function (e) {
                t[e] = i.getUniformLocation(n, e)
            }), e.width === t.width && e.height === t.height || (e.width = t.width, e.height = t.height, t._uploadProjectionTransform()))
        }, uploadTexture: function (e) {
            var t = this.gl,
                i = this.renderer,
                n = t.createTexture(),
                a = i.u_Sampler;
            return t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.uniform1i(a, 0), t.bindTexture(t.TEXTURE_2D, null), this.renderer._cacheTexture[e.src] = n, n
        }, _createProgram: function (e, t, i) {
            var n = this._createShader(e, e.VERTEX_SHADER, t),
                a = this._createShader(e, e.FRAGMENT_SHADER, i);
            if (!n || !a) return null;
            var r = e.createProgram();
            if (r) {
                e.attachShader(r, n), e.attachShader(r, a), e.linkProgram(r), e.deleteShader(a), e.deleteShader(n);
                var o = e.getProgramParameter(r, e.LINK_STATUS);
                if (!o) {
                    var p = e.getProgramInfoLog(r);
                    return console.log("Failed to link program: " + p), e.deleteProgram(r), null
                }
            }
            return r
        }, _createShader: function (e, t, i) {
            var n = e.createShader(t);
            if (n) {
                e.shaderSource(n, i), e.compileShader(n);
                var a = e.getShaderParameter(n, e.COMPILE_STATUS);
                if (!a) {
                    var r = e.getShaderInfoLog(n);
                    return console.log("Failed to compile shader: " + r), e.deleteShader(n), null
                }
            }
            return n
        }
    }, t.WebGLRenderer = o
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.EventMixin,
        a = t.Matrix,
        r = function () {
            function e(e, t, i) {
                for (var n, a, r, o, p = 0, s = !1, l = 0, c = i.length; l < c; l++) {
                    var u = i[l],
                        h = i[(l + 1) % c];
                    if (u.y == h.y && t == u.y && (u.x > h.x ? (n = h.x, a = u.x) : (n = u.x, a = h.x), e >= n && e <= a)) s = !0;
                    else if (u.y > h.y ? (r = h.y, o = u.y) : (r = u.y, o = h.y), !(t < r || t > o)) {
                        var d = (t - u.y) * (h.x - u.x) / (h.y - u.y) + u.x;
                        if (d > e ? p++ : d == e && (s = !0), u.x > e && u.y == t) {
                            var m = i[(c + l - 1) % c];
                            (m.y < t && h.y > t || m.y > t && h.y < t) && p++
                        }
                    }
                }
                return s || p % 2 == 1
            }

            function r(e, t) {
                var i = o(e, t, {
                    overlap: -(1 / 0),
                    normal: {
                        x: 0,
                        y: 0
                    }
                });
                return !!i && o(t, e, i)
            }

            function o(e, t, i) {
                for (var n, a, r, o, p, s, l, c, u, h = e.length, d = t.length, m = {
                    x: 0,
                    y: 0
                }, f = 0; f < h; f++) {
                    n = e[f], a = e[f < h - 1 ? f + 1 : 0], m.x = n.y - a.y, m.y = a.x - n.x, r = Math.sqrt(m.x * m.x + m.y * m.y), m.x /= r, m.y /= r, o = p = e[0].x * m.x + e[0].y * m.y;
                    for (var _ = 1; _ < h; _++) c = e[_].x * m.x + e[_].y * m.y, c > p ? p = c : c < o && (o = c);
                    for (s = l = t[0].x * m.x + t[0].y * m.y, _ = 1; _ < d; _++) c = t[_].x * m.x + t[_].y * m.y, c > l ? l = c : c < s && (s = c);
                    if (o < s ? (u = s - p, m.x = -m.x, m.y = -m.y) : u = o - l, u >= 0) return !1;
                    u > i.overlap && (i.overlap = u, i.normal.x = m.x, i.normal.y = m.y)
                }
                return i
            }
            return i.create({
                Mixes: n,
                constructor: function (e) {
                    e = e || {}, this.id = this.id || e.id || t.getUid("View"), t.copy(this, e, !0)
                }, tint: 16777215,
                id: null,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                alpha: 1,
                rotation: 0,
                visible: !0,
                pivotX: 0,
                pivotY: 0,
                scaleX: 1,
                scaleY: 1,
                pointerEnabled: !0,
                background: null,
                mask: null,
                align: null,
                drawable: null,
                boundsArea: null,
                parent: null,
                depth: -1,
                getStage: function () {
                    for (var e, t = this; e = t.parent;) t = e;
                    return t.canvas ? t : null
                }, getScaledWidth: function () {
                    return this.width * this.scaleX
                }, getScaledHeight: function () {
                    return this.height * this.scaleY
                }, addTo: function (e, t) {
                    return "number" == typeof t ? e.addChildAt(this, t) : e.addChild(this), this
                }, removeFromParent: function () {
                    var e = this.parent;
                    return e && e.removeChild(this), this
                }, getBounds: function () {
                    for (var e, t, i, n, a, r, o, p = this.width, s = this.height, l = this.getConcatenatedMatrix(), c = this.boundsArea || [{
                        x: 0,
                        y: 0
                    }, {
                        x: p,
                        y: 0
                    }, {
                        x: p,
                        y: s
                    }, {
                        x: 0,
                        y: s
                    }], u = [], h = 0, d = c.length; h < d; h++) e = l.transformPoint(c[h], !0, !0), t = e.x, i = e.y, 0 == h ? (n = a = t, r = o = i) : (n > t ? n = t : a < t && (a = t), r > i ? r = i : o < i && (o = i)), u[h] = e;
                    return u.x = n, u.y = r, u.width = a - n, u.height = o - r, u
                }, getConcatenatedMatrix: function (e) {
                    for (var t = new a(1, 0, 0, 1, 0, 0), i = this; i != e && i.parent; i = i.parent) {
                        var n = 1,
                            r = 0,
                            o = i.rotation % 360,
                            p = i.pivotX,
                            s = i.pivotY,
                            l = i.scaleX,
                            c = i.scaleY;
                        if (o) {
                            var u = o * Math.PI / 180;
                            n = Math.cos(u), r = Math.sin(u)
                        }
                        0 != p && (t.tx -= p), 0 != s && (t.ty -= s), t.concat(n * l, r * l, -r * c, n * c, i.x, i.y)
                    }
                    return t
                }, hitTestPoint: function (t, i, n) {
                    var a = this.getBounds(),
                        r = t >= a.x && t <= a.x + a.width && i >= a.y && i <= a.y + a.height;
                    return r && n && (r = e(t, i, a)), r
                }, hitTestObject: function (e, t, i) {
                    var n = this.getBounds(),
                        a = e.getBounds(),
                        o = n.x <= a.x + a.width && a.x <= n.x + n.width && n.y <= a.y + a.height && a.y <= n.y + n.height;
                    return o && t && (o = r(n, a)), o && i ? {
                        isHited: !!o,
                        isX: n.x < a.x + a.width && a.x < n.x + n.width,
                        isY: n.y < a.y + a.height && a.y < n.y + n.height
                    } : !!o
                }, _render: function (e, t) {
                    this.onUpdate && this.onUpdate(t) === !1 || !e.startDraw(this) || (e.transform(this), this.render(e, t), e.endDraw(this))
                }, _fireMouseEvent: function (e) {
                    if (e.eventCurrentTarget = this, this.fire(e), "mousemove" == e.type) {
                        if (!this.__mouseOver) {
                            this.__mouseOver = !0;
                            var i = t.copy({}, e);
                            i.type = "mouseover", this.fire(i)
                        }
                    } else "mouseout" == e.type && (this.__mouseOver = !1);
                    var n = this.parent;
                    e._stopped || e._stopPropagationed || !n || ("mouseout" == e.type || "touchout" == e.type ? n.hitTestPoint(e.stageX, e.stageY, !0) || n._fireMouseEvent(e) : n._fireMouseEvent(e))
                }, onUpdate: null,
                render: function (e, t) {
                    e.draw(this)
                }, toString: function () {
                    return t.viewToString(this)
                }
            })
        }();
    t.View = r
}(window),
function (e) {
    var t = e.Hilo,
        i = (t.Class, t.Drawable),
        n = t.createElement("canvas"),
        a = n.getContext("2d"),
        r = {
            _cacheDirty: !0,
            cache: function (e) {
                (e || this._cacheDirty || !this._cacheImage) && this.updateCache()
            }, updateCache: function () {
                n.width = this.width, n.height = this.height, this._draw(a), this._cacheImage = new Image, this._cacheImage.src = n.toDataURL(), this.drawable = this.drawable || new i, this.drawable.init(this._cacheImage), this._cacheDirty = !1
            }, setCacheDirty: function (e) {
                this._cacheDirty = e
            }
        };
    t.CacheMixin = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("Container"), a.superclass.constructor.call(this, e), this.children ? this._updateChildren() : this.children = []
            }, children: null,
            pointerChildren: !0,
            clipChildren: !1,
            getNumChildren: function () {
                return this.children.length
            }, addChildAt: function (e, t) {
                var i = this.children,
                    n = i.length,
                    a = e.parent;
                t = t < 0 ? 0 : t > n ? n : t;
                var r = this.getChildIndex(e);
                if (r == t) return this;
                if (r >= 0 ? (i.splice(r, 1), t = t == n ? n - 1 : t) : a && a.removeChild(e), i.splice(t, 0, e), r < 0) this._updateChildren(t);
                else {
                    var o = r < t ? r : t,
                        p = r < t ? t : r;
                    this._updateChildren(o, p + 1)
                }
                return this
            }, addChild: function (e) {
                for (var t = this.children.length, i = arguments, n = 0, a = i.length; n < a; n++) this.addChildAt(i[n], t + n);
                return this
            }, removeChildAt: function (e) {
                var t = this.children;
                if (e < 0 || e >= t.length) return null;
                var i = t[e];
                if (i) {
                    if (!i.__renderer)
                        for (var n = i; n = n.parent;) {
                            if (n.renderer) {
                                i.__renderer = n.renderer;
                                break
                            }
                            if (n.__renderer) {
                                i.__renderer = n.__renderer;
                                break
                            }
                        }
                    i.__renderer && i.__renderer.remove(i), i.parent = null, i.depth = -1
                }
                return t.splice(e, 1), this._updateChildren(e), i
            }, removeChild: function (e) {
                return this.removeChildAt(this.getChildIndex(e))
            }, removeChildById: function (e) {
                for (var t, i = this.children, n = 0, a = i.length; n < a; n++)
                    if (t = i[n], t.id === e) return this.removeChildAt(n), t;
                return null
            }, removeAllChildren: function () {
                for (; this.children.length;) this.removeChildAt(0);
                return this
            }, getChildAt: function (e) {
                var t = this.children;
                return e < 0 || e >= t.length ? null : t[e]
            }, getChildById: function (e) {
                for (var t, i = this.children, n = 0, a = i.length; n < a; n++)
                    if (t = i[n], t.id === e) return t;
                return null
            }, getChildIndex: function (e) {
                return this.children.indexOf(e)
            }, setChildIndex: function (e, t) {
                var i = this.children,
                    n = i.indexOf(e);
                if (n >= 0 && n != t) {
                    var a = i.length;
                    t = t < 0 ? 0 : t >= a ? a - 1 : t, i.splice(n, 1), i.splice(t, 0, e), this._updateChildren()
                }
                return this
            }, swapChildren: function (e, t) {
                var i = this.children,
                    n = this.getChildIndex(e),
                    a = this.getChildIndex(t);
                e.depth = a, i[a] = e, t.depth = n, i[n] = t
            }, swapChildrenAt: function (e, t) {
                var i = this.children,
                    n = this.getChildAt(e),
                    a = this.getChildAt(t);
                n.depth = t, i[t] = n, a.depth = e, i[e] = a
            }, sortChildren: function (e) {
                var t = e,
                    i = this.children;
                if ("string" == typeof t) {
                    var n = t;
                    t = function (e, t) {
                        return t[n] - e[n]
                    }
                }
                i.sort(t), this._updateChildren()
            }, _updateChildren: function (e, t) {
                for (var i, n = this.children, e = e || 0, t = t || n.length, a = e; a < t; a++) i = n[a], i.depth = a + 1, i.parent = this
            }, contains: function (e) {
                for (; e = e.parent;)
                    if (e === this) return !0;
                return !1
            }, getViewAtPoint: function (e, t, i, n, a) {
                for (var r, o, p = n ? [] : null, s = this.children, l = s.length - 1; l >= 0; l--)
                    if (r = s[l], !(!r || !r.visible || r.alpha <= 0 || a && !r.pointerEnabled))
                        if (r.children && r.children.length && (!a || r.pointerChildren) && (o = r.getViewAtPoint(e, t, i, n, a)), o) {
                            if (!n) return o;
                            o.length && (p = p.concat(o))
                        } else if (r.hitTestPoint(e, t, i)) {
                    if (!n) return r;
                    p.push(r)
                }
                return n && p.length ? p : null
            }, render: function (e, t) {
                a.superclass.render.call(this, e, t);
                var i, n, r, o = this.children.slice(0);
                for (i = 0, n = o.length; i < n; i++) r = o[i], r.parent === this && r._render(e, t)
            }
        });
    t.Container = a
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.Container,
        a = t.CanvasRenderer,
        r = t.DOMRenderer,
        o = t.WebGLRenderer,
        p = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("Stage"), p.superclass.constructor.call(this, e), this._initRenderer(e);
                var i = this.width,
                    n = this.height,
                    a = this.updateViewport();
                e.width || (i = a && a.width || 320), e.height || (n = a && a.height || 480), this.resize(i, n, !0)
            }, canvas: null,
            renderer: null,
            paused: !1,
            viewport: null,
            _initRenderer: function (e) {
                var i = e.canvas,
                    n = e.container,
                    p = e.renderType || "canvas";
                if ("string" == typeof i && (i = t.getElement(i)), "string" == typeof n && (n = t.getElement(n)), i) i.getContext || (p = "dom");
                else {
                    var s = "dom" === p ? "div" : "canvas";
                    i = t.createElement(s, {
                        style: {
                            position: "absolute"
                        }
                    })
                }
                this.canvas = i, n && n.appendChild(i);
                var l = {
                    canvas: i,
                    stage: this
                };
                switch (p) {
                case "dom":
                    this.renderer = new r(l);
                    break;
                case "webgl":
                    o.isSupport() ? this.renderer = new o(l) : this.renderer = new a(l);
                    break;
                case "canvas":
                default:
                    this.renderer = new a(l)
                }
            }, addTo: function (e) {
                var t = this.canvas;
                return t.parentNode !== e && e.appendChild(t), this
            }, tick: function (e) {
                this.paused || this._render(this.renderer, e)
            }, enableDOMEvent: function (e, t) {
                for (var i = this, n = i.canvas, a = "string" == typeof e ? [e] : e, t = t !== !1, r = i._domListener || (i._domListener = function (e) {
                    i._onDOMEvent(e)
                }), o = 0; o < a.length; o++) {
                    var e = a[o];
                    t ? n.addEventListener(e, r, !1) : n.removeEventListener(e, r)
                }
                return i
            }, _onDOMEvent: function (e) {
                var i = e.type,
                    n = e,
                    a = 0 == i.indexOf("touch"),
                    r = e;
                if (a) {
                    var o = e.touches,
                        p = e.changedTouches;
                    r = o && o.length ? o[0] : p && p.length ? p[0] : null
                }
                var s = r.pageX || r.clientX,
                    l = r.pageY || r.clientY,
                    c = this.viewport || this.updateViewport();
                n.stageX = s = (s - c.left) / this.scaleX, n.stageY = l = (l - c.top) / this.scaleY, n.stopPropagation = function () {
                    this._stopPropagationed = !0
                };
                var u = this.getViewAtPoint(s, l, !0, !1, !0) || this,
                    h = this.canvas,
                    d = this._eventTarget,
                    m = "mouseout" === i;
                if (d && (d != u && (!d.contains || !d.contains(u)) || m)) {
                    var f = "touchmove" === i ? "touchout" : "mousemove" === i || m || !u ? "mouseout" : null;
                    if (f) {
                        var _ = t.copy({}, n);
                        _.type = f, _.eventTarget = d, d._fireMouseEvent(_)
                    }
                    n.lastEventTarget = d, this._eventTarget = null
                }
                if (u && u.pointerEnabled && "mouseout" !== i && (n.eventTarget = this._eventTarget = u, u._fireMouseEvent(n)), !a) {
                    var g = u && u.pointerEnabled && u.useHandCursor ? "pointer" : "";
                    h.style.cursor = g
                }
                t.browser.android && "touchmove" === i && e.preventDefault()
            }, updateViewport: function () {
                var e = this.canvas,
                    i = null;
                return e.parentNode && (i = this.viewport = t.getElementRect(e)), i
            }, resize: function (e, t, i) {
                (i || this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.renderer.resize(e, t), this.updateViewport())
            }
        });
    t.Stage = p
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.Drawable,
        r = i.create({
            Extends: n,
            constructor: function (e) {
                if (e = e || {}, this.id = this.id || e.id || t.getUid("Bitmap"), r.superclass.constructor.call(this, e), this.drawable = new a(e), !this.width || !this.height) {
                    var i = this.drawable.rect;
                    i && (this.width = i[2], this.height = i[3])
                }
            }, setImage: function (e, t) {
                if (this.drawable.init({
                    image: e,
                    rect: t
                }), t) this.width = t[2], this.height = t[3];
                else if (!this.width && !this.height) {
                    var t = this.drawable.rect;
                    t && (this.width = t[2], this.height = t[3])
                }
                return this
            }
        });
    t.Bitmap = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.Drawable,
        r = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("Sprite"), r.superclass.constructor.call(this, e), this._frames = [], this._frameNames = {}, this.drawable = new a, e.frames && this.addFrame(e.frames)
            }, _frames: null,
            _frameNames: null,
            _frameElapsed: 0,
            _firstRender: !0,
            paused: !1,
            loop: !0,
            timeBased: !1,
            interval: 1,
            currentFrame: 0,
            getNumFrames: function () {
                return this._frames ? this._frames.length : 0
            }, addFrame: function (e, t) {
                var i = null != t ? t : this._frames.length;
                if (e instanceof Array)
                    for (var n = 0, a = e.length; n < a; n++) this.setFrame(e[n], i + n);
                else this.setFrame(e, i);
                return this
            }, setFrame: function (e, t) {
                var i = this._frames,
                    n = i.length;
                return t = t < 0 ? 0 : t > n ? n : t, i[t] = e, e.name && (this._frameNames[e.name] = e), (0 != t || this.width) && this.height || (this.width = e.rect[2], this.height = e.rect[3]), this
            }, getFrame: function (e) {
                if ("number" == typeof e) {
                    var t = this._frames;
                    return e < 0 || e >= t.length ? null : t[e]
                }
                return this._frameNames[e]
            }, getFrameIndex: function (e) {
                var t = this._frames,
                    i = t.length,
                    n = -1;
                if ("number" == typeof e) n = e;
                else {
                    var a = "string" == typeof e ? this._frameNames[e] : e;
                    if (a)
                        for (var r = 0; r < i; r++)
                            if (a === t[r]) {
                                n = r;
                                break
                            }
                }
                return n
            }, play: function () {
                return this.paused = !1, this
            }, stop: function () {
                return this.paused = !0, this
            }, "goto": function (e, t) {
                var i = this._frames.length,
                    n = this.getFrameIndex(e);
                return this.currentFrame = n < 0 ? 0 : n >= i ? i - 1 : n, this.paused = t, this._firstRender = !0, this
            }, _render: function (e, t) {
                var i, n = this.currentFrame;
                if (this._firstRender ? (i = n, this._firstRender = !1) : i = this._nextFrame(t), i != n) {
                    this.currentFrame = i;
                    var a = this._frames[i].callback;
                    a && a.call(this)
                }
                this.onEnterFrame && this.onEnterFrame(i), this.drawable.init(this._frames[i]), r.superclass._render.call(this, e, t)
            }, _nextFrame: function (e) {
                var t = this._frames,
                    i = t.length,
                    n = this.currentFrame,
                    a = t[n],
                    r = a.duration || this.interval,
                    o = this._frameElapsed,
                    p = 0 != n || this.drawable ? o + (this.timeBased ? e : 1) : 0;
                return o = this._frameElapsed = p < r ? p : 0, (a.stop || !this.loop && n >= i - 1) && this.stop(), this.paused || 0 != o || (null != a.next ? n = this.getFrameIndex(a.next) : n >= i - 1 ? n = 0 : this.drawable && n++), n
            }, setFrameCallback: function (e, t) {
                return e = this.getFrame(e), e && (e.callback = t), this
            }, onEnterFrame: null
        });
    t.Sprite = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.Drawable,
        r = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("DOMElement"), r.superclass.constructor.call(this, e), this.drawable = new a;
                var i = this.drawable.domElement = e.element || t.createElement("div");
                i.id = this.id, this.pointerEnabled && (i.style.pointerEvents = "visible")
            }, _render: function (e, t) {
                this.onUpdate && this.onUpdate(t) === !1 || (e.transform(this), this.visible && this.alpha > 0 && this.render(e, t))
            }, render: function (e, t) {
                if ("dom" !== e.renderType) {
                    var i, n = e.canvas,
                        a = this.drawable.domElement,
                        r = this.depth,
                        o = n.nextSibling;
                    if (a.parentNode) return;
                    for (; o && 3 != o.nodeType && (i = parseInt(o.style.zIndex) || 0, !(i <= 0 || i > r));) o = o.nextSibling;
                    n.parentNode.insertBefore(this.drawable.domElement, o)
                } else e.draw(this)
            }
        });
    t.DOMElement = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.CacheMixin,
        r = function () {
            var e = document.createElement("canvas"),
                o = e.getContext && e.getContext("2d");
            return i.create({
                Extends: n,
                Mixes: a,
                constructor: function (e) {
                    e = e || {}, this.id = this.id || e.id || t.getUid("Graphics"), r.superclass.constructor.call(this, e), this._actions = []
                }, lineWidth: 1,
                lineAlpha: 1,
                lineCap: null,
                lineJoin: null,
                miterLimit: 10,
                hasStroke: !1,
                strokeStyle: "0",
                hasFill: !1,
                fillStyle: "0",
                fillAlpha: 0,
                lineStyle: function (e, t, i, n, a, r) {
                    var o = this,
                        p = o._addAction;
                    return p.call(o, ["lineWidth", o.lineWidth = e || 1]), p.call(o, ["strokeStyle", o.strokeStyle = t || "0"]), p.call(o, ["lineAlpha", o.lineAlpha = i || 1]), void 0 != n && p.call(o, ["lineCap", o.lineCap = n]), void 0 != a && p.call(o, ["lineJoin", o.lineJoin = a]), void 0 != r && p.call(o, ["miterLimit", o.miterLimit = r]), o.hasStroke = !0, o
                }, beginFill: function (e, t) {
                    var i = this,
                        n = i._addAction;
                    return n.call(i, ["fillStyle", i.fillStyle = e]), n.call(i, ["fillAlpha", i.fillAlpha = t || 1]), i.hasFill = !0, i
                }, endFill: function () {
                    var e = this,
                        t = e._addAction;
                    return e.hasStroke && t.call(e, ["stroke"]), e.hasFill && t.call(e, ["fill"]), e.setCacheDirty(!0), e
                }, beginLinearGradientFill: function (e, t, i, n, a, r) {
                    for (var p = this, s = o.createLinearGradient(e, t, i, n), l = 0, c = a.length; l < c; l++) s.addColorStop(r[l], a[l]);
                    return p.hasFill = !0, p._addAction(["fillStyle", p.fillStyle = s])
                }, beginRadialGradientFill: function (e, t, i, n, a, r, p, s) {
                    for (var l = this, c = o.createRadialGradient(e, t, i, n, a, r), u = 0, h = p.length; u < h; u++) c.addColorStop(s[u], p[u]);
                    return l.hasFill = !0, l._addAction(["fillStyle", l.fillStyle = c])
                }, beginBitmapFill: function (e, t) {
                    var i = this,
                        n = o.createPattern(e, t || "");
                    return i.hasFill = !0, i._addAction(["fillStyle", i.fillStyle = n])
                }, beginPath: function () {
                    return this._addAction(["beginPath"])
                }, closePath: function () {
                    return this._addAction(["closePath"])
                }, moveTo: function (e, t) {
                    return this._addAction(["moveTo", e, t])
                }, lineTo: function (e, t) {
                    return this._addAction(["lineTo", e, t])
                }, quadraticCurveTo: function (e, t, i, n) {
                    return this._addAction(["quadraticCurveTo", e, t, i, n])
                }, bezierCurveTo: function (e, t, i, n, a, r) {
                    return this._addAction(["bezierCurveTo", e, t, i, n, a, r])
                }, drawRect: function (e, t, i, n) {
                    return this._addAction(["rect", e, t, i, n])
                }, drawRoundRectComplex: function (e, t, i, n, a, r, o, p) {
                    var s = this,
                        l = s._addAction;
                    return l.call(s, ["moveTo", e + a, t]), l.call(s, ["lineTo", e + i - r, t]), l.call(s, ["arc", e + i - r, t + r, r, -Math.PI / 2, 0, !1]), l.call(s, ["lineTo", e + i, t + n - o]), l.call(s, ["arc", e + i - o, t + n - o, o, 0, Math.PI / 2, !1]), l.call(s, ["lineTo", e + p, t + n]), l.call(s, ["arc", e + p, t + n - p, p, Math.PI / 2, Math.PI, !1]), l.call(s, ["lineTo", e, t + a]), l.call(s, ["arc", e + a, t + a, a, Math.PI, 3 * Math.PI / 2, !1]), s
                }, drawRoundRect: function (e, t, i, n, a) {
                    return this.drawRoundRectComplex(e, t, i, n, a, a, a, a)
                }, drawCircle: function (e, t, i) {
                    return this._addAction(["arc", e + i, t + i, i, 0, 2 * Math.PI, 0])
                }, drawEllipse: function (e, t, i, n) {
                    var a = this;
                    if (i == n) return a.drawCircle(e, t, i);
                    var r = a._addAction,
                        o = i / 2,
                        p = n / 2,
                        s = .5522847498307933,
                        l = s * o,
                        c = s * p;
                    return e += o, t += p, r.call(a, ["moveTo", e + o, t]), r.call(a, ["bezierCurveTo", e + o, t - c, e + l, t - p, e, t - p]), r.call(a, ["bezierCurveTo", e - l, t - p, e - o, t - c, e - o, t]), r.call(a, ["bezierCurveTo", e - o, t + c, e - l, t + p, e, t + p]), r.call(a, ["bezierCurveTo", e + l, t + p, e + o, t + c, e + o, t]), a
                }, drawSVGPath: function (e) {
                    var t = this,
                        i = t._addAction,
                        n = e.split(/,| (?=[a-zA-Z])/);
                    i.call(t, ["beginPath"]);
                    for (var a = 0, r = n.length; a < r; a++) {
                        var o = n[a],
                            p = o[0].toUpperCase(),
                            s = o.substring(1).split(/,| /);
                        switch (0 == s[0].length && s.shift(), p) {
                        case "M":
                            i.call(t, ["moveTo", s[0], s[1]]);
                            break;
                        case "L":
                            i.call(t, ["lineTo", s[0], s[1]]);
                            break;
                        case "C":
                            i.call(t, ["bezierCurveTo", s[0], s[1], s[2], s[3], s[4], s[5]]);
                            break;
                        case "Z":
                            i.call(t, ["closePath"])
                        }
                    }
                    return t
                }, _draw: function (e) {
                    var t, i = this,
                        n = i._actions,
                        a = n.length;
                    for (e.beginPath(), t = 0; t < a; t++) {
                        var r = n[t],
                            o = r[0],
                            p = r.length > 1 ? r.slice(1) : null;
                        "function" == typeof e[o] ? e[o].apply(e, p) : e[o] = r[1]
                    }
                }, render: function (e, t) {
                    var i = this;
                    e.canvas;
                    "canvas" === e.renderType ? i._draw(e.context) : (i.cache(), e.draw(i))
                }, clear: function () {
                    var e = this;
                    return e._actions.length = 0, e.lineWidth = 1, e.lineAlpha = 1, e.lineCap = null, e.lineJoin = null, e.miterLimit = 10, e.hasStroke = !1, e.strokeStyle = "0", e.hasFill = !1, e.fillStyle = "0", e.fillAlpha = 1, e.setCacheDirty(!0), e
                }, _addAction: function (e) {
                    var t = this;
                    return t._actions.push(e), t
                }
            })
        }();
    t.Graphics = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.CacheMixin,
        r = i.create({
            Extends: n,
            Mixes: a,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("Text"), r.superclass.constructor.call(this, e), e.font || (this.font = "12px arial"), this._fontHeight = r.measureFontHeight(this.font)
            }, text: null,
            color: "#000",
            textAlign: null,
            textVAlign: null,
            outline: !1,
            lineSpacing: 0,
            maxWidth: 200,
            font: null,
            textWidth: 0,
            textHeight: 0,
            setFont: function (e) {
                var t = this;
                return t.font !== e && (t.font = e, t._fontHeight = r.measureFontHeight(e)), t
            }, render: function (e, t) {
                var i = this;
                e.canvas;
                if ("canvas" === e.renderType) i._draw(e.context);
                else if ("dom" === e.renderType) {
                    var n = i.drawable,
                        a = n.domElement,
                        r = a.style;
                    r.font = i.font, r.textAlign = i.textAlign, r.color = i.color, r.width = i.width + "px", r.height = i.height + "px", r.lineHeight = i._fontHeight + i.lineSpacing + "px", a.innerHTML = i.text, e.draw(this)
                } else i.cache(), e.draw(i)
            }, _draw: function (e) {
                var t = this,
                    i = t.text.toString();
                if (i) {
                    e.font = t.font, e.textAlign = t.textAlign, e.textBaseline = "top";
                    var n, a, r, o, p, s = i.split(/\r\n|\r|\n|<br(?:[ \/])*>/),
                        l = 0,
                        c = 0,
                        u = t._fontHeight + t.lineSpacing,
                        h = [];
                    for (n = 0, o = s.length; n < o; n++)
                        if (a = s[n], r = e.measureText(a).width, r <= t.maxWidth) h.push({
                            text: a,
                            y: c
                        }), l < r && (l = r), c += u;
                        else {
                            var d, m, f, _ = "",
                                g = 0;
                            for (m = 0, p = a.length; m < p; m++) f = a[m], d = e.measureText(_ + f).width, d > t.maxWidth ? (h.push({
                                text: _,
                                y: c
                            }), l < g && (l = g), c += u, _ = f) : (g = d, _ += f), m == p - 1 && (h.push({
                                text: _,
                                y: c
                            }), _ !== f && l < d && (l = d), c += u)
                        }
                    t.textWidth = l, t.textHeight = c, t.width || (t.width = l), t.height || (t.height = c);
                    var y = 0;
                    switch (t.textVAlign) {
                    case "middle":
                        y = t.height - t.textHeight >> 1;
                        break;
                    case "bottom":
                        y = t.height - t.textHeight
                    }
                    var v = t.background;
                    v && (e.fillStyle = v, e.fillRect(0, 0, t.width, t.height)), t.outline ? e.strokeStyle = t.color : e.fillStyle = t.color;
                    for (var n = 0; n < h.length; n++) {
                        var a = h[n];
                        t._drawTextLine(e, a.text, y + a.y)
                    }
                }
            }, _drawTextLine: function (e, t, i) {
                var n = this,
                    a = 0,
                    r = n.width;
                switch (n.textAlign) {
                case "center":
                    a = r >> 1;
                    break;
                case "right":
                case "end":
                    a = r
                }
                n.outline ? e.strokeText(t, a, i) : e.fillText(t, a, i)
            }, Statics: {
                measureFontHeight: function (e) {
                    var i, n = document.documentElement,
                        a = t.createElement("div", {
                            style: {
                                font: e,
                                position: "absolute"
                            },
                            innerHTML: "M"
                        });
                    return n.appendChild(a), i = a.offsetHeight, n.removeChild(a), i
                }
            }
        });
    t.Text = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.Container,
        a = t.Bitmap,
        r = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("BitmapText"), r.superclass.constructor.call(this, e);
                var i = e.text + "";
                i && (this.text = "", this.setText(i)), this.pointerChildren = !1
            }, glyphs: null,
            letterSpacing: 0,
            text: "",
            textAlign: "left",
            setText: function (e) {
                var t = this,
                    i = e.toString(),
                    n = i.length;
                if (t.text != i) {
                    t.text = i;
                    var a, r, o, p, s = 0,
                        l = 0,
                        c = 0;
                    for (a = 0; a < n; a++) r = i.charAt(a), o = t.glyphs[r], o && (c = s + (s > 0 ? t.letterSpacing : 0), t.children[a] ? (p = t.children[a], p.setImage(o.image, o.rect)) : (p = t._createBitmap(o), t.addChild(p)), p.x = c, s = c + o.rect[2], l = Math.max(l, o.rect[3]));
                    for (a = t.children.length - 1; a >= n; a--) t._releaseBitmap(t.children[a]), t.children[a].removeFromParent();
                    return t.width = s, t.height = l, this.setTextAlign(), t
                }
            }, _createBitmap: function (e) {
                var t;
                return r._pool.length ? (t = r._pool.pop(), t.setImage(e.image, e.rect)) : t = new a({
                    image: e.image,
                    rect: e.rect
                }), t
            }, _releaseBitmap: function (e) {
                r._pool.push(e)
            }, setTextAlign: function (e) {
                switch (this.textAlign = e || this.textAlign, this.textAlign) {
                case "center":
                    this.pivotX = .5 * this.width;
                    break;
                case "right":
                    this.pivotX = this.width;
                    break;
                case "left":
                default:
                    this.pivotX = 0
                }
                return this
            }, hasGlyphs: function (e) {
                var t = this.glyphs;
                if (!t) return !1;
                var i, e = e.toString(),
                    n = e.length;
                for (i = 0; i < n; i++)
                    if (!t[e.charAt(i)]) return !1;
                return !0
            }, Statics: {
                _pool: [],
                createGlyphs: function (e, t, i, n) {
                    var a = e.toString();
                    i = i || a.length, n = n || 1;
                    for (var r = t.width / i, o = t.height / n, p = {}, s = 0, l = e.length; s < l; s++) charStr = a.charAt(s), p[charStr] = {
                        image: t,
                        rect: [r * (s % i), o * Math.floor(s / i), r, o]
                    };
                    return p
                }
            }
        });
    t.BitmapText = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.Drawable,
        r = i.create({
            Extends: n,
            constructor: function (e) {
                e = e || {}, this.id = this.id || e.id || t.getUid("Button"), r.superclass.constructor.call(this, e), this.drawable = new a(e), this.setState(r.UP)
            }, upState: null,
            overState: null,
            downState: null,
            disabledState: null,
            state: null,
            enabled: !0,
            useHandCursor: !0,
            setEnabled: function (e) {
                return this.enabled != e && (e ? this.setState(r.UP) : this.setState(r.DISABLED)), this
            }, setState: function (e) {
                if (this.state !== e) {
                    this.state = e, this.pointerEnabled = this.enabled = e !== r.DISABLED;
                    var i;
                    switch (e) {
                    case r.UP:
                        i = this.upState;
                        break;
                    case r.OVER:
                        i = this.overState;
                        break;
                    case r.DOWN:
                        i = this.downState;
                        break;
                    case r.DISABLED:
                        i = this.disabledState
                    }
                    i && (this.drawable.init(i), t.copy(this, i, !0))
                }
                return this
            }, fire: function (e, t) {
                if (this.enabled) {
                    var i = "string" == typeof e ? e : e.type;
                    switch (i) {
                    case "mousedown":
                    case "touchstart":
                    case "touchmove":
                        this.setState(r.DOWN);
                        break;
                    case "mouseover":
                        this.setState(r.OVER);
                        break;
                    case "mouseup":
                        this.overState ? this.setState(r.OVER) : this.upState && this.setState(r.UP);
                        break;
                    case "touchend":
                    case "touchout":
                    case "mouseout":
                        this.setState(r.UP)
                    }
                    return r.superclass.fire.call(this, e, t)
                }
            }, Statics: {
                UP: "up",
                OVER: "over",
                DOWN: "down",
                DISABLED: "disabled"
            }
        });
    t.Button = r
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = function () {
            function e(e) {
                var t = e.frames;
                if (!t) return null;
                var i, n = [];
                if (t instanceof Array)
                    for (var a = 0, r = t.length; a < r; a++) i = t[a], n[a] = {
                        image: e.image,
                        rect: i
                    };
                else
                    for (var o = t.frameWidth, p = t.frameHeight, s = e.width / o | 0, l = e.height / p | 0, c = t.numFrames || s * l, a = 0; a < c; a++) n[a] = {
                        image: e.image,
                        rect: [a % s * o, (a / s | 0) * p, o, p]
                    };
                return n
            }

            function t(e, t) {
                var i = e.sprites;
                if (!i) return null;
                var r, o, p, s = {};
                for (var l in i) {
                    if (r = i[l], a(r)) o = n(t[r]);
                    else if (r instanceof Array) {
                        o = [];
                        for (var c = 0, u = r.length; c < u; c++) {
                            var h, d = r[c];
                            a(d) ? p = n(t[d]) : (h = d.rect, a(h) && (h = t[d.rect]), p = n(h, d)), o[c] = p
                        }
                    } else {
                        o = [];
                        for (var c = r.from; c <= r.to; c++) o[c - r.from] = n(t[c], r[c])
                    }
                    s[l] = o
                }
                return s
            }

            function n(e, t) {
                var i = {
                    image: e.image,
                    rect: e.rect
                };
                return t && (i.name = t.name || null, i.duration = t.duration || 0, i.stop = !!t.stop, i.next = t.next || null), i
            }

            function a(e) {
                return "number" == typeof e
            }
            return i.create({
                constructor: function (i) {
                    this._frames = e(i), this._sprites = t(i, this._frames)
                }, _frames: null,
                _sprites: null,
                getFrame: function (e) {
                    var t = this._frames;
                    return t && t[e]
                }, getSprite: function (e) {
                    var t = this._sprites;
                    return t && t[e]
                }, Statics: {
                    createSpriteFrames: function (e, t, i, n, a, r, o) {
                        if ("[object Array]" === Object.prototype.toString.call(e)) {
                            for (var t = [], p = 0, s = e.length; p < s; p++) t = t.concat(this.createSpriteFrames.apply(this, e[p]));
                            return t
                        }
                        if ("string" == typeof t) {
                            var l = t.split(",");
                            t = [];
                            for (var c = 0, u = l.length; c < u; c++) {
                                var h = l[c].split("-");
                                if (1 == h.length) t.push(parseInt(h[0]));
                                else
                                    for (var p = parseInt(h[0]), s = parseInt(h[1]); p <= s; p++) t.push(p)
                            }
                        }
                        for (var d = Math.floor(i.width / n), p = 0; p < t.length; p++) {
                            var m = t[p];
                            t[p] = {
                                rect: [n * (m % d), a * Math.floor(m / d), n, a],
                                image: i,
                                duration: o
                            }
                        }
                        return t[0].name = e, r ? t[t.length - 1].next = e : t[t.length - 1].stop = !0, t
                    }
                }
            })
        }();
    t.TextureAtlas = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            constructor: function (e) {
                this._targetFPS = e || 30, this._interval = 1e3 / this._targetFPS, this._tickers = []
            }, _paused: !1,
            _targetFPS: 0,
            _interval: 0,
            _intervalId: null,
            _tickers: null,
            _lastTime: 0,
            _tickCount: 0,
            _tickTime: 0,
            _measuredFPS: 0,
            start: function (i) {
                if (!this._intervalId) {
                    this._lastTime = +new Date;
                    var n = this,
                        a = this._interval,
                        r = e.requestAnimationFrame || e[t.browser.jsVendor + "RequestAnimationFrame"];
                    if (i && r) var o = function () {
                            n._tick()
                        },
                        p = function () {
                            n._intervalId = setTimeout(p, a), r(o)
                        };
                    else p = function () {
                        n._intervalId = setTimeout(p, a), n._tick()
                    };
                    p()
                }
            }, stop: function () {
                clearTimeout(this._intervalId), this._intervalId = null, this._lastTime = 0
            }, pause: function () {
                this._paused = !0
            }, resume: function () {
                this._paused = !1
            }, _tick: function () {
                if (!this._paused) {
                    var e = +new Date,
                        t = e - this._lastTime,
                        i = this._tickers;
                    ++this._tickCount >= this._targetFPS ? (this._measuredFPS = 1e3 / (this._tickTime / this._tickCount) + .5 >> 0, this._tickCount = 0, this._tickTime = 0) : this._tickTime += e - this._lastTime, this._lastTime = e;
                    for (var n = i.slice(0), a = 0, r = n.length; a < r; a++) n[a].tick(t)
                }
            }, getMeasuredFPS: function () {
                return this._measuredFPS
            }, addTick: function (e) {
                if (!e || "function" != typeof e.tick) throw new Error("Ticker: The tick object must implement the tick method.");
                this._tickers.push(e)
            }, removeTick: function (e) {
                var t = this._tickers,
                    i = t.indexOf(e);
                i >= 0 && t.splice(i, 1)
            }, nextTick: function (e) {
                var t = this,
                    i = {
                        tick: function (n) {
                            t.removeTick(i), e()
                        }
                    };
                return t.addTick(i), i
            }, timeout: function (e, t) {
                var i = this,
                    n = (new Date).getTime() + t,
                    a = {
                        tick: function () {
                            var t = (new Date).getTime(),
                                r = t - n;
                            r >= 0 && (i.removeTick(a), e())
                        }
                    };
                return i.addTick(a), a
            }, interval: function (e, t) {
                var i = this,
                    n = (new Date).getTime() + t,
                    a = {
                        tick: function () {
                            var i = (new Date).getTime(),
                                a = i - n;
                            a >= 0 && (a < t && (i -= a), n = i + t, e())
                        }
                    };
                return i.addTick(a), a
            }
        });
    t.Ticker = n
}(window),
function (e) {
    var t = e.Hilo,
        i = Array.prototype,
        n = i.slice;
    i.indexOf = i.indexOf || function (e, t) {
        t = t || 0;
        var i, n = this.length;
        if (0 == n || t >= n) return -1;
        for (t < 0 && (t = n + t), i = t; i < n; i++)
            if (this[i] === e) return i;
        return -1
    };
    var a = Function.prototype;
    a.bind = a.bind || function (e) {
        function t() {
            var r = a.concat(n.call(arguments));
            return i.apply(this instanceof t ? this : e, r)
        }
        var i = this,
            a = n.call(arguments, 1),
            r = function () {};
        return r.prototype = i.prototype, t.prototype = new r, t
    }, t.undefined = void 0
}(window),
function (e) {
    var t = e.Hilo,
        i = (t.Class, {
            startDrag: function (e) {
                function i(e) {
                    e.stopPropagation(), r(e), s.off(t.event.POINTER_START, i), s.fire("dragStart", l), s.__dragX = s.x - l.x, s.__dragY = s.y - l.y, p || (p = this.getStage()), p.on(t.event.POINTER_MOVE, a), document.addEventListener(t.event.POINTER_END, n)
                }

                function n(e) {
                    document.removeEventListener(t.event.POINTER_END, n), p && p.off(t.event.POINTER_MOVE, a), s.fire("dragEnd", l), s.on(t.event.POINTER_START, i)
                }

                function a(e) {
                    r(e), s.fire("dragMove", l);
                    var t = l.x + s.__dragX,
                        i = l.y + s.__dragY;
                    s.x = Math.max(c, Math.min(h, t)), s.y = Math.max(u, Math.min(d, i))
                }

                function r(e) {
                    l.preX = l.x, l.preY = l.y, l.x = e.stageX, l.y = e.stageY
                }

                function o() {
                    document.removeEventListener(t.event.POINTER_END, n), p && p.off(t.event.POINTER_MOVE, a), s.off(t.event.POINTER_START, i)
                }
                var p, s = this,
                    e = e || [-(1 / 0), -(1 / 0), 1 / 0, 1 / 0],
                    l = {
                        x: 0,
                        y: 0,
                        preX: 0,
                        preY: 0
                    },
                    c = e[0],
                    u = e[1],
                    h = e[2] == 1 / 0 ? 1 / 0 : c + e[2],
                    d = e[3] == 1 / 0 ? 1 / 0 : u + e[3];
                s.on(t.event.POINTER_START, i), s.stopDrag = o
            }, stopDrag: function () {}
        });
    t.drag = i
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = function () {
            function e() {
                return +new Date
            }
            return i.create({
                constructor: function (e, t, i, n) {
                    var a = this;
                    a.target = e, a._startTime = 0, a._seekTime = 0, a._pausedTime = 0, a._pausedStartTime = 0, a._reverseFlag = 1, a._repeatCount = 0, 3 == arguments.length && (n = i, i = t, t = null);
                    for (var r in n) a[r] = n[r];
                    a.setProps(t, i), !n.duration && n.time && (a.duration = n.time || 0, a.time = 0)
                }, target: null,
                duration: 0,
                delay: 0,
                paused: !1,
                loop: !1,
                reverse: !1,
                repeat: 0,
                repeatDelay: 0,
                ease: null,
                time: 0,
                onStart: null,
                onUpdate: null,
                onComplete: null,
                setProps: function (e, t) {
                    var i = this,
                        n = i.target,
                        a = e || t,
                        r = i._fromProps = {},
                        o = i._toProps = {};
                    e = e || n, t = t || n;
                    for (var p in a) o[p] = t[p] || 0, n[p] = r[p] = e[p] || 0;
                    return i
                }, start: function () {
                    var t = this;
                    return t._startTime = e() + t.delay, t._seekTime = 0, t._pausedTime = 0, t.paused = !1, n.add(t), t
                }, stop: function () {
                    return n.remove(this), this
                }, pause: function () {
                    var t = this;
                    return t.paused = !0, t._pausedStartTime = e(), t
                }, resume: function () {
                    var t = this;
                    return t.paused = !1, t._pausedStartTime && (t._pausedTime += e() - t._pausedStartTime), t._pausedStartTime = 0, t
                }, seek: function (t, i) {
                    var a = this,
                        r = e();
                    return a._startTime = r, a._seekTime = t, a._pausedTime = 0, void 0 !== i && (a.paused = i), a._update(r, !0), n.add(a), a
                }, link: function (e) {
                    var t = this,
                        i = e.delay,
                        a = t._startTime;
                    if ("string" == typeof i) {
                        var r = 0 == i.indexOf("+"),
                            o = 0 == i.indexOf("-");
                        i = r || o ? Number(i.substr(1)) * (r ? 1 : -1) : Number(i)
                    }
                    return e.delay = i, e._startTime = r || o ? a + t.duration + i : a + i, t._next = e, n.remove(e), t
                }, _render: function (e) {
                    var t, i = this,
                        n = i.target,
                        a = i._fromProps;
                    for (t in a) n[t] = a[t] + (i._toProps[t] - a[t]) * e
                }, _update: function (t, i) {
                    var a = this;
                    if (!a.paused || i) {
                        var r = t - a._startTime - a._pausedTime + a._seekTime;
                        if (!(r < 0)) {
                            var o, p = r / a.duration,
                                s = !1;
                            p = p <= 0 ? 0 : p >= 1 ? 1 : a.ease ? a.ease(p) : p, a.reverse && (a._reverseFlag < 0 && (p = 1 - p), p < 1e-7 && (a.repeat > 0 && a._repeatCount++ >= a.repeat || 0 == a.repeat && !a.loop ? s = !0 : (a._startTime = e(), a._pausedTime = 0, a._reverseFlag *= -1))), 0 == a.time && (o = a.onStart) && o.call(a, a), a.time = r, a._render(p), (o = a.onUpdate) && o.call(a, p, a), p >= 1 && (a.reverse ? (a._startTime = e(), a._pausedTime = 0, a._reverseFlag *= -1) : a.loop || a.repeat > 0 && a._repeatCount++ < a.repeat ? (a._startTime = e() + a.repeatDelay, a._pausedTime = 0) : s = !0);
                            var l = a._next;
                            if (l && l.time <= 0) {
                                var c = l._startTime;
                                c > 0 && c <= t ? (l._render(p), l.time = r, n.add(l)) : s && (c < 0 || c > t) && l.start()
                            }
                            return s ? ((o = a.onComplete) && o.call(a, a), !0) : void 0
                        }
                    }
                }, Statics: {
                    _tweens: [],
                    tick: function () {
                        var t, i, a = n._tweens,
                            r = a.length;
                        for (i = 0; i < r; i++) t = a[i], t && t._update(e()) && (a.splice(i, 1), i--);
                        return n
                    }, add: function (e) {
                        var t = n._tweens;
                        return t.indexOf(e) == -1 && t.push(e), n
                    }, remove: function (e) {
                        if (e instanceof Array) {
                            for (var t = 0, i = e.length; t < i; t++) n.remove(e[t]);
                            return n
                        }
                        var t, a = n._tweens;
                        if (e instanceof n) t = a.indexOf(e), t > -1 && a.splice(t, 1);
                        else
                            for (t = 0; t < a.length; t++) a[t].target === e && (a.splice(t, 1), t--);
                        return n
                    }, removeAll: function () {
                        return n._tweens.length = 0, n
                    }, fromTo: function (e, t, i, a) {
                        var r = e instanceof Array;
                        e = r ? e : [e];
                        var o, p, s = a.stagger,
                            l = [];
                        for (p = 0; p < e.length; p++) o = new n(e[p], t, i, a), s && (o.delay = (a.delay || 0) + (p * s || 0)), o.start(), l.push(o);
                        return r ? l : o
                    }, to: function (e, t, i) {
                        return n.fromTo(e, null, t, i)
                    }, from: function (e, t, i) {
                        return n.fromTo(e, t, null, i)
                    }
                }
            })
        }();
    t.Tween = n
}(window),
function (e) {
    var t = e.Hilo,
        i = function () {
            function e(e, t, i, n, a) {
                return e = e || {}, t && (e.EaseIn = t), i && (e.EaseOut = i), n && (e.EaseInOut = n), a && (e.EaseNone = a), e
            }
            var t = e(null, null, null, null, function (e) {
                    return e
                }),
                i = e(null, function (e) {
                    return e * e
                }, function (e) {
                    return -e * (e - 2)
                }, function (e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }),
                n = e(null, function (e) {
                    return e * e * e
                }, function (e) {
                    return --e * e * e + 1
                }, function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }),
                a = e(null, function (e) {
                    return e * e * e * e
                }, function (e) {
                    return -(--e * e * e * e - 1)
                }, function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }),
                r = e(null, function (e) {
                    return e * e * e * e * e
                }, function (e) {
                    return (e -= 1) * e * e * e * e + 1
                }, function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }),
                o = Math,
                p = o.PI,
                s = .5 * p,
                l = o.sin,
                c = o.cos,
                u = o.pow,
                h = o.sqrt,
                d = e(null, function (e) {
                    return -c(e * s) + 1
                }, function (e) {
                    return l(e * s)
                }, function (e) {
                    return -.5 * (c(p * e) - 1)
                }),
                m = e(null, function (e) {
                    return 0 == e ? 0 : u(2, 10 * (e - 1))
                }, function (e) {
                    return 1 == e ? 1 : -u(2, -10 * e) + 1
                }, function (e) {
                    return 0 == e || 1 == e ? e : (e *= 2) < 1 ? .5 * u(2, 10 * (e - 1)) : .5 * (-u(2, -10 * (e - 1)) + 2)
                }),
                f = e(null, function (e) {
                    return -(h(1 - e * e) - 1)
                }, function (e) {
                    return h(1 - --e * e)
                }, function (e) {
                    return (e /= .5) < 1 ? -.5 * (h(1 - e * e) - 1) : .5 * (h(1 - (e -= 2) * e) + 1)
                }),
                _ = e({
                    a: 1,
                    p: .4,
                    s: .1,
                    config: function (e, t) {
                        _.a = e, _.p = t, _.s = t / (2 * p) * Math.asin(1 / e) || 0
                    }
                }, function (e) {
                    return -(_.a * u(2, 10 * (e -= 1)) * l((e - _.s) * (2 * p) / _.p))
                }, function (e) {
                    return _.a * u(2, -10 * e) * l((e - _.s) * (2 * p) / _.p) + 1
                }, function (e) {
                    return (e *= 2) < 1 ? -.5 * (_.a * u(2, 10 * (e -= 1)) * l((e - _.s) * (2 * p) / _.p)) : _.a * u(2, -10 * (e -= 1)) * l((e - _.s) * (2 * p) / _.p) * .5 + 1
                }),
                g = e({
                    o: 1.70158,
                    s: 2.59491,
                    config: function (e) {
                        g.o = e, g.s = 1.525 * e
                    }
                }, function (e) {
                    return e * e * ((g.o + 1) * e - g.o)
                }, function (e) {
                    return (e -= 1) * e * ((g.o + 1) * e + g.o) + 1
                }, function (e) {
                    return (e *= 2) < 1 ? .5 * (e * e * ((g.s + 1) * e - g.s)) : .5 * ((e -= 2) * e * ((g.s + 1) * e + g.s) + 2)
                }),
                y = e(null, function (e) {
                    return 1 - y.EaseOut(1 - e)
                }, function (e) {
                    return (e /= 1) < .36364 ? 7.5625 * e * e : e < .72727 ? 7.5625 * (e -= .54545) * e + .75 : e < .90909 ? 7.5625 * (e -= .81818) * e + .9375 : 7.5625 * (e -= .95455) * e + .984375
                }, function (e) {
                    return e < .5 ? .5 * y.EaseIn(2 * e) : .5 * y.EaseOut(2 * e - 1) + .5
                });
            return {
                Linear: t,
                Quad: i,
                Cubic: n,
                Quart: a,
                Quint: r,
                Sine: d,
                Expo: m,
                Circ: f,
                Elastic: _,
                Back: g,
                Bounce: y
            }
        }();
    t.Ease = i
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            load: function (e) {
                var t = this,
                    i = new Image;
                e.crossOrigin && (i.crossOrigin = e.crossOrigin), i.onload = function () {
                    t.onLoad(i)
                }, i.onerror = i.onabort = t.onError.bind(i), i.src = e.src + (e.noCache ? (e.src.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date : "")
            }, onLoad: function (t) {
                t = t || e.event;
                var i = t;
                return i.onload = i.onerror = i.onabort = null, i
            }, onError: function (e) {
                var t = e.target;
                return t.onload = t.onerror = t.onabort = null, e
            }
        });
    t.ImageLoader = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            load: function (t) {
                var i = this,
                    a = t.src,
                    r = "jsonp" == t.type;
                if (r) {
                    var o = t.callbackName || "callback",
                        p = t.callback || "jsonp" + ++n._count,
                        s = e;
                    s[p] || (s[p] = function (e) {
                        delete s[p]
                    })
                }
                r && (a += (a.indexOf("?") == -1 ? "?" : "&") + o + "=" + p), t.noCache && (a += (a.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date);
                var l = document.createElement("script");
                l.type = "text/javascript", l.async = !0, l.onload = i.onLoad.bind(i), l.onerror = i.onError.bind(i), l.src = a, t.id && (l.id = t.id), document.getElementsByTagName("head")[0].appendChild(l)
            }, onLoad: function (e) {
                var t = e.target;
                return t.onload = t.onerror = null, t
            }, onError: function (e) {
                var t = e.target;
                return t.onload = t.onerror = null, e
            }, Statics: {
                _count: 0
            }
        });
    t.ScriptLoader = n
}(window),
function (e) {
    function t(e) {
        var t, i, n = /\/?[^\/]+\.(\w+)(\?\S+)?$/i;
        return (t = e.match(n)) && (i = t[1].toLowerCase()), i || null
    }
    var i = e.Hilo,
        n = i.Class,
        a = i.EventMixin,
        r = i.ImageLoader,
        o = i.ScriptLoader,
        p = n.create({
            Mixes: a,
            constructor: function (e) {
                this._source = [], this.add(e)
            }, maxConnections: 2,
            _source: null,
            _loaded: 0,
            _connections: 0,
            _currentIndex: -1,
            add: function (e) {
                var t = this;
                return e && (e = e instanceof Array ? e : [e], t._source = t._source.concat(e)), t
            }, get: function (e) {
                if (e)
                    for (var t = this._source, i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (n.id === e || n.src === e) return n
                    }
                return null
            }, getContent: function (e) {
                var t = this.get(e);
                return t && t.content
            }, start: function () {
                var e = this;
                return e._loadNext(), e
            }, _loadNext: function () {
                var e = this,
                    t = e._source,
                    i = t.length;
                if (e._loaded >= i) return void e.fire("complete");
                if (e._currentIndex < i - 1 && e._connections < e.maxConnections) {
                    var n = ++e._currentIndex,
                        a = t[n],
                        r = e._getLoader(a);
                    if (r) {
                        var o = r.onLoad,
                            p = r.onError;
                        r.onLoad = function (t) {
                            r.onLoad = o, r.onError = p;
                            var i = o && o.call(r, t) || t.target;
                            e._onItemLoad(n, i)
                        }, r.onError = function (t) {
                            r.onLoad = o, r.onError = p, p && p.call(r, t), e._onItemError(n, t)
                        }, e._connections++
                    }
                    e._loadNext(), r && r.load(a)
                }
            }, _getLoader: function (e) {
                var i = e.loader;
                if (i) return i;
                var n = e.type || t(e.src);
                switch (n) {
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                    i = new r;
                    break;
                case "js":
                case "jsonp":
                    i = new o
                }
                return i
            }, _onItemLoad: function (e, t) {
                var i = this,
                    n = i._source[e];
                n.loaded = !0, n.content = t, i._connections--, i._loaded++, i.fire("load", n), i._loadNext()
            }, _onItemError: function (e, t) {
                var i = this,
                    n = i._source[e];
                n.error = t, i._connections--, i._loaded++, i.fire("error", n), i._loadNext()
            }, getSize: function (e) {
                for (var t = 0, i = this._source, n = 0; n < i.length; n++) {
                    var a = i[n];
                    t += (e ? a.loaded && a.size : a.size) || 0
                }
                return t
            }, getLoaded: function () {
                return this._loaded
            }, getTotal: function () {
                return this._source.length
            }
        });
    i.LoadQueue = p
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.EventMixin,
        a = i.create({
            Mixes: n,
            constructor: function (e) {
                t.copy(this, e, !0), this._onAudioEvent = this._onAudioEvent.bind(this)
            }, src: null,
            loop: !1,
            autoPlay: !1,
            loaded: !1,
            playing: !1,
            duration: 0,
            volume: 1,
            muted: !1,
            _element: null,
            load: function () {
                if (!this._element) try {
                    var e = this._element = new Audio;
                    e.addEventListener("canplaythrough", this._onAudioEvent, !1), e.addEventListener("ended", this._onAudioEvent, !1), e.addEventListener("error", this._onAudioEvent, !1), e.src = this.src, e.volume = this.volume, e.load()
                } catch (t) {
                    var e = this._element = {};
                    e.play = e.pause = function () {}
                }
                return this
            }, _onAudioEvent: function (e) {
                var t = e.type;
                switch (t) {
                case "canplaythrough":
                    e.target.removeEventListener(t, this._onAudioEvent), this.loaded = !0, this.duration = this._element.duration, this.fire("load"), this.autoPlay && this._doPlay();
                    break;
                case "ended":
                    this.playing = !1, this.fire("end"), this.loop && this._doPlay();
                    break;
                case "error":
                    this.fire("error")
                }
            }, _doPlay: function () {
                this.playing || (this._element.volume = this.muted ? 0 : this.volume, this._element.play(), this.playing = !0)
            }, play: function () {
                return this.playing && this.stop(), this._element ? this.loaded && this._doPlay() : (this.autoPlay = !0, this.load()), this
            }, pause: function () {
                return this.playing && (this._element.pause(), this.playing = !1), this
            }, resume: function () {
                return this.playing || this._doPlay(), this
            }, stop: function () {
                return this.playing && (this._element.pause(), this._element.currentTime = 0, this.playing = !1), this
            }, setVolume: function (e) {
                return this.volume != e && (this.volume = e, this._element.volume = e), this
            }, setMute: function (e) {
                return this.muted != e && (this.muted = e, this._element.volume = e ? 0 : this.volume), this
            }, Statics: {
                isSupported: null !== e.Audio
            }
        });
    t.HTMLAudio = a
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.EventMixin,
        a = function () {
            var r = e.AudioContext || e.webkitAudioContext,
                o = r ? new r : null;
            return i.create({
                Mixes: n,
                constructor: function (e) {
                    t.copy(this, e, !0), this._init()
                }, src: null,
                loop: !1,
                autoPlay: !1,
                loaded: !1,
                playing: !1,
                duration: 0,
                volume: 1,
                muted: !1,
                _context: null,
                _gainNode: null,
                _buffer: null,
                _audioNode: null,
                _startTime: 0,
                _offset: 0,
                _init: function () {
                    this._context = o, this._gainNode = o.createGain ? o.createGain() : o.createGainNode(), this._gainNode.connect(o.destination), this._onAudioEvent = this._onAudioEvent.bind(this), this._onDecodeComplete = this._onDecodeComplete.bind(this), this._onDecodeError = this._onDecodeError.bind(this)
                }, load: function () {
                    if (!this._buffer) {
                        var e = a._bufferCache[this.src];
                        if (e) this._onDecodeComplete(e);
                        else {
                            var t = new XMLHttpRequest;
                            t.src = this.src, t.open("GET", this.src, !0), t.responseType = "arraybuffer", t.onload = this._onAudioEvent, t.onprogress = this._onAudioEvent, t.onerror = this._onAudioEvent, t.send()
                        }
                        this._buffer = !0
                    }
                    return this
                }, _onAudioEvent: function (e) {
                    var t = e.type;
                    switch (t) {
                    case "load":
                        var i = e.target;
                        i.onload = i.onprogress = i.onerror = null, this._context.decodeAudioData(i.response, this._onDecodeComplete, this._onDecodeError), i = null;
                        break;
                    case "ended":
                        this.playing = !1, this.fire("end"), this.loop && this._doPlay();
                        break;
                    case "progress":
                        this.fire(e);
                        break;
                    case "error":
                        this.fire(e)
                    }
                }, _onDecodeComplete: function (e) {
                    a._bufferCache[this.src] || (a._bufferCache[this.src] = e), this._buffer = e, this.loaded = !0, this.duration = e.duration, this.fire("load"), this.autoPlay && this._doPlay()
                }, _onDecodeError: function () {
                    this.fire("error")
                }, _doPlay: function () {
                    this._clearAudioNode();
                    var e = this._context.createBufferSource();
                    e.start || (e.start = e.noteOn, e.stop = e.noteOff), e.buffer = this._buffer, e.onended = this._onAudioEvent, this._gainNode.gain.value = this.muted ? 0 : this.volume, e.connect(this._gainNode), e.start(0, this._offset), this._audioNode = e, this._startTime = this._context.currentTime, this.playing = !0
                }, _clearAudioNode: function () {
                    var e = this._audioNode;
                    e && (e.onended = null, e.disconnect(0), this._audioNode = null)
                }, play: function () {
                    return this.playing && this.stop(), this.loaded ? this._doPlay() : this._buffer || (this.autoPlay = !0, this.load()), this
                }, pause: function () {
                    return this.playing && (this._audioNode.stop(0), this._offset += this._context.currentTime - this._startTime, this.playing = !1), this
                }, resume: function () {
                    return this.playing || this._doPlay(), this
                }, stop: function () {
                    return this.playing && (this._audioNode.stop(0), this._audioNode.disconnect(), this._offset = 0, this.playing = !1), this
                }, setVolume: function (e) {
                    return this.volume != e && (this.volume = e, this._gainNode.gain.value = e), this
                }, setMute: function (e) {
                    return this.muted != e && (this.muted = e, this._gainNode.gain.value = e ? 0 : this.volume), this
                }, Statics: {
                    isSupported: null != r,
                    enabled: !1,
                    enable: function () {
                        if (!this.enabled && o) {
                            var e = o.createBufferSource();
                            return e.buffer = o.createBuffer(1, 1, 22050), e.connect(o.destination), e.start ? e.start(0, 0, 0) : e.noteOn(0, 0, 0), this.enabled = !0, !0
                        }
                        return this.enabled
                    }, _bufferCache: {}, clearBufferCache: function (e) {
                        e ? this._bufferCache[e] = null : this._bufferCache = {}
                    }
                }
            })
        }();
    t.WebAudio = a
}(window),
function (e) {
    var t = e.Hilo,
        i = t.HTMLAudio,
        n = t.WebAudio,
        a = {
            _audios: {},
            enableAudio: function () {
                n.isSupported && n.enable()
            }, getAudio: function (e) {
                e = this._normalizeSource(e);
                var t = this._audios[e.src];
                return t || (n.isSupported ? t = new n(e) : i.isSupported && (t = new i(e)), this._audios[e.src] = t), t
            }, removeAudio: function (e) {
                var t = "string" == typeof e ? e : e.src,
                    i = this._audios[t];
                i && (i.stop(), i.off(), this._audios[t] = null, delete this._audios[t])
            }, _normalizeSource: function (e) {
                var i = {};
                return "string" == typeof e ? i = {
                    src: e
                } : t.copy(i, e), i
            }
        };
    t.WebSound = a
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = i.create({
            constructor: function (e) {
                this.width = 0, this.height = 0, this.target = null, this.deadzone = null, this.bounds = null, this.scroll = {
                    x: 0,
                    y: 0
                }, t.copy(this, e)
            }, tick: function (e) {
                var t = this.target,
                    i = this.scroll,
                    n = this.bounds,
                    a = this.deadzone;
                if (t) {
                    var r, o;
                    a ? (r = Math.min(Math.max(t.x - i.x, a[0]), a[0] + a[2]), o = Math.min(Math.max(t.y - i.y, a[1]), a[1] + a[3])) : (r = .5 * this.width, o = .5 * this.height), i.x = t.x - r, i.y = t.y - o, n && (i.x = Math.min(Math.max(i.x, n[0]), n[0] + n[2]), i.y = Math.min(Math.max(i.y, n[1]), n[1] + n[3]))
                } else i.x = 0, i.y = 0
            }, follow: function (e, t) {
                this.target = e, void 0 !== t && (this.deadzone = t), this.tick()
            }
        });
    t.Camera = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = function () {
            function e(e, t, i, n, a) {
                return {
                    x: e,
                    y: t * n - i * a,
                    z: t * a + i * n
                }
            }

            function n(e, t, i, n, a) {
                return {
                    x: e * n - i * a,
                    y: t,
                    z: e * a + i * n
                }
            }

            function a(e, t, i, n, a) {
                return {
                    x: e * n - t * a,
                    y: e * a + t * n,
                    z: i
                }
            }
            var r = Math.PI / 180,
                o = i.create({
                    constructor: function (e) {
                        e.x = e.x || 0, e.y = e.y || 0, e.z = e.z || 0, e.rotationX = e.rotationX || 0, e.rotationY = e.rotationY || 0, e.rotationZ = e.rotationZ || 0, t.copy(this, e)
                    }, translate: function (e, t, i) {
                        this.tx = e, this.ty = t, this.tz = i
                    }, rotateX: function (e) {
                        this.rotationX = e
                    }, rotateY: function (e) {
                        this.rotationY = e
                    }, rotateZ: function (e) {
                        this.rotationZ = e
                    }, project: function (t, i) {
                        var o = this.rotationX * r,
                            p = this.rotationY * r,
                            s = this.rotationZ * r,
                            l = Math.cos(o),
                            c = Math.sin(o),
                            u = Math.cos(p),
                            h = Math.sin(p),
                            d = Math.cos(s),
                            m = Math.sin(s),
                            f = t.x - this.x,
                            _ = t.y - this.y,
                            g = t.z - this.z,
                            y = a(f, _, g, d, m);
                        y = n(y.x, y.y, y.z, u, h), y = e(y.x, y.y, y.z, l, c), this.tx && (y.x -= this.tx), this.ty && (y.y -= this.ty), this.tz && (y.z -= this.tz);
                        var v = this.fv / (this.fv + y.z),
                            x = y.x * v,
                            w = -y.y * v,
                            b = {
                                x: x + this.fx,
                                y: w + this.fy,
                                z: -y.z,
                                scale: v
                            };
                        return i && (i.x = b.x, i.y = b.y, i.z = b.z, i.scaleX = b.scale, i.scaleY = b.scale), b
                    }, sortZ: function () {
                        this.stage.children.sort(function (e, t) {
                            return e.z > t.z
                        })
                    }, tick: function () {
                        this.sortZ()
                    }
                });
            return o
        }();
    t.Camera3d = n
}(window),
function (e) {
    var t = e.Hilo,
        i = t.Class,
        n = t.View,
        a = t.Container,
        r = (t.Bitmap, t.Drawable),
        o = function () {
            function e(e, t) {
                return t ? e + 2 * (Math.random() - .5) * t : e
            }
            for (var o = ["x", "y", "vx", "vy", "ax", "ay", "rotation", "rotationV", "scale", "scaleV", "alpha", "alphaV", "life"], p = [], s = 0, l = o.length; s < l; s++) {
                var c = o[s];
                p.push(c), p.push(c + "Var")
            }
            var u = {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    ax: 0,
                    ay: 0,
                    scale: 1,
                    scaleV: 0,
                    alpha: 1,
                    alphaV: 0,
                    rotation: 0,
                    rotationV: 0,
                    life: 1
                },
                h = [],
                d = i.create({
                    Extends: a,
                    constructor: function f(e) {
                        this.id = this.id || e.id || t.getUid("ParticleSystem"), this.emitterX = 0, this.emitterY = 0, this.gx = 0, this.gy = 0, this.totalTime = 1 / 0, this.emitNum = 10, this.emitNumVar = 0, this.emitTime = .2, this.emitTimeVar = 0, this.particle = {}, f.superclass.constructor.call(this, e), this.reset(e)
                    }, Statics: {
                        PROPS: p,
                        PROPS_DEFAULT: u,
                        diedParticles: h
                    }, reset: function (e) {
                        t.copy(this, e), this.particle.system = this, this.totalTime <= 0 && (this.totalTime = 1 / 0)
                    }, onUpdate: function (t) {
                        t *= .001, this._isRun && (this._totalRunTime += t, this._currentRunTime += t, this._currentRunTime >= this._emitTime && (this._currentRunTime = 0, this._emitTime = e(this.emitTime, this.emitTimeVar), this._emit()), this._totalRunTime >= this.totalTime && this.stop())
                    }, _emit: function () {
                        for (var t = e(this.emitNum, this.emitNumVar) >> 0, i = 0; i < t; i++) this.addChild(m.create(this.particle))
                    }, start: function () {
                        this.stop(!0), this._currentRunTime = 0, this._totalRunTime = 0, this._isRun = !0, this._emitTime = e(this.emitTime, this.emitTimeVar)
                    }, stop: function (e) {
                        if (this._isRun = !1, e)
                            for (var t = this.children.length - 1; t >= 0; t--) this.children[t].destroy()
                    }
                }),
                m = i.create({
                    Extends: n,
                    constructor: function _(e) {
                        this.id = this.id || e.id || t.getUid("Particle"), _.superclass.constructor.call(this, e), this.init(e)
                    }, onUpdate: function (e) {
                        if (e *= .001, this._died) return !1;
                        var t = this.ax + this.system.gx,
                            i = this.ay + this.system.gy;
                        return this.vx += t * e, this.vy += i * e, this.x += this.vx * e, this.y += this.vy * e, this.rotation += this.rotationV, this._time > .1 && (this.alpha += this.alphaV), this.scale += this.scaleV, this.scaleX = this.scaleY = this.scale, this._time += e, this._time >= this.life || this.alpha <= 0 ? (this.destroy(), !1) : void 0
                    }, setImage: function (e, t) {
                        this.drawable = this.drawable || new r;
                        var t = t || [0, 0, e.width, e.height];
                        this.width = t[2], this.height = t[3], this.drawable.rect = t, this.drawable.image = e
                    }, destroy: function () {
                        this._died = !0, this.alpha = 0, this.removeFromParent(), h.push(this)
                    }, init: function (t) {
                        this.system = t.system, this._died = !1, this._time = 0, this.alpha = 1;
                        for (var i = 0, n = p.length; i < n; i++) {
                            var a = p[i],
                                r = void 0 === t[a] ? u[a] : t[a];
                            this[a] = e(r, t[a + "Var"])
                        }
                        if (this.x += this.system.emitterX, this.y += this.system.emitterY, t.image) {
                            var o = t.frame;
                            o && o[0].length && (o = o[Math.random() * o.length >> 0]), this.setImage(t.image, o), void 0 !== t.pivotX && (this.pivotX = t.pivotX * o[2]), void 0 !== t.pivotY && (this.pivotY = t.pivotY * o[3])
                        }
                    }, Statics: {
                        create: function (e) {
                            if (h.length > 0) {
                                var t = h.pop();
                                return t.init(e), t
                            }
                            return new m(e)
                        }
                    }
                });
            return d
        }();
    t.ParticleSystem = o
}(window),
function () {
    "use strict";

    function e() {
        t(), i(), n(), a()
    }

    function t() {
        r = $("#common-landscape"), o = $("#common-pc"), p = $("#common-share"), s = $(".common-container")
    }

    function i() {
        var e = function () {
            switch (window.orientation) {
            case 0:
            case 180:
                r.hide();
                break;
            case -90:
            case 90:
                r.show()
            }
        };
        e(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", e, !1)
    }

    function n() {
        $.os.phone || $.os.tablet || (new QRCode(o.children()[0]).makeCode(location.href), $("body").children().hide(), o.show())
    }

    function a() {
        window.NewsAppShare = {
            shareData: {
                title: "",
                desc: "",
                img_url: "",
                link: ""
            },
            update: function (e) {
                for (var t in e) this.shareData.hasOwnProperty(t) && (this.shareData[t] = e[t]);
                document.getElementById("__newsapp_sharetext").innerHTML = this.shareData.title + " " + this.shareData.link, document.getElementById("__newsapp_sharephotourl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxtitle").innerHTML = this.shareData.title, document.getElementById("__newsapp_sharewxtext").innerHTML = this.shareData.desc, document.getElementById("__newsapp_sharewxthumburl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxurl").innerHTML = this.shareData.link
            }, show: function () {
                NewsAppClient.isNewsApp() ? NewsAppClient.share() : (p.fadeIn(300), setTimeout(function () {
                    p.fadeOut(300)
                }, 2e3))
            }, getAbsPath: function (e) {
                if (e) {
                    var t = document.createElement("a");
                    return t.href = e, t.href
                }
                var i = new RegExp(/(\?|#).*/);
                return location.href.replace(i, "")
            }
        };
        var e = ["https://c.m.163.com/nc/qa/activity/dada_protection/index.html", "https://c.m.163.com/nc/qa/activity/protection2018/index.html", "https://c.m.163.com/nc/qa/activity/dada_zibai/index.html", "https://c.m.163.com/nc/qa/activity/zibai2018/index.html"],
            t = e[parseInt(Math.random() * e.length)];
        NewsAppShare.update({
            title: "她挣扎48小时后死去，无人知晓",
            desc: "你也是这个故事的主角。",
            img_url: "http://cms-bucket.nosdn.127.net/2018/09/10/565cc5ce96804f408442c2a39fb3609d.jpeg",
            link: NTESAntAnalysis.getShareLink(t)
        }), document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.on("menu:share:timeline", function () {
                WeixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function (e) {
                    window.NTESAntAnalysis && NTESAntAnalysis.sendData({
                        projectid: window.NTESAntProjectid,
                        val_nm: "share",
                        val_act: "sharedone",
                        info: {
                            modelid: window.NTESProjectid,
                            title: document.title
                        }
                    }), window.neteaseAnalysis && neteaseAnalysis({
                        modelid: window.NTESProjectid,
                        spst: 1,
                        share: "timeline"
                    })
                })
            }), WeixinJSBridge.on("menu:share:appmessage", function () {
                WeixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function (e) {
                    window.NTESAntAnalysis && NTESAntAnalysis.sendData({
                        projectid: window.NTESAntProjectid,
                        val_nm: "share",
                        val_act: "sharedone",
                        info: {
                            modelid: window.NTESProjectid,
                            title: document.title
                        }
                    }), window.neteaseAnalysis && neteaseAnalysis({
                        modelid: window.NTESProjectid,
                        spst: 1,
                        share: "appmessage"
                    })
                })
            })
        }, !1), document.addEventListener("YixinJSBridgeReady", function () {
            YixinJSBridge.on("menu:share:timeline", function () {
                YixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function () {})
            }), YixinJSBridge.on("menu:share:appmessage", function () {
                YixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function () {})
            })
        }, !1)
    }
    var r, o, p, s;
    $(e)
}(),
function () {
    "use strict";

    function e() {
        var e = 750,
            t = window.innerHeight > 1334 ? 1334 : window.innerHeight,
            i = $("#app"),
            n = i[0],
            a = null,
            r = null,
            o = !1,
            p = [{
                id: "z0_m1",
                start: 590,
                end: 3750
            }, {
                id: "z1_m1",
                start: 7600
            }, {
                id: "z1_m3",
                start: 8100
            }, {
                id: "z1_m2"
            }, {
                id: "z3_m1",
                start: 21800
            }, {
                id: "z3_m2",
                start: 18500
            }, {
                id: "z3_m3",
                start: 15800
            }, {
                id: "z3_m4",
                start: 14100
            }, {
                id: "z4_m1",
                start: 22e3
            }, {
                id: "z5_m1",
                start: 25e3
            }, {
                id: "z5_m2",
                start: 26e3
            }, {
                id: "z6_m1",
                start: 28e3
            }, {
                id: "z7_m1",
                start: 33800
            }, {
                id: "z7_m2",
                start: 33500
            }, {
                id: "z9_m1",
                start: 39e3
            }, {
                id: "z9_m2",
                start: 39700
            }, {
                id: "z9_m3",
                start: 40200
            }, {
                id: "z10_m1",
                start: 42800
            }, {
                id: "z12_m1",
                start: 57400
            }, {
                id: "z10_m2",
                start: 35300,
                end: 99999
            }, {
                id: "z10_m3",
                start: 4500,
                end: 35e3
            }],
            s = "//static.ws.126.net/163/f2e/news/dada_protection/",
            l = [{
                id: "p9_text2",
                src: s + "img/p9_text2.png"
            }, {
                id: "p0",
                src: s + "img/p0.png"
            }, {
                id: "p1_face",
                src: s + "img/p1_face.jpg"
            }, {
                id: "p1_text",
                src: s + "img/p1_text.png"
            }, {
                id: "p1_eye1",
                src: s + "img/p1_eye1.png"
            }, {
                id: "p1_eye2",
                src: s + "img/p1_eye2.png"
            }, {
                id: "p1_sprite",
                src: s + "img/p1_sprite.png"
            }, {
                id: "p1_tears",
                src: s + "img/p1_tears.png"
            }, {
                id: "p2_bg1",
                src: s + "img/p1_bg.png"
            }, {
                id: "p2_bg2",
                src: s + "img/p1_bg2.png"
            }, {
                id: "p2_m1",
                src: s + "img/p2_m1.jpg"
            }, {
                id: "p2_m2",
                src: s + "img/p2_m2.jpg"
            }, {
                id: "p2_m3",
                src: s + "img/p2_m3.jpg"
            }, {
                id: "p2_m4",
                src: s + "img/p2_m4.jpg"
            }, {
                id: "p2_monster",
                src: s + "img/p2_monster.png"
            }, {
                id: "p2_weapon",
                src: s + "img/p2_weapon.png"
            }, {
                id: "p2_girl2",
                src: s + "img/p2_girl2.png"
            }, {
                id: "p2_girl3",
                src: s + "img/p2_girl3.png"
            }, {
                id: "p2_girl2_4",
                src: s + "img/p2_girl4.png"
            }, {
                id: "p2_fire0",
                src: s + "img/huo_00088.jpg"
            }, {
                id: "p2_fire1",
                src: s + "img/huo_00090.jpg"
            }, {
                id: "p2_fire2",
                src: s + "img/huo_00091.jpg"
            }, {
                id: "p2_fire3",
                src: s + "img/huo_00092.jpg"
            }, {
                id: "p2_fire4",
                src: s + "img/huo_00093.jpg"
            }, {
                id: "p2_fire5",
                src: s + "img/huo_00094.jpg"
            }, {
                id: "p2_fire6",
                src: s + "img/huo_00095.jpg"
            }, {
                id: "p2_fire7",
                src: s + "img/huo_00096.jpg"
            }, {
                id: "p2_fire8",
                src: s + "img/huo_00097.jpg"
            }, {
                id: "p2_fire9",
                src: s + "img/huo_00098.jpg"
            }, {
                id: "p2_fire10",
                src: s + "img/huo_00099.jpg"
            }, {
                id: "p2_fire11",
                src: s + "img/huo_00100.jpg"
            }, {
                id: "p2_fire12",
                src: s + "img/huo_00101.jpg"
            }, {
                id: "p2_fire13",
                src: s + "img/huo_00102.jpg"
            }, {
                id: "p2_fire14",
                src: s + "img/huo_00103.jpg"
            }, {
                id: "p2_fire15",
                src: s + "img/huo_00104.jpg"
            }, {
                id: "p2_fire16",
                src: s + "img/huo_00105.jpg"
            }, {
                id: "p2_fire17",
                src: s + "img/huo_00106.jpg"
            }, {
                id: "p2_fire18",
                src: s + "img/huo_00107.jpg"
            }, {
                id: "p2_fire19",
                src: s + "img/huo_00108.jpg"
            }, {
                id: "p2_fire20",
                src: s + "img/huo_00109.jpg"
            }, {
                id: "p2_fire21",
                src: s + "img/huo_00110.jpg"
            }, {
                id: "p2_fire22",
                src: s + "img/huo_00111.jpg"
            }, {
                id: "p2_fire23",
                src: s + "img/huo_00112.jpg"
            }, {
                id: "p2_fire24",
                src: s + "img/huo_00113.jpg"
            }, {
                id: "p2_fire25",
                src: s + "img/huo_00114.jpg"
            }, {
                id: "p2_fire26",
                src: s + "img/huo_00115.jpg"
            }, {
                id: "p2_fire27",
                src: s + "img/huo_00116.jpg"
            }, {
                id: "p2_fire28",
                src: s + "img/huo_00117.jpg"
            }, {
                id: "p2_fire29",
                src: s + "img/huo_00118.jpg"
            }, {
                id: "p2_fire30",
                src: s + "img/huo_00119.jpg"
            }, {
                id: "p2_fire31",
                src: s + "img/huo_00120.jpg"
            }, {
                id: "p2_fire32",
                src: s + "img/huo_00121.jpg"
            }, {
                id: "p2_fire33",
                src: s + "img/huo_00122.jpg"
            }, {
                id: "p2_fire34",
                src: s + "img/huo_00123.jpg"
            }, {
                id: "p2_fire35",
                src: s + "img/huo_00124.jpg"
            }, {
                id: "p2_fire36",
                src: s + "img/huo_00125.jpg"
            }, {
                id: "p2_fire37",
                src: s + "img/huo_00126.jpg"
            }, {
                id: "p2_fire38",
                src: s + "img/huo_00127.jpg"
            }, {
                id: "p3_clouds",
                src: s + "img/p3_clouds.png"
            }, {
                id: "p3_bg",
                src: s + "img/p3_bg.png"
            }, {
                id: "p3_people",
                src: s + "img/p3_people.png"
            }, {
                id: "p4_bg",
                src: s + "img/p4_bg.jpg"
            }, {
                id: "p4_craft0",
                src: s + "img/fengzheng_00000.png"
            }, {
                id: "p4_craft2",
                src: s + "img/fengzheng_00002.png"
            }, {
                id: "p4_craft4",
                src: s + "img/fengzheng_00004.png"
            }, {
                id: "p4_craft6",
                src: s + "img/fengzheng_00006.png"
            }, {
                id: "p4_craft8",
                src: s + "img/fengzheng_00008.png"
            }, {
                id: "p4_craft10",
                src: s + "img/fengzheng_00010.png"
            }, {
                id: "p4_craft12",
                src: s + "img/fengzheng_00012.png"
            }, {
                id: "p4_craft14",
                src: s + "img/fengzheng_00014.png"
            }, {
                id: "p4_craft16",
                src: s + "img/fengzheng_00016.png"
            }, {
                id: "p4_craft18",
                src: s + "img/fengzheng_00018.png"
            }, {
                id: "p4_craft20",
                src: s + "img/fengzheng_00020.png"
            }, {
                id: "p4_craft22",
                src: s + "img/fengzheng_00022.png"
            }, {
                id: "p4_craft24",
                src: s + "img/fengzheng_00024.png"
            }, {
                id: "p4_people1",
                src: s + "img/p4_people1.png"
            }, {
                id: "p4_people2",
                src: s + "img/p4_people2.png"
            }, {
                id: "p4_mon1",
                src: s + "img/p4_mon1.jpg"
            }, {
                id: "p4_mon2",
                src: s + "img/p4_mon2.jpg"
            }, {
                id: "p4_mon3",
                src: s + "img/p4_mon3.jpg"
            }, {
                id: "p4_mon4",
                src: s + "img/p4_mon4.jpg"
            }, {
                id: "p4_mon5",
                src: s + "img/p4_mon5.jpg"
            }, {
                id: "p4_mon6",
                src: s + "img/p4_mon6.jpg"
            }, {
                id: "p4_mon7",
                src: s + "img/p4_mon7.png"
            }, {
                id: "p4_bg2",
                src: s + "img/p4_bg2.png"
            }, {
                id: "p4_paper",
                src: s + "img/p4_paper.png"
            }, {
                id: "p4_mon8",
                src: s + "img/p4_mon8.png"
            }, {
                id: "p5_bg",
                src: s + "img/p5_bg.png"
            }, {
                id: "p5_mon1",
                src: s + "img/p5_mon1.png"
            }, {
                id: "p5_mon2",
                src: s + "img/p5_mon2.png"
            }, {
                id: "p5_mon3",
                src: s + "img/p5_mon3.png"
            }, {
                id: "p5_mon4",
                src: s + "img/p5_mon4.png"
            }, {
                id: "p5_window",
                src: s + "img/p5_window.png"
            }, {
                id: "p5_m0",
                src: s + "img/p5_m0.png"
            }, {
                id: "p5_m1",
                src: s + "img/p5_m1.png"
            }, {
                id: "p5_m2",
                src: s + "img/p5_m2.png"
            }, {
                id: "p5_m3",
                src: s + "img/p5_m3.png"
            }, {
                id: "p5_text",
                src: s + "img/p5_text.png"
            }, {
                id: "p6_f0",
                src: s + "img/p6_f0.png"
            }, {
                id: "p6_f1",
                src: s + "img/p6_f1.png"
            }, {
                id: "p6_fork",
                src: s + "img/p6_fork.png"
            }, {
                id: "p6_m",
                src: s + "img/p6_m.png"
            }, {
                id: "p7_bg",
                src: s + "img/p7_bg.png"
            }, {
                id: "p7_line",
                src: s + "img/p7_line.png"
            }, {
                id: "p7_mon1",
                src: s + "img/p7_mon1.png"
            }, {
                id: "p7_person",
                src: s + "img/p7_person.png"
            }, {
                id: "p7_person1",
                src: s + "img/p7_person1.png"
            }, {
                id: "p8_bg1",
                src: s + "img/p8_bg1.png"
            }, {
                id: "p8_bg2",
                src: s + "img/p8_bg2.png"
            }, {
                id: "p8_bg3",
                src: s + "img/p8_bg3.png"
            }, {
                id: "p8_text1",
                src: s + "img/p8_text1.png"
            }, {
                id: "p8_text2",
                src: s + "img/p8_text2.png?3"
            }, {
                id: "p8_text3",
                src: s + "img/p8_text3.png"
            }, {
                id: "p8_text4",
                src: s + "img/p8_text4.png"
            }, {
                id: "p8_cloud",
                src: s + "img/p8_cloud.png"
            }, {
                id: "p8_ship",
                src: s + "img/p8_ship.png"
            }, {
                id: "p8_blood",
                src: s + "img/p8_blood.png"
            }, {
                id: "p8_blood2",
                src: s + "img/p8_blood2.png"
            }, {
                id: "p8_fish",
                src: s + "img/p8_fish.png"
            }, {
                id: "p8_gs1",
                src: s + "img/gs1.png"
            }, {
                id: "p8_gs2",
                src: s + "img/gs2.png"
            }, {
                id: "p8_gs3",
                src: s + "img/gs3.png"
            }, {
                id: "p8_gs4",
                src: s + "img/gs4.png"
            }, {
                id: "p8_gs5",
                src: s + "img/gs5.png"
            }, {
                id: "p8_gs6",
                src: s + "img/gs6.png"
            }, {
                id: "p8_gs7",
                src: s + "img/gs7.png"
            }, {
                id: "p8_gs8",
                src: s + "img/gs8.png"
            }, {
                id: "p8_gs9",
                src: s + "img/gs9.png"
            }, {
                id: "p8_gs10",
                src: s + "img/gs10.png"
            }, {
                id: "p8_gs11",
                src: s + "img/gs11.png"
            }, {
                id: "p8_gs12",
                src: s + "img/gs12.png"
            }, {
                id: "p8_gs13",
                src: s + "img/gs13.png"
            }, {
                id: "p8_gs14",
                src: s + "img/gs14.png"
            }, {
                id: "p8_whale1",
                src: s + "img/p8_whale1.png"
            }, {
                id: "p8_whale2",
                src: s + "img/p8_whale2.png"
            }, {
                id: "p8_whale3",
                src: s + "img/p8_whale3.png"
            }, {
                id: "p8_whale4",
                src: s + "img/p8_whale4.png"
            }, {
                id: "p8_m1",
                src: s + "img/p8_m1.png"
            }, {
                id: "p8_m2",
                src: s + "img/p8_m2.png"
            }, {
                id: "p8_fish2",
                src: s + "img/p8_fish2.png"
            }, {
                id: "p9_text",
                src: s + "img/p9_text.png"
            }, {
                id: "p9_text3",
                src: s + "img/p9_text3.png"
            }, {
                id: "p9_m1",
                src: s + "img/p9_m1.jpg"
            }, {
                id: "p9_m2",
                src: s + "img/p9_m2.jpg"
            }, {
                id: "p9_m3",
                src: s + "img/p9_m3.jpg"
            }, {
                id: "p9_m4",
                src: s + "img/p9_m4.jpg"
            }, {
                id: "p9_eval",
                src: s + "img/p9_eval.png"
            }, {
                id: "p9_whale_bg",
                src: s + "img/p9_whale_bg.png"
            }, {
                id: "p9_lz00",
                src: s + "img/lz00.png"
            }, {
                id: "p9_lz01",
                src: s + "img/lz01.png"
            }, {
                id: "p9_lz02",
                src: s + "img/lz02.png"
            }, {
                id: "p9_lz03",
                src: s + "img/lz03.png"
            }, {
                id: "p9_lz04",
                src: s + "img/lz04.png"
            }, {
                id: "p9_lz05",
                src: s + "img/lz05.png"
            }, {
                id: "p9_lz06",
                src: s + "img/lz06.png"
            }, {
                id: "p9_lz07",
                src: s + "img/lz07.png"
            }, {
                id: "p9_lz08",
                src: s + "img/lz08.png"
            }, {
                id: "p9_lz09",
                src: s + "img/lz09.png"
            }, {
                id: "p9_lz10",
                src: s + "img/lz10.png"
            }, {
                id: "p9_lz11",
                src: s + "img/lz11.png"
            }, {
                id: "p9_lz12",
                src: s + "img/lz12.png"
            }, {
                id: "p9_lz13",
                src: s + "img/lz13.png"
            }, {
                id: "p9_lz14",
                src: s + "img/lz14.png"
            }, {
                id: "p9_lz15",
                src: s + "img/lz15.png"
            }, {
                id: "p9_lz16",
                src: s + "img/lz16.png"
            }, {
                id: "p9_lz17",
                src: s + "img/lz17.png"
            }, {
                id: "p9_lz18",
                src: s + "img/lz18.png"
            }, {
                id: "p9_lz19",
                src: s + "img/lz19.png"
            }, {
                id: "p9_lz20",
                src: s + "img/lz20.png"
            }, {
                id: "p9_lz21",
                src: s + "img/lz21.png"
            }, {
                id: "p9_lz22",
                src: s + "img/lz22.png"
            }, {
                id: "p9_lz23",
                src: s + "img/lz23.png"
            }, {
                id: "p9_lz24",
                src: s + "img/lz24.png"
            }, {
                id: "p9_lz24",
                src: s + "img/lz24.png"
            }],
            c = {
                p0: 0,
                p1: 4400,
                p2: 4800,
                p3: 3300,
                p4: 13900,
                p5: 20800,
                p6: -16500,
                p7: -20600,
                p8: 34800,
                p9: 47840
            },
            u = {
                p1: 0,
                p2: t - 1206,
                p3: t - 1334,
                p4: t - 1334
            },
            h = [{
                id: "p4",
                type: "Container",
                propes: {
                    alpha: 0,
                    y: u.p4
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [-300, 0, 10, 500],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [-300, 2900, 10400, 11e3],
                    value: [u.p4, -4068]
                }]
            }, {
                id: "p4_bg",
                type: "Bitmap",
                image: "p4_bg",
                parent: "p4",
                propes: {},
                delay: "p4",
                animations: []
            }, {
                id: "p4_craft",
                type: "Container",
                parent: "p4",
                propes: {},
                animations: []
            }, {
                id: "p4_people1",
                type: "Bitmap",
                image: "p4_people1",
                parent: "p4",
                propes: {
                    x: 12,
                    y: 419
                },
                delay: "p4",
                animations: []
            }, {
                id: "p4_people2",
                type: "Bitmap",
                image: "p4_people2",
                parent: "p4",
                propes: {
                    x: 129,
                    y: 984
                },
                delay: "p4",
                animations: []
            }, {
                id: "p4_text1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p4",
                propes: {
                    rect: [270, 40, 344, 32],
                    alpha: 0,
                    x: 370,
                    y: 815
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [-300, 400, 500, 1e3],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [-300, 400, 500, 1e3],
                    value: [815, 833]
                }]
            }, {
                id: "p4_text2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p4",
                propes: {
                    rect: [310, 0, 269, 29],
                    alpha: 0,
                    x: 445,
                    y: 868
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [-300, 900, 1e3, 2500],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [-300, 900, 1e3, 2500],
                    value: [868, 886]
                }]
            }, {
                id: "p4_text3",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p4",
                propes: {
                    rect: [580, 0, 133, 28],
                    alpha: 0,
                    x: 576,
                    y: 920
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 1400, 1500, 2500],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [0, 1400, 1500, 2500],
                    value: [920, 938]
                }]
            }, {
                id: "p4_mon1",
                type: "Bitmap",
                image: "p4_mon1",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 1800, 1810, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon2",
                type: "Bitmap",
                image: "p4_mon2",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 1900, 1910, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon3",
                type: "Bitmap",
                image: "p4_mon3",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 2e3, 2010, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon4",
                type: "Bitmap",
                image: "p4_mon4",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 2100, 2110, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon5",
                type: "Bitmap",
                image: "p4_mon5",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 2200, 2210, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon6",
                type: "Bitmap",
                image: "p4_mon6",
                parent: "p4",
                propes: {
                    alpha: 0
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 2300, 2310, 2500],
                    value: [0, 1]
                }]
            }, {
                id: "p4_mon7",
                type: "Bitmap",
                image: "p4_mon7",
                parent: "p4",
                propes: {
                    alpha: 0,
                    pivotX: 375,
                    pivotY: 620,
                    x: 375,
                    y: 620
                },
                delay: "p4",
                animations: [{
                    prope: "alpha",
                    time: [0, 2200, 2210, 2500],
                    value: [0, 1]
                }, {
                    prope: "scaleX",
                    time: [0, 2300, 2340, 2380, 2420, 2460, 2900],
                    value: [1, 1.1, 1, 1.1, 1]
                }, {
                    prope: "scaleY",
                    time: [0, 2300, 2340, 2380, 2420, 2460, 2900],
                    value: [1, 1.1, 1, 1.1, 1]
                }]
            }, {
                id: "p4_bg2",
                type: "Bitmap",
                image: "p4_bg2",
                parent: "p4",
                propes: {
                    y: 1334
                },
                delay: "p4",
                animations: []
            }, {
                id: "p4_paper",
                type: "Bitmap",
                image: "p4_paper",
                parent: "p4",
                propes: {
                    y: 1334
                },
                delay: "p4",
                animations: [{
                    prope: "y",
                    time: [0, 2800, 6700, 7e3],
                    value: [1334, -1266]
                }]
            }, {
                id: "p4_mon8wrap",
                type: "Container",
                parent: "p4",
                propes: {
                    y: 2400
                },
                delay: "p4",
                animations: [{
                    prope: "y",
                    time: [0, 4500, 8e3, 1e4],
                    value: [2400, 1800]
                }]
            }, {
                id: "p4_mon8",
                type: "Bitmap",
                image: "p4_mon8",
                parent: "p4_mon8wrap",
                propes: {
                    x: 143
                },
                delay: "p4",
                animations: []
            }, {
                id: "p4_blood",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p4_mon8wrap",
                propes: {
                    rect: [180, 220, 35, 69],
                    x: 317,
                    y: 1374
                },
                delay: "p4",
                animations: [{
                    prope: "y",
                    time: [7e3, 7200, 7900, 8100, 9200],
                    value: [1374, 1537, 1874]
                }]
            }, {
                id: "p4_blood2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p4_mon8wrap",
                propes: {
                    rect: [220, 220, 39, 229],
                    x: 313,
                    y: 1360,
                    scaleY: .22
                },
                delay: "p4",
                animations: [{
                    prope: "scaleY",
                    time: [7e3, 7200, 7900, 7950, 9200],
                    value: [.22, 1, 0]
                }]
            }, {
                id: "p2",
                type: "Container",
                propes: {},
                delay: "p2",
                animations: [{
                    prope: "alpha",
                    time: [0, 5400, 5500, 6e3],
                    value: [1, 0]
                }]
            }, {
                id: "p2_bg1",
                type: "Bitmap",
                image: "p2_bg1",
                parent: "p2",
                propes: {},
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3500, 6400],
                    value: [0, -662 + u.p2]
                }]
            }, {
                id: "p2_bg2",
                type: "Bitmap",
                image: "p2_bg2",
                parent: "p2",
                propes: {},
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3500, 6400],
                    value: [0, -750 + u.p2]
                }]
            }, {
                id: "p2_m1",
                type: "Bitmap",
                image: "p2_m1",
                parent: "p2",
                propes: {
                    x: 97,
                    y: 84
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [84, -578 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 2790, 2820, 2850, 2880, 4400],
                    value: [97, 111, 83, 97]
                }]
            }, {
                id: "p2_m2",
                type: "Bitmap",
                image: "p2_m2",
                parent: "p2",
                propes: {
                    x: 0,
                    y: 877
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [877, 201 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 2790, 2820, 2850, 2880, 4400],
                    value: [0, -14, 14, 0]
                }]
            }, {
                id: "p2_m3",
                type: "Bitmap",
                image: "p2_m3",
                parent: "p2",
                propes: {
                    x: 380,
                    y: 936
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [936, 242 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 2790, 2820, 2850, 2880, 4400],
                    value: [380, 394, 366, 380]
                }]
            }, {
                id: "p2_m4",
                type: "Bitmap",
                image: "p2_m4",
                parent: "p2",
                propes: {
                    x: 265,
                    y: 1440
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 3300, 3500, 3700, 5100],
                    value: [1440, 776 + u.p2, 776 + u.p2, 816 + u.p2, 776 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 2790, 2820, 2850, 2880, 2900],
                    value: [265, 279, 251, 265]
                }, {
                    prope: "x",
                    time: [2910, 3e3, 3200, 4800],
                    value: [265, 125]
                }]
            }, {
                id: "p2_monster",
                type: "Container",
                parent: "p2",
                propes: {},
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [0, -676 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 2660, 2800, 4400],
                    value: [0, 34]
                }]
            }, {
                id: "p2_weapon",
                type: "Bitmap",
                image: "p2_weapon",
                parent: "p2_monster",
                propes: {
                    x: 150,
                    y: 900,
                    rotation: 0,
                    pivotX: 70,
                    pivotY: 150
                },
                delay: "p2",
                animations: [{
                    prope: "x",
                    time: [0, 2660, 2800, 3e3, 4400],
                    value: [150, 163, 150]
                }, {
                    prope: "y",
                    time: [0, 2660, 2800, 3e3, 4400],
                    value: [900, 917, 900]
                }, {
                    prope: "rotation",
                    time: [0, 2660, 2740, 2800, 3e3, 4400],
                    value: [0, -12, 1, 0]
                }]
            }, {
                id: "p2_monster_body",
                type: "Bitmap",
                image: "p2_monster",
                parent: "p2_monster",
                propes: {
                    x: -130,
                    y: 857
                },
                delay: "p2",
                animations: []
            }, {
                id: "p2_weapon_blood",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p2_monster",
                propes: {
                    x: 532,
                    y: 1210,
                    rect: [290, 80, 201, 211],
                    pivotX: 200,
                    pivotY: 210,
                    scaleX: 0,
                    scaleY: 0
                },
                delay: "p2",
                animations: [{
                    prope: "scaleX",
                    time: [2e3, 2800, 2900, 4400],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [2e3, 2800, 2900, 4400],
                    value: [0, 1]
                }]
            }, {
                id: "p2_arms",
                type: "Container",
                parent: "p2_monster",
                propes: {
                    x: 155,
                    y: 925,
                    pivotX: 45,
                    pivotY: 24
                },
                delay: "p2",
                animations: [{
                    prope: "rotation",
                    time: [2e3, 2660, 2740, 2800, 3880],
                    value: [0, -13, 0]
                }]
            }, {
                id: "p2_arm1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p2_arms",
                propes: {
                    rect: [0, 80, 115, 191]
                },
                delay: "p2",
                animations: []
            }, {
                id: "p2_arm2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p2_arms",
                propes: {
                    x: 92,
                    y: 177,
                    pivotX: 10,
                    pivotY: 120,
                    rect: [130, 80, 157, 137]
                },
                delay: "p2",
                animations: [{
                    prope: "rotation",
                    time: [2e3, 2800, 2900, 3e3, 4400],
                    value: [0, 8, 0]
                }]
            }, {
                id: "p2_girl1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p2",
                propes: {
                    x: 477,
                    y: 1170,
                    rect: [0, 280, 173, 133]
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [1170, 476 + u.p2]
                }, {
                    prope: "alpha",
                    time: [2e3, 2800, 2810, 4400],
                    value: [1, 0]
                }]
            }, {
                id: "p2_girl2_mask",
                type: "Graphics",
                image: "",
                parent: "p2",
                propes: {
                    x: 380,
                    y: 936
                },
                delay: "p2",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,0)").beginFill("rgba(0,0,0,0)").drawRect(0, 0, 299, 429).endFill()
                }, animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [936, 242 + u.p2]
                }]
            }, {
                id: "p2_girl2",
                type: "Bitmap",
                image: "p2_girl2",
                parent: "p2",
                propes: {
                    x: 477,
                    y: 1170,
                    scaleX: .5,
                    scaleY: .5,
                    alpha: 0,
                    mask: "p2_girl2_mask"
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 2800, 3200, 5400],
                    value: [1170, 556 + u.p2, 746 + u.p2]
                }, {
                    prope: "alpha",
                    time: [2e3, 2900, 2910, 4400],
                    value: [0, 1]
                }]
            }, {
                id: "p2_girl2_0",
                type: "Bitmap",
                image: "p2_girl3",
                parent: "p2",
                propes: {
                    x: 477,
                    y: 1170,
                    scaleX: .5,
                    scaleY: .5,
                    alpha: 0
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [1170, 476 + u.p2]
                }, {
                    prope: "alpha",
                    time: [2e3, 2800, 2810, 2900, 2910, 4400],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p2_girl2_2_mask",
                type: "Graphics",
                image: "",
                parent: "p2",
                propes: {
                    x: 265,
                    y: 1440 + u.p2
                },
                delay: "p2",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,0)").beginFill("rgba(0,0,0,0)").drawRect(0, 0, 614, 429).endFill()
                }, animations: [{
                    prope: "y",
                    time: [2e3, 2200, 3e3, 4400],
                    value: [1440, 800 + u.p2]
                }, {
                    prope: "x",
                    time: [2e3, 3e3, 3200, 4800],
                    value: [265, 125]
                }]
            }, {
                id: "p2_girl2_2",
                type: "Bitmap",
                image: "p2_girl2",
                parent: "p2",
                propes: {
                    x: 377,
                    y: 486 + u.p2,
                    alpha: 1,
                    mask: "p2_girl2_2_mask"
                },
                delay: "p2",
                animations: [{
                    prope: "y",
                    time: [2600, 2800, 3200, 5400],
                    value: [486 + u.p2, 876 + u.p2]
                }, {
                    prope: "alpha",
                    time: [2800, 3200, 3210, 4900],
                    value: [1, 0]
                }]
            }, {
                id: "p2_girl2_4",
                type: "Bitmap",
                image: "p2_girl2_4",
                parent: "p2",
                propes: {
                    x: 365,
                    y: 995 + u.p2,
                    alpha: 0
                },
                delay: "p2",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 3200, 3210, 4900],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [3210, 3300, 3500, 3700, 5100],
                    value: [995 + u.p2, 1035 + u.p2, 995 + u.p2]
                }]
            }, {
                id: "p2_fire0",
                type: "Bitmap",
                image: "p2_fire0",
                parent: "p2",
                propes: {
                    x: 0,
                    y: t - 1334,
                    alpha: 0
                },
                delay: "p2",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 3500, 3600, 5400],
                    value: [0, 1]
                }]
            }, {
                id: "p1",
                type: "Container",
                propes: {
                    width: e,
                    height: t,
                    x: 350,
                    y: 610,
                    pivotX: 350,
                    pivotY: 610
                },
                delay: "p1",
                animations: [{
                    prope: "scaleX",
                    time: [0, 0, 900, 2400, 3e3],
                    value: [1, 1.1, 40]
                }, {
                    prope: "scaleY",
                    time: [0, 0, 900, 2400, 3e3],
                    value: [1, 1.1, 40]
                }, {
                    prope: "alpha",
                    time: [0, 1800, 2400, 3e3],
                    value: [1, 0]
                }]
            }, {
                id: "p1_face",
                type: "Bitmap",
                image: "p1_face",
                parent: "p1",
                propes: {},
                animations: []
            }, {
                id: "p1_eye1",
                type: "Bitmap",
                image: "p1_eye1",
                parent: "p1",
                propes: {
                    x: 264,
                    y: 513
                },
                delay: "p1",
                animations: [{
                    prope: "alpha",
                    time: [0, 300, 310, 600, 610, 2400],
                    value: [1, 0, 0, 1]
                }]
            }, {
                id: "p1_eye2",
                type: "Bitmap",
                image: "p1_eye2",
                parent: "p1",
                propes: {
                    x: 264,
                    y: 513,
                    alpha: 0
                },
                delay: "p1",
                animations: [{
                    prope: "alpha",
                    time: [0, 300, 310, 600, 610, 2400],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p1_tear1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p1",
                propes: {
                    rect: [0, 0, 22, 70],
                    pivotX: 11,
                    pivotY: 35,
                    x: 288,
                    y: 714,
                    scaleX: 0,
                    scaleY: 0,
                    rotation: 8
                },
                delay: "p1",
                animations: [{
                    prope: "x",
                    time: [0, 480, 780, 2e3],
                    value: [288, 308]
                }, {
                    prope: "y",
                    time: [0, 480, 780, 2e3],
                    value: [714, 784]
                }, {
                    prope: "scaleX",
                    time: [0, 480, 780, 2e3],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [0, 480, 780, 2e3],
                    value: [0, 1]
                }, {
                    prope: "rotation",
                    time: [0, 480, 780, 2e3],
                    value: [8, 0]
                }]
            }, {
                id: "p1_tear2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p1",
                propes: {
                    rect: [30, 0, 57, 75],
                    pivotX: 37,
                    pivotY: 23,
                    x: 324,
                    y: 642,
                    scaleY: 0,
                    rotation: 24
                },
                delay: "p1",
                animations: [{
                    prope: "scaleY",
                    time: [0, 480, 780, 2e3],
                    value: [0, 1]
                }, {
                    prope: "rotation",
                    time: [0, 480, 780, 2e3],
                    value: [24, 0]
                }]
            }, {
                id: "p1_tear3",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p1",
                propes: {
                    rect: [90, 0, 32, 80],
                    pivotX: 10,
                    pivotY: 10,
                    x: 664,
                    y: 576,
                    scaleY: 0,
                    rotation: -34
                },
                delay: "p1",
                animations: [{
                    prope: "scaleY",
                    time: [0, 480, 780, 2e3],
                    value: [0, 1]
                }, {
                    prope: "rotation",
                    time: [0, 480, 780, 2e3],
                    value: [-34, 0]
                }]
            }, {
                id: "p1_tears",
                type: "TextureAtlas",
                image: "p1_tears",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 100, 30],
                        [100, 0, 100, 30],
                        [200, 0, 100, 30],
                        [300, 0, 100, 30],
                        [0, 30, 100, 30],
                        [100, 30, 100, 30],
                        [200, 30, 100, 30],
                        [300, 30, 100, 30],
                        [0, 60, 100, 40],
                        [100, 60, 100, 40],
                        [200, 60, 100, 40],
                        [300, 60, 100, 40],
                        [0, 100, 100, 40],
                        [100, 100, 100, 40],
                        [200, 100, 100, 40],
                        [300, 100, 100, 40]
                    ],
                    sprites: {
                        p1_tear5: [0, 1, 2, 3, 4, 5, 6, 7],
                        p1_tear4: [8, 9, 10, 11, 12, 13, 14, 15]
                    }
                },
                animations: {}
            }, {
                id: "p1_tear5",
                type: "Sprite",
                frames: "p1_tears.p1_tear5",
                parent: "p1",
                propes: {
                    interval: 10,
                    x: 295,
                    y: 614
                },
                delay: "p1",
                animations: [{
                    prope: "alpha",
                    time: [0, 300, 310, 600, 610, 2400],
                    value: [1, 0, 0, 1]
                }]
            }, {
                id: "p1_tear4",
                type: "Sprite",
                frames: "p1_tears.p1_tear4",
                parent: "p1",
                propes: {
                    interval: 10,
                    x: 574,
                    y: 564
                },
                delay: "p1",
                animations: [{
                    prope: "alpha",
                    time: [0, 300, 310, 600, 610, 2400],
                    value: [1, 0, 0, 1]
                }]
            }, {
                id: "p1_text",
                type: "Bitmap",
                image: "p1_text",
                parent: "p1",
                propes: {
                    x: 72,
                    y: t - 190
                },
                delay: "p1",
                animations: []
            }, {
                id: "p0",
                type: "Container",
                propes: {},
                delay: "p0",
                animations: [{
                    prope: "alpha",
                    time: [0, 3800, 4400, 6e3],
                    value: [1, 0]
                }]
            }, {
                id: "p0_bg",
                type: "Graphics",
                parent: "p0",
                delay: "p0",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 1334).endFill()
                }, animations: []
            }, {
                id: "p0_text",
                type: "Bitmap",
                image: "p0",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [380, 410, 32, 115],
                    x: 366,
                    y: t / 2 - 110
                },
                animations: [{
                    prope: "alpha",
                    time: [0, 1380, 1500, 6e3],
                    value: [1, 0]
                }]
            }, {
                id: "p0_text1",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [590, 440, 29, 358],
                    x: 366,
                    y: t / 2 - 110 - 120,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [0, 1420, 1540, 2100, 2220, 6e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p0_text2",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [620, 440, 28, 263],
                    x: 366,
                    y: t / 2 - 110 - 74,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [0, 2140, 2260, 2820, 2940, 6e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p0_text3",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [650, 440, 29, 359],
                    x: 366,
                    y: t / 2 - 110 - 120,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [0, 2860, 2980, 3540, 3660, 6e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p0_tips",
                type: "Container",
                parent: "p0",
                delay: "p0",
                propes: {
                    x: 335,
                    y: t - 290
                },
                animations: [{
                    prope: "y",
                    time: [0, 0, 1200, 6e3],
                    value: [t - 290, t - 290 - 100]
                }, {
                    prope: "alpha",
                    time: [0, 600, 1200, 2e3],
                    value: [1, 0]
                }]
            }, {
                id: "p0_tip1",
                type: "Bitmap",
                image: "p0",
                parent: "p0_tips",
                delay: "p0",
                propes: {
                    rect: [420, 410, 22, 162],
                    x: 0,
                    y: 0
                },
                animations: []
            }, {
                id: "p0_tip2",
                type: "Bitmap",
                image: "p0",
                parent: "p0_tips",
                delay: "p0",
                propes: {
                    rect: [444, 410, 22, 162],
                    x: 74,
                    y: 0
                },
                animations: []
            }, {
                id: "p0_tipline",
                type: "Bitmap",
                image: "p0",
                parent: "p0_tips",
                delay: "p0",
                propes: {
                    rect: [418, 510, 1, 217],
                    x: 47,
                    y: -38
                },
                animations: []
            }, {
                id: "p0_tipround",
                type: "Bitmap",
                image: "p0",
                parent: "p0_tips",
                delay: "p0",
                propes: {
                    rect: [420, 580, 14, 14],
                    x: 40,
                    y: 170
                },
                animations: []
            }, {
                id: "p0_cir4",
                type: "Bitmap",
                image: "p0",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [380, 0, 407, 403],
                    x: 374,
                    y: t / 2 - 40,
                    pivotX: 204,
                    pivotY: 200,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [0, 600, 3e3, 6e3],
                    value: [0, 8]
                }, {
                    prope: "scaleY",
                    time: [0, 600, 3e3, 6e3],
                    value: [0, 8]
                }, {
                    prope: "rotation",
                    time: [0, 600, 3e3, 6e3],
                    value: [0, 1080]
                }, {
                    prope: "scaleX",
                    time: [6001, 1800, 4200, 6e3],
                    value: [0, 8]
                }, {
                    prope: "scaleY",
                    time: [6001, 1800, 4200, 6e3],
                    value: [0, 8]
                }, {
                    prope: "rotation",
                    time: [6001, 1800, 4200, 6e3],
                    value: [0, 1080]
                }]
            }, {
                id: "p0_cir3",
                type: "Bitmap",
                image: "p0",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [0, 380, 370, 348],
                    x: 375,
                    y: t / 2 - 40,
                    pivotX: 185,
                    pivotY: 174,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [0, 900, 3300, 6e3],
                    value: [0, 8]
                }, {
                    prope: "scaleY",
                    time: [0, 900, 3300, 6e3],
                    value: [0, 8]
                }, {
                    prope: "rotation",
                    time: [0, 900, 3300, 6e3],
                    value: [0, 1080]
                }, {
                    prope: "scaleX",
                    time: [6001, 2100, 4500, 6e3],
                    value: [0, 10]
                }, {
                    prope: "scaleY",
                    time: [6001, 2100, 4500, 6e3],
                    value: [0, 10]
                }, {
                    prope: "rotation",
                    time: [6001, 2100, 4500, 6e3],
                    value: [0, 1080]
                }]
            }, {
                id: "p0_cir2",
                type: "Bitmap",
                image: "p0",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [470, 410, 315, 315],
                    x: 377,
                    y: t / 2 - 40,
                    pivotX: 157,
                    pivotY: 157,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [0, 1200, 3600, 6e3],
                    value: [0, 9]
                }, {
                    prope: "scaleY",
                    time: [0, 1200, 3600, 6e3],
                    value: [0, 9]
                }, {
                    prope: "rotation",
                    time: [0, 1200, 3600, 6e3],
                    value: [0, 1080]
                }]
            }, {
                id: "p0_cir1",
                type: "Bitmap",
                image: "p0",
                parent: "p0",
                delay: "p0",
                propes: {
                    rect: [0, 0, 379, 379],
                    x: 370,
                    y: t / 2 - 40,
                    pivotX: 190,
                    pivotY: 190,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [0, 1500, 2400, 3300, 6e3],
                    value: [0, 3, 8]
                }, {
                    prope: "scaleY",
                    time: [0, 1500, 2400, 3300, 6e3],
                    value: [0, 3, 8]
                }, {
                    prope: "rotation",
                    time: [0, 1500, 4500, 6e3],
                    value: [0, 1080]
                }, {
                    prope: "alpha",
                    time: [0, 2820, 2880, 6e3],
                    value: [1, 0]
                }]
            }, {
                id: "p3",
                type: "Container",
                propes: {
                    alpha: 0,
                    y: u.p3
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10500, 10700, 11800],
                    value: [1, 0]
                }]
            }, {
                id: "p3_wrap",
                type: "Container",
                propes: {
                    x: 375,
                    y: 980,
                    pivotX: 375,
                    pivotY: 980
                },
                parent: "p3",
                delay: "p3",
                animations: [{
                    prope: "scaleX",
                    time: [7e3, 7800, 1e4, 11500],
                    value: [1, 1.5]
                }, {
                    prope: "scaleY",
                    time: [7e3, 7800, 1e4, 11500],
                    value: [1, 1.5]
                }, {
                    prope: "alpha",
                    time: [7e3, 10490, 10500, 11500],
                    value: [1, 0]
                }]
            }, {
                id: "p3_bg",
                type: "Bitmap",
                image: "p3_bg",
                parent: "p3_wrap",
                propes: {},
                delay: "p3",
                animations: []
            }, {
                id: "p3_people8",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [250, 0, 116, 220],
                    x: 550,
                    y: 782
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 7e3, 7800, 11500],
                    value: [590, 520]
                }, {
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [782, 742]
                }]
            }, {
                id: "p3_people7",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [620, 300, 259, 347],
                    x: 521,
                    y: 890
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [521, 491]
                }, {
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [890, 810]
                }]
            }, {
                id: "p3_people6",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [130, 310, 193, 311],
                    x: 0,
                    y: 873
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [863, 793]
                }]
            }, {
                id: "p3_people5",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [0, 310, 122, 335],
                    x: 152,
                    y: 926
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [926, 846]
                }]
            }, {
                id: "p3_people4",
                type: "Container",
                parent: "p3_wrap",
                propes: {
                    y: 0
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [70, 0]
                }]
            }, {
                id: "p3_people4_1",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [484, 270, 135, 405],
                    x: 402,
                    y: 845
                },
                delay: "p3",
                animations: []
            }, {
                id: "p3_people4_3",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [661, 2, 97, 289],
                    x: 336,
                    y: 940
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 8e3, 8010, 11500],
                    value: [1, 0]
                }]
            }, {
                id: "p3_people4_4",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [761, 2, 97, 289],
                    x: 336,
                    y: 940,
                    alpha: 0
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 8e3, 8010, 8050, 8060, 11500],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p3_people4_5",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [861, 2, 97, 289],
                    x: 336,
                    y: 940,
                    alpha: 0
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 8050, 8060, 8100, 8110, 11500],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p3_people4_6",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [961, 2, 97, 289],
                    x: 336,
                    y: 940,
                    alpha: 0
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 8100, 8110, 8150, 8160, 11500],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p3_people4_7",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [1061, 2, 97, 289],
                    x: 336,
                    y: 940,
                    alpha: 0
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [7e3, 8150, 8160, 11500],
                    value: [0, 1]
                }]
            }, {
                id: "p3_people4_2",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_people4",
                propes: {
                    rect: [330, 270, 154, 361],
                    x: 264,
                    y: 876
                },
                delay: "p3",
                animations: []
            }, {
                id: "p3_people3",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [0, 0, 245, 305],
                    x: 10,
                    y: 1060
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11500],
                    value: [1060, 980]
                }]
            }, {
                id: "p3_people2",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [880, 300, 148, 194],
                    x: 628,
                    y: 1220
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 7e3, 8e3, 11e3],
                    value: [628, 602]
                }, {
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11e3],
                    value: [1220, 1140]
                }]
            }, {
                id: "p3_people1",
                type: "Bitmap",
                image: "p3_people",
                parent: "p3_wrap",
                propes: {
                    rect: [370, 0, 287, 268],
                    x: 122,
                    y: 1194
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 7e3, 8e3, 11e3],
                    value: [1194, 1064]
                }]
            }, {
                id: "p3_text2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p3",
                propes: {
                    rect: [130, 40, 130, 31],
                    x: 310,
                    y: 640,
                    alpha: 0
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [5e3, 8e3, 8100, 12e3],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [5e3, 8e3, 8300, 13200],
                    value: [700, 610]
                }]
            }, {
                id: "p3_black",
                type: "Graphics",
                image: "",
                parent: "p3_wrap",
                propes: {
                    x: 0,
                    y: 0
                },
                delay: "p3",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 1334).endFill()
                }, animations: [{
                    prope: "alpha",
                    time: [5e3, 6300, 7e3, 9900],
                    value: [1, 0]
                }]
            }, {
                id: "p3_black2",
                type: "Graphics",
                image: "",
                parent: "p3",
                propes: {
                    x: 0,
                    y: 0
                },
                delay: "p3",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 1334).endFill()
                }, animations: [{
                    prope: "alpha",
                    time: [5e3, 9500, 10500, 12e3],
                    value: [0, 1]
                }]
            }, {
                id: "p3_cloud2",
                type: "Bitmap",
                image: "p3_clouds",
                parent: "p3_wrap",
                propes: {
                    rect: [290, 880, 565, 394],
                    x: 185,
                    y: 0
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 6300, 7e3, 8300],
                    value: [185, 765]
                }]
            }, {
                id: "p3_cloud1",
                type: "Bitmap",
                image: "p3_clouds",
                parent: "p3_wrap",
                propes: {
                    rect: [860, 880, 421, 344],
                    x: 0,
                    y: 0
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 6300, 7e3, 8300],
                    value: [0, -350]
                }]
            }, {
                id: "p3_cloud3",
                type: "Bitmap",
                image: "p3_clouds",
                parent: "p3_wrap",
                propes: {
                    rect: [0, 880, 288, 588],
                    x: 0,
                    y: 110
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 6300, 7e3, 8300],
                    value: [0, -300]
                }]
            }, {
                id: "p3_cloud5",
                type: "Bitmap",
                image: "p3_clouds",
                parent: "p3_wrap",
                propes: {
                    rect: [0, 0, 750, 871],
                    x: 0,
                    y: 463
                },
                delay: "p3",
                animations: [{
                    prope: "y",
                    time: [6e3, 6300, 7e3, 8300],
                    value: [463, 1363]
                }]
            }, {
                id: "p3_cloud4",
                type: "Bitmap",
                image: "p3_clouds",
                parent: "p3_wrap",
                propes: {
                    rect: [752, 0, 382, 868],
                    x: 370,
                    y: 342
                },
                delay: "p3",
                animations: [{
                    prope: "x",
                    time: [6e3, 6300, 7e3, 8300],
                    value: [370, 770]
                }]
            }, {
                id: "p3_text",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p3_wrap",
                propes: {
                    rect: [130, 0, 171, 31],
                    x: 290,
                    y: 535
                },
                delay: "p3",
                animations: [{
                    prope: "alpha",
                    time: [0, 5300, 5800, 6300, 8e3],
                    value: [1, 1, 0]
                }]
            }, {
                id: "p3_filter",
                type: "Graphics",
                parent: "p3",
                delay: "p3",
                propes: {
                    alpha: 0
                },
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 1334).endFill()
                }, animations: [{
                    prope: "alpha",
                    time: [7e3, 12200, 12500, 13500],
                    value: [0, 1]
                }]
            }, {
                id: "p5",
                type: "Container",
                propes: {
                    y: 1334
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [0, 100, 9e3, 1e4],
                    value: [1334, -3200]
                }]
            }, {
                id: "p5_whitebg",
                type: "Graphics",
                image: "",
                parent: "p5",
                propes: {},
                delay: "p5",
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 750, 4020).endFill()
                }, animations: []
            }, {
                id: "p5_bg",
                type: "Bitmap",
                image: "p5_bg",
                parent: "p5",
                propes: {},
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [5e3, 5370, 5410, 5450, 5490, 5930],
                    value: [0, -14, -14, 0]
                }, {
                    prope: "x",
                    time: [5e3, 5370, 5410, 5450, 5490, 5930],
                    value: [0, 14, -14, 0]
                }]
            }, {
                id: "p5_mon1_mask",
                type: "Graphics",
                image: "",
                parent: "p5",
                propes: {
                    x: 460,
                    y: 150
                },
                delay: "p5",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,0)").beginFill("rgba(0,0,0,0)").drawRect(0, 0, 210, 360).endFill()
                }, animations: []
            }, {
                id: "p5_mon1",
                type: "Bitmap",
                image: "p5_mon1",
                parent: "p5",
                propes: {
                    x: 630,
                    y: 290,
                    mask: "p5_mon1_mask"
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [1e3, 1050, 1120, 1190, 1260, 1330, 1400, 1470, 1540, 1610, 1680, 1750, 1820, 1890, 1960, 2030, 2100, 2170, 2240, 2310, 2380, 2450, 8050],
                    value: [290, 295, 279, 284, 268, 273, 257, 262, 246, 251, 235, 240, 224, 229, 213, 218, 202, 207, 191, 196, 180]
                }, {
                    prope: "x",
                    time: [1e3, 1050, 2350, 2600],
                    value: [630, 270]
                }]
            }, {
                id: "p5_mon2_mask",
                type: "Graphics",
                image: "",
                parent: "p5",
                propes: {
                    x: 70,
                    y: 80
                },
                delay: "p5",
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,0)").beginFill("rgba(0,0,0,0)").drawRect(0, 0, 220, 264).endFill()
                }, animations: []
            }, {
                id: "p5_mon2",
                type: "Bitmap",
                image: "p5_mon2",
                parent: "p5",
                propes: {
                    x: -150,
                    y: 166,
                    mask: "p5_mon2_mask"
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [1e3, 1050, 1120, 1190, 1260, 1330, 1400, 1470, 1540, 1610, 1680, 1750, 1820, 1890, 1960, 2030, 2100, 2170, 2240, 2310, 2380, 2450, 8050],
                    value: [166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166, 174, 166]
                }, {
                    prope: "x",
                    time: [1e3, 1050, 2350, 2600],
                    value: [-150, 290]
                }]
            }, {
                id: "p5_window",
                type: "Bitmap",
                image: "p5_window",
                parent: "p5",
                propes: {
                    x: 67,
                    y: 91
                },
                delay: "p5",
                animations: []
            }, {
                id: "p5_dia1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p5",
                propes: {
                    rect: [290, 300, 165, 120],
                    x: 237,
                    y: 474,
                    pivotX: 164,
                    pivotY: 110,
                    scaleX: 0,
                    scaleY: 0
                },
                delay: "p5",
                animations: [{
                    prope: "scaleX",
                    time: [1400, 1800, 1900, 2700],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [1400, 1800, 1900, 2700],
                    value: [0, 1]
                }]
            }, {
                id: "p5_dia2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p5",
                propes: {
                    rect: [500, 80, 258, 130],
                    x: 38,
                    y: 1343
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [3500, 4e3, 4800, 5400],
                    value: [1343, 823]
                }]
            }, {
                id: "p5_m0",
                type: "Bitmap",
                image: "p5_m0",
                parent: "p5",
                propes: {
                    x: 32,
                    y: 1592
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [3500, 5410, 5490, 5570, 5650, 5930],
                    value: [1592, 1578, 1598, 1592]
                }, {
                    prope: "x",
                    time: [37e3, 5410, 5490, 5570, 5650, 5930],
                    value: [32, 18, 18, 32]
                }]
            }, {
                id: "p5_m2",
                type: "Bitmap",
                image: "p5_m2",
                parent: "p5",
                propes: {
                    x: 32,
                    y: 1592
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [3500, 4100, 4800, 5370, 5410, 5450, 5490, 5930],
                    value: [1592, 1282, 1282, 1268, 1268, 1282]
                }, {
                    prope: "x",
                    time: [3500, 5410, 5410, 5450, 5490, 5930],
                    value: [32, 18, 46, 32]
                }]
            }, {
                id: "p5_m1",
                type: "Bitmap",
                image: "p5_m1",
                parent: "p5",
                propes: {
                    x: 32,
                    y: 1592
                },
                delay: "p5",
                animations: [{
                    prope: "y",
                    time: [3500, 4e3, 4800, 5400],
                    value: [1592, 972]
                }]
            }, {
                id: "p5_m3",
                type: "Bitmap",
                image: "p5_m3",
                parent: "p5",
                propes: {
                    x: 32,
                    y: 2272,
                    pivotY: 372
                },
                delay: "p5",
                animations: [{
                    prope: "scaleY",
                    time: [5e3, 5260, 5300, 5900],
                    value: [1, .3]
                }]
            }, {
                id: "p5_mon3",
                type: "Bitmap",
                image: "p5_mon3",
                parent: "p5",
                propes: {
                    x: 1851,
                    y: 490,
                    pivotX: 686,
                    pivotY: 190,
                    rotation: 32
                },
                delay: "p5",
                animations: [{
                    prope: "x",
                    time: [5e3, 5200, 5300, 5900],
                    value: [1851, 751]
                }, {
                    prope: "y",
                    time: [5e3, 5200, 5300, 5900],
                    value: [490, 1190]
                }, {
                    prope: "rotation",
                    time: [5e3, 5200, 5300, 5900],
                    value: [32, 0]
                }]
            }, {
                id: "p5_dia3",
                type: "Bitmap",
                image: "p5_text",
                parent: "p5",
                propes: {
                    x: 354,
                    y: 1970,
                    pivotX: 224,
                    pivotY: 70
                },
                delay: "p5",
                animations: [{
                    prope: "scaleX",
                    time: [3e3, 5e3, 5100, 5800],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [3e3, 5e3, 5100, 5800],
                    value: [0, 1]
                }]
            }, {
                id: "p5_mon4",
                type: "Bitmap",
                image: "p5_mon4",
                parent: "p5",
                propes: {
                    x: 0,
                    y: 2195,
                    scaleY: 0
                },
                delay: "p5",
                animations: [{
                    prope: "scaleY",
                    time: [5e3, 5260, 5300, 5900],
                    value: [0, 1]
                }]
            }, {
                id: "p6",
                type: "Container",
                delay: "p6",
                delay: "p6",
                propes: {
                    y: 1334
                },
                animations: [{
                    prope: "y",
                    time: [4e4, 42200, 51200, 64500],
                    value: [1334, -3200]
                }]
            }, {
                id: "p6_f0",
                type: "Bitmap",
                image: "p6_f0",
                delay: "p6",
                parent: "p6",
                propes: {
                    x: 473,
                    y: 617,
                    pivotX: 280,
                    pivotY: 500,
                    rotation: 0
                },
                animations: [{
                    prope: "rotation",
                    time: [4e4, 42200, 44600, 47500],
                    value: [0, 6]
                }, {
                    prope: "alpha",
                    time: [4e4, 44600, 44610, 47500],
                    value: [1, 0]
                }]
            }, {
                id: "p6_f1",
                type: "Bitmap",
                image: "p6_f1",
                delay: "p6",
                parent: "p6",
                propes: {
                    x: 189,
                    y: 0,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [4e4, 44600, 44610, 47500],
                    value: [0, 1]
                }]
            }, {
                id: "p6_fork",
                type: "Bitmap",
                image: "p6_fork",
                delay: "p6",
                parent: "p6",
                propes: {
                    x: 385,
                    y: 0,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [4e4, 44440, 44600, 44610, 47500],
                    value: [0, .3, 0]
                }, {
                    prope: "scaleY",
                    time: [4e4, 44440, 44600, 44610, 47500],
                    value: [0, .3, 0]
                }]
            }, {
                id: "p6_dia1",
                type: "Bitmap",
                image: "p6_m",
                delay: "p6",
                parent: "p6",
                propes: {
                    rect: [0, 0, 156, 65],
                    x: 732,
                    y: 538,
                    pivotX: 156,
                    pivotY: 34,
                    scaleX: 0,
                    scaleY: 0
                },
                animations: [{
                    prope: "scaleX",
                    time: [4e4, 44600, 44700, 47800],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [4e4, 44600, 44700, 47800],
                    value: [0, 1]
                }]
            }, {
                id: "p6_m3",
                type: "Bitmap",
                image: "p6_m",
                delay: "p6",
                parent: "p6",
                propes: {
                    rect: [250, 80, 230, 335],
                    x: 509,
                    y: 940
                },
                animations: [{
                    prope: "y",
                    time: [4e4, 44300, 48300, 48700],
                    value: [940, 840]
                }]
            }, {
                id: "p6_m2",
                type: "Bitmap",
                image: "p6_m",
                delay: "p6",
                parent: "p6",
                propes: {
                    rect: [0, 420, 255, 322],
                    x: 238,
                    y: 869
                },
                animations: [{
                    prope: "y",
                    time: [4e4, 44300, 48300, 48700],
                    value: [869, 719]
                }]
            }, {
                id: "p6_m1",
                type: "Bitmap",
                image: "p6_m",
                delay: "p6",
                parent: "p6",
                propes: {
                    rect: [0, 80, 245, 322],
                    x: 33,
                    y: 734
                },
                animations: [{
                    prope: "y",
                    time: [4e4, 44300, 48300, 48700],
                    value: [734, 534]
                }]
            }, {
                id: "p7",
                type: "Container",
                delay: "p7",
                propes: {
                    y: 1334
                },
                animations: [{
                    prope: "y",
                    time: [48e3, 48800, 55800, 66480],
                    value: [1334, -2200]
                }]
            }, {
                id: "p7_bg",
                type: "Bitmap",
                image: "p7_bg",
                parent: "p7",
                delay: "p7",
                propes: {},
                animations: []
            }, {
                id: "p7_line",
                type: "Bitmap",
                image: "p7_line",
                parent: "p7",
                delay: "p7",
                propes: {
                    y: 110
                },
                animations: [{
                    prope: "y",
                    time: [48e3, 48800, 52800, 56100],
                    value: [110, -70]
                }]
            }, {
                id: "p7_mon1",
                type: "Bitmap",
                image: "p7_mon1",
                parent: "p7",
                delay: "p7",
                propes: {
                    x: 114,
                    y: 1124
                },
                animations: [{
                    prope: "x",
                    time: [5e4, 53e3, 53600, 53900],
                    value: [114, 48]
                }, {
                    prope: "y",
                    time: [5e4, 53e3, 53600, 53900],
                    value: [1124, 1318]
                }]
            }, {
                id: "p7_mother",
                type: "Bitmap",
                image: "p7_person",
                parent: "p7",
                delay: "p7",
                propes: {
                    rect: [0, 0, 209, 381],
                    x: 94,
                    y: 2230,
                    pivotX: 20,
                    pivotY: 360,
                    rotation: -9
                },
                animations: [{
                    prope: "rotation",
                    time: [5e4, 53500, 54300, 54600],
                    value: [-9, 8]
                }]
            }, {
                id: "p7_girl1",
                type: "Bitmap",
                image: "p7_person",
                parent: "p7",
                delay: "p7",
                propes: {
                    rect: [210, 0, 135, 346],
                    x: 200,
                    y: 1950
                },
                animations: [{
                    prope: "alpha",
                    time: [5e4, 54200, 54210, 62900],
                    value: [1, 0]
                }]
            }, {
                id: "p7_girl2",
                type: "Bitmap",
                image: "p7_person",
                parent: "p7",
                delay: "p7",
                propes: {
                    rect: [350, 0, 236, 256],
                    x: 180,
                    y: 2100,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [5e4, 54200, 54210, 54700, 54710, 64300],
                    value: [0, 1, 1, 0]
                }, {
                    prope: "x",
                    time: [5e4, 54200, 54700, 64300],
                    value: [180, 340]
                }, {
                    prope: "y",
                    time: [5e4, 54200, 54700, 64300],
                    value: [2100, 2530]
                }]
            }, {
                id: "p7_girl3",
                type: "Bitmap",
                image: "p7_person1",
                parent: "p7",
                delay: "p7",
                propes: {
                    x: 380,
                    y: 2602,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [5e4, 54700, 54710, 64310],
                    value: [0, 1]
                }]
            }, {
                id: "p7_mon2",
                type: "Bitmap",
                image: "p7_person",
                parent: "p7",
                delay: "p7",
                propes: {
                    rect: [38, 390, 712, 915],
                    x: 1620,
                    y: 1510,
                    pivotX: 712,
                    pivotY: 300,
                    rotation: 39
                },
                animations: [{
                    prope: "x",
                    time: [5e4, 54300, 54500, 64e3],
                    value: [1620, 750]
                }, {
                    prope: "y",
                    time: [5e4, 54300, 54500, 64e3],
                    value: [1510, 1980]
                }, {
                    prope: "rotation",
                    time: [5e4, 54300, 54500, 64e3],
                    value: [39, 0]
                }]
            }, {
                id: "p8",
                type: "Container",
                propes: {
                    y: 1334,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [-500, 1100, 21100, 21300],
                    value: [0, -1e4]
                }, {
                    prope: "alpha",
                    time: [-1500, 0, 100, 2e3],
                    value: [0, 1]
                }]
            }, {
                id: "p8_bg1",
                type: "Bitmap",
                image: "p8_bg1",
                parent: "p8",
                delay: "p8",
                propes: {},
                animations: []
            }, {
                id: "p8_bg1_5",
                type: "Graphics",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 1360
                },
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 1540).endFill()
                }, animations: []
            }, {
                id: "p8_bg2",
                type: "Bitmap",
                image: "p8_bg2",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 2900
                },
                animations: []
            }, {
                id: "p8_bg2_5",
                type: "Graphics",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 5400
                },
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 2550).endFill()
                }, animations: []
            }, {
                id: "p8_bg3",
                type: "Bitmap",
                image: "p8_bg3",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 5110
                },
                animations: [{
                    prope: "y",
                    time: [8e3, 9600, 14900, 15400],
                    value: [5110, 4300]
                }]
            }, {
                id: "p8_bg4",
                type: "Bitmap",
                image: "p8_blood2",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 5590,
                    x: 100
                },
                animations: []
            }, {
                id: "p8_bg5",
                type: "Bitmap",
                image: "p8_blood",
                parent: "p8",
                delay: "p8",
                propes: {
                    y: 6767,
                    x: 512,
                    scaleX: 2,
                    scaleY: 2
                },
                animations: []
            }, {
                id: "p8_face",
                type: "Container",
                parent: "p8",
                propes: {
                    width: 750,
                    height: 1334,
                    x: 350,
                    y: 610,
                    pivotX: 350,
                    pivotY: 610,
                    scaleX: 40,
                    scaleY: 40
                },
                delay: "p8",
                animations: [{
                    prope: "scaleX",
                    time: [-300, 0, 900, 2600, 4600],
                    value: [40, 1, .6]
                }, {
                    prope: "scaleY",
                    time: [-300, 0, 900, 2600, 4600],
                    value: [40, 1, .6]
                }, {
                    prope: "x",
                    time: [0, 900, 2600, 4600],
                    value: [350, 300]
                }, {
                    prope: "y",
                    time: [0, 900, 2600, 4600],
                    value: [610, 300]
                }]
            }, {
                id: "p8_face_bg2",
                type: "Graphics",
                parent: "p8_face",
                delay: "p8",
                propes: {
                    y: -6,
                    x: -6
                },
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 762, 1346).endFill()
                }, animations: []
            }, {
                id: "p8_face_bg",
                type: "Bitmap",
                image: "p1_face",
                parent: "p8_face",
                delay: "p8",
                propes: {},
                animations: []
            }, {
                id: "p8_eye1",
                type: "Bitmap",
                image: "p1_eye1",
                parent: "p8_face",
                propes: {
                    x: 264,
                    y: 513
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_tear1",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p8_face",
                propes: {
                    rect: [0, 0, 22, 70],
                    pivotX: 11,
                    pivotY: 35,
                    x: 308,
                    y: 784,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_tear2",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p8_face",
                propes: {
                    rect: [30, 0, 57, 75],
                    pivotX: 37,
                    pivotY: 23,
                    x: 324,
                    y: 642,
                    scaleY: 1,
                    rotation: 0
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_tear3",
                type: "Bitmap",
                image: "p1_sprite",
                parent: "p8_face",
                propes: {
                    rect: [90, 0, 32, 80],
                    pivotX: 10,
                    pivotY: 10,
                    x: 664,
                    y: 576,
                    scaleY: 1,
                    rotation: 0
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_tear5",
                type: "Sprite",
                frames: "p1_tears.p1_tear5",
                parent: "p8_face",
                propes: {
                    interval: 10,
                    x: 295,
                    y: 614
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_tear4",
                type: "Sprite",
                frames: "p1_tears.p1_tear4",
                parent: "p8_face",
                propes: {
                    interval: 10,
                    x: 574,
                    y: 564
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_text1",
                type: "Bitmap",
                image: "p8_text1",
                parent: "p8",
                propes: {
                    x: 35,
                    y: 1200,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [0, 900, 910, 4600],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [0, 900, 2600, 4600],
                    value: [1200, 500]
                }]
            }, {
                id: "p8_text2",
                type: "Bitmap",
                image: "p8_text2",
                parent: "p8",
                propes: {
                    rect: [0, 0, 28, 177],
                    x: 270,
                    y: 1600
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [0, 2100, 4200, 4600],
                    value: [1600, 1100]
                }]
            }, {
                id: "p8_text3",
                type: "Bitmap",
                image: "p8_text2",
                parent: "p8",
                propes: {
                    rect: [30, 0, 28, 299],
                    x: 322,
                    y: 2e3
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [0, 2100, 4200, 4600],
                    value: [2e3, 1100]
                }]
            }, {
                id: "p8_text4",
                type: "Bitmap",
                image: "p8_text2",
                parent: "p8",
                propes: {
                    rect: [60, 0, 28, 253],
                    x: 374,
                    y: 2400
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [0, 2100, 4200, 4600],
                    value: [2400, 1100]
                }]
            }, {
                id: "p8_text5",
                type: "Bitmap",
                image: "p8_text2",
                parent: "p8",
                propes: {
                    rect: [90, 0, 28, 522],
                    x: 426,
                    y: 2800
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [0, 2100, 4200, 4600],
                    value: [2800, 1100]
                }]
            }, {
                id: "p8_cloud1",
                type: "Bitmap",
                image: "p8_cloud",
                parent: "p8",
                propes: {
                    rect: [0, 0, 658, 113],
                    x: -20,
                    y: 2012
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [1e3, 2400, 4500, 4900],
                    value: [2012, 1612]
                }]
            }, {
                id: "p8_cloud2",
                type: "Bitmap",
                image: "p8_cloud",
                parent: "p8",
                propes: {
                    rect: [0, 120, 414, 235],
                    x: 336,
                    y: 2300
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [1e3, 2400, 4500, 4900],
                    value: [2300, 2100]
                }]
            }, {
                id: "p8_ship",
                type: "Bitmap",
                image: "p8_ship",
                parent: "p8",
                propes: {
                    x: 432,
                    y: 2980,
                    pivotX: 164,
                    pivotY: 335
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [4e3, 5100, 5150, 5300, 5350, 6600],
                    value: [2980, 3e3, 2974, 2980]
                }, {
                    prope: "rotation",
                    time: [4e3, 5100, 5150, 5300, 5350, 5450, 5520, 5600, 5680, 6600],
                    value: [0, 6, -2, 2, -2, 2, -2, 2]
                }]
            }, {
                id: "p8_blood",
                type: "Bitmap",
                image: "p8_blood",
                parent: "p8",
                propes: {
                    x: 550,
                    y: 2854,
                    pivotX: 113,
                    pivotY: 112,
                    scaleX: 0,
                    scaleY: 0
                },
                delay: "p8",
                animations: [{
                    prope: "scaleX",
                    time: [4e3, 5200, 5280, 5600],
                    value: [0, 1]
                }, {
                    prope: "scaleY",
                    time: [4e3, 5200, 5280, 5600],
                    value: [0, 1]
                }]
            }, {
                id: "p8_fish1",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [529, 1050, 62, 104],
                    x: 0,
                    y: 1700,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4140, 4150, 4196, 4206, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish2",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [0, 302, 114, 155],
                    x: 0,
                    y: 1736,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4196, 4206, 4252, 4262, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish3",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [136, 980, 126, 166],
                    x: 55,
                    y: 1835,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4252, 4262, 4308, 4318, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish4",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [263, 980, 127, 176],
                    x: 93,
                    y: 1880,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4308, 4318, 4364, 4374, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish5",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [1, 978, 133, 195],
                    x: 130,
                    y: 1967,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4364, 4374, 4420, 4430, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish6",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [830, 771, 171, 212],
                    x: 155,
                    y: 2016,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4420, 4430, 4476, 4486, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish7",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [392, 982, 135, 172],
                    x: 181,
                    y: 2092,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4476, 4486, 4532, 4542, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish8",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [672, 771, 152, 255],
                    x: 211,
                    y: 2049,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4532, 4542, 4588, 4598, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish9",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [500, 771, 171, 268],
                    x: 207,
                    y: 2145,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4588, 4598, 4644, 4654, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish10",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [154, 469, 185, 299],
                    x: 254,
                    y: 2224,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4644, 4654, 4700, 4710, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish11",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [823, 0, 216, 337],
                    x: 250,
                    y: 2260,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4700, 4710, 4756, 4766, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish12",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [340, 0, 237, 310],
                    x: 242,
                    y: 2338,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4756, 4766, 4812, 4822, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish13",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [577, 0, 243, 333],
                    x: 279,
                    y: 2458,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4812, 4822, 4868, 4878, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish14",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [842, 340, 253, 427],
                    x: 349,
                    y: 2480,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4868, 4878, 4924, 4934, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish15",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [534, 380, 306, 390],
                    x: 329,
                    y: 2542,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4924, 4934, 4980, 4990, 5300],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish16",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [0, 0, 337, 302],
                    x: 251,
                    y: 2596,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 4980, 4990, 5036, 5046, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish17",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [0, 770, 272, 186],
                    x: 283,
                    y: 2645,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5036, 5046, 5092, 5102, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish18",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [117, 302, 243, 123],
                    x: 332,
                    y: 2682,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5092, 5102, 5148, 5158, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish19",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [0, 484, 152, 284],
                    x: 373,
                    y: 2627,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5148, 5158, 5204, 5214, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish20",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [342, 452, 190, 315],
                    x: 351,
                    y: 2674,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5204, 5214, 5260, 5270, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish21",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [271, 770, 225, 208],
                    x: 337,
                    y: 2770,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5260, 5270, 5316, 5326, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish22",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [886, 984, 261, 177],
                    x: 337,
                    y: 2907,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5316, 5326, 5372, 5382, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish23",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [592, 1042, 278, 120],
                    x: 331,
                    y: 2892,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5372, 5382, 5428, 5438, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish24",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [380, 312, 140, 62],
                    x: 380,
                    y: 2930,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5428, 5438, 5484, 5494, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_fish25",
                type: "Bitmap",
                image: "p8_fish",
                parent: "p8",
                propes: {
                    rect: [539, 327, 35, 26],
                    x: 393,
                    y: 2976,
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3e3, 5484, 5494, 5540, 5550, 5700],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p8_gs",
                type: "Container",
                parent: "p8",
                propes: {
                    x: 114,
                    y: 3800
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [4e3, 4980, 8100, 8600],
                    value: [3800, 2200]
                }]
            }, {
                id: "p8_gs1",
                type: "Bitmap",
                image: "p8_gs1",
                parent: "p8_gs",
                propes: {
                    alpha: 1
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6300, 6310, 7200],
                    value: [1, 0]
                }]
            }, {
                id: "p8_gs2",
                type: "Bitmap",
                image: "p8_gs2",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6300, 6310, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs3",
                type: "Bitmap",
                image: "p8_gs3",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6325, 6335, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs4",
                type: "Bitmap",
                image: "p8_gs4",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6350, 6360, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs5",
                type: "Bitmap",
                image: "p8_gs5",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6375, 6385, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs6",
                type: "Bitmap",
                image: "p8_gs6",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6400, 6410, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs7",
                type: "Bitmap",
                image: "p8_gs7",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6425, 6435, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs8",
                type: "Bitmap",
                image: "p8_gs8",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6450, 6460, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs9",
                type: "Bitmap",
                image: "p8_gs9",
                parent: "p8_gs",
                propes: {
                    alpha: 0
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6475, 6485, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs10",
                type: "Bitmap",
                image: "p8_gs10",
                parent: "p8_gs",
                propes: {
                    alpha: 0,
                    y: -6
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6500, 6510, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs11",
                type: "Bitmap",
                image: "p8_gs11",
                parent: "p8_gs",
                propes: {
                    alpha: 0,
                    y: -11
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6525, 6535, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs12",
                type: "Bitmap",
                image: "p8_gs12",
                parent: "p8_gs",
                propes: {
                    alpha: 0,
                    y: -16
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6550, 6560, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs13",
                type: "Bitmap",
                image: "p8_gs13",
                parent: "p8_gs",
                propes: {
                    alpha: 0,
                    y: -20
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6575, 6585, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_gs14",
                type: "Bitmap",
                image: "p8_gs13",
                parent: "p8_gs",
                propes: {
                    alpha: 0,
                    y: -15
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [3600, 6600, 6610, 7200],
                    value: [0, 1]
                }]
            }, {
                id: "p8_text6",
                type: "Bitmap",
                image: "p8_text3",
                parent: "p8_gs",
                propes: {
                    x: 130,
                    y: 538
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_whale1",
                type: "Bitmap",
                image: "p8_whale1",
                parent: "p8",
                propes: {
                    x: 70,
                    y: 3713
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [6e3, 7600, 8100, 8600],
                    value: [1, 0]
                }, {
                    prope: "y",
                    time: [6e3, 7500, 8100, 8600],
                    value: [3713, 3800]
                }]
            }, {
                id: "p8_whale2",
                type: "Bitmap",
                image: "p8_whale2",
                parent: "p8",
                propes: {
                    x: 60,
                    y: 4e3
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [6e3, 8200, 8400, 9e3, 9200, 9600],
                    value: [0, 1, 1, 0]
                }, {
                    prope: "y",
                    time: [6e3, 8200, 9200, 9600],
                    value: [4e3, 4200]
                }]
            }, {
                id: "p8_whale3",
                type: "Bitmap",
                image: "p8_whale3",
                parent: "p8",
                propes: {
                    x: 260,
                    y: 4522
                },
                delay: "p8",
                animations: [{
                    prope: "alpha",
                    time: [6e3, 9200, 9400, 9600],
                    value: [0, 1]
                }, {
                    prope: "y",
                    time: [6e3, 9200, 11200, 12e3],
                    value: [4522, 4583]
                }]
            }, {
                id: "p8_blood2",
                type: "Bitmap",
                image: "p8_blood2",
                parent: "p8",
                propes: {
                    x: 375,
                    y: 4330,
                    pivotX: 290,
                    pivotY: 180,
                    scaleX: 0,
                    scaleY: 0
                },
                delay: "p8",
                animations: [{
                    prope: "scaleX",
                    time: [6e3, 8e3, 8200, 9600],
                    value: [0, 4]
                }, {
                    prope: "scaleY",
                    time: [6e3, 8e3, 8200, 9600],
                    value: [0, 4]
                }]
            }, {
                id: "p8_whale4",
                type: "Container",
                parent: "p8",
                propes: {
                    x: 116,
                    y: 5206
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_whale4_bg",
                type: "Graphics",
                parent: "p8_whale4",
                delay: "p8",
                propes: {
                    scaleY: .64
                },
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 504, 510).endFill()
                }, animations: [{
                    prope: "scaleY",
                    time: [9e3, 10400, 10700, 12e3],
                    value: [.64, 1]
                }]
            }, {
                id: "p8_whale5",
                type: "Bitmap",
                image: "p8_whale4",
                parent: "p8_whale4",
                propes: {
                    x: 32,
                    y: 42,
                    rect: [0, 250, 368, 178]
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [9e3, 10400, 10700, 12e3],
                    value: [42, 164]
                }]
            }, {
                id: "p8_whale6",
                type: "Bitmap",
                image: "p8_whale4",
                parent: "p8_whale4",
                propes: {
                    x: 29,
                    y: 18,
                    rect: [0, 0, 449, 242]
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_whale7",
                type: "Bitmap",
                image: "p8_whale4",
                parent: "p8_whale4",
                propes: {
                    x: 31,
                    y: 18,
                    rect: [0, 430, 443, 252]
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [9e3, 10400, 10700, 12e3],
                    value: [18, 240]
                }]
            }, {
                id: "p8_text7",
                type: "Bitmap",
                image: "p8_text4",
                parent: "p8_whale4",
                propes: {
                    y: -106
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_m1",
                type: "Bitmap",
                image: "p8_m1",
                parent: "p8",
                propes: {
                    y: 5828,
                    x: 80
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_fishes1",
                type: "Bitmap",
                image: "p8_fish2",
                parent: "p8",
                propes: {
                    rect: [0, 0, 286, 128],
                    y: 6184,
                    x: 73,
                    pivotX: 143,
                    pivotY: 64
                },
                delay: "p8",
                animations: [{
                    prope: "rotation",
                    time: [9e3, 10800, 13700, 14e3],
                    value: [0, -13]
                }, {
                    prope: "x",
                    time: [9e3, 10800, 13700, 14e3],
                    value: [73, 543]
                }, {
                    prope: "y",
                    time: [9e3, 10800, 13700, 14e3],
                    value: [6184, 5964]
                }]
            }, {
                id: "p8_fishes2",
                type: "Bitmap",
                image: "p8_fish2",
                parent: "p8",
                propes: {
                    rect: [290, 0, 208, 201],
                    y: 6413,
                    x: 104,
                    pivotX: 104,
                    pivotY: 100
                },
                delay: "p8",
                animations: [{
                    prope: "x",
                    time: [9e3, 11400, 14700, 15e3],
                    value: [104, 244]
                }, {
                    prope: "y",
                    time: [9e3, 11400, 14700, 15e3],
                    value: [6413, 6013]
                }]
            }, {
                id: "p8_m2",
                type: "Container",
                parent: "p8",
                propes: {
                    x: 40,
                    y: 6440
                },
                delay: "p8",
                animations: []
            }, {
                id: "p8_m2_bg",
                type: "Graphics",
                parent: "p8_m2",
                delay: "p8",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 600, 240).endFill()
                }, animations: []
            }, {
                id: "p8_m2_wave1",
                type: "Bitmap",
                image: "p8_m2",
                parent: "p8_m2",
                propes: {
                    rect: [0, 0, 574, 226],
                    x: 12,
                    y: 10
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [10800, 11700, 12700, 13700, 14700, 15e3],
                    value: [10, 0, 10]
                }]
            }, {
                id: "p8_m2_whale",
                type: "Bitmap",
                image: "p8_m2",
                parent: "p8_m2",
                propes: {
                    rect: [600, 0, 524, 389],
                    x: 114,
                    y: -190
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [10800, 11700, 12700, 13700, 14700, 15e3],
                    value: [-190, -180, -190]
                }]
            }, {
                id: "p8_m2_wave2",
                type: "Bitmap",
                image: "p8_m2",
                parent: "p8_m2",
                propes: {
                    rect: [0, 230, 574, 174],
                    x: 12,
                    y: 87
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [10800, 11700, 12700, 13700, 14700, 15e3],
                    value: [87, 77, 87]
                }]
            }, {
                id: "p8_m2_wave3",
                type: "Bitmap",
                image: "p8_m2",
                parent: "p8_m2",
                propes: {
                    rect: [0, 410, 600, 150],
                    x: 0,
                    y: 163
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [10800, 11700, 12700, 13700, 14700, 15e3],
                    value: [163, 173, 163]
                }]
            }, {
                id: "p8_m2_wave4",
                type: "Bitmap",
                image: "p8_m2",
                parent: "p8_m2",
                propes: {
                    rect: [0, 651, 600, 216],
                    x: 0,
                    y: 236
                },
                delay: "p8",
                animations: [{
                    prope: "y",
                    time: [10800, 11700, 12700, 13700, 14700, 15e3],
                    value: [236, 206, 236]
                }]
            }, {
                id: "p9_wrap",
                type: "Container",
                propes: {},
                delay: "p9",
                animations: []
            }, {
                id: "p9_bg",
                type: "Graphics",
                parent: "p9_wrap",
                delay: "p9",
                propes: {
                    y: 1334
                },
                draw: function () {
                    this.lineStyle(1, "rgba(0,0,0,1)").beginFill("rgba(0,0,0,1)").drawRect(0, 0, 750, 5800).endFill()
                }, animations: [{
                    prope: "y",
                    time: [-500, 0, 11856, 12056],
                    value: [1334, -5800 + t]
                }]
            }, {
                id: "p9_whale_atlas",
                type: "TextureAtlas",
                image: "p9_whale_bg",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 432, 613],
                        [440, 0, 432, 613],
                        [0, 620, 432, 613],
                        [440, 620, 432, 613]
                    ],
                    sprites: {
                        p9: [0, 1, 2, 3]
                    }
                },
                animations: {}
            }, {
                id: "p9_whale_bg",
                type: "Sprite",
                frames: "p9_whale_atlas.p9",
                parent: "p9_wrap",
                propes: {
                    interval: 10,
                    x: 160,
                    y: 2334,
                    alpha: .5
                },
                delay: "p9",
                animations: [{
                    prope: "y",
                    time: [-500, 0, 2 * (2334 - t + 280 + 613), 2 * (2334 - t + 280 + 613) + 200],
                    value: [2334, t - 280 - 613]
                }, {
                    prope: "alpha",
                    time: [7e3, 7400, 8400, 11300, 11600, 12e3],
                    value: [.5, .2, .2, 1]
                }]
            }, {
                id: "p9",
                type: "Container",
                propes: {
                    y: 1334
                },
                delay: "p9",
                parent: "p9_wrap",
                animations: [{
                    prope: "y",
                    time: [-500, 0, 11856, 12056],
                    value: [1334, -5800 + t]
                }]
            }, {
                id: "p9_text1",
                type: "Bitmap",
                image: "p9_text",
                parent: "p9",
                propes: {
                    rect: [0, 0, 29, 211],
                    x: 275,
                    y: 0
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_text2",
                type: "Bitmap",
                image: "p9_text",
                parent: "p9",
                propes: {
                    rect: [30, 0, 32, 481],
                    x: 336,
                    y: 290
                },
                delay: "p9",
                animations: [{
                    prope: "y",
                    time: [-500, 0, 4e3, 6e3],
                    value: [290, 0]
                }]
            }, {
                id: "p9_text3",
                type: "Bitmap",
                image: "p9_text",
                parent: "p9",
                propes: {
                    rect: [64, 0, 31, 388],
                    x: 400,
                    y: 334
                },
                delay: "p9",
                animations: [{
                    prope: "y",
                    time: [-500, 0, 4e3, 6e3],
                    value: [334, 0]
                }]
            }, {
                id: "p9_text4",
                type: "Bitmap",
                image: "p9_text",
                parent: "p9",
                propes: {
                    rect: [96, 0, 32, 841],
                    x: 474,
                    y: 470
                },
                delay: "p9",
                animations: [{
                    prope: "y",
                    time: [-500, 0, 4e3, 6e3],
                    value: [470, -100]
                }]
            }, {
                id: "p9_m2",
                type: "Container",
                parent: "p9",
                propes: {
                    x: 355,
                    y: 964
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m2_bg",
                type: "Graphics",
                parent: "p9_m2",
                delay: "p9",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 341, 534).endFill()
                }, animations: []
            }, {
                id: "p9_m2_atlas",
                type: "TextureAtlas",
                image: "p9_m2",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 313, 506],
                        [320, 0, 313, 506],
                        [640, 0, 313, 506],
                        [960, 0, 313, 506],
                        [1280, 0, 313, 506],
                        [0, 510, 313, 506],
                        [320, 510, 313, 506],
                        [640, 510, 313, 506],
                        [960, 510, 313, 506],
                        [1280, 510, 313, 506],
                        [0, 1020, 313, 506],
                        [320, 1020, 313, 506],
                        [640, 1020, 313, 506],
                        [960, 1020, 313, 506],
                        [1280, 1020, 313, 506]
                    ],
                    sprites: {
                        p9_m2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                    }
                },
                animations: {}
            }, {
                id: "p9_m2_img",
                type: "Sprite",
                frames: "p9_m2_atlas.p9_m2",
                parent: "p9_m2",
                propes: {
                    interval: 10,
                    x: 14,
                    y: 14
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m2_name",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m2",
                delay: "p9",
                propes: {
                    rect: [150, 0, 142, 63],
                    x: -40,
                    y: 346
                },
                animations: [{
                    prope: "y",
                    time: [2e3, 2800, 5500, 6e3],
                    value: [346, 200]
                }]
            }, {
                id: "p9_m2_ev_bg",
                type: "Graphics",
                parent: "p9_m2",
                delay: "p9",
                propes: {
                    x: -12,
                    y: 388
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,1)").beginFill("rgba(178,36,36,1)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m2_ev_mask",
                type: "Graphics",
                parent: "p9_m2",
                delay: "p9",
                propes: {
                    x: -12,
                    y: 388
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,0)").beginFill("rgba(178,36,36,0)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m2_ev",
                type: "Bitmap",
                image: "p9_eval",
                parent: "p9_m2",
                delay: "p9",
                propes: {
                    x: -6,
                    y: 450,
                    mask: "p9_m2_ev_mask"
                },
                animations: [{
                    prope: "y",
                    time: [3e3, 3620, 4e3, 6e3],
                    value: [450, -226]
                }]
            }, {
                id: "p9_m2_tip",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m2",
                delay: "p9",
                propes: {
                    x: -292,
                    y: 54,
                    rect: [0, 160, 235, 310]
                },
                animations: []
            }, {
                id: "p9_m3",
                type: "Container",
                parent: "p9",
                propes: {
                    x: 0,
                    y: 1582
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m3_bg",
                type: "Graphics",
                parent: "p9_m3",
                delay: "p9",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 628, 268).endFill()
                }, animations: []
            }, {
                id: "p9_m3_atlas",
                type: "TextureAtlas",
                image: "p9_m3",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 598, 238],
                        [600, 0, 598, 238],
                        [0, 240, 598, 238],
                        [600, 240, 598, 238],
                        [0, 480, 598, 238],
                        [600, 480, 598, 238],
                        [0, 720, 598, 238],
                        [600, 720, 598, 238],
                        [0, 960, 598, 238],
                        [600, 960, 598, 238],
                        [0, 1200, 598, 238],
                        [600, 1200, 598, 238],
                        [0, 1440, 598, 238]
                    ],
                    sprites: {
                        p9_m3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    }
                },
                animations: {}
            }, {
                id: "p9_m3_img",
                type: "Sprite",
                frames: "p9_m3_atlas.p9_m3",
                parent: "p9_m3",
                propes: {
                    interval: 10,
                    x: 15,
                    y: 15
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m3_name",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m3",
                delay: "p9",
                propes: {
                    rect: [300, 0, 142, 63],
                    x: 526,
                    y: 48
                },
                animations: []
            }, {
                id: "p9_m3_ev_bg",
                type: "Graphics",
                parent: "p9_m3",
                delay: "p9",
                propes: {
                    x: 566,
                    y: 130
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,1)").beginFill("rgba(178,36,36,1)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m3_ev_mask",
                type: "Graphics",
                parent: "p9_m3",
                delay: "p9",
                propes: {
                    x: 566,
                    y: 130
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,0)").beginFill("rgba(178,36,36,0)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m3_ev",
                type: "Bitmap",
                image: "p9_eval",
                parent: "p9_m3",
                delay: "p9",
                propes: {
                    x: 572,
                    y: 200,
                    mask: "p9_m3_ev_mask"
                },
                animations: [{
                    prope: "y",
                    time: [4e3, 4300, 4800, 6300],
                    value: [200, -484]
                }]
            }, {
                id: "p9_m3_tip",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m3",
                delay: "p9",
                propes: {
                    x: 60,
                    y: 302,
                    rect: [0, 480, 567, 87]
                },
                animations: []
            }, {
                id: "p9_m4",
                type: "Container",
                parent: "p9",
                propes: {
                    x: 110,
                    y: 2060
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m4_bg",
                type: "Graphics",
                parent: "p9_m4",
                delay: "p9",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 544, 358).endFill()
                }, animations: []
            }, {
                id: "p9_m4_atlas",
                type: "TextureAtlas",
                image: "p9_m4",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 512, 326],
                        [520, 0, 512, 326],
                        [1040, 0, 512, 326],
                        [0, 330, 512, 326],
                        [520, 330, 512, 326],
                        [1040, 330, 512, 326],
                        [0, 660, 512, 326],
                        [520, 660, 512, 326],
                        [1040, 660, 512, 326],
                        [0, 990, 512, 326],
                        [520, 990, 512, 326],
                        [1040, 990, 512, 326],
                        [0, 1320, 512, 326],
                        [520, 1320, 512, 326],
                        [1040, 1320, 512, 326]
                    ],
                    sprites: {
                        p9_m4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                    }
                },
                animations: {}
            }, {
                id: "p9_m4_img",
                type: "Sprite",
                frames: "p9_m4_atlas.p9_m4",
                parent: "p9_m4",
                propes: {
                    interval: 10,
                    x: 16,
                    y: 16
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m4_name",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m4",
                delay: "p9",
                propes: {
                    rect: [450, 0, 142, 63],
                    x: -10,
                    y: 150
                },
                animations: [{
                    prope: "y",
                    time: [4e3, 4980, 7430, 9e3],
                    value: [150, 50]
                }]
            }, {
                id: "p9_m4_ev_bg",
                type: "Graphics",
                parent: "p9_m4",
                delay: "p9",
                propes: {
                    x: -64,
                    y: 228
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,1)").beginFill("rgba(178,36,36,1)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m4_ev_mask",
                type: "Graphics",
                parent: "p9_m4",
                delay: "p9",
                propes: {
                    x: -64,
                    y: 228
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,0)").beginFill("rgba(178,36,36,0)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m4_ev",
                type: "Bitmap",
                image: "p9_eval",
                parent: "p9_m4",
                delay: "p9",
                propes: {
                    x: -60,
                    y: 300,
                    mask: "p9_m4_ev_mask"
                },
                animations: [{
                    prope: "y",
                    time: [5e3, 5300, 5800, 7300],
                    value: [300, -448]
                }]
            }, {
                id: "p9_m4_tip",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m4",
                delay: "p9",
                propes: {
                    x: -56,
                    y: 386,
                    rect: [0, 70, 545, 86]
                },
                animations: []
            }, {
                id: "p9_m1",
                type: "Container",
                parent: "p9",
                propes: {
                    x: 220,
                    y: 2686
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m1_bg",
                type: "Graphics",
                parent: "p9_m1",
                delay: "p9",
                propes: {},
                draw: function () {
                    this.lineStyle(1, "rgba(255,255,255,1)").beginFill("rgba(255,255,255,1)").drawRect(0, 0, 530, 366).endFill()
                }, animations: []
            }, {
                id: "p9_m1_atlas",
                type: "TextureAtlas",
                image: "p9_m1",
                parent: "null",
                propes: {
                    frames: [
                        [0, 0, 518, 342],
                        [530, 0, 518, 342],
                        [1060, 0, 518, 342],
                        [0, 344, 518, 342],
                        [530, 344, 518, 342],
                        [1060, 344, 518, 342],
                        [0, 688, 518, 342],
                        [530, 688, 518, 342],
                        [1060, 688, 518, 342],
                        [0, 1032, 518, 342],
                        [530, 1032, 518, 342],
                        [1060, 1032, 518, 342],
                        [0, 1376, 518, 342],
                        [530, 1376, 518, 342]
                    ],
                    sprites: {
                        p9_m1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                    }
                },
                animations: {}
            }, {
                id: "p9_m1_img",
                type: "Sprite",
                frames: "p9_m1_atlas.p9_m1",
                parent: "p9_m1",
                propes: {
                    interval: 10,
                    x: 12,
                    y: 12
                },
                delay: "p9",
                animations: []
            }, {
                id: "p9_m1_name",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m1",
                delay: "p9",
                propes: {
                    rect: [0, 0, 142, 63],
                    x: -60,
                    y: 200
                },
                animations: [{
                    prope: "y",
                    time: [1e3, 5220, 7100, 9100],
                    value: [200, 120]
                }]
            }, {
                id: "p9_m1_ev_bg",
                type: "Graphics",
                parent: "p9_m1",
                delay: "p9",
                propes: {
                    x: 58,
                    y: 272
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,1)").beginFill("rgba(178,36,36,1)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m1_ev_mask",
                type: "Graphics",
                parent: "p9_m1",
                delay: "p9",
                propes: {
                    x: 58,
                    y: 272
                },
                draw: function () {
                    this.lineStyle(1, "rgba(178,36,36,0)").beginFill("rgba(178,36,36,0)").drawRect(0, 0, 148, 66).endFill()
                }, animations: []
            }, {
                id: "p9_m1_ev",
                type: "Bitmap",
                image: "p9_eval",
                parent: "p9_m1",
                delay: "p9",
                propes: {
                    x: 58,
                    y: 338,
                    mask: "p9_m1_ev_mask"
                },
                animations: [{
                    prope: "y",
                    time: [1e3, 6100, 6900, 9100],
                    value: [338, -280]
                }]
            }, {
                id: "p9_m1_tip",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9_m1",
                delay: "p9",
                propes: {
                    x: 50,
                    y: 400,
                    rect: [240, 160, 425, 86]
                },
                animations: []
            }, {
                id: "p9_tip",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    x: 80,
                    y: 3310,
                    rect: [0, 570, 582, 290]
                },
                animations: []
            }, {
                id: "p9_lz00",
                type: "Bitmap",
                image: "p9_lz00",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9600, 9610, 9624, 9634, 1e4],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz01",
                type: "Bitmap",
                image: "p9_lz01",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9624, 9634, 9648, 9658, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz02",
                type: "Bitmap",
                image: "p9_lz02",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9648, 9658, 9672, 9682, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz03",
                type: "Bitmap",
                image: "p9_lz03",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9672, 9682, 9696, 9706, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz04",
                type: "Bitmap",
                image: "p9_lz04",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9696, 9706, 9720, 9730, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz05",
                type: "Bitmap",
                image: "p9_lz05",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9720, 9730, 9744, 9754, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz06",
                type: "Bitmap",
                image: "p9_lz06",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9744, 9754, 9768, 9778, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz07",
                type: "Bitmap",
                image: "p9_lz07",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9768, 9778, 9792, 9802, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz08",
                type: "Bitmap",
                image: "p9_lz08",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9792, 9802, 9816, 9826, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz09",
                type: "Bitmap",
                image: "p9_lz09",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9816, 9826, 9840, 9850, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz10",
                type: "Bitmap",
                image: "p9_lz10",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9840, 9850, 9864, 9874, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz11",
                type: "Bitmap",
                image: "p9_lz11",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9864, 9874, 9888, 9898, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz12",
                type: "Bitmap",
                image: "p9_lz12",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9888, 9898, 9912, 9922, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz13",
                type: "Bitmap",
                image: "p9_lz13",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9912, 9922, 9936, 9946, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz14",
                type: "Bitmap",
                image: "p9_lz14",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9936, 9946, 9960, 9970, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz15",
                type: "Bitmap",
                image: "p9_lz15",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9960, 9970, 9984, 9994, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz16",
                type: "Bitmap",
                image: "p9_lz16",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9984, 9994, 10008, 10018, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz17",
                type: "Bitmap",
                image: "p9_lz17",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10008, 10018, 10032, 10042, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz18",
                type: "Bitmap",
                image: "p9_lz18",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10032, 10042, 10056, 10066, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz19",
                type: "Bitmap",
                image: "p9_lz19",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10056, 10066, 10080, 10090, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz20",
                type: "Bitmap",
                image: "p9_lz20",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10080, 10090, 10104, 10114, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz21",
                type: "Bitmap",
                image: "p9_lz21",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10104, 10114, 10128, 10138, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz22",
                type: "Bitmap",
                image: "p9_lz22",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10128, 10138, 10152, 10162, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz23",
                type: "Bitmap",
                image: "p9_lz23",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10152, 10162, 10176, 10186, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lz24",
                type: "Bitmap",
                image: "p9_lz24",
                parent: "p9",
                delay: "p9",
                propes: {
                    y: 3435,
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 10176, 10186, 10200, 10210, 11e3],
                    value: [0, 1, 1, 0]
                }]
            }, {
                id: "p9_lztext3",
                type: "Bitmap",
                image: "p9_text3",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [670, 0, 683, 946],
                    y: 3674
                },
                animations: [{
                    prope: "alpha",
                    time: [7e3, 9600, 9610, 1e4],
                    value: [1, 0]
                }]
            }, {
                id: "p9_lztext2",
                type: "Bitmap",
                image: "p9_text3",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [0, 700, 661, 791],
                    x: 59,
                    y: 3747
                },
                animations: [{
                    prope: "y",
                    time: [7e3, 7500, 9500, 1e4],
                    value: [4e3, 3747]
                }, {
                    prope: "alpha",
                    time: [7e3, 9600, 9610, 1e4],
                    value: [1, 0]
                }]
            }, {
                id: "p9_lztext1",
                type: "Bitmap",
                image: "p9_text3",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [0, 0, 661, 692],
                    x: 55,
                    y: 3759
                },
                animations: [{
                    prope: "y",
                    time: [7e3, 7500, 9500, 1e4],
                    value: [3859, 3759]
                }, {
                    prope: "alpha",
                    time: [7e3, 9600, 9610, 1e4],
                    value: [1, 0]
                }]
            }, {
                id: "p9_end1",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [270, 250, 126, 30],
                    x: 312,
                    y: 5936 - t
                },
                animations: []
            }, {
                id: "p9_end2",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [270, 306, 126, 30],
                    x: 312,
                    y: 6092 - t
                },
                animations: [{
                    prope: "y",
                    time: [9900, 10100, 10500, 11900],
                    value: [6092 - t, 5992 - t]
                }]
            }, {
                id: "p9_end3",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [270, 362, 126, 30],
                    x: 312,
                    y: 6148 - t
                },
                animations: [{
                    prope: "y",
                    time: [9900, 10300, 10700, 11900],
                    value: [6148 - t, 6048 - t]
                }]
            }, {
                id: "p9_end4",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [270, 400, 426, 30],
                    x: 162,
                    y: 6260 - t
                },
                animations: [{
                    prope: "y",
                    time: [9900, 10700, 11300, 11900],
                    value: [6260 - t, 6160 - t]
                }]
            }, {
                id: "p9_end6",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [400, 310, 231, 50],
                    x: 264,
                    y: 5648
                },
                animations: [],
                touchend: function () {
                    window.location.search = "fr=reload&t=" + (new Date).getTime()
                }
            }, {
                id: "p9_logo",
                type: "Bitmap",
                image: "p9_text2",
                parent: "p9",
                delay: "p9",
                propes: {
                    rect: [400, 364, 224, 34],
                    x: 264,
                    y: 5726
                },
                animations: []
            }],
            d = null,
            m = {},
            f = function () {
                w(), b(), window.pages = m
            },
            _ = function () {
                for (var e = 0; e < h.length; e++) {
                    var t = h[e];
                    t.propes.mask && (t.propes.mask = m[t.propes.mask]), t.image ? t.propes.image = d.get(t.image).content : "", t.frames ? t.propes.frames = m[t.frames.split(".")[0]].getSprite(t.frames.split(".")[1]) : "", m[t.id] = new Hilo[t.type](t.propes), "Graphics" == t.type && t.draw.call(m[t.id]), t.touchend && (m[t.id].touchend = t.touchend, m[t.id].on("touchend", function () {
                        this.touchend()
                    })), "null" !== t.parent && m[t.id].addTo(t.parent ? m[t.parent] : a)
                }
                y.initFire(), v.init(), Hilo.Tween.to(m.p0_tipround, {
                    y: -40
                }, {
                    time: 1e3,
                    repeatDelay: 600,
                    loop: !0
                }), Hilo.Tween.to(m.p0_tipround, {
                    alpha: 0
                }, {
                    time: 1200,
                    repeatDelay: 400,
                    loop: !0,
                    ease: Hilo.Ease.Quad.EaseIn
                });
                for (var e = 0; e < p.length; e++) {
                    var i = p[e];
                    i.el = $("#" + i.id)[0]
                }
            },
            g = function (e, t, i) {
                var n = t;
                window.timer = n;
                for (var a = h.length, r = 0; r < a; r++)
                    for (var o = h[r], s = o.animations, l = 0; l < s.length; l++) {
                        var u = s[l],
                            d = u.value,
                            f = u.time,
                            _ = c[o.delay ? o.delay : "p1"];
                        n < f[1] + _ && n > f[0] + _ ? m[o.id][u.prope] = d[0] : n < f[f.length - 1] + _ && n > f[f.length - 2] + _ && (m[o.id][u.prope] = d[d.length - 1]);
                        for (var g = 0; g < d.length - 1; g++) n < f[g + 2] + _ && n > f[g + 1] + _ && (m[o.id][u.prope] = x(d[g], d[g + 1], f[g + 1] + _, f[g + 2] + _, n))
                    }
                t < 8500 ? (y.fired = !1, m.p3.alpha = 0) : t < 8600 && y.start();
                for (var e = 0; e < p.length; e++) {
                    var v = p[e];
                    v.start && t < v.start && !v.el.paused ? (v.played = "", v.el.pause(), D("min pause " + v.el.id + ", top:" + n)) : v.end && t >= v.end && !v.el.paused ? (v.el.pause(), v.played = "", D("max pause " + v.el.id + ", top:" + n)) : v.start && t >= v.start && !v.played && v.el.paused && (v.end && t < v.end || !v.end) && (v.el.play(), v.played = !0, D("play " + v.el.id + ", top:" + n))
                }
            },
            y = {
                fired: !1,
                firing: !1,
                time: 50,
                filter: $(".filter"),
                initFire: function () {
                    m.fires = [];
                    for (var e = 0; e < 39; e++) {
                        var i = d.get("p2_fire" + e).content,
                            n = new Hilo.Bitmap({
                                x: 0,
                                y: t - 1334,
                                alpha: 0,
                                image: i
                            }).addTo(m.p2);
                        m.fires.push(n)
                    }
                }, start: function () {
                    function e() {
                        y.filter.show(), y.firing = y.fired = !0, r.scrollTo(0, 8650);
                        var n = (new Date).getTime();
                        if (i > 38) return m.fires[38].alpha = 0, cancelAnimationFrame(e), y.firing = !1, m.p3.alpha = 1, void y.filter.hide();
                        if (n - t > y.time) {
                            for (var a = 0; a < m.fires.length; a++) m.fires[a].alpha = 0;
                            m.fires[i].alpha = 1, i++, t = n
                        }
                        requestAnimationFrame(e)
                    }
                    if (!y.firing && !y.fired) {
                        y.firing = y.fired = !0;
                        var t = (new Date).getTime(),
                            i = 0;
                        $("#z1_m2")[0].play(), e()
                    }
                }
            },
            v = {
                arr: [],
                len: 12,
                time: 120,
                init: function () {
                    console.log(v.len);
                    for (var e = 0; e < v.len; e++) {
                        var t = d.get("p4_craft" + 2 * e).content;
                        v.arr.push(new Hilo.Bitmap({
                            x: 0,
                            y: 458,
                            image: t
                        }).addTo(m.p4_craft))
                    }
                    v.start()
                }, start: function () {
                    function e() {
                        var n = (new Date).getTime();
                        if (n - t > v.time) {
                            for (var a = 0; a < v.arr.length; a++) v.arr[a].alpha = 0;
                            v.arr[i].alpha = 1, i = i + 1 >= v.len ? 0 : i + 1, t = n
                        }
                        requestAnimationFrame(e)
                    }
                    var t = (new Date).getTime(),
                        i = 0;
                    e()
                }
            },
            x = function (e, t, i, n, a) {
                return e + (t - e) / (n - i) * (a - i)
            },
            w = function () {
                i.attr({
                    width: e,
                    height: t
                }), a = new Hilo.Stage({
                    canvas: n,
                    width: e,
                    height: t
                });
                var r = new Hilo.Ticker(60);
                r.addTick(a), r.addTick(Hilo.Tween), r.start(), a.enableDOMEvent(Hilo.event.POINTER_START, !0), a.enableDOMEvent(Hilo.event.POINTER_MOVE, !0), a.enableDOMEvent(Hilo.event.POINTER_END, !0)
            },
            b = function () {
                var e = 0,
                    t = $(".cover .progress"),
                    i = l.length;
                d = new Hilo.LoadQueue, d.maxConnections = 5, d.add(l), d.on("load", function (n) {
                    e++;
                    var a = parseInt(e / i * 100, 10);
                    t.html(a + "%")
                }).on("error", function (n) {
                    e++;
                    var a = parseInt(e / i * 100, 10);
                    t.html(a + "%")
                }), d.on("complete", function () {
                    _(), T(), A(), $(".cover").addClass("active"), setTimeout(function () {
                        $(".cover").addClass("none")
                    }, 50), setTimeout(function () {
                        $(".cover").hide(), $(".logo").fadeOut(300)
                    }, 1400), setTimeout(function () {
                        $("audio").off();
                    }, 1400)
                }), d.start()
            },
            T = function () {
                i.on("touchstart", E).on("touchmove", S).on("touchend", C), r = new Scroller(g, {
                    zooming: !1,
                    animating: !0,
                    bouncing: !1,
                    animationDuration: 1e3
                }), r.setDimensions(e, t, e, 59e3 + t + 800 + 200), window.scroller = r
            },
            E = function (e) {
                var t = e;
                t.stopPropagation(), t.preventDefault(), o = !0, r.doTouchStart(t.touches, t.timeStamp)
            },
            S = function (e) {
                if (o) {
                    var t = e;
                    t.stopPropagation(), t.preventDefault(), r.doTouchMove(t.touches, t.timeStamp, t.scale)
                }
            },
            C = function (e) {
                var t = e;
                r.doTouchEnd(t.timeStamp), o = !1
            },
            A = function () {
                $(".filter,.cover").on("touchstart", function (e) {
                    e.stopPropagation(), e.preventDefault()
                })
            },
            B = function () {
                for (var e = 0; e < p.length; e++)! function (e) {
                    var t = $("#" + p[e].id)[0],
                        i = function () {
                            document.removeEventListener("WeixinJSBridgeReady", i), document.removeEventListener("YixinJSBridgeReady", i), t.play()
                        };
                    t.play(), $(t).on("play", function () {
                        this.pause()
                    }), document.addEventListener("WeixinJSBridgeReady", i, !1), document.addEventListener("YixinJSBridgeReady", i, !1)
                }(e)
            },
            D = function (e) {
                $(".log").append("<p>" + e + "</p>")
            };
        f(), B(), window.stage = a
    }
    $(e)
}();