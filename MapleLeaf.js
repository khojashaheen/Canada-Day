let arrayCoordinatesRight =[
					[0,-100],[20,-70],[40,-80],
					[30,-40],[50,-50],[50,-40],
					[80,-50],[70,-20],[80,-20],
					[40,25],[45,35],[5,30],[5,50],[0,50]
				 ]
let arrayCoordinatesLeft =[
					[0,50],[-5,50],[-5,30],[-45,35],[-40,25],
					[-80,-20],[-70,-20],[-80,-50],
					[-50,-40],[-50,-50],[-30,-40],
					[-40,-80],[-20,-70],[0,-100]
				 ]

function createMapleLeaf(X,Y) {		
		beginShape();			

				for (let i =0; i <arrayCoordinatesRight.length; i++) {
					vertex(X+arrayCoordinatesRight[i][0],Y+arrayCoordinatesRight[i][1])
				}
				
				for (let j =0; j <arrayCoordinatesLeft.length; j++) {
					vertex(X+arrayCoordinatesLeft[j][0],Y+arrayCoordinatesLeft[j][1])
				}
		endShape();

}

