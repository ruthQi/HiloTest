!
   function () {
      function t(t, e, n) {
         var i, r, o = document.querySelector('meta[name="viewport"]'),
            a = document.documentElement.clientWidth;
         switch (t) {
            case "fixed":
               i = e, r = a / e;
               break;
            case "rem":
               var s = window.devicePixelRatio || 1;
               i = a * s, r = 1 / s, document.documentElement.style.fontSize = 100 * (a * s / e) + "px"
         }
         o.setAttribute("content", "width=" + i + ",initial-scale=" + r + ",maximum-scale=" + r + ",minimum-scale=" + r), n && window.addEventListener("DOMContentLoaded", function () {
            document.body.style.fontSize = 50 / r + "px"
         })
      }
      t("fixed", 750)
   }();
var Zepto = function () {
   function t(t) {
      return null == t ? String(t) : $[Q.call(t)] || "object"
   }

   function e(e) {
      return "function" == t(e)
   }

   function n(t) {
      return null != t && t == t.window
   }

   function i(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE
   }

   function r(e) {
      return "object" == t(e)
   }

   function o(t) {
      return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
   }

   function a(t) {
      return "number" == typeof t.length
   }

   function s(t) {
      return P.call(t, function (t) {
         return null != t
      })
   }

   function c(t) {
      return t.length > 0 ? E.fn.concat.apply([], t) : t
   }

   function u(t) {
      return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
   }

   function l(t) {
      return t in R ? R[t] : R[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
   }

   function h(t, e) {
      return "number" != typeof e || L[u(t)] ? e : e + "px"
   }

   function d(t) {
      var e, n;
      return B[t] || (e = N.createElement(t), N.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), B[t] = n), B[t]
   }

   function f(t) {
      return "children" in t ? M.call(t.children) : E.map(t.childNodes, function (t) {
         if (1 == t.nodeType) return t
      })
   }

   function p(t, e) {
      var n, i = t ? t.length : 0;
      for (n = 0; n < i; n++) this[n] = t[n];
      this.length = i, this.selector = e || ""
   }

   function m(t, e, n) {
      for (b in e) n && (o(e[b]) || K(e[b])) ? (o(e[b]) && !o(t[b]) && (t[b] = {}), K(e[b]) && !K(t[b]) && (t[b] = []), m(t[b], e[b], n)) : e[b] !== T && (t[b] = e[b])
   }

   function g(t, e) {
      return null == e ? E(t) : E(t).filter(e)
   }

   function v(t, n, i, r) {
      return e(n) ? n.call(t, i, r) : n
   }

   function w(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
   }

   function _(t, e) {
      var n = t.className || "",
         i = n && n.baseVal !== T;
      return e === T ? i ? n.baseVal : n : void (i ? n.baseVal = e : t.className = e)
   }

   function y(t) {
      try {
         return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
      } catch (e) {
         return t
      }
   }

   function x(t, e) {
      e(t);
      for (var n = 0, i = t.childNodes.length; n < i; n++) x(t.childNodes[n], e)
   }
   var T, b, E, S, A, C, k = [],
      I = k.concat,
      P = k.filter,
      M = k.slice,
      N = window.document,
      B = {},
      R = {},
      L = {
         "column-count": 1,
         columns: 1,
         "font-weight": 1,
         "line-height": 1,
         opacity: 1,
         "z-index": 1,
         zoom: 1
      },
      D = /^\s*<(\w+|!)[^>]*>/,
      q = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      H = /^(?:body|html)$/i,
      F = /([A-Z])/g,
      U = ["val", "css", "html", "text", "data", "width", "height", "offset"],
      j = ["after", "prepend", "before", "append"],
      X = N.createElement("table"),
      W = N.createElement("tr"),
      V = {
         tr: N.createElement("tbody"),
         tbody: X,
         thead: X,
         tfoot: X,
         td: W,
         th: W,
         "*": N.createElement("div")
      },
      Y = /complete|loaded|interactive/,
      z = /^[\w-]*$/,
      $ = {},
      Q = $.toString,
      G = {},
      J = N.createElement("div"),
      Z = {
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
      K = Array.isArray ||
         function (t) {
            return t instanceof Array
         };
   return G.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
      if (n) return n.call(t, e);
      var i, r = t.parentNode,
         o = !r;
      return o && (r = J).appendChild(t), i = ~G.qsa(r, e).indexOf(t), o && J.removeChild(t), i
   }, A = function (t) {
      return t.replace(/-+(.)?/g, function (t, e) {
         return e ? e.toUpperCase() : ""
      })
   }, C = function (t) {
      return P.call(t, function (e, n) {
         return t.indexOf(e) == n
      })
   }, G.fragment = function (t, e, n) {
      var i, r, a;
      return q.test(t) && (i = E(N.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(O, "<$1></$2>")), e === T && (e = D.test(t) && RegExp.$1), e in V || (e = "*"), a = V[e], a.innerHTML = "" + t, i = E.each(M.call(a.childNodes), function () {
         a.removeChild(this)
      })), o(n) && (r = E(i), E.each(n, function (t, e) {
         U.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
      })), i
   }, G.Z = function (t, e) {
      return new p(t, e)
   }, G.isZ = function (t) {
      return t instanceof G.Z
   }, G.init = function (t, n) {
      var i;
      if (!t) return G.Z();
      if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && D.test(t)) i = G.fragment(t, RegExp.$1, n), t = null;
      else {
         if (n !== T) return E(n).find(t);
         i = G.qsa(N, t)
      } else {
         if (e(t)) return E(N).ready(t);
         if (G.isZ(t)) return t;
         if (K(t)) i = s(t);
         else if (r(t)) i = [t], t = null;
         else if (D.test(t)) i = G.fragment(t.trim(), RegExp.$1, n), t = null;
         else {
            if (n !== T) return E(n).find(t);
            i = G.qsa(N, t)
         }
      }
      return G.Z(i, t)
   }, E = function (t, e) {
      return G.init(t, e)
   }, E.extend = function (t) {
      var e, n = M.call(arguments, 1);
      return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
         m(t, n, e)
      }), t
   }, G.qsa = function (t, e) {
      var n, i = "#" == e[0],
         r = !i && "." == e[0],
         o = i || r ? e.slice(1) : e,
         a = z.test(o);
      return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : M.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
   }, E.contains = N.documentElement.contains ?
      function (t, e) {
         return t !== e && t.contains(e)
      } : function (t, e) {
         for (; e && (e = e.parentNode);) if (e === t) return !0;
         return !1
      }, E.type = t, E.isFunction = e, E.isWindow = n, E.isArray = K, E.isPlainObject = o, E.isEmptyObject = function (t) {
         var e;
         for (e in t) return !1;
         return !0
      }, E.inArray = function (t, e, n) {
         return k.indexOf.call(e, t, n)
      }, E.camelCase = A, E.trim = function (t) {
         return null == t ? "" : String.prototype.trim.call(t)
      }, E.uuid = 0, E.support = {}, E.expr = {}, E.noop = function () { }, E.map = function (t, e) {
         var n, i, r, o = [];
         if (a(t)) for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
         else for (r in t) n = e(t[r], r), null != n && o.push(n);
         return c(o)
      }, E.each = function (t, e) {
         var n, i;
         if (a(t)) {
            for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
         } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
         return t
      }, E.grep = function (t, e) {
         return P.call(t, e)
      }, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
         $["[object " + e + "]"] = e.toLowerCase()
      }), E.fn = {
         constructor: G.Z,
         length: 0,
         forEach: k.forEach,
         reduce: k.reduce,
         push: k.push,
         sort: k.sort,
         splice: k.splice,
         indexOf: k.indexOf,
         concat: function () {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
            return I.apply(G.isZ(this) ? this.toArray() : this, n)
         },
         map: function (t) {
            return E(E.map(this, function (e, n) {
               return t.call(e, n, e)
            }))
         },
         slice: function () {
            return E(M.apply(this, arguments))
         },
         ready: function (t) {
            return Y.test(N.readyState) && N.body ? t(E) : N.addEventListener("DOMContentLoaded", function () {
               t(E)
            }, !1), this
         },
         get: function (t) {
            return t === T ? M.call(this) : this[t >= 0 ? t : t + this.length]
         },
         toArray: function () {
            return this.get()
         },
         size: function () {
            return this.length
         },
         remove: function () {
            return this.each(function () {
               null != this.parentNode && this.parentNode.removeChild(this)
            })
         },
         each: function (t) {
            return k.every.call(this, function (e, n) {
               return t.call(e, n, e) !== !1
            }), this
         },
         filter: function (t) {
            return e(t) ? this.not(this.not(t)) : E(P.call(this, function (e) {
               return G.matches(e, t)
            }))
         },
         add: function (t, e) {
            return E(C(this.concat(E(t, e))))
         },
         is: function (t) {
            return this.length > 0 && G.matches(this[0], t)
         },
         not: function (t) {
            var n = [];
            if (e(t) && t.call !== T) this.each(function (e) {
               t.call(this, e) || n.push(this)
            });
            else {
               var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? M.call(t) : E(t);
               this.forEach(function (t) {
                  i.indexOf(t) < 0 && n.push(t)
               })
            }
            return E(n)
         },
         has: function (t) {
            return this.filter(function () {
               return r(t) ? E.contains(this, t) : E(this).find(t).size()
            })
         },
         eq: function (t) {
            return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
         },
         first: function () {
            var t = this[0];
            return t && !r(t) ? t : E(t)
         },
         last: function () {
            var t = this[this.length - 1];
            return t && !r(t) ? t : E(t)
         },
         find: function (t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? E(t).filter(function () {
               var t = this;
               return k.some.call(n, function (e) {
                  return E.contains(e, t)
               })
            }) : 1 == this.length ? E(G.qsa(this[0], t)) : this.map(function () {
               return G.qsa(this, t)
            }) : E()
         },
         closest: function (t, e) {
            var n = this[0],
               r = !1;
            for ("object" == typeof t && (r = E(t)); n && !(r ? r.indexOf(n) >= 0 : G.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
            return E(n)
         },
         parents: function (t) {
            for (var e = [], n = this; n.length > 0;) n = E.map(n, function (t) {
               if ((t = t.parentNode) && !i(t) && e.indexOf(t) < 0) return e.push(t), t
            });
            return g(e, t)
         },
         parent: function (t) {
            return g(C(this.pluck("parentNode")), t)
         },
         children: function (t) {
            return g(this.map(function () {
               return f(this)
            }), t)
         },
         contents: function () {
            return this.map(function () {
               return this.contentDocument || M.call(this.childNodes)
            })
         },
         siblings: function (t) {
            return g(this.map(function (t, e) {
               return P.call(f(e.parentNode), function (t) {
                  return t !== e
               })
            }), t)
         },
         empty: function () {
            return this.each(function () {
               this.innerHTML = ""
            })
         },
         pluck: function (t) {
            return E.map(this, function (e) {
               return e[t]
            })
         },
         show: function () {
            return this.each(function () {
               "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
            })
         },
         replaceWith: function (t) {
            return this.before(t).remove()
         },
         wrap: function (t) {
            var n = e(t);
            if (this[0] && !n) var i = E(t).get(0),
               r = i.parentNode || this.length > 1;
            return this.each(function (e) {
               E(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
         },
         wrapAll: function (t) {
            if (this[0]) {
               E(this[0]).before(t = E(t));
               for (var e;
                  (e = t.children()).length;) t = e.first();
               E(t).append(this)
            }
            return this
         },
         wrapInner: function (t) {
            var n = e(t);
            return this.each(function (e) {
               var i = E(this),
                  r = i.contents(),
                  o = n ? t.call(this, e) : t;
               r.length ? r.wrapAll(o) : i.append(o)
            })
         },
         unwrap: function () {
            return this.parent().each(function () {
               E(this).replaceWith(E(this).children())
            }), this
         },
         clone: function () {
            return this.map(function () {
               return this.cloneNode(!0)
            })
         },
         hide: function () {
            return this.css("display", "none")
         },
         toggle: function (t) {
            return this.each(function () {
               var e = E(this);
               (t === T ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
         },
         prev: function (t) {
            return E(this.pluck("previousElementSibling")).filter(t || "*")
         },
         next: function (t) {
            return E(this.pluck("nextElementSibling")).filter(t || "*")
         },
         html: function (t) {
            return 0 in arguments ? this.each(function (e) {
               var n = this.innerHTML;
               E(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
         },
         text: function (t) {
            return 0 in arguments ? this.each(function (e) {
               var n = v(this, t, e, this.textContent);
               this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
         },
         attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
               if (1 === this.nodeType) if (r(t)) for (b in t) w(this, b, t[b]);
               else w(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : T
         },
         removeAttr: function (t) {
            return this.each(function () {
               1 === this.nodeType && t.split(" ").forEach(function (t) {
                  w(this, t)
               }, this)
            })
         },
         prop: function (t, e) {
            return t = Z[t] || t, 1 in arguments ? this.each(function (n) {
               this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
         },
         data: function (t, e) {
            var n = "data-" + t.replace(F, "-$1").toLowerCase(),
               i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? y(i) : T
         },
         val: function (t) {
            return 0 in arguments ? this.each(function (e) {
               this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function () {
               return this.selected
            }).pluck("value") : this[0].value)
         },
         offset: function (t) {
            if (t) return this.each(function (e) {
               var n = E(this),
                  i = v(this, t, e, n.offset()),
                  r = n.offsetParent().offset(),
                  o = {
                     top: i.top - r.top,
                     left: i.left - r.left
                  };
               "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length) return null;
            if (!E.contains(N.documentElement, this[0])) return {
               top: 0,
               left: 0
            };
            var e = this[0].getBoundingClientRect();
            return {
               left: e.left + window.pageXOffset,
               top: e.top + window.pageYOffset,
               width: Math.round(e.width),
               height: Math.round(e.height)
            }
         },
         css: function (e, n) {
            if (arguments.length < 2) {
               var i, r = this[0];
               if (!r) return;
               if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[A(e)] || i.getPropertyValue(e);
               if (K(e)) {
                  var o = {};
                  return E.each(e, function (t, e) {
                     o[e] = r.style[A(e)] || i.getPropertyValue(e)
                  }), o
               }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = u(e) + ":" + h(e, n) : this.each(function () {
               this.style.removeProperty(u(e))
            });
            else for (b in e) e[b] || 0 === e[b] ? a += u(b) + ":" + h(b, e[b]) + ";" : this.each(function () {
               this.style.removeProperty(u(b))
            });
            return this.each(function () {
               this.style.cssText += ";" + a
            })
         },
         index: function (t) {
            return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
         },
         hasClass: function (t) {
            return !!t && k.some.call(this, function (t) {
               return this.test(_(t))
            }, l(t))
         },
         addClass: function (t) {
            return t ? this.each(function (e) {
               if ("className" in this) {
                  S = [];
                  var n = _(this),
                     i = v(this, t, e, n);
                  i.split(/\s+/g).forEach(function (t) {
                     E(this).hasClass(t) || S.push(t)
                  }, this), S.length && _(this, n + (n ? " " : "") + S.join(" "))
               }
            }) : this
         },
         removeClass: function (t) {
            return this.each(function (e) {
               if ("className" in this) {
                  if (t === T) return _(this, "");
                  S = _(this), v(this, t, e, S).split(/\s+/g).forEach(function (t) {
                     S = S.replace(l(t), " ")
                  }), _(this, S.trim())
               }
            })
         },
         toggleClass: function (t, e) {
            return t ? this.each(function (n) {
               var i = E(this),
                  r = v(this, t, n, _(this));
               r.split(/\s+/g).forEach(function (t) {
                  (e === T ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
               })
            }) : this
         },
         scrollTop: function (t) {
            if (this.length) {
               var e = "scrollTop" in this[0];
               return t === T ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ?
                  function () {
                     this.scrollTop = t
                  } : function () {
                     this.scrollTo(this.scrollX, t)
                  })
            }
         },
         scrollLeft: function (t) {
            if (this.length) {
               var e = "scrollLeft" in this[0];
               return t === T ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ?
                  function () {
                     this.scrollLeft = t
                  } : function () {
                     this.scrollTo(t, this.scrollY)
                  })
            }
         },
         position: function () {
            if (this.length) {
               var t = this[0],
                  e = this.offsetParent(),
                  n = this.offset(),
                  i = H.test(e[0].nodeName) ? {
                     top: 0,
                     left: 0
                  } : e.offset();
               return n.top -= parseFloat(E(t).css("margin-top")) || 0, n.left -= parseFloat(E(t).css("margin-left")) || 0, i.top += parseFloat(E(e[0]).css("border-top-width")) || 0, i.left += parseFloat(E(e[0]).css("border-left-width")) || 0, {
                  top: n.top - i.top,
                  left: n.left - i.left
               }
            }
         },
         offsetParent: function () {
            return this.map(function () {
               for (var t = this.offsetParent || N.body; t && !H.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
               return t
            })
         }
      }, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function (t) {
         var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
         });
         E.fn[t] = function (r) {
            var o, a = this[0];
            return r === T ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
               a = E(this), a.css(t, v(this, r, e, a[t]()))
            })
         }
      }), j.forEach(function (e, n) {
         var i = n % 2;
         E.fn[e] = function () {
            var e, r, o = E.map(arguments, function (n) {
               return e = t(n), "object" == e || "array" == e || null == n ? n : G.fragment(n)
            }),
               a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
               r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
               var s = E.contains(N.documentElement, r);
               o.forEach(function (t) {
                  if (a) t = t.cloneNode(!0);
                  else if (!r) return E(t).remove();
                  r.insertBefore(t, e), s && x(t, function (t) {
                     null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                  })
               })
            })
         }, E.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return E(t)[e](this), this
         }
      }), G.Z.prototype = p.prototype = E.fn, G.uniq = C, G.deserializeValue = y, E.zepto = G, E
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
   function e(e, n, i) {
      var r = t.Event(n);
      return t(e).trigger(r, i), !r.isDefaultPrevented()
   }

   function n(t, n, i, r) {
      if (t.global) return e(n || w, i, r)
   }

   function i(e) {
      e.global && 0 === t.active++ && n(e, null, "ajaxStart")
   }

   function r(e) {
      e.global && !--t.active && n(e, null, "ajaxStop")
   }

   function o(t, e) {
      var i = e.context;
      return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
   }

   function a(t, e, i, r) {
      var o = i.context,
         a = "success";
      i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), c(a, e, i)
   }

   function s(t, e, i, r, o) {
      var a = r.context;
      r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), c(e, i, r)
   }

   function c(t, e, i) {
      var o = i.context;
      i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
   }

   function u() { }

   function l(t) {
      return t && (t = t.split(";", 2)[0]), t && (t == b ? "html" : t == T ? "json" : y.test(t) ? "script" : x.test(t) && "xml") || "text"
   }

   function h(t, e) {
      return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
   }

   function d(e) {
      e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = h(e.url, e.data), e.data = void 0)
   }

   function f(e, n, i, r) {
      return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
         url: e,
         data: n,
         success: i,
         dataType: r
      }
   }

   function p(e, n, i, r) {
      var o, a = t.isArray(n),
         s = t.isPlainObject(n);
      t.each(n, function (n, c) {
         o = t.type(c), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(c.name, c.value) : "array" == o || !i && "object" == o ? p(e, c, i, n) : e.add(n, c)
      })
   }
   var m, g, v = 0,
      w = window.document,
      _ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      y = /^(?:text|application)\/javascript/i,
      x = /^(?:text|application)\/xml/i,
      T = "application/json",
      b = "text/html",
      E = /^\s*$/,
      S = w.createElement("a");
   S.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
      if (!("type" in e)) return t.ajax(e);
      var i, r, c = e.jsonpCallback,
         u = (t.isFunction(c) ? c() : c) || "jsonp" + ++v,
         l = w.createElement("script"),
         h = window[u],
         d = function (e) {
            t(l).triggerHandler("error", e || "abort")
         },
         f = {
            abort: d
         };
      return n && n.promise(f), t(l).on("load error", function (o, c) {
         clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], f, e, n) : s(null, c || "error", f, e, n), window[u] = h, i && t.isFunction(h) && h(i[0]), h = i = void 0
      }), o(f, e) === !1 ? (d("abort"), f) : (window[u] = function () {
         i = arguments
      }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), w.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function () {
         d("timeout")
      }, e.timeout)), f)
   }, t.ajaxSettings = {
      type: "GET",
      beforeSend: u,
      success: u,
      error: u,
      complete: u,
      context: null,
      global: !0,
      xhr: function () {
         return new window.XMLHttpRequest
      },
      accepts: {
         script: "text/javascript, application/javascript, application/x-javascript",
         json: T,
         xml: "application/xml, text/xml",
         html: b,
         text: "text/plain"
      },
      crossDomain: !1,
      timeout: 0,
      processData: !0,
      cache: !0
   }, t.ajax = function (e) {
      var n, r, c = t.extend({}, e || {}),
         f = t.Deferred && t.Deferred();
      for (m in t.ajaxSettings) void 0 === c[m] && (c[m] = t.ajaxSettings[m]);
      i(c), c.crossDomain || (n = w.createElement("a"), n.href = c.url, n.href = n.href, c.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host), c.url || (c.url = window.location.toString()), (r = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, r)), d(c);
      var p = c.dataType,
         v = /\?.+=\?/.test(c.url);
      if (v && (p = "jsonp"), c.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (c.url = h(c.url, "_=" + Date.now())), "jsonp" == p) return v || (c.url = h(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(c, f);
      var _, y = c.accepts[p],
         x = {},
         T = function (t, e) {
            x[t.toLowerCase()] = [t, e]
         },
         b = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : window.location.protocol,
         A = c.xhr(),
         C = A.setRequestHeader;
      if (f && f.promise(A), c.crossDomain || T("X-Requested-With", "XMLHttpRequest"), T("Accept", y || "*/*"), (y = c.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), A.overrideMimeType && A.overrideMimeType(y)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && T("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (g in c.headers) T(g, c.headers[g]);
      if (A.setRequestHeader = T, A.onreadystatechange = function () {
         if (4 == A.readyState) {
            A.onreadystatechange = u, clearTimeout(_);
            var e, n = !1;
            if (A.status >= 200 && A.status < 300 || 304 == A.status || 0 == A.status && "file:" == b) {
               p = p || l(c.mimeType || A.getResponseHeader("content-type")), e = A.responseText;
               try {
                  "script" == p ? (0, eval)(e) : "xml" == p ? e = A.responseXML : "json" == p && (e = E.test(e) ? null : t.parseJSON(e))
               } catch (i) {
                  n = i
               }
               n ? s(n, "parsererror", A, c, f) : a(e, A, c, f)
            } else s(A.statusText || null, A.status ? "error" : "abort", A, c, f)
         }
      }, o(A, c) === !1) return A.abort(), s(null, "abort", A, c, f), A;
      if (c.xhrFields) for (g in c.xhrFields) A[g] = c.xhrFields[g];
      var k = !("async" in c) || c.async;
      A.open(c.type, c.url, k, c.username, c.password);
      for (g in x) C.apply(A, x[g]);
      return c.timeout > 0 && (_ = setTimeout(function () {
         A.onreadystatechange = u, A.abort(), s(null, "timeout", A, c, f)
      }, c.timeout)), A.send(c.data ? c.data : null), A
   }, t.get = function () {
      return t.ajax(f.apply(null, arguments))
   }, t.post = function () {
      var e = f.apply(null, arguments);
      return e.type = "POST", t.ajax(e)
   }, t.getJSON = function () {
      var e = f.apply(null, arguments);
      return e.dataType = "json", t.ajax(e)
   }, t.fn.load = function (e, n, i) {
      if (!this.length) return this;
      var r, o = this,
         a = e.split(/\s/),
         s = f(e, n, i),
         c = s.success;
      return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function (e) {
         o.html(r ? t("<div>").html(e.replace(_, "")).find(r) : e), c && c.apply(o, arguments)
      }, t.ajax(s), this
   };
   var A = encodeURIComponent;
   t.param = function (e, n) {
      var i = [];
      return i.add = function (e, n) {
         t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(A(e) + "=" + A(n))
      }, p(i, e, n), i.join("&").replace(/%20/g, "+")
   }
}(Zepto), function (t) {
   function e(t, e) {
      var n = this.os = {},
         i = this.browser = {},
         r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
         o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
         a = !!t.match(/\(Macintosh\; Intel /),
         s = t.match(/(iPad).*OS\s([\d_]+)/),
         c = t.match(/(iPod)(.*OS\s([\d_]+))?/),
         u = !s && t.match(/(iPhone\sOS)\s([\d_]+)/),
         l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
         h = /Win\d{2}|Windows/.test(e),
         d = t.match(/Windows Phone ([\d.]+)/),
         f = l && t.match(/TouchPad/),
         p = t.match(/Kindle\/([\d.]+)/),
         m = t.match(/Silk\/([\d._]+)/),
         g = t.match(/(BlackBerry).*Version\/([\d.]+)/),
         v = t.match(/(BB10).*Version\/([\d.]+)/),
         w = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
         _ = t.match(/PlayBook/),
         y = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
         x = t.match(/Firefox\/([\d.]+)/),
         T = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
         b = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
         E = !y && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
         S = E || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
      (i.webkit = !!r) && (i.version = r[1]), o && (n.android = !0, n.version = o[2]), u && !c && (n.ios = n.iphone = !0, n.version = u[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), c && (n.ios = n.ipod = !0, n.version = c[3] ? c[3].replace(/_/g, ".") : null), d && (n.wp = !0, n.version = d[1]), l && (n.webos = !0, n.version = l[2]), f && (n.touchpad = !0), g && (n.blackberry = !0, n.version = g[2]), v && (n.bb10 = !0, n.version = v[2]), w && (n.rimtabletos = !0, n.version = w[2]), _ && (i.playbook = !0), p && (n.kindle = !0, n.version = p[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), y && (i.chrome = !0, i.version = y[1]), x && (i.firefox = !0, i.version = x[1]), T && (n.firefoxos = !0, n.version = T[1]), b && (i.ie = !0, i.version = b[1]), S && (a || n.ios || h) && (i.safari = !0, n.ios || (i.version = S[1])), E && (i.webview = !0), n.tablet = !!(s || _ || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || b && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || u || l || g || v || y && t.match(/Android/) || y && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || b && t.match(/Touch/)))
   }
   e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function (t) {
   function e(t) {
      return t._zid || (t._zid = d++)
   }

   function n(t, n, o, a) {
      if (n = i(n), n.ns) var s = r(n.ns);
      return (g[e(t)] || []).filter(function (t) {
         return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
      })
   }

   function i(t) {
      var e = ("" + t).split(".");
      return {
         e: e[0],
         ns: e.slice(1).sort().join(" ")
      }
   }

   function r(t) {
      return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
   }

   function o(t, e) {
      return t.del && !w && t.e in _ || !!e
   }

   function a(t) {
      return y[t] || w && _[t] || t
   }

   function s(n, r, s, c, l, d, f) {
      var p = e(n),
         m = g[p] || (g[p] = []);
      r.split(/\s/).forEach(function (e) {
         if ("ready" == e) return t(document).ready(s);
         var r = i(e);
         r.fn = s, r.sel = l, r.e in y && (s = function (e) {
            var n = e.relatedTarget;
            if (!n || n !== this && !t.contains(this, n)) return r.fn.apply(this, arguments)
         }), r.del = d;
         var p = d || s;
         r.proxy = function (t) {
            if (t = u(t), !t.isImmediatePropagationStopped()) {
               t.data = c;
               var e = p.apply(n, t._args == h ? [t] : [t].concat(t._args));
               return e === !1 && (t.preventDefault(), t.stopPropagation()), e
            }
         }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, f))
      })
   }

   function c(t, i, r, s, c) {
      var u = e(t);
      (i || "").split(/\s/).forEach(function (e) {
         n(t, e, r, s).forEach(function (e) {
            delete g[u][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, c))
         })
      })
   }

   function u(e, n) {
      return !n && e.isDefaultPrevented || (n || (n = e), t.each(E, function (t, i) {
         var r = n[t];
         e[t] = function () {
            return this[i] = x, r && r.apply(n, arguments)
         }, e[i] = T
      }), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), e
   }

   function l(t) {
      var e, n = {
         originalEvent: t
      };
      for (e in t) b.test(e) || t[e] === h || (n[e] = t[e]);
      return u(n, t)
   }
   var h, d = 1,
      f = Array.prototype.slice,
      p = t.isFunction,
      m = function (t) {
         return "string" == typeof t
      },
      g = {},
      v = {},
      w = "onfocusin" in window,
      _ = {
         focus: "focusin",
         blur: "focusout"
      },
      y = {
         mouseenter: "mouseover",
         mouseleave: "mouseout"
      };
   v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
      add: s,
      remove: c
   }, t.proxy = function (n, i) {
      var r = 2 in arguments && f.call(arguments, 2);
      if (p(n)) {
         var o = function () {
            return n.apply(i, r ? r.concat(f.call(arguments)) : arguments)
         };
         return o._zid = e(n), o
      }
      if (m(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
      throw new TypeError("expected function")
   }, t.fn.bind = function (t, e, n) {
      return this.on(t, e, n)
   }, t.fn.unbind = function (t, e) {
      return this.off(t, e)
   }, t.fn.one = function (t, e, n, i) {
      return this.on(t, e, n, i, 1)
   };
   var x = function () {
      return !0
   },
      T = function () {
         return !1
      },
      b = /^([A-Z]|returnValue$|layer[XY]$)/,
      E = {
         preventDefault: "isDefaultPrevented",
         stopImmediatePropagation: "isImmediatePropagationStopped",
         stopPropagation: "isPropagationStopped"
      };
   t.fn.delegate = function (t, e, n) {
      return this.on(e, t, n)
   }, t.fn.undelegate = function (t, e, n) {
      return this.off(e, t, n)
   }, t.fn.live = function (e, n) {
      return t(document.body).delegate(this.selector, e, n), this
   }, t.fn.die = function (e, n) {
      return t(document.body).undelegate(this.selector, e, n), this
   }, t.fn.on = function (e, n, i, r, o) {
      var a, u, d = this;
      return e && !m(e) ? (t.each(e, function (t, e) {
         d.on(t, n, i, e, o)
      }), d) : (m(n) || p(r) || r === !1 || (r = i, i = n, n = h), r !== h && i !== !1 || (r = i, i = h), r === !1 && (r = T), d.each(function (h, d) {
         o && (a = function (t) {
            return c(d, t.type, r), r.apply(this, arguments)
         }), n && (u = function (e) {
            var i, o = t(e.target).closest(n, d).get(0);
            if (o && o !== d) return i = t.extend(l(e), {
               currentTarget: o,
               liveFired: d
            }), (a || r).apply(o, [i].concat(f.call(arguments, 1)))
         }), s(d, e, r, i, n, u || a)
      }))
   }, t.fn.off = function (e, n, i) {
      var r = this;
      return e && !m(e) ? (t.each(e, function (t, e) {
         r.off(t, n, e)
      }), r) : (m(n) || p(i) || i === !1 || (i = n, n = h), i === !1 && (i = T), r.each(function () {
         c(this, e, i, n)
      }))
   }, t.fn.trigger = function (e, n) {
      return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function () {
         e.type in _ && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
      })
   }, t.fn.triggerHandler = function (e, i) {
      var r, o;
      return this.each(function (a, s) {
         r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function (t, e) {
            if (o = e.proxy(r), r.isImmediatePropagationStopped()) return !1
         })
      }), o
   }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
      t.fn[e] = function (t) {
         return 0 in arguments ? this.bind(e, t) : this.trigger(e)
      }
   }), t.Event = function (t, e) {
      m(t) || (e = t, t = e.type);
      var n = document.createEvent(v[t] || "Events"),
         i = !0;
      if (e) for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
      return n.initEvent(t, i, !0), u(n)
   }
}(Zepto), function (t) {
   t.fn.serializeArray = function () {
      var e, n, i = [],
         r = function (t) {
            return t.forEach ? t.forEach(r) : void i.push({
               name: e,
               value: t
            })
         };
      return this[0] && t.each(this[0].elements, function (i, o) {
         n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
      }), i
   }, t.fn.serialize = function () {
      var t = [];
      return this.serializeArray().forEach(function (e) {
         t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
      }), t.join("&")
   }, t.fn.submit = function (e) {
      if (0 in arguments) this.bind("submit", e);
      else if (this.length) {
         var n = t.Event("submit");
         this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
      }
      return this
   }
}(Zepto), function (t, e) {
   function n(t) {
      return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
   }

   function i(t) {
      return r ? r + t : t.toLowerCase()
   }
   var r, o, a, s, c, u, l, h, d, f, p = "",
      m = {
         Webkit: "webkit",
         Moz: "",
         O: "o"
      },
      g = document.createElement("div"),
      v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      w = {};
   t.each(m, function (t, n) {
      if (g.style[t + "TransitionProperty"] !== e) return p = "-" + t.toLowerCase() + "-", r = n, !1
   }), o = p + "transform", w[a = p + "transition-property"] = w[s = p + "transition-duration"] = w[u = p + "transition-delay"] = w[c = p + "transition-timing-function"] = w[l = p + "animation-name"] = w[h = p + "animation-duration"] = w[f = p + "animation-delay"] = w[d = p + "animation-timing-function"] = "", t.fx = {
      off: r === e && g.style.transitionProperty === e,
      speeds: {
         _default: 400,
         fast: 200,
         slow: 600
      },
      cssPrefix: p,
      transitionEnd: i("TransitionEnd"),
      animationEnd: i("AnimationEnd")
   }, t.fn.animate = function (n, i, r, o, a) {
      return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
   }, t.fn.anim = function (i, r, p, m, g) {
      var _, y, x, T = {},
         b = "",
         E = this,
         S = t.fx.transitionEnd,
         A = !1;
      if (r === e && (r = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (r = 0), "string" == typeof i) T[l] = i, T[h] = r + "s", T[f] = g + "s", T[d] = p || "linear", S = t.fx.animationEnd;
      else {
         y = [];
         for (_ in i) v.test(_) ? b += _ + "(" + i[_] + ") " : (T[_] = i[_], y.push(n(_)));
         b && (T[o] = b, y.push(o)), r > 0 && "object" == typeof i && (T[a] = y.join(", "), T[s] = r + "s", T[u] = g + "s", T[c] = p || "linear")
      }
      return x = function (e) {
         if ("undefined" != typeof e) {
            if (e.target !== e.currentTarget) return;
            t(e.target).unbind(S, x)
         } else t(this).unbind(S, x);
         A = !0, t(this).css(w), m && m.call(this)
      }, r > 0 && (this.bind(S, x), setTimeout(function () {
         A || x.call(E)
      }, 1e3 * (r + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), r <= 0 && setTimeout(function () {
         E.each(function () {
            x.call(this)
         })
      }, 0), this
   }, g = null
}(Zepto), function (t, e) {
   function n(n, i, r, o, a) {
      "function" != typeof i || a || (a = i, i = e);
      var s = {
         opacity: r
      };
      return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
   }

   function i(e, i, r, o) {
      return n(e, i, 0, r, function () {
         a.call(t(this)), o && o.call(this)
      })
   }
   var r = window.document,
      o = (r.documentElement, t.fn.show),
      a = t.fn.hide,
      s = t.fn.toggle;
   t.fn.show = function (t, i) {
      return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
   }, t.fn.hide = function (t, n) {
      return t === e ? a.call(this) : i(this, t, "0,0", n)
   }, t.fn.toggle = function (n, i) {
      return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function () {
         var e = t(this);
         e["none" == e.css("display") ? "show" : "hide"](n, i)
      })
   }, t.fn.fadeTo = function (t, e, i) {
      return n(this, t, e, null, i)
   }, t.fn.fadeIn = function (t, e) {
      var n = this.css("opacity");
      return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
   }, t.fn.fadeOut = function (t, e) {
      return i(this, t, null, e)
   }, t.fn.fadeToggle = function (e, n) {
      return this.each(function () {
         var i = t(this);
         i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
      })
   }
}(Zepto), function (t) {
   function e(t) {
      return "tagName" in t ? t : t.parentNode
   }
   if (t.os.ios) {
      var n, i = {};
      t(document).bind("gesturestart", function (t) {
         var r = Date.now();
         r - (i.last || r);
         i.target = e(t.target), n && clearTimeout(n), i.e1 = t.scale, i.last = r
      }).bind("gesturechange", function (t) {
         i.e2 = t.scale
      }).bind("gestureend", function (e) {
         i.e2 > 0 ? (0 != Math.abs(i.e1 - i.e2) && t(i.target).trigger("pinch") && t(i.target).trigger("pinch" + (i.e1 - i.e2 > 0 ? "In" : "Out")), i.e1 = i.e2 = i.last = 0) : "last" in i && (i = {})
      }), ["pinch", "pinchIn", "pinchOut"].forEach(function (e) {
         t.fn[e] = function (t) {
            return this.bind(e, t)
         }
      })
   }
}(Zepto), function (t) {
   function e(e) {
      return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
   }

   function n(t, e) {
      t = t.replace(/=#\]/g, '="#"]');
      var n, i, r = s.exec(t);
      if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
         var o = Number(i);
         i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
      }
      return e(t, n, i)
   }
   var i = t.zepto,
      r = i.qsa,
      o = i.matches,
      a = t.expr[":"] = {
         visible: function () {
            if (e(this)) return this
         },
         hidden: function () {
            if (!e(this)) return this
         },
         selected: function () {
            if (this.selected) return this
         },
         checked: function () {
            if (this.checked) return this
         },
         parent: function () {
            return this.parentNode
         },
         first: function (t) {
            if (0 === t) return this
         },
         last: function (t, e) {
            if (t === e.length - 1) return this
         },
         eq: function (t, e, n) {
            if (t === n) return this
         },
         contains: function (e, n, i) {
            if (t(this).text().indexOf(i) > -1) return this;
         },
         has: function (t, e, n) {
            if (i.qsa(this, n).length) return this
         }
      },
      s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
      c = /^\s*>/,
      u = "Zepto" + +new Date;
   i.qsa = function (e, o) {
      return n(o, function (n, a, s) {
         try {
            var l;
            !n && a ? n = "*" : c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
            var h = r(e, n)
         } catch (d) {
            throw console.error("error performing selector: %o", o), d
         } finally {
            l && l.removeClass(u)
         }
         return a ? i.uniq(t.map(h, function (t, e) {
            return a.call(t, e, h, s)
         })) : h
      })
   }, i.matches = function (t, e) {
      return n(e, function (e, n, i) {
         return (!e || o(t, e)) && (!n || n.call(t, null, i) === t)
      })
   }
}(Zepto), function (t) {
   t.fn.end = function () {
      return this.prevObject || t()
   }, t.fn.andSelf = function () {
      return this.add(this.prevObject || t())
   }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function (e) {
      var n = t.fn[e];
      t.fn[e] = function () {
         var t = n.apply(this, arguments);
         return t.prevObject = this, t
      }
   })
}(Zepto), function (t) {
   function e(t, e, n, i) {
      return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
   }

   function n() {
      l = null, d.last && (d.el.trigger("longTap"), d = {})
   }

   function i() {
      l && clearTimeout(l), l = null
   }

   function r() {
      s && clearTimeout(s), c && clearTimeout(c), u && clearTimeout(u), l && clearTimeout(l), s = c = u = l = null, d = {}
   }

   function o(t) {
      return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
   }

   function a(t, e) {
      return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
   }
   var s, c, u, l, h, d = {},
      f = 750;
   t(document).ready(function () {
      var p, m, g, v, w = 0,
         _ = 0;
      "MSGesture" in window && (h = new MSGesture, h.target = document.body), t(document).bind("MSGestureEnd", function (t) {
         var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
         e && (d.el.trigger("swipe"), d.el.trigger("swipe" + e))
      }).on("touchstart MSPointerDown pointerdown", function (e) {
         (v = a(e, "down")) && !o(e) || (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && d.x2 && (d.x2 = void 0, d.y2 = void 0), p = Date.now(), m = p - (d.last || p), d.el = t("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), d.x1 = g.pageX, d.y1 = g.pageY, m > 0 && m <= 250 && (d.isDoubleTap = !0), d.last = p, l = setTimeout(n, f), h && v && h.addPointer(e.pointerId))
      }).on("touchmove MSPointerMove pointermove", function (t) {
         (v = a(t, "move")) && !o(t) || (g = v ? t : t.touches[0], i(), d.x2 = g.pageX, d.y2 = g.pageY, w += Math.abs(d.x1 - d.x2), _ += Math.abs(d.y1 - d.y2))
      }).on("touchend MSPointerUp pointerup", function (n) {
         (v = a(n, "up")) && !o(n) || (i(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? u = setTimeout(function () {
            d.el.trigger("swipe"), d.el.trigger("swipe" + e(d.x1, d.x2, d.y1, d.y2)), d = {}
         }, 0) : "last" in d && (w < 30 && _ < 30 ? c = setTimeout(function () {
            var e = t.Event("tap");
            e.cancelTouch = r, d.el && d.el.trigger(e), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : s = setTimeout(function () {
               s = null, d.el && d.el.trigger("singleTap"), d = {}
            }, 250)
         }, 0) : d = {}), w = _ = 0)
      }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r)
   }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
      t.fn[e] = function (t) {
         return this.on(e, t)
      }
   })
}(Zepto);
var QRCode;
!
   function () {
      function t(t) {
         this.mode = u.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
         for (var e = 0, n = this.data.length; n > e; e++) {
            var i = [],
               r = this.data.charCodeAt(e);
            r > 65536 ? (i[0] = 240 | (1835008 & r) >>> 18, i[1] = 128 | (258048 & r) >>> 12, i[2] = 128 | (4032 & r) >>> 6, i[3] = 128 | 63 & r) : r > 2048 ? (i[0] = 224 | (61440 & r) >>> 12, i[1] = 128 | (4032 & r) >>> 6, i[2] = 128 | 63 & r) : r > 128 ? (i[0] = 192 | (1984 & r) >>> 6, i[1] = 128 | 63 & r) : i[0] = r, this.parsedData.push(i)
         }
         this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
      }

      function e(t, e) {
         this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
      }

      function n(t, e) {
         if (void 0 == t.length) throw new Error(t.length + "/" + e);
         for (var n = 0; n < t.length && 0 == t[n];) n++;
         this.num = new Array(t.length - n + e);
         for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n]
      }

      function i(t, e) {
         this.totalCount = t, this.dataCount = e
      }

      function r() {
         this.buffer = [], this.length = 0
      }

      function o() {
         return "undefined" != typeof CanvasRenderingContext2D
      }

      function a() {
         var t = !1,
            e = navigator.userAgent;
         if (/android/i.test(e)) {
            t = !0;
            var n = e.toString().match(/android ([0-9]\.[0-9])/i);
            n && n[1] && (t = parseFloat(n[1]))
         }
         return t
      }

      function s(t, e) {
         for (var n = 1, i = c(t), r = 0, o = m.length; o >= r; r++) {
            var a = 0;
            switch (e) {
               case l.L:
                  a = m[r][0];
                  break;
               case l.M:
                  a = m[r][1];
                  break;
               case l.Q:
                  a = m[r][2];
                  break;
               case l.H:
                  a = m[r][3]
            }
            if (a >= i) break;
            n++
         }
         if (n > m.length) throw new Error("Too long data");
         return n
      }

      function c(t) {
         var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
         return e.length + (e.length != t ? 3 : 0)
      }
      t.prototype = {
         getLength: function () {
            return this.parsedData.length
         },
         write: function (t) {
            for (var e = 0, n = this.parsedData.length; n > e; e++) t.put(this.parsedData[e], 8)
         }
      }, e.prototype = {
         addData: function (e) {
            var n = new t(e);
            this.dataList.push(n), this.dataCache = null
         },
         isDark: function (t, e) {
            if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw new Error(t + "," + e);
            return this.modules[t][e]
         },
         getModuleCount: function () {
            return this.moduleCount
         },
         make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
         },
         makeImpl: function (t, n) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
               this.modules[i] = new Array(this.moduleCount);
               for (var r = 0; r < this.moduleCount; r++) this.modules[i][r] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, n), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
         },
         setupPositionProbePattern: function (t, e) {
            for (var n = -1; 7 >= n; n++) if (!(-1 >= t + n || this.moduleCount <= t + n)) for (var i = -1; 7 >= i; i++) - 1 >= e + i || this.moduleCount <= e + i || (this.modules[t + n][e + i] = n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 2 && 4 >= n && i >= 2 && 4 >= i)
         },
         getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; 8 > n; n++) {
               this.makeImpl(!0, n);
               var i = d.getLostPoint(this);
               (0 == n || t > i) && (t = i, e = n)
            }
            return e
         },
         createMovieClip: function (t, e, n) {
            var i = t.createEmptyMovieClip(e, n),
               r = 1;
            this.make();
            for (var o = 0; o < this.modules.length; o++) for (var a = o * r, s = 0; s < this.modules[o].length; s++) {
               var c = s * r,
                  u = this.modules[o][s];
               u && (i.beginFill(0, 100), i.moveTo(c, a), i.lineTo(c + r, a), i.lineTo(c + r, a + r), i.lineTo(c, a + r), i.endFill())
            }
            return i
         },
         setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
         },
         setupPositionAdjustPattern: function () {
            for (var t = d.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
               var i = t[e],
                  r = t[n];
               if (null == this.modules[i][r]) for (var o = -2; 2 >= o; o++) for (var a = -2; 2 >= a; a++) this.modules[i + o][r + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
            }
         },
         setupTypeNumber: function (t) {
            for (var e = d.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
               var i = !t && 1 == (e >> n & 1);
               this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
            }
            for (var n = 0; 18 > n; n++) {
               var i = !t && 1 == (e >> n & 1);
               this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
            }
         },
         setupTypeInfo: function (t, e) {
            for (var n = this.errorCorrectLevel << 3 | e, i = d.getBCHTypeInfo(n), r = 0; 15 > r; r++) {
               var o = !t && 1 == (i >> r & 1);
               6 > r ? this.modules[r][8] = o : 8 > r ? this.modules[r + 1][8] = o : this.modules[this.moduleCount - 15 + r][8] = o
            }
            for (var r = 0; 15 > r; r++) {
               var o = !t && 1 == (i >> r & 1);
               8 > r ? this.modules[8][this.moduleCount - r - 1] = o : 9 > r ? this.modules[8][15 - r - 1 + 1] = o : this.modules[8][15 - r - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !t
         },
         mapData: function (t, e) {
            for (var n = -1, i = this.moduleCount - 1, r = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
               for (var s = 0; 2 > s; s++) if (null == this.modules[i][a - s]) {
                  var c = !1;
                  o < t.length && (c = 1 == (t[o] >>> r & 1));
                  var u = d.getMask(e, i, a - s);
                  u && (c = !c), this.modules[i][a - s] = c, r-- , -1 == r && (o++ , r = 7)
               }
               if (i += n, 0 > i || this.moduleCount <= i) {
                  i -= n, n = -n;
                  break
               }
            }
         }
      }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (t, n, o) {
         for (var a = i.getRSBlocks(t, n), s = new r, c = 0; c < o.length; c++) {
            var u = o[c];
            s.put(u.mode, 4), s.put(u.getLength(), d.getLengthInBits(u.mode, t)), u.write(s)
         }
         for (var l = 0, c = 0; c < a.length; c++) l += a[c].dataCount;
         if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
         for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
         for (; !(s.getLengthInBits() >= 8 * l) && (s.put(e.PAD0, 8), !(s.getLengthInBits() >= 8 * l));) s.put(e.PAD1, 8);
         return e.createBytes(s, a)
      }, e.createBytes = function (t, e) {
         for (var i = 0, r = 0, o = 0, a = new Array(e.length), s = new Array(e.length), c = 0; c < e.length; c++) {
            var u = e[c].dataCount,
               l = e[c].totalCount - u;
            r = Math.max(r, u), o = Math.max(o, l), a[c] = new Array(u);
            for (var h = 0; h < a[c].length; h++) a[c][h] = 255 & t.buffer[h + i];
            i += u;
            var f = d.getErrorCorrectPolynomial(l),
               p = new n(a[c], f.getLength() - 1),
               m = p.mod(f);
            s[c] = new Array(f.getLength() - 1);
            for (var h = 0; h < s[c].length; h++) {
               var g = h + m.getLength() - s[c].length;
               s[c][h] = g >= 0 ? m.get(g) : 0
            }
         }
         for (var v = 0, h = 0; h < e.length; h++) v += e[h].totalCount;
         for (var w = new Array(v), _ = 0, h = 0; r > h; h++) for (var c = 0; c < e.length; c++) h < a[c].length && (w[_++] = a[c][h]);
         for (var h = 0; o > h; h++) for (var c = 0; c < e.length; c++) h < s[c].length && (w[_++] = s[c][h]);
         return w
      };
      for (var u = {
         MODE_NUMBER: 1,
         MODE_ALPHA_NUM: 2,
         MODE_8BIT_BYTE: 4,
         MODE_KANJI: 8
      }, l = {
         L: 1,
         M: 0,
         Q: 3,
         H: 2
      }, h = {
         PATTERN000: 0,
         PATTERN001: 1,
         PATTERN010: 2,
         PATTERN011: 3,
         PATTERN100: 4,
         PATTERN101: 5,
         PATTERN110: 6,
         PATTERN111: 7
      }, d = {
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
         getBCHTypeInfo: function (t) {
            for (var e = t << 10; d.getBCHDigit(e) - d.getBCHDigit(d.G15) >= 0;) e ^= d.G15 << d.getBCHDigit(e) - d.getBCHDigit(d.G15);
            return (t << 10 | e) ^ d.G15_MASK
         },
         getBCHTypeNumber: function (t) {
            for (var e = t << 12; d.getBCHDigit(e) - d.getBCHDigit(d.G18) >= 0;) e ^= d.G18 << d.getBCHDigit(e) - d.getBCHDigit(d.G18);
            return t << 12 | e
         },
         getBCHDigit: function (t) {
            for (var e = 0; 0 != t;) e++ , t >>>= 1;
            return e
         },
         getPatternPosition: function (t) {
            return d.PATTERN_POSITION_TABLE[t - 1]
         },
         getMask: function (t, e, n) {
            switch (t) {
               case h.PATTERN000:
                  return (e + n) % 2 == 0;
               case h.PATTERN001:
                  return e % 2 == 0;
               case h.PATTERN010:
                  return n % 3 == 0;
               case h.PATTERN011:
                  return (e + n) % 3 == 0;
               case h.PATTERN100:
                  return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
               case h.PATTERN101:
                  return e * n % 2 + e * n % 3 == 0;
               case h.PATTERN110:
                  return (e * n % 2 + e * n % 3) % 2 == 0;
               case h.PATTERN111:
                  return (e * n % 3 + (e + n) % 2) % 2 == 0;
               default:
                  throw new Error("bad maskPattern:" + t)
            }
         },
         getErrorCorrectPolynomial: function (t) {
            for (var e = new n([1], 0), i = 0; t > i; i++) e = e.multiply(new n([1, f.gexp(i)], 0));
            return e
         },
         getLengthInBits: function (t, e) {
            if (e >= 1 && 10 > e) switch (t) {
               case u.MODE_NUMBER:
                  return 10;
               case u.MODE_ALPHA_NUM:
                  return 9;
               case u.MODE_8BIT_BYTE:
                  return 8;
               case u.MODE_KANJI:
                  return 8;
               default:
                  throw new Error("mode:" + t)
            } else if (27 > e) switch (t) {
               case u.MODE_NUMBER:
                  return 12;
               case u.MODE_ALPHA_NUM:
                  return 11;
               case u.MODE_8BIT_BYTE:
                  return 16;
               case u.MODE_KANJI:
                  return 10;
               default:
                  throw new Error("mode:" + t)
            } else {
               if (!(41 > e)) throw new Error("type:" + e);
               switch (t) {
                  case u.MODE_NUMBER:
                     return 14;
                  case u.MODE_ALPHA_NUM:
                     return 13;
                  case u.MODE_8BIT_BYTE:
                     return 16;
                  case u.MODE_KANJI:
                     return 12;
                  default:
                     throw new Error("mode:" + t)
               }
            }
         },
         getLostPoint: function (t) {
            for (var e = t.getModuleCount(), n = 0, i = 0; e > i; i++) for (var r = 0; e > r; r++) {
               for (var o = 0, a = t.isDark(i, r), s = -1; 1 >= s; s++) if (!(0 > i + s || i + s >= e)) for (var c = -1; 1 >= c; c++) 0 > r + c || r + c >= e || (0 != s || 0 != c) && a == t.isDark(i + s, r + c) && o++;
               o > 5 && (n += 3 + o - 5)
            }
            for (var i = 0; e - 1 > i; i++) for (var r = 0; e - 1 > r; r++) {
               var u = 0;
               t.isDark(i, r) && u++ , t.isDark(i + 1, r) && u++ , t.isDark(i, r + 1) && u++ , t.isDark(i + 1, r + 1) && u++ , (0 == u || 4 == u) && (n += 3)
            }
            for (var i = 0; e > i; i++) for (var r = 0; e - 6 > r; r++) t.isDark(i, r) && !t.isDark(i, r + 1) && t.isDark(i, r + 2) && t.isDark(i, r + 3) && t.isDark(i, r + 4) && !t.isDark(i, r + 5) && t.isDark(i, r + 6) && (n += 40);
            for (var r = 0; e > r; r++) for (var i = 0; e - 6 > i; i++) t.isDark(i, r) && !t.isDark(i + 1, r) && t.isDark(i + 2, r) && t.isDark(i + 3, r) && t.isDark(i + 4, r) && !t.isDark(i + 5, r) && t.isDark(i + 6, r) && (n += 40);
            for (var l = 0, r = 0; e > r; r++) for (var i = 0; e > i; i++) t.isDark(i, r) && l++;
            var h = Math.abs(100 * l / e / e - 50) / 5;
            return n += 10 * h
         }
      }, f = {
         glog: function (t) {
            if (1 > t) throw new Error("glog(" + t + ")");
            return f.LOG_TABLE[t]
         },
         gexp: function (t) {
            for (; 0 > t;) t += 255;
            for (; t >= 256;) t -= 255;
            return f.EXP_TABLE[t]
         },
         EXP_TABLE: new Array(256),
         LOG_TABLE: new Array(256)
      }, p = 0; 8 > p; p++) f.EXP_TABLE[p] = 1 << p;
      for (var p = 8; 256 > p; p++) f.EXP_TABLE[p] = f.EXP_TABLE[p - 4] ^ f.EXP_TABLE[p - 5] ^ f.EXP_TABLE[p - 6] ^ f.EXP_TABLE[p - 8];
      for (var p = 0; 255 > p; p++) f.LOG_TABLE[f.EXP_TABLE[p]] = p;
      n.prototype = {
         get: function (t) {
            return this.num[t]
         },
         getLength: function () {
            return this.num.length
         },
         multiply: function (t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var r = 0; r < t.getLength(); r++) e[i + r] ^= f.gexp(f.glog(this.get(i)) + f.glog(t.get(r)));
            return new n(e, 0)
         },
         mod: function (t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = f.glog(this.get(0)) - f.glog(t.get(0)), i = new Array(this.getLength()), r = 0; r < this.getLength(); r++) i[r] = this.get(r);
            for (var r = 0; r < t.getLength(); r++) i[r] ^= f.gexp(f.glog(t.get(r)) + e);
            return new n(i, 0).mod(t)
         }
      }, i.RS_BLOCK_TABLE = [
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
      ], i.getRSBlocks = function (t, e) {
         var n = i.getRsBlockTable(t, e);
         if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
         for (var r = n.length / 3, o = [], a = 0; r > a; a++) for (var s = n[3 * a + 0], c = n[3 * a + 1], u = n[3 * a + 2], l = 0; s > l; l++) o.push(new i(c, u));
         return o
      }, i.getRsBlockTable = function (t, e) {
         switch (e) {
            case l.L:
               return i.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case l.M:
               return i.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case l.Q:
               return i.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case l.H:
               return i.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
               return
         }
      }, r.prototype = {
         get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
         },
         put: function (t, e) {
            for (var n = 0; e > n; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
         },
         getLengthInBits: function () {
            return this.length
         },
         putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
         }
      };
      var m = [
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
         g = function () {
            var t = function (t, e) {
               this._el = t, this._htOption = e
            };
            return t.prototype.draw = function (t) {
               function e(t, e) {
                  var n = document.createElementNS("http://www.w3.org/2000/svg", t);
                  for (var i in e) e.hasOwnProperty(i) && n.setAttribute(i, e[i]);
                  return n
               }
               var n = this._htOption,
                  i = this._el,
                  r = t.getModuleCount();
               Math.floor(n.width / r), Math.floor(n.height / r), this.clear();
               var o = e("svg", {
                  viewBox: "0 0 " + String(r) + " " + String(r),
                  width: "100%",
                  height: "100%",
                  fill: n.colorLight
               });
               o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(o), o.appendChild(e("rect", {
                  fill: n.colorLight,
                  width: "100%",
                  height: "100%"
               })), o.appendChild(e("rect", {
                  fill: n.colorDark,
                  width: "1",
                  height: "1",
                  id: "template"
               }));
               for (var a = 0; r > a; a++) for (var s = 0; r > s; s++) if (t.isDark(a, s)) {
                  var c = e("use", {
                     x: String(a),
                     y: String(s)
                  });
                  c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(c)
               }
            }, t.prototype.clear = function () {
               for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
            }, t
         }(),
         v = "svg" === document.documentElement.tagName.toLowerCase(),
         w = v ? g : o() ?
            function () {
               function t() {
                  this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
               }

               function e(t, e) {
                  var n = this;
                  if (n._fFail = e, n._fSuccess = t, null === n._bSupportDataURI) {
                     var i = document.createElement("img"),
                        r = function () {
                           n._bSupportDataURI = !1, n._fFail && n._fFail.call(n)
                        },
                        o = function () {
                           n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
                        };
                     return i.onabort = r, i.onerror = r, i.onload = o, void (i.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
                  }
                  n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
               }
               if (this._android && this._android <= 2.1) {
                  var n = 1 / window.devicePixelRatio,
                     i = CanvasRenderingContext2D.prototype.drawImage;
                  CanvasRenderingContext2D.prototype.drawImage = function (t, e, r, o, a, s, c, u) {
                     if ("nodeName" in t && /img/i.test(t.nodeName)) for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * n;
                     else "undefined" == typeof u && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
                     i.apply(this, arguments)
                  }
               }
               var r = function (t, e) {
                  this._bIsPainted = !1, this._android = a(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
               };
               return r.prototype.draw = function (t) {
                  var e = this._elImage,
                     n = this._oContext,
                     i = this._htOption,
                     r = t.getModuleCount(),
                     o = i.width / r,
                     a = i.height / r,
                     s = Math.round(o),
                     c = Math.round(a);
                  e.style.display = "none", this.clear();
                  for (var u = 0; r > u; u++) for (var l = 0; r > l; l++) {
                     var h = t.isDark(u, l),
                        d = l * o,
                        f = u * a;
                     n.strokeStyle = h ? i.colorDark : i.colorLight, n.lineWidth = 1, n.fillStyle = h ? i.colorDark : i.colorLight, n.fillRect(d, f, o, a), n.strokeRect(Math.floor(d) + .5, Math.floor(f) + .5, s, c), n.strokeRect(Math.ceil(d) - .5, Math.ceil(f) - .5, s, c)
                  }
                  this._bIsPainted = !0
               }, r.prototype.makeImage = function () {
                  this._bIsPainted && e.call(this, t)
               }, r.prototype.isPainted = function () {
                  return this._bIsPainted
               }, r.prototype.clear = function () {
                  this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
               }, r.prototype.round = function (t) {
                  return t ? Math.floor(1e3 * t) / 1e3 : t
               }, r
            }() : function () {
               var t = function (t, e) {
                  this._el = t, this._htOption = e
               };
               return t.prototype.draw = function (t) {
                  for (var e = this._htOption, n = this._el, i = t.getModuleCount(), r = Math.floor(e.width / i), o = Math.floor(e.height / i), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; i > s; s++) {
                     a.push("<tr>");
                     for (var c = 0; i > c; c++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + o + "px;background-color:" + (t.isDark(s, c) ? e.colorDark : e.colorLight) + ';"></td>');
                     a.push("</tr>")
                  }
                  a.push("</table>"), n.innerHTML = a.join("");
                  var u = n.childNodes[0],
                     l = (e.width - u.offsetWidth) / 2,
                     h = (e.height - u.offsetHeight) / 2;
                  l > 0 && h > 0 && (u.style.margin = h + "px " + l + "px")
               }, t.prototype.clear = function () {
                  this._el.innerHTML = ""
               }, t
            }();
      QRCode = function (t, e) {
         if (this._htOption = {
            width: 256,
            height: 256,
            typeNumber: 4,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: l.H
         }, "string" == typeof e && (e = {
            text: e
         }), e) for (var n in e) this._htOption[n] = e[n];
         "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (w = g), this._android = a(), this._el = t, this._oQRCode = null, this._oDrawing = new w(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
      }, QRCode.prototype.makeCode = function (t) {
         this._oQRCode = new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
      }, QRCode.prototype.makeImage = function () {
         "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
      }, QRCode.prototype.clear = function () {
         this._oDrawing.clear()
      }, QRCode.CorrectLevel = l
   }(), function () {
      var t, e, n, i, r, o, a, s, c, u, l, h, d, f, p, m, g, v, w, _, y, x, T, b, E, S, A, C, k, I, P, M, N, B, R, L, D, q, O, H, F, U, j, X, W, V, Y, z, $, Q = [].slice,
         G = {}.hasOwnProperty,
         J = function (t, e) {
            function n() {
               this.constructor = t
            }
            for (var i in e) G.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
         },
         Z = [].indexOf ||
            function (t) {
               for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
               return -1
            };
      for (y = {
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
      }, k = function () {
         var t;
         return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
      }, P = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, _ = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == P && (P = function (t) {
         return setTimeout(t, 50)
      }, _ = function (t) {
         return clearTimeout(t)
      }), N = function (t) {
         var e, n;
         return e = k(), (n = function () {
            var i;
            return i = k() - e, i >= 33 ? (e = k(), t(i, function () {
               return P(n)
            })) : setTimeout(n, 33 - i)
         })()
      }, M = function () {
         var t, e, n;
         return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
      }, x = function () {
         var t, e, n, i, r, o, a;
         for (e = arguments[0], i = 2 <= arguments.length ? Q.call(arguments, 1) : [], o = 0, a = i.length; o < a; o++) if (n = i[o]) for (t in n) G.call(n, t) && (r = n[t], null != e[t] && "object" == typeof e[t] && null != r && "object" == typeof r ? x(e[t], r) : e[t] = r);
         return e
      }, g = function (t) {
         var e, n, i, r, o;
         for (n = e = 0, r = 0, o = t.length; r < o; r++) i = t[r], n += Math.abs(i), e++;
         return n / e
      }, b = function (t, e) {
         var n, i, r;
         if (null == t && (t = "options"), null == e && (e = !0), r = document.querySelector("[data-pace-" + t + "]")) {
            if (n = r.getAttribute("data-pace-" + t), !e) return n;
            try {
               return JSON.parse(n)
            } catch (o) {
               return i = o, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
            }
         }
      }, a = function () {
         function t() { }
         return t.prototype.on = function (t, e, n, i) {
            var r;
            return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (r = this.bindings)[t] && (r[t] = []), this.bindings[t].push({
               handler: e,
               ctx: n,
               once: i
            })
         }, t.prototype.once = function (t, e, n) {
            return this.on(t, e, n, !0)
         }, t.prototype.off = function (t, e) {
            var n, i, r;
            if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
               if (null == e) return delete this.bindings[t];
               for (n = 0, r = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? r.push(this.bindings[t].splice(n, 1)) : r.push(n++);
               return r
            }
         }, t.prototype.trigger = function () {
            var t, e, n, i, r, o, a, s, c;
            if (n = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
               for (r = 0, c = []; r < this.bindings[n].length;) s = this.bindings[n][r], i = s.handler, e = s.ctx, o = s.once, i.apply(null != e ? e : this, t), o ? c.push(this.bindings[n].splice(r, 1)) : c.push(r++);
               return c
            }
         }, t
      }(), u = window.Pace || {}, window.Pace = u, x(u, a.prototype), I = u.options = x({}, y, window.paceOptions, b()), Y = ["ajax", "document", "eventLag", "elements"], j = 0, W = Y.length; j < W; j++) D = Y[j], I[D] === !0 && (I[D] = y[D]);
      c = function (t) {
         function e() {
            return z = e.__super__.constructor.apply(this, arguments)
         }
         return J(e, t), e
      }(Error), e = function () {
         function t() {
            this.progress = 0
         }
         return t.prototype.getElement = function () {
            if (null == this.el && (this.el = document.querySelector(I.target), !this.el)) throw new c;
            return this.el
         }, t.prototype.finish = function () {
            var t;
            t = this.getElement(), t.parentNode.style.display = "none";
            var e = document.createEvent("HTMLEvents");
            e.initEvent("preloaddone", !1, !1), document.dispatchEvent(e)
         }, t.prototype.update = function (t) {
            return this.progress = t, this.render()
         }, t.prototype.destroy = function () {
            try {
               this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
               c = t
            }
            return this.el = void 0
         }, t.prototype.render = function () {
            var t;
            return t = this.getElement(), (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.innerHTML = (0 | this.progress) + "%", t.setAttribute("data-progress", 0 | this.progress)), this.lastRenderedProgress = this.progress
         }, t.prototype.done = function () {
            return this.progress >= 100
         }, t
      }(), s = function () {
         function t() {
            this.bindings = {}
         }
         return t.prototype.trigger = function (t, e) {
            var n, i, r, o, a;
            if (null != this.bindings[t]) {
               for (o = this.bindings[t], a = [], i = 0, r = o.length; i < r; i++) n = o[i], a.push(n.call(this, e));
               return a
            }
         }, t.prototype.on = function (t, e) {
            var n;
            return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
         }, t
      }(), U = window.XMLHttpRequest, F = window.XDomainRequest, H = window.WebSocket, T = function (t, e) {
         var n, i, r;
         r = [];
         for (i in e.prototype) try {
            null == t[i] && "function" != typeof e[i] ? "function" == typeof Object.defineProperty ? r.push(Object.defineProperty(t, i, {
               get: function () {
                  return e.prototype[i]
               },
               configurable: !0,
               enumerable: !0
            })) : r.push(t[i] = e.prototype[i]) : r.push(void 0)
         } catch (o) {
            n = o
         }
         return r
      }, A = [], u.ignore = function () {
         var t, e, n;
         return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], A.unshift("ignore"), n = e.apply(null, t), A.shift(), n
      }, u.track = function () {
         var t, e, n;
         return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], A.unshift("track"), n = e.apply(null, t), A.shift(), n
      }, L = function (t) {
         var e;
         if (null == t && (t = "GET"), "track" === A[0]) return "force";
         if (!A.length && I.ajax) {
            if ("socket" === t && I.ajax.trackWebSockets) return !0;
            if (e = t.toUpperCase(), Z.call(I.ajax.trackMethods, e) >= 0) return !0
         }
         return !1
      }, l = function (t) {
         function e() {
            var t, n = this;
            e.__super__.constructor.apply(this, arguments), t = function (t) {
               var e;
               return e = t.open, t.open = function (i, r, o) {
                  return L(i) && n.trigger("request", {
                     type: i,
                     url: r,
                     request: t
                  }), e.apply(t, arguments)
               }
            }, window.XMLHttpRequest = function (e) {
               var n;
               return n = new U(e), t(n), n
            };
            try {
               T(window.XMLHttpRequest, U)
            } catch (i) { }
            if (null != F) {
               window.XDomainRequest = function () {
                  var e;
                  return e = new F, t(e), e
               };
               try {
                  T(window.XDomainRequest, F)
               } catch (i) { }
            }
            if (null != H && I.ajax.trackWebSockets) {
               window.WebSocket = function (t, e) {
                  var i;
                  return i = null != e ? new H(t, e) : new H(t), L("socket") && n.trigger("request", {
                     type: "socket",
                     url: t,
                     protocols: e,
                     request: i
                  }), i
               };
               try {
                  T(window.WebSocket, H)
               } catch (i) { }
            }
         }
         return J(e, t), e
      }(s), X = null, E = function () {
         return null == X && (X = new l), X
      }, R = function (t) {
         var e, n, i, r;
         for (r = I.ajax.ignoreURLs, n = 0, i = r.length; n < i; n++) if (e = r[n], "string" == typeof e) {
            if (t.indexOf(e) !== -1) return !0
         } else if (e.test(t)) return !0;
         return !1
      }, E().on("request", function (e) {
         var n, i, r, o, a;
         if (o = e.type, r = e.request, a = e.url, !R(a)) return u.running || I.restartOnRequestAfter === !1 && "force" !== L(o) ? void 0 : (i = arguments, n = I.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
            var e, n, a, s, c, l;
            if (e = "socket" === o ? r.readyState < 2 : 0 < (s = r.readyState) && s < 4) {
               for (u.restart(), c = u.sources, l = [], n = 0, a = c.length; n < a; n++) {
                  if (D = c[n], D instanceof t) {
                     D.watch.apply(D, i);
                     break
                  }
                  l.push(void 0)
               }
               return l
            }
         }, n))
      }), t = function () {
         function t() {
            var t = this;
            this.elements = [], E().on("request", function () {
               return t.watch.apply(t, arguments)
            })
         }
         return t.prototype.watch = function (t) {
            var e, n, i, r;
            if (i = t.type, e = t.request, r = t.url, !R(r)) return n = "socket" === i ? new f(e) : new p(e), this.elements.push(n)
         }, t
      }(), p = function () {
         function t(t) {
            var e, n, i, r, o, a, s = this;
            if (this.progress = 0, null != window.ProgressEvent) for (n = null, t.addEventListener("progress", function (t) {
               return t.lengthComputable ? s.progress = 100 * t.loaded / t.total : s.progress = s.progress + (100 - s.progress) / 2
            }, !1), a = ["load", "abort", "timeout", "error"], i = 0, r = a.length; i < r; i++) e = a[i], t.addEventListener(e, function () {
               return s.progress = 100
            }, !1);
            else o = t.onreadystatechange, t.onreadystatechange = function () {
               var e;
               return 0 === (e = t.readyState) || 4 === e ? s.progress = 100 : 3 === t.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
         }
         return t
      }(), f = function () {
         function t(t) {
            var e, n, i, r, o = this;
            for (this.progress = 0, r = ["error", "open"], n = 0, i = r.length; n < i; n++) e = r[n], t.addEventListener(e, function () {
               return o.progress = 100
            }, !1)
         }
         return t
      }(), i = function () {
         function t(t) {
            var e, n, i, o;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, i = o.length; n < i; n++) e = o[n], this.elements.push(new r(e))
         }
         return t
      }(), r = function () {
         function t(t) {
            this.selector = t, this.progress = 0, this.check()
         }
         return t.prototype.check = function () {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
               return t.check()
            }, I.elements.checkInterval)
         }, t.prototype.done = function () {
            return this.progress = 100
         }, t
      }(), n = function () {
         function t() {
            var t, e, n = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
               return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
         }
         return t.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
         }, t
      }(), o = function () {
         function t() {
            var t, e, n, i, r, o = this;
            this.progress = 0, t = 0, r = [], i = 0, n = k(), e = setInterval(function () {
               var a;
               return a = k() - n - 50, n = k(), r.push(a), r.length > I.eventLag.sampleCount && r.shift(), t = g(r), ++i >= I.eventLag.minSamples && t < I.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
            }, 50)
         }
         return t
      }(), d = function () {
         function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = I.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = M(this.source, "progress"))
         }
         return t.prototype.tick = function (t, e) {
            var n;
            return null == e && (e = M(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / I.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, I.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + I.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
         }, t
      }(), q = null, B = null, v = null, O = null, m = null, w = null, u.running = !1, S = function () {
         if (I.restartOnPushState) return u.restart()
      }, null != window.history.pushState && (V = window.history.pushState, window.history.pushState = function () {
         return S(), V.apply(window.history, arguments)
      }), null != window.history.replaceState && ($ = window.history.replaceState, window.history.replaceState = function () {
         return S(), $.apply(window.history, arguments)
      }), h = {
         ajax: t,
         elements: i,
         document: n,
         eventLag: o
      }, (C = function () {
         var t, n, i, r, o, a, s, c;
         for (u.sources = q = [], a = ["ajax", "elements", "document", "eventLag"], n = 0, r = a.length; n < r; n++) t = a[n], I[t] !== !1 && q.push(new h[t](I[t]));
         for (c = null != (s = I.extraSources) ? s : [], i = 0, o = c.length; i < o; i++) D = c[i], q.push(new D(I));
         return u.bar = v = new e, B = [], O = new d
      })(), u.stop = function () {
         return u.trigger("stop"), u.running = !1, v.destroy(), w = !0, null != m && ("function" == typeof _ && _(m), m = null), C()
      }, u.restart = function () {
         return u.trigger("restart"), u.stop(), u.start()
      }, u.go = function () {
         var t;
         return u.running = !0, v.render(), t = k(), w = !1, m = N(function (e, n) {
            var i, r, o, a, s, c, l, h, f, p, m, g, _, y, x, T;
            for (h = 100 - v.progress, r = m = 0, o = !0, c = g = 0, y = q.length; g < y; c = ++g) for (D = q[c], p = null != B[c] ? B[c] : B[c] = [], s = null != (T = D.elements) ? T : [D], l = _ = 0, x = s.length; _ < x; l = ++_) a = s[l], f = null != p[l] ? p[l] : p[l] = new d(a), o &= f.done, f.done || (r++ , m += f.tick(e));
            return i = m / r, v.update(O.tick(e, i)), v.done() || o || w ? (v.update(100), u.trigger("done"), setTimeout(function () {
               return v.finish(), u.running = !1, u.trigger("hide")
            }, Math.max(I.ghostTime, Math.max(I.minTime - (k() - t), 0)))) : n()
         })
      }, u.start = function (t) {
         x(I, t), u.running = !0;
         try {
            v.render()
         } catch (e) {
            c = e
         }
         return document.querySelector(I.target) ? (u.trigger("start"), u.go()) : setTimeout(u.start, 50)
      }, "function" == typeof define && define.amd ? define(["pace"], function () {
         return u
      }) : "object" == typeof exports ? module.exports = u : I.startOnPageLoad && u.start()
   }.call(this), function (t) {
      function e(e) {
         function n() {
            M = !0
         }

         function i() {
            return I || M
         }

         function r(t, n) {
            if (e(t, !0), M && n) {
               var i = t.match(/[\w]:\/\/(.*)/);
               n(i && i[1])
            }
         }

         function o(t, e) {
            if (C[e] && C[e].length > 0) {
               var n = C[e].shift();
               n && n.call(this, t)
            }
         }

         function a() {
            r(k.updateprofile)
         }

         function s(t) {
            C.afterLogin.push(t), r(k.login, t)
         }

         function c(t) {
            C.afterUserinfo.push(t), r(k.userinfo, t)
         }

         function u(t) {
            C.afterDevice.push(t), r(k.device, t)
         }

         function l(t, e) {
            C.afterShare.push(t), r(k.share.replace("{TYPE}", e || ""), t)
         }

         function h(t) {
            r(k.pushview.replace("{TYPE}", t))
         }

         function d(e, n) {
            C.afterEncrypt.push(n), t.extra && t.extra.__newsapp_encrypt ? o(t.extra.__newsapp_encrypt(e), "afterEncrypt") : r(k.encrypt + encodeURIComponent(e), n)
         }

         function f(t, e, n) {
            C.afterUploadImage.push(n), r(k.uploadImageByCamera.replace("{W}", t).replace("{H}", e), n)
         }

         function p(t, e, n) {
            C.afterUploadImage.push(n), r(k.uploadImageByAlbum.replace("{W}", t).replace("{H}", e), n)
         }

         function m(t, e, n) {
            r(k.openComment.replace("{BOARD_ID}", t).replace("{DOC_ID}", e).replace("{TITLE}", n || ""))
         }

         function g(t) {
            C.afterComment.push(t), r(k.comment, t)
         }

         function v(t, e) {
            C.afterOtherappinfo.push(e), r(k.otherappinfo + t, e)
         }

         function w(t) {
            r(k.copy + t)
         }

         function _(t) {
            r(k.toolbar.replace("{COMMAND}", t))
         }

         function y(t) {
            document.title = t || document.title, r(k.modifytitle.replace("{TITLE}", encodeURIComponent(t)))
         }

         function x(t, e) {
            C.afterActionbutton.push(e), r(k.actionbutton.replace("{NAME}", encodeURIComponent(t)), e)
         }

         function T(e) {
            C.afterAddAlarm.push(e), t.extra && t.extra.__newsapp_alarm_add_done ? o(t.extra.__newsapp_alarm_add_done(), "afterAddAlarm") : r(k.addAlarm, e)
         }

         function b(e) {
            C.afterRemoveAlarm.push(e), t.extra && t.extra.__newsapp_alarm_remove_done ? o(t.extra.__newsapp_alarm_remove_done(), "afterRemoveAlarm") : r(k.removeAlarm, e)
         }

         function E(e) {
            C.afterCheckAlarm.push(e), t.extra && t.extra.__newsapp_alarm_check_done ? o(t.extra.__newsapp_alarm_check_done(), "afterCheckAlarm") : r(k.checkAlarm, e)
         }

         function S(t) {
            C.afterTrashId.push(t), r(k.trashid, t)
         }

         function A(t) {
            C.afterLocation.push(t), r(k.location, t)
         }
         var C, k, I = /NewsApp/gi.test(navigator.userAgent),
            P = /Android/gi,
            M = !1,
            N = P.test(navigator.platform) || P.test(navigator.userAgent);
         return C = {
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
         }, k = {
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
            otherappinfo: N ? "otherappinfo://" : "otherappinfo://intent/",
            copy: "copy://",
            toolbar: "docmode://toolbar/{COMMAND}",
            modifytitle: "docmode://modifytitle/{TITLE}",
            actionbutton: "docmode://actionbutton/{NAME}",
            addAlarm: "alarm://add",
            removeAlarm: "alarm://remove",
            checkAlarm: "alarm://check",
            trashid: "trashid://",
            location: "location://current"
         }, t.__newsapp_share_done = function (t) {
            o(t, "afterShare")
         }, t.__newsapp_encrypt_done = function (t) {
            o(t, "afterEncrypt")
         }, t.__newsapp_userinfo_done = function (t) {
            o(t, "afterUserinfo")
         }, t.__newsapp_login_done = function (t) {
            o(t, "afterLogin")
         }, t.__newsapp_device_done = function (t) {
            o(t, "afterDevice")
         }, t.__newsapp_upload_image_done = function (t) {
            o(t, "afterUploadImage")
         }, t.__newsapp_comment_done = function (t) {
            o(t, "afterComment")
         }, t.__newsapp_otherappinfo_done = function (t) {
            o(t, "afterOtherappinfo")
         }, t.__newsapp_browser_actionbutton = function (t) {
            o(t, "afterActionbutton")
         }, t.__newsapp_alarm_add_done = function (t) {
            o(t, "afterAddAlarm")
         }, t.__newsapp_alarm_remove_done = function (t) {
            o(t, "afterRemoveAlarm")
         }, t.__newsapp_alarm_check_done = function (t) {
            o(t, "afterCheckAlarm")
         }, t.__newsapp_trashid_done = function (t) {
            o(t, "afterTrashId")
         }, t.__newsapp_location_done = function (t) {
            o(t, "afterLocation")
         }, {
               isNewsApp: i,
               login: s,
               userInfo: c,
               device: u,
               share: l,
               encrypt: d,
               updateProfile: a,
               uploadImageByCamera: f,
               uploadImageByAlbum: p,
               pushView: h,
               openComment: m,
               comment: g,
               otherappinfo: v,
               copy: w,
               toolbar: _,
               modifyTitle: y,
               actionbutton: x,
               enableDebug: n,
               addAlarm: T,
               removeAlarm: b,
               checkAlarm: E,
               trashId: S,
               location: A,
               protocol: r,
               Callbacks: C
            }
      }
      var n = function () {
         function e(t) {
            var e = document.createElement("iframe");
            return e.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;"), e.setAttribute("height", "0px"), e.setAttribute("width", "0px"), e.setAttribute("frameborder", "0"), t ? e.setAttribute("src", t) : document.documentElement.appendChild(e), e
         }

         function n(t) {
            t && t.parentNode.removeChild(t)
         }

         function i(i, o, s) {
            var c, u;
            return s ? void (t.location.href = i) : void (o ? (a ? (c = e(), c.setAttribute("src", i)) : (c = e(i), document.documentElement.appendChild(c)), u = setTimeout(function () {
               c && n(c)
            }, 3e4), c.onload = c.onreadystatechange = function () {
               u && clearTimeout(u), c && n(c)
            }) : (r = r || e(), r.setAttribute("src", i)))
         }
         var r, o = /Android/gi,
            a = o.test(navigator.platform) || o.test(navigator.userAgent);
         return r = null, {
            protocol: i
         }
      }();
      t.NewsAppClient = e(n.protocol)
   }(window), !
   function (t, e) {
      "function" == typeof define && (define.amd || define.cmd) ? define(function () {
         return e(t)
      }) : e(t, !0)
   }(this, function (t, e) {
      function n(e, n, i) {
         t.WeixinJSBridge ? WeixinJSBridge.invoke(e, r(n), function (t) {
            s(e, t, i)
         }) : l(e, i)
      }

      function i(e, n, i) {
         t.WeixinJSBridge ? WeixinJSBridge.on(e, function (t) {
            i && i.trigger && i.trigger(t), s(e, t, n)
         }) : i ? l(e, i) : l(e, n)
      }

      function r(t) {
         return t = t || {}, t.appId = P.appId, t.verifyAppId = P.appId, t.verifySignType = "sha1", t.verifyTimestamp = P.timestamp + "", t.verifyNonceStr = P.nonceStr, t.verifySignature = P.signature, t
      }

      function o(t) {
         return {
            timeStamp: t.timestamp + "",
            nonceStr: t.nonceStr,
            "package": t["package"],
            paySign: t.paySign,
            signType: t.signType || "SHA1"
         }
      }

      function a(t) {
         return t.postalCode = t.addressPostalCode, delete t.addressPostalCode, t.provinceName = t.proviceFirstStageName, delete t.proviceFirstStageName, t.cityName = t.addressCitySecondStageName, delete t.addressCitySecondStageName, t.countryName = t.addressCountiesThirdStageName, delete t.addressCountiesThirdStageName, t.detailInfo = t.addressDetailInfo, delete t.addressDetailInfo, t
      }

      function s(t, e, n) {
         "openEnterpriseChat" == t && (e.errCode = e.err_code), delete e.err_code, delete e.err_desc, delete e.err_detail;
         var i = e.errMsg;
         i || (i = e.err_msg, delete e.err_msg, i = c(t, i), e.errMsg = i), (n = n || {})._complete && (n._complete(e), delete n._complete), i = e.errMsg || "", P.debug && !n.isInnerInvoke && alert(JSON.stringify(e));
         var r = i.indexOf(":");
         switch (i.substring(r + 1)) {
            case "ok":
               n.success && n.success(e);
               break;
            case "cancel":
               n.cancel && n.cancel(e);
               break;
            default:
               n.fail && n.fail(e)
         }
         n.complete && n.complete(e)
      }

      function c(t, e) {
         var n = t,
            i = v[n];
         i && (n = i);
         var r = "ok";
         if (e) {
            var o = e.indexOf(":");
            "confirm" == (r = e.substring(o + 1)) && (r = "ok"), "failed" == r && (r = "fail"), -1 != r.indexOf("failed_") && (r = r.substring(7)), -1 != r.indexOf("fail_") && (r = r.substring(5)), "access denied" != (r = (r = r.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != r || (r = "permission denied"), "config" == n && "function not exist" == r && (r = "ok"), "" == r && (r = "fail")
         }
         return e = n + ":" + r
      }

      function u(t) {
         if (t) {
            for (var e = 0, n = t.length; e < n; ++e) {
               var i = t[e],
                  r = g[i];
               r && (t[e] = r)
            }
            return t
         }
      }

      function l(t, e) {
         if (!(!P.debug || e && e.isInnerInvoke)) {
            var n = v[t];
            n && (t = n), e && e._complete && delete e._complete, console.log('"' + t + '",', e || "")
         }
      }

      function h(t) {
         if (!(T || b || P.debug || C < "6.0.2" || I.systemType < 0)) {
            var e = new Image;
            I.appId = P.appId, I.initTime = k.initEndTime - k.initStartTime, I.preVerifyTime = k.preVerifyEndTime - k.preVerifyStartTime, L.getNetworkType({
               isInnerInvoke: !0,
               success: function (t) {
                  I.networkType = t.networkType;
                  var n = "https://open.weixin.qq.com/sdk/report?v=" + I.version + "&o=" + I.isPreVerifyOk + "&s=" + I.systemType + "&c=" + I.clientVersion + "&a=" + I.appId + "&n=" + I.networkType + "&i=" + I.initTime + "&p=" + I.preVerifyTime + "&u=" + I.url;
                  e.src = n
               }
            })
         }
      }

      function d() {
         return (new Date).getTime()
      }

      function f(e) {
         E && (t.WeixinJSBridge ? e() : w.addEventListener && w.addEventListener("WeixinJSBridgeReady", e, !1))
      }

      function p() {
         L.invoke || (L.invoke = function (e, n, i) {
            t.WeixinJSBridge && WeixinJSBridge.invoke(e, r(n), i)
         }, L.on = function (e, n) {
            t.WeixinJSBridge && WeixinJSBridge.on(e, n)
         })
      }

      function m(t) {
         if ("string" == typeof t && t.length > 0) {
            var e = t.split("?")[0],
               n = t.split("?")[1];
            return e += ".html", void 0 !== n ? e + "?" + n : e
         }
      }
      if (!t.jWeixin) {
         var g = {
            config: "preVerifyJSAPI",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest",
            openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
            startSearchBeacons: "startMonitoringBeacons",
            stopSearchBeacons: "stopMonitoringBeacons",
            onSearchBeacons: "onBeaconsInRange",
            consumeAndShareCard: "consumedShareCard",
            openAddress: "editAddress"
         },
            v = function () {
               var t = {};
               for (var e in g) t[g[e]] = e;
               return t
            }(),
            w = t.document,
            _ = w.title,
            y = navigator.userAgent.toLowerCase(),
            x = navigator.platform.toLowerCase(),
            T = !(!x.match("mac") && !x.match("win")),
            b = -1 != y.indexOf("wxdebugger"),
            E = -1 != y.indexOf("micromessenger"),
            S = -1 != y.indexOf("android"),
            A = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"),
            C = function () {
               var t = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
               return t ? t[1] : ""
            }(),
            k = {
               initStartTime: d(),
               initEndTime: 0,
               preVerifyStartTime: 0,
               preVerifyEndTime: 0
            },
            I = {
               version: 1,
               appId: "",
               initTime: 0,
               preVerifyTime: 0,
               networkType: "",
               isPreVerifyOk: 1,
               systemType: A ? 1 : S ? 2 : -1,
               clientVersion: C,
               url: encodeURIComponent(location.href)
            },
            P = {},
            M = {
               _completes: []
            },
            N = {
               state: 0,
               data: {}
            };
         f(function () {
            k.initEndTime = d()
         });
         var B = !1,
            R = [],
            L = {
               config: function (t) {
                  P = t, l("config", t);
                  var e = !1 !== P.check;
                  f(function () {
                     if (e) n(g.config, {
                        verifyJsApiList: u(P.jsApiList)
                     }, function () {
                        M._complete = function (t) {
                           k.preVerifyEndTime = d(), N.state = 1, N.data = t
                        }, M.success = function (t) {
                           I.isPreVerifyOk = 0
                        }, M.fail = function (t) {
                           M._fail ? M._fail(t) : N.state = -1
                        };
                        var t = M._completes;
                        return t.push(function () {
                           h()
                        }), M.complete = function (e) {
                           for (var n = 0, i = t.length; n < i; ++n) t[n]();
                           M._completes = []
                        }, M
                     }()), k.preVerifyStartTime = d();
                     else {
                        N.state = 1;
                        for (var t = M._completes, i = 0, r = t.length; i < r; ++i) t[i]();
                        M._completes = []
                     }
                  }), p()
               },
               ready: function (t) {
                  0 != N.state ? t() : (M._completes.push(t), !E && P.debug && t())
               },
               error: function (t) {
                  C < "6.0.2" || (-1 == N.state ? t(N.data) : M._fail = t)
               },
               checkJsApi: function (t) {
                  var e = function (t) {
                     var e = t.checkResult;
                     for (var n in e) {
                        var i = v[n];
                        i && (e[i] = e[n], delete e[n])
                     }
                     return t
                  };
                  n("checkJsApi", {
                     jsApiList: u(t.jsApiList)
                  }, (t._complete = function (t) {
                     if (S) {
                        var n = t.checkResult;
                        n && (t.checkResult = JSON.parse(n))
                     }
                     t = e(t)
                  }, t))
               },
               onMenuShareTimeline: function (t) {
                  i(g.onMenuShareTimeline, {
                     complete: function () {
                        n("shareTimeline", {
                           title: t.title || _,
                           desc: t.title || _,
                           img_url: t.imgUrl || "",
                           link: t.link || location.href,
                           type: t.type || "link",
                           data_url: t.dataUrl || ""
                        }, t)
                     }
                  }, t)
               },
               onMenuShareAppMessage: function (t) {
                  i(g.onMenuShareAppMessage, {
                     complete: function (e) {
                        "favorite" === e.scene ? n("sendAppMessage", {
                           title: t.title || _,
                           desc: t.desc || "",
                           link: t.link || location.href,
                           img_url: t.imgUrl || "",
                           type: t.type || "link",
                           data_url: t.dataUrl || ""
                        }) : n("sendAppMessage", {
                           title: t.title || _,
                           desc: t.desc || "",
                           link: t.link || location.href,
                           img_url: t.imgUrl || "",
                           type: t.type || "link",
                           data_url: t.dataUrl || ""
                        }, t)
                     }
                  }, t)
               },
               onMenuShareQQ: function (t) {
                  i(g.onMenuShareQQ, {
                     complete: function () {
                        n("shareQQ", {
                           title: t.title || _,
                           desc: t.desc || "",
                           img_url: t.imgUrl || "",
                           link: t.link || location.href
                        }, t)
                     }
                  }, t)
               },
               onMenuShareWeibo: function (t) {
                  i(g.onMenuShareWeibo, {
                     complete: function () {
                        n("shareWeiboApp", {
                           title: t.title || _,
                           desc: t.desc || "",
                           img_url: t.imgUrl || "",
                           link: t.link || location.href
                        }, t)
                     }
                  }, t)
               },
               onMenuShareQZone: function (t) {
                  i(g.onMenuShareQZone, {
                     complete: function () {
                        n("shareQZone", {
                           title: t.title || _,
                           desc: t.desc || "",
                           img_url: t.imgUrl || "",
                           link: t.link || location.href
                        }, t)
                     }
                  }, t)
               },
               startRecord: function (t) {
                  n("startRecord", {}, t)
               },
               stopRecord: function (t) {
                  n("stopRecord", {}, t)
               },
               onVoiceRecordEnd: function (t) {
                  i("onVoiceRecordEnd", t)
               },
               playVoice: function (t) {
                  n("playVoice", {
                     localId: t.localId
                  }, t)
               },
               pauseVoice: function (t) {
                  n("pauseVoice", {
                     localId: t.localId
                  }, t)
               },
               stopVoice: function (t) {
                  n("stopVoice", {
                     localId: t.localId
                  }, t)
               },
               onVoicePlayEnd: function (t) {
                  i("onVoicePlayEnd", t)
               },
               uploadVoice: function (t) {
                  n("uploadVoice", {
                     localId: t.localId,
                     isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                  }, t)
               },
               downloadVoice: function (t) {
                  n("downloadVoice", {
                     serverId: t.serverId,
                     isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                  }, t)
               },
               translateVoice: function (t) {
                  n("translateVoice", {
                     localId: t.localId,
                     isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                  }, t)
               },
               chooseImage: function (t) {
                  n("chooseImage", {
                     scene: "1|2",
                     count: t.count || 9,
                     sizeType: t.sizeType || ["original", "compressed"],
                     sourceType: t.sourceType || ["album", "camera"]
                  }, (t._complete = function (t) {
                     if (S) {
                        var e = t.localIds;
                        try {
                           e && (t.localIds = JSON.parse(e))
                        } catch (t) { }
                     }
                  }, t))
               },
               getLocation: function (t) { },
               previewImage: function (t) {
                  n(g.previewImage, {
                     current: t.current,
                     urls: t.urls
                  }, t)
               },
               uploadImage: function (t) {
                  n("uploadImage", {
                     localId: t.localId,
                     isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                  }, t)
               },
               downloadImage: function (t) {
                  n("downloadImage", {
                     serverId: t.serverId,
                     isShowProgressTips: 0 == t.isShowProgressTips ? 0 : 1
                  }, t)
               },
               getLocalImgData: function (t) {
                  !1 === B ? (B = !0, n("getLocalImgData", {
                     localId: t.localId
                  }, (t._complete = function (t) {
                     if (B = !1, R.length > 0) {
                        var e = R.shift();
                        wx.getLocalImgData(e)
                     }
                  }, t))) : R.push(t)
               },
               getNetworkType: function (t) {
                  var e = function (t) {
                     var e = t.errMsg;
                     t.errMsg = "getNetworkType:ok";
                     var n = t.subtype;
                     if (delete t.subtype, n) t.networkType = n;
                     else {
                        var i = e.indexOf(":"),
                           r = e.substring(i + 1);
                        switch (r) {
                           case "wifi":
                           case "edge":
                           case "wwan":
                              t.networkType = r;
                              break;
                           default:
                              t.errMsg = "getNetworkType:fail"
                        }
                     }
                     return t
                  };
                  n("getNetworkType", {}, (t._complete = function (t) {
                     t = e(t)
                  }, t))
               },
               openLocation: function (t) {
                  n("openLocation", {
                     latitude: t.latitude,
                     longitude: t.longitude,
                     name: t.name || "",
                     address: t.address || "",
                     scale: t.scale || 28,
                     infoUrl: t.infoUrl || ""
                  }, t)
               },
               getLocation: function (t) {
                  t = t || {}, n(g.getLocation, {
                     type: t.type || "wgs84"
                  }, (t._complete = function (t) {
                     delete t.type
                  }, t))
               },
               hideOptionMenu: function (t) {
                  n("hideOptionMenu", {}, t)
               },
               showOptionMenu: function (t) {
                  n("showOptionMenu", {}, t)
               },
               closeWindow: function (t) {
                  n("closeWindow", {}, t = t || {})
               },
               hideMenuItems: function (t) {
                  n("hideMenuItems", {
                     menuList: t.menuList
                  }, t)
               },
               showMenuItems: function (t) {
                  n("showMenuItems", {
                     menuList: t.menuList
                  }, t)
               },
               hideAllNonBaseMenuItem: function (t) {
                  n("hideAllNonBaseMenuItem", {}, t)
               },
               showAllNonBaseMenuItem: function (t) {
                  n("showAllNonBaseMenuItem", {}, t)
               },
               scanQRCode: function (t) {
                  n("scanQRCode", {
                     needResult: (t = t || {}).needResult || 0,
                     scanType: t.scanType || ["qrCode", "barCode"]
                  }, (t._complete = function (t) {
                     if (A) {
                        var e = t.resultStr;
                        if (e) {
                           var n = JSON.parse(e);
                           t.resultStr = n && n.scan_code && n.scan_code.scan_result
                        }
                     }
                  }, t))
               },
               openAddress: function (t) {
                  n(g.openAddress, {}, (t._complete = function (t) {
                     t = a(t)
                  }, t))
               },
               openProductSpecificView: function (t) {
                  n(g.openProductSpecificView, {
                     pid: t.productId,
                     view_type: t.viewType || 0,
                     ext_info: t.extInfo
                  }, t)
               },
               addCard: function (t) {
                  for (var e = t.cardList, i = [], r = 0, o = e.length; r < o; ++r) {
                     var a = e[r],
                        s = {
                           card_id: a.cardId,
                           card_ext: a.cardExt
                        };
                     i.push(s)
                  }
                  n(g.addCard, {
                     card_list: i
                  }, (t._complete = function (t) {
                     var e = t.card_list;
                     if (e) {
                        for (var n = 0, i = (e = JSON.parse(e)).length; n < i; ++n) {
                           var r = e[n];
                           r.cardId = r.card_id, r.cardExt = r.card_ext, r.isSuccess = !!r.is_succ, delete r.card_id, delete r.card_ext, delete r.is_succ
                        }
                        t.cardList = e, delete t.card_list
                     }
                  }, t))
               },
               chooseCard: function (t) {
                  n("chooseCard", {
                     app_id: P.appId,
                     location_id: t.shopId || "",
                     sign_type: t.signType || "SHA1",
                     card_id: t.cardId || "",
                     card_type: t.cardType || "",
                     card_sign: t.cardSign,
                     time_stamp: t.timestamp + "",
                     nonce_str: t.nonceStr
                  }, (t._complete = function (t) {
                     t.cardList = t.choose_card_info, delete t.choose_card_info
                  }, t))
               },
               openCard: function (t) {
                  for (var e = t.cardList, i = [], r = 0, o = e.length; r < o; ++r) {
                     var a = e[r],
                        s = {
                           card_id: a.cardId,
                           code: a.code
                        };
                     i.push(s)
                  }
                  n(g.openCard, {
                     card_list: i
                  }, t)
               },
               consumeAndShareCard: function (t) {
                  n(g.consumeAndShareCard, {
                     consumedCardId: t.cardId,
                     consumedCode: t.code
                  }, t)
               },
               chooseWXPay: function (t) {
                  n(g.chooseWXPay, o(t), t)
               },
               openEnterpriseRedPacket: function (t) {
                  n(g.openEnterpriseRedPacket, o(t), t)
               },
               startSearchBeacons: function (t) {
                  n(g.startSearchBeacons, {
                     ticket: t.ticket
                  }, t)
               },
               stopSearchBeacons: function (t) {
                  n(g.stopSearchBeacons, {}, t)
               },
               onSearchBeacons: function (t) {
                  i(g.onSearchBeacons, t)
               },
               openEnterpriseChat: function (t) {
                  n("openEnterpriseChat", {
                     useridlist: t.userIds,
                     chatname: t.groupName
                  }, t)
               },
               launchMiniProgram: function (t) {
                  n("launchMiniProgram", {
                     targetAppId: t.targetAppId,
                     path: m(t.path),
                     envVersion: t.envVersion
                  }, t)
               },
               miniProgram: {
                  navigateBack: function (t) {
                     t = t || {}, f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "navigateBack",
                           arg: {
                              delta: t.delta || 1
                           }
                        }, t)
                     })
                  },
                  navigateTo: function (t) {
                     f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "navigateTo",
                           arg: {
                              url: t.url
                           }
                        }, t)
                     })
                  },
                  redirectTo: function (t) {
                     f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "redirectTo",
                           arg: {
                              url: t.url
                           }
                        }, t)
                     })
                  },
                  switchTab: function (t) {
                     f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "switchTab",
                           arg: {
                              url: t.url
                           }
                        }, t)
                     })
                  },
                  reLaunch: function (t) {
                     f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "reLaunch",
                           arg: {
                              url: t.url
                           }
                        }, t)
                     })
                  },
                  postMessage: function (t) {
                     f(function () {
                        n("invokeMiniProgramAPI", {
                           name: "postMessage",
                           arg: t.data || {}
                        }, t)
                     })
                  },
                  getEnv: function (e) {
                     f(function () {
                        e({
                           miniprogram: "miniprogram" === t.__wxjs_environment
                        })
                     })
                  }
               }
            },
            D = 1,
            q = {};
         return w.addEventListener("error", function (t) {
            if (!S) {
               var e = t.target,
                  n = e.tagName,
                  i = e.src;
               if (("IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) && -1 != i.indexOf("wxlocalresource://")) {
                  t.preventDefault(), t.stopPropagation();
                  var r = e["wx-id"];
                  if (r || (r = D++ , e["wx-id"] = r), q[r]) return;
                  q[r] = !0, wx.ready(function () {
                     wx.getLocalImgData({
                        localId: i,
                        success: function (t) {
                           e.src = t.localData
                        }
                     })
                  })
               }
            }
         }, !0), w.addEventListener("load", function (t) {
            if (!S) {
               var e = t.target,
                  n = e.tagName;
               if (e.src, "IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
                  var i = e["wx-id"];
                  i && (q[i] = !1)
               }
            }
         }, !0), e && (t.wx = t.jWeixin = L), L
      }
   }), function (t) {
      var e = function () {
         var n = t,
            i = document,
            r = i.documentElement,
            o = 0;
         return {
            version: "1.0.1",
            getUid: function (t) {
               var e = ++o;
               if (t) {
                  var n = t.charCodeAt(t.length - 1);
                  return n >= 48 && n <= 57 && (t += "_"), t + e
               }
               return e
            },
            viewToString: function (t) {
               for (var e, n = t; n;) e = e ? n.id + "." + e : n.id, n = n.parent;
               return e
            },
            copy: function (t, e, n) {
               for (var i in e) n && !t.hasOwnProperty(i) && void 0 === t[i] || (t[i] = e[i]);
               return t
            },
            browser: function () {
               var t = navigator.userAgent,
                  e = {
                     iphone: /iphone/i.test(t),
                     ipad: /ipad/i.test(t),
                     ipod: /ipod/i.test(t),
                     ios: /iphone|ipad|ipod/i.test(t),
                     android: /android/i.test(t),
                     webkit: /webkit/i.test(t),
                     chrome: /chrome/i.test(t),
                     safari: /safari/i.test(t),
                     firefox: /firefox/i.test(t),
                     ie: /msie/i.test(t),
                     opera: /opera/i.test(t),
                     supportTouch: "ontouchstart" in n,
                     supportCanvas: null != i.createElement("canvas").getContext,
                     supportStorage: !1,
                     supportOrientation: "orientation" in n,
                     supportDeviceMotion: "ondevicemotion" in n
                  };
               try {
                  var o = "hilo";
                  localStorage.setItem(o, o), localStorage.removeItem(o), e.supportStorage = !0
               } catch (a) { }
               var s = e.jsVendor = e.webkit ? "webkit" : e.firefox ? "moz" : e.opera ? "o" : e.ie ? "ms" : "",
                  c = e.cssVendor = "-" + s + "-",
                  u = i.createElement("div"),
                  l = u.style,
                  h = void 0 != l[s + "Transform"],
                  d = void 0 != l[s + "Perspective"];
               return d && (u.id = "test3d", l = i.createElement("style"), l.textContent = "@media (" + c + "transform-3d){#test3d{height:3px}}", i.head.appendChild(l), r.appendChild(u), d = 3 == u.offsetHeight, i.head.removeChild(l), r.removeChild(u)), e.supportTransform = h, e.supportTransform3D = d, e
            }(),
            event: function () {
               var t = "ontouchstart" in n;
               return {
                  POINTER_START: t ? "touchstart" : "mousedown",
                  POINTER_MOVE: t ? "touchmove" : "mousemove",
                  POINTER_END: t ? "touchend" : "mouseup"
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
            getElementRect: function (t) {
               try {
                  var e = t.getBoundingClientRect()
               } catch (i) {
                  e = {
                     top: t.offsetTop,
                     left: t.offsetLeft,
                     right: t.offsetLeft + t.offsetWidth,
                     bottom: t.offsetTop + t.offsetHeight
                  }
               }
               var o = (n.pageXOffset || r.scrollLeft) - (r.clientLeft || 0) || 0,
                  a = (n.pageYOffset || r.scrollTop) - (r.clientTop || 0) || 0,
                  s = n.getComputedStyle ? getComputedStyle(t) : t.currentStyle,
                  c = parseInt,
                  u = c(s.paddingLeft) + c(s.borderLeftWidth) || 0,
                  l = c(s.paddingTop) + c(s.borderTopWidth) || 0,
                  h = c(s.paddingRight) + c(s.borderRightWidth) || 0,
                  d = c(s.paddingBottom) + c(s.borderBottomWidth) || 0,
                  f = e.top || 0,
                  p = e.left || 0,
                  m = e.right || 0,
                  g = e.bottom || 0;
               return {
                  left: p + o + u,
                  top: f + a + l,
                  width: m - h - p - u,
                  height: g - d - f - l
               }
            },
            createElement: function (t, e) {
               var n, r, o, a = i.createElement(t);
               for (n in e) if (r = e[n], "style" === n) for (o in r) a.style[o] = r[o];
               else a[n] = r;
               return a
            },
            getElement: function (t) {
               return i.getElementById(t)
            },
            setElementStyleByView: function (t) {
               var n = t.drawable,
                  i = n.domElement.style,
                  r = t._stateCache || (t._stateCache = {}),
                  o = e.browser.jsVendor,
                  a = "px",
                  s = !1;
               if (this.cacheStateIfChanged(t, ["visible"], r) && (i.display = t.visible ? "" : "none"), this.cacheStateIfChanged(t, ["alpha"], r) && (i.opacity = t.alpha), t.visible && !(t.alpha <= 0)) {
                  this.cacheStateIfChanged(t, ["width"], r) && (i.width = t.width + a), this.cacheStateIfChanged(t, ["height"], r) && (i.height = t.height + a), this.cacheStateIfChanged(t, ["depth"], r) && (i.zIndex = t.depth + 1), (s = this.cacheStateIfChanged(t, ["pivotX", "pivotY"], r)) && (i[o + "TransformOrigin"] = t.pivotX + a + " " + t.pivotY + a), (this.cacheStateIfChanged(t, ["x", "y", "rotation", "scaleX", "scaleY"], r) || s) && (i[o + "Transform"] = this.getTransformCSS(t)), this.cacheStateIfChanged(t, ["background"], r) && (i.backgroundColor = t.background), i.pointerEvents || (i.pointerEvents = "none");
                  var c = n.image;
                  if (c) {
                     var u = c.src;
                     u !== r.image && (r.image = u, i.backgroundImage = "url(" + u + ")");
                     var l = n.rect;
                     if (l) {
                        var h = l[0],
                           d = l[1];
                        h !== r.sx && (r.sx = h, i.backgroundPositionX = -h + a), d !== r.sy && (r.sy = d, i.backgroundPositionY = -d + a)
                     }
                  }
                  var f = t.mask;
                  if (f) {
                     var p = f.drawable.domElement.style.backgroundImage;
                     p !== r.maskImage && (r.maskImage = p, i[o + "MaskImage"] = p, i[o + "MaskRepeat"] = "no-repeat");
                     var m = f.x,
                        g = f.y;
                     m === r.maskX && g === r.maskY || (r.maskX = m, r.maskY = g, i[o + "MaskPosition"] = m + a + " " + g + a)
                  }
               }
            },
            cacheStateIfChanged: function (t, e, n) {
               var i, r, o, a, s = !1;
               for (i = 0, r = e.length; i < r; i++) o = e[i], a = t[o], a != n[o] && (n[o] = a, s = !0);
               return s
            },
            getTransformCSS: function (t) {
               var e = this.browser.supportTransform3D,
                  n = e ? "3d" : "";
               return "translate" + n + "(" + (t.x - t.pivotX) + "px, " + (t.y - t.pivotY) + (e ? "px, 0px)" : "px)") + "rotate" + n + (e ? "(0, 0, 1, " : "(") + t.rotation + "deg)scale" + n + "(" + t.scaleX + ", " + t.scaleY + (e ? ", 1)" : ")")
            }
         }
      }();
      t.Hilo = e
   }(window), function (t) {
      var e = t.Hilo,
         n = function () {
            var t = function (t) {
               t = t || {};
               var n = t.hasOwnProperty("constructor") ? t.constructor : function () { };
               return e.call(n, t), n
            },
               e = function (t) {
                  var e, i, o = {};
                  for (e in t) i = t[e], n.hasOwnProperty(e) ? n[e].call(this, i) : o[e] = i;
                  r(this.prototype, o)
               },
               n = {
                  Extends: function (t) {
                     var e = this.prototype,
                        n = i(t.prototype);
                     r(this, t), r(n, e), n.constructor = this, this.prototype = n, this.superclass = t.prototype
                  },
                  Mixes: function (t) {
                     t instanceof Array || (t = [t]);
                     for (var e, n = this.prototype; e = t.shift();) r(n, e.prototype || e)
                  },
                  Statics: function (t) {
                     r(this, t)
                  }
               },
               i = function () {
                  if (Object.__proto__) return function (t) {
                     return {
                        __proto__: t
                     }
                  };
                  var t = function () { };
                  return function (e) {
                     return t.prototype = e, new t
                  }
               }(),
               r = function (t) {
                  for (var e = 1, n = arguments.length; e < n; e++) {
                     var i, r = arguments[e];
                     for (var o in r) {
                        var s = r[o];
                        !s || "object" != typeof s || void 0 === s.value && "function" != typeof s.get && "function" != typeof s.set ? t[o] = s : (i = i || {}, i[o] = s)
                     }
                     i && a(t, i)
                  }
                  return t
               };
            try {
               var o = Object.defineProperty,
                  a = Object.defineProperties;
               o({}, "$", {
                  value: 0
               })
            } catch (s) {
               "__defineGetter__" in Object && (o = function (t, e, n) {
                  return "value" in n && (t[e] = n.value), "get" in n && t.__defineGetter__(e, n.get), "set" in n && t.__defineSetter__(e, n.set), t
               }, a = function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && o(t, n, e[n]);
                  return t
               })
            }
            return {
               create: t,
               mix: r
            }
         }();
      e.Class = n
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            constructor: function (t, e, n, i, r, o) {
               this.a = t, this.b = e, this.c = n, this.d = i, this.tx = r, this.ty = o
            },
            concat: function (t) {
               var e = arguments,
                  n = this.a,
                  i = this.b,
                  r = this.c,
                  o = this.d,
                  a = this.tx,
                  s = this.ty;
               if (e.length >= 6) var c = e[0],
                  u = e[1],
                  l = e[2],
                  h = e[3],
                  d = e[4],
                  f = e[5];
               else c = t.a, u = t.b, l = t.c, h = t.d, d = t.tx, f = t.ty;
               return this.a = n * c + i * l, this.b = n * u + i * h, this.c = r * c + o * l, this.d = r * u + o * h, this.tx = a * c + s * l + d, this.ty = a * u + s * h + f, this
            },
            rotate: function (t) {
               var e = Math.sin(t),
                  n = Math.cos(t),
                  i = this.a,
                  r = this.b,
                  o = this.c,
                  a = this.d,
                  s = this.tx,
                  c = this.ty;
               return this.a = i * n - r * e, this.b = i * e + r * n, this.c = o * n - a * e, this.d = o * e + a * n, this.tx = s * n - c * e, this.ty = s * e + c * n, this
            },
            scale: function (t, e) {
               return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            },
            translate: function (t, e) {
               return this.tx += t, this.ty += e, this
            },
            identity: function () {
               return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
            },
            invert: function () {
               var t = this.a,
                  e = this.b,
                  n = this.c,
                  i = this.d,
                  r = this.tx,
                  o = t * i - e * n;
               return this.a = i / o, this.b = -e / o, this.c = -n / o, this.d = t / o, this.tx = (n * this.ty - i * r) / o, this.ty = -(t * this.ty - e * r) / o, this
            },
            transformPoint: function (t, e, n) {
               var i = t.x * this.a + t.y * this.c + this.tx,
                  r = t.x * this.b + t.y * this.d + this.ty;
               return e && (i = i + .5 >> 0, r = r + .5 >> 0), n ? {
                  x: i,
                  y: r
               } : (t.x = i, t.y = r, t)
            }
         });
      e.Matrix = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = {
            _listeners: null,
            on: function (t, e, n) {
               for (var i = this._listeners = this._listeners || {}, r = i[t] = i[t] || [], o = 0, a = r.length; o < a; o++) {
                  var s = r[o];
                  if (s.listener === e) return
               }
               return r.push({
                  listener: e,
                  once: n
               }), this
            },
            off: function (t, e) {
               if (0 == arguments.length) return this._listeners = null, this;
               var n = this._listeners && this._listeners[t];
               if (n) {
                  if (1 == arguments.length) return delete this._listeners[t], this;
                  for (var i = 0, r = n.length; i < r; i++) {
                     var o = n[i];
                     if (o.listener === e) {
                        n.splice(i, 1), 0 === n.length && delete this._listeners[t];
                        break
                     }
                  }
               }
               return this
            },
            fire: function (t, e) {
               var n, i;
               "string" == typeof t ? i = t : (n = t, i = t.type);
               var o = this._listeners;
               if (!o) return !1;
               var a = o[i];
               if (a) {
                  var s = a.slice(0);
                  if (n = n || new r(i, this, e), n._stopped) return !1;
                  for (var c = 0; c < s.length; c++) {
                     var u = s[c];
                     if (u.listener.call(this, n), u.once) {
                        var l = a.indexOf(u);
                        l > -1 && a.splice(l, 1)
                     }
                  }
                  return 0 == a.length && delete o[i], !0
               }
               return !1
            }
         },
         r = n.create({
            constructor: function (t, e, n) {
               this.type = t, this.target = e, this.detail = n, this.timeStamp = +new Date
            },
            type: null,
            target: null,
            detail: null,
            timeStamp: 0,
            stopImmediatePropagation: function () {
               this._stopped = !0
            }
         }),
         o = t.Event;
      if (o) {
         var a = o.prototype,
            s = a.stopImmediatePropagation;
         a.stopImmediatePropagation = function () {
            s && s.call(this), this._stopped = !0
         }
      }
      e.EventMixin = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            constructor: function (t) {
               this.init(t)
            },
            image: null,
            rect: null,
            init: function (t) {
               var n = this,
                  r = n.image;
               i.isDrawable(t) ? n.image = t : e.copy(n, t, !0);
               var o = n.image;
               if ("string" == typeof o) {
                  if (!r || o !== r.getAttribute("src")) {
                     n.image = null;
                     var a = new Image;
                     return a.onload = function () {
                        a.onload = null, n.init(a)
                     }, void (a.src = o)
                  }
                  o = n.image = r
               }
               o && !n.rect && (n.rect = [0, 0, o.width, o.height])
            },
            Statics: {
               isDrawable: function (t) {
                  if (!t || !t.tagName) return !1;
                  var e = t.tagName.toLowerCase();
                  return "img" === e || "canvas" === e || "video" === e
               }
            }
         });
      e.Drawable = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            constructor: function (t) {
               t = t || {}, e.copy(this, t, !0)
            },
            renderType: null,
            canvas: null,
            stage: null,
            startDraw: function (t) { },
            draw: function (t) { },
            endDraw: function (t) { },
            transform: function () { },
            hide: function () { },
            remove: function (t) { },
            clear: function (t, e, n, i) { },
            resize: function (t, e) { }
         });
      e.Renderer = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.Renderer,
         r = n.create({
            Extends: i,
            constructor: function (t) {
               r.superclass.constructor.call(this, t), this.context = this.canvas.getContext("2d")
            },
            renderType: "canvas",
            context: null,
            startDraw: function (t) {
               return !!(t.visible && t.alpha > 0) && (t === this.stage && this.context.clearRect(0, 0, t.width, t.height), this.context.save(), !0)
            },
            draw: function (t) {
               var e = this.context,
                  n = t.width,
                  i = t.height,
                  r = t.background;
               r && (e.fillStyle = r, e.fillRect(0, 0, n, i));
               var o = t.drawable,
                  a = o && o.image;
               if (a) {
                  var s = o.rect,
                     c = s[2],
                     u = s[3],
                     l = s[4],
                     h = s[5];
                  if (!c || !u) return;
                  n || i || (n = t.width = c, i = t.height = u), (l || h) && e.translate(l - .5 * c, h - .5 * u), e.drawImage(a, s[0], s[1], c, u, 0, 0, n, i)
               }
            },
            endDraw: function (t) {
               this.context.restore()
            },
            transform: function (t) {
               var n = t.drawable;
               if (n && n.domElement) return void e.setElementStyleByView(t);
               var i = this.context,
                  r = t.scaleX,
                  o = t.scaleY;
               if (t === this.stage) {
                  var a = this.canvas.style,
                     s = t._scaleX,
                     c = t._scaleY,
                     u = !1;
                  (!s && 1 != r || s && s != r) && (t._scaleX = r, a.width = r * t.width + "px", u = !0), (!c && 1 != o || c && c != o) && (t._scaleY = o, a.height = o * t.height + "px", u = !0), u && t.updateViewport()
               } else {
                  var l = t.x,
                     h = t.y,
                     d = t.pivotX,
                     f = t.pivotY,
                     p = t.rotation % 360,
                     m = t.mask;
                  m && (m._render(this), i.clip());
                  var g = t.align;
                  if (g) if ("function" == typeof g) t.align();
                  else {
                     var v = t.parent;
                     if (v) {
                        var w = t.width,
                           _ = t.height,
                           y = v.width,
                           x = v.height;
                        switch (g) {
                           case "TL":
                              l = 0, h = 0;
                              break;
                           case "T":
                              l = y - w >> 1, h = 0;
                              break;
                           case "TR":
                              l = y - w, h = 0;
                              break;
                           case "L":
                              l = 0, h = x - _ >> 1;
                              break;
                           case "C":
                              l = y - w >> 1, h = x - _ >> 1;
                              break;
                           case "R":
                              l = y - w, h = x - _ >> 1;
                              break;
                           case "BL":
                              l = 0, h = x - _;
                              break;
                           case "B":
                              l = y - w >> 1, h = x - _;
                              break;
                           case "BR":
                              l = y - w, h = x - _
                        }
                     }
                  }
                  0 == l && 0 == h || i.translate(l, h), 0 != p && i.rotate(p * Math.PI / 180), 1 == r && 1 == o || i.scale(r, o), 0 == d && 0 == f || i.translate(-d, -f)
               }
               t.alpha > 0 && (i.globalAlpha *= t.alpha)
            },
            remove: function (t) {
               var e = t.drawable,
                  n = e && e.domElement;
               if (n) {
                  var i = n.parentNode;
                  i && i.removeChild(n)
               }
            },
            clear: function (t, e, n, i) {
               this.context.clearRect(t, e, n, i)
            },
            resize: function (t, e) {
               var n = this.canvas,
                  i = this.stage,
                  r = n.style;
               n.width = t, n.height = e, r.width = i.width * i.scaleX + "px", r.height = i.height * i.scaleY + "px"
            }
         });
      e.CanvasRenderer = r
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.Renderer,
         r = e.Drawable,
         o = function () {
            function t(t, n) {
               var i = t.tagName || "div",
                  r = n.image,
                  o = t.width || r && r.width,
                  a = t.height || r && r.height,
                  s = e.createElement(i),
                  c = s.style;
               if (t.id && (s.id = t.id), c.position = "absolute", c.left = (t.left || 0) + "px", c.top = (t.top || 0) + "px", c.width = o + "px", c.height = a + "px", "canvas" == i) {
                  if (s.width = o, s.height = a, r) {
                     var u = s.getContext("2d"),
                        l = n.rect || [0, 0, o, a];
                     u.drawImage(r, l[0], l[1], l[2], l[3], t.x || 0, t.y || 0, t.width || l[2], t.height || l[3])
                  }
               } else if (c.opacity = void 0 != t.alpha ? t.alpha : 1, (t === this.stage || t.clipChildren) && (c.overflow = "hidden"), r && r.src) {
                  c.backgroundImage = "url(" + r.src + ")";
                  var h = t.rectX || 0,
                     d = t.rectY || 0;
                  c.backgroundPosition = -h + "px " + -d + "px"
               }
               return s
            }
            return n.create({
               Extends: i,
               constructor: function (t) {
                  o.superclass.constructor.call(this, t)
               },
               renderType: "dom",
               startDraw: function (e) {
                  var n = e.drawable = e.drawable || new r;
                  return n.domElement = n.domElement || t(e, n), !0
               },
               draw: function (t) {
                  var e = t.parent,
                     n = t.drawable.domElement,
                     i = n.parentNode;
                  if (e) {
                     var r = e.drawable.domElement;
                     if (r != i && r.appendChild(n), !t.width && !t.height) {
                        var o = t.drawable.rect;
                        o && (o[2] || o[3]) && (t.width = o[2], t.height = o[3])
                     }
                  } else t !== this.stage || i || (n.style.overflow = "hidden", this.canvas.appendChild(n))
               },
               transform: function (t) {
                  if (e.setElementStyleByView(t), t === this.stage) {
                     var n = this.canvas.style,
                        i = t._scaleX,
                        r = t._scaleY,
                        o = t.scaleX,
                        a = t.scaleY;
                     (!i && 1 != o || i && i != o) && (t._scaleX = o, n.width = o * t.width + "px"), (!r && 1 != a || r && r != a) && (t._scaleY = a, n.height = a * t.height + "px")
                  }
               },
               remove: function (t) {
                  var e = t.drawable,
                     n = e && e.domElement;
                  if (n) {
                     var i = n.parentNode;
                     i && i.removeChild(n)
                  }
               },
               hide: function (t) {
                  var e = t.drawable && t.drawable.domElement;
                  e && (e.style.display = "none")
               },
               resize: function (t, e) {
                  var n = this.canvas.style;
                  n.width = t + "px", n.height = e + "px", "absolute" != n.position && (n.position = "relative")
               }
            })
         }();
      e.DOMRenderer = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.Renderer,
         r = e.Matrix,
         o = Math.PI / 180,
         a = n.create({
            Extends: i,
            Statics: {
               MAX_BATCH_NUM: 2e3,
               ATTRIBUTE_NUM: 5,
               isSupport: function () {
                  if (void 0 == this._isSupported) {
                     var t = document.createElement("canvas");
                     t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl")) ? this._isSupported = !0 : this._isSupported = !1
                  }
                  return this._isSupported
               }
            },
            renderType: "webgl",
            gl: null,
            _isContextLost: !1,
            _cacheTexture: {},
            constructor: function (t) {
               a.superclass.constructor.call(this, t);
               var e = this;
               this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
               this.maxBatchNum = a.MAX_BATCH_NUM, this.positionStride = 4 * a.ATTRIBUTE_NUM;
               var n = this.maxBatchNum * a.ATTRIBUTE_NUM * 4,
                  i = 6 * this.maxBatchNum;
               this.arrayBuffer = new ArrayBuffer(4 * n), this.float32Array = new Float32Array(this.arrayBuffer), this.uint32Array = new Uint32Array(this.arrayBuffer), this.indexs = new Uint16Array(i);
               for (var r = 0, o = 0; r < i; r += 6, o += 4) this.indexs[r + 0] = o + 0, this.indexs[r + 1] = o + 1, this.indexs[r + 2] = o + 2, this.indexs[r + 3] = o + 1, this.indexs[r + 4] = o + 2, this.indexs[r + 5] = o + 3;
               this.batchIndex = 0, this.sprites = [], this.canvas.addEventListener("webglcontextlost", function (t) {
                  e._isContextLost = !0, t.preventDefault()
               }, !1), this.canvas.addEventListener("webglcontextrestored", function (t) {
                  e._isContextLost = !1, e.setupWebGLStateAndResource()
               }, !1), this.setupWebGLStateAndResource()
            },
            setupWebGLStateAndResource: function () {
               var t = this.gl;
               t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.clearColor(0, 0, 0, 0), t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this._cacheTexture = {}, this._initShaders(), this.defaultShader.active(), this.positionBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indexs, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.positionBuffer), t.bufferData(t.ARRAY_BUFFER, this.arrayBuffer, t.DYNAMIC_DRAW), t.vertexAttribPointer(this.a_position, 2, t.FLOAT, !1, this.positionStride, 0), t.vertexAttribPointer(this.a_TexCoord, 2, t.FLOAT, !1, this.positionStride, 8), t.vertexAttribPointer(this.a_tint, 4, t.UNSIGNED_BYTE, !0, this.positionStride, 16)
            },
            context: null,
            startDraw: function (t) {
               return !!(t.visible && t.alpha > 0) && (t === this.stage && this.clear(), !0)
            },
            draw: function (t) {
               var e = (this.context, t.width),
                  n = t.height,
                  i = (t.background, t.drawable),
                  r = i && i.image;
               if (r) {
                  var o = (this.gl, i.rect),
                     a = o[2],
                     s = o[3];
                  o[4], o[5];
                  e || n || (e = t.width = a, n = t.height = s), this.batchIndex >= this.maxBatchNum && this._renderBatches();
                  var c = this._createVertexs(r, o[0], o[1], a, s, 0, 0, e, n),
                     u = this.batchIndex * this.positionStride,
                     l = this.float32Array,
                     h = this.uint32Array,
                     d = (t.tint >> 16) + (65280 & t.tint) + ((255 & t.tint) << 16) + (255 * t.__webglRenderAlpha << 24);
                  l[u + 0] = c[0], l[u + 1] = c[1], l[u + 2] = c[2], l[u + 3] = c[3], h[u + 4] = d, l[u + 5] = c[4], l[u + 6] = c[5], l[u + 7] = c[6], l[u + 8] = c[7], h[u + 9] = d, l[u + 10] = c[8], l[u + 11] = c[9], l[u + 12] = c[10], l[u + 13] = c[11], h[u + 14] = d, l[u + 15] = c[12], l[u + 16] = c[13], l[u + 17] = c[14], l[u + 18] = c[15], h[u + 19] = d;
                  for (var f = t.__webglWorldMatrix, p = 0; p < 4; p++) {
                     var m = l[u + 5 * p],
                        g = l[u + 5 * p + 1];
                     l[u + 5 * p] = f.a * m + f.c * g + f.tx, l[u + 5 * p + 1] = f.b * m + f.d * g + f.ty
                  }
                  t.__textureImage = r, this.sprites[this.batchIndex++] = t
               }
            },
            endDraw: function (t) {
               t === this.stage && this._renderBatches()
            },
            transform: function (t) {
               var n = t.drawable;
               if (n && n.domElement) return void e.setElementStyleByView(t);
               var i = (this.context, t.scaleX),
                  o = t.scaleY;
               if (t === this.stage) {
                  var a = this.canvas.style,
                     s = t._scaleX,
                     c = t._scaleY,
                     u = !1;
                  (!s && 1 != i || s && s != i) && (t._scaleX = i, a.width = i * t.width + "px", u = !0), (!c && 1 != o || c && c != o) && (t._scaleY = o, a.height = o * t.height + "px", u = !0), u && t.updateViewport(), t.__webglWorldMatrix = t.__webglWorldMatrix || new r(1, 0, 0, 1, 0, 0)
               } else t.parent && (t.__webglWorldMatrix = t.__webglWorldMatrix || new r(1, 0, 0, 1, 0, 0), this._setConcatenatedMatrix(t, t.parent));
               t.alpha > 0 && (t.parent && t.parent.__webglRenderAlpha ? t.__webglRenderAlpha = t.alpha * t.parent.__webglRenderAlpha : t.__webglRenderAlpha = t.alpha)
            },
            remove: function (t) {
               var e = t.drawable,
                  n = e && e.domElement;
               if (n) {
                  var i = n.parentNode;
                  i && i.removeChild(n)
               }
            },
            clear: function (t, e, n, i) {
               this.gl.clear(this.gl.COLOR_BUFFER_BIT)
            },
            resize: function (t, e) {
               if (this.width !== t || this.height !== e) {
                  var n = this.canvas,
                     i = this.stage,
                     r = n.style;
                  this.width = n.width = t, this.height = n.height = e, r.width = i.width * i.scaleX + "px", r.height = i.height * i.scaleY + "px", this.gl.viewport(0, 0, t, e), this.canvasHalfWidth = .5 * t, this.canvasHalfHeight = .5 * e, this._uploadProjectionTransform(!0)
               }
            },
            _renderBatches: function () {
               var t = this.gl;
               t.bufferSubData(t.ARRAY_BUFFER, 0, this.uint32Array.subarray(0, this.batchIndex * this.positionStride));
               for (var e = 0, n = 0, i = null, r = 0; r < this.batchIndex; r++) {
                  var o = this.sprites[r];
                  i && i !== o.__textureImage && (this._renderBatch(e, r), e = r, n = 1), i = o.__textureImage
               }
               this._renderBatch(e, this.batchIndex), this.batchIndex = 0
            },
            _renderBatch: function (t, e) {
               var n = this.gl,
                  i = e - t;
               i > 0 && (n.bindTexture(n.TEXTURE_2D, this._getTexture(this.sprites[t])), n.drawElements(n.TRIANGLES, 6 * i, n.UNSIGNED_SHORT, 6 * t * 2))
            },
            _uploadProjectionTransform: function (t) {
               this._projectionTransformElements && !t || (this._projectionTransformElements = new Float32Array([1 / this.canvasHalfWidth, 0, 0, 0, -1 / this.canvasHalfHeight, 0, -1, 1, 1])), this.gl.uniformMatrix3fv(this.u_projectionTransform, !1, this._projectionTransformElements)
            },
            _initShaders: function () {
               var t = "            attribute vec2 a_position;\n            attribute vec2 a_TexCoord;\n            attribute vec4 a_tint;\n            uniform mat3 u_projectionTransform;\n            varying vec2 v_TexCoord;\n            varying vec4 v_tint;\n            void main(){\n                gl_Position =  vec4((u_projectionTransform * vec3(a_position, 1.0)).xy, 1.0, 1.0);\n                v_TexCoord = a_TexCoord;\n                v_tint = vec4(a_tint.rgb * a_tint.a, a_tint.a);\n            }\n        ",
                  e = "\n            precision mediump float;\n            uniform sampler2D u_Sampler;\n            varying vec2 v_TexCoord;\n            varying vec4 v_tint;\n            void main(){\n                gl_FragColor = texture2D(u_Sampler, v_TexCoord) * v_tint;\n            }\n        ";
               this.defaultShader = new s(this, {
                  v: t,
                  f: e
               }, {
                     attributes: ["a_position", "a_TexCoord", "a_tint"],
                     uniforms: ["u_projectionTransform", "u_Sampler"]
                  })
            },
            _createVertexs: function (t, e, n, i, r, o, a, s, c) {
               var u = this.__tempVertexs || [],
                  l = t.width,
                  h = t.height;
               i /= l, r /= h, e /= l, n /= h, s = s, c = c, o = o, a = a, i + e > 1 && (i = 1 - e), r + n > 1 && (r = 1 - n);
               var d = 0;
               return u[d++] = o, u[d++] = a, u[d++] = e, u[d++] = n, u[d++] = o + s, u[d++] = a, u[d++] = e + i, u[d++] = n, u[d++] = o, u[d++] = a + c, u[d++] = e, u[d++] = n + r, u[d++] = o + s, u[d++] = a + c, u[d++] = e + i, u[d++] = n + r, u
            },
            _setConcatenatedMatrix: function (t, e) {
               var n = t.__webglWorldMatrix,
                  i = 1,
                  r = 0,
                  a = t.rotation % 360,
                  s = t.pivotX,
                  c = t.pivotY,
                  u = t.scaleX,
                  l = t.scaleY;
               if (a) {
                  var h = a * o;
                  i = Math.cos(h), r = Math.sin(h)
               }
               n.a = i * u, n.b = r * u, n.c = -r * l, n.d = i * l, n.tx = t.x - n.a * s - n.c * c, n.ty = t.y - n.b * s - n.d * c, n.concat(e.__webglWorldMatrix)
            },
            _getTexture: function (t) {
               var e = t.__textureImage,
                  n = this._cacheTexture[e.src];
               return n || (n = this.activeShader.uploadTexture(e)), n
            }
         }),
         s = function (t, e, n) {
            this.renderer = t, this.gl = t.gl, this.program = this._createProgram(this.gl, e.v, e.f), n = n || {}, this.attributes = n.attributes || [], this.uniforms = n.uniforms || []
         };
      s.prototype = {
         active: function () {
            var t = this,
               e = t.renderer,
               n = t.gl,
               i = t.program;
            i && n && (e.activeShader = t, n.useProgram(i), t.attributes.forEach(function (t) {
               e[t] = n.getAttribLocation(i, t), n.enableVertexAttribArray(e[t])
            }), t.uniforms.forEach(function (t) {
               e[t] = n.getUniformLocation(i, t)
            }), t.width === e.width && t.height === e.height || (t.width = e.width, t.height = e.height, e._uploadProjectionTransform()))
         },
         uploadTexture: function (t) {
            var e = this.gl,
               n = this.renderer,
               i = e.createTexture(),
               r = n.u_Sampler;
            return e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, i), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.uniform1i(r, 0), e.bindTexture(e.TEXTURE_2D, null), this.renderer._cacheTexture[t.src] = i, i
         },
         _createProgram: function (t, e, n) {
            var i = this._createShader(t, t.VERTEX_SHADER, e),
               r = this._createShader(t, t.FRAGMENT_SHADER, n);
            if (!i || !r) return null;
            var o = t.createProgram();
            if (o) {
               t.attachShader(o, i), t.attachShader(o, r), t.linkProgram(o), t.deleteShader(r), t.deleteShader(i);
               var a = t.getProgramParameter(o, t.LINK_STATUS);
               if (!a) {
                  var s = t.getProgramInfoLog(o);
                  return console.log("Failed to link program: " + s), t.deleteProgram(o), null
               }
            }
            return o
         },
         _createShader: function (t, e, n) {
            var i = t.createShader(e);
            if (i) {
               t.shaderSource(i, n), t.compileShader(i);
               var r = t.getShaderParameter(i, t.COMPILE_STATUS);
               if (!r) {
                  var o = t.getShaderInfoLog(i);
                  return console.log("Failed to compile shader: " + o), t.deleteShader(i), null
               }
            }
            return i
         }
      }, e.WebGLRenderer = a
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.EventMixin,
         r = e.Matrix,
         o = function () {
            function t(t, e, n) {
               for (var i, r, o, a, s = 0, c = !1, u = 0, l = n.length; u < l; u++) {
                  var h = n[u],
                     d = n[(u + 1) % l];
                  if (h.y == d.y && e == h.y && (h.x > d.x ? (i = d.x, r = h.x) : (i = h.x, r = d.x), t >= i && t <= r)) c = !0;
                  else if (h.y > d.y ? (o = d.y, a = h.y) : (o = h.y, a = d.y), !(e < o || e > a)) {
                     var f = (e - h.y) * (d.x - h.x) / (d.y - h.y) + h.x;
                     if (f > t ? s++ : f == t && (c = !0), h.x > t && h.y == e) {
                        var p = n[(l + u - 1) % l];
                        (p.y < e && d.y > e || p.y > e && d.y < e) && s++
                     }
                  }
               }
               return c || s % 2 == 1
            }

            function o(t, e) {
               var n = a(t, e, {
                  overlap: -(1 / 0),
                  normal: {
                     x: 0,
                     y: 0
                  }
               });
               return !!n && a(e, t, n)
            }

            function a(t, e, n) {
               for (var i, r, o, a, s, c, u, l, h, d = t.length, f = e.length, p = {
                  x: 0,
                  y: 0
               }, m = 0; m < d; m++) {
                  i = t[m], r = t[m < d - 1 ? m + 1 : 0], p.x = i.y - r.y, p.y = r.x - i.x, o = Math.sqrt(p.x * p.x + p.y * p.y), p.x /= o, p.y /= o, a = s = t[0].x * p.x + t[0].y * p.y;
                  for (var g = 1; g < d; g++) l = t[g].x * p.x + t[g].y * p.y, l > s ? s = l : l < a && (a = l);
                  for (c = u = e[0].x * p.x + e[0].y * p.y, g = 1; g < f; g++) l = e[g].x * p.x + e[g].y * p.y, l > u ? u = l : l < c && (c = l);
                  if (a < c ? (h = c - s, p.x = -p.x, p.y = -p.y) : h = a - u, h >= 0) return !1;
                  h > n.overlap && (n.overlap = h, n.normal.x = p.x, n.normal.y = p.y)
               }
               return n
            }
            return n.create({
               Mixes: i,
               constructor: function (t) {
                  t = t || {}, this.id = this.id || t.id || e.getUid("View"), e.copy(this, t, !0)
               },
               tint: 16777215,
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
                  for (var t, e = this; t = e.parent;) e = t;
                  return e.canvas ? e : null
               },
               getScaledWidth: function () {
                  return this.width * this.scaleX
               },
               getScaledHeight: function () {
                  return this.height * this.scaleY
               },
               addTo: function (t, e) {
                  return "number" == typeof e ? t.addChildAt(this, e) : t.addChild(this), this
               },
               removeFromParent: function () {
                  var t = this.parent;
                  return t && t.removeChild(this), this
               },
               getBounds: function () {
                  for (var t, e, n, i, r, o, a, s = this.width, c = this.height, u = this.getConcatenatedMatrix(), l = this.boundsArea || [{
                     x: 0,
                     y: 0
                  }, {
                     x: s,
                     y: 0
                  }, {
                     x: s,
                     y: c
                  }, {
                     x: 0,
                     y: c
                  }], h = [], d = 0, f = l.length; d < f; d++) t = u.transformPoint(l[d], !0, !0), e = t.x, n = t.y, 0 == d ? (i = r = e, o = a = n) : (i > e ? i = e : r < e && (r = e), o > n ? o = n : a < n && (a = n)), h[d] = t;
                  return h.x = i, h.y = o, h.width = r - i, h.height = a - o, h
               },
               getConcatenatedMatrix: function (t) {
                  for (var e = new r(1, 0, 0, 1, 0, 0), n = this; n != t && n.parent; n = n.parent) {
                     var i = 1,
                        o = 0,
                        a = n.rotation % 360,
                        s = n.pivotX,
                        c = n.pivotY,
                        u = n.scaleX,
                        l = n.scaleY;
                     if (a) {
                        var h = a * Math.PI / 180;
                        i = Math.cos(h), o = Math.sin(h)
                     }
                     0 != s && (e.tx -= s), 0 != c && (e.ty -= c), e.concat(i * u, o * u, -o * l, i * l, n.x, n.y)
                  }
                  return e
               },
               hitTestPoint: function (e, n, i) {
                  var r = this.getBounds(),
                     o = e >= r.x && e <= r.x + r.width && n >= r.y && n <= r.y + r.height;
                  return o && i && (o = t(e, n, r)), o
               },
               hitTestObject: function (t, e, n) {
                  var i = this.getBounds(),
                     r = t.getBounds(),
                     a = i.x <= r.x + r.width && r.x <= i.x + i.width && i.y <= r.y + r.height && r.y <= i.y + i.height;
                  return a && e && (a = o(i, r)), a && n ? {
                     isHited: !!a,
                     isX: i.x < r.x + r.width && r.x < i.x + i.width,
                     isY: i.y < r.y + r.height && r.y < i.y + i.height
                  } : !!a
               },
               _render: function (t, e) {
                  this.onUpdate && this.onUpdate(e) === !1 || !t.startDraw(this) || (t.transform(this), this.render(t, e), t.endDraw(this))
               },
               _fireMouseEvent: function (t) {
                  if (t.eventCurrentTarget = this, this.fire(t), "mousemove" == t.type) {
                     if (!this.__mouseOver) {
                        this.__mouseOver = !0;
                        var n = e.copy({}, t);
                        n.type = "mouseover", this.fire(n)
                     }
                  } else "mouseout" == t.type && (this.__mouseOver = !1);
                  var i = this.parent;
                  t._stopped || t._stopPropagationed || !i || ("mouseout" == t.type || "touchout" == t.type ? i.hitTestPoint(t.stageX, t.stageY, !0) || i._fireMouseEvent(t) : i._fireMouseEvent(t))
               },
               onUpdate: null,
               render: function (t, e) {
                  t.draw(this)
               },
               toString: function () {
                  return e.viewToString(this)
               }
            })
         }();
      e.View = o
   }(window), function (t) {
      var e = t.Hilo,
         n = (e.Class, e.Drawable),
         i = e.createElement("canvas"),
         r = i.getContext("2d"),
         o = {
            _cacheDirty: !0,
            cache: function (t) {
               (t || this._cacheDirty || !this._cacheImage) && this.updateCache()
            },
            updateCache: function () {
               i.width = this.width, i.height = this.height, this._draw(r), this._cacheImage = new Image, this._cacheImage.src = i.toDataURL(), this.drawable = this.drawable || new n, this.drawable.init(this._cacheImage), this._cacheDirty = !1
            },
            setCacheDirty: function (t) {
               this._cacheDirty = t
            }
         };
      e.CacheMixin = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("Container"), r.superclass.constructor.call(this, t), this.children ? this._updateChildren() : this.children = []
            },
            children: null,
            pointerChildren: !0,
            clipChildren: !1,
            getNumChildren: function () {
               return this.children.length
            },
            addChildAt: function (t, e) {
               var n = this.children,
                  i = n.length,
                  r = t.parent;
               e = e < 0 ? 0 : e > i ? i : e;
               var o = this.getChildIndex(t);
               if (o == e) return this;
               if (o >= 0 ? (n.splice(o, 1), e = e == i ? i - 1 : e) : r && r.removeChild(t), n.splice(e, 0, t), o < 0) this._updateChildren(e);
               else {
                  var a = o < e ? o : e,
                     s = o < e ? e : o;
                  this._updateChildren(a, s + 1)
               }
               return this
            },
            addChild: function (t) {
               for (var e = this.children.length, n = arguments, i = 0, r = n.length; i < r; i++) this.addChildAt(n[i], e + i);
               return this
            },
            removeChildAt: function (t) {
               var e = this.children;
               if (t < 0 || t >= e.length) return null;
               var n = e[t];
               if (n) {
                  if (!n.__renderer) for (var i = n; i = i.parent;) {
                     if (i.renderer) {
                        n.__renderer = i.renderer;
                        break
                     }
                     if (i.__renderer) {
                        n.__renderer = i.__renderer;
                        break
                     }
                  }
                  n.__renderer && n.__renderer.remove(n), n.parent = null, n.depth = -1
               }
               return e.splice(t, 1), this._updateChildren(t), n
            },
            removeChild: function (t) {
               return this.removeChildAt(this.getChildIndex(t))
            },
            removeChildById: function (t) {
               for (var e, n = this.children, i = 0, r = n.length; i < r; i++) if (e = n[i], e.id === t) return this.removeChildAt(i), e;
               return null
            },
            removeAllChildren: function () {
               for (; this.children.length;) this.removeChildAt(0);
               return this
            },
            getChildAt: function (t) {
               var e = this.children;
               return t < 0 || t >= e.length ? null : e[t]
            },
            getChildById: function (t) {
               for (var e, n = this.children, i = 0, r = n.length; i < r; i++) if (e = n[i], e.id === t) return e;
               return null
            },
            getChildIndex: function (t) {
               return this.children.indexOf(t)
            },
            setChildIndex: function (t, e) {
               var n = this.children,
                  i = n.indexOf(t);
               if (i >= 0 && i != e) {
                  var r = n.length;
                  e = e < 0 ? 0 : e >= r ? r - 1 : e, n.splice(i, 1), n.splice(e, 0, t), this._updateChildren()
               }
               return this
            },
            swapChildren: function (t, e) {
               var n = this.children,
                  i = this.getChildIndex(t),
                  r = this.getChildIndex(e);
               t.depth = r, n[r] = t, e.depth = i, n[i] = e
            },
            swapChildrenAt: function (t, e) {
               var n = this.children,
                  i = this.getChildAt(t),
                  r = this.getChildAt(e);
               i.depth = e, n[e] = i, r.depth = t, n[t] = r
            },
            sortChildren: function (t) {
               var e = t,
                  n = this.children;
               if ("string" == typeof e) {
                  var i = e;
                  e = function (t, e) {
                     return e[i] - t[i]
                  }
               }
               n.sort(e), this._updateChildren()
            },
            _updateChildren: function (t, e) {
               for (var n, i = this.children, t = t || 0, e = e || i.length, r = t; r < e; r++) n = i[r], n.depth = r + 1, n.parent = this
            },
            contains: function (t) {
               for (; t = t.parent;) if (t === this) return !0;
               return !1
            },
            getViewAtPoint: function (t, e, n, i, r) {
               for (var o, a, s = i ? [] : null, c = this.children, u = c.length - 1; u >= 0; u--) if (o = c[u], !(!o || !o.visible || o.alpha <= 0 || r && !o.pointerEnabled)) if (o.children && o.children.length && (!r || o.pointerChildren) && (a = o.getViewAtPoint(t, e, n, i, r)), a) {
                  if (!i) return a;
                  a.length && (s = s.concat(a))
               } else if (o.hitTestPoint(t, e, n)) {
                  if (!i) return o;
                  s.push(o)
               }
               return i && s.length ? s : null
            },
            render: function (t, e) {
               r.superclass.render.call(this, t, e);
               var n, i, o, a = this.children.slice(0);
               for (n = 0, i = a.length; n < i; n++) o = a[n], o.parent === this && o._render(t, e)
            }
         });
      e.Container = r
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.Container,
         r = e.CanvasRenderer,
         o = e.DOMRenderer,
         a = e.WebGLRenderer,
         s = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("Stage"), s.superclass.constructor.call(this, t), this._initRenderer(t);
               var n = this.width,
                  i = this.height,
                  r = this.updateViewport();
               t.width || (n = r && r.width || 320), t.height || (i = r && r.height || 480), this.resize(n, i, !0)
            },
            canvas: null,
            renderer: null,
            paused: !1,
            viewport: null,
            _initRenderer: function (t) {
               var n = t.canvas,
                  i = t.container,
                  s = t.renderType || "canvas";
               if ("string" == typeof n && (n = e.getElement(n)), "string" == typeof i && (i = e.getElement(i)), n) n.getContext || (s = "dom");
               else {
                  var c = "dom" === s ? "div" : "canvas";
                  n = e.createElement(c, {
                     style: {
                        position: "absolute"
                     }
                  })
               }
               this.canvas = n, i && i.appendChild(n);
               var u = {
                  canvas: n,
                  stage: this
               };
               switch (s) {
                  case "dom":
                     this.renderer = new o(u);
                     break;
                  case "webgl":
                     a.isSupport() ? this.renderer = new a(u) : this.renderer = new r(u);
                     break;
                  case "canvas":
                  default:
                     this.renderer = new r(u)
               }
            },
            addTo: function (t) {
               var e = this.canvas;
               return e.parentNode !== t && t.appendChild(e), this
            },
            tick: function (t) {
               this.paused || this._render(this.renderer, t)
            },
            enableDOMEvent: function (t, e) {
               for (var n = this, i = n.canvas, r = "string" == typeof t ? [t] : t, e = e !== !1, o = n._domListener || (n._domListener = function (t) {
                  n._onDOMEvent(t)
               }), a = 0; a < r.length; a++) {
                  var t = r[a];
                  e ? i.addEventListener(t, o, !1) : i.removeEventListener(t, o)
               }
               return n
            },
            _onDOMEvent: function (t) {
               var n = t.type,
                  i = t,
                  r = 0 == n.indexOf("touch"),
                  o = t;
               if (r) {
                  var a = t.touches,
                     s = t.changedTouches;
                  o = a && a.length ? a[a.length - 1] : s && s.length ? s[s.length - 1] : null
               }
               var c = o.pageX || o.clientX,
                  u = o.pageY || o.clientY,
                  l = this.viewport || this.updateViewport();
               i.stageX = c = (c - l.left) / this.scaleX, i.stageY = u = (u - l.top) / this.scaleY, i.stopPropagation = function () {
                  this._stopPropagationed = !0
               };
               var h = this.getViewAtPoint(c, u, !0, !1, !0) || this,
                  d = this.canvas,
                  f = this._eventTarget,
                  p = "mouseout" === n;
               if (f && (f != h && (!f.contains || !f.contains(h)) || p)) {
                  var m = "touchmove" === n ? "touchout" : "mousemove" === n || p || !h ? "mouseout" : null;
                  if (m) {
                     var g = e.copy({}, i);
                     g.type = m, g.eventTarget = f, f._fireMouseEvent(g)
                  }
                  i.lastEventTarget = f, this._eventTarget = null
               }
               if (h && h.pointerEnabled && "mouseout" !== n && (i.eventTarget = this._eventTarget = h, h._fireMouseEvent(i)), !r) {
                  var v = h && h.pointerEnabled && h.useHandCursor ? "pointer" : "";
                  d.style.cursor = v
               }
               e.browser.android && "touchmove" === n && t.preventDefault()
            },
            updateViewport: function () {
               var t = this.canvas,
                  n = null;
               return t.parentNode && (n = this.viewport = e.getElementRect(t)), n
            },
            resize: function (t, e, n) {
               (n || this.width !== t || this.height !== e) && (this.width = t, this.height = e, this.renderer.resize(t, e), this.updateViewport())
            }
         });
      e.Stage = s
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.Drawable,
         o = n.create({
            Extends: i,
            constructor: function (t) {
               if (t = t || {}, this.id = this.id || t.id || e.getUid("Bitmap"), o.superclass.constructor.call(this, t), this.drawable = new r(t), !this.width || !this.height) {
                  var n = this.drawable.rect;
                  n && (this.width = n[2], this.height = n[3])
               }
            },
            setImage: function (t, e) {
               if (this.drawable.init({
                  image: t,
                  rect: e
               }), e) this.width = e[2], this.height = e[3];
               else if (!this.width && !this.height) {
                  var e = this.drawable.rect;
                  e && (this.width = e[2], this.height = e[3])
               }
               return this
            }
         });
      e.Bitmap = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.Drawable,
         o = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("Sprite"), o.superclass.constructor.call(this, t), this._frames = [], this._frameNames = {}, this.drawable = new r, t.frames && this.addFrame(t.frames)
            },
            _frames: null,
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
            },
            addFrame: function (t, e) {
               var n = null != e ? e : this._frames.length;
               if (t instanceof Array) for (var i = 0, r = t.length; i < r; i++) this.setFrame(t[i], n + i);
               else this.setFrame(t, n);
               return this
            },
            setFrame: function (t, e) {
               var n = this._frames,
                  i = n.length;
               return e = e < 0 ? 0 : e > i ? i : e, n[e] = t, t.name && (this._frameNames[t.name] = t), (0 != e || this.width) && this.height || (this.width = t.rect[2], this.height = t.rect[3]), this
            },
            getFrame: function (t) {
               if ("number" == typeof t) {
                  var e = this._frames;
                  return t < 0 || t >= e.length ? null : e[t]
               }
               return this._frameNames[t]
            },
            getFrameIndex: function (t) {
               var e = this._frames,
                  n = e.length,
                  i = -1;
               if ("number" == typeof t) i = t;
               else {
                  var r = "string" == typeof t ? this._frameNames[t] : t;
                  if (r) for (var o = 0; o < n; o++) if (r === e[o]) {
                     i = o;
                     break
                  }
               }
               return i
            },
            play: function () {
               return this.paused = !1, this
            },
            stop: function () {
               return this.paused = !0, this
            },
            "goto": function (t, e) {
               var n = this._frames.length,
                  i = this.getFrameIndex(t);
               return this.currentFrame = i < 0 ? 0 : i >= n ? n - 1 : i, this.paused = e, this._firstRender = !0, this
            },
            _render: function (t, e) {
               var n, i = this.currentFrame;
               if (this._firstRender ? (n = i, this._firstRender = !1) : n = this._nextFrame(e), n != i) {
                  this.currentFrame = n;
                  var r = this._frames[n].callback;
                  r && r.call(this)
               }
               this.onEnterFrame && this.onEnterFrame(n), this.drawable.init(this._frames[n]), o.superclass._render.call(this, t, e)
            },
            _nextFrame: function (t) {
               var e = this._frames,
                  n = e.length,
                  i = this.currentFrame,
                  r = e[i],
                  o = r.duration || this.interval,
                  a = this._frameElapsed,
                  s = 0 != i || this.drawable ? a + (this.timeBased ? t : 1) : 0;
               return a = this._frameElapsed = s < o ? s : 0, (r.stop || !this.loop && i >= n - 1) && this.stop(), this.paused || 0 != a || (null != r.next ? i = this.getFrameIndex(r.next) : i >= n - 1 ? i = 0 : this.drawable && i++), i
            },
            setFrameCallback: function (t, e) {
               return t = this.getFrame(t), t && (t.callback = e), this
            },
            onEnterFrame: null
         });
      e.Sprite = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.Drawable,
         o = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("DOMElement"), o.superclass.constructor.call(this, t), this.drawable = new r;
               var n = this.drawable.domElement = t.element || e.createElement("div");
               n.id = this.id, this.pointerEnabled && (n.style.pointerEvents = "visible")
            },
            _render: function (t, e) {
               this.onUpdate && this.onUpdate(e) === !1 || (t.transform(this), this.visible && this.alpha > 0 && this.render(t, e))
            },
            render: function (t, e) {
               if ("dom" !== t.renderType) {
                  var n, i = t.canvas,
                     r = this.drawable.domElement,
                     o = this.depth,
                     a = i.nextSibling;
                  if (r.parentNode) return;
                  for (; a && 3 != a.nodeType && (n = parseInt(a.style.zIndex) || 0, !(n <= 0 || n > o));) a = a.nextSibling;
                  i.parentNode.insertBefore(this.drawable.domElement, a)
               } else t.draw(this)
            }
         });
      e.DOMElement = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.CacheMixin,
         o = function () {
            var t = document.createElement("canvas"),
               a = t.getContext && t.getContext("2d");
            return n.create({
               Extends: i,
               Mixes: r,
               constructor: function (t) {
                  t = t || {}, this.id = this.id || t.id || e.getUid("Graphics"), o.superclass.constructor.call(this, t), this._actions = []
               },
               lineWidth: 1,
               lineAlpha: 1,
               lineCap: null,
               lineJoin: null,
               miterLimit: 10,
               hasStroke: !1,
               strokeStyle: "0",
               hasFill: !1,
               fillStyle: "0",
               fillAlpha: 0,
               lineStyle: function (t, e, n, i, r, o) {
                  var a = this,
                     s = a._addAction;
                  return s.call(a, ["lineWidth", a.lineWidth = t || 1]), s.call(a, ["strokeStyle", a.strokeStyle = e || "0"]), s.call(a, ["lineAlpha", a.lineAlpha = n || 1]), void 0 != i && s.call(a, ["lineCap", a.lineCap = i]), void 0 != r && s.call(a, ["lineJoin", a.lineJoin = r]), void 0 != o && s.call(a, ["miterLimit", a.miterLimit = o]), a.hasStroke = !0, a
               },
               beginFill: function (t, e) {
                  var n = this,
                     i = n._addAction;
                  return i.call(n, ["fillStyle", n.fillStyle = t]), i.call(n, ["fillAlpha", n.fillAlpha = e || 1]), n.hasFill = !0, n
               },
               endFill: function () {
                  var t = this,
                     e = t._addAction;
                  return t.hasStroke && e.call(t, ["stroke"]), t.hasFill && e.call(t, ["fill"]), t.setCacheDirty(!0), t
               },
               beginLinearGradientFill: function (t, e, n, i, r, o) {
                  for (var s = this, c = a.createLinearGradient(t, e, n, i), u = 0, l = r.length; u < l; u++) c.addColorStop(o[u], r[u]);
                  return s.hasFill = !0, s._addAction(["fillStyle", s.fillStyle = c])
               },
               beginRadialGradientFill: function (t, e, n, i, r, o, s, c) {
                  for (var u = this, l = a.createRadialGradient(t, e, n, i, r, o), h = 0, d = s.length; h < d; h++) l.addColorStop(c[h], s[h]);
                  return u.hasFill = !0, u._addAction(["fillStyle", u.fillStyle = l])
               },
               beginBitmapFill: function (t, e) {
                  var n = this,
                     i = a.createPattern(t, e || "");
                  return n.hasFill = !0, n._addAction(["fillStyle", n.fillStyle = i])
               },
               beginPath: function () {
                  return this._addAction(["beginPath"])
               },
               closePath: function () {
                  return this._addAction(["closePath"])
               },
               moveTo: function (t, e) {
                  return this._addAction(["moveTo", t, e])
               },
               lineTo: function (t, e) {
                  return this._addAction(["lineTo", t, e])
               },
               quadraticCurveTo: function (t, e, n, i) {
                  return this._addAction(["quadraticCurveTo", t, e, n, i])
               },
               bezierCurveTo: function (t, e, n, i, r, o) {
                  return this._addAction(["bezierCurveTo", t, e, n, i, r, o])
               },
               drawRect: function (t, e, n, i) {
                  return this._addAction(["rect", t, e, n, i])
               },
               drawRoundRectComplex: function (t, e, n, i, r, o, a, s) {
                  var c = this,
                     u = c._addAction;
                  return u.call(c, ["moveTo", t + r, e]), u.call(c, ["lineTo", t + n - o, e]), u.call(c, ["arc", t + n - o, e + o, o, -Math.PI / 2, 0, !1]), u.call(c, ["lineTo", t + n, e + i - a]), u.call(c, ["arc", t + n - a, e + i - a, a, 0, Math.PI / 2, !1]), u.call(c, ["lineTo", t + s, e + i]), u.call(c, ["arc", t + s, e + i - s, s, Math.PI / 2, Math.PI, !1]), u.call(c, ["lineTo", t, e + r]), u.call(c, ["arc", t + r, e + r, r, Math.PI, 3 * Math.PI / 2, !1]), c
               },
               drawRoundRect: function (t, e, n, i, r) {
                  return this.drawRoundRectComplex(t, e, n, i, r, r, r, r)
               },
               drawCircle: function (t, e, n) {
                  return this._addAction(["arc", t + n, e + n, n, 0, 2 * Math.PI, 0])
               },
               drawEllipse: function (t, e, n, i) {
                  var r = this;
                  if (n == i) return r.drawCircle(t, e, n);
                  var o = r._addAction,
                     a = n / 2,
                     s = i / 2,
                     c = .5522847498307933,
                     u = c * a,
                     l = c * s;
                  return t += a, e += s, o.call(r, ["moveTo", t + a, e]), o.call(r, ["bezierCurveTo", t + a, e - l, t + u, e - s, t, e - s]), o.call(r, ["bezierCurveTo", t - u, e - s, t - a, e - l, t - a, e]), o.call(r, ["bezierCurveTo", t - a, e + l, t - u, e + s, t, e + s]), o.call(r, ["bezierCurveTo", t + u, e + s, t + a, e + l, t + a, e]), r
               },
               drawSVGPath: function (t) {
                  var e = this,
                     n = e._addAction,
                     i = t.split(/,| (?=[a-zA-Z])/);
                  n.call(e, ["beginPath"]);
                  for (var r = 0, o = i.length; r < o; r++) {
                     var a = i[r],
                        s = a[0].toUpperCase(),
                        c = a.substring(1).split(/,| /);
                     switch (0 == c[0].length && c.shift(), s) {
                        case "M":
                           n.call(e, ["moveTo", c[0], c[1]]);
                           break;
                        case "L":
                           n.call(e, ["lineTo", c[0], c[1]]);
                           break;
                        case "C":
                           n.call(e, ["bezierCurveTo", c[0], c[1], c[2], c[3], c[4], c[5]]);
                           break;
                        case "Z":
                           n.call(e, ["closePath"])
                     }
                  }
                  return e
               },
               _draw: function (t) {
                  var e, n = this,
                     i = n._actions,
                     r = i.length;
                  for (t.beginPath(), e = 0; e < r; e++) {
                     var o = i[e],
                        a = o[0],
                        s = o.length > 1 ? o.slice(1) : null;
                     "function" == typeof t[a] ? t[a].apply(t, s) : t[a] = o[1]
                  }
               },
               render: function (t, e) {
                  var n = this;
                  t.canvas;
                  "canvas" === t.renderType ? n._draw(t.context) : (n.cache(), t.draw(n))
               },
               clear: function () {
                  var t = this;
                  return t._actions.length = 0, t.lineWidth = 1, t.lineAlpha = 1, t.lineCap = null, t.lineJoin = null, t.miterLimit = 10, t.hasStroke = !1, t.strokeStyle = "0", t.hasFill = !1, t.fillStyle = "0", t.fillAlpha = 1, t.setCacheDirty(!0), t
               },
               _addAction: function (t) {
                  var e = this;
                  return e._actions.push(t), e
               }
            })
         }();
      e.Graphics = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.CacheMixin,
         o = n.create({
            Extends: i,
            Mixes: r,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("Text"), o.superclass.constructor.call(this, t), t.font || (this.font = "12px arial"), this._fontHeight = o.measureFontHeight(this.font)
            },
            text: null,
            color: "#000",
            textAlign: null,
            textVAlign: null,
            outline: !1,
            lineSpacing: 0,
            maxWidth: 200,
            font: null,
            textWidth: 0,
            textHeight: 0,
            setFont: function (t) {
               var e = this;
               return e.font !== t && (e.font = t, e._fontHeight = o.measureFontHeight(t)), e
            },
            render: function (t, e) {
               var n = this;
               t.canvas;
               if ("canvas" === t.renderType) n._draw(t.context);
               else if ("dom" === t.renderType) {
                  var i = n.drawable,
                     r = i.domElement,
                     o = r.style;
                  o.font = n.font, o.textAlign = n.textAlign, o.color = n.color, o.width = n.width + "px", o.height = n.height + "px", o.lineHeight = n._fontHeight + n.lineSpacing + "px", r.innerHTML = n.text, t.draw(this)
               } else n.cache(), t.draw(n)
            },
            _draw: function (t) {
               var e = this,
                  n = e.text.toString();
               if (n) {
                  t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = "top";
                  var i, r, o, a, s, c = n.split(/\r\n|\r|\n|<br(?:[ \/])*>/),
                     u = 0,
                     l = 0,
                     h = e._fontHeight + e.lineSpacing,
                     d = [];
                  for (i = 0, a = c.length; i < a; i++) if (r = c[i], o = t.measureText(r).width, o <= e.maxWidth) d.push({
                     text: r,
                     y: l
                  }), u < o && (u = o), l += h;
                  else {
                     var f, p, m, g = "",
                        v = 0;
                     for (p = 0, s = r.length; p < s; p++) m = r[p], f = t.measureText(g + m).width, f > e.maxWidth ? (d.push({
                        text: g,
                        y: l
                     }), u < v && (u = v), l += h, g = m) : (v = f, g += m), p == s - 1 && (d.push({
                        text: g,
                        y: l
                     }), g !== m && u < f && (u = f), l += h)
                  }
                  e.textWidth = u, e.textHeight = l, e.width || (e.width = u), e.height || (e.height = l);
                  var w = 0;
                  switch (e.textVAlign) {
                     case "middle":
                        w = e.height - e.textHeight >> 1;
                        break;
                     case "bottom":
                        w = e.height - e.textHeight
                  }
                  var _ = e.background;
                  _ && (t.fillStyle = _, t.fillRect(0, 0, e.width, e.height)), e.outline ? t.strokeStyle = e.color : t.fillStyle = e.color;
                  for (var i = 0; i < d.length; i++) {
                     var r = d[i];
                     e._drawTextLine(t, r.text, w + r.y)
                  }
               }
            },
            _drawTextLine: function (t, e, n) {
               var i = this,
                  r = 0,
                  o = i.width;
               switch (i.textAlign) {
                  case "center":
                     r = o >> 1;
                     break;
                  case "right":
                  case "end":
                     r = o
               }
               i.outline ? t.strokeText(e, r, n) : t.fillText(e, r, n)
            },
            Statics: {
               measureFontHeight: function (t) {
                  var n, i = document.documentElement,
                     r = e.createElement("div", {
                        style: {
                           font: t,
                           position: "absolute"
                        },
                        innerHTML: "M"
                     });
                  return i.appendChild(r), n = r.offsetHeight, i.removeChild(r), n
               }
            }
         });
      e.Text = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.Container,
         r = e.Bitmap,
         o = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("BitmapText"), o.superclass.constructor.call(this, t);
               var n = t.text + "";
               n && (this.text = "", this.setText(n)), this.pointerChildren = !1
            },
            glyphs: null,
            letterSpacing: 0,
            text: "",
            textAlign: "left",
            setText: function (t) {
               var e = this,
                  n = t.toString(),
                  i = n.length;
               if (e.text != n) {
                  e.text = n;
                  var r, o, a, s, c = 0,
                     u = 0,
                     l = 0;
                  for (r = 0; r < i; r++) o = n.charAt(r), a = e.glyphs[o], a && (l = c + (c > 0 ? e.letterSpacing : 0), e.children[r] ? (s = e.children[r], s.setImage(a.image, a.rect)) : (s = e._createBitmap(a), e.addChild(s)), s.x = l, c = l + a.rect[2], u = Math.max(u, a.rect[3]));
                  for (r = e.children.length - 1; r >= i; r--) e._releaseBitmap(e.children[r]), e.children[r].removeFromParent();
                  return e.width = c, e.height = u, this.setTextAlign(), e
               }
            },
            _createBitmap: function (t) {
               var e;
               return o._pool.length ? (e = o._pool.pop(), e.setImage(t.image, t.rect)) : e = new r({
                  image: t.image,
                  rect: t.rect
               }), e
            },
            _releaseBitmap: function (t) {
               o._pool.push(t)
            },
            setTextAlign: function (t) {
               switch (this.textAlign = t || this.textAlign, this.textAlign) {
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
            },
            hasGlyphs: function (t) {
               var e = this.glyphs;
               if (!e) return !1;
               var n, t = t.toString(),
                  i = t.length;
               for (n = 0; n < i; n++) if (!e[t.charAt(n)]) return !1;
               return !0
            },
            Statics: {
               _pool: [],
               createGlyphs: function (t, e, n, i) {
                  var r = t.toString();
                  n = n || r.length, i = i || 1;
                  for (var o = e.width / n, a = e.height / i, s = {}, c = 0, u = t.length; c < u; c++) charStr = r.charAt(c), s[charStr] = {
                     image: e,
                     rect: [o * (c % n), a * Math.floor(c / n), o, a]
                  };
                  return s
               }
            }
         });
      e.BitmapText = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.Drawable,
         o = n.create({
            Extends: i,
            constructor: function (t) {
               t = t || {}, this.id = this.id || t.id || e.getUid("Button"), o.superclass.constructor.call(this, t), this.drawable = new r(t), this.setState(o.UP)
            },
            upState: null,
            overState: null,
            downState: null,
            disabledState: null,
            state: null,
            enabled: !0,
            useHandCursor: !0,
            setEnabled: function (t) {
               return this.enabled != t && (t ? this.setState(o.UP) : this.setState(o.DISABLED)), this
            },
            setState: function (t) {
               if (this.state !== t) {
                  this.state = t, this.pointerEnabled = this.enabled = t !== o.DISABLED;
                  var n;
                  switch (t) {
                     case o.UP:
                        n = this.upState;
                        break;
                     case o.OVER:
                        n = this.overState;
                        break;
                     case o.DOWN:
                        n = this.downState;
                        break;
                     case o.DISABLED:
                        n = this.disabledState
                  }
                  n && (this.drawable.init(n), e.copy(this, n, !0))
               }
               return this
            },
            fire: function (t, e) {
               if (this.enabled) {
                  var n = "string" == typeof t ? t : t.type;
                  switch (n) {
                     case "mousedown":
                     case "touchstart":
                     case "touchmove":
                        this.setState(o.DOWN);
                        break;
                     case "mouseover":
                        this.setState(o.OVER);
                        break;
                     case "mouseup":
                        this.overState ? this.setState(o.OVER) : this.upState && this.setState(o.UP);
                        break;
                     case "touchend":
                     case "touchout":
                     case "mouseout":
                        this.setState(o.UP)
                  }
                  return o.superclass.fire.call(this, t, e)
               }
            },
            Statics: {
               UP: "up",
               OVER: "over",
               DOWN: "down",
               DISABLED: "disabled"
            }
         });
      e.Button = o
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = function () {
            function t(t) {
               var e = t.frames;
               if (!e) return null;
               var n, i = [];
               if (e instanceof Array) for (var r = 0, o = e.length; r < o; r++) n = e[r], i[r] = {
                  image: t.image,
                  rect: n
               };
               else for (var a = e.frameWidth, s = e.frameHeight, c = t.width / a | 0, u = t.height / s | 0, l = e.numFrames || c * u, r = 0; r < l; r++) i[r] = {
                  image: t.image,
                  rect: [r % c * a, (r / c | 0) * s, a, s]
               };
               return i
            }

            function e(t, e) {
               var n = t.sprites;
               if (!n) return null;
               var o, a, s, c = {};
               for (var u in n) {
                  if (o = n[u], r(o)) a = i(e[o]);
                  else if (o instanceof Array) {
                     a = [];
                     for (var l = 0, h = o.length; l < h; l++) {
                        var d, f = o[l];
                        r(f) ? s = i(e[f]) : (d = f.rect, r(d) && (d = e[f.rect]), s = i(d, f)), a[l] = s
                     }
                  } else {
                     a = [];
                     for (var l = o.from; l <= o.to; l++) a[l - o.from] = i(e[l], o[l])
                  }
                  c[u] = a
               }
               return c
            }

            function i(t, e) {
               var n = {
                  image: t.image,
                  rect: t.rect
               };
               return e && (n.name = e.name || null, n.duration = e.duration || 0, n.stop = !!e.stop, n.next = e.next || null), n
            }

            function r(t) {
               return "number" == typeof t
            }
            return n.create({
               constructor: function (n) {
                  this._frames = t(n), this._sprites = e(n, this._frames)
               },
               _frames: null,
               _sprites: null,
               getFrame: function (t) {
                  var e = this._frames;
                  return e && e[t]
               },
               getSprite: function (t) {
                  var e = this._sprites;
                  return e && e[t]
               },
               Statics: {
                  createSpriteFrames: function (t, e, n, i, r, o, a) {
                     if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var e = [], s = 0, c = t.length; s < c; s++) e = e.concat(this.createSpriteFrames.apply(this, t[s]));
                        return e
                     }
                     if ("string" == typeof e) {
                        var u = e.split(",");
                        e = [];
                        for (var l = 0, h = u.length; l < h; l++) {
                           var d = u[l].split("-");
                           if (1 == d.length) e.push(parseInt(d[0]));
                           else for (var s = parseInt(d[0]), c = parseInt(d[1]); s <= c; s++) e.push(s)
                        }
                     }
                     for (var f = Math.floor(n.width / i), s = 0; s < e.length; s++) {
                        var p = e[s];
                        e[s] = {
                           rect: [i * (p % f), r * Math.floor(p / f), i, r],
                           image: n,
                           duration: a
                        }
                     }
                     return e[0].name = t, o ? e[e.length - 1].next = t : e[e.length - 1].stop = !0, e
                  }
               }
            })
         }();
      e.TextureAtlas = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            constructor: function (t) {
               this._targetFPS = t || 30, this._interval = 1e3 / this._targetFPS, this._tickers = []
            },
            _paused: !1,
            _targetFPS: 0,
            _interval: 0,
            _intervalId: null,
            _tickers: null,
            _lastTime: 0,
            _tickCount: 0,
            _tickTime: 0,
            _measuredFPS: 0,
            start: function (n) {
               if (!this._intervalId) {
                  this._lastTime = +new Date;
                  var i = this,
                     r = this._interval,
                     o = t.requestAnimationFrame || t[e.browser.jsVendor + "RequestAnimationFrame"];
                  if (n && o) var a = function () {
                     i._tick()
                  },
                     s = function () {
                        i._intervalId = setTimeout(s, r), o(a)
                     };
                  else s = function () {
                     i._intervalId = setTimeout(s, r), i._tick()
                  };
                  s()
               }
            },
            stop: function () {
               clearTimeout(this._intervalId), this._intervalId = null, this._lastTime = 0
            },
            pause: function () {
               this._paused = !0
            },
            resume: function () {
               this._paused = !1
            },
            _tick: function () {
               if (!this._paused) {
                  var t = +new Date,
                     e = t - this._lastTime,
                     n = this._tickers;
                  ++this._tickCount >= this._targetFPS ? (this._measuredFPS = 1e3 / (this._tickTime / this._tickCount) + .5 >> 0, this._tickCount = 0, this._tickTime = 0) : this._tickTime += t - this._lastTime, this._lastTime = t;
                  for (var i = n.slice(0), r = 0, o = i.length; r < o; r++) i[r].tick(e)
               }
            },
            getMeasuredFPS: function () {
               return this._measuredFPS
            },
            addTick: function (t) {
               if (!t || "function" != typeof t.tick) throw new Error("Ticker: The tick object must implement the tick method.");
               this._tickers.push(t)
            },
            removeTick: function (t) {
               var e = this._tickers,
                  n = e.indexOf(t);
               n >= 0 && e.splice(n, 1)
            },
            nextTick: function (t) {
               var e = this,
                  n = {
                     tick: function (i) {
                        e.removeTick(n), t()
                     }
                  };
               return e.addTick(n), n
            },
            timeout: function (t, e) {
               var n = this,
                  i = (new Date).getTime() + e,
                  r = {
                     tick: function () {
                        var e = (new Date).getTime(),
                           o = e - i;
                        o >= 0 && (n.removeTick(r), t())
                     }
                  };
               return n.addTick(r), r
            },
            interval: function (t, e) {
               var n = this,
                  i = (new Date).getTime() + e,
                  r = {
                     tick: function () {
                        var n = (new Date).getTime(),
                           r = n - i;
                        r >= 0 && (r < e && (n -= r), i = n + e, t())
                     }
                  };
               return n.addTick(r), r
            }
         });
      e.Ticker = i
   }(window), function (t) {
      var e = t.Hilo,
         n = Array.prototype,
         i = n.slice;
      n.indexOf = n.indexOf ||
         function (t, e) {
            e = e || 0;
            var n, i = this.length;
            if (0 == i || e >= i) return -1;
            for (e < 0 && (e = i + e), n = e; n < i; n++) if (this[n] === t) return n;
            return -1
         };
      var r = Function.prototype;
      r.bind = r.bind ||
         function (t) {
            function e() {
               var o = r.concat(i.call(arguments));
               return n.apply(this instanceof e ? this : t, o)
            }
            var n = this,
               r = i.call(arguments, 1),
               o = function () { };
            return o.prototype = n.prototype, e.prototype = new o, e
         }, e.undefined = void 0
   }(window), function (t) {
      var e = t.Hilo,
         n = (e.Class, {
            startDrag: function (t) {
               function n(t) {
                  t.stopPropagation(), o(t), c.off(e.event.POINTER_START, n), c.fire("dragStart", u), c.__dragX = c.x - u.x, c.__dragY = c.y - u.y, s || (s = this.getStage()), s.on(e.event.POINTER_MOVE, r), document.addEventListener(e.event.POINTER_END, i)
               }

               function i(t) {
                  document.removeEventListener(e.event.POINTER_END, i), s && s.off(e.event.POINTER_MOVE, r), c.fire("dragEnd", u), c.on(e.event.POINTER_START, n)
               }

               function r(t) {
                  o(t), c.fire("dragMove", u);
                  var e = u.x + c.__dragX,
                     n = u.y + c.__dragY;
                  c.x = Math.max(l, Math.min(d, e)), c.y = Math.max(h, Math.min(f, n))
               }

               function o(t) {
                  u.preX = u.x, u.preY = u.y, u.x = t.stageX, u.y = t.stageY
               }

               function a() {
                  document.removeEventListener(e.event.POINTER_END, i), s && s.off(e.event.POINTER_MOVE, r), c.off(e.event.POINTER_START, n)
               }
               var s, c = this,
                  t = t || [-(1 / 0), -(1 / 0), 1 / 0, 1 / 0],
                  u = {
                     x: 0,
                     y: 0,
                     preX: 0,
                     preY: 0
                  },
                  l = t[0],
                  h = t[1],
                  d = t[2] == 1 / 0 ? 1 / 0 : l + t[2],
                  f = t[3] == 1 / 0 ? 1 / 0 : h + t[3];
               c.on(e.event.POINTER_START, n), c.stopDrag = a
            },
            stopDrag: function () { }
         });
      e.drag = n
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = function () {
            function t() {
               return +new Date
            }
            return n.create({
               constructor: function (t, e, n, i) {
                  var r = this;
                  r.target = t, r._startTime = 0, r._seekTime = 0, r._pausedTime = 0, r._pausedStartTime = 0, r._reverseFlag = 1, r._repeatCount = 0, 3 == arguments.length && (i = n, n = e, e = null);
                  for (var o in i) r[o] = i[o];
                  r.setProps(e, n), !i.duration && i.time && (r.duration = i.time || 0, r.time = 0)
               },
               target: null,
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
               setProps: function (t, e) {
                  var n = this,
                     i = n.target,
                     r = t || e,
                     o = n._fromProps = {},
                     a = n._toProps = {};
                  t = t || i, e = e || i;
                  for (var s in r) a[s] = e[s] || 0, i[s] = o[s] = t[s] || 0;
                  return n
               },
               start: function () {
                  var e = this;
                  return e._startTime = t() + e.delay, e._seekTime = 0, e._pausedTime = 0, e.paused = !1, i.add(e), e
               },
               stop: function () {
                  return i.remove(this), this
               },
               pause: function () {
                  var e = this;
                  return e.paused = !0, e._pausedStartTime = t(), e
               },
               resume: function () {
                  var e = this;
                  return e.paused = !1, e._pausedStartTime && (e._pausedTime += t() - e._pausedStartTime), e._pausedStartTime = 0, e
               },
               seek: function (e, n) {
                  var r = this,
                     o = t();
                  return r._startTime = o, r._seekTime = e, r._pausedTime = 0, void 0 !== n && (r.paused = n), r._update(o, !0), i.add(r), r
               },
               link: function (t) {
                  var e = this,
                     n = t.delay,
                     r = e._startTime;
                  if ("string" == typeof n) {
                     var o = 0 == n.indexOf("+"),
                        a = 0 == n.indexOf("-");
                     n = o || a ? Number(n.substr(1)) * (o ? 1 : -1) : Number(n)
                  }
                  return t.delay = n, t._startTime = o || a ? r + e.duration + n : r + n, e._next = t, i.remove(t), e
               },
               _render: function (t) {
                  var e, n = this,
                     i = n.target,
                     r = n._fromProps;
                  for (e in r) i[e] = r[e] + (n._toProps[e] - r[e]) * t
               },
               _update: function (e, n) {
                  var r = this;
                  if (!r.paused || n) {
                     var o = e - r._startTime - r._pausedTime + r._seekTime;
                     if (!(o < 0)) {
                        var a, s = o / r.duration,
                           c = !1;
                        s = s <= 0 ? 0 : s >= 1 ? 1 : r.ease ? r.ease(s) : s, r.reverse && (r._reverseFlag < 0 && (s = 1 - s), s < 1e-7 && (r.repeat > 0 && r._repeatCount++ >= r.repeat || 0 == r.repeat && !r.loop ? c = !0 : (r._startTime = t(), r._pausedTime = 0, r._reverseFlag *= -1))), 0 == r.time && (a = r.onStart) && a.call(r, r), r.time = o, r._render(s), (a = r.onUpdate) && a.call(r, s, r), s >= 1 && (r.reverse ? (r._startTime = t(), r._pausedTime = 0, r._reverseFlag *= -1) : r.loop || r.repeat > 0 && r._repeatCount++ < r.repeat ? (r._startTime = t() + r.repeatDelay, r._pausedTime = 0) : c = !0);
                        var u = r._next;
                        if (u && u.time <= 0) {
                           var l = u._startTime;
                           l > 0 && l <= e ? (u._render(s), u.time = o, i.add(u)) : c && (l < 0 || l > e) && u.start()
                        }
                        return c ? ((a = r.onComplete) && a.call(r, r), !0) : void 0
                     }
                  }
               },
               Statics: {
                  _tweens: [],
                  tick: function () {
                     var e, n, r = i._tweens,
                        o = r.length;
                     for (n = 0; n < o; n++) e = r[n], e && e._update(t()) && (r.splice(n, 1), n--);
                     return i
                  },
                  add: function (t) {
                     var e = i._tweens;
                     return e.indexOf(t) == -1 && e.push(t), i
                  },
                  remove: function (t) {
                     if (t instanceof Array) {
                        for (var e = 0, n = t.length; e < n; e++) i.remove(t[e]);
                        return i
                     }
                     var e, r = i._tweens;
                     if (t instanceof i) e = r.indexOf(t), e > -1 && r.splice(e, 1);
                     else for (e = 0; e < r.length; e++) r[e].target === t && (r.splice(e, 1), e--);
                     return i
                  },
                  removeAll: function () {
                     return i._tweens.length = 0, i
                  },
                  fromTo: function (t, e, n, r) {
                     var o = t instanceof Array;
                     t = o ? t : [t];
                     var a, s, c = r.stagger,
                        u = [];
                     for (s = 0; s < t.length; s++) a = new i(t[s], e, n, r), c && (a.delay = (r.delay || 0) + (s * c || 0)), a.start(), u.push(a);
                     return o ? u : a
                  },
                  to: function (t, e, n) {
                     return i.fromTo(t, null, e, n)
                  },
                  from: function (t, e, n) {
                     return i.fromTo(t, e, null, n)
                  }
               }
            })
         }();
      e.Tween = i
   }(window), function (t) {
      var e = t.Hilo,
         n = function () {
            function t(t, e, n, i, r) {
               return t = t || {}, e && (t.EaseIn = e), n && (t.EaseOut = n), i && (t.EaseInOut = i), r && (t.EaseNone = r), t
            }
            var e = t(null, null, null, null, function (t) {
               return t
            }),
               n = t(null, function (t) {
                  return t * t
               }, function (t) {
                  return -t * (t - 2)
               }, function (t) {
                  return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
               }),
               i = t(null, function (t) {
                  return t * t * t
               }, function (t) {
                  return --t * t * t + 1
               }, function (t) {
                  return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
               }),
               r = t(null, function (t) {
                  return t * t * t * t
               }, function (t) {
                  return -(--t * t * t * t - 1)
               }, function (t) {
                  return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
               }),
               o = t(null, function (t) {
                  return t * t * t * t * t
               }, function (t) {
                  return (t -= 1) * t * t * t * t + 1
               }, function (t) {
                  return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
               }),
               a = Math,
               s = a.PI,
               c = .5 * s,
               u = a.sin,
               l = a.cos,
               h = a.pow,
               d = a.sqrt,
               f = t(null, function (t) {
                  return -l(t * c) + 1
               }, function (t) {
                  return u(t * c)
               }, function (t) {
                  return -.5 * (l(s * t) - 1)
               }),
               p = t(null, function (t) {
                  return 0 == t ? 0 : h(2, 10 * (t - 1))
               }, function (t) {
                  return 1 == t ? 1 : -h(2, -10 * t) + 1
               }, function (t) {
                  return 0 == t || 1 == t ? t : (t *= 2) < 1 ? .5 * h(2, 10 * (t - 1)) : .5 * (-h(2, -10 * (t - 1)) + 2)
               }),
               m = t(null, function (t) {
                  return -(d(1 - t * t) - 1)
               }, function (t) {
                  return d(1 - --t * t)
               }, function (t) {
                  return (t /= .5) < 1 ? -.5 * (d(1 - t * t) - 1) : .5 * (d(1 - (t -= 2) * t) + 1)
               }),
               g = t({
                  a: 1,
                  p: .4,
                  s: .1,
                  config: function (t, e) {
                     g.a = t, g.p = e, g.s = e / (2 * s) * Math.asin(1 / t) || 0
                  }
               }, function (t) {
                  return -(g.a * h(2, 10 * (t -= 1)) * u((t - g.s) * (2 * s) / g.p))
               }, function (t) {
                  return g.a * h(2, -10 * t) * u((t - g.s) * (2 * s) / g.p) + 1
               }, function (t) {
                  return (t *= 2) < 1 ? -.5 * (g.a * h(2, 10 * (t -= 1)) * u((t - g.s) * (2 * s) / g.p)) : g.a * h(2, -10 * (t -= 1)) * u((t - g.s) * (2 * s) / g.p) * .5 + 1
               }),
               v = t({
                  o: 1.70158,
                  s: 2.59491,
                  config: function (t) {
                     v.o = t, v.s = 1.525 * t
                  }
               }, function (t) {
                  return t * t * ((v.o + 1) * t - v.o)
               }, function (t) {
                  return (t -= 1) * t * ((v.o + 1) * t + v.o) + 1
               }, function (t) {
                  return (t *= 2) < 1 ? .5 * (t * t * ((v.s + 1) * t - v.s)) : .5 * ((t -= 2) * t * ((v.s + 1) * t + v.s) + 2)
               }),
               w = t(null, function (t) {
                  return 1 - w.EaseOut(1 - t)
               }, function (t) {
                  return (t /= 1) < .36364 ? 7.5625 * t * t : t < .72727 ? 7.5625 * (t -= .54545) * t + .75 : t < .90909 ? 7.5625 * (t -= .81818) * t + .9375 : 7.5625 * (t -= .95455) * t + .984375
               }, function (t) {
                  return t < .5 ? .5 * w.EaseIn(2 * t) : .5 * w.EaseOut(2 * t - 1) + .5
               });
            return {
               Linear: e,
               Quad: n,
               Cubic: i,
               Quart: r,
               Quint: o,
               Sine: f,
               Expo: p,
               Circ: m,
               Elastic: g,
               Back: v,
               Bounce: w
            }
         }();
      e.Ease = n
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            load: function (t) {
               var e = this,
                  n = new Image;
               t.crossOrigin && (n.crossOrigin = t.crossOrigin), n.onload = function () {
                  e.onLoad(n)
               }, n.onerror = n.onabort = e.onError.bind(n), n.src = t.src + (t.noCache ? (t.src.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date : "")
            },
            onLoad: function (e) {
               e = e || t.event;
               var n = e;
               return n.onload = n.onerror = n.onabort = null, n
            },
            onError: function (t) {
               var e = t.target;
               return e.onload = e.onerror = e.onabort = null, t
            }
         });
      e.ImageLoader = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            load: function (e) {
               var n = this,
                  r = e.src,
                  o = "jsonp" == e.type;
               if (o) {
                  var a = e.callbackName || "callback",
                     s = e.callback || "jsonp" + ++i._count,
                     c = t;
                  c[s] || (c[s] = function (t) {
                     delete c[s]
                  })
               }
               o && (r += (r.indexOf("?") == -1 ? "?" : "&") + a + "=" + s), e.noCache && (r += (r.indexOf("?") == -1 ? "?" : "&") + "t=" + +new Date);
               var u = document.createElement("script");
               u.type = "text/javascript", u.async = !0, u.onload = n.onLoad.bind(n), u.onerror = n.onError.bind(n), u.src = r, e.id && (u.id = e.id), document.getElementsByTagName("head")[0].appendChild(u)
            },
            onLoad: function (t) {
               var e = t.target;
               return e.onload = e.onerror = null, e
            },
            onError: function (t) {
               var e = t.target;
               return e.onload = e.onerror = null, t
            },
            Statics: {
               _count: 0
            }
         });
      e.ScriptLoader = i
   }(window), function (t) {
      function e(t) {
         var e, n, i = /\/?[^\/]+\.(\w+)(\?\S+)?$/i;
         return (e = t.match(i)) && (n = e[1].toLowerCase()), n || null
      }
      var n = t.Hilo,
         i = n.Class,
         r = n.EventMixin,
         o = n.ImageLoader,
         a = n.ScriptLoader,
         s = i.create({
            Mixes: r,
            constructor: function (t) {
               this._source = [], this.add(t)
            },
            maxConnections: 2,
            _source: null,
            _loaded: 0,
            _connections: 0,
            _currentIndex: -1,
            add: function (t) {
               var e = this;
               return t && (t = t instanceof Array ? t : [t], e._source = e._source.concat(t)), e
            },
            get: function (t) {
               if (t) for (var e = this._source, n = 0; n < e.length; n++) {
                  var i = e[n];
                  if (i.id === t || i.src === t) return i
               }
               return null
            },
            getContent: function (t) {
               var e = this.get(t);
               return e && e.content
            },
            start: function () {
               var t = this;
               return t._loadNext(), t
            },
            _loadNext: function () {
               var t = this,
                  e = t._source,
                  n = e.length;
               if (t._loaded >= n) return void t.fire("complete");
               if (t._currentIndex < n - 1 && t._connections < t.maxConnections) {
                  var i = ++t._currentIndex,
                     r = e[i],
                     o = t._getLoader(r);
                  if (o) {
                     var a = o.onLoad,
                        s = o.onError;
                     o.onLoad = function (e) {
                        o.onLoad = a, o.onError = s;
                        var n = a && a.call(o, e) || e.target;
                        t._onItemLoad(i, n)
                     }, o.onError = function (e) {
                        o.onLoad = a, o.onError = s, s && s.call(o, e), t._onItemError(i, e)
                     }, t._connections++
                  }
                  t._loadNext(), o && o.load(r)
               }
            },
            _getLoader: function (t) {
               var n = t.loader;
               if (n) return n;
               var i = t.type || e(t.src);
               switch (i) {
                  case "png":
                  case "jpg":
                  case "jpeg":
                  case "gif":
                     n = new o;
                     break;
                  case "js":
                  case "jsonp":
                     n = new a
               }
               return n
            },
            _onItemLoad: function (t, e) {
               var n = this,
                  i = n._source[t];
               i.loaded = !0, i.content = e, n._connections-- , n._loaded++ , n.fire("load", i), n._loadNext()
            },
            _onItemError: function (t, e) {
               var n = this,
                  i = n._source[t];
               i.error = e, n._connections-- , n._loaded++ , n.fire("error", i), n._loadNext()
            },
            getSize: function (t) {
               for (var e = 0, n = this._source, i = 0; i < n.length; i++) {
                  var r = n[i];
                  e += (t ? r.loaded && r.size : r.size) || 0
               }
               return e
            },
            getLoaded: function () {
               return this._loaded
            },
            getTotal: function () {
               return this._source.length
            }
         });
      n.LoadQueue = s
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.EventMixin,
         r = n.create({
            Mixes: i,
            constructor: function (t) {
               e.copy(this, t, !0), this._onAudioEvent = this._onAudioEvent.bind(this)
            },
            src: null,
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
                  var t = this._element = new Audio;
                  t.addEventListener("canplaythrough", this._onAudioEvent, !1), t.addEventListener("ended", this._onAudioEvent, !1), t.addEventListener("error", this._onAudioEvent, !1), t.src = this.src, t.volume = this.volume, t.load()
               } catch (e) {
                  var t = this._element = {};
                  t.play = t.pause = function () { }
               }
               return this
            },
            _onAudioEvent: function (t) {
               var e = t.type;
               switch (e) {
                  case "canplaythrough":
                     t.target.removeEventListener(e, this._onAudioEvent), this.loaded = !0, this.duration = this._element.duration, this.fire("load"), this.autoPlay && this._doPlay();
                     break;
                  case "ended":
                     this.playing = !1, this.fire("end"), this.loop && this._doPlay();
                     break;
                  case "error":
                     this.fire("error")
               }
            },
            _doPlay: function () {
               this.playing || (this._element.volume = this.muted ? 0 : this.volume, this._element.play(), this.playing = !0)
            },
            play: function () {
               return this.playing && this.stop(), this._element ? this.loaded && this._doPlay() : (this.autoPlay = !0, this.load()), this
            },
            pause: function () {
               return this.playing && (this._element.pause(), this.playing = !1), this
            },
            resume: function () {
               return this.playing || this._doPlay(), this
            },
            stop: function () {
               return this.playing && (this._element.pause(), this._element.currentTime = 0, this.playing = !1), this
            },
            setVolume: function (t) {
               return this.volume != t && (this.volume = t, this._element.volume = t), this
            },
            setMute: function (t) {
               return this.muted != t && (this.muted = t, this._element.volume = t ? 0 : this.volume), this
            },
            Statics: {
               isSupported: null !== t.Audio
            }
         });
      e.HTMLAudio = r
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.EventMixin,
         r = function () {
            var o = t.AudioContext || t.webkitAudioContext,
               a = o ? new o : null;
            return n.create({
               Mixes: i,
               constructor: function (t) {
                  e.copy(this, t, !0), this._init()
               },
               src: null,
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
                  this._context = a, this._gainNode = a.createGain ? a.createGain() : a.createGainNode(), this._gainNode.connect(a.destination), this._onAudioEvent = this._onAudioEvent.bind(this), this._onDecodeComplete = this._onDecodeComplete.bind(this), this._onDecodeError = this._onDecodeError.bind(this)
               },
               load: function () {
                  if (!this._buffer) {
                     var t = r._bufferCache[this.src];
                     if (t) this._onDecodeComplete(t);
                     else {
                        var e = new XMLHttpRequest;
                        e.src = this.src, e.open("GET", this.src, !0), e.responseType = "arraybuffer", e.onload = this._onAudioEvent, e.onprogress = this._onAudioEvent, e.onerror = this._onAudioEvent, e.send()
                     }
                     this._buffer = !0
                  }
                  return this
               },
               _onAudioEvent: function (t) {
                  var e = t.type;
                  switch (e) {
                     case "load":
                        var n = t.target;
                        n.onload = n.onprogress = n.onerror = null, this._context.decodeAudioData(n.response, this._onDecodeComplete, this._onDecodeError), n = null;
                        break;
                     case "ended":
                        this.playing = !1, this.fire("end"), this.loop && this._doPlay();
                        break;
                     case "progress":
                        this.fire(t);
                        break;
                     case "error":
                        this.fire(t)
                  }
               },
               _onDecodeComplete: function (t) {
                  r._bufferCache[this.src] || (r._bufferCache[this.src] = t), this._buffer = t, this.loaded = !0, this.duration = t.duration, this.fire("load"), this.autoPlay && this._doPlay()
               },
               _onDecodeError: function () {
                  this.fire("error")
               },
               _doPlay: function () {
                  this._clearAudioNode();
                  var t = this._context.createBufferSource();
                  t.start || (t.start = t.noteOn, t.stop = t.noteOff), t.buffer = this._buffer, t.onended = this._onAudioEvent, this._gainNode.gain.value = this.muted ? 0 : this.volume, t.connect(this._gainNode), t.start(0, this._offset), this._audioNode = t, this._startTime = this._context.currentTime, this.playing = !0
               },
               _clearAudioNode: function () {
                  var t = this._audioNode;
                  t && (t.onended = null, t.disconnect(0), this._audioNode = null)
               },
               play: function () {
                  return this.playing && this.stop(), this.loaded ? this._doPlay() : this._buffer || (this.autoPlay = !0, this.load()), this
               },
               pause: function () {
                  return this.playing && (this._audioNode.stop(0), this._offset += this._context.currentTime - this._startTime, this.playing = !1), this
               },
               resume: function () {
                  return this.playing || this._doPlay(), this
               },
               stop: function () {
                  return this.playing && (this._audioNode.stop(0), this._audioNode.disconnect(), this._offset = 0, this.playing = !1), this
               },
               setVolume: function (t) {
                  return this.volume != t && (this.volume = t, this._gainNode.gain.value = t), this
               },
               setMute: function (t) {
                  return this.muted != t && (this.muted = t, this._gainNode.gain.value = t ? 0 : this.volume), this
               },
               Statics: {
                  isSupported: null != o,
                  enabled: !1,
                  enable: function () {
                     if (!this.enabled && a) {
                        var t = a.createBufferSource();
                        return t.buffer = a.createBuffer(1, 1, 22050), t.connect(a.destination), t.start ? t.start(0, 0, 0) : t.noteOn(0, 0, 0), this.enabled = !0, !0
                     }
                     return this.enabled
                  },
                  _bufferCache: {},
                  clearBufferCache: function (t) {
                     t ? this._bufferCache[t] = null : this._bufferCache = {}
                  }
               }
            })
         }();
      e.WebAudio = r
   }(window), function (t) {
      var e = t.Hilo,
         n = e.HTMLAudio,
         i = e.WebAudio,
         r = {
            _audios: {},
            enableAudio: function () {
               i.isSupported && i.enable()
            },
            getAudio: function (t) {
               t = this._normalizeSource(t);
               var e = this._audios[t.src];
               return e || (i.isSupported ? e = new i(t) : n.isSupported && (e = new n(t)), this._audios[t.src] = e), e
            },
            removeAudio: function (t) {
               var e = "string" == typeof t ? t : t.src,
                  n = this._audios[e];
               n && (n.stop(), n.off(), this._audios[e] = null, delete this._audios[e])
            },
            _normalizeSource: function (t) {
               var n = {};
               return "string" == typeof t ? n = {
                  src: t
               } : e.copy(n, t), n
            }
         };
      e.WebSound = r
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = n.create({
            constructor: function (t) {
               this.width = 0, this.height = 0, this.target = null, this.deadzone = null, this.bounds = null, this.scroll = {
                  x: 0,
                  y: 0
               }, e.copy(this, t)
            },
            tick: function (t) {
               var e = this.target,
                  n = this.scroll,
                  i = this.bounds,
                  r = this.deadzone;
               if (e) {
                  var o, a;
                  r ? (o = Math.min(Math.max(e.x - n.x, r[0]), r[0] + r[2]), a = Math.min(Math.max(e.y - n.y, r[1]), r[1] + r[3])) : (o = .5 * this.width, a = .5 * this.height), n.x = e.x - o, n.y = e.y - a, i && (n.x = Math.min(Math.max(n.x, i[0]), i[0] + i[2]), n.y = Math.min(Math.max(n.y, i[1]), i[1] + i[3]))
               } else n.x = 0, n.y = 0
            },
            follow: function (t, e) {
               this.target = t, void 0 !== e && (this.deadzone = e), this.tick()
            }
         });
      e.Camera = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = function () {
            function t(t, e, n, i, r) {
               return {
                  x: t,
                  y: e * i - n * r,
                  z: e * r + n * i
               }
            }

            function i(t, e, n, i, r) {
               return {
                  x: t * i - n * r,
                  y: e,
                  z: t * r + n * i
               }
            }

            function r(t, e, n, i, r) {
               return {
                  x: t * i - e * r,
                  y: t * r + e * i,
                  z: n
               }
            }
            var o = Math.PI / 180,
               a = n.create({
                  constructor: function (t) {
                     t.x = t.x || 0, t.y = t.y || 0, t.z = t.z || 0, t.rotationX = t.rotationX || 0, t.rotationY = t.rotationY || 0, t.rotationZ = t.rotationZ || 0, e.copy(this, t)
                  },
                  translate: function (t, e, n) {
                     this.tx = t, this.ty = e, this.tz = n
                  },
                  rotateX: function (t) {
                     this.rotationX = t
                  },
                  rotateY: function (t) {
                     this.rotationY = t
                  },
                  rotateZ: function (t) {
                     this.rotationZ = t
                  },
                  project: function (e, n) {
                     var a = this.rotationX * o,
                        s = this.rotationY * o,
                        c = this.rotationZ * o,
                        u = Math.cos(a),
                        l = Math.sin(a),
                        h = Math.cos(s),
                        d = Math.sin(s),
                        f = Math.cos(c),
                        p = Math.sin(c),
                        m = e.x - this.x,
                        g = e.y - this.y,
                        v = e.z - this.z,
                        w = r(m, g, v, f, p);
                     w = i(w.x, w.y, w.z, h, d), w = t(w.x, w.y, w.z, u, l), this.tx && (w.x -= this.tx), this.ty && (w.y -= this.ty), this.tz && (w.z -= this.tz);
                     var _ = this.fv / (this.fv + w.z),
                        y = w.x * _,
                        x = -w.y * _,
                        T = {
                           x: y + this.fx,
                           y: x + this.fy,
                           z: -w.z,
                           scale: _
                        };
                     return n && (n.x = T.x, n.y = T.y, n.z = T.z, n.scaleX = T.scale, n.scaleY = T.scale), T
                  },
                  sortZ: function () {
                     this.stage.children.sort(function (t, e) {
                        return t.z > e.z
                     })
                  },
                  tick: function () {
                     this.sortZ()
                  }
               });
            return a
         }();
      e.Camera3d = i
   }(window), function (t) {
      var e = t.Hilo,
         n = e.Class,
         i = e.View,
         r = e.Container,
         o = (e.Bitmap, e.Drawable),
         a = function () {
            function t(t, e) {
               return e ? t + 2 * (Math.random() - .5) * e : t
            }
            for (var a = ["x", "y", "vx", "vy", "ax", "ay", "rotation", "rotationV", "scale", "scaleV", "alpha", "alphaV", "life"], s = [], c = 0, u = a.length; c < u; c++) {
               var l = a[c];
               s.push(l), s.push(l + "Var")
            }
            var h = {
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
               d = [],
               f = n.create({
                  Extends: r,
                  constructor: function m(t) {
                     this.id = this.id || t.id || e.getUid("ParticleSystem"), this.emitterX = 0, this.emitterY = 0, this.gx = 0, this.gy = 0, this.totalTime = 1 / 0, this.emitNum = 10, this.emitNumVar = 0, this.emitTime = .2, this.emitTimeVar = 0, this.particle = {}, m.superclass.constructor.call(this, t), this.reset(t)
                  },
                  Statics: {
                     PROPS: s,
                     PROPS_DEFAULT: h,
                     diedParticles: d
                  },
                  reset: function (t) {
                     e.copy(this, t), this.particle.system = this, this.totalTime <= 0 && (this.totalTime = 1 / 0)
                  },
                  onUpdate: function (e) {
                     e *= .001, this._isRun && (this._totalRunTime += e, this._currentRunTime += e, this._currentRunTime >= this._emitTime && (this._currentRunTime = 0, this._emitTime = t(this.emitTime, this.emitTimeVar), this._emit()), this._totalRunTime >= this.totalTime && this.stop())
                  },
                  _emit: function () {
                     for (var e = t(this.emitNum, this.emitNumVar) >> 0, n = 0; n < e; n++) this.addChild(p.create(this.particle))
                  },
                  start: function () {
                     this.stop(!0), this._currentRunTime = 0, this._totalRunTime = 0, this._isRun = !0, this._emitTime = t(this.emitTime, this.emitTimeVar)
                  },
                  stop: function (t) {
                     if (this._isRun = !1, t) for (var e = this.children.length - 1; e >= 0; e--) this.children[e].destroy()
                  }
               }),
               p = n.create({
                  Extends: i,
                  constructor: function g(t) {
                     this.id = this.id || t.id || e.getUid("Particle"), g.superclass.constructor.call(this, t), this.init(t)
                  },
                  onUpdate: function (t) {
                     if (t *= .001, this._died) return !1;
                     var e = this.ax + this.system.gx,
                        n = this.ay + this.system.gy;
                     return this.vx += e * t, this.vy += n * t, this.x += this.vx * t, this.y += this.vy * t, this.rotation += this.rotationV, this._time > .1 && (this.alpha += this.alphaV), this.scale += this.scaleV, this.scaleX = this.scaleY = this.scale, this._time += t, this._time >= this.life || this.alpha <= 0 ? (this.destroy(), !1) : void 0
                  },
                  setImage: function (t, e) {
                     this.drawable = this.drawable || new o;
                     var e = e || [0, 0, t.width, t.height];
                     this.width = e[2], this.height = e[3], this.drawable.rect = e, this.drawable.image = t
                  },
                  destroy: function () {
                     this._died = !0, this.alpha = 0, this.removeFromParent(), d.push(this)
                  },
                  init: function (e) {
                     this.system = e.system, this._died = !1, this._time = 0, this.alpha = 1;
                     for (var n = 0, i = s.length; n < i; n++) {
                        var r = s[n],
                           o = void 0 === e[r] ? h[r] : e[r];
                        this[r] = t(o, e[r + "Var"])
                     }
                     if (this.x += this.system.emitterX, this.y += this.system.emitterY, e.image) {
                        var a = e.frame;
                        a && a[0].length && (a = a[Math.random() * a.length >> 0]), this.setImage(e.image, a), void 0 !== e.pivotX && (this.pivotX = e.pivotX * a[2]), void 0 !== e.pivotY && (this.pivotY = e.pivotY * a[3])
                     }
                  },
                  Statics: {
                     create: function (t) {
                        if (d.length > 0) {
                           var e = d.pop();
                           return e.init(t), e
                        }
                        return new p(t)
                     }
                  }
               });
            return f
         }();
      e.ParticleSystem = a
   }(window);
var TWEEN = TWEEN ||
   function () {
      var t = [];
      return {
         getAll: function () {
            return t
         },
         removeAll: function () {
            t = []
         },
         add: function (e) {
            t.push(e)
         },
         remove: function (e) {
            var n = t.indexOf(e);
            n !== -1 && t.splice(n, 1)
         },
         update: function (e, n) {
            if (0 === t.length) return !1;
            var i = 0;
            for (e = void 0 !== e ? e : TWEEN.now(); i < t.length;) t[i].update(e) || n ? i++ : t.splice(i, 1);
            return !0
         }
      }
   }();
(function () {
   void 0 === this.window && void 0 !== this.process ? TWEEN.now = function () {
      var t = process.hrtime();
      return 1e3 * t[0] + t[1] / 1e6
   } : void 0 !== this.window && void 0 !== window.performance && void 0 !== window.performance.now ? TWEEN.now = window.performance.now.bind(window.performance) : void 0 !== Date.now ? TWEEN.now = Date.now : TWEEN.now = function () {
      return (new Date).getTime()
   }
}).bind(this)(), TWEEN.Tween = function (t) {
   var e, n = t,
      i = {},
      r = {},
      o = {},
      a = 1e3,
      s = 0,
      c = !1,
      u = !1,
      l = !1,
      h = 0,
      d = null,
      f = TWEEN.Easing.Linear.None,
      p = TWEEN.Interpolation.Linear,
      m = [],
      g = null,
      v = !1,
      w = null,
      _ = null,
      y = null;
   for (var x in t) i[x] = parseFloat(t[x], 10);
   this.to = function (t, e) {
      return void 0 !== e && (a = e), r = t, this
   }, this.start = function (t) {
      TWEEN.add(this), u = !0, v = !1, d = void 0 !== t ? t : TWEEN.now(), d += h;
      for (var e in r) {
         if (r[e] instanceof Array) {
            if (0 === r[e].length) continue;
            r[e] = [n[e]].concat(r[e])
         }
         void 0 !== n[e] && (i[e] = n[e], i[e] instanceof Array == !1 && (i[e] *= 1), o[e] = i[e] || 0)
      }
      return this
   }, this.stop = function () {
      return u ? (TWEEN.remove(this), u = !1, null !== y && y.call(n, n), this.stopChainedTweens(), this) : this
   }, this.end = function () {
      return this.update(d + a), this
   }, this.stopChainedTweens = function () {
      for (var t = 0, e = m.length; t < e; t++) m[t].stop()
   }, this.delay = function (t) {
      return h = t, this
   }, this.repeat = function (t) {
      return s = t, this
   }, this.repeatDelay = function (t) {
      return e = t, this
   }, this.yoyo = function (t) {
      return c = t, this
   }, this.easing = function (t) {
      return f = t, this
   }, this.interpolation = function (t) {
      return p = t, this
   }, this.chain = function () {
      return m = arguments, this
   }, this.onStart = function (t) {
      return g = t, this
   }, this.onUpdate = function (t) {
      return w = t, this
   }, this.onComplete = function (t) {
      return _ = t, this
   }, this.onStop = function (t) {
      return y = t, this
   }, this.update = function (t) {
      var u, y, x;
      if (t < d) return !0;
      v === !1 && (null !== g && g.call(n, n), v = !0), y = (t - d) / a, y = y > 1 ? 1 : y, x = f(y);
      for (u in r) if (void 0 !== i[u]) {
         var T = i[u] || 0,
            b = r[u];
         b instanceof Array ? n[u] = p(b, x) : ("string" == typeof b && (b = "+" === b.charAt(0) || "-" === b.charAt(0) ? T + parseFloat(b, 10) : parseFloat(b, 10)), "number" == typeof b && (n[u] = T + (b - T) * x))
      }
      if (null !== w && w.call(n, x), 1 === y) {
         if (s > 0) {
            isFinite(s) && s--;
            for (u in o) {
               if ("string" == typeof r[u] && (o[u] = o[u] + parseFloat(r[u], 10)), c) {
                  var E = o[u];
                  o[u] = r[u], r[u] = E
               }
               i[u] = o[u]
            }
            return c && (l = !l), d = void 0 !== e ? t + e : t + h, !0
         }
         null !== _ && _.call(n, n);
         for (var S = 0, A = m.length; S < A; S++) m[S].start(d + a);
         return !1
      }
      return !0
   }
}, TWEEN.Easing = {
   Linear: {
      None: function (t) {
         return t
      }
   },
   Quadratic: {
      In: function (t) {
         return t * t
      },
      Out: function (t) {
         return t * (2 - t)
      },
      InOut: function (t) {
         return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      }
   },
   Cubic: {
      In: function (t) {
         return t * t * t
      },
      Out: function (t) {
         return --t * t * t + 1
      },
      InOut: function (t) {
         return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      }
   },
   Quartic: {
      In: function (t) {
         return t * t * t * t
      },
      Out: function (t) {
         return 1 - --t * t * t * t
      },
      InOut: function (t) {
         return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
      }
   },
   Quintic: {
      In: function (t) {
         return t * t * t * t * t
      },
      Out: function (t) {
         return --t * t * t * t * t + 1
      },
      InOut: function (t) {
         return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      }
   },
   Sinusoidal: {
      In: function (t) {
         return 1 - Math.cos(t * Math.PI / 2)
      },
      Out: function (t) {
         return Math.sin(t * Math.PI / 2)
      },
      InOut: function (t) {
         return .5 * (1 - Math.cos(Math.PI * t))
      }
   },
   Exponential: {
      In: function (t) {
         return 0 === t ? 0 : Math.pow(1024, t - 1)
      },
      Out: function (t) {
         return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
      },
      InOut: function (t) {
         return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
      }
   },
   Circular: {
      In: function (t) {
         return 1 - Math.sqrt(1 - t * t)
      },
      Out: function (t) {
         return Math.sqrt(1 - --t * t)
      },
      InOut: function (t) {
         return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      }
   },
   Elastic: {
      In: function (t) {
         return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
      },
      Out: function (t) {
         return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
      },
      InOut: function (t) {
         return 0 === t ? 0 : 1 === t ? 1 : (t *= 2, t < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1)
      }
   },
   Back: {
      In: function (t) {
         var e = 1.70158;
         return t * t * ((e + 1) * t - e)
      },
      Out: function (t) {
         var e = 1.70158;
         return --t * t * ((e + 1) * t + e) + 1
      },
      InOut: function (t) {
         var e = 2.5949095;
         return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      }
   },
   Bounce: {
      In: function (t) {
         return 1 - TWEEN.Easing.Bounce.Out(1 - t)
      },
      Out: function (t) {
         return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      },
      InOut: function (t) {
         return t < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * t) : .5 * TWEEN.Easing.Bounce.Out(2 * t - 1) + .5
      }
   }
}, TWEEN.Interpolation = {
   Linear: function (t, e) {
      var n = t.length - 1,
         i = n * e,
         r = Math.floor(i),
         o = TWEEN.Interpolation.Utils.Linear;
      return e < 0 ? o(t[0], t[1], i) : e > 1 ? o(t[n], t[n - 1], n - i) : o(t[r], t[r + 1 > n ? n : r + 1], i - r)
   },
   Bezier: function (t, e) {
      for (var n = 0, i = t.length - 1, r = Math.pow, o = TWEEN.Interpolation.Utils.Bernstein, a = 0; a <= i; a++) n += r(1 - e, i - a) * r(e, a) * t[a] * o(i, a);
      return n
   },
   CatmullRom: function (t, e) {
      var n = t.length - 1,
         i = n * e,
         r = Math.floor(i),
         o = TWEEN.Interpolation.Utils.CatmullRom;
      return t[0] === t[n] ? (e < 0 && (r = Math.floor(i = n * (1 + e))), o(t[(r - 1 + n) % n], t[r], t[(r + 1) % n], t[(r + 2) % n], i - r)) : e < 0 ? t[0] - (o(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[n] - (o(t[n], t[n], t[n - 1], t[n - 1], i - n) - t[n]) : o(t[r ? r - 1 : 0], t[r], t[n < r + 1 ? n : r + 1], t[n < r + 2 ? n : r + 2], i - r)
   },
   Utils: {
      Linear: function (t, e, n) {
         return (e - t) * n + t
      },
      Bernstein: function (t, e) {
         var n = TWEEN.Interpolation.Utils.Factorial;
         return n(t) / n(e) / n(t - e)
      },
      Factorial: function () {
         var t = [1];
         return function (e) {
            var n = 1;
            if (t[e]) return t[e];
            for (var i = e; i > 1; i--) n *= i;
            return t[e] = n, n
         }
      }(),
      CatmullRom: function (t, e, n, i, r) {
         var o = .5 * (n - t),
            a = .5 * (i - e),
            s = r * r,
            c = r * s;
         return (2 * e - 2 * n + o + a) * c + (-3 * e + 3 * n - 2 * o - a) * s + o * r + e
      }
   }
}, function (t) {
   "function" == typeof define && define.amd ? define([], function () {
      return TWEEN
   }) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== t && (t.TWEEN = TWEEN)
}(this), function () {
   "use strict";

   function t() {
      e(), n(), i(), r(), o()
   }

   function e() {
      a = $("#common-landscape"), s = $("#common-pc"), c = $("#common-share"), u = $(".common-container")
   }

   function n() {
      var t = function () {
         switch (window.orientation) {
            case 0:
            case 180:
               a.hide();
               break;
            case -90:
            case 90:
               a.show()
         }
      };
      t(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", t, !1)
   }

   function i() {
      $.os.phone || $.os.tablet || (new QRCode(s.children()[0]).makeCode(location.href), $("body").children().hide(), s.show())
   }

   function r() {
      window.NewsAppShare = {
         shareData: {
            title: "",
            desc: "",
            img_url: "",
            link: ""
         },
         update: function (t) {
            for (var e in t) this.shareData.hasOwnProperty(e) && (this.shareData[e] = t[e]);
            document.getElementById("__newsapp_sharetext").innerHTML = this.shareData.title + " " + this.shareData.link, document.getElementById("__newsapp_sharephotourl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxtitle").innerHTML = this.shareData.title, document.getElementById("__newsapp_sharewxtext").innerHTML = this.shareData.desc, document.getElementById("__newsapp_sharewxthumburl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxurl").innerHTML = this.shareData.link
         },
         show: function () {
            NewsAppClient.isNewsApp() ? NewsAppClient.share() : (c.fadeIn(300), setTimeout(function () {
               c.fadeOut(300)
            }, 2e3))
         },
         getAbsPath: function (t) {
            if (t) {
               var e = document.createElement("a");
               return e.href = t, e.href
            }
            var n = new RegExp(/(\?|#).*/);
            return location.href.replace(n, "")
         }
      }, NewsAppShare.update({
         title: "仅1%的人有的富人思维，测测你有吗？",
         desc: "你卖力工作却依然很穷？答案在这里",
         img_url: "https://wp.m.163.com/163/f2e/news/caishang/img/share.jpg",
         link: NTESAntAnalysis.getShareLink()
      }), document.addEventListener("WeixinJSBridgeReady", function () {
         WeixinJSBridge.on("menu:share:timeline", function () {
            WeixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function (t) {
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
            WeixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function (t) {
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
            YixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function () { })
         }), YixinJSBridge.on("menu:share:appmessage", function () {
            YixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function () { })
         })
      }, !1)
   }

   function o() {
      var t = document.documentElement.clientHeight,
         e = parseInt(u.css("height"));
      u.animate({
         scale: Math.min(t / e, 1),
         top: -(e - t) / 2
      }, 0)
   }
   var a, s, c, u;
   $(t)
}(), function () {
   "use strict";

   function t() {
      function t(e) {
         var n = new Image;
         n.src = u[e], l++ , l == u.length, $("#loading_img").append($(n));
         var i = null;
         i = setInterval(function () {
            $(n).height() && ($("#loading_img").html(""), clearInterval(i), l < u.length && t(l))
         }, 10)
      }

      function e(t) {
         var e = function () {
            document.removeEventListener("WeixinJSBridgeReady", e), document.removeEventListener("YixinJSBridgeReady", e), t.play(), t.pause()
         };
         document.addEventListener("WeixinJSBridgeReady", e, !1), document.addEventListener("YixinJSBridgeReady", e, !1)
      }

      function n() {
         g > 1300 ? $("body").addClass("h1300") : $("body").removeClass("h1300"), setTimeout(function () {
            i(window.data[7][0])
         }, 500)
      }

      function i(t) {
         switch (t.type) {
            case "chatQ":
               new RegExp("poorPercent").test(t.content) && (t.content = t.content.replace(/poorPercent/, _)), new RegExp("richPercent").test(t.content) && (t.content = t.content.replace(/richPercent/, y)), new RegExp("resultImg").test(t.content) && ($(".empty_box").hide(), t.content = t.content.replace(/resultImg/, d)), p.append('<div class="chat chatQ"><div class="head_img"><img src="' + t.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + t.name + '</div><div class="dialogue">' + t.content + "</div></div></div>");
               break;
            case "chatA":
               p.append('<div class="chat chatA"><div class="clearfix"><div class="dialogue">' + t.content + "</div></div></div>"), h.play(), $(".empty_box").show();
               break;
            case "chatB":
               p.append('<div class="chat chatA"><div class="clearfix"><div class="dialogue">' + t.content + "</div></div></div>");
               break;
            case "option":
               p.append(t.content), $(".empty_box").hide();
               break;
            case "canvas":
               p.append(t.content), s(), $(".empty_box").hide();
               break;
            case "tip":
               p.append(t.content);
               break;
            case "emoji":
               p.append('<div class="chat emoji"><div class="head_img"><img src="' + t.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + t.name + '</div><div class="dialogue">' + t.content + "</div></div></div>");
               break;
            case "redbag":
               p.append('<div class="chat emoji redbag "><div class="head_img"><img src="' + t.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + t.name + '</div><div class="dialogue">' + t.content + '</div><div class="dialogue_text">' + t.text + "</div></div></div>")
         }
         "true" == t.result && o(w);
         var e = p.height();
         if (e > g) {
            var n = p.height() - g;
            f.scrollTo({
               toT: n
            }, t.durTime)
         }
         if ("true" == t.next) {
            var r = t.quesBlock,
               a = t.quesNum;
            setTimeout(function () {
               i(window.data[r][a])
            }, t.timer)
         }
      }

      function r(t) {
         switch (t) {
            case "rich":
               v += 1, console.log("richScore:" + v + ",poorScore:" + w);
               break;
            case "normal":
               v += .5, w += .5, console.log("richScore:" + v + ", poorScore:" + w);
               break;
            case "poor":
               w += 1, console.log("richScore:" + v + ", poorScore:" + w)
         }
      }

      function o(t) {
         x = parseFloat((t / 6 * 100).toFixed(2)), T = parseFloat(100 - x);
         var e = [-2, -1, 0, 1, 2];
         if (0 == x || 50 == x || 100 == x) _ = Math.round(x), y = parseFloat(100 - _);
         else {
            var n = e[Math.floor(Math.random() * e.length)];
            _ = Math.round(x + n), y = parseFloat(100 - _)
         }
         console.log("poorPercent:" + _ + ",realPoorPercent:" + x);
         var i;
         100 == x ? i = 11 : x > 83 && x < 92 ? i = 10 : 75 == x ? i = 9 : 66.67 == x ? i = 8 : 58.33 == x ? i = 7 : 50 == x ? i = 6 : 41.67 == x ? i = 5 : 33.33 == x ? i = 4 : 25 == x ? i = 3 : 16.67 == x ? i = 2 : 8.33 == x ? i = 1 : 0 == x && (i = 0), a(i)
      }

      function a(t) {
         var e;
         e = g < 1206 ? 1206 : g;
         var n = Hilo.createElement("canvas", {
            width: m,
            height: e
         });
         $("#myCanvas").append(n);
         var i = new Hilo.Stage({
            canvas: n,
            width: m,
            height: e
         });
         i.enableDOMEvent(Hilo.event.POINTER_START, !0), i.enableDOMEvent(Hilo.event.POINTER_MOVE, !0), i.enableDOMEvent(Hilo.event.POINTER_END, !0);
         var r = new Hilo.Ticker(60);
         if (r.addTick(Hilo.Tween), r.addTick(i), r.start(), g < 1300) var o = 0,
            a = 1206,
            s = "img/r1206_2.jpg",
            c = "img/r1206_100_3.jpg",
            u = 240,
            l = 706,
            h = 770;
         else {
            var o = (g - 1334) / 2,
               a = 1334,
               s = "img/r1334_2.jpg",
               c = "img/r1334_100_3.jpg",
               u = 280;
            l = 766, h = 830
         }
         var f = (new Hilo.Container({
            id: "stage_bg",
            children: [],
            width: m,
            height: g,
            background: "#fff",
            x: 0,
            y: 0
         }).addTo(i), new Hilo.Container({
            id: "resultC",
            children: [],
            width: m,
            height: a,
            background: "#fff",
            x: 0,
            y: o
         }).addTo(i)),
            p = (new Hilo.Bitmap({
               id: "resultC_bg",
               image: s,
               rect: [0, 0, 750, a],
               x: 0,
               y: 0
            }).addTo(f), window.resultData[t]);
         if ("" != p.name) {
            new Hilo.Text({
               id: "nishi",
               color: "#444444",
               font: "28px/50px PingFangSC-Regular, sans-serif",
               lineSpacing: 2,
               outline: !1,
               height: "52",
               textVAlign: "bottom",
               maxWidth: 400,
               text: "你是",
               x: 70,
               y: l
            }).addTo(f), new Hilo.Text({
               id: "chengwei",
               color: "#c3a26d",
               font: "36px/50px PingFangSC-Regular, sans-serif",
               lineSpacing: 2,
               outline: !1,
               text: p.name,
               x: 130,
               y: l - 6,
               maxWidth: 400
            }).addTo(f), new Hilo.Text({
               id: "nishi",
               color: "#444444",
               font: "28px/50px PingFangSC-Regular, sans-serif",
               lineSpacing: 2,
               outline: !1,
               maxWidth: 400,
               text: p.title,
               x: 130 + 36 * p.name.length,
               y: l
            }).addTo(f), new Hilo.Text({
               id: "nishi",
               color: "#444444",
               font: " 28px/56px PingFangSC-Regular, sans-serif",
               lineSpacing: 2,
               outline: !1,
               maxWidth: 620,
               text: p.des,
               pivotX: 0,
               pivotY: 0,
               x: 70,
               y: h
            }).addTo(f)
         } else {
            new Hilo.Bitmap({
               id: "result11_bg",
               image: c,
               rect: [0, 0, 750, a],
               x: 0,
               y: 0
            }).addTo(f)
         }
         new Hilo.Text({
            id: "poorPercentText",
            color: "#666666",
            font: "bold 80px/86px PingFangSC-Regular, sans-serif",
            lineSpacing: 2,
            outline: !1,
            text: _,
            textAlign: "right",
            width: 145,
            x: 120,
            y: u
         }).addTo(f), new Hilo.Text({
            id: "richPercentText",
            color: "#c3a26d",
            font: "bold 80px/86px PingFangSC-Regular, sans-serif",
            lineSpacing: 2,
            outline: !1,
            text: y,
            textAlign: "right",
            width: 145,
            x: 383,
            y: u
         }).addTo(f);
         setTimeout(function () {
            d = n.toDataURL("image/jpeg"), $("#bigImg").attr("src", d)
         }, 2e3)
      }

      function s() {
         var t = $("canvas")[0],
            e = 750,
            n = 530;
         t.setAttribute("width", e), t.setAttribute("height", n);
         var i = window.stage = new Hilo.Stage({
            canvas: t,
            width: e,
            height: n
         }),
            r = new Hilo.Ticker(30);
         r.addTick(i), r.addTick(Hilo.Tween), r.start(), i.enableDOMEvent(Hilo.event.POINTER_START, !0), i.enableDOMEvent(Hilo.event.POINTER_MOVE, !0), i.enableDOMEvent(Hilo.event.POINTER_END, !0);
         var o = new Hilo.TextureAtlas({
            id: "redsun1_atlas",
            image: "img/circle4.png",
            width: 250,
            height: 250,
            frames: [
               [10, 8, 250, 250],
               [280, 8, 250, 250],
               [550, 8, 250, 250],
               [820, 8, 250, 250],
               [1090, 8, 250, 250],
               [1360, 8, 250, 250],
               [1630, 8, 250, 250],
               [10, 278, 250, 250],
               [280, 278, 250, 250],
               [550, 278, 250, 250],
               [820, 278, 250, 250],
               [1090, 278, 250, 250]
            ],
            sprites: {
               redsun1: {
                  from: 0,
                  to: 11
               }
            }
         });
         E = new Hilo.Sprite({
            id: "redsun",
            frames: o.getSprite("redsun1"),
            x: 400,
            y: 148,
            interval: 50,
            timeBased: !0,
            loop: !1,
            paused: !0
         }).addTo(i);
         var a = new Hilo.TextureAtlas({
            id: "redsun2_atlas",
            image: "img/circle3.png",
            width: 250,
            height: 250,
            frames: [
               [11, 8, 250, 250],
               [281, 8, 250, 250],
               [551, 8, 250, 250],
               [821, 8, 250, 250],
               [1091, 8, 250, 250],
               [1361, 8, 250, 250],
               [1631, 8, 250, 250],
               [11, 278, 250, 250],
               [281, 278, 250, 250],
               [551, 278, 250, 250],
               [821, 278, 250, 250],
               [1091, 278, 250, 250],
               [1361, 278, 250, 250]
            ],
            sprites: {
               redsun2: {
                  from: 0,
                  to: 12
               }
            }
         });
         S = new Hilo.Sprite({
            id: "redsun2",
            frames: a.getSprite("redsun2"),
            x: 100,
            y: 148,
            interval: 50,
            timeBased: !0,
            loop: !1,
            paused: !0
         }).addTo(i), b = new k, b.init()
      }
      var c = "https://wp.m.163.com/163/f2e/news/caishang/img/",
         u = [c + "bafeite.png", c + "biergaici.png", c + "kaiensi.png", c + "luokefeile.png", c + "renzhiqiang.png", c + "yadangsimi_2.png", c + "zakeboge.png", c + "2_a.png", c + "2_b.png", c + "2_c.png", c + "bq1.gif", c + "bq2_2.gif", c + "bq3_2.gif", c + "bq4.png", c + "bq5_2.gif", c + "bq6.gif", c + "bq7_2.gif", c + "bq8_2.gif", c + "bq9.gif", c + "bq10.gif", c + "bq11_4.png", c + "bq12_2.gif", c + "bq13.png", c + "bq14.png", c + "bq15_3.png", c + "bq16_3.png", c + "bq17_3.png", c + "checked.png", c + "circle3.png", c + "circle4.png", c + "close.png", c + "ellipsis.png", c + "jinbi.png", c + "q1_bg.png", c + "q2_bg.png", c + "q4_bg.png", c + "q5_a.png", c + "q5_b.png", c + "q5_bg.png", c + "q5_c.png", c + "q5_d.png", c + "q6_bg.png", c + "r1206_2.jpg", c + "r1206_100_3.jpg", c + "r1334_2.jpg", c + "r1334_100_3.jpg"],
         l = 0;
      t(0);
      var h = new Audio;
      h.src = "qa.mp3", h.id = "qa", e(h);
      var d, f = $(".dialog_wrap"),
         p = $("#dialog_cont"),
         m = window.innerWidth,
         g = window.innerHeight,
         v = 0,
         w = 0,
         _ = 0,
         y = 0,
         x = 0,
         T = 0;
      n(), $("#dialog_cont").one("click", ".start_btn", function (t) {
         var t = t || window.event,
            e = t.target || t.srcElement,
            n = $(e).attr("quse-attr"),
            r = $(e).attr("next-attr");
         i(window.data[n][r]), $(e).css("animation", "none")
      }), $("#dialog_cont").on("touchend", ".options", function (t) {
         var e = $(this).find(".option"),
            n = e.attr("man-attr"),
            o = e.attr("quse-attr"),
            a = e.attr("next-attr");
         $(this).parent().hasClass("hasclick") || (e.addClass("cur"), $(this).addClass("cur"), $(this).parent().addClass("hasclick"), r(n), i(window.data[o][a]))
      }), $("#dialog_cont").one("touchend", ".question4 .options", function (t) {
         var e = new Audio;
         e.src = "money.mp3", e.id = "money", e.play()
      });
      var b, E, S, A = 750,
         C = 530,
         k = function (t) {
            this.startX = this.startY = this.moveX = this.moveY = null, this.previousPinchScale = 1, this.longTapTimeout = null, this.width = 250, this.initWidth = 250
         };
      k.prototype._getTime = function () {
         return (new Date).getTime()
      }, k.prototype._getDistance = function (t, e) {
         return Math.sqrt(t * t + e * e)
      }, k.prototype._getRotateDirection = function (t, e) {
         return t.x * e.y - e.x * t.y
      }, k.prototype._getRotateAngle = function (t, e) {
         var n = this._getRotateDirection(t, e);
         n = n > 0 ? -1 : 1;
         var i = this._getDistance(t.x, t.y),
            r = this._getDistance(e.x, e.y),
            o = i * r;
         if (0 === o) return 0;
         var a = t.x * e.x + t.y * e.y,
            s = a / o;
         return s > 1 && (s = 1), s < -1 && (s = -1), Math.acos(s) * n * 180 / Math.PI
      }, k.prototype._onTouchStart = function (t) {
         if ($(".makesure").addClass("cur"), window.stage) {
            var e = t.touches ? t.touches[0] : t,
               n = window.stage.getChildById("redsun");
            this.x = n.x, this.y = n.y, this.startX = e.pageX, this.startY = e.pageY, window.clearTimeout(this.longTapTimeout);
            if (t.touches.length > 1) {
               var i = t.touches[1],
                  r = Math.abs(i.pageX - this.startX),
                  o = Math.abs(i.pageY - this.startY);
               this.touchDistance = this._getDistance(r, o), this.touchVector = {
                  x: i.pageX - this.startX,
                  y: i.pageY - this.startY
               }
            } else this.startTime = this._getTime(), this.longTapTimeout = setTimeout(function () { }, 800), this.previousTouchPoint && Math.abs(this.startX - this.previousTouchPoint.startX) < 10 && Math.abs(this.startY - this.previousTouchPoint.startY) < 10 && Math.abs(this.startTime - this.previousTouchTime) < 300, this.previousTouchTime = this.startTime, this.previousTouchPoint = {
               startX: this.startX,
               startY: this.startY
            };
            $(".shoushi").hide()
         }
      }, k.prototype._onTouchMove = function (t) {
         if (window.stage) {
            this._getTime();
            if (t.touches.length > 1) {
               var e = Math.abs(t.touches[0].pageX - t.touches[1].pageX),
                  n = Math.abs(t.touches[0].pageY - t.touches[1].pageY),
                  i = this._getDistance(e, n);
               if (this.touchDistance) {
                  var r = i / this.touchDistance;
                  r = Math.sqrt(r), this.onPinch({
                     pinch: r - this.previousPinchScale
                  }), this.previousPinchScale = r
               }
               if (this.touchVector) {
                  var o = {
                     x: t.touches[1].pageX - t.touches[0].pageX,
                     y: t.touches[1].pageY - t.touches[0].pageY
                  };
                  this._getRotateAngle(o, this.touchVector);
                  this.touchVector.x = o.x, this.touchVector.y = o.y
               }
            } else {
               window.clearTimeout(this.longTapTimeout);
               var a = t.touches ? t.touches[0] : t,
                  s = null === this.moveX ? 0 : a.pageX - this.moveX,
                  c = null === this.moveY ? 0 : a.pageY - this.moveY;
               this.onMove({
                  deltaX: s,
                  deltaY: c
               }), this.moveX = a.pageX, this.moveY = a.pageY
            }
            t.preventDefault()
         }
      }, k.prototype._onTouchCancel = function (t) {
         window.stage && this._onTouchEnd(t)
      }, k.prototype._onTouchEnd = function (t) {
         if (window.stage) {
            window.clearTimeout(this.longTapTimeout);
            var e = this._getTime();
            null !== this.moveX && Math.abs(this.moveX - this.startX) > 10 || null !== this.moveY && Math.abs(this.moveY - this.startY) > 10 ? e - this.startTime < 500 && this.onSwipe() : e - this.startTime < 2e3 && (e - this.startTime < 500 && this.onTap(), e - this.startTime > 500), this.startX = this.startY = this.moveX = this.moveY = null, this.width = this.width * this.previousPinchScale, this.previousPinchScale = 1, this.width = this.initWidth * this.pinch
         }
      }, k.prototype.init = function () {
         $("#filter").on("touchstart", this._onTouchStart.bind(this)), $("#filter").on("touchmove", this._onTouchMove.bind(this)), $("#filter").on("touchcancel", this._onTouchCancel.bind(this)), $("#filter").on("touchend", this._onTouchEnd.bind(this)), this.x = 0, this.y = 0, this.pinch = 1, this.angle = 0
      }, k.prototype.onPinch = function (t) {
         var e = this.pinch + t.pinch,
            n = window.stage.getChildById("redsun");
         n.scaleX = e, n.scaleY = e, e > C / this.initWidth ? this.pinch = C / this.initWidth : e < .2 ? this.pinch = .2 : this.pinch = e
      }, k.prototype.onRotate = function (t) {
         var e = this.angle + t.angle,
            n = window.stage.getChildById("redsun");
         n.rotation = e, this.angle = e
      }, k.prototype.onSwipe = function (t) { }, k.prototype.onTap = function (t) { }, k.prototype.onMove = function (t) {
         var e = this.x + t.deltaX,
            n = this.y + t.deltaY,
            i = window.stage.getChildById("redsun");
         i.x = e, i.y = n, e <= 0 ? this.x = 0 : e + this.width > A ? this.x = A - this.width : this.x = e, n <= 0 ? this.y = 0 : n + this.width > C ? this.y = C - this.width : this.y = n
      }, k.prototype.getRelationship = function (t) {
         var e = Math.round(this.x + t / 2),
            n = Math.round(this.y + t / 2),
            i = Math.round(t / 2),
            o = Math.round(S.x + S.width / 2),
            a = Math.round(S.y + S.width / 2),
            s = Math.round(S.width / 2),
            c = Math.sqrt(Math.pow(Math.abs(o - e), 2) + Math.pow(Math.abs(a - n), 2));
         console.log("X1:" + e + ",Y1:" + n + ",R1:" + i + ",X2:" + o + ",Y2:" + a + ",R2:" + s + ",length:" + c), r(c > i + s ? "poor" : c < i + s && c > Math.abs(s - i) ? "normal" : t > this.initWidth ? "rich" : "normal")
      }, $("#dialog_cont").one("tap", ".makesure.cur", function (t) {
         $(".empty_box").show(), $(".shoushi").hide(), b.getRelationship(b.width), E.play(), S.play(), $(".question3").append('<div class="empty"></div>');
         var e = new Audio;
         e.src = "circle_money.mp3", e.id = "circle_money", e.play(), setTimeout(function () {
            i(window.data[3][4])
         }, 2e3)
      }), $("#dialog_cont").on("tap", ".bigImgopen", function (t) {
         $(".bigImgBox").addClass("cur")
      }), $(".closeBigImg").on("tap", function (t) {
         $(".bigImgBox").removeClass("cur"), wx.miniProgram.navigateTo({
            url: "/pages/detail/main?id=1516"
         })
      }), window.isNewsApp = function () {
         var t = window.navigator.userAgent.toLowerCase();
         return "newsapp" == t.match(/NewsApp/i)
      }, window.isWXApp = function () {
         var t = window.navigator.userAgent.toLowerCase();
         return "micromessenger" == t.match(/MicroMessenger/i)
      }, window.isGKKApp = function () {
         var t = window.navigator.userAgent.toLowerCase();
         return !!/OpenCourse_[ia]|vopen/i.test(t)
      };
      var I = navigator.userAgent,
         P = I.indexOf("Android") > -1 || I.indexOf("Linux") > -1; !!I.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      P && isNewsApp() && $("#hint").html("截图保存图片"), isGKKApp() && $("#hint").html("截图保存图片")
   }

   function e() {
      TWEEN.update(), requestAnimationFrame(e)
   }
   $.fn.scrollTo = function (t, e) {
      var n = {
         toT: 0,
         durTime: e || 500,
         delay: 15,
         callback: null
      },
         i = $.extend(n, t),
         r = this,
         o = r.scrollTop();
      i.toT - o, Math.round(i.durTime / i.delay);
      return new TWEEN.Tween({
         scrollTop: r.scrollTop()
      }).to({
         scrollTop: i.toT
      }, i.durTime).onUpdate(function (t) {
         r.scrollTop(this.scrollTop)
      }).onComplete(function () { }).start(), r
   }, e(), $(t)
}(), window.timer = 1350, window.durTime = 800, window.data = [
   [{
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>Hi，年轻人</p> <img src="img/bq1.gif"  style="vertical-align:middle;">',
      next: "true",
      quesBlock: 0,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你是否感觉自己卖力工作却依然很穷？</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>你也许是陷入穷人思维了<img src="img/bq4.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 0,
      quesNum: 3,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>穷人和富人不同的思维方式使他们的财富水平有所差异</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 4,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你是穷人思维还是富人思维占主导呢？</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 5,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>来让这几位大佬帮你测一测吧！结果可能出乎你意料</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="start_btn" quse-attr="0" next-attr="7">开始</div>'
   }, {
      type: "chatA",
      content: "<p>开始</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 0,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: "<p>请告诉我你的真实想法</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: "<p>你倾向用哪种方式提高自己的收入？</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="question1"><div class="question1_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="1" next-attr="3">跳槽，找份高薪工作</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="poor" quse-attr="1" next-attr="4">学习新技能，<br/>提高业务水平</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="rich" quse-attr="1" next-attr="5">利用业余时间<br/>投资理财</div></div></div></div>',
      next: "",
      timer: window.timer,
      durTime: 800
   }, {
      type: "chatA",
      content: "<p> 跳槽，找份高薪工作</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>学习新技能，提高业务水平</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>利用业余时间投资理财</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 8,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>想法不错哦 <img src="img/bq5_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>嗯，目光长远 <img src="img/bq2_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>Interesting <img src="img/bq6.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="img/bq10.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 10,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p> <img src="img/bq11_4.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 2,
      quesNum: 0,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>哈哈哈，来看看我这道题吧！</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你认为哪种动物最会创造财富？</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="question2"><div class="question2_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="2" next-attr="3">狼</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="rich" quse-attr="2" next-attr="4">蚂蚁</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="poor" quse-attr="2" next-attr="5">老虎</div></div></div></div>',
      next: "",
      timer: window.timer,
      durTime: window.durTime
   }, {
      type: "chatA",
      content: "<p>狼</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>蚂蚁</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>老虎</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p> <img src="img/bq12_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 0,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: '<p>我说我是群里最有钱的<img src="img/bq7_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 10,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>就你话多！快开始叭！</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: "<p><em>拖动</em>并<em>缩放</em>右侧的“他人”圆圈，来表示你与他人之间的关系</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 3,
      timer: window.timer
   }, {
      type: "canvas",
      content: '<div class="question3"><canvas id="canvas"></canvas><div id="filter"></div><div class="makesure">确认</div><div class="shoushi"></div></div>',
      next: "",
      timer: window.timer
   }, {
      type: "chatB",
      content: "<p>确认</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 5,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>@巴菲特<img src="img/bq8_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>@巴菲特 在吗？</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>@巴菲特 出来出题啊啊啊！</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 8,
      timer: window.timer
   }, {
      type: "redbag",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p> <img src="img/bq13.png"  style="height：167px;vertical-align:middle;"></p>',
      text: '<p><img src="img/bq14.png"  style="height：59px;vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 9,
      timer: 2500
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="img/bq3_2.gif"  style="height：59px;vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: "<p>应该没人反对吧？</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 1,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: '<p>我迫不及待地想要问你这道题！<img src="img/bq8_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>注意哦，我的题目可是有套路的</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>如果我现在送你一笔钱，你更愿意选择哪种领取方式？</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 3,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="question4"><div class="question4_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="rich" quse-attr="4" next-attr="4">抛硬币，正面200万，反面不拿钱</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="normal" quse-attr="4" next-attr="5">不抛硬币，现在拿50万</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="poor" quse-attr="4" next-attr="6">不抛硬币，5年之后拿100万</div></div></div></div>',
      next: "",
      timer: window.timer,
      durTime: window.durTime
   }, {
      type: "chatA",
      content: "<p>抛硬币，正面200万，反面不拿钱</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>不抛硬币，现在拿50万</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>不抛硬币，5年之后拿100万</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: '<p><img src="img/bq15_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 8,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>@扎克伯格，小扎，该你了</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 9,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: '<p><img src="img/bq17_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 5,
      quesNum: 0,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: "<p>假如你有机会选择想就读的名校，你最看重名校的什么？</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="question5"><div class="question5_con"><div class="question5_bg"></div><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="5" next-attr="2">学校排名</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="rich" quse-attr="5" next-attr="3">校友资源</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="normal" quse-attr="5" next-attr="4">地理位置</div></div><div class="options options4"><div class="img"></div><div class="option" man-attr="poor" quse-attr="5" next-attr="5">奖学金</div></div></div></div>  ',
      next: "",
      timer: window.timer,
      durTime: 800
   }, {
      type: "chatA",
      content: "<p>学校排名</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>校友资源</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>地理位置</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>奖学金</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: '<p><img src="img/bq6.gif"  style="vertical-align:middle;"><img src="img/bq6.gif"  style="vertical-align:middle;"><img src="img/bq6.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 5,
      quesNum: 7,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>还有谁没出题？</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 8,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我！我！我！还有我！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 9,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我在网易公开课开设了商学课，讲富人生财之道！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 10,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>咳！本群禁止打广告！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 11,
      timer: window.timer
   }, {
      type: "emoji",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: '<p> <img src="img/bq16_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 1,
      timer: window.timer
   }],
   [{
      type: "chatQ",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我在网易公开课开设了商学课，“创业”话题很热</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 1,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>那我出一道“创业”主题的压轴题吧</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 2,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>假如你有一个很好的创业计划，但缺少资金和人脉，你会怎么做？</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 3,
      timer: window.timer
   }, {
      type: "option",
      content: '<div class="question6"><div class="question6_con"><div class="question6_bg"></div><div class="options options1"><div class="option" man-attr="normal" quse-attr="6" next-attr="4">把计划卖给别人，先积累资金</div></div><div class="options options2"><div class="option" man-attr="poor" quse-attr="6" next-attr="5">慢慢筹备资源，时机成熟再行动</div></div><div class="options options3"><div class="option" man-attr="rich" quse-attr="6" next-attr="6">一边实施创业计划一边想办法</div></div><div class="options options4"><div class="option" man-attr="normal" quse-attr="6" next-attr="7">没考虑过创业</div></div></div></div>',
      next: "",
      timer: window.timer,
      durTime: window.durTime
   }, {
      type: "chatA",
      content: "<p>把计划卖给别人，先积累资金</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>慢慢筹备资源，时机成熟再行动</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>一边实施创业计划一边想办法</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: window.timer
   }, {
      type: "chatA",
      content: "<p>没考虑过创业</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>恭喜！你已经完成了全部的测试题</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 9,
      timer: window.timer,
      result: "true"
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>正在计算你的穷/富人思维比例<span class="ellipsis"></span></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 11,
      timer: 3e3
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>穷人思维占 poorPercent %<br/>富人思维占 richPercent %</p>",
      next: "",
      quesBlock: 6,
      quesNum: 11,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>点开图片查看分析，记得保存图片分享哦<img src="img/bq1.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 12,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<div class="bigImgopen" style="width:184px;height:295px;background:url(resultImg) no-repeat center;background-size:contain;"></div>',
      next: "",
      quesBlock: 7,
      quesNum: 0,
      timer: window.timer
   }, {
      type: "chatQ",
      headImg: "img/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="img/bq9.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 8,
      timer: window.timer,
      result: "true"
   }],
   [{
      type: "tip",
      content: '<div class="tip">“亚当·斯密”邀请你加入了<em>“精准扶贫”</em>群聊，群聊参与人还有 ：比尔·盖茨、巴菲特、洛克菲勒、扎克伯格、任志强</div>',
      next: "true",
      quesBlock: 0,
      quesNum: 0,
      timer: window.timer
   }]
], window.resultData = [{
   name: "天选的明日首富",
   title: "！对财富有敏锐的嗅觉。",
   des: "无论是才智还是胆识，都万里挑一。天生的领导者，能迅速成为团队的核心。践行“人生处处是机遇”的财富观，终将走向人生巅峰。"
}, {
   name: "大胆的冒险家",
   title: "，总能在危机中发现转机。",
   des: "别人贪婪时你恐惧，别人恐惧时你贪婪。眼光长远，活力四射，极具人格魅力。践行“你不理财，财不理你”的财富观，拥有富人潜质。"
}, {
   name: "理性主义者",
   title: "，极少受感性因素影响。",
   des: "善于控制风险，不会将所有鸡蛋放在一个篮子里。能与他人达成共赢，百分百神队友。践行“谈钱伤感情，谈感情伤钱”的财富观，活得很透彻。"
}, {
   name: "低调的实干家",
   title: "，周围人觉得你很靠谱。",
   des: "处理金钱问题时，倾向参考以往的经验。为朋友提供有用的建议，百分百神助攻。践行“三分天注定，七分靠打拼”的财富观，干劲十足。"
}, {
   name: "现实主义者",
   title: "，不喜欢幻想太遥远的事情。",
   des: "尽力规避风险，像小蜜蜂一样慢慢积攒财富。独立有主见，也乐于助人。践行“达则兼济天下，穷则独善其身”的财富观，活得很通达。"
}, {
   name: "无忧无虑的乐活族",
   title: "，向往多金悠闲的生活。",
   des: "虽不热衷投资，但也有基本的理财意识。享受社交，也能享受一个人的孤独。践行“工作是工作，生活是生活”的财富观，乐观又随性。"
}, {
   name: "普通人本人",
   title: "，穷人/富人思维均衡。",
   des: "赚钱的想法很多，但是有点懒癌。不热衷左右逢源，交朋友宁缺毋滥。践行“钱够花就好”的财富观，是个顺其自然的人。"
}, {
   name: "心很大的社会人",
   title: "，不太计较得失。",
   des: "花起钱来非常豪气，不喜欢抠抠缩缩。认为“金钱如粪土，朋友值千金”。践行“千金难买爷开心”的财富观，潇洒生活每一天。"
}, {
   name: "平和的佛系青年",
   title: "，早已看穿一切。",
   des: "花钱随心，挣钱随缘，四大皆空。信奉“君子之交淡如水”的交友原则。践行“不争不抢，不求输赢”的财富观，自己开心就好。"
}, {
   name: "白日梦想家",
   title: "，想像力十分丰富。",
   des: "拥有在梦里赚钱的超能力。坚守“今天你对我爱搭不理，明天我让你高攀不起”的人生信条。践行“有梦想谁都了不起”的财富观。"
}, {
   name: "日光族",
   title: "，钱和你只有一日之缘。",
   des: "挣钱如滴水，花钱如泄洪。口头禅是“只要你不跟我借钱，我们还是好朋友”。践行“会花才会赚”的财富观，不接受反驳。"
}, {
   name: "",
   title: "100%的穷人思维真不多见",
   des: "给你一点诚恳的人生建议：多转点锦鲤[表情]"
}];