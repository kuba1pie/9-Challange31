 $( document ).ready(function() {
  //adding brake mark after h3
  $( "main h3" ).after('<div class="broken"></div>');
  //parse skills
  $.getJSON("src/skills.json", function(data){
    for(let i = 0; i < data.length; i++) {
      let obj = data[i];
      let name=obj.name;
      let progress=obj.progress;
      let el = $('<div>').attr('class','item').append("<p>" + name + "</p><div class='myProgress'><div class='myBar' style='width:"+ progress +"%'></div></div>") 
      $("#cont_skills").append(el);
    };})
  //parse portfolio
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
});
//show more items in portfolio
function show(){
  console.log("dupoa")
  for (let i=4; i<7; i++) {
    console.log("#project"+i)
    $("#project"+i).slideDown();
  }
  $("#showButton").css("display","none")
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


