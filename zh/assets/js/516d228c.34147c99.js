"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9792],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=t.createContext({}),a=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=a(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=a(r),m=s,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||o;return r?t.createElement(d,l(l({ref:n},u),{},{components:r})):t.createElement(d,l({ref:n},u))}));function m(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var a=2;a<o;a++)l[a]=r[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},254:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return a},toc:function(){return u},default:function(){return g}});var t=r(7462),s=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"\u8fb9\u7f18Ingress"},p=void 0,a={unversionedId:"user-manuals/network/edge-ingress",id:"version-v0.5.0/user-manuals/network/edge-ingress",isDocsHomePage:!1,title:"\u8fb9\u7f18Ingress",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u901a\u8fc7\u8fb9\u7f18Ingress\u8bbf\u95ee\u8fb9\u7f18\u8282\u70b9\u6c60\u63d0\u4f9b\u7684\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/user-manuals/network/edge-ingress.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/edge-ingress",permalink:"/zh/docs/user-manuals/network/edge-ingress",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-ingress.md",tags:[],version:"v0.5.0",lastUpdatedBy:"zzguang",lastUpdatedAt:1641261070,formattedLastUpdatedAt:"2022/1/4",frontMatter:{title:"\u8fb9\u7f18Ingress"},sidebar:"version-v0.5.0/docs",previous:{title:"\u670d\u52a1\u62d3\u6251",permalink:"/zh/docs/user-manuals/network/service-topology"},next:{title:"Edge local storage",permalink:"/zh/docs/user-manuals/storage/edge-local-storage"}},u=[{value:"1.\u542f\u7528\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd",id:"1\u542f\u7528\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18ingress\u529f\u80fd",children:[],level:2},{value:"2.\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1",id:"2\u540ck8s\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1",children:[],level:2}],c={toc:u};function g(e){var n=e.components,r=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u901a\u8fc7\u8fb9\u7f18Ingress\u8bbf\u95ee\u8fb9\u7f18\u8282\u70b9\u6c60\u63d0\u4f9b\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u8fb9\u7f18Ingress\u8bbf\u95ee\u8fb9\u7f18\u670d\u52a1\u53ea\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\uff1a"),(0,o.kt)("p",null,"1.\u542f\u7528\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd\u3002"),(0,o.kt)("p",null,"2.\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u8bf7\u6309\u4ee5\u4e0b\u8be6\u7ec6\u6b65\u9aa4\u5c1d\u8bd5YurtIngress\u529f\u80fd\uff1a"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1\u542f\u7528\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18ingress\u529f\u80fd"},"1.\u542f\u7528\u8282\u70b9\u6c60\u4e0a\u7684\u8fb9\u7f18Ingress\u529f\u80fd"),(0,o.kt)("p",null,"YurtIngress opeator\u8d1f\u8d23\u5c06nginx ingress controller\u90e8\u7f72\u5230\u9700\u8981\u542f\u7528\u8fb9\u7f18Ingress\u529f\u80fd\u7684\u8282\u70b9\u6c60\u4e2d\u3002\n\u5047\u8bbe\u60a8\u7684OpenYurt\u96c6\u7fa4\u4e2d\u67094\u4e2a\u8282\u70b9\u6c60\uff1apool01\u3001pool02\u3001pool03\u3001pool04\uff0c\u5982\u679c\u60a8\u60f3\u8981\u5728pool01\u548cpool03\u4e0a\u542f\u7528\u8fb9\u7f18ingress\u529f\u80fd\uff0c\u53ef\u4ee5\u6309\u5982\u4e0b\u65b9\u5f0f\u521b\u5efaYurtIngress CR\uff1a"),(0,o.kt)("p",null,"1). \u521b\u5efaYurtIngress CR yaml\u6587\u4ef6: (\u6bd4\u5982: yurtingress-test.yaml)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  apiVersion: apps.openyurt.io/v1alpha1\n  kind: YurtIngress\n  metadata:\n    name: yurtingress-singleton\n  spec:\n      ingress_controller_replicas_per_pool: 1\n      pools:\n        - name: pool01\n        - name: pool03\n")),(0,o.kt)("p",null,"\u63d0\u793a\uff1a"),(0,o.kt)("p",null,"a). YurtIngress CR\u662f\u96c6\u7fa4\u7ea7\u522b\u7684\u5355\u4f8b\u5b9e\u4f8b\uff0cCR\u540d\u79f0\u5fc5\u987b\u4e3a\u201cyurtIngress-singleton\u201d"),(0,o.kt)("p",null,"b). \u5728spec\u4e2d\uff0c\u201cingress_controller_replicas_per_pool\u201d\u8868\u793a\u90e8\u7f72\u5728\u6bcf\u4e2a\u8282\u70b9\u6c60\u4e0a\u7684ingress\u63a7\u5236\u5668\u526f\u672c\u6570\uff0c\u5b83\u4e3b\u8981\u7528\u4e8eHA\u9ad8\u53ef\u7528\u573a\u666f\u3002"),(0,o.kt)("p",null,"c). \u5728spec\u4e2d\uff0c\u201cpools\u201d\u8868\u793a\u8981\u5728\u5176\u4e0a\u5f00\u542fingress\u529f\u80fd\u7684\u8282\u70b9\u6c60\u5217\u8868\uff0c\u76ee\u524d\u53ea\u652f\u6301\u6c60\u540d\uff0c\u4ee5\u540e\u53ef\u4ee5\u6269\u5c55\u4e3a\u652f\u6301\u8282\u70b9\u6c60\u4e2a\u6027\u5316\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"2). \u90e8\u7f72YurtIngress CR yaml\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f yurtingress-test.yaml\nyurtingress.apps.openyurt.io/yurtingress-singleton created\n")),(0,o.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u67e5\u770bYurtIngress CR\u7684\u72b6\u6001:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get ying\nNAME                    NGINX-INGRESS-VERSION   REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE\nyurtingress-singleton   0.48.1                  1                   2          0             3m13s\n")),(0,o.kt)("p",null,"\u6210\u529f\u90e8\u7f72ingress controller\u540e\uff0c\u6bcf\u4e2a\u8282\u70b9\u6c60\u5c06\u66b4\u6f0f\u4e00\u4e2aNodePort\u7c7b\u578b\u7684Service\u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get svc -A\ningress-nginx   pool01-ingress-nginx-controller   NodePort    192.167.107.123   <none>    80:32255/TCP,443:32275/TCP   53m\ningress-nginx   pool03-ingress-nginx-controller   NodePort    192.167.48.114    <none>    80:30531/TCP,443:30916/TCP   53m\n")),(0,o.kt)("p",null,"\u63d0\u793a:"),(0,o.kt)("p",null,"a). \u201cying\u201d\u662fYurtIngress\u8d44\u6e90\u7684\u7b80\u79f0"),(0,o.kt)("p",null,"b). YurtIngress\u76ee\u524d\u4ec5\u652f\u6301\u56fa\u5b9a\u7248\u672c\u7684nginx ingress controller\uff0c\u6211\u4eec\u5c06\u5728\u672a\u6765\u5bf9\u5176\u8fdb\u884c\u589e\u5f3a\uff0c\u4ee5\u652f\u6301\u7528\u6237\u53ef\u914d\u7f6enginx ingress controller\u6620\u50cf/\u7248\u672c\u3002"),(0,o.kt)("p",null,"c). \u5f53\u201cREADYNUM\u201d\u4e0e\u60a8\u90e8\u7f72\u7684\u8282\u70b9\u6c60\u6570\u91cf\u4e00\u81f4\u65f6\uff0c\u8868\u793aingress\u529f\u80fd\u5df2\u5728\u60a8\u5b9a\u4e49\u7684\u6240\u6709\u8282\u70b9\u6c60\u4e0a\u5c31\u7eea\u3002"),(0,o.kt)("p",null,"d). \u5f53\u201cNOTREADYNUM\u201d\u4e00\u76f4\u4e0d\u4e3a0\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u201ckubectl describe ying yurtingress-singleton\u201d\u6765\u67e5\u770b\u539f\u56e0\u53ca\u8be6\u7ec6\u4fe1\u606f\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u68c0\u67e5\u76f8\u5e94\u7684\u90e8\u7f72\uff08xxx-ingress-nginx-controller\uff0cxxx\u4ee3\u8868\u8282\u70b9\u6c60\u540d\uff09\uff0c\u4ee5\u627e\u51faingress\u529f\u80fd\u8fd8\u672a\u5c31\u7eea\u7684\u539f\u56e0\u3002"),(0,o.kt)("p",null,"e). \u5bf9\u4e8e\u6210\u529f\u542f\u7528ingress\u529f\u80fd\u7684\u6bcf\u4e2aNodePool\uff0c\u4f1a\u4e3a\u7528\u6237\u66b4\u6f0f\u4e00\u4e2aNodePort\u7c7b\u578b\u7684\u670d\u52a1\u7528\u6765\u8bbf\u95eenginx ingress controller\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2\u540ck8s\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1"},"2.\u540cK8S\u4e00\u6837\u521b\u5efa\u5e76\u90e8\u7f72ingress\u89c4\u5219\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684\u670d\u52a1"),(0,o.kt)("p",null,"\u5f53\u4e0a\u8ff0\u6b65\u9aa41\u5b8c\u6210\u540e\uff0c\u60a8\u5df2\u7ecf\u901a\u8fc7Yurtingress\u6210\u529f\u7684\u5c06nginx ingress controller\u90e8\u7f72\u5230\u76f8\u5e94\u7684\u8282\u70b9\u6c60\u4e2d\u3002\u63a5\u4e0b\u6765\u7684\u7528\u6cd5\u5c31\u548cK8S\u4e2d\u4f7f\u7528ingress\u7684\u4f53\u9a8c\u4e00\u81f4\u4e86\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u60a8\u7684\u4e1a\u52a1\u5e94\u7528\u88ab\u90e8\u7f72\u5230\u4e86\u591a\u4e2a\u8282\u70b9\u6c60\u4e2d\uff08\u4f8b\u5982pool01\u548cpool03\uff09\uff0c\u5e76\u4e14\u5b83\u4eec\u901a\u8fc7\u4e00\u4e2a\u5168\u5c40\u7684service\uff08\u4f8b\u5982myapp service\uff09\u5bf9\u5916\u66b4\u6f0f\uff0c\u5f53\u60a8\u60f3\u8981\u8bbf\u95eepool01\u63d0\u4f9b\u7684\u670d\u52a1\u65f6\uff0c\u60a8\u53ef\u4ee5\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,o.kt)("p",null,"1). \u521b\u5efaingress\u89c4\u5219yaml\u6587\u4ef6: (\u6bd4\u5982: ingress-myapp.yaml)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-myapp\n  annotations:\n    ingress.kubernetes.io/rewrite-target: /\nspec:\n  ingressclassName: pool01\n  rules:\n  - http:\n      paths:\n        - path: /myapp\n          backend:\n          serviceName: myapp-service\n          servicePort: xxx\n")),(0,o.kt)("p",null,"\u63d0\u793a:"),(0,o.kt)("p",null,"a). \u7531\u54ea\u4e2a\u8282\u70b9\u6c60\u63d0\u4f9bingress\u529f\u80fd\u662f\u7531ingress class\u51b3\u5b9a\u7684\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5c06ingress class\u5b9a\u4e49\u4e3a\u60a8\u60f3\u8981\u8bbf\u95ee\u670d\u52a1\u7684\u8282\u70b9\u6c60\u540d\u79f0\u3002"),(0,o.kt)("p",null,"b). \u4e0d\u540cK8S\u7248\u672c\u7684ingress CR\u5b9a\u4e49\u53ef\u80fd\u4e0d\u540c\uff0c\u60a8\u9700\u8981\u786e\u4fddingress CR\u7684\u5b9a\u4e49\u4e0e\u96c6\u7fa4K8S\u7248\u672c\u5339\u914d\u3002"),(0,o.kt)("p",null,"2). \u90e8\u7f72ingress\u89c4\u5219yaml\u6587\u4ef6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  kubectl apply -f ingress-myapp.yaml\n  ingress.extensions/ingress-myapp created\n")),(0,o.kt)("p",null,"\u6210\u529f\u5b8c\u6210\u4e0a\u8ff0\u6240\u6709\u6b65\u9aa4\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7ingress controller NodePort service\u9a8c\u8bc1\u8fb9\u7f18Ingress\u529f\u80fd\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  curl xxx:32255/myapp\n\n  "xxx"       \u4ee3\u8868\u8282\u70b9\u6c60pool01\u4e2d\u7684\u8282\u70b9IP\u5730\u5740\n  "32255"     \u4ee3\u8868\u5bf9\u5e94\u8282\u70b9\u6c60\u4e2dingress controller\u66b4\u6f0f\u7684service NodePort\n')))}g.isMDXComponent=!0}}]);