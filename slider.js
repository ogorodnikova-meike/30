function fetchSlides(){$.ajax({type:"GET",url:"/endpoints/get-slider-info",cache:!0,success:function(e){$.each(e,function(n,i,t=e.length){0==n&&$(".slider-container").css("background-image","url("+i.img_uri+")"),addSlides(i,n,t)})},error:function(e){e.status}})}function addSlides(e,n,i){$("<div/>",{class:"__content "}).appendTo("#slider-container").append([$("<p/>",{text:e.copy1}),$("<h1/>",{text:e.title}),$("<p/>",{text:e.copy2}),$("<span/>",{text:e.img_uri,style:"display:none"})])}(function(n){function t(){e=document.getElementById("right_line"),null!=e&&(e.classList.contains("bound")||c(),l(e,"click"))}function s(){$curActive=document.querySelector(".__content--active"),$curActive||(slidingBlocked=!1),slidingBlocked||(slidingBlocked=!0,$control=this,isRight=$control.classList.contains("m--right"),index=+$curActive.dataset.slide,isRight?index++:index--,index<1&&(index=numOfSlides),index>numOfSlides&&(index=1),$newActive=document.querySelector(".slide-"+index),$curActive.classList.remove("__content--active","s--active-prev"),document.querySelector(".s--prev").classList.remove("s--prev"),$newActive.classList.add("__content--active"),$sliderContainer=document.querySelector(".slider-container"),$sliderContainer.style.backgroundImage="url("+$newActive.children[2].textContent+")",isRight||$newActive.classList.add("s--active-prev"),prevIndex=index-1,prevIndex<1&&(prevIndex=numOfSlides),document.querySelector(".slide-"+prevIndex).classList.add("s--prev"),setTimeout(function(){slidingBlocked=!1},.75*slidingAT))}function c(){$slides=document.querySelectorAll(".__content"),$controls=document.querySelectorAll(".__control"),numOfSlides=$slides.length,[].slice.call($slides).forEach(function(e,n){i=n+1,e.classList.add("slide-"+i),0==n?e.classList.add("__content--active"):n+1==numOfSlides&&e.classList.add("s--prev"),e.dataset.slide=i}),[].slice.call($controls).forEach(function(e){e.addEventListener("click",s),e.classList.add("bound")}),slidingBlocked=!1}function l(e,n){e.fireEvent?e.fireEvent("on"+n):(evObj=document.createEvent("Events"),evObj.initEvent(n,!0,!1),e.dispatchEvent(evObj))}$slides=null,$controls=null,numOfSlides=null,slidingBlocked=!1,slidingAT=1300,c(),window.setInterval(t,5500)})(jQuery);