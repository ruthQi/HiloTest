//https://wp.m.163.com/163/f2e/news/caishang/index.html

!function () {
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
}(), 

function () {
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
}(), window.timer = 1350, window.durTime = 800, 
