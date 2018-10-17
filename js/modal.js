//Modal
var modal = document.getElementById('mVideo');
    var btn = document.getElementById('playBtn');
    var close = document.getElementById('closeBtn');

    btn.onclick = function(){
      modal.style.display = "block";
    }
    close.onclick = function(){
      modal.style.display = "none";
    }
    window.onclick = function(event){
       if (event.target == modal) {
        modal.style.display = "none";
       }
    }