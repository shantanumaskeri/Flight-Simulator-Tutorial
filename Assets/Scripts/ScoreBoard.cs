using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreBoard : MonoBehaviour 
{
	public Text scoreText;

	private int score = 0;
	
	public void AddScore (int value)
	{
		score += value;
	}

	public void ShowScore ()
	{
		scoreText.text = "SCORE : "+score;
	}
}
