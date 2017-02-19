/****************************************************************/
/*                     MOBILE MENU SLIDING                      */
/****************************************************************/
const MOBILE_SCREEN_SIZE = 767;

let mobile_menu;
menuControl = function(){

	let menuBtn;
	let gnbMenu;

	function turn_on() {
		gnbMenu.style.left = MOBILE_SCREEN_SIZE + 'px';
		gnbMenu.style.display = "block";

		slidingHorizontal(gnbMenu.style,-1,0,5,20);

		menuBtn.removeEventListener('click', turn_on);
		menuBtn.setAttribute('class', 'fa fa-times');
		menuBtn.setAttribute('steyle','color: white');
		menuBtn.addEventListener('click', turn_off);

		for(let i=0,len=gnbMenuOptions.length;i<len;i++)
			gnbMenuOptions[i].addEventListener('click',turn_off);
	}

	function turn_off() {
		gnbMenu.style.display = "flex";		
		slidingHorizontal(gnbMenu.style, 1, MOBILE_SCREEN_SIZE, 5, 20);
		menuBtn.removeEventListener('click', turn_off);
		menuBtn.setAttribute('class', 'fa fa-bars');
		menuBtn.setAttribute('steyle','color: black');
		menuBtn.addEventListener('click', turn_on);

		for(let i=0,len=gnbMenuOptions.length;i<len;i++)
			gnbMenuOptions[i].removeEventListener('click',turn_off);
	}

	function menu_event(element) {
		let link = element.getElementsByTagName('a')[0];
		if( link.hasAttribute('href') )
		{
			let tag =link.getAttribute('href').split('#')[1];
		}
	}
	function go_back(){
	}


	return {
		setBtnEle : function(element){
			menuBtn = element;
		},

		setMenuEle : function(element){
			gnbMenu = element;
			gnbMenuOptions = document.getElementsByTagName('a');
		},
		start : function() {
			menuBtn.addEventListener('click', turn_on);
		},
		close : function() {
			turn_off();
		},
	}
}

function slidingHorizontal(obj, direction, end, time_step, step){
	let init = parseFloat(obj.left.split("px")[0]);
	init += direction*step;

	if( (direction == -1 && init <= end) || 
			(direction == 1 && init >= end) )
	{
		obj.left = end + 'px';
		return ;
	}
	else
	{
		obj.left = init + 'px';
		setTimeout(function(){ 
			slidingHorizontal(obj, direction, end, time_step, step) }, time_step);
	}
}

function mobileGnbMenu(){
	mobile_menu = menuControl();
	mobile_menu.setBtnEle(document.getElementById('button-menu'));
	mobile_menu.setMenuEle( document.getElementsByClassName('gnb')[0]);
	mobile_menu.start();

}
/****************************************************************/
/****************** MOBILE MENU SLIDING END *********************/
/****************************************************************/

function screenAttrClean(){
	let sections = document.getElementsByTagName('section');
	for( let i=0, len=sections.length; i<len; i++ )
		sections[i].removeAttribute('style');
}

function resizeEvent(){
	window.addEventListener('resize',()=>{
		if( ScreenStatus == "DESKTOP"  && 
					window.innerWidth <= MOBILE_SCREEN_SIZE ) {
			// DESKTOP SCREEN To MOBILE 
			ScreenStatus = "MOBILE";
			mobileGnbMenu();
		}
		else if( ScreenStatus == "MOBILE"  && 
					window.innerWidth > MOBILE_SCREEN_SIZE ) {
			// MOBILE SCREEN To DESKTOP
			ScreenStatus = "DESKTOP";
			screenAttrClean();
		}
	});
}

/****************************************************************/
/*                  MAIN INIT for MOBILE                        */
/****************************************************************/
function __mobile_init__(){
	if( window.innerWidth <= MOBILE_SCREEN_SIZE ) {
		ScreenStatus = "MOBILE";
	}
	else {
		ScreenStatus = "DESKTOP";
	}
	AddLoadEvent(resizeEvent);
}
__mobile_init__();
AddLoadEvent(mobileGnbMenu);
