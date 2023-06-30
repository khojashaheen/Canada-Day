function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(45)
}

let sizeFrame = 260;

function draw() {
		
	let step = (frameCount) % sizeFrame;
	translate(windowWidth/2, windowHeight*3/5)
	
	strokeWeight(5)
	stroke("rgb(255,255,255)")
	fill("red")
	
	let vectorArrays = []
	let sizeArr=arrayCoordinatesLeft.length;
	let scaleFactor =20
	let stepSize=10
	
	//define vectors right
	for (k=0; k<sizeArr-1;k++) {
		let vRight = createVector(map(step,k*stepSize,k*stepSize+(stepSize-1),arrayCoordinatesRight[k][0]*scaleFactor,arrayCoordinatesRight[k+1][0]*scaleFactor), 
																			map(step,k*stepSize,k*stepSize+(stepSize-1),arrayCoordinatesRight[k][1]*scaleFactor,arrayCoordinatesRight[k+1][1]*scaleFactor))
		append(vectorArrays, vRight);
	}

	//define vectors left
	for (k=0; k<sizeArr-1;k++) {
			let vLeft = createVector(map(step,k*stepSize+sizeFrame/2,k*stepSize+(stepSize-1)+sizeFrame/2,arrayCoordinatesLeft[k][0]*scaleFactor,arrayCoordinatesLeft[k+1][0]*scaleFactor), 
																				map(step,k*stepSize+sizeFrame/2,k*stepSize+(stepSize-1)+sizeFrame/2,arrayCoordinatesLeft[k][1]*scaleFactor,arrayCoordinatesLeft[k+1][1]*scaleFactor))
			append(vectorArrays, vLeft);
	}

	//Print the maple leafs
	scale(0.175)
	let vectorIndex = int(step/stepSize);
	createMapleLeaf(vectorArrays[vectorIndex].x, vectorArrays[vectorIndex].y)


	push()
	scale(0.05)
	createMapleLeaf(-vectorArrays[vectorIndex].x, vectorArrays[vectorIndex].y)
	pop()
	
	push()
	scale(0.2)
	createMapleLeaf(vectorArrays[vectorIndex].x, vectorArrays[vectorIndex].y)
	pop()
	
	push()
	scale(0.45)
	createMapleLeaf(-vectorArrays[vectorIndex].x, vectorArrays[vectorIndex].y)
	pop()
	
	//End Loop
	if (frameCount==sizeFrame) {
		noLoop()
	}

}