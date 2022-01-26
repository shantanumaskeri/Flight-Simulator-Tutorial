//Unity 2.61

//Ein wenig Erklärungstext
//A bit explanationtext

function OnGUI () 
{
	GUI.contentColor = Color (1, 1, 1);  //This is another way to colour the text
	//GUI.font = "Bebas";
	GUI.Label (Rect (32, 48, 320, 150), "Left Ctrl to accelerate, Left Shift to deccelerate \nArrow keys to change direction\nExit with Alt+F4 or ESC\nRestart level with F2\n\nFor Debug press 1 above the letters. \nThis brings you to height of 200 \nand speed of 700");// slash n "\n" is newline.
}