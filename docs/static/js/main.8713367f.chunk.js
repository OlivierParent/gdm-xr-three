(this["webpackJsonpgmd-xr-three"]=this["webpackJsonpgmd-xr-three"]||[]).push([[0],{66:function(t,e,i){},86:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),s=i(32),r=i.n(s),c=(i(66),i(21)),a=i(92),l=i(16),j=(i(87),i(1)),b=i(8),u=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{color:16777215,intensity:.1}),Object(b.jsx)("directionalLight",{color:16777215,intensity:1,position:[4,4,1]}),Object(b.jsx)("hemisphereLight",{color:16777215,groundColor:16777215,position:[0,1,0]}),Object(b.jsx)("pointLight",{color:16764023,intensity:.5,position:[-4,1,-4]}),Object(b.jsx)("spotLight",{angle:j.MathUtils.degToRad(30),color:16764023,intensity:.5,penumbra:.5,position:[0,4,0]})]})},h=i(88),O=function(){var t=Object(c.f)().scene,e=new j.Object3D;t.add(e);var i=Object(l.b)("Lightings",{"Ambient Light":Object(l.a)({color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.1}})}),o=Object(l.b)("Lightings",{"Directional Light":Object(l.a)({color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.1}})}),s=Object(l.b)("Lightings",{"Hemisphere Light":Object(l.a)({color:{label:"Color",value:"#ffffff"},groundColor:{label:"Ground Color",value:"#ffffff"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.1}})}),r=Object(l.b)("Lightings",{Point:Object(l.a)({color:{label:"Color",value:"#ffcc77"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.5}})}),a=Object(l.b)("Lightings",{Spotlight:Object(l.a)({color:{label:"Color",value:"#ffcc77"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.5},penumbra:{label:"Penumbra",max:1,min:0,step:.1,value:.5},position:{label:"Position",step:.5,value:{x:0,y:4,z:0}},target:{label:"Target",step:.5,value:{x:0,y:0,z:0}}})}),u=Object(n.useRef)(),O=Object(n.useRef)(),g=Object(n.useRef)(),p=Object(n.useRef)();return Object(h.a)(u,j.DirectionalLightHelper,.5,o.color),Object(h.a)(O,j.HemisphereLightHelper,.5),Object(h.a)(g,j.PointLightHelper,.5,r.color),Object(h.a)(p,j.SpotLightHelper,a.color),Object(n.useEffect)((function(){e.position.x=a.target.x,e.position.y=a.target.y,e.position.z=a.target.z})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{color:i.color,intensity:i.intensity}),Object(b.jsx)("directionalLight",{color:o.color,intensity:o.intensity,position:[4,4,1],ref:u}),Object(b.jsx)("hemisphereLight",{color:s.color,groundColor:s.groundColor,intensity:s.intensity,position:[0,1,0],ref:O}),Object(b.jsx)("pointLight",{color:r.color,intensity:r.intensity,position:[-4,1,-4],ref:g}),Object(b.jsx)("spotLight",{angle:j.MathUtils.degToRad(30),color:a.color,intensity:a.intensity,penumbra:a.penumbra,position:[a.position.x,a.position.y,a.position.z],ref:p,target:e})]})},g=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{intensity:.1}),Object(b.jsx)("directionalLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.4,position:[0,2,4]}),Object(b.jsx)("directionalLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",intensity:1,position:[-4,0,0]}),Object(b.jsx)("directionalLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",intensity:1,position:[4,0,0]})]})},p=function(){var t=Object(l.b)("Lightings",{"Ambient Light":Object(l.a)({color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.1}})}),e=Object(l.b)("Lightings",{"Front Light":Object(l.a)({color:{label:"Color",value:"hsl(0, 0%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.4}})}),i=Object(l.b)("Lightings",{"Left Light":Object(l.a)({color:{label:"Color",value:"hsl(210, 100%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:1}})}),o=Object(l.b)("Lightings",{"Right Light":Object(l.a)({color:{label:"Color",value:"hsl(30, 100%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:1}})}),s=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)();return Object(h.a)(s,j.DirectionalLightHelper,.5,e.color),Object(h.a)(r,j.DirectionalLightHelper,.5,i.color),Object(h.a)(c,j.DirectionalLightHelper,.5,o.color),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{color:t.color,intensity:t.intensity}),Object(b.jsx)("directionalLight",{castShadow:!0,color:e.color,intensity:e.intensity,position:[0,2,4],ref:s}),Object(b.jsx)("directionalLight",{castShadow:!0,color:i.color,intensity:i.intensity,position:[-4,0,0],ref:r}),Object(b.jsx)("directionalLight",{castShadow:!0,color:o.color,intensity:o.intensity,position:[4,0,0],ref:c})]})},x=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{intensity:.1}),Object(b.jsx)("spotLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.75,position:[4,2,-4]}),Object(b.jsx)("spotLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",intensity:.75,position:[-4,2,4]}),Object(b.jsx)("spotLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",intensity:.75,position:[4,2,4]})]})},f=function(){var t=Object(l.b)("Lightings",{"Ambient Light":Object(l.a)({color:{label:"Color",value:"#ffffff"},intensity:{label:"Intensity",max:5,min:0,step:.1,value:.1}})}),e=Object(l.b)("Lightings",{"Back Light":Object(l.a)({color:{label:"Color",value:"hsl(0, 0%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.05,value:.75}})}),i=Object(l.b)("Lightings",{"Fill Light":Object(l.a)({color:{label:"Color",value:"hsl(210, 100%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.05,value:.75}})}),o=Object(l.b)("Lightings",{"Key Light":Object(l.a)({color:{label:"Color",value:"hsl(30, 100%, 70%)"},intensity:{label:"Intensity",max:5,min:0,step:.05,value:.75}})}),s=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)();return Object(h.a)(s,j.SpotLightHelper,e.color),Object(h.a)(r,j.SpotLightHelper,i.color),Object(h.a)(c,j.SpotLightHelper,o.color),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ambientLight",{color:t.color,intensity:t.intensity}),Object(b.jsx)("spotLight",{castShadow:!0,color:e.color,intensity:e.intensity,position:[4,2,-4],ref:s}),Object(b.jsx)("spotLight",{castShadow:!0,color:i.color,intensity:i.intensity,position:[-4,2,4],ref:r}),Object(b.jsx)("spotLight",{castShadow:!0,color:o.color,intensity:o.intensity,position:[4,2,4],ref:c})]})},d=i(7),m=i(90),y=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),i=e[0],o=e[1],s=Object(n.useState)(65280),r=Object(d.a)(s,2),c=r[0],a=r[1];return Object(b.jsxs)("group",{onClick:function(){return a(16711680)},onDoubleClick:function(){return a(255)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)},children:[Object(b.jsxs)("mesh",{children:[Object(b.jsx)("meshBasicMaterial",{color:c,opacity:i?.75:1,transparent:!0}),Object(b.jsx)("planeGeometry",{args:[1,.5]})]}),Object(b.jsx)(m.a,{children:"Click Me!"})]})},L=i(29),v=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),i=e[0],o=e[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),c=r[0],a=r[1],l=Object(L.useSpring)({opacity:c?.5:.2,rotation:c?[-45,0,0].map((function(t){return j.MathUtils.degToRad(t)})):[0,0,0],scale:i?[1.5,1.25,1]:[1,1,1]}),u=l.opacity,h=l.rotation,O=l.scale;return Object(b.jsxs)(L.animated.group,{onClick:function(){return a(!c)},onPointerOut:function(){return o(!1)},onPointerOver:function(){return o(!0)},rotation:h,children:[Object(b.jsxs)(L.animated.mesh,{scale:O,children:[Object(b.jsx)("planeGeometry",{args:[1,.5]}),Object(b.jsx)(L.animated.meshBasicMaterial,{color:16711680,opacity:u,transparent:!0})]}),Object(b.jsx)(m.a,{fontSize:.2,position:[0,0,.01],children:"Click Me!"})]})},S=function(){var t=Object(n.useRef)(),e=Object(n.useRef)(),i=Object(n.useRef)(),o=Object(n.useRef)();return Object(c.d)((function(){var t=new Date;e.current&&(e.current.rotation.y=j.MathUtils.degToRad(-30*(t.getHours()+t.getMinutes()/60))),i.current&&(i.current.rotation.y=j.MathUtils.degToRad(-6*t.getMinutes())),o.current&&(o.current.rotation.y=j.MathUtils.degToRad(-6*t.getSeconds()))})),Object(b.jsxs)("group",{ref:t,children:[Object(b.jsx)(m.a,{color:0,fontSize:.2,position:[0,-.5,.01],children:"Arteveldehogeschool"}),Object(b.jsxs)("mesh",{children:[Object(b.jsx)("circleGeometry",{args:[1.8,60]}),Object(b.jsx)("meshBasicMaterial",{color:10066329})]}),Array(60).fill(null).map((function(t,e){var i=j.MathUtils.degToRad(6*e);return Object(b.jsx)("group",{position:[0,0,.005],rotation:[0,0,i],children:Object(b.jsxs)("mesh",{position:[1.6,0,0],children:[Object(b.jsx)("boxGeometry",{args:[e%5?.15:.2,.02,.01]}),Object(b.jsx)("meshBasicMaterial",{color:e%5?6710886:0})]})},e)})),Object(b.jsxs)("group",{rotation:[90,90,0].map((function(t){return j.MathUtils.degToRad(t)})),children:[Object(b.jsx)("group",{ref:i,children:Object(b.jsxs)("mesh",{position:[.7,0,0],children:[Object(b.jsx)("boxGeometry",{args:[1.4,.01,.04]}),Object(b.jsx)("meshBasicMaterial",{color:"green"})]})}),Object(b.jsx)("group",{ref:e,children:Object(b.jsxs)("mesh",{position:[.6,.01,0],children:[Object(b.jsx)("boxGeometry",{args:[1.2,.02,.08]}),Object(b.jsx)("meshBasicMaterial",{color:"red"})]})}),Object(b.jsx)("group",{ref:o,children:Object(b.jsxs)("mesh",{position:[.8,.02,0],children:[Object(b.jsx)("boxGeometry",{args:[1.6,.01,.02]}),Object(b.jsx)("meshBasicMaterial",{color:"blue"})]})})]}),Object(b.jsxs)("mesh",{rotation:[90,0,0].map((function(t){return j.MathUtils.degToRad(t)})),children:[Object(b.jsx)("coneGeometry",{args:[.1,.1,36]}),Object(b.jsx)("meshBasicMaterial",{})]})]})},C=function(){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current&&(t.current.rotation.x=j.MathUtils.degToRad(-30))}),[]),Object(c.d)((function(){t.current&&(t.current.text=(new Date).toLocaleTimeString())})),Object(b.jsx)(m.a,{ref:t,children:"Digital Clock"})},M=function(){var t=Object(n.useState)(!0),e=Object(d.a)(t,2),i=e[0],o=e[1],s=Object(L.useSpring)({position:i?[0,0,0]:[4,4,0].map((function(t){return(2*Math.random()-1)*t}))}).position;return Object(b.jsxs)(L.animated.mesh,{onClick:function(){return o(!i)},position:s,children:[Object(b.jsx)("boxGeometry",{args:[1,1,1]}),Object(b.jsx)("meshBasicMaterial",{color:16777215*Math.random()})]})},R=i(91),w=i.p+"static/media/suzanne.8d88e641.glb",H=function(){var t=Object(R.a)(w,!0),e=t.nodes,i=t.materials;return Object(b.jsx)("mesh",{geometry:e.Suzanne.geometry,material:i.Paars})},T=i(89),G=function(){var t=Object(R.a)(w,!0).nodes,e=Object(l.b)("Components",{Materials:Object(l.a)({Material:Object(l.a)({dithering:{label:"Dithering",value:!1},opacity:{label:"Opacity",max:1,min:0,value:1},transparent:{label:"Transparent",value:!1}}),"Standard Material":Object(l.a)({color:{label:"Color",value:"#ffffff"}})})}),i=e.color,n=e.dithering,o=e.opacity,s=e.transparent;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("mesh",{geometry:t.Suzanne.geometry,children:Object(b.jsx)("meshStandardMaterial",{color:i,dithering:n,opacity:o,transparent:s})}),Object(b.jsx)(T.a,{args:[2,2],position:[0,0,-1],rotation:[0,0,45].map((function(t){return j.MathUtils.degToRad(t)}))})]})},B=["Button","ButtonSpring","Clock (analogue)","Clock (digital)","Cube","Suzanne","Suzanne (Standard)"],D=["Default","Studio","ThreePoint"],I=function(){var t=Object(l.b)("Controls",{enableOrbitControls:{label:"Orbit Controls",value:!0}}).enableOrbitControls,e=Object(l.b)("Helpers",{showAxesHelper:{label:"Axes",value:!1},showGridHelper:{label:"Grid",value:!1}}),i=e.showAxesHelper,o=e.showGridHelper,s=Object(l.b)("General",{useComponent:{label:"Component",options:B,value:"Cube"}}).useComponent,r=Object(l.b)("Lightings",{useLighting:{label:"Lighting",options:D,value:"Default"},showGui:{label:"GUI",value:!1}}),c=r.showGui,j=r.useLighting;function h(t){return s===t}function d(t){return j===t}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(b.Fragment,{children:[i&&Object(b.jsx)("axesHelper",{}),o&&Object(b.jsx)("gridHelper",{}),t&&Object(b.jsx)(a.a,{})]}),h("Button")&&Object(b.jsx)(y,{}),h("ButtonSpring")&&Object(b.jsx)(v,{}),h("Clock (analogue)")&&Object(b.jsx)(S,{}),h("Clock (digital)")&&Object(b.jsx)(C,{}),h("Cube")&&Object(b.jsx)(M,{}),Object(b.jsxs)(n.Suspense,{fallback:null,children:[h("Suzanne")&&Object(b.jsx)(H,{}),h("Suzanne (Standard)")&&Object(b.jsx)(G,{})]}),d("Default")&&!c&&Object(b.jsx)(u,{}),d("Default")&&c&&Object(b.jsx)(O,{}),d("Studio")&&!c&&Object(b.jsx)(g,{}),d("Studio")&&c&&Object(b.jsx)(p,{}),d("ThreePoint")&&!c&&Object(b.jsx)(x,{}),d("ThreePoint")&&c&&Object(b.jsx)(f,{})]})},k=function(){return Object(b.jsx)(c.a,{children:Object(b.jsx)(I,{linear:!1,shadows:!0})})},F=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,93)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),n(t),o(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),F()}},[[86,1,2]]]);
//# sourceMappingURL=main.8713367f.chunk.js.map