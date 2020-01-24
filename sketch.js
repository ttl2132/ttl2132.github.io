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
	triangle(100, 100, 400, 525, 100 + 600/60 * minute(), 100);

    c = color(82, 82, 255, 200);
	fill(c);
	triangle(400 - 300/12 * hour(), 525 - 425/12 * hour(), 400, 525, 700, 100);

	c = color(255, 204, 107, 150);
	fill(c);
	triangle(100, 100, 700 - 300/60 * second(), 100 + 425/60 * second(), 700, 100)

	if (second() == 0) {
        console.log(minute());
    }

}