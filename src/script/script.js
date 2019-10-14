$( document ).ready(function() {
    //let window=document.getElementById("skills");
    let window=$('#skills');
    let prop='ddupa'
    let name='ddupa'
    window.append('<div class="item" id="' + prop + '"><p>' + name + 'Html/css</p><div id="myProgress"><div id="myBar">' + 20 + '</div></div></div>');
    window.append('<div class="item" id="' + prop + '"><p>'+ name +'Html/css</p><div id="myProgress"><div id="myBar">'+ 15 +'</div></div></div>');
    window.append('<div class="item" id="' + prop + '"><p>'+ name +'Html/css</p><div id="myProgress"><div id="myBar">'+ 30 +'</div></div></div>');
    window.append('<div class="item" id="' + prop + '"><p>'+ name +'Html/css</p><div id="myProgress"><div id="myBar">'+ 30 +'</div></div></div>');
    window.append('<div class="item" id="' + prop + '"><p>'+ name +'Html/css</p><div id="myProgress"><div id="myBar">'+ 30 +'</div></div></div>');
    $( "#myProgress" ).progressbar({
        value: 37
      });
/*     var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 50) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
        */
})
