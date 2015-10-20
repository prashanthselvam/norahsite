function checkSize(){
    if ($(window).width() < 1120) {
        $("#wrapper").addClass("toggled");
    }

    else {
        $("#wrapper").removeClass("toggled");
    }


    if ($("#make-column").hasClass("active") || ($("#currentMedia").css("max-width") == "785px")) {
        $("#photo-blanket").css("display","block");
    }

    else {
        $("#photo-blanket").css("display","none");
    }
};

$(document).ready(function(){
    $("a[rel^='lightbox']").prettyPhoto();
    $('#page-content').fadeIn(300);
    $('.sidebar-nav a').each(function() {
      linklocation = this.href + '/';
      pageurl = window.location.href;
      if (linklocation === pageurl) {
         $(this).addClass('active');
        }
    });
    checkSize();
   
});

$(window).resize(checkSize);


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
        $("#photo-blanket").css("display","block");
	}
});

$('#make-grid').click(function() {
	if ($(this).hasClass("active")) {
	}

	else {
		$("#photo-gallery div").toggleClass("col-md-4").toggleClass("col-md-12").toggleClass("col-sm-4");
		$(this).toggleClass("active");
		$("#make-column").toggleClass("active");
        $("#photo-blanket").css("display","none");
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


