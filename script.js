$(window).on('load', function(){
    $(".preloader").delay(200).fadeOut('slow').remove();
  });

$( "#popup1" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popupone" ).toggle({
        
        easing: "linear"
    }); 
    $( ".popup-content-one" ).slideToggle();
  });

$( "#popupone" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popupone" ).slideToggle(); 
    $( ".popup-content-one" ).slideToggle();// плавно изменяя прозрачность скрываем все элементы <div>
});
//
$( "#popup2" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popuptwo" ).toggle({
        
        easing: "linear"
    }); 
    $( ".popup-content-two" ).slideToggle();
  });

$( "#popuptwo" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popuptwo" ).slideToggle(); 
    $( ".popup-content-two" ).slideToggle();// плавно изменяя прозрачность скрываем все элементы <div>
});
//
$( "#popup3" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popupthree" ).toggle({
        
        easing: "linear"
    }); 
    $( ".popup-content-three" ).slideToggle();
  });

$( "#popupthree" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popupthree" ).slideToggle(); 
    $( ".popup-content-three" ).slideToggle();// плавно изменяя прозрачность скрываем все элементы <div>
});


$(function(){
	
    let $window = $(window);		//Window object
    
    let scrollTime = 1.2;			//Scroll time
    let scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
        
    $window.on("mousewheel DOMMouseScroll", function(event){
        
        //event.preventDefault();	
                                        
        let delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        let scrollTop = $window.scrollTop();
        let finalScroll = scrollTop - parseInt(delta*scrollDistance);
            
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
                autoKill: true,
                overwrite: 5							
            });
                    
    });
    
});

let button = document.querySelector('#top');
console.log(button);
window.addEventListener('scroll', function() {
    button.hidden = (pageYOffset < document.documentElement.clientHeight);
});

window.onload = function () {
	//window.scrollTo(x,y)
	let scrolled;
	let timer;

	document.getElementById('top').onclick = function() {

        event.preventDefault();
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop() {
		if(scrolled > 0){
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100;
			timer = setTimeout(scrollToTop, 100); 
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}



$( ".appclick" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popup" ).toggle({
        easing: "linear"
    }); 
    $( ".popup-content-apetizer" ).slideToggle();
  });

$( "#popup" ).click(function(){ // задаем функцию при нажатиии на элемент с классом out
    $( "#popup" ).slideToggle(); 
    $( ".popup-content-apetizer" ).slideToggle();// плавно изменяя прозрачность скрываем все элементы <div>
});


// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// line.onmousewheel = document.onmousewheel = wheel;
// let line = document.getElementById('#left-line');
// function wheel(event) {
//   var delta = 0;
//   if (event.wheelDelta) delta = event.wheelDelta / 120;
//   else if (event.detail) delta = -event.detail / 3;

//   handle(delta);
//   if (event.preventDefault) event.preventDefault();
//   event.returnValue = false;
// }

// function handle(delta) {
//   var time = 1000;
//   var distance = 300;

//   $('#left-line').stop().animate({
//     scrollTop: $(window).scrollTop() - (distance * delta)
//   }, time);
// }

