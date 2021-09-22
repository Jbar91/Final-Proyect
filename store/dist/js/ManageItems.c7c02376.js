(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ManageItems"],{"03cb":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["l"])("h3",{class:"headline mb-0"},"Manage Items",-1),l=Object(n["k"])("Buy"),i=Object(n["k"])("Sell");function a(t,e,c,a,u,r){var b=Object(n["I"])("v-btn"),s=Object(n["I"])("v-card-title"),j=Object(n["I"])("BuyItems"),O=Object(n["I"])("SellItems"),d=Object(n["I"])("v-card"),f=Object(n["I"])("v-container");return Object(n["A"])(),Object(n["i"])(f,{fluid:!0,class:"py-6 bg-blue-grey-darken-2 manage-items-display"},{default:Object(n["Y"])((function(){return[Object(n["l"])(f,{class:"bg-teal-darken-4 d-flex justify-center "},{default:Object(n["Y"])((function(){return[Object(n["l"])(f,{class:"d-flex justify-center "},{default:Object(n["Y"])((function(){return[Object(n["l"])(d,{width:"500"},{default:Object(n["Y"])((function(){return[Object(n["l"])(s,{"primary-title":"",class:"d-flex justify-center"},{default:Object(n["Y"])((function(){return[Object(n["l"])("div",null,[o,Object(n["l"])("div",null,[Object(n["l"])(b,{flat:"",color:"blue-accent-1",class:"mx-auto",onClick:r.showBuy},{default:Object(n["Y"])((function(){return[l]})),_:1},8,["onClick"]),Object(n["l"])(b,{flat:"",color:"blue-accent-1",class:"ml-4",onClick:r.showSell},{default:Object(n["Y"])((function(){return[i]})),_:1},8,["onClick"])])])]})),_:1}),"Buy"===u.show?(Object(n["A"])(),Object(n["i"])(j,{key:0})):Object(n["j"])("",!0),"Sell"===u.show?(Object(n["A"])(),Object(n["i"])(O,{key:1})):Object(n["j"])("",!0)]})),_:1})]})),_:1}),Object(n["l"])(b,{icon:"mdi-close","aria-label":"Close button",class:"float-right d-none d-sm-block",onClick:r.back},null,8,["onClick"])]})),_:1})]})),_:1})}c("b0c0");var u=Object(n["l"])("label",{for:"item-name"}," Article:",-1),r=Object(n["l"])("label",{for:"amount-stock"},"Amount in Stock: ",-1),b={key:0},s=Object(n["l"])("label",{for:"quantity-bought"},"Quantity to Add:",-1),j=Object(n["l"])("label",{for:"item-price"},"Total Cost:",-1),O={key:0},d=Object(n["k"])("Cancel"),f=Object(n["k"])("Accept");function m(t,e,c,o,l,i){var a=Object(n["I"])("v-row"),m=Object(n["I"])("v-card-text"),p=Object(n["I"])("v-btn"),h=Object(n["I"])("v-card-actions");return Object(n["A"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(m,{class:"item-options"},{default:Object(n["Y"])((function(){return[Object(n["l"])(a,{class:"my-3 "},{default:Object(n["Y"])((function(){return[u,Object(n["Z"])(Object(n["l"])("select",{name:"articles-stock",id:"item-name","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.option=t})},[(Object(n["A"])(!0),Object(n["i"])(n["a"],null,Object(n["H"])(l.options,(function(t,e){return Object(n["A"])(),Object(n["i"])("option",{key:t.name,value:{price:t.price,id:e}},Object(n["N"])(t.name),9,["value"])})),128))],512),[[n["S"],l.option]])]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[r,i.stock?(Object(n["A"])(),Object(n["i"])("div",b,Object(n["N"])(i.stock),1)):Object(n["j"])("",!0)]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[s,Object(n["Z"])(Object(n["l"])("input",{type:"number",name:"Bought input",id:"quantity-bought",min:"0","onUpdate:modelValue":e[2]||(e[2]=function(t){return l.amountAdded=t})},null,512),[[n["T"],l.amountAdded]])]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[j,Object(n["l"])("div",null,[Object(n["k"])(Object(n["N"])(i.totalCost),1),i.totalCost?(Object(n["A"])(),Object(n["i"])("span",O,"€")):Object(n["j"])("",!0)])]})),_:1})]})),_:1}),Object(n["l"])(h,null,{default:Object(n["Y"])((function(){return[Object(n["l"])(p,{flat:"",color:"blue-accent-1",class:"mx-auto",onClick:i.back},{default:Object(n["Y"])((function(){return[d]})),_:1},8,["onClick"]),Object(n["l"])(p,{flat:"",color:"blue-accent-1",class:"mx-auto",onClick:i.add},{default:Object(n["Y"])((function(){return[f]})),_:1},8,["onClick"])]})),_:1})],64)}c("a9e3"),c("b680");var p={data:function(){return{option:"",options:JSON.parse(localStorage.getItem("products")),amountAdded:0}},methods:{add:function(){this.options[this.option.id].quantity=this.options[this.option.id].quantity+Number(this.amountAdded),this.amountAdded=0,localStorage.setItem("products",JSON.stringify(this.options))},back:function(){this.$router.push({name:"Storage"})}},computed:{totalCost:function(){var t=this.amountAdded*this.option.price*1;return t?t.toFixed(2):""},stock:function(){var t;return this.option&&(t=this.options[this.option.id].quantity),t}}};c("92fa");p.render=m;var h=p,k=Object(n["l"])("label",{for:"item-name"}," Article:",-1),y=Object(n["l"])("label",{for:"amount-stock"},"Amount in Stock: ",-1),v={key:0},S=Object(n["l"])("label",{for:"quantity-sold"},"Quantity Sold:",-1),A=Object(n["l"])("label",{for:"item-cost"},"Total Profit:",-1),I={key:0},g=Object(n["k"])("Cancel"),Y=Object(n["k"])("Accept");function _(t,e,c,o,l,i){var a=Object(n["I"])("v-row"),u=Object(n["I"])("v-card-text"),r=Object(n["I"])("v-btn"),b=Object(n["I"])("v-card-actions");return Object(n["A"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(u,{class:"item-options"},{default:Object(n["Y"])((function(){return[Object(n["l"])(a,{class:"my-3 "},{default:Object(n["Y"])((function(){return[k,Object(n["Z"])(Object(n["l"])("select",{name:"articles-stock",id:"item-name","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.option=t})},[(Object(n["A"])(!0),Object(n["i"])(n["a"],null,Object(n["H"])(l.options,(function(t,e){return Object(n["A"])(),Object(n["i"])("option",{key:t.name,value:{price:t.price,id:e}},Object(n["N"])(t.name),9,["value"])})),128))],512),[[n["S"],l.option]])]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[y,i.stock?(Object(n["A"])(),Object(n["i"])("div",v,Object(n["N"])(i.stock),1)):Object(n["j"])("",!0)]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[S,Object(n["Z"])(Object(n["l"])("input",{type:"number",name:"Sold input",id:"quantity-sold",max:l.maxSold,onClick:e[2]||(e[2]=function(){return i.max&&i.max.apply(i,arguments)}),min:"0","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.amountSold=t})},null,8,["max"]),[[n["T"],l.amountSold]])]})),_:1}),Object(n["l"])(a,{class:"my-3"},{default:Object(n["Y"])((function(){return[A,Object(n["l"])("div",null,[Object(n["k"])(Object(n["N"])(i.totalProfit)+" ",1),i.totalProfit?(Object(n["A"])(),Object(n["i"])("span",I,"€")):Object(n["j"])("",!0)])]})),_:1})]})),_:1}),Object(n["l"])(b,null,{default:Object(n["Y"])((function(){return[Object(n["l"])(r,{flat:"",color:"blue-accent-1",class:"mx-auto",onClick:i.back},{default:Object(n["Y"])((function(){return[g]})),_:1},8,["onClick"]),Object(n["l"])(r,{flat:"",color:"blue-accent-1",class:"mx-auto",onClick:i.substract},{default:Object(n["Y"])((function(){return[Y]})),_:1},8,["onClick"])]})),_:1})],64)}var C={data:function(){return{options:JSON.parse(localStorage.getItem("products")),amountSold:0,option:"",maxSold:null}},methods:{substract:function(){this.options[this.option.id].quantity=this.options[this.option.id].quantity-Number(this.amountSold),this.amountSold=0,localStorage.setItem("products",JSON.stringify(this.options))},max:function(){this.maxSold=this.options[this.option.id].quantity},back:function(){this.$router.push({name:"Storage"})}},computed:{totalProfit:function(){var t=this.amountSold*this.option.price*1;return t?t.toFixed(2):""},stock:function(){var t;return this.option&&(t=this.options[this.option.id].quantity),t}}};C.render=_;var x=C,w={components:{BuyItems:h,SellItems:x},data:function(){return{options:JSON.parse(localStorage.getItem("products")),show:null}},methods:{showBuy:function(){this.show="Buy"},showSell:function(){this.show="Sell"},back:function(){this.$router.push({name:"Storage"})}}};c("a782");w.render=a;e["default"]=w},"92fa":function(t,e,c){"use strict";c("d508")},a782:function(t,e,c){"use strict";c("e1a2")},d508:function(t,e,c){},e1a2:function(t,e,c){}}]);
//# sourceMappingURL=ManageItems.c7c02376.js.map