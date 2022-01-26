//Unity 2.61

//Hier habe ich alles drin was mit Debuggen von Variablen zu tun hat 
//Here i have everything that has to do with debugging variables

static var displaydebug=1;
var  mainskin : GUISkin; //This is to connect the script with the guiskin


function OnGUI () {

//Button to turn on and off

	if (displaydebug==0){
		if (GUI.Button (Rect (Screen.width-100,10,100,20), "hide debug")){
			print ("debugstuff hidden");
			displaydebug=1;
		}
	}
	if (displaydebug==1){
		if (GUI.Button (Rect (Screen.width-100,10,100,20), "show debug")){
			print ("debugstuff visible");
			displaydebug=0;
		}
	}

if (displaydebug==0){
GUI.skin =  mainskin; //As you can see, the button up right doesn`t get covered by the GUISkin settings. 

//Debugvalue Groundtrigger
	GUI.contentColor=Color(1,1,1);
	GUI.Label( Rect( Screen.width/2+16, Screen.height-144-20, 256, 256 ), "groundtrigger   " +groundtrigger.triggered);

//Debugvalue Rotation Y
	GUI.Label((Rect (Screen.width/2+176,Screen.height-144-20,256,256)),"Global Y    "+(Mathf.Round( moveairplane.rotationy)));
	
//Text rotation airplane around X
	GUI.Label( Rect( Screen.width/2-288, Screen.height-144-30, 96, 20),"Local X   "+(Mathf.Round( moveairplane.rotationx )));
		
//Text rotation airplane around Z
	GUI.Label( Rect( Screen.width/2-288, Screen.height-144-20, 96, 20),"Local Z    "+(Mathf.Round( moveairplane.rotationz)));
		
//Speed value
	GUI.Label( Rect( Screen.width/2-144, Screen.height-144-20, 256, 256 ),"Speed   "+(Mathf.Round( moveairplane.speed)));
	
	
	//sensors
	GUI.Label( Rect( Screen.width/2, Screen.height-144-40, 256, 256 ),"sensor rear   "+( sensorrear.sensorrear));
	GUI.Label( Rect( Screen.width/2, Screen.height-144-50, 256, 256 ),"sensor front   "+( sensorfront.sensorfront));
	GUI.Label( Rect( Screen.width/2, Screen.height-144-60, 256, 256 ),"sensor front up "+( sensorfrontup.sensorfrontup));
	
	GUI.Label( Rect( Screen.width/2, Screen.height-144-80, 256, 256 ),"game over "+( moveairplane.gameover));

	}

}



