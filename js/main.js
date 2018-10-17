//Menu
$(document).ready(function() {
      var menuBtn = $('.ic-menu');
      var menu = $('.nav-menu');
      var close = $('#closemenu');

      menuBtn.on('click',  function(event) {
        event.preventDefault();
        menu.toggleClass('nav-menu_active');
        /* Act on the event */
      });
      close.on('click', function(event){
        menu.removeClass('nav-menu_active');
      })
      
    });



// Tabs
jQuery(document).ready(function($) {
  		$('.tab').hide();
  		$('.tab:first').show();
  		$('.tab-item:first').addClass('tab-item_active');
  		$('.tab-item').each(function(i){
  			$(this).attr('data-tab','tab'+i);
  		});
  		$('.tab').each(function(i){
  			$(this).attr('data-tab','tab'+i);
  		});

  		$('.tab-item').click(function(event){
  			$('.tab-item').removeClass('tab-item_active');
  			$(this).addClass('tab-item_active');
  			
  			var dataTab = $(this).data('tab');
  			var getTabs = $(this).closest('.tabs');
  			getTabs.find('.tab').hide();
  			getTabs.find('.tab[data-tab ='+dataTab+']').show();
  			

  		});
  	});
