var sections = [
	{title:"Explore&nbsp;Series", img:"img/neptune.png"},
	{title:"Sahel&nbsp;Series", img:"img/2018.12.png"},
	{title:"Play&nbsp;Series", img:"img/mm.png"},
	{title:"Icon&nbsp;Series", img:"img/inners.png"},
]

var content = [
	// https://solarsystem.nasa.gov/planets/mercury/overview/
	{title:"Explore Neptune", date:"2019.03", img:"img/neptune.png", secIdx:0, copy:"Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery.<br><br>NASA Solar System Site"},
	{title:"Explore Jupiter", date:"2019.03", img:"img/Jupiter.png", secIdx:0, copy:"Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.<br><br>NASA Solar System Site"},
	{title:"Explore Mercury", date:"2019.03", img:"img/Mercury.png", secIdx:0, copy:"From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.<br><br>NASA Solar System Site"},
	// https://sahelblog.wordpress.com/
	{title:"Sahel Region 2011", date:"2019.04", img:"img/2011.1.png", secIdx:1, copy:"To prevent further escalation of violence, [United Nations Special Adviser on the Prevention of Genocide Adama] Dieng urged the Malian Government – with the support of the international community, and the UN peacekeeping mission in the country, MINUSMA – to immediately address the current grave upsurge of violence in central Mali and to provide, with no further delay, protection as well as assistance to vulnerable population."},
	{title:"Sahel Region 2014", date:"2019.04", img:"img/2014.6.png", secIdx:1, copy:"“I call on the Malian government to urgently investigate and prosecute the perpetrators of the recent attacks as well as those responsible for serious violations and abuses of human rights.” he said, adding that the authorities and all Malians should “prevent and refrain from stigmatizing entire communities”.<br><br>UN Special Adviser"}, 
	{title:"Sahel Region 2018", date:"2019.04", img:"img/2018.12.png", secIdx:1, copy:"“This—the militias, the murders, the indiscriminate score-settling that will be (and has already been) dubbed “ethnic violence”—is exactly what observers feared the most, seven years ago. This form of violence—and the army’s obvious failure to prevent it and potential complicity in it—is exactly the genie that won’t go back in the box. Who will forget the murdered village? It won’t be the end of the story, only the beginning. There will be revenge, and revenge for the revenge.”<br><br>UN Special Adviser"},
	// Bulgakov's respective works
	{title:"Master & Margarita", date:"2019.02", img:"img/mm.png", secIdx:2, copy:"“The tongue can conceal the truth, but the eyes never! You're asked an unexpected question, you don't even flinch, it takes just a second to get yourself under control, you know just what you have to say to hide the truth, and you speak very convincingly, and nothing in your face twitches to give you away. But the truth, alas, has been disturbed by the question, and it rises up from the depths of your soul to flicker in your eyes and all is lost.”<br><br>Mikhail Bulgakov, Master &amp; Margarita"},
	{title:"Heart of a Dog", date:"2019.02", img:"img/hod.png", secIdx:2, copy:"“Kindness. The only possible method when dealing with a living creature. You'll get nowhere with an animal if you use terror, no matter what its level of development may be. That I have maintained, do maintain and always will maintain. People who think you can use terror are quite wrong. No, no, terror is useless, whatever its colour – white, red or even brown! Terror completely paralyses the nervous system.”<br><br>Mikhail Bulgakov, Heart of a Dog"},
	{title:"White Guard", date:"2019.02", img:"img/wg.png", secIdx:2, copy:"“Everything passes away - suffering, pain, blood, hunger, pestilence. The sword will pass away too, but the stars will remain when the shadows of our presence and our deeds have vanished from the Earth. There is no man who does not know that. Why, then, will we not turn our eyes toward the stars? Why?”<br><br>Mikhail Bulgakov, The White Guard"},
	// 
	{title:"The Inners", date:"2019.03", img:"img/inners.png", secIdx:3, copy:"“I do not know what I seem to the world, but to myself I appear to have been like a boy playing upon the seashore and diverting myself by now and then finding a smoother pebble or prettier shell than ordinary, while the great ocean of truth lay before me all undiscovered.”<br><br>Sir Isaac Newton"},
	{title:"The Outers", date:"2019.03", img:"img/outers.png", secIdx:3, copy:"“Mankind will not remain on Earth forever, but in its quest for light and space will at first timidly penetrate beyond the confines of the atmosphere, and later will conquer for itself all the space near the Sun.”<br><br>Konstantin E. Tsiolkovsky, father of cosmonautics."}
];

function main() {
	
	sections.forEach ((d,i) => {
		$("#main-grid").append(`
					<div class="grid-item grid-img grid-pair-${i}" data-num="${i}" style="background: url('${d.img}') no-repeat left top;"></div>
					<div class="grid-item grid-text grid-pair-${i}" data-num="${i}">
						<div class="main-text-container" data-num="${i}">
							<div id="number" data-num="${i}">${i}</div>
							<div data-num="${i}" style="flex:auto;"></div>
							<div id="title" data-num="${i}">${d.title}<br><div id="end-block"></div></div>
						</div>
					</div>`);
		$("#fullpage").append(`<div class="section" id="sec-${i}"></div>`);
	});
	
	content.forEach ((d,i) => {
		$("#sec-" + content[i].secIdx).append(`
					<div class="slide">
						
						<div>
							<div class="sect-grid">
								<div class="grid-title">
									<div id="title">${d.title}<div id="end-block"></div><div id="title-date">${d.date}</div></div>
									
									<div class="grid-txt-container"> <div class="grid-txt">
										<p>${d.copy}</p>
										<div id="end-block"></div>
									</div>
									
								</div>
								</div>
								<div class="grid-img">
										<img src="${d.img}">
								</div>
								<div></div>
							</div>
						</div>
						
					</div>
			`);
		});
		
	// landing page events
	$("#main-grid .grid-item").on("mouseover", e => {
		var num = $(e.target).data("num")
		$(".grid-pair-" + num).css("opacity", ".7"); //$(".grid-item").not
		});	
		

	$("#main-grid .grid-item").on("mouseout", e => {
		$(".grid-item").css("opacity", "1");
		});	
		
	$("#main-grid .grid-item").on("click", e => {
		var num = $(e.target).data("num");
		myFullpage.moveTo(parseInt(num)+2)
		});
}

main();
