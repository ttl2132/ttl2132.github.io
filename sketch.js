function setup() {
	createCanvas(800, 600); // make an HTML canvas element width x height pixels
	frameRate(1);
}

function draw() {
    var widthMargin = 300;
    var topHeightMargin = 100;
    var botHeightMargin = 75;
	background(255);
	c = color(255);
	fill(c);
	noStroke();
	var x1 = widthMargin;
	var y1 = topHeightMargin;
	var x2 = 800/2;
	var y2 = 600-botHeightMargin;
	var x3 = 800-widthMargin;
	var y3 = topHeightMargin;

	triangle(x1, y1, x2, y2, x3, y3);

	strokeWeight(2);
    stroke(155, 61, 255);
	c = color(173, 97, 255, 250);
	fill(c);
	triangle(x1, y1, x2, y2, map(minute(), 0, 60, x1, x3), y3);

    stroke(36, 36, 255);
    c = color(82, 82, 255, 200);
	fill(c);
	triangle(map(hour()%12, 0, 12, x2, x1), map(hour()%12, 0, 12, y2, y1), x2, y2, x3, y3);

    stroke(255, 187, 56);
	c = color(255, 204, 107, 150);
	fill(c);
	triangle(x1, y1, map(second(), 0, 60, x3, x2), map(second(), 0, 60, y3, y2), x3, y3);

	if (second() == 0) {
        console.log(minute());
    }

}