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
}(),

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