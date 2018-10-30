let timer = 1350;
let durTime = 800;
export const data = [
   [{
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>Hi，年轻人</p> <img src="images/pages/bq1.gif"  style="vertical-align:middle;">',
      next: "true",
      quesBlock: 0,
      quesNum: 1,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你是否感觉自己卖力工作却依然很穷？</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 2,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>你也许是陷入穷人思维了<img src="images/pages/bq4.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 0,
      quesNum: 3,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>穷人和富人不同的思维方式使他们的财富水平有所差异</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 4,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你是穷人思维还是富人思维占主导呢？</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 5,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>来让这几位大佬帮你测一测吧！结果可能出乎你意料</p>",
      next: "true",
      quesBlock: 0,
      quesNum: 6,
      timer: timer
   }, {
      type: "option",
      content: '<div class="start_btn" quse-attr="0" next-attr="7">开始</div>'
   }, {
      type: "chatA",
      content: "<p>开始</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 0,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: "<p>请告诉我你的真实想法</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 1,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: "<p>你倾向用哪种方式提高自己的收入？</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 2,
      timer: timer
   }, {
      type: "option",
      content: '<div class="question1"><div class="question1_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="1" next-attr="3">跳槽，找份高薪工作</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="poor" quse-attr="1" next-attr="4">学习新技能，<br/>提高业务水平</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="rich" quse-attr="1" next-attr="5">利用业余时间<br/>投资理财</div></div></div></div>',
      next: "",
      timer: timer,
      durTime: 800
   }, {
      type: "chatA",
      content: "<p> 跳槽，找份高薪工作</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>学习新技能，提高业务水平</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 7,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>利用业余时间投资理财</p>",
      next: "true",
      quesBlock: 1,
      quesNum: 8,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>想法不错哦 <img src="images/pages/bq5_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>嗯，目光长远 <img src="images/pages/bq2_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p>Interesting <img src="images/pages/bq6.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 9,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="images/pages/bq10.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 1,
      quesNum: 10,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/luokefeile.png",
      name: "洛克菲勒<em>（石油大王）</em>",
      content: '<p> <img src="images/pages/bq11_4.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 2,
      quesNum: 0,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>哈哈哈，来看看我这道题吧！</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 1,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>你认为哪种动物最会创造财富？</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 2,
      timer: timer
   }, {
      type: "option",
      content: '<div class="question2"><div class="question2_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="2" next-attr="3">狼</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="rich" quse-attr="2" next-attr="4">蚂蚁</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="poor" quse-attr="2" next-attr="5">老虎</div></div></div></div>',
      next: "",
      timer: timer,
      durTime: durTime
   }, {
      type: "chatA",
      content: "<p>狼</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>蚂蚁</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>老虎</p>",
      next: "true",
      quesBlock: 2,
      quesNum: 6,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p> <img src="images/pages/bq12_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 0,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: '<p>我说我是群里最有钱的<img src="images/pages/bq7_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 10,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>就你话多！快开始叭！</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 2,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: "<p><em>拖动</em>并<em>缩放</em>右侧的“他人”圆圈，来表示你与他人之间的关系</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 3,
      timer: timer
   }, {
      type: "canvas",
      content: '<div class="question3"><canvas id="canvas"></canvas><div id="filter"></div><div class="makesure">确认</div><div class="shoushi"></div></div>',
      next: "",
      timer: timer
   }, {
      type: "chatB",
      content: "<p>确认</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 5,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>@巴菲特<img src="images/pages/bq8_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>@巴菲特 在吗？</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 7,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>@巴菲特 出来出题啊啊啊！</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 8,
      timer: timer
   }, {
      type: "redbag",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p> <img src="images/pages/bq13.png"  style="height：167px;vertical-align:middle;"></p>',
      text: '<p><img src="images/pages/bq14.png"  style="height：59px;vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 3,
      quesNum: 9,
      timer: 2500
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="images/pages/bq3_2.gif"  style="height：59px;vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 2,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/biergaici.png",
      name: "比尔·盖茨<em>（前 世界首富）</em>",
      content: "<p>应该没人反对吧？</p>",
      next: "true",
      quesBlock: 3,
      quesNum: 1,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: '<p>我迫不及待地想要问你这道题！<img src="images/pages/bq8_2.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 1,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>注意哦，我的题目可是有套路的</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 2,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>如果我现在送你一笔钱，你更愿意选择哪种领取方式？</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 3,
      timer: timer
   }, {
      type: "option",
      content: '<div class="question4"><div class="question4_con"><div class="options options1"><div class="img"></div><div class="option" man-attr="rich" quse-attr="4" next-attr="4">抛硬币，正面200万，反面不拿钱</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="normal" quse-attr="4" next-attr="5">不抛硬币，现在拿50万</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="poor" quse-attr="4" next-attr="6">不抛硬币，5年之后拿100万</div></div></div></div>',
      next: "",
      timer: timer,
      durTime: durTime
   }, {
      type: "chatA",
      content: "<p>抛硬币，正面200万，反面不拿钱</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>不抛硬币，现在拿50万</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>不抛硬币，5年之后拿100万</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 7,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: '<p><img src="images/pages/bq15_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 4,
      quesNum: 8,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/bafeite.png",
      name: "巴菲特<em>（股神）</em>",
      content: "<p>@扎克伯格，小扎，该你了</p>",
      next: "true",
      quesBlock: 4,
      quesNum: 9,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: '<p><img src="images/pages/bq17_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 5,
      quesNum: 0,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: "<p>假如你有机会选择想就读的名校，你最看重名校的什么？</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 1,
      timer: timer
   }, {
      type: "option",
      content: '<div class="question5"><div class="question5_con"><div class="question5_bg"></div><div class="options options1"><div class="img"></div><div class="option" man-attr="normal" quse-attr="5" next-attr="2">学校排名</div></div><div class="options options2"><div class="img"></div><div class="option" man-attr="rich" quse-attr="5" next-attr="3">校友资源</div></div><div class="options options3"><div class="img"></div><div class="option" man-attr="normal" quse-attr="5" next-attr="4">地理位置</div></div><div class="options options4"><div class="img"></div><div class="option" man-attr="poor" quse-attr="5" next-attr="5">奖学金</div></div></div></div>  ',
      next: "",
      timer: timer,
      durTime: 800
   }, {
      type: "chatA",
      content: "<p>学校排名</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>校友资源</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>地理位置</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>奖学金</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 6,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/zakeboge.png",
      name: "扎克伯格<em>（Facebook创始人）</em>",
      content: '<p><img src="images/pages/bq6.gif"  style="vertical-align:middle;"><img src="images/pages/bq6.gif"  style="vertical-align:middle;"><img src="images/pages/bq6.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 5,
      quesNum: 7,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>还有谁没出题？</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 8,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我！我！我！还有我！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 9,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我在网易公开课开设了商学课，讲富人生财之道！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 10,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>咳！本群禁止打广告！</p>",
      next: "true",
      quesBlock: 5,
      quesNum: 11,
      timer: timer
   }, {
      type: "emoji",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: '<p> <img src="images/pages/bq16_3.png"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 1,
      timer: timer
   }],
   [{
      type: "chatQ",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>我在网易公开课开设了商学课，“创业”话题很热</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 1,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>那我出一道“创业”主题的压轴题吧</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 2,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/renzhiqiang.png",
      name: "任志强 <em>（网易男人书房 导师）</em>",
      content: "<p>假如你有一个很好的创业计划，但缺少资金和人脉，你会怎么做？</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 3,
      timer: timer
   }, {
      type: "option",
      content: '<div class="question6"><div class="question6_con"><div class="question6_bg"></div><div class="options options1"><div class="option" man-attr="normal" quse-attr="6" next-attr="4">把计划卖给别人，先积累资金</div></div><div class="options options2"><div class="option" man-attr="poor" quse-attr="6" next-attr="5">慢慢筹备资源，时机成熟再行动</div></div><div class="options options3"><div class="option" man-attr="rich" quse-attr="6" next-attr="6">一边实施创业计划一边想办法</div></div><div class="options options4"><div class="option" man-attr="normal" quse-attr="6" next-attr="7">没考虑过创业</div></div></div></div>',
      next: "",
      timer: timer,
      durTime: durTime
   }, {
      type: "chatA",
      content: "<p>把计划卖给别人，先积累资金</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>慢慢筹备资源，时机成熟再行动</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>一边实施创业计划一边想办法</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: timer
   }, {
      type: "chatA",
      content: "<p>没考虑过创业</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 13,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>恭喜！你已经完成了全部的测试题</p>",
      next: "true",
      quesBlock: 6,
      quesNum: 9,
      timer: timer,
      result: "true"
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>正在计算你的穷/富人思维比例<span class="ellipsis"></span></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 11,
      timer: 3e3
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: "<p>穷人思维占 poorPercent %<br/>富人思维占 richPercent %</p>",
      next: "",
      quesBlock: 6,
      quesNum: 11,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p>点开图片查看分析，记得保存图片分享哦<img src="images/pages/bq1.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 12,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<div class="bigImgopen" style="width:184px;height:295px;background:url(resultImg) no-repeat center;background-size:contain;"></div>',
      next: "",
      quesBlock: 7,
      quesNum: 0,
      timer: timer
   }, {
      type: "chatQ",
      headImg: "images/pages/yadangsimi_2.png",
      name: "亚当·斯密<em>（现代经济学之父）</em>",
      content: '<p><img src="images/pages/bq9.gif"  style="vertical-align:middle;"></p>',
      next: "true",
      quesBlock: 6,
      quesNum: 8,
      timer: timer,
      result: ""
   }],
   [{
      type: "tip",
      content: '<div class="tip">“亚当·斯密”邀请你加入了<em>“精准扶贫”</em>群聊，群聊参与人还有 ：比尔·盖茨、巴菲特、洛克菲勒、扎克伯格、任志强</div>',
      next: "true",
      quesBlock: 0,
      quesNum: 0,
      timer: timer
   }]
];

