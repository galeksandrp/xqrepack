webpackJsonp([13],{"0QSP":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"",data:function(){return{step:1,errorImg:n("xTT4"),errorImgRedmi:n("fad2"),hardware:""}},components:{Headers:n("4uQT").a},methods:{handleBack:function(t){this.step=t},retry:function(){this.$router.push({path:"/home"})},operators:function(){this.$router.push({path:"/operators"})}},created:function(){var t=this.common.getCookie("hardware");t&&"RM2100"==t&&(this.hardware="RM2100")}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main"},[n("Headers",{attrs:{name:"网络诊断",step:t.step,fontsize:"index"},on:{goBack:t.handleBack}}),t._v(" "),n("div",{staticClass:"top"},[n("img",{attrs:{src:"RM2100"==t.hardware?t.errorImgRedmi:t.errorImg,alt:""}})])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("h3",[t._v("未检测到入户网线")]),t._v(" "),n("p",[t._v("建议您按以下步骤排查问题")]),t._v(" "),n("ul",[n("li",[t._v("1. 请检查路由器WAN口已用网线连接到光猫/上级设备的LAN口，或已接入入户网线")]),t._v(" "),n("li",[t._v("2. 请检查网线是否插紧或损坏")]),t._v(" "),n("li",[t._v("3. 请检查光猫/上级设备是否正常工作，可尝试重启光猫/上级设备后再连接Wi-Fi")]),t._v(" "),n("li",[t._v("4. 若仍然无法上网，请联系您的 "),n("a",{on:{click:t.operators}},[t._v("宽带运营商")])])]),t._v(" "),n("button",{staticClass:"foot",on:{click:t.retry}},[t._v("返回主界面")])])])])},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(t){n("W8DM")},"data-v-9de180c2",null);e.default=s.exports},"4uQT":function(t,e,n){"use strict";var r={name:"headers",props:{name:{type:String,default:""},controlers:{type:String,default:""},step:{type:Number,default:1},fontsize:{type:String,default:"init"}},data:function(){return{stepMap:1}},methods:{back:function(){this.currentStep>1?this.$emit("goBack",--this.currentStep):1==this.currentStep&&history.go(-1)}},computed:{currentStep:{get:function(){return this.stepMap},set:function(t){this.stepMap=t}}},watch:{step:function(t){this.stepMap=t}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"title",class:{title26:"index"==t.fontsize}},[n("span",{staticClass:"iconfont fanhuijian",class:{iconfont26:"index"==t.fontsize},on:{click:t.back}}),t._v(" "),n("h3",{class:{font26:"index"==t.fontsize}},[t._v(t._s(t.name))])])])},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(t){n("BXa4")},null,null);e.a=s.exports},BXa4:function(t,e){},W8DM:function(t,e){},fad2:function(t,e,n){t.exports=n.p+"static/img/error_tip_redmi.ae2f57f.png"},xTT4:function(t,e,n){t.exports=n.p+"static/img/error_tip1.5f5cb62.png"}});