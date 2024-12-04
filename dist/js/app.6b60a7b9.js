(function(){"use strict";var e={2450:function(e,t,n){var o=n(5130),i=n(6768),l=n(4232);const d={id:"app"},a={"aria-labelledby":"list-summary",class:"stack-large"};function s(e,t,n,o,s,r){const c=(0,i.g2)("to-do-form"),u=(0,i.g2)("to-do-item");return(0,i.uX)(),(0,i.CE)("div",d,[t[0]||(t[0]=(0,i.Lk)("h1",null,"My To-Do List",-1)),(0,i.bF)(c,{onTodoAdded:r.addToDo},null,8,["onTodoAdded"]),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.v_)(r.listSummary),513),(0,i.Lk)("ul",a,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.bF)(u,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>r.updateDoneStatus(e.id),onItemDeleted:t=>r.deleteToDo(e.id),onItemEdited:t=>r.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}n(4114),n(8992),n(4520),n(2577);const r={key:0,class:"stack-small"},c={class:"custom-checkbox"},u=["id","checked"],m=["for"],b={class:"btn-group"},f={class:"visually-hidden"},p={class:"visually-hidden"};function h(e,t,n,o,d,a){const s=(0,i.g2)("el-button"),h=(0,i.g2)("delete"),g=(0,i.g2)("el-icon"),y=(0,i.g2)("to-do-item-edit-form");return d.isEditing?((0,i.uX)(),(0,i.Wv)(y,{key:1,id:n.id,label:n.label,onItemEdited:a.itemEdited,onEditCancelled:a.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",c,[(0,i.Lk)("input",{type:"checkbox",class:"checkbox",id:n.id,checked:a.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,u),(0,i.Lk)("label",{for:n.id,class:"checkbox-label"},(0,l.v_)(n.label),9,m)]),(0,i.Lk)("div",b,[(0,i.bF)(s,{style:{fontSize:"18px"},type:"primary",size:"large",class:"btn",ref:"editButton",onClick:a.toggleToItemEditForm,plain:""},{default:(0,i.k6)((()=>[t[1]||(t[1]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",f,(0,l.v_)(n.label),1)])),_:1},8,["onClick"]),(0,i.bF)(s,{style:{fontSize:"18px"},type:"danger",size:"large",class:"btn btn__danger",onClick:a.deleteToDo,plain:""},{default:(0,i.k6)((()=>[(0,i.bF)(g,null,{default:(0,i.k6)((()=>[(0,i.bF)(h)])),_:1}),(0,i.Lk)("span",p,(0,l.v_)(n.label),1)])),_:1},8,["onClick"])])]))}const g={class:"edit-label"},y=["id"],k={class:"btn-group"},v={class:"visually-hidden"},_={class:"visually-hidden"};function C(e,t,n,d,a,s){const r=(0,i.g2)("el-button");return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[1]||(t[1]=(0,o.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",g,'Edit Name for "'+(0,l.v_)(n.label)+'"',1),(0,i.bo)((0,i.Lk)("input",{id:n.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>a.newLabel=e)},null,8,y),[[o.Jo,a.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i.Lk)("div",k,[(0,i.bF)(r,{type:"info",class:"btn",onClick:s.onCancel},{default:(0,i.k6)((()=>[t[2]||(t[2]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",v,"editing "+(0,l.v_)(n.label),1)])),_:1},8,["onClick"]),(0,i.bF)(r,{type:"primary",class:"btn btn__primary",onClick:s.onSubmit},{default:(0,i.k6)((()=>[t[3]||(t[3]=(0,i.eW)(" Save ")),(0,i.Lk)("span",_,"edit for "+(0,l.v_)(n.label),1)])),_:1},8,["onClick"])])],32)}var T=n(2933),D=n(1219),E={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){T.s.confirm("Are you sure you want to cancel editing? All changes will be lost.","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0}).then((()=>{this.$emit("edit-cancelled"),(0,D.nk)({type:"info",message:"Edit canceled"})})).catch((()=>{(0,D.nk)({type:"info",message:"Edit not canceled"})}))}},mounted(){const e=this.$refs.labelInput;e.focus()}},S=n(1241);const x=(0,S.A)(E,[["render",C],["__scopeId","data-v-45b8d446"]]);var I=x,L=n(7477),w={components:{Delete:L.Delete,ToDoItemEditForm:I},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String},components:{ToDoItemEditForm:I}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{deleteToDo(){T.s.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",draggable:!0}).then((()=>{this.$emit("item-deleted"),(0,D.nk)({type:"success",message:"Delete completed"})})).catch((()=>{(0,D.nk)({type:"info",message:"Delete canceled"})}))},toggleToItemEditForm(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e&&e.$el?e.$el.focus():console.error("editButtonRef is not a valid reference:",e)}))}}};const O=(0,S.A)(w,[["render",h]]);var F=O,$=n(3165),B=n.n($);function z(e,t,n,l,d,a){const s=(0,i.g2)("el-input"),r=(0,i.g2)("el-tooltip");return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(0,o.D$)(((...e)=>a.onSubmit&&a.onSubmit(...e)),["prevent"]))},[t[3]||(t[3]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bF)(s,{size:"large",type:"text",id:"new-todo-input",name:"new-todo",placeholder:"Please Input",autocomplete:"off",modelValue:d.label,"onUpdate:modelValue":t[0]||(t[0]=e=>d.label=e),modelModifiers:{lazy:!0,trim:!0},style:{boxShadow:"0 4px 8px rgba(0, 0, .9, 0.6)"},class:"input__lg"},null,8,["modelValue"]),(0,i.bF)(r,{content:"Click to add a new task",placement:"top"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.Lk)("button",{style:{fontSize:"20px"},type:"info",size:"large",class:"btn btn__primary btn__lg"},"Add",-1)]))),_:1})],32)}var A={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const j=(0,S.A)(A,[["render",z],["__scopeId","data-v-1467ce52"]]);var W=j,X={name:"app",components:{ToDoItem:F,ToDoForm:W},data(){return{ToDoItems:[{id:B()("todo-"),label:"Learn Vue",done:!1},{id:B()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:B()("todo-"),label:"Have fun",done:!0},{id:B()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:B()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const n=this.ToDoItems.find((t=>t.id===e));n.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const V=(0,S.A)(X,[["render",s]]);var M=V,P=n(2053);n(4188);(0,o.Ef)(M).mount("#app");const q=(0,o.Ef)(M);q.use(P.A),q.mount("#app");for(const K in L)q.component(K,L[K])}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var d=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],l=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||d>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<d&&(d=l));if(a){e.splice(c--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,d=o[0],a=o[1],s=o[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var c=s(n)}for(t&&t(o);r<d.length;r++)l=d[r],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2450)}));o=n.O(o)})();
//# sourceMappingURL=app.6b60a7b9.js.map