export const resultData = [{
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

export const imgSrc = [
   "/images/pages/bafeite.png",
   "/images/pages/biergaici.png",
   "/images/pages/kaiensi.png",
   "/images/pages/luokefeile.png",
   "/images/pages/renzhiqiang.png",
   "/images/pages/yadangsimi_2.png",
   "/images/pages/zakeboge.png",
   "/images/pages/2_a.png",
   "/images/pages/2_b.png",
   "/images/pages/2_c.png",
   "/images/pages/bq1.gif",
   "/images/pages/bq2_2.gif",
   "/images/pages/bq3_2.gif",
   "/images/pages/bq4.png",
   "/images/pages/bq5_2.gif",
   "/images/pages/bq6.gif", 
   "/images/pages/bq7_2.gif",
   "/images/pages/bq8_2.gif",
   "/images/pages/bq9.gif", 
   "/images/pages/bq10.gif",
   "/images/pages/bq11_4.png",
   "/images/pages/bq12_2.gif",
   "/images/pages/bq13.png",
   "/images/pages/bq14.png",
   "/images/pages/bq15_3.png",
   "/images/pages/bq16_3.png",
   "/images/pages/bq17_3.png",
   "/images/pages/checked.png",
   "/images/pages/circle3.png",
   "/images/pages/circle4.png",
   "/images/pages/close.png",
   "/images/pages/ellipsis.png",
   "/images/pages/jinbi.png",
   "/images/pages/q1_bg.png",
   "/images/pages/q2_bg.png",
   "/images/pages/q4_bg.png",
   "/images/pages/q5_a.png",
   "/images/pages/q5_b.png",
   "/images/pages/q5_bg.png",
   "/images/pages/q5_c.png",
   "/images/pages/q5_d.png",
   "/images/pages/q6_bg.png",
   "/images/pages/r1206_2.jpg",
   "/images/pages/r1206_100_3.jpg",
   "/images/pages/r1334_2.jpg",
   "/images/pages/r1334_100_3.jpg"
]