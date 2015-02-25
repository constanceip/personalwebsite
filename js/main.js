$(document).ready(function(e) {
    
       // $(".hero").fadeIn(4000);
  

     function openSubMenu() {
            $(this).find('ul').css('visibility', 'visible');    
        };
        
        function closeSubMenu() {
            $(this).find('ul').css('visibility', 'hidden'); 
        };

    $('#nav > li').bind('mouseover', openSubMenu);
    $('#nav > li').bind('mouseout', closeSubMenu);
        
       


    $("#js").hover(
        	function(){
        		$("#js").attr({src:"img/js.png"});
        	},
        	function(){
        		$("#js").attr({src:"img/javascript.png"});
        	}
     );

    $("#htmlcss").hover(
        	function(){
        		$("#htmlcss").attr({src:"img/htmlcss2.png"});
        	},
        	function(){
        		$("#htmlcss").attr({src:"img/htmlcss.png"});
        	}
     );

    $("#gd").hover(
        	function(){
        		$("#gd").attr({src:"img/graphicdesign2.png"});
        	},
        	function(){
        		$("#gd").attr({src:"img/graphicdesign.png"});
        	}
     );

    $("#travel").hover(
        	function(){
        		$("#travel").attr({src:"img/travel2.png"});
        	},
        	function(){
        		$("#travel").attr({src:"img/travel.png"});
        	}
     );
});
