// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,f=t.__lookupGetter__,i=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t,e,u,o,f,i){var a,c,l,y;if(r<=0)return e;for(a=t<0?(1-r)*t:0,c=u<0?(1-r)*u:0,y=0;y<r;y++)void 0!==(l=f.call(i,n[a],y,a,c,n,e))&&(e[c]=o(l)),a+=t,c+=u;return e}function y(r,n,t,e,u,o,f,i,a,c){var l,y,v,p;if(r<=0)return u;for(l=e,y=f,p=0;p<r;p++)void 0!==(v=a.call(c,n[l],p,l,y,n,u))&&(u[y]=i(v)),l+=t,y+=o;return u}function v(r){return r!=r}c(l,"ndarray",y);var p=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function s(r){return r===p||r===b}function d(r){return Math.abs(r)}var w,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",N=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return _.call(r);t=r[h],o=h,n=null!=(u=r)&&m.call(u,o);try{r[h]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[h]=t:delete r[h],e}:function(r){return _.call(r)},U="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=w,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V=T,W="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,q={uint16:M,uint8:V};(Y=new q.uint16(1))[0]=4660;var B=52===new q.uint8(Y.buffer)[0],C=!0===B?1:0,z=new H(1),D=new O(z.buffer);function J(r){return z[0]=r,D[C]}function K(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var Q=-.16666666666666632;function R(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Q+u*t):r-(u*(.5*n-e*t)-n-e*Q)}var X,Z,$=!0===B?0:1,rr=new H(1),nr=new O(rr.buffer);!0===B?(X=1,Z=0):(X=0,Z=1);var tr={HIGH:X,LOW:Z},er=new H(1),ur=new O(er.buffer),or=tr.HIGH,fr=tr.LOW;function ir(r,n){return ur[or]=r,ur[fr]=n,er[0]}var ar,cr,lr=Math.floor,yr=1023;!0===B?(ar=1,cr=0):(ar=0,cr=1);var vr={HIGH:ar,LOW:cr},pr=new H(1),br=new O(pr.buffer),sr=vr.HIGH,dr=vr.LOW;function wr(r,n){return pr[0]=n,r[0]=br[sr],r[1]=br[dr],r}function Ar(r,n){return 1===arguments.length?wr([0,0],r):wr(r,n)}var _r=[0,0];function mr(r,n){var t,e;return Ar(_r,r),t=_r[0],t&=2147483647,e=J(n),ir(t|=e&=2147483648,_r[1])}function hr(r,n,t,e){return v(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&d(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var Nr=[0,0],Ur=[0,0];function gr(r,n){var t,e;return 0===n||0===r||v(r)||s(r)?r:(hr(r,Nr,1,0),n+=Nr[1],n+=function(r){var n=J(r);return(n=(2146435072&n)>>>20)-yr|0}(r=Nr[0]),n<-1074?mr(0,r):n>1023?r<0?b:p:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ar(Ur,r),t=Ur[0],t&=2148532223,e*ir(t|=n+yr<<20,Ur[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,n,t,e,u,o,f,i,a){var c,l,y,v,p,b,s,d,w;for(v=o,w=e[t],d=t,p=0;d>0;p++)l=Er*w|0,Gr[p]=w-Sr*l|0,w=e[d-1]+l,d-=1;if(w=gr(w,u),w-=8*lr(.125*w),w-=s=0|w,y=0,u>0?(s+=p=Gr[t-1]>>24-u,Gr[t-1]-=p<<24-u,y=Gr[t-1]>>23-u):0===u?y=Gr[t-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)d=Gr[p],0===c?0!==d&&(c=1,Gr[p]=16777216-d):Gr[p]=16777215-d;if(u>0)switch(u){case 1:Gr[t-1]&=8388607;break;case 2:Gr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=gr(1,u)))}if(0===w){for(d=0,p=t-1;p>=o;p--)d|=Gr[p];if(0===d){for(b=1;0===Gr[o-b];b++);for(p=t+1;p<=t+b;p++){for(a[i+p]=Ir[f+p],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(p-d)];e[p]=l}return Pr(r,n,t+=b,e,u,o,f,i,a)}}if(0===w)for(t-=1,u-=24;0===Gr[t];)t-=1,u-=24;else(w=gr(w,-u))>=Sr?(l=Er*w|0,Gr[t]=w-Sr*l|0,u+=24,Gr[t+=1]=l):Gr[t]=0|w;for(l=gr(1,u),p=t;p>=0;p--)e[p]=l*Gr[p],l*=Er;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=Or[b]*e[p+b];Hr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Hr[p];for(n[0]=0===y?l:-l,l=Hr[0]-l,p=1;p<=t;p++)l+=Hr[p];return n[1]=0===y?l:-l,7&s}function Lr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Fr[f+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,i,4,o,f,Fr)}var Mr=Math.round;function Vr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Mr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(J(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(J(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Wr=1.5707963267341256,kr=6077100506506192e-26,xr=2*kr,Yr=3*kr,qr=4*kr,Br=[0,0,0],Cr=[0,0];function zr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&J(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Vr(r,u,n):u<=1073928572?r>0?(a=r-Wr,n[0]=a-kr,n[1]=a-n[0]-kr,1):(a=r+Wr,n[0]=a+kr,n[1]=a-n[0]+kr,-1):r>0?(a=r-2*Wr,n[0]=a-xr,n[1]=a-n[0]-xr,2):(a=r+2*Wr,n[0]=a+xr,n[1]=a-n[0]+xr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Vr(r,u,n):r>0?(a=r-3*Wr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Wr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Vr(r,u,n):r>0?(a=r-4*Wr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Wr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Vr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return rr[0]=r,nr[$]}(r),a=ir(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Br[f]=0|a,a=16777216*(a-Br[f]);for(Br[2]=a,o=3;0===Br[o-1];)o-=1;return i=Lr(Br,Cr,e,o),r<0?(n[0]=-Cr[0],n[1]=-Cr[1],-i):(n[0]=Cr[0],n[1]=Cr[1],i)}var Dr=[0,0];function Jr(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1044381696?1:K(r,0);if(n>=2146435072)return NaN;switch(3&zr(r,Dr)){case 0:return K(Dr[0],Dr[1]);case 1:return-R(Dr[0],Dr[1]);case 2:return-K(Dr[0],Dr[1]);default:return R(Dr[0],Dr[1])}}var Kr=[0,0],Qr=3.141592653589793;function Rr(r){var n,t,e,u;return v(r)||s(r)?NaN:(n=d(r))>9007199254740992?1:.5==(e=n-(t=lr(n)))?0:(u=e<.25?Jr(Qr*e):e<.75?function(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1045430272?r:R(r,0);if(n>=2146435072)return NaN;switch(3&zr(r,Kr)){case 0:return R(Kr[0],Kr[1]);case 1:return K(Kr[0],Kr[1]);case 2:return-R(Kr[0],Kr[1]);default:return-K(Kr[0],Kr[1])}}(Qr*(e=.5-e)):-Jr(Qr*(e=1-e)),t%2==1?-u:u)}function Xr(r){return lr(r)===r}function Zr(r){return Xr(r/2)}function $r(r){return Zr(r>0?r-1:r+1)}var rn=Math.sqrt,nn=!0===B?0:1,tn=new H(1),en=new O(tn.buffer);function un(r,n){return tn[0]=r,en[nn]=n>>>0,tn[0]}function on(r){return 0|r}var fn=!0===B?1:0,an=new H(1),cn=new O(an.buffer);function ln(r,n){return an[0]=r,cn[fn]=n>>>0,an[0]}var yn=1048576,vn=[1,1.5],pn=[0,.5849624872207642],bn=[0,1.350039202129749e-8],sn=2147483647,dn=1048575,wn=1048576,An=2147483647,_n=1083179008,mn=1e300,hn=1e-300,Nn=[0,0],Un=[0,0];function gn(r,n){var t,e,u,o,f,i,a,c,l,y,w,A,_,m;if(v(r)||v(n))return NaN;if(Ar(Nn,n),f=Nn[0],0===Nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return rn(r);if(-.5===n)return 1/rn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:d(r)<1==(n===p)?0:p}(r,n)}if(Ar(Nn,r),o=Nn[0],0===Nn[1]){if(0===o)return function(r,n){return n===b?p:n===p?0:n>0?$r(n)?r:0:$r(n)?mr(p,r):p}(r,n);if(1===r)return 1;if(-1===r&&$r(n))return-1;if(s(r))return r===b?gn(-0,-n):n<0?0:p}if(r<0&&!1===Xr(n))return(r-r)/(r-r);if(u=d(r),t=o&An|0,e=f&An|0,a=f>>>31|0,i=(i=o>>>31|0)&&$r(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&J(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?i*mn*mn:i*hn*hn;if(t>1072693248)return 0===a?i*mn*mn:i*hn*hn;w=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=un(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(Un,u)}else w=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,b,s,d,w,A,_,m,h,N,U;return m=0,t<yn&&(m-=53,t=J(n*=9007199254740992)),m+=(t>>20)-yr|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=yn),f=un(u=(A=(n=ln(n,t))-(c=vn[N]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=ln(0,e+=N<<18),w=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=un(a=3+(o=f*f)+(w+=(i=_*(A-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=un(y=(A=f*a)+(_=i*a+(w-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+bn[N])-((b=un(b=(v=.9617967009544373*y)+p+(l=pn[N])+(d=m),0))-d-l-v),r[0]=b,r[1]=s,r}(Un,u,t);if(y=(n-(c=un(n,0)))*w[0]+n*w[1],l=c*w[0],Ar(Nn,A=y+l),_=on(Nn[0]),m=on(Nn[1]),_>=_n){if(0!=(_-_n|m))return i*mn*mn;if(y+8008566259537294e-32>A-l)return i*mn*mn}else if((_&An)>=1083231232){if(0!=(_-3230714880|m))return i*hn*hn;if(y<=A-l)return i*hn*hn}return A=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&sn|0)>>20)-yr|0,c=0,l>1071644672&&(u=ln(0,((c=r+(wn>>y+1)>>>0)&~(dn>>(y=((c&sn)>>20)-yr|0)))>>>0),c=(c&dn|wn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=on(r=J(a=1-((a=(o=.6931471824645996*(u=un(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?gr(a,c):ln(a,r)}(_,l,y),i*A}function jn(r){var n;return v(r)||r===p||r===b?NaN:((n=gn(1.618033988749895,r))-Rr(r)/n)/2.23606797749979}function In(r,n,t,e,u,o,f){return l(r,n,t,e,u,jn,o,f)}return c(In,"ndarray",(function(r,n,t,e,u,o,f,i,a){return y(r,n,t,e,u,o,f,jn,i,a)})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).binetBy=n();
//# sourceMappingURL=browser.js.map
