window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
        animationEnabled: true,
		theme: "theme1",
		backgroundColor: "transparent",
        data: [
		{        
			type: "pie",
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "MistyRose",       
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			dataPoints: [
				{  y: 52,indexLabel: "Win #percent%",indexLabelPlacement: "inside",indexLabelFontColor:"black",color:"blue", toolTipContent: "Wins: {y}"},
				{  y: 44,indexLabel: "Loss #percent%",indexLabelPlacement: "inside",indexLabelFontColor:"black",color:"gray", toolTipContent: "Losses: {y}"}
			]
		}
		]
	});
	chart.render();
}