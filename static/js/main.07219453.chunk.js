(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);a(71),a(96);var n=a(0),l=a.n(n),r=a(33),i=a.n(r),o=a(8),c=a.n(o),m=a(58),u=a(59),s=a(68),E=a(60),d=a(69),h=(a(102),a(34)),p=a(1),f=a(35),g=a.n(f),y=a(61),b=a.n(y),v=a(9),C=a.n(v),k=a(11),w=a.n(k),B=a(62),T=a.n(B),P=a(63),H=a.n(P),S=a(64),L=a.n(S),I=a(65),D=a.n(I),G=a(66),O=a.n(G),A=a(67),z=a.n(A),M="",V="",_="",K="",N="",W="",x='\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0435\u0449\u0451 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0438\u0441\u044c, \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041d\u0430\u0437\u0430\u0434", \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u0438 \u0441\u043d\u043e\u0432\u0430 \u0437\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b "\u041d\u043e\u0432\u043e\u0441\u0442\u0438", \u0435\u0441\u043b\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043d\u0435 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434, \u0442\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u043a\u0435\u0448',F="\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0441\u043b\u0430\u0431\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0442\u043e \u0436\u0434\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0447\u0443\u0442\u044c \u0434\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c 10 \u0441\u0435\u043a\u0443\u043d\u0434, \u043d\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u043f\u043e\u043b\u043d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0445\u043e\u0442\u044f\u0431\u044b \u043f\u0430\u0440\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439",U="*\u041d\u043e\u0432\u043e\u0441\u0442\u044c*",j="*\u041d\u043e\u0432\u043e\u0441\u0442\u044c*",R="*\u041d\u043e\u0432\u043e\u0441\u0442\u044c*",J=void 0,X=new XMLHttpRequest;X.open("GET","http://seapps.tk/chevr/new/index.php",!0),X.send(),X.onreadystatechange=function(){if(4==X.readyState&&200==X.status){M=X.responseText;var e=new DOMParser;J=e.parseFromString(M,"text/html")}},c.a.send("VKWebAppInit",{}),setTimeout(function(){h.a.send("VKWebAppGetUserInfo",{})},2e3);var q=Object(p.platform)(),Q={flexShrink:0,width:80,height:94,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12};var Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(E.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to}),window.history.pushState(e.currentTarget.dataset.to,"".concat(e.currentTarget.dataset.to))},a.state={popout:null,activePanel:"main",fetchedUser:null,theme:"white"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",function(t){return t.preventDefault()&e.menu(t)}),window.history.pushState({panel:"main"},"main"),h.a.subscribe(function(e){"VKWebAppGetUserInfoResult"===e.detail.type&&(console.log("%c IT WORKS! ",'background: red; color: white; font-size: 5em; font-family: "Calibri" '),console.log("Data:"),console.dir(e.detail.data))}),c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":console.dir(e),console.log("\u0413\u042b");break;case"VKWebAppGetUserInfo":console.log("%c Oh my heavens! ","background: #222; color: #bada55");break;default:console.log("%c Type of response: "+"%c ".concat(e.detail.type),"","color: red; font-weight: bold;")}})}},{key:"menu",value:function(e){e.state?this.setState({activePanel:e.state.panel}):(this.setState({activePanel:"main"}),window.history.pushState({panel:"main"},"main"))}},{key:"openThanks",value:function(){var e=this;this.setState({popout:l.a.createElement(p.Alert,{actionsLayout:"vertical",actions:[{title:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 :3",autoclose:!0,style:"default"}],onClose:function(){return e.setState({popout:null})}},l.a.createElement("h2",null,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0442\u0435\u0431\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0435"),l.a.createElement("p",null,"\u041d\u0430\u043a\u043e\u043d\u0435\u0446-\u0442\u043e \u043c\u043d\u0435 \u0445\u0432\u0430\u0442\u0438\u0442 \u043d\u0430 \u0434\u043e\u0448\u0438\u043a :D"))})}},{key:"render",value:function(){var e=this;return J&&(V=J.getElementsByTagName("a1")[0].innerHTML,_=J.getElementsByTagName("a2")[0].innerHTML,K=J.getElementsByTagName("a3")[0].innerHTML,N=J.getElementsByTagName("a4")[0].innerHTML,W=J.getElementsByTagName("a5")[0].innerHTML,x=J.getElementsByTagName("h1")[0].innerHTML,F=J.getElementsByTagName("h2")[0].innerHTML,U=J.getElementsByTagName("h3")[0].innerHTML,j=J.getElementsByTagName("h4")[0].innerHTML,R=J.getElementsByTagName("h5")[0].innerHTML),l.a.createElement(p.View,{popout:this.state.popout,activePanel:this.state.activePanel},l.a.createElement(p.Panel,{theme:this.state.theme,id:"main"},l.a.createElement(p.PanelHeader,null,"\u0427\u0435VR"),l.a.createElement(p.Group,{title:"\u0427\u0435\u0433\u043e \u0436\u0435\u043b\u0430\u0435\u0442\u0435?"},l.a.createElement(p.CellButton,{before:l.a.createElement(D.a,null),size:"l",onClick:this.go,"data-to":"news"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),l.a.createElement(p.CellButton,{before:l.a.createElement(L.a,null),size:"l",onClick:this.go,"data-to":"weather"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b"),l.a.createElement(p.CellButton,{before:l.a.createElement(H.a,null),size:"l",onClick:this.go,"data-to":"articles"},"\u0410\u0444\u0438\u0448\u0438"),l.a.createElement(p.CellButton,{before:l.a.createElement(T.a,null),size:"l",onClick:this.go,"data-to":"buildings"},"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438")),l.a.createElement(p.Group,{title:"\u0411\u0443\u0434\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u0442\u0435\u043b\u0435\u043d"},l.a.createElement(p.CellButton,{style:{color:"#FFB200"},before:l.a.createElement(g.a,null),size:"l",onClick:function(){c.a.send("VKWebAppAddToFavorites",{})}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"),l.a.createElement(p.CellButton,{style:{color:"red"},before:l.a.createElement(g.a,null),size:"l",onClick:function(){return e.openThanks()}},"\u0422\u0435\u0441\u0442 \u0441\u043f\u0430\u0441\u0438\u0431\u043e\u043a"),q===p.IOS?"":l.a.createElement(p.CellButton,{style:{color:"#00BC00"},before:l.a.createElement(b.a,null),size:"l",onClick:this.go,"data-to":"pay"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c (Android)"),l.a.createElement(p.CellButton,{style:{color:"#A200B7"},before:l.a.createElement(z.a,null),size:"l",onClick:this.go,"data-to":"pay"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c (Android & IOS)")),l.a.createElement(p.Group,{title:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0442\u0435\u043c\u043e\u0439"},l.a.createElement(p.Cell,{multiline:!0},l.a.createElement("b",null,"\u0412\u043e\u043f\u0440\u043e\u0441:")," \u0423 \u043c\u0435\u043d\u044f \u0441\u0442\u043e\u0438\u0442 \u0441\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430, \u043f\u043e\u0447\u0435\u043c\u0443 \u044f \u0432\u0438\u0436\u0443 \u0442\u0451\u043c\u043d\u0443\u044e? (\u0438\u043b\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442)"),l.a.createElement(p.Cell,null,l.a.createElement("b",null,"\u041e\u0442\u0432\u0435\u0442:")," \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u043a\u0435\u0448 \u0438 \u0432\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e")),l.a.createElement(p.Footer,null,"CheVR | VK version | v0.1-pa")),l.a.createElement(p.Panel,{theme:this.state.theme,id:"news"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back()}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,l.a.createElement(p.Cell,{id:"news_cell_1",style:{marginBottom:-15},description:l.a.createElement(p.Link,{href:V&&x?"":"http://cherinfo.ru/"},V&&x?"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: Cherinfo.ru":""),multiline:!0},x),V&&x?l.a.createElement(p.Cell,{style:{marginTop:-10,marginBottom:-10}},l.a.createElement(p.Link,{href:V},l.a.createElement(p.Button,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))):"")),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,l.a.createElement(p.Cell,{id:"news_cell_1",style:{marginBottom:-15},description:l.a.createElement(p.Link,{href:_&&F?"":"http://cherinfo.ru/"},_&&F?"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: Cherinfo.ru":""),multiline:!0},F),_&&F?l.a.createElement(p.Cell,{style:{marginTop:-10,marginBottom:-10}},l.a.createElement(p.Link,{href:_},l.a.createElement(p.Button,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))):"")),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,l.a.createElement(p.Cell,{id:"news_cell_1",style:{marginBottom:-15},description:l.a.createElement(p.Link,{href:K&&U?"":"http://cherinfo.ru/"},K&&U?"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: Cherinfo.ru":""),multiline:!0},U),K&&U?l.a.createElement(p.Cell,{style:{marginTop:-10,marginBottom:-10}},l.a.createElement(p.Link,{href:K},l.a.createElement(p.Button,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))):"")),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,l.a.createElement(p.Cell,{id:"news_cell_1",style:{marginBottom:-15},description:l.a.createElement(p.Link,{href:N&&j?"":"http://cherinfo.ru/"},N&&j?"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: Cherinfo.ru":""),multiline:!0},j),N&&j?l.a.createElement(p.Cell,{style:{marginTop:-10,marginBottom:-10}},l.a.createElement(p.Link,{href:N},l.a.createElement(p.Button,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))):"")),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,l.a.createElement(p.Cell,{id:"news_cell_1",style:{marginBottom:-15},description:l.a.createElement(p.Link,{href:W&&R?"":"http://cherinfo.ru/"},W&&R?"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: Cherinfo.ru":""),multiline:!0},R),W&&R?l.a.createElement(p.Cell,{style:{marginTop:-10,marginBottom:-10}},l.a.createElement(p.Link,{href:W},l.a.createElement(p.Button,null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))):""))),l.a.createElement(p.Panel,{theme:this.state.theme,id:"weather"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u041f\u043e\u0433\u043e\u0434\u0430"),l.a.createElement(p.Group,null,l.a.createElement(p.HorizontalScroll,null,l.a.createElement(p.Div,{style:{display:"flex"}},l.a.createElement(p.Div,{style:{itemStyle:Q}},l.a.createElement("center",null,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f",l.a.createElement(p.Avatar,{size:64,style:{marginTop:8,marginBottom:8},src:""}),"\u042f\u0441\u043d\u043e, +8\xb0C")))))),l.a.createElement(p.Panel,{theme:this.state.theme,id:"articles"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u0410\u0444\u0438\u0448\u0438"),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u0430\u0444\u0438\u0448\u0430\u043c\u0438"))),l.a.createElement(p.Panel,{theme:this.state.theme,id:"buildings"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c\u0438"))),l.a.createElement(p.Panel,{theme:this.state.theme,id:"settings"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(p.Group,null,l.a.createElement(p.CellButton,{before:l.a.createElement(O.a,null),size:"l",onClick:function(){return window.history.back({activePanel:"settings"})}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(p.Cell,{asideContent:l.a.createElement(p.Switch,null)},"\u0422\u0451\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430")),l.a.createElement(p.Footer,null,"\u042d\u0442\u043e \u0432\u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043b\u043e\u043b :D")),l.a.createElement(p.Panel,{theme:this.state.theme,id:"pay"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"\u0414\u043e\u043d\u0430\u0442"),l.a.createElement(p.Group,{title:"\u041d\u0443-\u0441, \u0431\u0443\u0434\u0443 \u0440\u0430\u0434 \u0442\u0432\u043e\u0435\u043c\u0443 \u0434\u043e\u043d\u0430\u0442\u0443"},l.a.createElement(p.Div,null,l.a.createElement(p.Input,{id:"donation",placeholder:"\u0421\u0443\u043c\u043c\u0430 (\u0440\u0443\u0431\u043b\u0438)",type:"number"})),l.a.createElement(p.Div,null,l.a.createElement(p.Button,{onClick:function(){return e=document.getElementById("donation").value,void c.a.send("VKWebAppOpenPayForm",{app_id:7021354,action:"pay-to-group",params:{amount:e,description:"\u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436",group_id:181318900}});var e},level:"commerce",size:"xl"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c")))),l.a.createElement(p.Panel,{theme:this.state.theme,id:"sub"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return window.history.back({activePanel:"main"})}},q===p.IOS?l.a.createElement(w.a,null):l.a.createElement(C.a,null))},"SUB"),l.a.createElement(p.Group,null,l.a.createElement(p.Div,null,"TEXT"))))}}]),t}(l.a.Component);c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t);break;default:console.log(e.detail.type)}}),c.a.send("VKWebAppInit",{}),i.a.render(l.a.createElement(Y,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(119)}},[[70,1,2]]]);
//# sourceMappingURL=main.07219453.chunk.js.map