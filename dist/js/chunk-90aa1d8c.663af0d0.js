(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90aa1d8c"],{"0857":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"thing"}},[n("h3",[e._v("Is new user: "+e._s(e.newUser))]),n("h3",[e._v("User data: "+e._s(e.user_data))]),n("router-link",{attrs:{to:"/third"}},[n("button",[e._v("Take me to Third Page!")])])],1)])},a=[],u=(n("4160"),n("159b"),n("96cf"),n("1da1")),s=n("260b"),i=(n("ea7b"),n("66ce"),{name:"second",components:{},mounted:function(){var e=this;s["a"].auth().onAuthStateChanged((function(t){t?(e.newUser&&e.createUser(t),e.getUser(t.uid),e.initLoop()):console.log("Error: No user is signed in!")}))},data:function(){return{newUser:this.$cookie.get("isNewUser"),user_data:null}},methods:{createUser:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].database().ref("user-data/"+t.uid).set({displayName:t.displayName,email:t.email,uid:t.uid,role:"volunteer",site:null,skills:null},(function(e){return!e||(console.log("Error: Could not add user to database!"),console.log(e),!1)}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].database().ref("user-data/"+t).once("value").then((function(e){return e.val()}));case 2:n=e.sent,this.user_data=n;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),initLoop:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,e.next=3,s["a"].database().ref("user-data/"+t).on("value",(function(e){var t=[];e.forEach((function(e){t.push(e.val()),n.user_data=t}))}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}),o=i,c=(n("8df8"),n("2877")),d=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=d.exports},"8df8":function(e,t,n){"use strict";n("c16a")},c16a:function(e,t,n){}}]);
//# sourceMappingURL=chunk-90aa1d8c.663af0d0.js.map