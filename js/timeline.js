
var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple",
		hideRootNode: true,
		connectors: {
			type: 'step',
			style: {
				"arrow-start": "classic-wide-long",
				"stroke-width": 2,
				"stroke": "#665B57"
			}
		},
		node: {
			collapsable: true
		},
		animation: {
			nodeAnimation: "easeOutBounce",
			nodeSpeed: 700,
			connectorsAnimation: "bounce",
			connectorsSpeed: 700
		}
	},

	nodeStructure: {
		text: { name: "BOB node" },
		children: [
			{
				HTMLclass: "timeline",
				text: { name: "1930" },
				image: "../data/flags/small/uy-sml.png",
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Event 1" },
						children: [
							{
								text: { name: "Event 1" },
								children: [
									{
										text: { name: "Event 1" },
										children: [
											{
												text: { name: "Event 1" },
											},
											{
												text: { name: "Event 2" }
											}
										]
									},
									{
										text: { name: "Event 2" }
									}
								]
							},
							{
								text: { name: "Event 2" }
							}
						]
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1934" },
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1938" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1950" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1954" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1958" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1962" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1966" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1970" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1974" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1978" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1982" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1986" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1990" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1994" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "1998" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "2002" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "2006" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "2010" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			},
			{
				HTMLclass: "",
				text: { name: "2014" },
				children: [
					{
						text: { name: "Event 1" },
					},
					{
						text: { name: "Event 2" }
					}
				]
			}
		]
	}
};


function callOnClick(year) {
	alert(year+" THIS IS WORKING!!");
}