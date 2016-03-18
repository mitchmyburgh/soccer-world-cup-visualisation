var mapType = 'overview';

$(function () {
	//variables

	//launch the overview map
	overviewMapDisp();
	$('.keyBlockHover').hover(function () {
		switch ($('input[name=filter]:checked', '#filterForm').val()) {
			case "overview":
				if ($(this).attr('id') == "host"){
					overviewMapFilter("AndHost", true);
				} else {
					overviewMapFilter($(this).attr('id'), false);
				}

				break;
			case "goals_scored":
				goalsScoredMapFilter($(this).attr('id'));
				break;
			case "top_scorer":
				topScorerMapFilter($(this).attr('id'));
				break;
			case "attendance":
				attendanceMapFilter($(this).attr('id'));
				break;
			default:
				break;
		}
	}, function () {
		switch ($('input[name=filter]:checked', '#filterForm').val()) {
			case "overview":
				overviewMapDisp();
				break;
			case "goals_scored":
				goalsScoredMapDisp();
				break;
			case "top_scorer":
				topScorerMapDisp();
				break;
			case "attendance":
				attendanceMapDisp();
				break;
			default:
				break;
		}
	});
	/*
	switch ($('input[name=filter]:checked', '#filterForm').val()) {
		case "overview":
			break;
		case "goals_scored":
			var newMap = jQuery.extend(true, {}, cleanMap);
			for (var i = 0; i < goalsScoredMap.length; i ++){
				if (goalsScoredMap[i].fillKey == $('.keyBlockEasy').attr('id')){
					newMap[goalsScoredMap[i].country].fillKey = goalsScoredMap[i].fillKey;
				}
			}
			world.updateChoropleth(newMap);
			newMap=null;
			break;
		case "top_scorer":
			break;
		case "attendance":
			break;
		default:
			break;
			*/

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
				$("#tumelosShit").hide();
				break;
			case "goals_scored":
				$("#overviewKey").hide();
				$("#goalsScoredKey").show();
				$("#topScorerKey").hide();
				$("#attendanceKey").hide();
				goalsScoredMapDisp();
				$("#tumelosShit").show();
				barChartsWrap("World cup goals");
				break;
			case "top_scorer":
				topScorerMapDisp();
				$("#overviewKey").hide();
				$("#goalsScoredKey").hide();
				$("#topScorerKey").show();
				$("#attendanceKey").hide();
				$("#tumelosShit").show();
				barChartsWrap("Top scorer");
				break;
			case "attendance":
				$("#overviewKey").hide();
				$("#goalsScoredKey").hide();
				$("#topScorerKey").hide();
				$("#attendanceKey").show();
				attendanceMapDisp();
				$("#tumelosShit").show();
				barChartsWrap("Attendance");
				break;
			default:
				break;
		}
	});
});
//functions that dont work inside jquery
var updateOverviewByYear = function (year, collapsed) {
  var newMap = jQuery.extend(true, {}, cleanMap);
	switch (mapType) {
		case "overview":
			if (compByYear[year]){
				for (var i = 0; i < compByYear[year].length; i ++){
					newMap[compByYear[year][i].country].fillKey = compByYear[year][i].fillKey;
				}
				world.updateChoropleth(newMap);
				newMap = null;
			}
			break;
		case "goals_scored":
			if (goalsScoredByYear[year]){
				for (var i = 0; i < goalsScoredByYear[year].length; i ++){
					newMap[goalsScoredByYear[year][i].country].fillKey = goalsScoredByYear[year][i].fillKey;
				}
				world.updateChoropleth(newMap);
				newMap = null;
			}
			break;
		case "top_scorer":
			if (ScorerByYear[year]){
				for (var i = 0; i < ScorerByYear[year].length; i ++){
					newMap[ScorerByYear[year][i].country].fillKey = ScorerByYear[year][i].fillKey;
				}
				world.updateChoropleth(newMap);
				newMap = null;
			}
			break;
		case "attendance":
			break;
		default:
			break;
	}
}
