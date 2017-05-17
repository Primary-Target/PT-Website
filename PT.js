window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
        animationEnabled: false,
		backgroundColor: "transparent",
        data: [
		{        
			type: "pie",      
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,       
			indexLabelPlacement: "inside", 
			dataPoints: [
				{  y: 52,indexLabel: "Win #percent%",indexLabelPlacement: "inside",indexLabelFontColor:"white",color:"blue", toolTipContent: "Wins: {y}"},
				{  y: 44,indexLabel: "Loss #percent%",indexLabelPlacement: "inside",indexLabelFontColor:"white",color:"gray", toolTipContent: "Losses: {y}"}
			]
		}
		]
	});
	chart.render();
}