//Unity 2.61

//~ Sensor front is part of the driving behaviour to keep the airplane aligned with the ground
//~ Sensor front ist Teil der Fahreigenschaften um die Flugzeugneigung dem Gel�nde anzugleichen

static var sensorfront=0;
var test=0;

function OnTriggerEnter  (other : Collider) {
sensorfront=1;
test=1;
}

function OnTriggerExit  (other : Collider) {
sensorfront=0;
test=0;
}