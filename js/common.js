
/*  Namming Rule : camelCase    - 이 파일 외부에서 사용 금지 */
/*  Namming Rule : PascalCase   - 이 파일 외부에서 사용 가능 */
/*  Namming Rule : snake_case   - 로컬 오브젝트              */

var ScreenStatus = "DESKTOP";
//var SCREEN_STATUS = "MOBILE";

function AddLoadEvent(func) 
{
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} 
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

