'use strict';

class Confession{
   constructor(){
      this.setMeta();
      this.preLoad();
   }
   setMeta(){
      let metaCon = document.querySelector('meta[name="viewport"]');
      let width = 750, scale = document.documentElement.clientWidth / width;
      metaCon.setAttribute("content", "width=" + width + ",initial-scale=" + scale + ",maximum-scale=" + scale + ",minimum-scale=" + scale);
   }
   preLoad(){
      console.log('888888888888');
   }
}

new Confession();