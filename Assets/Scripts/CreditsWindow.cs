using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CreditsWindow : MonoBehaviour 
{
	public Image credits;
	public GameObject layout;

	private bool isCredsOpen = false;
	private bool isShiftPressed = false;
	private bool isCPressed = false;

	// Update is called once per frame
	private void Update () 
	{
		ToggleCredits ();	
	}

	private void ToggleCredits ()
	{
		if (Input.GetKeyDown (KeyCode.LeftShift))
		{
			isShiftPressed = true;
			isCredsOpen = !isCredsOpen;
		}
		else if (Input.GetKeyUp (KeyCode.LeftShift))
		{
			isShiftPressed = false;
		}

		if (Input.GetKeyDown (KeyCode.C))
		{
			isCPressed = true;
		}
		else if (Input.GetKeyUp (KeyCode.C))
		{
			isCPressed = false;
		}

		if (isShiftPressed && isCPressed)
		{
			credits.enabled = isCredsOpen;
			layout.SetActive (!isCredsOpen);
		}
	}
}
