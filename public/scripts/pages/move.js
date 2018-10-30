class Move{
   constructor(sun2Sprite, sun1Sprite, callBack){
      this.startX = this.startY = this.moveX = this.moveY = null;
      this.previousPinchScale = 1;
      this.longTapTimeout = null;
      this.sun2Sprite = sun2Sprite;
      this.sun1Sprite = sun1Sprite;
      this.callBack = callBack;
      this.x = 0;
      this.y = 0;
      this.pinch = 1;
      this.angle = 0;
      this.width = 250;
      this.initWidth = 250
      this.bindEvent();
   }
   _getTime() {
      return new Date().getTime();
   }
   _getDistance(xLen, yLen) {
      return Math.sqrt(xLen * xLen + yLen * yLen);
   }
   /**
    * 获取向量的旋转方向
    */
   _getRotateDirection(vector1, vector2) {
      return vector1.x * vector2.y - vector2.x * vector1.y;
   }
   _getRotateAngle(vector1, vector2) {
      let direction = this._getRotateDirection(vector1, vector2);
      direction = direction > 0 ? -1 : 1;
      let len1 = this._getDistance(vector1.x, vector1.y);
      let len2 = this._getDistance(vector2.x, vector2.y);
      let mr = len1 * len2;
      if (mr === 0) return 0;
      let dot = vector1.x * vector2.x + vector1.y * vector2.y;
      let r = dot / mr;
      if (r > 1) r = 1;
      if (r < -1) r = -1;
      return Math.acos(r) * direction * 180 / Math.PI;
   }

   _onTouchStart(e) {
      $(".makesure").addClass("cur")
      if (window.stage) {
         let point = e.touches ? e.touches[0] : e;
         let redsun = window.stage.getChildById("redsun");
         this.x = redsun.x;
         this.y = redsun.y;
         this.startX = point.pageX;
         this.startY = point.pageY;
         window.clearTimeout(this.longTapTimeout);
         //两点接触
         if (e.touches.length > 1) {
            let point2 = e.touches[1];
            let xLen = Math.abs(point2.pageX - this.startX);
            let yLen = Math.abs(point2.pageY - this.startY);
            this.touchDistance = this._getDistance(xLen, yLen);
            this.touchVector = {
               x: point2.pageX - this.startX,
               y: point2.pageY - this.startY
            };
         } else {
            this.startTime = this._getTime();
            this.longTapTimeout = setTimeout(() => {
               //this._emitEvent('onLongPress');
            }, 800);
            if (this.previousTouchPoint) {
               if (Math.abs(this.startX - this.previousTouchPoint.startX) < 10 &&
                  Math.abs(this.startY - this.previousTouchPoint.startY) < 10 &&
                  Math.abs(this.startTime - this.previousTouchTime) < 300) {
                  //this._emitEvent('onDoubleTap');
               }
            }
            this.previousTouchTime = this.startTime;
            this.previousTouchPoint = {
               startX: this.startX,
               startY: this.startY
            };
         }
         $(".shoushi").hide()
      }
      
   }
   _onTouchMove(e) {
      console.log(e)
      if(window.stage){
         let timestamp = this._getTime();
         if (e.touches.length > 1) {
            let xLen = Math.abs(e.touches[0].pageX - e.touches[1].pageX);
            let yLen = Math.abs(e.touches[1].pageY - e.touches[1].pageY);
            let touchDistance = this._getDistance(xLen, yLen);
            console.log(this.touchDistance)
            if (this.touchDistance) {
               let pinchScale = touchDistance / this.touchDistance;
               //this._emitEvent('onPinch', { scale: pinchScale - this.previousPinchScale });
               this.onPinch({
                  pinch: pinchScale - this.previousPinchScale
               })
               console.log(pinchScale, (pinchScale - this.previousPinchScale))
               this.previousPinchScale = pinchScale;
            }
            if (this.touchVector) {
               let vector = {
                  x: e.touches[1].pageX - e.touches[0].pageX,
                  y: e.touches[1].pageY - e.touches[0].pageY
               };
               let angle = this._getRotateAngle(vector, this.touchVector);
               this.touchVector.x = vector.x;
               this.touchVector.y = vector.y;
            }
         } else {
            window.clearTimeout(this.longTapTimeout);
            let point = e.touches ? e.touches[0] : e;
            let deltaX = this.moveX === null ? 0 : point.pageX - this.moveX;
            let deltaY = this.moveY === null ? 0 : point.pageY - this.moveY;
            this.onMove({
               deltaX,
               deltaY
            })
            this.moveX = point.pageX;
            this.moveY = point.pageY;
         }
         e.preventDefault();
      }
      
   }
   _onTouchCancel(e) {
      window.stage && this._onTouchEnd(e);
   }
   _onTouchEnd(e) {
      /**
       * 在X轴或Y轴发生过移动
       */
      if (window.stage) {
         window.clearTimeout(this.longTapTimeout);
         let timestamp = this._getTime();
         if (this.moveX !== null && Math.abs(this.moveX - this.startX) > 10 ||
            this.moveY !== null && Math.abs(this.moveY - this.startY) > 10) {
            if (timestamp - this.startTime < 500) {
               this.onSwipe();
            }
         } else if (timestamp - this.startTime < 2000) {
            if (timestamp - this.startTime < 500) {
               this.onTap();
            }
         }
         this.startX = this.startY = this.moveX = this.moveY = null;
         this.width = this.width * this.previousPinchScale;
         console.log('-------------------------------------------', this.width, this.previousPinchScale)
         this.previousPinchScale = 1;
         this.width = this.initWidth * this.pinch
         console.log('-------------------------------------------', this.initWidth, this.pinch)
      }
   }
   bindEvent() {
      $("#filter").on("touchstart", this._onTouchStart.bind(this));
      $("#filter").on("touchmove", this._onTouchMove.bind(this));
      $("#filter").on("touchcancel", this._onTouchCancel.bind(this));
      $("#filter").on("touchend", this._onTouchEnd.bind(this));
   }
   onPinch(t) {
      let pinch = this.pinch + t.pinch;
      //this.pinch += t.pinch;
      let redsun = window.stage.getChildById("redsun");
      redsun.scaleX = this.pinch;
      redsun.scaleY = this.pinch;
      if (pinch > 530 / this.initWidth){
         this.pinch = 530 / this.initWidth
      }else{
         if (pinch < 0.2){
            this.pinch = .2
         }else{
            this.pinch = pinch;
         }
      }
   }
   onRotate(t) {
      let angle = this.angle + t.angle;
      let redsun = window.stage.getChildById("redsun");
      redsun.rotation = angle;
      this.angle = angle
   }
   onMove(t) {
      let x = this.x + t.deltaX,
         y = this.y + t.deltaY,
         redsun = window.stage.getChildById("redsun");
      redsun.x = x;
      redsun.y = y;
      if(x <= 0){
         this.x = 0
      }else{
         if(x + this.width > 750){
            this.x = 750 - this.width;
         }else{
            this.x = x;
         }
      }
      if(y <= 0){
         this.y = 0;
      }else{
         if(y + this.width > 530){
            this.y = 530 - this.width;
         }else{
            this.y = y;
         }
      }
   }
   onTap(){

   }
   onSwipe(){

   }
   getRelationship = function (t) {
      console.log(t)
      let halfX = Math.round(this.x + t / 2),//e
         halfY = Math.round(this.y + t / 2),//n
         half = Math.round(t / 2),//i
         sun2halfX = Math.round(this.sun2Sprite.x + this.sun2Sprite.width / 2),//o
         sun2halfY = Math.round(this.sun2Sprite.y + this.sun2Sprite.width / 2),//a
         sun2Half = Math.round(this.sun2Sprite.width / 2),//s
         length = Math.sqrt(Math.pow(Math.abs(sun2halfX - halfX), 2) + Math.pow(Math.abs(sun2halfY - halfY), 2));//c
      console.log("X1:" + halfX + ",Y1:" + halfY + ",R1:" + half + ",X2:" + sun2halfX + ",Y2:" + sun2halfY + ",R2:" + sun2Half + ",length:" + length);
      let type = 'normal';
      if(length > half + sun2Half){
         type = 'poor';
      }else{
         if (length < half + sun2Half && length > Math.abs(sun2Half - half)){
            type = 'normal';
         } else {
            if(t > this.initWidth){
               type = 'rich';
            }else{
               type = 'normal'
            }
         }
      }
      console.log('type: ' + type)
      this.callBack(type)
   }
}

export default Move;