(function($){				
	jQuery.fn.lightTab = function(options){

		var createTab = function(){
			tab = this;
			i = 0;
			
			showPage = function(i){
				$(tab).children("div").children("div").hide();
				$(tab).children("div").children("div").eq(i).show();
				$(tab).children("ul").children("li").removeClass("active");
				$(tab).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(tab).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(tab).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTab);
	};	
})(jQuery);