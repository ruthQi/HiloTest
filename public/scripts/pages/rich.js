import { data, resultData, imgSrc} from './data.js';
import TWEEN from '@tweenjs/tween.js'
import Move from './move';

class Rich{
   constructor(){
      //console.log(data, resultData)
      //super();
      this.imgNum = 0;
      this.loadImg();
      this.dialogWrapper = $('.dialog_wrap');
      this.dialogCount = $('#dialog_cont');
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.poorPercent = 0;//_
      this.richPercent = 0;//y
      this.realPoorPercent = 0;//x
      this.realRichPercent = 0;//T
      this.resultImg;
      this.scrollTo();
      this.loadScene();
      this.update();
      this.bindEvent();
      
   }
   scrollTo(){
      $.fn.scrollTo = function(obj, timer){
         let config = {
            toT: 0,
            durTime: timer || 500,
            delay: 15,
            callback: null
         },
         self = this,
         scrollTop = this.scrollTop();
         obj = Object.assign({}, config, obj);
         //self.scrollTop(obj.toT)
         new TWEEN.Tween({
            scrollTop: scrollTop
         }).to({
            scrollTop: obj.toT
         }, 100).onUpdate(function (object) {
            self.scrollTop(object.scrollTop)
         }).start();
         //return self;
      }
   }
   loadImg(){ 
      let imgDom = $('#loading_img');
      let img = new Image();
      img.src = imgSrc[this.imgNum];
      this.imgNum++;
      imgDom.append($(img))
      let loadTimer = null;
      loadTimer = setInterval(()=>{
         if ($(img).height()){
            $("#loading_img").html("");
            clearInterval(loadTimer);
            this.imgNum < imgSrc.length && this.loadImg()
         }
      }, 10)
   }
   loadScene(){
      if(this.height > 1300){
         $('body').addClass('h1300');
      }else{
         $('body').removeClass('h1300')
      }
      setTimeout(() => {
         this.addScene(data[7][0]);
      }, 500);
   }
   update(){
      TWEEN.update();
      requestAnimationFrame(() => { this.update() });
   }
   bindEvent(){
      $("#dialog_cont").one("click", ".start_btn", (e)=>{
         console.log(e)
         let target = e.target;
         let ques = $(target).attr('quse-attr');
         let next = $(target).attr('next-attr');
         this.addScene(data[ques][next])
      });
      $("#dialog_cont").on("touchend", ".options", (e) => {
         let currentTar = e.currentTarget
         let $option = $(currentTar).find('.option');
         let manAttr = $option.attr('man-attr');
         let quse = $option.attr('quse-attr');
         let nextArr = $option.attr('next-attr');
         if (!$(this).parent().hasClass('hasclick')){
            $option.addClass("cur");
            $(this).addClass("cur");
            $(this).parent().addClass("hasclick");
            this.computedNum(manAttr);
            this.addScene(data[quse][nextArr]);
         }

      })
      $("#dialog_cont").one("click", ".makesure.cur",  (t) => {
         console.log('999999999')
         $(".shoushi").hide();
         //console.log(this.move)
         this.move.getRelationship(this.move.width);
         this.sun1Sprite.play();
         this.sun2Sprite.play();
         setTimeout( () => {
            this.addScene(data[3][4])
         }, 2e3)
      })
   }
   computedNum(manType){
      switch (manType) {
         case 'rich':
            this.richPercent += 1;
            break;
         case 'normal':
           this.richPercent += .5;
           this.poorPercent += .5;
           break;
         case 'poor':
            this.poorPercent += 1;
      }
      console.log(this.poorPercent + ';' + this.richPercent)
   }
   addScene(obj){
      switch (obj.type) {
         case "chatQ": 
            new RegExp("poorPercent").test(obj.content) && (obj.content = obj.content.replace(/poorPercent/, this.poorPercent));
            new RegExp("richPercent").test(obj.content) && (obj.content = obj.content.replace(/richPercent/, this.richPercent));
            new RegExp("resultImg").test(obj.content) && (obj.content = obj.content.replace(/resultImg/, this.resultImg))
            this.dialogCount.append('<div class="chat chatQ"><div class="head_img"><img src="' + obj.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + obj.name + '</div><div class="dialogue">' + obj.content + "</div></div></div>");
            break;
         case "chatA":
            this.dialogCount.append('<div class="chat chatA"><div class="clearfix"><div class="dialogue">' + obj.content + "</div></div></div>");
            break;
         case "chatB":
            this.dialogCount.append('<div class="chat chatA"><div class="clearfix"><div class="dialogue">' + obj.content + "</div></div></div>");
            break;
         case "option":
            this.dialogCount.append(obj.content);
            break;
         case "canvas":
            this.dialogCount.append(obj.content);
            this.loadCanvas();
            break;
         case "tip":
            this.dialogCount.append(obj.content);
            break;
         case "emoji":
            this.dialogCount.append('<div class="chat emoji"><div class="head_img"><img src="' + obj.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + obj.name + '</div><div class="dialogue">' + obj.content + "</div></div></div>");
            break;
         case "redbag":
            this.dialogCount.append('<div class="chat emoji redbag "><div class="head_img"><img src="' + obj.headImg + '" width="100%"></div><div class="clearfix"><div class="name">' + obj.name + '</div><div class="dialogue">' + obj.content + '</div><div class="dialogue_text">' + obj.text + "</div></div></div>")
      }
      if(obj.result == "true"){
         this.loadEnd();
      }
      this.dialogCountHeight = this.dialogCount.height();
      if(this.dialogCountHeight > this.height){
         var scrollHeight = this.dialogCount.height() - this.height;
         this.dialogWrapper.scrollTo({
            toT: scrollHeight
         }, obj.durTime);
      }
      if ("true" == obj.next) {
         let quesBlock = obj.quesBlock,
            quesNum = obj.quesNum;
         setTimeout( () => {
            this.addScene(data[quesBlock][quesNum])
         }, obj.timer)
      }
   }
   loadCanvas(){//s()
      let canvas = $("canvas")[0];
      let width = 750;
      let height = 530;
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      let stage = window.stage = new Hilo.Stage({
         canvas,
         width,
         height
      });
      let tickTime = new Hilo.Ticker(30);
      tickTime.addTick(stage);
      tickTime.addTick(Hilo.Tween);
      tickTime.start();
      stage.enableDOMEvent(Hilo.event.POINTER_START, !0);
      stage.enableDOMEvent(Hilo.event.POINTER_MOVE, !0);
      stage.enableDOMEvent(Hilo.event.POINTER_END, !0);

      let redsun1Texture = new Hilo.TextureAtlas({
         id: "redsun1_atlas",
         image: "images/pages/circle4.png",
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
      this.sun1Sprite = new Hilo.Sprite({
         id: "redsun",
         frames: redsun1Texture.getSprite("redsun1"),
         x: 400,
         y: 148,
         interval: 50,
         timeBased: !0,
         loop: !1,
         paused: !0
      }).addTo(stage);

      let redsun2Texture = new Hilo.TextureAtlas({
         id: "redsun2_atlas",
         image: "images/pages/circle3.png",
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

      this.sun2Sprite = new Hilo.Sprite({
         id: "redsun2",
         frames: redsun2Texture.getSprite("redsun2"),
         x: 100,
         y: 148,
         interval: 50,
         timeBased: !0,
         loop: !1,
         paused: !0
      }).addTo(stage);
      this.move = new Move(this.sun2Sprite, this.sun1Sprite, (type)=>{
         this.computedNum(type)
      });
   }
   loadEnd(){//o()
      this.realPoorPercent = parseFloat((this.poorPercent / 6 * 100).toFixed(2));
      this.realRichPercent = parseFloat(100 - this.realPoorPercent);
      let arr = [-2, -1, 0, 1, 2];
      if (this.realPoorPercent == 0 || this.realPoorPercent == 50 || this.realPoorPercent == 100){
         this.poorPercent = Math.round(this.realPoorPercent);
         this.richPercent = parseFloat(100 - this.poorPercent);
      }else{
         let round = arr[Math.floor(Math.random() * arr.length)];
         this.poorPercent = Math.round(this.realPoorPercent + round);
         this.richPercent = parseFloat(100 - this.poorPercent)
      }
      console.log("poorPercent:" + this.poorPercent + ",realPoorPercent:" + this.realPoorPercent);
      let num;
      if (this.realPoorPercent){
         num = 11;
      } else if (this.realPoorPercent > 83 && this.realPoorPercent < 92){
         num = 10;
      }else if( this.realPoorPercent == 75){
         num = 9;
      }else if( this.realPoorPercent == 66.67){
         num = 8;
      }else if( this.realPoorPercent == 58.33){
         num = 7;
      }else if( this.realPoorPercent == 50){
         num = 6;
      }else if(this.realPoorPercent == 41.67){
         num = 5;
      }else if( this.realPoorPercent == 33.33){
         num = 4;
      }else if(this.realPoorPercent == 25){
         num = 3;
      }else if(this.realPoorPercent == 16.67){
         num ==2;
      }else if(this.realPoorPercent == 8.33){
         num = 1;
      }else if(this.realPoorPercent == 0){
         num = 0
      }
      this.showResult(num);
   }
   showResult(num){
      console.log(num);
      let height = this.height < 1206 ? 1206 : this.height;
      var canvas = Hilo.createElement("canvas", {
         width: this.width,
         height: height
      });
      $("#myCanvas").append(canvas);
      let stage = new Hilo.Stage({
         canvas: canvas,
         width: this.width,
         height: height
      });
      stage.enableDOMEvent(Hilo.event.POINTER_START, !0);
      stage.enableDOMEvent(Hilo.event.POINTER_MOVE, !0);
      stage.enableDOMEvent(Hilo.event.POINTER_END, !0);
      let tick = new Hilo.Ticker(60);
      tick.addTick(Hilo.Tween);
      tick.addTick(stage);
      tick.start();
      if(this.height < 1300){
         var conHeight = 1206,
            conY = 0,
            imageR = "images/pages/r1206_2.jpg",
            wordY = 706,
            desY = 770,
            bgImage = "images/pages/r1206_100_3.jpg",
            poorPercentY = 240
      }else{
         var conHeight = 1334,
            conY = (height-1334)/2,
            imageR = "images/pages/r1334_2.jpg",
            wordY = 766,
            desY = 830,
            bgImage = "images/pages/r1334_100_3.jpg",
            poorPercentY = 280
      }
      let stageCon = (new Hilo.Container({
         id: "stage_bg",
         children: [],
         width: this.width,
         height: height,
         background: "#fff",
         x: 0,
         y: 0
      }).addTo(stage),
      new Hilo.Container({
         id: "resultC",
         children: [],
         width: this.width,
         height: conHeight,
         background: "#fff",
         x: 0,
         y: conY
      }).addTo(stage));
      new Hilo.Bitmap({
         id: "resultC_bg",
         image: imageR,
         rect: [0, 0, 750, conHeight],
         x: 0,
         y: 0
      }).addTo(stageCon);
      let resultObj = resultData[num];
      if ("" != resultObj.name) {
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
            y: wordY
         }).addTo(stageCon);
         new Hilo.Text({
            id: "chengwei",
            color: "#c3a26d",
            font: "36px/50px PingFangSC-Regular, sans-serif",
            lineSpacing: 2,
            outline: !1,
            text: resultObj.name,
            x: 130,
            y: wordY - 6,
            maxWidth: 400
         }).addTo(stageCon);
         new Hilo.Text({
            id: "nishi",
            color: "#444444",
            font: "28px/50px PingFangSC-Regular, sans-serif",
            lineSpacing: 2,
            outline: !1,
            maxWidth: 400,
            text: resultObj.title,
            x: 130 + 36 * resultObj.name.length,
            y: wordY
         }).addTo(stageCon);
         new Hilo.Text({
            id: "nishi",
            color: "#444444",
            font: " 28px/56px PingFangSC-Regular, sans-serif",
            lineSpacing: 2,
            outline: !1,
            maxWidth: 620,
            text: resultObj.des,
            pivotX: 0,
            pivotY: 0,
            x: 70,
            y: desY
         }).addTo(stageCon)
      } else {
         new Hilo.Bitmap({
            id: "result11_bg",
            image: bgImage,
            rect: [0, 0, 750, conHeight],
            x: 0,
            y: 0
         }).addTo(stageCon)
      }
      new Hilo.Text({
         id: "poorPercentText",
         color: "#666666",
         font: "bold 80px/86px PingFangSC-Regular, sans-serif",
         lineSpacing: 2,
         outline: !1,
         text: this.poorPercent,
         textAlign: "right",
         width: 145,
         x: 120,
         y: poorPercentY
      }).addTo(stageCon);
      new Hilo.Text({
         id: "richPercentText",
         color: "#c3a26d",
         font: "bold 80px/86px PingFangSC-Regular, sans-serif",
         lineSpacing: 2,
         outline: !1,
         text: this.richPercent,
         textAlign: "right",
         width: 145,
         x: 383,
         y: poorPercentY
      }).addTo(stageCon);
      setTimeout( () => {
         this.resultImg = canvas.toDataURL("image/jpeg");
         $("#bigImg").attr("src", this.resultImg);
      }, 2e3)
      
   }
}
new Rich();