import{V as c}from"./web-ifc-api-BC8YMRiS.js";import{f as i,p as d,s as p,k as h,N as l}from"./index-BmA4XTIx.js";import{M as f}from"./index-B5B6dldk.js";import"./import-wrapper-prod-LhqN7JJy.js";import{R as w}from"./renderer-with-2d-k8_K2aYf.js";import"./mark--YNYmWZ2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=document.getElementById("container"),e=new i,g=e.get(d),r=g.create();r.scene=new p(e);r.renderer=new w(e,o);r.camera=new h(e);e.init();r.camera.controls.setLookAt(5,5,5,0,0,0);o.appendChild(r.renderer.three2D.domElement);const k=e.get(l);k.create(r);const n=e.get(f);n.threshold=10;for(let t=0;t<20;t++){const a=Math.random()*5,s=Math.random()*5,m=Math.random()*5;n.create(r,"🚀",new c(a,s,m))}