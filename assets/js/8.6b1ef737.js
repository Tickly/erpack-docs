(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{817:function(e,r,n){"use strict";r.a=[{id:1,name:"张三",age:3,gender:"男",address:"芜湖市~",birthday:"2000-01-01"},{id:2,name:"李四",age:5,gender:"女",address:"芜湖市~",birthday:"2000-01-01"}]},821:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n(100),a=n(147),d=n(271),i=n(270),u=n(269),o=function(e){Object(d.a)(n,e);var r=Object(i.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"properties",value:function(){return{name:new u.Property({label:"姓名",required:!0}),age:new u.NumberProperty({label:"年龄",required:!0,min:0}),gender:new u.Property({label:"性别",required:!0}),birthday:new u.Property("出生日期"),address:new u.Property("住址")}}}]),n}(u.Model)},926:function(e,r,n){"use strict";n.r(r);var t=n(817),a=new(n(821).a)(t.a[0]),d=["name","age","gender","birthday","address"],i={render:function(){var e=arguments[0];return e("erp-descriptions",{attrs:{bordered:!0,form:a,items:d}})}},u=n(69),o=Object(u.a)(i,void 0,void 0,!1,null,null,null);r.default=o.exports}}]);