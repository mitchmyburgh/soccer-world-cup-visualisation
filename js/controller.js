$(function () {
	//variables
	var mapType = 'overview';

	//launch the overview map
	overviewMapDisp();

	// display the correct map on radio button click
	$('#filterForm input').on('change', function() {
		mapType = $('input[name=filter]:checked', '#filterForm').val();
		switch ($('input[name=filter]:checked', '#filterForm').val()) {
			case "overview":
				overviewMapDisp();
				$("#overviewKey").show();
				$("#goalsScoredKey").hide();
				$("#topScorerKey").hide();
				$("#attendanceKey").hide();
				break;
			case "goals_scored":
				goalsScoredMapDisp();
				$("#overviewKey").hide();
				$("#goalsScoredKey").show();
				$("#topScorerKey").hide();
				$("#attendanceKey").hide();
				break;
			case "top_scorer":
				topScorerMapDisp();
				$("#overviewKey").hide();
				$("#goalsScoredKey").hide();
				$("#topScorerKey").show();
				$("#attendanceKey").hide();
				break;
			case "attendance":
				attendanceMapDisp();
				$("#overviewKey").hide();
				$("#goalsScoredKey").hide();
				$("#topScorerKey").hide();
				$("#attendanceKey").show();
				break;
			default:
				break;
		}
	});


});