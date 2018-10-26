import { data, resultData, imgSrc} from './data.js';
import TWEEN from '@tweenjs/tween.js'

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
      this.poorPercent = 0;
      this.richPercent = 0;
      this.resultImg;
      this.scrollTo();
      this.loadScene();
      this.update();
      
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
            this.dialogCount.append(t.content);
             //s();
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
   loadEnd(){//o()

   }

}

new Rich();