(this.webpackJsonpfirst_react_app=this.webpackJsonpfirst_react_app||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=n(1),u=n.n(c),l=n(4),s=n(5),d=n(6),m=n(9),p=n(8),v=(n(16),n(7)),h=n.n(v),f={checkForInactiveTracks:!1,disableLogs:!1,getNativeBlob:!1,ignoreMutedMedia:!1,initCallback:null,mimeType:"video/webm",type:"video"},b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={status:"None",stream:null,recorder:null},e.onStart=function(){var t=e.state.stream,n=h()(t,f);n.startRecording(),e.setState({status:"recording..",recorder:n})},e.onFinish=function(){var t=e.state.recorder;t.stopRecording((function(){var n=t.getBlob(),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download="aDefaultFileName.webm",a.innerHTML="Click here to download the file",document.body.appendChild(a),function(t){e.setState(t)}({status:"done"})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=function(t){return e.setState(t)};void 0!==navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById("video").srcObject=n,document.getElementById("video").play(),t({stream:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):alert("\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub97c \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.status),r.a.createElement("input",{type:"button",value:"\ucd2c\uc601 \uc2dc\uc791",onClick:this.onStart}),r.a.createElement("input",{type:"button",value:"\ucd2c\uc601 \uc885\ub8cc",onClick:this.onFinish}),r.a.createElement("video",{id:"video",style:{width:400,height:300,backgroundColor:"black"}}))}}]),n}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c533b52b.chunk.js.map