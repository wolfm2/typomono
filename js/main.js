var data = [
	{title:"Master & Margarita", img:"img/MM.png", pg:""},
	{title:"Explore Neptune", img:"img/neptune.png", pg:""},
	{title:"Explore Jupiter", img:"img/Jupiter.png", pg:""},
	{title:"Explore Mercury", img:"img/Mercury.png", pg:""},
	{title:"The Inners", img:"img/inners.png", pg:""},
	{title:"The Outers", img:"img/outers.png", pg:""},
	{title:"Cloud", img:"img/cloud.png", pg:""},
];

function main() {
	data.forEach ((d,i) => {
		$("#main-grid").append(`
						<div class="grid-item grid-img grid-pair-${i}" data-num="${i}">
							<img src="${d.img}" data-num="${i}">
						</div>
						<div class="grid-item grid-text grid-pair-${i}" data-num="${i}">
							<div class="main-text-container" data-num="${i}">
								<div id="number" data-num="${i}">${i}</div>
								<div id="title" data-num="${i}">${d.title}<br><div id="end-block"></div></div>
							</div>
						</div>
			`);
		});
		
	// 	
	$("#main-grid .grid-item").on("mouseover", e => {
		var num = $(e.target).data("num")
		$(".grid-item").not(".grid-pair-" + num).css("opacity", ".4");
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