/*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */
// !function(a,b){"use strict";function c(a){a=a||{};for(var b=1;b<arguments.length;b++){var c=arguments[b];if(c)for(var d in c)c.hasOwnProperty(d)&&("object"==typeof c[d]?deepExtend(a[d],c[d]):a[d]=c[d])}return a}function d(d,g){function h(){if(y){r=b.createElement("canvas"),r.className="pg-canvas",r.style.display="block",d.insertBefore(r,d.firstChild),s=r.getContext("2d"),i();for(var c=Math.round(r.width*r.height/g.density),e=0;c>e;e++){var f=new n;f.setStackPos(e),z.push(f)}a.addEventListener("resize",function(){k()},!1),b.addEventListener("mousemove",function(a){A=a.pageX,B=a.pageY},!1),D&&!C&&a.addEventListener("deviceorientation",function(){F=Math.min(Math.max(-event.beta,-30),30),E=Math.min(Math.max(-event.gamma,-30),30)},!0),j(),q("onInit")}}function i(){r.width=d.offsetWidth,r.height=d.offsetHeight,s.fillStyle=g.dotColor,s.strokeStyle=g.lineColor,s.lineWidth=g.lineWidth}function j(){if(y){u=a.innerWidth,v=a.innerHeight,s.clearRect(0,0,r.width,r.height);for(var b=0;b<z.length;b++)z[b].updatePosition();for(var b=0;b<z.length;b++)z[b].draw();G||(t=requestAnimationFrame(j))}}function k(){i();for(var a=d.offsetWidth,b=d.offsetHeight,c=z.length-1;c>=0;c--)(z[c].position.x>a||z[c].position.y>b)&&z.splice(c,1);var e=Math.round(r.width*r.height/g.density);if(e>z.length)for(;e>z.length;){var f=new n;z.push(f)}else e<z.length&&z.splice(e);for(c=z.length-1;c>=0;c--)z[c].setStackPos(c)}function l(){G=!0}function m(){G=!1,j()}function n(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*r.width),y:Math.ceil(Math.random()*r.height)},this.speed={},g.directionX){case"left":this.speed.x=+(-g.maxSpeedX+Math.random()*g.maxSpeedX-g.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*g.maxSpeedX+g.minSpeedX).toFixed(2);break;default:this.speed.x=+(-g.maxSpeedX/2+Math.random()*g.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?g.minSpeedX:-g.minSpeedX}switch(g.directionY){case"up":this.speed.y=+(-g.maxSpeedY+Math.random()*g.maxSpeedY-g.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*g.maxSpeedY+g.minSpeedY).toFixed(2);break;default:this.speed.y=+(-g.maxSpeedY/2+Math.random()*g.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?g.minSpeedY:-g.minSpeedY}}function o(a,b){return b?void(g[a]=b):g[a]}function p(){console.log("destroy"),r.parentNode.removeChild(r),q("onDestroy"),f&&f(d).removeData("plugin_"+e)}function q(a){void 0!==g[a]&&g[a].call(d)}var r,s,t,u,v,w,x,y=!!b.createElement("canvas").getContext,z=[],A=0,B=0,C=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),D=!!a.DeviceOrientationEvent,E=0,F=0,G=!1;return g=c({},a[e].defaults,g),n.prototype.draw=function(){s.beginPath(),s.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,g.particleRadius/2,0,2*Math.PI,!0),s.closePath(),s.fill(),s.beginPath();for(var a=z.length-1;a>this.stackPos;a--){var b=z[a],c=this.position.x-b.position.x,d=this.position.y-b.position.y,e=Math.sqrt(c*c+d*d).toFixed(2);e<g.proximity&&(s.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),g.curvedLines?s.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):s.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}s.stroke(),s.closePath()},n.prototype.updatePosition=function(){if(g.parallax){if(D&&!C){var a=(u-0)/60;w=(E- -30)*a+0;var b=(v-0)/60;x=(F- -30)*b+0}else w=A,x=B;this.parallaxTargX=(w-u/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(x-v/2)/(g.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var c=d.offsetWidth,e=d.offsetHeight;switch(g.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=c-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>c&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>c||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(g.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=e-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>e&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>e||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},n.prototype.setStackPos=function(a){this.stackPos=a},h(),{option:o,destroy:p,start:m,pause:l}}var e="particleground",f=a.jQuery;a[e]=function(a,b){return new d(a,b)},a[e].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}},f&&(f.fn[e]=function(a){if("string"==typeof arguments[0]){var b,c=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){f.data(this,"plugin_"+e)&&"function"==typeof f.data(this,"plugin_"+e)[c]&&(b=f.data(this,"plugin_"+e)[c].apply(this,g))}),void 0!==b?b:this}return"object"!=typeof a&&a?void 0:this.each(function(){f.data(this,"plugin_"+e)||f.data(this,"plugin_"+e,new d(this,a))})})}(window,document),/**
//  * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
//  * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
//  * @license: MIT license
//  */
// function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();


// particleground(document.getElementById('particles-foreground'), {
//   dotColor: 'rgba(255, 255, 255, 1)',
//   lineColor: 'rgba(255, 255, 255, 0.05)',
//   minSpeedX: 0.3,
//   maxSpeedX: 0.6,
//   minSpeedY: 0.3,
//   maxSpeedY: 0.6,
//   density: 50000, // One particle every n pixels
//   curvedLines: false,
//   proximity: 250, // How close two dots need to be before they join
//   parallaxMultiplier: 10, // Lower the number is more extreme parallax
//   particleRadius: 4, // Dot size
// });

// particleground(document.getElementById('particles-background'), {
//   dotColor: 'rgba(255, 255, 255, 0.5)',
//   lineColor: 'rgba(255, 255, 255, 0.05)',
//   minSpeedX: 0.075,
//   maxSpeedX: 0.15,
//   minSpeedY: 0.075,
//   maxSpeedY: 0.15,
//   density: 30000, // One particle every n pixels
//   curvedLines: false,
//   proximity: 20, // How close two dots need to be before they join
//   parallaxMultiplier: 20, // Lower the number is more extreme parallax
//   particleRadius: 2, // Dot size
// });
