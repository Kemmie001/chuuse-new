(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(t,e,l){var content=l(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("4fff1a54",content,!0,{sourceMap:!1})},329:function(t,e,l){"use strict";l(290)},330:function(t,e,l){var n=l(33)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.line-gray{\n  width:1px;\n  height:100px;\n  align-self:center\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},368:function(t,e,l){"use strict";l.r(e);var n={layout:"empty",computed:{userdetails:function(){return this.$store.getters["user/getData"]}},mounted:function(){this.$store.dispatch("user/getUser")},methods:{}},r=(l(329),l(22)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pt-24 md:pt-32 lg:py-20 lg:px-20 px-8 bg-gray-light lg:h-screen"},[l("div",{staticClass:"md:flex gap-x-10 mt-5"},[l("div",{staticClass:"bg-white rounded-lg px-4 py-5 text-gray-medDark lg:w-6/12"},[l("div",{staticClass:"lg:flex justify-around"},[l("div",{staticClass:"flex"},[l("div",{staticClass:"flex"},[t._m(0),t._v(" "),l("div",{staticClass:"self-center pl-5"},[l("h1",{staticClass:"font-bold capitalize text-lg"},[t._v("\n                "+t._s(t.userdetails.lastName)+" "+t._s(t.userdetails.firstName)+"\n              ")]),t._v(" "),l("p",{staticClass:"text-gray-medium"},[t._v(t._s(t.userdetails.email))])])])]),t._v(" "),l("div",{staticClass:"self-center mt-4"},[l("nuxt-link",{staticClass:"\n              rounded-md\n              font-semibold\n              p-2\n              cursor-pointer\n              hover:border-primary hover:bg-primary hover:text-white\n              border-2 border-gray-medDark\n            ",attrs:{to:"/user-edit-profile"}},[t._v("\n            Edit Profile\n          ")])],1)]),t._v(" "),l("div",{staticClass:"md:flex justify-around"},[l("ul",{staticClass:"mt-3"},[l("li",{staticClass:"pt-3"},[t._v("Phone Number: "+t._s(t.Nil))]),t._v(" "),l("li",{staticClass:"py-3"},[t._v("Nationality: "+t._s(t.userdetails.nationality))]),t._v(" "),l("li",{staticClass:"pb-3"},[t._v("Location: "+t._s(t.userdetails.nationality))])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)]),t._v(" "),l("div",{staticClass:"lg:w-5/12 mt-10 md:mt-0"},[l("div",{staticClass:"bg-white rounded-lg text-gray-medDark mb-10 p-4"},[t._m(3),t._v(" "),l("div",{staticClass:"flex my-4"},[t._m(4),t._v(" "),l("span",{staticClass:"ml-5"},[l("a",{staticClass:"font-semibold text-md text-primary",attrs:{href:""+t.userdetails.portfolioLink}},[t._v(t._s(t.userdetails.portfolioLink))]),t._v(" "),l("p",{staticClass:"text-sm text-gray-medium"},[t._v("\n              "+t._s(t.userdetails.createdAt)+"\n            ")])])])]),t._v(" "),l("div",{staticClass:"bg-white rounded-lg text-gray-medDark mb-10 p-4"},[l("div",{staticClass:"flex justify-between ty-5"},[l("h1",{staticClass:"font-semibold"},[t._v("Full stack Developer")]),t._v(" "),l("p",{staticClass:"font-medium"},[t._v("\n            "+t._s(t.userdetails.yearsOfExperienceWithPrimaryStack)+" years\n          ")])]),t._v(" "),l("div",{},[l("p",{staticClass:"py-3"},[t._v("\n            Total Work Experience:\n            "+t._s(t.userdetails.yearsOfWorkingExperience)+" years\n          ")]),t._v(" "),l("span",{staticClass:"mb-5"},[t._v("\n            Portfolio Link:\n            "),l("a",{staticClass:"text-primary ml-3",attrs:{href:""+t.userdetails.portfolioLink}},[t._v(t._s(t.userdetails.portfolioLink))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"\n                flex\n                justify-center\n                bg-gray-medium\n                w-20\n                h-20\n                rounded-full\n                text-white\n              "},[e("i",{staticClass:"uil uil-user text-4xl self-center font-bold"})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex"},[l("div",{staticClass:"line-gray md:mx-5 bg-gray-medium hidden md:block"}),t._v(" "),l("ul",{staticClass:"mt-3"},[l("li",{staticClass:"pt-3"},[t._v("English Profieciency: Beginner")]),t._v(" "),l("li",{staticClass:"py-3"},[t._v("Compay Matched with: Chuuse")]),t._v(" "),l("li",{staticClass:"pb-3"},[t._v("Company Website: www.chuuse.org")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-center flex my-5 justify-center"},[l("h1",{staticClass:"font-bold mr-4 self-center"},[t._v("Status:")]),t._v(" "),l("button",{staticClass:"bg-info px-5 py-1 rounded-md text-white font-semibold"},[t._v("\n          Awaiting Match\n        ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex justify-between mt-3"},[l("h1",{staticClass:"font-semibold"},[t._v("My Resume")]),t._v(" "),l("a",{staticClass:"text-primary font-medium",attrs:{href:""}},[t._v("Update Document")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"w-10"},[e("img",{attrs:{src:"PDF.png",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);