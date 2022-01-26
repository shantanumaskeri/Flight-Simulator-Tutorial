using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CollisionControl : MonoBehaviour 
{
	ScoreBoard scorebd;

	private void Start ()
	{
		scorebd = GameObject.Find ("Score Board").GetComponent<ScoreBoard>();
	}

	private void OnTriggerEnter (Collider col)
	{
		switch (col.gameObject.name)
		{
		case "coll1":
			scorebd.AddScore (50);
			scorebd.ShowScore ();
			break;

		case "coll2":
			scorebd.AddScore (75);
			scorebd.ShowScore ();
			break;

		case "coll3":
			scorebd.AddScore (100);
			scorebd.ShowScore ();
			break;

		default:
			break;
		}
	}
}
