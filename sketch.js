function setup() {
	createCanvas(800, 600); // make an HTML canvas element width x height pixels
	frameRate(1);
}

function draw() {
	background(225);
	c = color(255);
	fill(c);
	noStroke();
	triangle(100, 100, 400, 525, 700, 100);

	c = color(173, 97, 255, 250);
	fill(c);
	triangle(100, 100, 400, 525, map(minute(), 0, 60, 100, 700), 100);

    c = color(82, 82, 255, 200);
	fill(c);
	triangle(map(hour(), 0, 12, 400, 100), map(hour(), 0, 12, 525, 100), 400, 525, 700, 100);

	c = color(255, 204, 107, 150);
	fill(c);
	triangle(100, 100, map(second(), 0, 60, 700, 400), map(second(), 0, 60, 100, 525), 700, 100);

	if (second() == 0) {
        console.log(minute());
    }

}