
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
				text: { desc: "",name: "1930" },
				image: "../data/flags/uy.png",
				image2: "../data/flags/uy.png",
				tooltip: "Host: Uruguay",
				tooltip2: "Winner: Uruguay",
				collapsed: true,
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
				image: "../data/flags/it.png",
				image2: "../data/flags/it.png",
				collapsed: true,
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
				image: "../data/flags/fr.png",
				image2: "../data/flags/it.png",
				collapsed: true,
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
				image: "../data/flags/br.png",
				image2: "../data/flags/uy.png",
				collapsed: true,
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
				image: "../data/flags/ch.png",
				image2: "../data/flags/de.png",
				collapsed: true,
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
				image: "../data/flags/se.png",
				image2: "../data/flags/br.png",
				collapsed: true,
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
				image: "../data/flags/cl.png",
				image2: "../data/flags/br.png",
				collapsed: true,
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
				image: "../data/flags/gb.png",
				image2: "../data/flags/it.png",
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
				collapsed: true,
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
