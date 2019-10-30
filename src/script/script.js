$( document ).ready(function() {
  scrollTo();
  $( "main h3" ).after('<div class="broken"></div>');
  skills();
  portfolio();
});
function portfolio(){
  $.getJSON("src/portfolio.json", function(data){
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      let id=obj.id
      let name=obj.name;
      let el = $('<div>').attr({
        class: 'item project'+id,
        id: 'project'+id
      }).append(
        "<div id='project"+id+"class='shadowbox'><p>" + name + "</p></div>") 
      $("#cont_works").append(el);
    };})
}
function show(){
  for (let i=4; i<7; i++) {
    console.log("#project"+i)
    $("#project"+i).slideDown();
  }
  $("#showButton").css("display","none")
}
function skills(){
  $.getJSON("src/skills.json", function(data){
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      let name=obj.name;
      let progress=obj.progress;
      let el = $('<div>').attr('class','item').append("<p>" + name + "</p><div class='myProgress'><div class='myBar' style='width:"+ progress +"%'></div></div>") 
      $("#cont_skills").append(el);
    };})
}
//ticks datas and limits
  let tick1s = setInterval(tick1, 1000);
  let tick01s = setInterval(tick01, 100);
  let time=0
  let project=0
  let project_end=120
  let years=0
  let years_end=10
// tick for timer
function tick1(){
  time=time+1
  document.getElementById("tick").innerHTML = time;
}
// tick for stats
function tick01(){
  if (project < project_end) {
    project++;
    document.getElementById("project").innerHTML = project;
  }
  if (years < years_end) {
    years++;
    document.getElementById("years").innerHTML = years;
  }  
}
// jump to page top button
function topjump(){
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}
function scrollTo() {
// Vanilla JavaScript Scroll to Anchor
// @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
	const links = document.querySelectorAll('.myButton');
	links.forEach(each => (each.onclick = scrollAnchors));
}
function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}
