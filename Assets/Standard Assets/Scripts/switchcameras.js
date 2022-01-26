var maincamera : GameObject;
var fixedcamera : GameObject; 
var smoothcamera:GameObject;

/* GUI.Toolbar example */

var selectionGridInt : int = 0;
var selectionStrings : String[] = ["follow cam", "fixed cam", "smooth cam"];


function OnGUI () {

	//Gameover, back to first camera	. 
		if (moveairplane.gameover==2){
			selectionGridInt=0;
			maincamera.GetComponent.<Camera>().enabled = true;
			fixedcamera.GetComponent.<Camera>().enabled = false;
			smoothcamera.GetComponent.<Camera>().enabled = false;
	}
	
	//Camera switching || Kameras wechseln
	else if (moveairplane.gameover!=2) {
	selectionGridInt = GUI.SelectionGrid (Rect (Screen.width-100,60, 100, 100), selectionGridInt, selectionStrings,1);

		if (selectionGridInt==0){
		maincamera.GetComponent.<Camera>().enabled = true;
		fixedcamera.GetComponent.<Camera>().enabled = false;
		smoothcamera.GetComponent.<Camera>().enabled = false;
		
	}
		if (selectionGridInt==1){
		maincamera.GetComponent.<Camera>().enabled = false;
		fixedcamera.GetComponent.<Camera>().enabled = true;
		smoothcamera.GetComponent.<Camera>().enabled = false;
	}
		if (selectionGridInt==2){
		maincamera.GetComponent.<Camera>().enabled = false;
		fixedcamera.GetComponent.<Camera>().enabled = false;
		smoothcamera.GetComponent.<Camera>().enabled = true;
		
		}
		

	}
}	

