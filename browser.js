// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&f&&f.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r,n,t,e,u,o,f,i){var a,c,l,y;if(r<=0)return e;for(a=t<0?(1-r)*t:0,c=u<0?(1-r)*u:0,y=0;y<r;y++)void 0!==(l=f.call(i,n[a],y,a,c,n,e))&&(e[c]=o(l)),a+=t,c+=u;return e}function v(r,n,t,e,u,o,f,i,a,c){var l,y,v,p;if(r<=0)return u;for(l=e,y=f,p=0;p<r;p++)void 0!==(v=a.call(c,n[l],p,l,y,n,u))&&(u[y]=i(v)),l+=t,y+=o;return u}function p(r){return r!=r}l(y,"ndarray",v);var s=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function d(r){return r===s||r===b}function w(r){return Math.abs(r)}var _,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,m=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",U=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return h.call(r);t=r[N],o=N,n=null!=(u=r)&&m.call(u,o);try{r[N]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[N]=t:delete r[N],e}:function(r){return h.call(r)},j="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===U(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=_,E="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(E&&t instanceof Float64Array||"[object Float64Array]"===U(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint8Array,M="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===U(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L,V=H,W="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===U(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,B={uint16:L,uint8:V};(q=new B.uint16(1))[0]=4660;var C=52===new B.uint8(q.buffer)[0],z=!0===C?1:0,D=new G(1),J=new S(D.buffer);function K(r){return D[0]=r,J[z]}function Q(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var R=-.16666666666666632;function X(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(R+u*t):r-(u*(.5*n-e*t)-n-e*R)}var Z,$,rr=!0===C?0:1,nr=new G(1),tr=new S(nr.buffer);!0===C?(Z=1,$=0):(Z=0,$=1);var er={HIGH:Z,LOW:$},ur=new G(1),or=new S(ur.buffer),fr=er.HIGH,ir=er.LOW;function ar(r,n){return or[fr]=r,or[ir]=n,ur[0]}var cr,lr,yr=Math.floor,vr=1023;!0===C?(cr=1,lr=0):(cr=0,lr=1);var pr={HIGH:cr,LOW:lr},sr=new G(1),br=new S(sr.buffer),dr=pr.HIGH,wr=pr.LOW;function _r(r,n){return sr[0]=n,r[0]=br[dr],r[1]=br[wr],r}function Ar(r,n){return 1===arguments.length?_r([0,0],r):_r(r,n)}var hr=[0,0];function mr(r,n){var t,e;return Ar(hr,r),t=hr[0],t&=2147483647,e=K(n),ar(t|=e&=2147483648,hr[1])}function Nr(r,n,t,e){return p(r)||d(r)?(n[e]=r,n[e+t]=0,n):0!==r&&w(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ur=[0,0],jr=[0,0];function gr(r,n){var t,e;return 0===n||0===r||p(r)||d(r)?r:(Nr(r,Ur,1,0),n+=Ur[1],n+=function(r){var n=K(r);return(n=(2146435072&n)>>>20)-vr|0}(r=Ur[0]),n<-1074?mr(0,r):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ar(jr,r),t=jr[0],t&=2148532223,e*ar(t|=n+vr<<20,jr[1])))}function Ir(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Sr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Er=16777216,Fr=5.960464477539063e-8,Tr=Ir(20),Hr=Ir(20),Gr=Ir(20),Pr=Ir(20);function Mr(r,n,t,e,u,o,f,i,a){var c,l,y,v,p,s,b,d,w;for(v=o,w=e[t],d=t,p=0;d>0;p++)l=Fr*w|0,Pr[p]=w-Er*l|0,w=e[d-1]+l,d-=1;if(w=gr(w,u),w-=8*yr(.125*w),w-=b=0|w,y=0,u>0?(b+=p=Pr[t-1]>>24-u,Pr[t-1]-=p<<24-u,y=Pr[t-1]>>23-u):0===u?y=Pr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)d=Pr[p],0===c?0!==d&&(c=1,Pr[p]=16777216-d):Pr[p]=16777215-d;if(u>0)switch(u){case 1:Pr[t-1]&=8388607;break;case 2:Pr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=gr(1,u)))}if(0===w){for(d=0,p=t-1;p>=o;p--)d|=Pr[p];if(0===d){for(s=1;0===Pr[o-s];s++);for(p=t+1;p<=t+s;p++){for(a[i+p]=Or[f+p],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(p-d)];e[p]=l}return Mr(r,n,t+=s,e,u,o,f,i,a)}}if(0===w)for(t-=1,u-=24;0===Pr[t];)t-=1,u-=24;else(w=gr(w,-u))>=Er?(l=Fr*w|0,Pr[t]=w-Er*l|0,u+=24,Pr[t+=1]=l):Pr[t]=0|w;for(l=gr(1,u),p=t;p>=0;p--)e[p]=l*Pr[p],l*=Fr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=Sr[s]*e[p+s];Gr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Gr[p];for(n[0]=0===y?l:-l,l=Gr[0]-l,p=1;p<=t;p++)l+=Gr[p];return n[1]=0===y?l:-l,7&b}function xr(r,n,t,e){var u,o,f,i,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Tr[a]=c<0?0:Or[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Tr[f+(a-c)];Hr[a]=u}return Mr(r,n,4,Hr,i,4,o,f,Tr)}var Lr=Math.round;function Vr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Lr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(K(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(K(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Wr=1.5707963267341256,kr=6077100506506192e-26,Yr=2*kr,qr=3*kr,Br=4*kr,Cr=[0,0,0],zr=[0,0];function Dr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&K(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Vr(r,u,n):u<=1073928572?r>0?(a=r-Wr,n[0]=a-kr,n[1]=a-n[0]-kr,1):(a=r+Wr,n[0]=a+kr,n[1]=a-n[0]+kr,-1):r>0?(a=r-2*Wr,n[0]=a-Yr,n[1]=a-n[0]-Yr,2):(a=r+2*Wr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Vr(r,u,n):r>0?(a=r-3*Wr,n[0]=a-qr,n[1]=a-n[0]-qr,3):(a=r+3*Wr,n[0]=a+qr,n[1]=a-n[0]+qr,-3):1075388923===u?Vr(r,u,n):r>0?(a=r-4*Wr,n[0]=a-Br,n[1]=a-n[0]-Br,4):(a=r+4*Wr,n[0]=a+Br,n[1]=a-n[0]+Br,-4);if(u<1094263291)return Vr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return nr[0]=r,tr[rr]}(r),a=ar(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Cr[f]=0|a,a=16777216*(a-Cr[f]);for(Cr[2]=a,o=3;0===Cr[o-1];)o-=1;return i=xr(Cr,zr,e,o),r<0?(n[0]=-zr[0],n[1]=-zr[1],-i):(n[0]=zr[0],n[1]=zr[1],i)}var Jr=[0,0];function Kr(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Q(r,0);if(n>=2146435072)return NaN;switch(3&Dr(r,Jr)){case 0:return Q(Jr[0],Jr[1]);case 1:return-X(Jr[0],Jr[1]);case 2:return-Q(Jr[0],Jr[1]);default:return X(Jr[0],Jr[1])}}var Qr=[0,0],Rr=3.141592653589793;function Xr(r){var n,t,e,u;return p(r)||d(r)?NaN:(n=w(r))>9007199254740992?1:.5==(e=n-(t=yr(n)))?0:(u=e<.25?Kr(Rr*e):e<.75?function(r){var n;if(n=K(r),(n&=2147483647)<=1072243195)return n<1045430272?r:X(r,0);if(n>=2146435072)return NaN;switch(3&Dr(r,Qr)){case 0:return X(Qr[0],Qr[1]);case 1:return Q(Qr[0],Qr[1]);case 2:return-X(Qr[0],Qr[1]);default:return-Q(Qr[0],Qr[1])}}(Rr*(e=.5-e)):-Kr(Rr*(e=1-e)),t%2==1?-u:u)}function Zr(r){return yr(r)===r}function $r(r){return Zr(r/2)}function rn(r){return $r(r>0?r-1:r+1)}var nn=Math.sqrt,tn=!0===C?0:1,en=new G(1),un=new S(en.buffer);function on(r,n){return en[0]=r,un[tn]=n>>>0,en[0]}function fn(r){return 0|r}var an=!0===C?1:0,cn=new G(1),ln=new S(cn.buffer);function yn(r,n){return cn[0]=r,ln[an]=n>>>0,cn[0]}var vn=1048576,pn=[1,1.5],sn=[0,.5849624872207642],bn=[0,1.350039202129749e-8],dn=2147483647,wn=1048575,_n=1048576,An=2147483647,hn=1083179008,mn=1e300,Nn=1e-300,Un=[0,0],jn=[0,0];function gn(r,n){var t,e,u,o,f,i,a,c,l,y,v,_,A,h;if(p(r)||p(n))return NaN;if(Ar(Un,n),f=Un[0],0===Un[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return nn(r);if(-.5===n)return 1/nn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:w(r)<1==(n===s)?0:s}(r,n)}if(Ar(Un,r),o=Un[0],0===Un[1]){if(0===o)return function(r,n){return n===b?s:n===s?0:n>0?rn(n)?r:0:rn(n)?mr(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&rn(n))return-1;if(d(r))return r===b?gn(-0,-n):n<0?0:s}if(r<0&&!1===Zr(n))return(r-r)/(r-r);if(u=w(r),t=o&An|0,e=f&An|0,a=f>>>31|0,i=(i=o>>>31|0)&&rn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&K(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?i*mn*mn:i*Nn*Nn;if(t>1072693248)return 0===a?i*mn*mn:i*Nn*Nn;v=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=on(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(jn,u)}else v=function(r,n,t){var e,u,o,f,i,a,c,l,y,v,p,s,b,d,w,_,A,h,m,N,U;return h=0,t<vn&&(h-=53,t=K(n*=9007199254740992)),h+=(t>>20)-vr|0,t=1072693248|(m=1048575&t|0),m<=235662?N=0:m<767610?N=1:(N=0,h+=1,t-=vn),f=on(u=(_=(n=yn(n,t))-(c=pn[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=yn(0,e+=N<<18),w=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=on(a=3+(o=f*f)+(w+=(i=A*(_-f*a-f*(n-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(y=on(y=(_=f*a)+(A=i*a+(w-(a-3-o))*u),0))+.9617966939259756*(A-(y-_))+bn[N])-((s=on(s=(v=.9617967009544373*y)+p+(l=sn[N])+(d=h),0))-d-l-v),r[0]=s,r[1]=b,r}(jn,u,t);if(y=(n-(c=on(n,0)))*v[0]+n*v[1],l=c*v[0],Ar(Un,_=y+l),A=fn(Un[0]),h=fn(Un[1]),A>=hn){if(0!=(A-hn|h))return i*mn*mn;if(y+8008566259537294e-32>_-l)return i*mn*mn}else if((A&An)>=1083231232){if(0!=(A-3230714880|h))return i*Nn*Nn;if(y<=_-l)return i*Nn*Nn}return _=function(r,n,t){var e,u,o,f,i,a,c,l,y,v;return y=((l=r&dn|0)>>20)-vr|0,c=0,l>1071644672&&(u=yn(0,((c=r+(_n>>y+1)>>>0)&~(wn>>(y=((c&dn)>>20)-vr|0)))>>>0),c=(c&wn|_n)>>20-y>>>0,r<0&&(c=-c),n-=u),r=fn(r=K(a=1-((a=(o=.6931471824645996*(u=on(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((i=f-(a-o))+a*i)-a))),(r+=c<<20>>>0)>>20<=0?gr(a,c):yn(a,r)}(A,l,y),i*_}function In(r){var n;return p(r)||r===s||r===b?NaN:((n=gn(1.618033988749895,r))-Xr(r)/n)/2.23606797749979}function On(r,n,t,e,u,o,f){return y(r,n,t,e,u,In,o,f)}function Sn(r,n,t,e,u,o,f,i,a){return v(r,n,t,e,u,o,f,In,i,a)}l(On,"ndarray",Sn),r.default=On,r.ndarray=Sn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).binetBy={});
//# sourceMappingURL=browser.js.map
