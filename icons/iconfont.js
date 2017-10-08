(function(window){var svgSprite='<svg><symbol id="icon-dimenjian1" viewBox="0 0 1024 1024"><path d="M1015.667729 512.940418c0 278.203186-225.526453 503.731686-503.729639 503.731686-278.202163 0-503.731686-225.5285-503.731686-503.731686 0-278.202163 225.529523-503.730663 503.731686-503.730663C790.141276 9.209756 1015.667729 234.738255 1015.667729 512.940418zM508.93571 302.280558l-13.693884 25.232684c-3.65218 6.838755-5.885034 11.384281-6.701632 13.636578l-0.233314 0c-2.408863-5.477758-9.207709-18.433838-20.396539-38.869263l-12.879332 0 23.951505 41.142026-19.638269 0 0 9.091052 23.019273 0 0 12.529361-23.019273 0 0 9.207709 23.019273 0 0 18.240433 11.422144 0 0-18.240433 22.203698 0 0-9.207709-22.203698 0 0-12.529361 22.203698 0 0-9.091052L496.931305 343.422583l24.183795-41.142026L508.93571 302.280558zM267.386328 433.008948l124.706233 0c0 0-0.720408-49.01739 47.336098-87.942935L176.56074 345.066013l0 421.567361 593.784678 0L770.345418 545.79878c0 0-26.670429 38.205137-89.384773 35.322483l0 99.009991L267.386328 680.131255 267.386328 433.008948zM488.147244 402.633127c0 0-98.237395 37.180807-139.169643 113.75788l-47.072085-13.473873 36.839023 143.262868c0 0 47.072085-67.709101 119.195729-77.771271l-49.245587-28.652574C408.695704 539.756157 408.695704 481.564827 488.147244 402.633127zM695.075107 473.181903l-55.323003 0L639.752104 247.255337l-88.100524 25.582655 0 28.780487 56.921407-16.46909 0 188.032514-55.482639 0 0 27.021423 141.983735 0L695.074084 473.181903zM725.598284 472.862631c13.803377 21.00029 33.282011 31.498388 58.439994 31.498388 26.646893 0 47.352471-11.057847 62.117756-33.177634 14.763239-22.11774 22.145369-54.06843 22.145369-95.855138 0-84.635609-26.222221-126.954437-78.666664-126.954437-27.501354 0-48.501644 11.219529-62.997799 33.657564-14.497179 22.440082-21.745257 55.510268-21.745257 99.212606C704.892707 421.324838 711.79286 451.864388 725.598284 472.862631zM787.8767 274.436396c32.191166 0 48.287773 34.591843 48.287773 103.769388 0 66.835198-16.415878 100.252285-49.246611 100.252285-33.363875 0-50.045813-32.882921-50.045813-98.652857C736.871025 309.560358 753.872235 274.436396 787.8767 274.436396z"  ></path></symbol><symbol id="icon-naozhong-copy" viewBox="0 0 1024 1024"><path d="M913.892 470.344c-47.036-130.446-161.892-230.565-304.665-262.434 36.588-52.48 97.191-86.976 165.988-86.976 111.86 0 202.508 90.683 202.508 202.49 0.036 58.032-24.706 109.998-63.83 146.923v0zM524.486 128.505v127.324c194.311 7.93 349.502 167.497 349.502 363.725 0 81.957-27.365 157.264-72.981 218.166l84.458 146.284-70.18 40.49-72.239-125.196c-63.247 52.852-144.637 84.723-233.508 84.723-88.377 0-169.375-31.443-232.481-83.802l-74.153 128.407-70.127-40.49 86.142-149.263c-46.167-61.065-73.886-136.903-73.886-219.34 0-194.933 153.149-353.615 345.545-363.527v-127.539c-19.65-7.024-33.892-25.361-33.892-47.426 0-28.111 22.79-50.866 50.866-50.866 28.111 0 50.866 22.772 50.866 50.866 0 22.099-14.275 40.417-33.929 47.46v0zM226.013 619.555c0 156.571 126.918 283.488 283.488 283.488s283.488-126.881 283.488-283.488c0-156.553-126.918-283.472-283.488-283.472s-283.488 126.918-283.488 283.472v0zM594.49 680.833h-101.786c-18.711 0-33.892-15.2-33.892-33.91v-135.661c0-18.747 15.182-33.929 33.892-33.929 18.783 0 33.929 15.182 33.929 33.929v101.748h67.855c18.73 0 33.892 15.163 33.892 33.946 0 18.676-15.163 33.874-33.892 33.874v0zM110.179 470.344c-39.124-36.926-63.884-88.908-63.884-146.941 0-111.824 90.665-202.49 202.508-202.49 68.815 0 129.399 34.513 165.988 86.994-142.755 31.871-257.575 131.988-304.611 262.434v0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)