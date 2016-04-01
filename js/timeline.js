
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
				HTMLclass: "timeline rootnode",
				text: { desc: "",name: "1930" },
				image: "../data/flags/uy.png",
				image2: "../data/flags/uy.png",
				tooltip: "Host: Uruguay",
				tooltip2: "Winner: Uruguay",
				showHost: true,
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1934" },
				image: "../data/flags/it.png",
				image2: "../data/flags/it.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Italy (2)" },
						image: "../data/flags/it.png",
						children: [
							{
								text: { name: "Italy (1)" },
								image: "../data/flags/it.png",
								children: [
									{
										text: { name: "Italy (1)" },
										image: "../data/flags/it.png",
										children: [
											{
												text: { name: "Italy (7)" },
												image: "../data/flags/it.png",
											},
											{
												text: { name: "United States (1)" },
												image: "../data/flags/us.png",
											}
										]
									},
									{
										text: { name: "Spain (0)" },
										image: "../data/flags/es.png",
										children: [
											{
												text: { name: "Spain (3)" },
												image: "../data/flags/es.png",
											},
											{
												text: { name: "Brazil (1)" },
												image: "../data/flags/br.png",
											}
										]
									}
								]
							},
							{
								text: { name: "Austria (0)" },
								image: "../data/flags/at.png",
								children: [
									{
										text: { name: "Austria (1)" },
										image: "../data/flags/at.png",
										children: [
											{
												text: { name: "Austria (3)" },
												image: "../data/flags/at.png",
											},
											{
												text: { name: "France (2)" },
												image: "../data/flags/fr.png",
											}
										]
									},
									{
										text: { name: "Hungary (1)" },
										image: "../data/flags/hu.png",
										children: [
											{
												text: { name: "Egypt (2)" },
												image: "../data/flags/eg.png",
											},
											{
												text: { name: "Hungary (4)" },
												image: "../data/flags/hu.png",
											}
										]
									}
								]
							}
						]
					},
					{
						text: { name: "Czechoslovakia (1)" },
						image: "../data/flags/cz.png",
						children: [
							{
								text: { name: "Czechoslovakia (3)" },
								image: "../data/flags/cz.png",
								children: [
									{
										text: { name: "Czechoslovakia (3)" },
										image: "../data/flags/cz.png",
										children: [
											{
												text: { name: "Czechoslovakia (2)" },
												image: "../data/flags/cz.png",
											},
											{
												text: { name: "Romania (1)" },
												image: "../data/flags/ro.png",
											}
										]
									},
									{
										text: { name: "Switzerland (2)" },
										image: "../data/flags/ch.png",
										children: [
											{
												text: { name: "Netherlands (2)" },
												image: "../data/flags/nl.png",
											},
											{
												text: { name: "Switzerland (3)" },
												image: "../data/flags/ch.png",
											}
										]
									}
								]
							},
							{
								text: { name: "Germany (1)" },
								image: "../data/flags/de.png",
								children: [
									{
										text: { name: "Germany (2)" },
										image: "../data/flags/de.png",
										children: [
											{
												text: { name: "Germany (5)" },
												image: "../data/flags/de.png",
											},
											{
												text: { name: "Belgium (2)" },
												image: "../data/flags/be.png",
											}
										]
									},
									{
										text: { name: "Sweden (1)" },
										image: "../data/flags/se.png",
												children: [
											{
												text: { name: "Sweden (3)" },
												image: "../data/flags/se.png",
											},
											{
												text: { name: "Argentina (2)" },
												image: "../data/flags/ar.png",
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1938" },
				image: "../data/flags/fr.png",
				image2: "../data/flags/it.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1950" },
				image: "../data/flags/br.png",
				image2: "../data/flags/uy.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1954" },
				image: "../data/flags/ch.png",
				image2: "../data/flags/de.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1958" },
				image: "../data/flags/se.png",
				image2: "../data/flags/br.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1962" },
				image: "../data/flags/cl.png",
				image2: "../data/flags/br.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1966" },
				image: "../data/flags/gb.png",
				image2: "../data/flags/it.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1970" },
				image: "../data/flags/mx.png",
				image2: "../data/flags/br.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1974" },
				image: "../data/flags/de.png",
				image2: "../data/flags/de.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1978" },
				image: "../data/flags/ar.png",
				image2: "../data/flags/ar.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1982" },
				image: "../data/flags/es.png",
				image2: "../data/flags/it.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1986" },
				image: "../data/flags/mx.png",
				image2: "../data/flags/ar.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1990" },
				image: "../data/flags/it.png",
				image2: "../data/flags/de.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1994" },
				image: "../data/flags/us.png",
				image2: "../data/flags/br.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "1998" },
				image: "../data/flags/fr.png",
				image2: "../data/flags/fr.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "2002" },
				image: "../data/flags/jpsk.png",
				image2: "../data/flags/br.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "2006" },
				image: "../data/flags/de.png",
				image2: "../data/flags/it.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "2010" },
				image: "../data/flags/za.png",
				image2: "../data/flags/es.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			},
			{
				HTMLclass: "rootnode",
showHost: true,
				text: { name: "2014" },
				image: "../data/flags/br.png",
				image2: "../data/flags/de.png",
				collapsed: true,
				callOnClick: callOnClick,
				children: [
					{
						text: { name: "Uruguay (4)" },
						image: "../data/flags/uy.png",
						children: [
							{
								text: { name: "Uruguay (6)" },
								image: "../data/flags/uy.png",
								children: [
									{
										text: { name: "Romania" },
										image: "../data/flags/ro.png",
									},
									{
										text: { name: "Uruguay" },
										image: "../data/flags/uy.png",
									},
									{
										text: { name: "Peru" },
										image: "../data/flags/pe.png",
									}
								]
							},
							{
								text: { name: "Yugoslavia (1)" },
								image: "../data/flags/yu.png",
								children: [
									{
										text: { name: "Yugoslavia" },
										image: "../data/flags/yu.png",
									},
									{
										text: { name: "Brazil" },
										image: "../data/flags/br.png",
									},
									{
										text: { name: "Bolivia" },
										image: "../data/flags/bo.png",
									}
								]
							}
						]
					},
					{
						text: { name: "Argentina (2)" },
						image: "../data/flags/ar.png",
						children: [
							{
								text: { name: "Argentina (6)" },
								image: "../data/flags/ar.png",
								children: [
									{
										text: { name: "Argentina" },
										image: "../data/flags/ar.png",
									},
									{
										text: { name: "France" },
										image: "../data/flags/fr.png",
									},
									{
										text: { name: "Mexico" },
										image: "../data/flags/mx.png",
									},
									{
										text: { name: "Chile" },
										image: "../data/flags/cl.png",
									}
								]
							},
							{
								text: { name: "United States (1)" },
								image: "../data/flags/us.png",
								children: [
									{
										text: { name: "United States" },
										image: "../data/flags/us.png",
									},
									{
										text: { name: "Paraguay" },
										image: "../data/flags/py.png",
									},
									{
										text: { name: "Belgium" },
										image: "../data/flags/be.png",
									}
								]
							}
						]
					}
				]
			}
		]
	}
};


function callOnClick(year, collapsed) {
	updateOverviewByYear(year, collapsed);
}
