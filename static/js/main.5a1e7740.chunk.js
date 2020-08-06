(this.webpackJsonpfirst_react_app=this.webpackJsonpfirst_react_app||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),o=n.n(l),r=n(1),c=n(2),u=n(4),s=n(3),d=(n(15),n(5)),m=n.n(d),p=n(8),f=n(9),h=n.n(f),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={initial:!0,stream:null,recorder:null,file:null,recording:null,recordTime:""},e.calculateTimeDuration=function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),a=Math.floor(e-3600*t-60*n);return n<10&&(n="0"+n),a<10&&(a="0"+a),t<=0?n+":"+a:t+":"+n+":"+a},e.onClickDisplay=function(){var t=e.props.audioOnly,n=function(t){return e.setState(t)};if(e.setState({initial:!1}),null===navigator.mediaDevices||void 0===navigator.mediaDevices)return alert("\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc2e4\uc2dc\uac04 \ub179\uc74c \ub610\ub294 \ub179\ud654\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud30c\uc77c \uc5c5\ub85c\ub4dc \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694."),void n({initial:!0});navigator.mediaDevices.getUserMedia(t?{audio:!0}:{video:!0,audio:!0}).then(function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Got Medias"),n({stream:t,recording:!1}),(a=document.getElementById("video")).srcObject=t,a.muted=!0;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud30c\uc77c \uc5c5\ub85c\ub4dc \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694."),n({initial:!0})}))},e.onClickStart=function(){var t=e.props.audioOnly,n=e.state.stream,a=h()(n,t?{mimeType:"audio/webm",type:"audio",timeSlice:1e3}:{mimeType:"video/webm;codecs=vp8",type:"video",timeSlice:1e3});a.startRecording(),console.log("Started Recording");e.setState({recorder:a,recording:!0},(function(){var t=(new Date).getTime();!function n(){if(e.state.recorder){var a,i,l=(a=((new Date).getTime()-t)/1e3,e.calculateTimeDuration(a));"00:10"===l&&e.onClickFinish(),i={recordTime:l},e.setState(i),setTimeout(n,1e3)}}()}))},e.onClickFinish=function(){var t=e.state,n=t.stream,a=t.recorder;a.stopRecording((function(){console.log("Stopped Recording");var t,i=a.getBlob(),l=document.getElementById("video");l.srcObject=null,l.src=URL.createObjectURL(i),l.muted=!1,n.stop(),a.destroy(),t={recorder:null,stream:null,recording:null,file:i},e.setState(t)}))},e.onClickReset=function(){var t=e.state,n=t.stream,a=t.recorder;null!==n&&n.stop(),null!==a&&a.destroy(),e.setState({initial:!0,stream:null,recorder:null})},e.onChangeFile=function(t){var n=t.target.files[0];e.setState({file:n,initial:!1},(function(){console.log(n),document.getElementById("video").src=URL.createObjectURL(n)}))},e.onClickCancel=function(){var t=e.state,n=t.stream,a=t.recorder;null!==n&&n.stop(),null!==a&&a.destroy(),e.props.onHide()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.initial,n=e.recording,a=e.file,l=e.recordTime,o=this.props.audioOnly;return i.a.createElement("div",{style:{width:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:20,backgroundColor:"#ddd"}},t?i.a.createElement("div",{style:{width:400,height:280,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"white"}},i.a.createElement("button",{onClick:this.onClickDisplay},"\uc2e4\uc2dc\uac04 ",o?"\ub179\uc74c":"\ub179\ud654"),i.a.createElement("input",{type:"file",accept:o?"audio/*":"video/*",onChange:this.onChangeFile}),i.a.createElement("span",null,"\uc704 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 ",i.a.createElement("b",null,"\uc601\uc0c1 \ucd2c\uc601"),"\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),i.a.createElement("span",null,"\ub179\uc74c/\ub179\ud654\ub97c \ub9c8\uce58\uc2e0 \ud6c4 ",i.a.createElement("b",null,"\ud655\uc778")," \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")):i.a.createElement("video",{id:"video",autoPlay:!0,controls:null===n,width:400,height:o?50:280,style:{backgroundColor:"transparent"}}),i.a.createElement("span",null,"\ub179\ud654 \uc2dc\uac04: ",l,"(\ucd5c\ub300 00:10)"),i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},!1===t&&!1===n?i.a.createElement("button",{onClick:this.onClickStart},"\ub179\uc74c \uc2dc\uc791"):null,!1===t&&!0===n?i.a.createElement("button",{onClick:this.onClickFinish},"\ub179\uc74c \uc885\ub8cc"):null,!1===t&&null!==a?i.a.createElement("a",{href:URL.createObjectURL(a),download:o?"audio.webm":"video.webm"},"\ub2e4\uc6b4\ub85c\ub4dc"):null,!1===t?i.a.createElement("button",{onClick:this.onClickReset},"\ucc98\uc74c\ubd80\ud130"):null,i.a.createElement("button",{onClick:this.onClickCancel},"\ucde8\uc18c")))}}]),n}(i.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={showSelect:!1,audioOnly:null},e.onClick=function(){return e.setState({showSelect:!0,audioOnly:null})},e.onClickAudio=function(){return e.setState({showSelect:!1,audioOnly:!0})},e.onClickVideo=function(){return e.setState({showSelect:!1,audioOnly:!1})},e.onHide=function(){return e.setState({showSelect:!1,audioOnly:null})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showSelect,n=e.audioOnly;return i.a.createElement("div",{style:{display:"block"}},i.a.createElement("h1",null,"RecordRTC \uc74c\uc131/\uc601\uc0c1 \uc5c5\ub85c\ub4dc \ud504\ub85c\ud1a0\ud0c0\uc785"),i.a.createElement("button",{onClick:this.onClick},"\uc74c\uc131 \ud639\uc740 \uc601\uc0c1\uc73c\ub85c \uc785\ub825\ud558\uae30"),t?i.a.createElement("div",{style:{marginTop:30,display:"block"}},i.a.createElement("button",{onClick:this.onClickAudio},"\uc74c\uc131\uc73c\ub85c \uc785\ub825\ud558\uae30"),i.a.createElement("button",{onClick:this.onClickVideo},"\uc601\uc0c1\uc73c\ub85c \uc785\ub825\ud558\uae30")):null,null!==n?i.a.createElement(v,{audioOnly:n,onHide:this.onHide}):null)}}]),n}(i.a.Component);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5a1e7740.chunk.js.map