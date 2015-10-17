$(document).ready(function(){

    $('#page-content').fadeIn(300);
    $('.sidebar-nav a').each(function() {
      linklocation = this.href + '/';
      pageurl = window.location.href;
      if (linklocation === pageurl) {
         $(this).addClass('active');
        }
    });
    // checkSize();
});

// $(window).resize(checkSize);

// function checkSize(){
//     if ($(".gallery-col").css("float") == "none") {
//         $(".col-md-4").css("width","100%");
//         $("#gallery-view-toggle").css("display","none");
//     }

//     else {
//         $(".col-md-4").css("width","33.3333333%");
//         $("#gallery-view-toggle").css("display","visible");
//         $("#make-grid").addClass("active");
//         $("#make-column").removeClass("active");
//     }
// }

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('#make-column').click(function() {
	if ($(this).hasClass("active")) {
	}
	
	else {
		$("#photo-gallery div").toggleClass("col-md-4").toggleClass("col-md-12").toggleClass("col-sm-4").toggleClass("col-sm-12");
		$(this).toggleClass("active");
		$("#make-grid").toggleClass("active");
	}
});

$('#make-grid').click(function() {
	if ($(this).hasClass("active")) {
	}

	else {
		$("#photo-gallery div").toggleClass("col-md-4").toggleClass("col-md-12").toggleClass("col-sm-4");
		$(this).toggleClass("active");
		$("#make-column").toggleClass("active");
	}
});

$('.sidebar-nav a').click(function(e) {
	e.preventDefault();
	linklocation = this.href + '/';
	pageurl = window.location.href;
  if (linklocation === pageurl) {

  }

  else {
      $("#page-content").fadeOut(300, redirectPage);
  };

  function redirectPage() {
      var stop = linklocation.lastIndexOf('/')
      window.location = linklocation.substr(0,stop);
  };

});


