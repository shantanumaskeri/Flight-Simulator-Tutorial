//Unity 2.61

// Dieses Script ist für Spiel beenden
//This script is for end game

//Mit Druck auf ESC wird das Spiel beendet. Funktioniert erst in der Standalone Version,nicht im Unity Editor.
//By pressing ESC the game gets quit. Works in the standalone version, not in the Unity editor.
function Update () {
	if (Input.GetKey("escape")) Application.Quit();
}
