// JavaScript Document
window.onload=function(){
		function tab(a,b,c,d,e,f){
			var oUl=document.getElementById(a);
			var oPic=oUl.getElementsByTagName(b);
			var oDiv=document.getElementById(c);
			var oBtn=oDiv.getElementsByTagName(d);
			for (var i = 0; i <oBtn.length; i++) {
				oBtn[i].index=i;
				oBtn[i].onmouseover=function(){
					for(var i = 0; i <oBtn.length; i++){
						oBtn[i].className="";
						oPic[i].className="";
					}
					this.className=e;
					oPic[this.index].className=f;
				}
			}
		}
		tab('ban_pic','li','btn','a','active','show');
		tab('nav_list','dd','nav','li','active','show');
		tab('p_nav_li','li','p_nav','li','','show');
		tab('talk_con','li','talk_nav','p','active','show');
		tab('media_con','li','media_nav','p','active','show');
		tab('video_con','li','video_nav','p','active','show');
		
			
			var aUl=document.getElementById('item');
			var aLi=aUl.getElementsByTagName('li');
			var aPic=aUl.getElementsByTagName('div');
			var aBtn=aUl.getElementsByTagName('h3');
			for (var i = 0; i <aLi.length; i++) {
				aLi[i].index=i;
				aLi[i].onmouseover=function(){
				for(var i=0; i<aLi.length;i++){
				aBtn[i].className="clearfix show";
				aPic[i].className="hide";
				}
				aBtn[this.index].className="clearfix hide";
				aPic[this.index].className="show";
			}
		}
}