const SV=[["Electrical Works",["Wiring and cabling for lights and power supply","Service entrance and meter connections","Lighting fixtures, switches, receptacles, outlets","Grounding system, conduits, junction boxes","Panel boards","Emergency lights and illuminated exit signs"]],
["Mechanical &amp; Fire Protection",["Manufacture and installation of automated and mechanical systems","HVAC installation, piping and ducting","Fire sprinkler system and FDAS","Gas works"]],
["Structural &amp; Roofing",["Structural concrete, steel reinforcements and formworks","Structural steel, miscellaneous metal and anchorages","Masonry works","Roof truss and framing, roofing, flashings, rain gutter","Waterproofing services"]],
["Interior Fit-out &amp; Design",["Interior fit-out of a single area or entire structure","Fundamental design for adaptive reuse, commercial tenants and home renovation","Construction of drywalls and partitions","Concrete finishes, tiling, wall finishes and ceiling works"]],
["Doors, Windows &amp; Finishes",["Doors (wooden, steel, glass) and windows (fixed, awning, sliding)","Painting works: interior, cabinetries and exterior","Installation of hardware","Aluminum composite panels"]],
["Building Services",["Installation of all necessary building services","Ceilings, floors, furnishings and partitions"]]];

const P=[["Gerrys Grill","Sta. Rosa, Sta. Cruz, Laguna and Malabon","Aug 2019"],
["Skechers Office","Phil. Stock Exchange, Ortigas Center","Sep 2019"],
["Knauf Academy","Libis, Quezon City","Jan 2021"],
["Residential House","Fairview, Quezon City","Jun 2021"],
["Roof Repair, Painting and Spray Foam Application","Alabang, Muntinlupa City","Feb 2022"],
["Roof Repair and Painting","Greenwoods, Pasig City","Apr 2022"],
["Roof Repair and Painting","Ayala Alabang, Muntinlupa City","May 2022"],
["Waterproofing of Swimming Pool (Underwater Epoxy)","Tuguegarao City","Jun 2022"],
["Building Exterior Walls Repair and Epoxy Injection Waterproofing","Pasig City","Aug 2022"],
["Keds Shop","SM North","Sep 2022"],
["Waterproofing of Interior and Exterior Walls","Taguig City","Sep 2022"],
["Style and Comfort","Farmers Plaza, Cubao, Quezon City","Mar 27, 2023"],
["Sperry Concept","SM Santa Rosa, Laguna","May 17, 2023"],
["Michael Lee Residence House Renovation","Fairview, Quezon City","Jun 15, 2023"],
["Dri Plus, The Grid Burlington Inc.","Makati City","Sep 5, 2023"],
["Sperry Concept","SM Aura Premier","Sep 5, 2023"],
["Keds and Sperry Concept","Gateway Mall, Cubao, Quezon City","Oct 19, 2023"],
["Complex Lifestyle Store","One Ayala Mall, Ayala Ave, Makati City","Jun 5, 2024"],
["Sperry Keds Merrell Store","Cebu City","Jul 23, 2024"],
["Complex Lifestyle Store","2/F Eastwood Mall","Oct 5, 2024"],
["NAMRIA Building Repainting","—","—"],
["DQ Store","MOA Arena","Mar 2017"],
["Sunnies Café","Alabang Town Center","Apr 2017"],
["Sunnies Specs","Mega Mall","Jul 2017"],
["Yabu Commissary","San Juan City, Metro Manila","Jul 2017"],
["Yabu Restaurant","Uptown","Aug 2017"],
["Zubuchon","Makati City","Sep 2017"],
["Ippudo","Eastwood Libis, Quezon City","Nov 2017"]];

const T=[["Allan D. Caluscos","Director"],
["John Bumanglag","Director"],
["Nepthalee Nava","Director"],
["Archi. Rommel Feliciano","Project Manager 1"],
["Archi. Richard De Guzman Funa","Project Manager 2"],
["Beberly Mijia","Accounting Officer"],
["Mark Anthony Pacheco","Electrical Supervisor"],
["Julius Corminal","Lead Mechanical Technician"]];

// Photos per project (same order as P). Extracted from the A&DC company profile.
const PH=[["photos/01-1.jpg", "photos/01-2.jpg", "photos/01-3.jpg", "photos/01-4.jpg"], ["photos/02-1.jpg", "photos/02-2.jpg", "photos/02-3.jpg", "photos/02-4.jpg"], ["photos/03-1.jpg", "photos/03-2.jpg", "photos/03-3.jpg", "photos/03-4.jpg"], ["photos/04-1.jpg", "photos/04-2.jpg", "photos/04-3.jpg"], ["photos/05-1.jpg", "photos/05-2.jpg", "photos/05-3.jpg", "photos/05-4.jpg"], ["photos/06-1.jpg", "photos/06-2.jpg"], ["photos/07-1.jpg", "photos/07-2.jpg"], ["photos/08-1.jpg", "photos/08-2.jpg", "photos/08-3.jpg"], ["photos/09-1.jpg", "photos/09-2.jpg"], ["photos/10-1.jpg", "photos/10-2.jpg", "photos/10-3.jpg", "photos/10-4.jpg"], ["photos/11-1.jpg", "photos/11-2.jpg"], ["photos/12-1.jpg", "photos/12-2.jpg", "photos/12-3.jpg", "photos/12-4.jpg"], ["photos/13-1.jpg", "photos/13-2.jpg", "photos/13-3.jpg", "photos/13-4.jpg"], ["photos/14-1.jpg", "photos/14-2.jpg", "photos/14-3.jpg", "photos/14-4.jpg"], ["photos/15-1.jpg", "photos/15-2.jpg", "photos/15-3.jpg", "photos/15-4.jpg"], ["photos/16-1.jpg", "photos/16-2.jpg", "photos/16-3.jpg", "photos/16-4.jpg"], ["photos/17-1.jpg", "photos/17-2.jpg", "photos/17-3.jpg"], ["photos/18-1.jpg", "photos/18-2.jpg", "photos/18-3.jpg", "photos/18-4.jpg"], ["photos/19-1.jpg", "photos/19-2.jpg", "photos/19-3.jpg", "photos/19-4.jpg"], ["photos/20-1.jpg", "photos/20-2.jpg", "photos/20-3.jpg"], ["photos/21-1.jpg", "photos/21-2.jpg", "photos/21-3.jpg", "photos/21-4.jpg"], [], [], [], [], [], [], []];
// PROVISIONAL categories (same order as P) - confirm scopes with the company, edit freely.
const CAT=[["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Structural & Roofing", "Doors, Windows & Finishes"], ["Structural & Roofing", "Doors, Windows & Finishes"], ["Structural & Roofing", "Doors, Windows & Finishes"], ["Structural & Roofing"], ["Structural & Roofing"], ["Interior Fit-out & Design"], ["Structural & Roofing"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Doors, Windows & Finishes"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"], ["Interior Fit-out & Design"]];
// Team photos for the first 5 people in T; the rest show initials.
const TP=["team/caluscos.jpg","team/bumanglag.jpg","team/nava.jpg","team/feliciano.jpg","team/funa.jpg"];
