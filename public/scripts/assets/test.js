!function () {
      "use strict";

      function t() {
         e.init(), e.bind()
      }
      var e = {
         winW: 750,
         winH: 1448,
         visibleH: $(window).height(),
         imgBefore: "https://static.ws.126.net/163/f2e/ent/ent_halloween2018/",
         loadCount: 0,
         images: {},
         nowScene: 1,
         nowAudio: null,
         video67: null,
         isPlayAudio: !0,
         preLoadingImgData: ["img/bg.jpg", "img/loading1.png", "img/tips1.png", "img/logo.png", "img/m-btn.png", "img/m-btns.png", "img/drop.png", "img/shuai.png", "img/peo0_2.png", "img/end-btns.png", "img/tv_bg.png", "img/tv_bg0.png", "img/tv1.png", "img/tv2.png", "img/tv3.png", "img/gui1.png", "img/guihuo.png", "img/peo1.png", "img/han.png", "img/peo1_2.png", "img/peo1_3.png", "img/jiangshi0.png", "img/jiangshi1.png", "img/peo2_1.png", "img/btn.png", "img/btntext2.png", "img/wenhao.png", "img/peo0.png", "img/peo2.png", "img/peo3.png", "img/peo4.png", "img/peo5.png", "img/tanhao.png", "img/hua1.png", "img/hua2.png", "img/jiangshiface.png", "img/jiangshi4_1.png", "img/xiaochouface.png", "img/hand1.png", "img/hand2.png", "img/hand3.png", "img/xiangkuang.png", "img/bandao.png", "img/tonggan.png", "img/xiaochouface5.png", "img/xiaochou5.png", "img/peo5_3.png", "img/peo5_4.png", "img/bang5.png", "img/yan5.png", "img/black.png", "img/share1.jpg", "img/share2.jpg", "img/share3.jpg", "img/share4.jpg", "img/video-bg2.jpg"],
         queue: new Hilo.LoadQueue,
         init: function () {
            var t = this,
               e = $("body").height();
            e > 1380 && $("body").addClass("ipx"), t.images = {
               btn: $(".btn")[0],
               btntext: $(".btntext")[0],
               peo0: $(".peo0")[0],
               peo2: $(".peo2")[0],
               wenhao: $(".wenhao")[0],
               peo3: $(".peo3")[0],
               peo4: $(".peo4")[0],
               peo5: $(".peo5")[0]
            }, t.video67 = $(".videos video")[0], t.audioAutoPlay("bgm"), t.preLoading(0), t.initStage();
            var n = [t.imgBefore + "img/share1.jpg", t.imgBefore + "img/share2.jpg", t.imgBefore + "img/share3.jpg", t.imgBefore + "img/share4.jpg"],
               i = Math.floor(4 * Math.random());
            NewsAppShare.update({
               title: "“救我！”",
               desc: "不要停止往前走，你总会到达有光照进来的地方",
               img_url: n[i],
               link: NTESAntAnalysis.getShareLink()
            })
         },
         bind: function () {
            var t = e;
            $("body").one("touchstart", function (t) {
               $(t.target).hasClass("m-btn") || $(".bgm")[0].play()
            }), $(".m-btn").on("click", function () {
               t.isPlayAudio ? (t.isPlayAudio = !1, $(".m-btn").removeClass("open"), $(".bgm")[0].pause(), t.nowAudio && t.nowAudio.pause(), t.video67.muted = !0) : (t.isPlayAudio = !0, $(".m-btn").addClass("open"), t.video67.muted = !1, 67 !== t.nowScene && $(".bgm")[0].play())
            }), $(".btn5").on("click", function () {
               t.video67.play(), t.nowScene = 67, $(".a5")[0].pause(), $(".bgm")[0].pause(), t.btnwrap5.alpha = 0, $("#myCanvas").addClass("end"), t.videoEnd()
            })
         },
         audioAutoPlay: function (t) {
            var e = document.getElementById(t),
               n = function () {
                  document.removeEventListener("WeixinJSBridgeReady", n), document.removeEventListener("YixinJSBridgeReady", n), e.play()
               };
            e.play(), window.WeixinJSBridge && e.play(), "undefined" == typeof WeixinJSBridge ? document.addEventListener("WeixinJSBridgeReady", n, !1) : (document.addEventListener("YixinJSBridgeReady", n, !1), e.play())
         },
         preLoading: function (t) {
            var n = new Image;
            n.src = e.imgBefore + e.preLoadingImgData[t], e.loadCount++;
            var i = parseInt(e.loadCount / e.preLoadingImgData.length * 100) + "%";
            $(".loading .loading_percent").html(i), e.loadCount === e.preLoadingImgData.length && setTimeout(function () {
               $(".loading").remove(), e.loaded()
            }, 200), $("#loading_img").append($(n));
            var r = null;
            r = setInterval(function () {
               $(n) && ($("#loading_img").html(""), clearInterval(r), e.loadCount < e.preLoadingImgData.length && e.preLoading(e.loadCount))
            }, 100)
         },
         loaded: function () {
            var t = this;
            t.drop.alpha = 1, t.loading1.alpha = 0, Hilo.Tween.to(t.drop, {
               y: 628
            }, {
                  duration: 200,
                  onComplete: function () {
                     t.drop.alpha = 0, t.drop2.alpha = 1, t.drop2.play()
                  }
               })
         },
         more_anim: function (t, e, n, i) {
            function r(o, s, l) {
               Hilo.Tween.to(t, s, {
                  duration: l,
                  onComplete: function () {
                     o < a.length - 1 ? (o++ , r(o, e[o], n[o])) : i && i()
                  }
               })
            }
            var a = e,
               o = 0,
               s = e[0],
               l = n[0];
            r(o, s, l)
         },
         loop_anim: function (t, e, n) {
            var i = this;
            i.more_anim(t, e, n, function () {
               i.loop_anim(t, e, n)
            })
         },
         createFrames: function (t, e, n, i, r) {
            for (var a = [], o = 0, s = 0; s < i; s++) for (var l = 0; l < n; l++) o < r && (a.push([l * t, s * e, t, e]), o++);
            return a
         },
         createAtlas: function (t, n, i, r, a, o, s) {
            var l = s - 1,
               h = new Hilo.TextureAtlas({
                  id: t,
                  image: n,
                  width: i,
                  height: r,
                  frames: e.createFrames(i, r, a, o, s),
                  sprites: {
                     atlas: {
                        from: 0,
                        to: l
                     }
                  }
               });
            return h
         },
         initStage: function () {
            var t = this,
               e = Hilo.createElement("canvas", {
                  width: t.winW,
                  height: t.winH
               });
            $("#myCanvas").append(e);
            var n = t.stage = new Hilo.Stage({
               canvas: e,
               width: t.winW,
               height: t.winH
            });
            n.enableDOMEvent(Hilo.event.POINTER_START, !0), n.enableDOMEvent(Hilo.event.POINTER_MOVE, !0), n.enableDOMEvent(Hilo.event.POINTER_END, !0);
            var i = t.ticker = new Hilo.Ticker(120);
            i.addTick(Hilo.Tween), i.addTick(n), i.start(), t.addToSatge()
         },
         addToSatge: function () {
            var t = this,
               n = (t.loading_page = new Hilo.Container({
                  id: "loading_page",
                  children: [],
                  width: t.winW,
                  height: t.winH,
                  x: 0,
                  y: 0
               }).addTo(t.stage), e.createAtlas("loading1_atlas", t.imgBefore + "img/loading1.png", 260, 260, 7, 3, 19)),
               i = t.loading1 = new Hilo.Sprite({
                  id: "loading1",
                  frames: n.getSprite("atlas"),
                  x: 243,
                  y: 300,
                  interval: 80,
                  timeBased: !0,
                  loop: !0
               }),
               r = e.createAtlas("drop_atlas", t.imgBefore + "img/drop.png", 300, 300, 6, 1, 6),
               a = t.drop = new Hilo.Sprite({
                  id: "drop",
                  frames: r.getSprite("atlas"),
                  x: 230,
                  y: 300,
                  interval: 80,
                  timeBased: !0,
                  loop: !0,
                  alpha: 0
               }),
               o = e.createAtlas("drop_atlas2", t.imgBefore + "img/shuai.png", 700, 220, 2, 12, 23),
               s = t.drop2 = new Hilo.Sprite({
                  id: "drop2",
                  frames: o.getSprite("atlas"),
                  x: 25,
                  y: 800,
                  interval: 80,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 0
               }),
               l = t.peo0 = new Hilo.Bitmap({
                  id: "peo0",
                  image: t.images.peo0,
                  rect: [0, 0, 230, 173],
                  x: 263,
                  y: 820,
                  alpha: 0
               }),
               h = t.peo0_1 = new Hilo.Bitmap({
                  id: "peo0_1",
                  image: t.images.peo0,
                  rect: [230, 0, 175, 254],
                  x: 344,
                  y: 717,
                  alpha: 0
               }),
               u = e.createAtlas("peo0_2_atlas", t.imgBefore + "img/peo0_2.png", 261, 347, 7, 6, 36),
               c = t.peo0_2 = new Hilo.Sprite({
                  id: "peo0_2",
                  frames: u.getSprite("atlas"),
                  x: 297,
                  y: 679,
                  interval: 40,
                  timeBased: !0,
                  loop: !0,
                  paused: !0,
                  alpha: 0
               }),
               d = t.text0 = new Hilo.Bitmap({
                  id: "text0",
                  image: t.imgBefore + "img/text0.png",
                  rect: [0, 0, 372, 47],
                  x: 203,
                  y: 642,
                  alpha: 0
               }),
               p = t.btnwrap0 = new Hilo.Container({
                  id: "btnwrap0",
                  children: [],
                  width: 401,
                  height: 204,
                  x: 305,
                  y: 540,
                  alpha: 0
               }),
               f = t.btntext0 = new Hilo.Bitmap({
                  id: "btntext0",
                  image: t.images.btntext,
                  rect: [0, 0, 401, 204],
                  alpha: 1
               }),
               g = t.btn0 = new Hilo.Bitmap({
                  id: "btn0",
                  image: t.images.btn,
                  rect: [113, 110, 231, 110],
                  pivotX: 115,
                  pivotY: 55,
                  x: 285,
                  y: 149,
                  alpha: 1
               });
            t.btnwrap0.addChild(f, g), t.btnwrap0.on(Hilo.event.POINTER_START, t.showScene1), t.drop2.setFrameCallback(22, function () {
               Hilo.Tween.to(t.drop2, {
                  alpha: 0
               }, {
                     duration: 150
                  }), Hilo.Tween.to(t.text0, {
                     alpha: 1
                  }, {
                        duration: 10
                     }), t.peo_alpha_tween(t.peo0, 150, 600), t.peo_alpha_tween(t.peo0_1, 750, 600), Hilo.Tween.to(t.peo0_2, {
                        alpha: 1
                     }, {
                           duration: 10,
                           delay: 1360,
                           onComplete: function () {
                              t.peo0_2.play(), t.more_anim(c, [{
                                 alpha: 1,
                                 x: 757
                              }, {
                                 alpha: 0,
                                 x: 757
                              }], [3900, 10], function () {
                                 t.showBtn(t.btnwrap0, t.btn0), Hilo.Tween.to(t.text0, {
                                    alpha: 0
                                 }, {
                                       duration: 10
                                    })
                              })
                           }
                        })
            }), t.loading_page.addChild(i, a, s, d, l, h, c, p);
            var m = (t.scene1 = new Hilo.Container({
               id: "scene1",
               children: [],
               width: t.winW,
               height: t.winH,
               x: 750,
               y: 0
            }).addTo(t.stage), t.tv_wrap = new Hilo.Container({
               id: "tv_wrap",
               children: [],
               width: 700,
               height: 700,
               x: 22,
               y: 311
            })),
               v = e.createAtlas("tv_bg_atlas", t.imgBefore + "img/tv_bg.png", 700, 700, 2, 3, 6),
               _ = t.tv_bg = new Hilo.Sprite({
                  id: "tv_bg",
                  frames: v.getSprite("atlas"),
                  interval: 80,
                  timeBased: !0,
                  loop: !0,
                  alpha: 1
               }),
               w = t.tv_bg0 = new Hilo.Bitmap({
                  id: "tv_bg0",
                  image: t.imgBefore + "img/tv_bg0.png",
                  rect: [0, 0, 700, 700],
                  alpha: 1
               }),
               y = t.tv1 = new Hilo.Bitmap({
                  id: "tv1",
                  image: t.imgBefore + "img/tv1.png",
                  rect: [0, 0, 700, 700],
                  alpha: 0
               }),
               x = t.tv2 = new Hilo.Bitmap({
                  id: "tv2",
                  image: t.imgBefore + "img/tv2.png",
                  rect: [0, 0, 700, 700],
                  alpha: 0
               }),
               b = t.tv3 = new Hilo.Bitmap({
                  id: "tv3",
                  image: t.imgBefore + "img/tv3.png",
                  rect: [0, 0, 700, 700],
                  alpha: 0
               });
            t.tv_wrap.addChild(_, w, y, x, b);
            var T = t.gui1 = new Hilo.Bitmap({
               id: "gui1",
               image: t.imgBefore + "img/gui1.png",
               x: -31,
               y: 385,
               rect: [0, 0, 867, 873],
               alpha: 0
            }),
               E = e.createAtlas("guihuo_atlas", t.imgBefore + "img/guihuo.png", 750, 1448, 2, 3, 6),
               C = t.guihuo = new Hilo.Sprite({
                  id: "guihuo",
                  frames: E.getSprite("atlas"),
                  interval: 80,
                  timeBased: !0,
                  loop: !0,
                  alpha: 0
               }),
               A = t.peo_wrap1 = new Hilo.Container({
                  id: "peo_wrap1",
                  children: [],
                  width: 674,
                  height: 703,
                  pivotX: 180,
                  pivotY: 560,
                  x: -457,
                  y: 1357,
                  alpha: 0
               }),
               S = t.peo1 = new Hilo.Bitmap({
                  id: "peo1",
                  image: t.imgBefore + "img/peo1.png",
                  x: 0,
                  y: 0,
                  rect: [0, 0, 674, 703],
                  alpha: 1
               }),
               B = e.createAtlas("han_atlas", t.imgBefore + "img/han.png", 300, 600, 6, 11, 63),
               P = t.han = new Hilo.Sprite({
                  id: "han",
                  frames: B.getSprite("atlas"),
                  interval: 40,
                  timeBased: !0,
                  x: 20,
                  y: 20,
                  loop: !1,
                  paused: !0,
                  alpha: 1
               });
            t.han.setFrameCallback(62, function () {
               t.han.alpha = 0
            });
            var k = t.peo1_2 = new Hilo.Bitmap({
               id: "peo1_2",
               image: t.imgBefore + "img/peo1_2.png",
               x: 0,
               y: 0,
               rect: [0, 0, 674, 703],
               alpha: 0
            });
            t.peo_wrap1.addChild(S, k, P);
            var D = t.peo1_3 = new Hilo.Bitmap({
               id: "peo1_3",
               image: t.imgBefore + "img/peo1_3.png",
               x: 0,
               y: 704,
               rect: [0, 0, 750, 744],
               alpha: 0
            }),
               H = t.btnwrap1 = new Hilo.Container({
                  id: "btnwrap1",
                  children: [],
                  width: 750,
                  height: 593,
                  x: 0,
                  y: 644,
                  alpha: 0
               }),
               R = t.btntext1 = new Hilo.Bitmap({
                  id: "btntext1",
                  image: t.images.btntext,
                  rect: [0, 300, 750, 593],
                  alpha: 1
               }),
               L = t.btn1 = new Hilo.Bitmap({
                  id: "btn1",
                  image: t.images.btn,
                  rect: [344, 0, 113, 230],
                  pivotX: 56,
                  pivotY: 115,
                  x: 386,
                  y: 467,
                  alpha: 1
               });
            t.btnwrap1.addChild(R, L), t.btnwrap1.on(Hilo.event.POINTER_START, t.showScene2), t.scene1.addChild(m, T, C, A, D, H);
            var I = (t.scene2 = new Hilo.Container({
               id: "scene2",
               children: [],
               width: t.winW,
               height: t.winH,
               x: 0,
               y: 724 + e.visibleH / 2
            }).addTo(t.stage), t.jiangshi0 = new Hilo.Bitmap({
               id: "jiangshi0",
               image: t.imgBefore + "img/jiangshi0.png",
               rect: [0, 0, 750, 1448],
               pivotX: 375,
               pivotY: 1448,
               x: 375,
               y: 2244,
               alpha: 1
            })),
               M = t.jiangshi1 = new Hilo.Bitmap({
                  id: "jiangshi1",
                  image: t.imgBefore + "img/jiangshi1.png",
                  rect: [0, 0, 750, 1448],
                  pivotX: 375,
                  pivotY: 1448,
                  x: 375,
                  y: 1790,
                  alpha: 0
               }),
               N = e.createAtlas("peo2_atlas", t.imgBefore + "img/peo2_1.png", 300, 400, 6, 8, 44),
               O = t.peo2 = new Hilo.Sprite({
                  id: "peo2",
                  frames: N.getSprite("atlas"),
                  x: 225,
                  y: 290,
                  interval: 40,
                  timeBased: !0,
                  loop: !0,
                  alpha: 1
               }),
               j = t.peo2_2 = new Hilo.Bitmap({
                  id: "peo2_2",
                  image: t.images.peo2,
                  pivotX: 119,
                  pivotY: 207,
                  rect: [0, 0, 238, 414],
                  x: 369,
                  y: 524,
                  alpha: 0
               }),
               F = t.tanhao = new Hilo.Bitmap({
                  id: "tanhao",
                  image: t.imgBefore + "img/tanhao.png",
                  rect: [0, 0, 110, 110],
                  x: 390,
                  y: 240,
                  alpha: 0
               }),
               X = t.peo2_3 = new Hilo.Bitmap({
                  id: "peo2_3",
                  image: t.images.peo2,
                  pivotX: 85,
                  pivotY: 222,
                  rect: [238, 0, 190, 444],
                  x: 362,
                  y: 394,
                  alpha: 0
               }),
               Y = t.peo2_4 = new Hilo.Bitmap({
                  id: "peo2_4",
                  image: t.images.peo2,
                  pivotX: 68,
                  pivotY: 140,
                  rect: [428, 0, 136, 281],
                  x: 333,
                  y: 196,
                  alpha: 0
               }),
               U = t.peo2_5 = new Hilo.Bitmap({
                  id: "peo2_5",
                  image: t.images.peo2,
                  pivotX: 47,
                  pivotY: 102,
                  rect: [564, 0, 94, 204],
                  x: 353,
                  y: 25,
                  alpha: 0
               }),
               W = t.btnwrap2 = new Hilo.Container({
                  id: "btnwrap2",
                  children: [],
                  width: 230,
                  height: 278,
                  x: 245,
                  y: 187,
                  alpha: 0
               }),
               $ = t.btntext2 = new Hilo.Bitmap({
                  id: "btntext2",
                  image: t.images.btntext,
                  rect: [500, 0, 230, 278],
                  alpha: 1
               }),
               V = t.btn2 = new Hilo.Bitmap({
                  id: "btn2",
                  image: t.images.btn,
                  rect: [0, 0, 113, 230],
                  pivotX: 56,
                  pivotY: 115,
                  x: 130,
                  y: 115,
                  alpha: 1
               });
            t.btnwrap2.addChild($, V), t.btnwrap2.on(Hilo.event.POINTER_START, t.showScene3), t.scene2.addChild(I, M, O, j, F, X, Y, U, W);
            var z = (t.scene3 = new Hilo.Container({
               id: "scene3",
               children: [],
               width: t.winW,
               height: t.winH,
               x: 0,
               y: -724 - e.visibleH / 2
            }).addTo(t.stage), t.hua1 = new Hilo.Bitmap({
               id: "hua1",
               image: t.imgBefore + "img/hua1.png",
               rect: [0, 0, 337, 457],
               x: 17,
               y: 245,
               alpha: 1
            })),
               G = t.hua2 = new Hilo.Bitmap({
                  id: "hua2",
                  image: t.imgBefore + "img/hua2.png",
                  rect: [0, 0, 317, 526],
                  x: 375,
                  y: 215,
                  alpha: 1
               }),
               q = t.jiangshiface = new Hilo.Bitmap({
                  id: "jiangshiface",
                  image: t.imgBefore + "img/jiangshiface.png",
                  rect: [0, 0, 65, 117],
                  x: 140,
                  y: 357,
                  alpha: 0
               }),
               Z = e.createAtlas("jiangshi_atlas", t.imgBefore + "img/jiangshi4_1.png", 300, 525, 6, 6, 32),
               J = t.jiangshi4 = new Hilo.Sprite({
                  id: "jiangshi4",
                  frames: Z.getSprite("atlas"),
                  x: 15,
                  y: 5,
                  scaleX: 2,
                  scaleY: 2,
                  interval: 40,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 0
               }),
               Q = t.xiaochouface = new Hilo.Bitmap({
                  id: "xiaochouface",
                  image: t.imgBefore + "img/xiaochouface.png",
                  rect: [0, 0, 158, 127],
                  x: 478,
                  y: 424,
                  alpha: 0
               }),
               K = t.hand_wrap = new Hilo.Container({
                  id: "hand_wrap",
                  children: [],
                  width: 176,
                  height: 104,
                  x: 460,
                  y: 539
               }),
               tt = t.hand1 = new Hilo.Bitmap({
                  id: "hand1",
                  image: t.imgBefore + "img/hand1.png",
                  rect: [0, 0, 74, 94],
                  pivotX: 34,
                  pivotY: 14,
                  x: 34,
                  y: 14,
                  alpha: 1
               }),
               et = t.hand2 = new Hilo.Bitmap({
                  id: "hand2",
                  image: t.imgBefore + "img/hand2.png",
                  rect: [0, 0, 173, 69],
                  x: 3,
                  y: 35,
                  alpha: 1
               }),
               nt = t.hand3 = new Hilo.Bitmap({
                  id: "hand3",
                  image: t.imgBefore + "img/hand3.png",
                  rect: [0, 0, 176, 104],
                  x: 0,
                  y: 0,
                  alpha: 1
               });
            t.hand_wrap.addChild(tt, et, nt);
            var it = e.createAtlas("xiangkuang_atlas", t.imgBefore + "img/xiangkuang.png", 260, 350, 7, 2, 12),
               rt = t.xiangkuang = new Hilo.Sprite({
                  id: "xiangkuang",
                  frames: it.getSprite("atlas"),
                  x: 430,
                  y: 383,
                  interval: 80,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 1
               }),
               at = t.peo3_1 = new Hilo.Bitmap({
                  id: "peo3_1",
                  image: t.images.peo3,
                  rect: [0, 0, 200, 470],
                  x: 269,
                  y: 1182,
                  alpha: 0
               }),
               ot = t.peo3_2 = new Hilo.Bitmap({
                  id: "peo3_2",
                  image: t.images.peo3,
                  rect: [200, 0, 150, 290],
                  x: 266,
                  y: 1013,
                  alpha: 0
               }),
               st = t.peo3_3 = new Hilo.Bitmap({
                  id: "peo3_3",
                  image: t.images.peo3,
                  rect: [350, 0, 130, 290],
                  x: 292,
                  y: 865,
                  alpha: 0
               }),
               lt = t.peo3_4 = new Hilo.Bitmap({
                  id: "peo3_4",
                  image: t.images.peo3,
                  rect: [650, 470, 138, 250],
                  x: 279,
                  y: 799,
                  alpha: 0
               }),
               ht = t.wenhao_wrap = new Hilo.Container({
                  id: "wenhao_wrap",
                  children: [],
                  width: 154,
                  height: 85,
                  x: 262,
                  y: 731
               }),
               ut = t.wenhao1 = new Hilo.Bitmap({
                  id: "wenhao1",
                  image: t.images.wenhao,
                  rect: [0, 0, 42, 85],
                  x: 0,
                  y: 0,
                  alpha: 0
               }),
               ct = t.wenhao2 = new Hilo.Bitmap({
                  id: "wenhao2",
                  image: t.images.wenhao,
                  rect: [72, 0, 27, 85],
                  x: 72,
                  y: 0,
                  alpha: 0
               }),
               dt = t.wenhao3 = new Hilo.Bitmap({
                  id: "wenhao3",
                  image: t.images.wenhao,
                  rect: [112, 0, 42, 85],
                  x: 113,
                  y: 0,
                  alpha: 0
               });
            t.wenhao_wrap.addChild(ut, ct, dt);
            var pt = t.peo3_5 = new Hilo.Bitmap({
               id: "peo3_5",
               image: t.images.peo3,
               rect: [480, 0, 170, 290],
               x: 282,
               y: 779,
               alpha: 0
            }),
               ft = t.peo3_6 = new Hilo.Bitmap({
                  id: "peo3_6",
                  image: t.images.peo3,
                  rect: [650, 0, 138, 290],
                  x: 294,
                  y: 810,
                  alpha: 0
               }),
               gt = t.peo3_7 = new Hilo.Bitmap({
                  id: "peo3_7",
                  image: t.images.peo3,
                  rect: [788, 0, 175, 290],
                  x: 344,
                  y: 750,
                  alpha: 0
               }),
               mt = t.peo3_8 = new Hilo.Bitmap({
                  id: "peo3_8",
                  image: t.images.peo3,
                  rect: [0, 470, 210, 230],
                  x: 366,
                  y: 807,
                  alpha: 0
               }),
               vt = t.peo3_9 = new Hilo.Bitmap({
                  id: "peo3_9",
                  image: t.images.peo3,
                  rect: [210, 470, 140, 205],
                  x: 562,
                  y: 823,
                  alpha: 0
               }),
               _t = t.peo3_10 = new Hilo.Bitmap({
                  id: "peo3_10",
                  image: t.images.peo3,
                  rect: [350, 470, 220, 240],
                  x: 621,
                  y: 807,
                  alpha: 0
               }),
               wt = t.btnwrap3 = new Hilo.Container({
                  id: "btnwrap3",
                  children: [],
                  width: 471,
                  height: 593,
                  x: 280,
                  y: 687,
                  alpha: 0
               }),
               yt = t.btntext3 = new Hilo.Bitmap({
                  id: "btntext3",
                  image: t.images.btntext,
                  rect: [800, 300, 471, 593],
                  alpha: 1
               }),
               xt = t.btn3 = new Hilo.Bitmap({
                  id: "btn3",
                  image: t.images.btn,
                  rect: [113, 110, 231, 110],
                  pivotX: 115,
                  pivotY: 55,
                  x: 314,
                  y: 402,
                  alpha: 1
               });
            t.btnwrap3.addChild(yt, xt), t.btnwrap3.on(Hilo.event.POINTER_START, t.showScene4), t.scene3.addChild(q, z, G, J, Q, K, rt, at, ot, st, lt, ht, pt, ft, gt, mt, vt, _t, wt);
            var bt = (t.scene4 = new Hilo.Container({
               id: "scene4",
               children: [],
               width: t.winW,
               height: t.winH,
               x: 750,
               y: 0
            }).addTo(t.stage), t.bandao_wrap = new Hilo.Container({
               id: "bandao_wrap",
               children: [],
               width: 145,
               height: 132,
               pivotX: 105,
               pivotY: 132,
               x: 597,
               y: 1180
            })),
               Tt = e.createAtlas("bandao_atlas", t.imgBefore + "img/bandao.png", 80, 80, 25, 2, 30),
               Et = t.bandao = new Hilo.Sprite({
                  id: "bandao",
                  frames: Tt.getSprite("atlas"),
                  x: 65,
                  y: 52,
                  interval: 40,
                  timeBased: !0,
                  loop: !0,
                  alpha: 1
               }),
               Ct = t.tonggan = new Hilo.Bitmap({
                  id: "tonggan",
                  image: t.imgBefore + "img/tonggan.png",
                  rect: [0, 0, 80, 103],
                  pivotX: 40,
                  pivotY: 51,
                  x: 40,
                  y: 51,
                  scaleX: 0,
                  scaleY: 0,
                  alpha: 1
               });
            t.bandao_wrap.addChild(Et, Ct);
            var At = t.peo4_1 = new Hilo.Bitmap({
               id: "peo4_1",
               image: t.images.peo4,
               rect: [0, 0, 210, 227],
               x: -47,
               y: 761,
               alpha: 0
            }),
               St = t.peo4_2 = new Hilo.Bitmap({
                  id: "peo4_2",
                  image: t.images.peo4,
                  rect: [210, 0, 140, 277],
                  x: 139,
                  y: 801,
                  alpha: 0
               }),
               Bt = t.peo4_3 = new Hilo.Bitmap({
                  id: "peo4_3",
                  image: t.images.peo4,
                  rect: [350, 0, 300, 333],
                  x: 133,
                  y: 765,
                  alpha: 0
               }),
               Pt = t.peo4_4 = new Hilo.Bitmap({
                  id: "peo4_4",
                  image: t.images.peo4,
                  rect: [0, 333, 360, 491],
                  pivotX: 180,
                  pivotY: 245,
                  x: 454,
                  y: 895,
                  alpha: 0
               }),
               kt = t.btnwrap4 = new Hilo.Container({
                  id: "btnwrap4",
                  children: [],
                  width: 260,
                  height: 197,
                  x: 445,
                  y: 547,
                  alpha: 0
               }),
               Dt = t.btntext4 = new Hilo.Bitmap({
                  id: "btntext4",
                  image: t.images.btntext,
                  rect: [800, 0, 260, 197],
                  alpha: 1
               }),
               Ht = t.btn4 = new Hilo.Bitmap({
                  id: "btn4",
                  image: t.images.btn,
                  rect: [113, 110, 231, 110],
                  pivotX: 115,
                  pivotY: 55,
                  x: 130,
                  y: 142,
                  alpha: 1
               });
            t.btnwrap4.addChild(Dt, Ht), t.btnwrap4.on(Hilo.event.POINTER_START, t.showScene5), t.scene4.addChild(bt, At, St, Bt, Pt, kt);
            var Rt = (t.scene5 = new Hilo.Container({
               id: "scene5",
               children: [],
               width: t.winW,
               height: t.winH,
               x: 750,
               y: 0
            }).addTo(t.stage), t.xiaochouface5 = new Hilo.Bitmap({
               id: "xiaochouface5",
               image: t.imgBefore + "img/xiaochouface5.png",
               rect: [0, 0, 609, 701],
               pivotX: 305,
               pivotY: 350,
               x: 443,
               y: 774,
               alpha: 0
            })),
               Lt = t.peo5_1 = new Hilo.Bitmap({
                  id: "peo5_1",
                  image: t.images.peo5,
                  rect: [0, 0, 350, 236],
                  pivotX: 175,
                  pivotY: 228,
                  x: 523,
                  y: 984,
                  alpha: 1
               }),
               It = t.peo5_2 = new Hilo.Bitmap({
                  id: "peo5_2",
                  image: t.images.peo5,
                  rect: [350, 0, 375, 327],
                  pivotX: 187,
                  pivotY: 163,
                  x: 543,
                  y: 933,
                  alpha: 0
               }),
               Mt = t.zhenjing = new Hilo.Bitmap({
                  id: "zhenjing",
                  image: t.images.peo5,
                  rect: [0, 250, 181, 104],
                  x: 518,
                  y: 708,
                  alpha: 0
               }),
               Nt = t.xiaochou5 = new Hilo.Bitmap({
                  id: "xiaochou5",
                  image: t.imgBefore + "img/xiaochou5.png",
                  rect: [0, 0, 358, 517],
                  x: 43,
                  y: 510,
                  alpha: 0
               }),
               Ot = e.createAtlas("peo5_3_atlas", t.imgBefore + "img/peo5_3.png", 320, 320, 6, 5, 25),
               jt = t.peo5_3 = new Hilo.Sprite({
                  id: "peo5_3",
                  frames: Ot.getSprite("atlas"),
                  pivotX: 160,
                  pivotY: 160,
                  x: 525,
                  y: 982,
                  interval: 40,
                  timeBased: !0,
                  alpha: 0
               }),
               Ft = e.createAtlas("peo5_4_atlas", t.imgBefore + "img/peo5_4.png", 600, 400, 3, 4, 12),
               Xt = t.peo5_4 = new Hilo.Sprite({
                  id: "peo5_4",
                  frames: Ft.getSprite("atlas"),
                  pivotX: 300,
                  pivotY: 200,
                  x: 665,
                  y: 1024,
                  interval: 40,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 0
               }),
               Yt = e.createAtlas("bang5_atlas", t.imgBefore + "img/bang5.png", 300, 300, 6, 4, 20),
               Ut = t.bang5 = new Hilo.Sprite({
                  id: "bang5",
                  frames: Yt.getSprite("atlas"),
                  x: 280,
                  y: 740,
                  interval: 40,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 0
               });
            t.bang5.setFrameCallback(19, function () {
               t.bang5.alpha = 0, t.yan5.alpha = 1, t.yan5.play()
            });
            var Wt = e.createAtlas("yan5_atlas", t.imgBefore + "img/yan5.png", 700, 700, 2, 11, 22),
               $t = t.yan5 = new Hilo.Sprite({
                  id: "yan5",
                  frames: Wt.getSprite("atlas"),
                  x: 100,
                  y: 450,
                  interval: 80,
                  timeBased: !0,
                  loop: !1,
                  paused: !0,
                  alpha: 0
               }),
               Vt = t.black = new Hilo.Bitmap({
                  id: "black",
                  image: t.imgBefore + "img/black.png",
                  rect: [0, 0, 750, 1448],
                  alpha: 0
               }),
               zt = t.btnwrap5 = new Hilo.Container({
                  id: "btnwrap5",
                  children: [],
                  width: 475,
                  height: 258,
                  x: 154,
                  y: 487,
                  alpha: 0
               }),
               Gt = t.btntext5 = new Hilo.Bitmap({
                  id: "btntext5",
                  image: t.images.btntext,
                  rect: [800, 1e3, 475, 258],
                  alpha: 1
               }),
               qt = t.btn5 = new Hilo.Bitmap({
                  id: "btn5",
                  image: t.images.btn,
                  rect: [113, 0, 231, 110],
                  pivotX: 115,
                  pivotY: 55,
                  x: 226,
                  y: 203,
                  alpha: 1
               });
            t.btnwrap5.addChild(Gt, qt), t.scene5.addChild(Rt, Lt, It, Mt, jt, Xt, Nt, Ut, $t, Vt, zt)
         },
         peo_alpha_tween: function (t, e, n, i) {
            Hilo.Tween.to(t, {
               alpha: 1
            }, {
                  duration: 10,
                  delay: e,
                  onComplete: function () {
                     Hilo.Tween.to(t, {
                        alpha: 0
                     }, {
                           duration: 10,
                           delay: n,
                           onComplete: function () {
                              i && i()
                           }
                        })
                  }
               })
         },
         showBtn: function (t, e, n) {
            var i = n || 0;
            Hilo.Tween.to(t, {
               alpha: 1
            }, {
                  duration: 240,
                  delay: i
               }), Hilo.Tween.to(e, {
                  scaleX: 1.05,
                  scaleY: 1.05
               }, {
                     duration: 200,
                     delay: i,
                     reverse: !0,
                     loop: !0
                  })
         },
         showScene1: function (t) {
            var n = e;
            n.nowScene = 1, n.isPlayAudio && (n.nowAudio = $(".a1")[0], n.nowAudio.play()), n.btnwrap0.alpha = 0, Hilo.Tween.to(n.scene1, {
               x: 0
            }, {
                  duration: 800,
                  onComplete: function () {
                     n.peo_wrap1.alpha = 1, n.more_anim(n.peo_wrap1, [{
                        x: 79,
                        y: 1357
                     }, {
                        x: 179,
                        y: 1357
                     }, {
                        x: 179,
                        y: 1317
                     }, {
                        x: 179,
                        y: 1357
                     }, {
                        x: 179,
                        y: 1317
                     }, {
                        x: 179,
                        y: 1357
                     }, {
                        x: 179,
                        y: 1357
                     }], [1e3, 3200, 130, 130, 130, 130, 380])
                  }
               }), setTimeout(function () {
                  n.han.play()
               }, 3e3), setTimeout(function () {
                  n.peo1.alpha = 0, n.peo1_2.alpha = 1
               }, 5130), Hilo.Tween.to(n.tv_bg0, {
                  alpha: 0
               }, {
                     duration: 0,
                     delay: 2160
                  }), n.peo_alpha_tween(n.tv1, 2640, 270), n.peo_alpha_tween(n.tv2, 3160, 710), n.peo_alpha_tween(n.tv3, 4360, 470), Hilo.Tween.to(n.peo_wrap1, {
                     alpha: 0
                  }, {
                        duration: 10,
                        delay: 5800
                     }), Hilo.Tween.to(n.peo1_3, {
                        alpha: 1
                     }, {
                           duration: 10,
                           delay: 5800,
                           onComplete: function () {
                              Hilo.Tween.to(n.peo1_3, {
                                 x: 154,
                                 y: 1286
                              }, {
                                    duration: 190
                                 })
                           }
                        }), Hilo.Tween.to([n.gui1, n.guihuo], {
                           alpha: 1
                        }, {
                              duration: 0,
                              delay: 5130
                           }), Hilo.Tween.to(n.peo1_3, {
                              alpha: 0
                           }, {
                                 duration: 0,
                                 delay: 6e3,
                                 onComplete: function () {
                                    n.showBtn(n.btnwrap1, n.btn1)
                                 }
                              })
         },
         showScene2: function (t) {
            var n = e;
            n.nowScene = 2, $(".a1")[0].pause(), n.isPlayAudio && (n.nowAudio = $(".a2")[0], n.nowAudio.play()), n.btnwrap1.alpha = 0, Hilo.Tween.to(n.scene1, {
               y: -724 - n.visibleH / 2
            }, {
                  duration: 800
               }), Hilo.Tween.to(n.scene2, {
                  y: 0
               }, {
                     duration: 800,
                     onComplete: function () {
                        n.more_anim(n.jiangshi0, [{
                           y: 1983
                        }, {
                           y: 2010
                        }, {
                           y: 2010
                        }, {
                           y: 1762
                        }, {
                           y: 1790
                        }, {
                           y: 1790
                        }], [520, 160, 520, 50, 180, 1040], function () {
                           n.jiangshi0.alpha = 0, n.jiangshi1.alpha = 1, n.more_anim(n.jiangshi1, [{
                              y: 1750
                           }, {
                              y: 1790
                           }, {
                              y: 1750
                           }, {
                              y: 1790
                           }, {
                              y: 1658
                           }, {
                              y: 1678
                           }, {
                              y: 1538
                           }, {
                              y: 1558
                           }], [80, 80, 80, 80, 280, 180, 420, 160])
                        })
                     }
                  }), setTimeout(function () {
                     n.peo2.alpha = 0, n.peo2_2.alpha = 1, n.tanhao.alpha = 1, n.more_anim(n.peo2_2, [{
                        y: 484
                     }, {
                        y: 524
                     }, {
                        y: 524,
                        alpha: 1
                     }, {
                        y: 524,
                        alpha: 0
                     }], [120, 120, 480, 0]), n.more_anim(n.tanhao, [{
                        alpha: 1
                     }, {
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }], [120, 120, 120, 120]), n.peo_alpha_tween(n.peo2_3, 720, 110), n.peo_alpha_tween(n.peo2_4, 850, 140), n.peo_alpha_tween(n.peo2_5, 1e3, 140), n.showBtn(n.btnwrap2, n.btn2, 1200)
                  }, 4e3)
         },
         showScene3: function (t) {
            var n = e;
            n.nowScene = 3, $(".a2")[0].pause(), n.isPlayAudio && (n.nowAudio = $(".a3")[0], n.nowAudio.play()), n.btnwrap2.alpha = 0, Hilo.Tween.to(n.scene2, {
               y: e.visibleH
            }, {
                  duration: 800
               }), Hilo.Tween.to(n.scene3, {
                  y: 0
               }, {
                     duration: 800
                  }), n.peo_alpha_tween(n.peo3_1, 800, 110), n.peo_alpha_tween(n.peo3_2, 920, 110), n.peo_alpha_tween(n.peo3_3, 1040, 150), n.peo_alpha_tween(n.peo3_4, 1200, 1590), n.peo_alpha_tween(n.wenhao1, 1440, 550), n.peo_alpha_tween(n.wenhao2, 1600, 390), n.peo_alpha_tween(n.wenhao3, 1720, 270, function () {
                     n.wenhao1.alpha = 1, n.wenhao2.alpha = 1, n.wenhao3.alpha = 1, n.more_anim(n.wenhao_wrap, [{
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }], [150, 160, 10, 150, 160, 10])
                  }), n.peo_alpha_tween(n.peo3_5, 2800, 1590), n.peo_alpha_tween(n.peo3_6, 4400, 1230), n.more_anim(n.peo3_7, [{
                     alpha: 0,
                     x: 344,
                     y: 750
                  }, {
                     alpha: 1,
                     x: 344,
                     y: 750
                  }, {
                     alpha: 1,
                     x: 344,
                     y: 750
                  }, {
                     alpha: 1,
                     x: 384,
                     y: 738
                  }, {
                     alpha: 1,
                     x: 418,
                     y: 760
                  }, {
                     alpha: 0,
                     x: 418,
                     y: 760
                  }], [5640, 10, 310, 80, 80, 10]), n.peo_alpha_tween(n.peo3_8, 6120, 230), n.peo_alpha_tween(n.peo3_9, 6360, 110), n.peo_alpha_tween(n.peo3_10, 6480, 110), Hilo.Tween.to(n.hand3, {
                     alpha: 0
                  }, {
                        duration: 520,
                        delay: 2800,
                        onComplete: function () {
                           n.more_anim(n.hand2, [{
                              x: 28
                           }, {
                              x: 3
                           }, {
                              x: 28
                           }, {
                              x: 3
                           }, {
                              x: 28
                           }, {
                              x: 3
                           }], [400, 400, 400, 400, 400, 400]), n.more_anim(n.hand1, [{
                              rotation: -18
                           }, {
                              rotation: 0
                           }, {
                              rotation: -20
                           }, {
                              rotation: 0
                           }, {
                              rotation: -20
                           }, {
                              rotation: 0
                           }], [400, 400, 400, 400, 400, 400])
                        }
                     }), n.more_anim(n.xiaochouface, [{
                        alpha: 0,
                        y: 424
                     }, {
                        alpha: 1,
                        y: 424
                     }, {
                        alpha: 1,
                        y: 424
                     }, {
                        alpha: 1,
                        y: 432
                     }, {
                        alpha: 1,
                        y: 424
                     }, {
                        alpha: 1,
                        y: 432
                     }, {
                        alpha: 1,
                        y: 424
                     }], [6720, 240, 240, 120, 120, 120, 120]), n.more_anim(n.jiangshiface, [{
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }], [4400, 360, 600, 10]), Hilo.Tween.to(n.jiangshi4, {
                        alpha: 1
                     }, {
                           duration: 10,
                           delay: 5360,
                           onComplete: function () {
                              n.jiangshi4.play()
                           }
                        }), n.showBtn(n.btnwrap3, n.btn3, 7680)
         },
         showScene4: function (t) {
            var n = e;
            n.nowScene = 4, $(".a3")[0].pause(), n.isPlayAudio && (n.nowAudio = $(".a4")[0], n.nowAudio.play()), n.btnwrap3.alpha = 0, Hilo.Tween.to(n.scene3, {
               x: -750
            }, {
                  duration: 800
               }), Hilo.Tween.to(n.scene4, {
                  x: 0
               }, {
                     duration: 800
                  }), n.more_anim(n.bandao_wrap, [{
                     x: 421,
                     y: 1144
                  }, {
                     x: 292,
                     y: 1172
                  }], [2520, 1320]), n.more_anim(n.tonggan, [{
                     rotation: 0,
                     scaleX: 0,
                     scaleY: 0
                  }, {
                     rotation: 0,
                     scaleX: 1,
                     scaleY: 1
                  }, {
                     rotation: -14
                  }, {
                     rotation: 0
                  }, {
                     rotation: -14
                  }, {
                     rotation: 0,
                     scaleX: 1,
                     scaleY: 1
                  }, {
                     rotation: 0,
                     scaleX: 0,
                     scaleY: 0
                  }, {
                     rotation: 0,
                     scaleX: 0,
                     scaleY: 0
                  }, {
                     rotation: 0,
                     scaleX: 1,
                     scaleY: 1
                  }, {
                     rotation: -14
                  }, {
                     rotation: 0
                  }, {
                     rotation: -14
                  }, {
                     rotation: 0,
                     scaleX: 1,
                     scaleY: 1
                  }, {
                     rotation: 0,
                     scaleX: 0,
                     scaleY: 0
                  }], [960, 120, 80, 80, 80, 80, 120, 800, 120, 80, 80, 80, 80, 120]), n.peo_alpha_tween(n.peo4_1, 2110, 120), n.peo_alpha_tween(n.peo4_2, 2240, 110), n.peo_alpha_tween(n.peo4_3, 2360, 110), n.more_anim(n.peo4_4, [{
                     rotation: 0,
                     alpha: 0,
                     x: 454,
                     y: 895
                  }, {
                     rotation: 0,
                     alpha: 1,
                     x: 454,
                     y: 895
                  }, {
                     rotation: 150,
                     alpha: 1,
                     x: 994,
                     y: 875
                  }, {
                     rotation: 150,
                     alpha: 0,
                     x: 994,
                     y: 875
                  }], [2480, 10, 510, 10]), n.showBtn(n.btnwrap4, n.btn4, 3210)
         },
         showScene5: function (t) {
            var n = e;
            n.nowScene = 5, $(".a4")[0].pause(), n.isPlayAudio && (n.nowAudio = $(".a5")[0], n.nowAudio.play()), n.btnwrap4.alpha = 0, Hilo.Tween.to(n.scene4, {
               x: -750
            }, {
                  duration: 800
               }), Hilo.Tween.to(n.scene5, {
                  x: 0
               }, {
                     duration: 800
                  }), Hilo.Tween.to(n.peo5_1, {
                     alpha: 0
                  }, {
                        duration: 10,
                        delay: 1360
                     }), n.peo_alpha_tween(n.peo5_2, 1360, 990), n.peo_alpha_tween(n.peo5_3, 2360, 2390), n.more_anim(n.zhenjing, [{
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }, {
                        alpha: 1
                     }, {
                        alpha: 1
                     }, {
                        alpha: 0
                     }], [1670, 10, 120, 10, 160, 110, 10, 150, 120, 10]), n.more_anim(n.xiaochou5, [{
                        alpha: 0
                     }, {
                        alpha: .8
                     }, {
                        alpha: .25
                     }, {
                        alpha: 1
                     }, {
                        alpha: .5
                     }, {
                        alpha: 1
                     }], [1400, 200, 200, 160, 160, 120]), Hilo.Tween.to(n.bang5, {
                        alpha: 1
                     }, {
                           duration: 0,
                           delay: 3960,
                           onComplete: function () {
                              n.bang5.play()
                           }
                        }), Hilo.Tween.to(n.peo5_4, {
                           alpha: 1
                        }, {
                              duration: 10,
                              delay: 4760,
                              onComplete: function () {
                                 n.peo5_4.play()
                              }
                           }), n.more_anim(n.xiaochouface5, [{
                              alpha: 0,
                              x: 443,
                              y: 774
                           }, {
                              alpha: 1,
                              x: 481,
                              y: 652
                           }, {
                              alpha: 0,
                              x: 520,
                              y: 472
                           }, {
                              alpha: 1,
                              x: 536,
                              y: 400
                           }, {
                              alpha: 0,
                              x: 558,
                              y: 360
                           }, {
                              alpha: 1,
                              x: 571,
                              y: 360
                           }], [5370, 270, 280, 120, 160, 90], function () {
                              $(".m-btn").addClass("end"), setTimeout(function () {
                                 $(".m-btn").css("display", "none")
                              }, 1e3), Hilo.Tween.to(n.black, {
                                 alpha: 1
                              }, {
                                    duration: 300,
                                    onComplete: function () {
                                       n.showBtn(n.btnwrap5, n.btn5), $(".btn5").css("display", "block")
                                    }
                                 })
                           })
         },
         videoEnd: function () {
            var t = e;
            t.video67.addEventListener("ended", function () {
               $(".end-btn").addClass("cur"), $(".videos").addClass("end"), setTimeout(function () {
                  $(t.video67).remove()
               }, 500)
            })
         }
      };
      $(t)
   }();