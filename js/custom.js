// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

// var box = document.getElementById("archive")
// box.onmouseover = function(){
//
//     if(true){
//         box.style.backgroundColor = 'white';
//     } else{
//         box.style.backgroundColor = '';
//     }
// };

function viewArchive(){
    document.getElementById("archive-card").style.display = "block";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "block";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "none";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function viewOutsource(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "block";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "block";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "none";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";


};

function viewCable(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "block";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "block";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "none";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function viewOffice(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "block";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "block";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "none";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function viewConsulting(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "block";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "block";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "none";
    document.getElementById("sales").style.display = "block";
};

function viewSales(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "block";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "block";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "none";
};

function closeArchive(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function closeOutsource(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function closeCable(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function closeOffice(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function closeConsulting(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

function closeSales(){
    document.getElementById("archive-card").style.display = "none";
    document.getElementById("outsource-card").style.display = "none";
    document.getElementById("cable-card").style.display = "none";
    document.getElementById("office-card").style.display = "none";
    document.getElementById("consulting-card").style.display = "none";
    document.getElementById("sales-card").style.display = "none";
    document.getElementById("archive-white").style.display = "none";
    document.getElementById("outsource-white").style.display = "none";
    document.getElementById("cable-white").style.display = "none";
    document.getElementById("office-white").style.display = "none";
    document.getElementById("consulting-white").style.display = "none";
    document.getElementById("sales-white").style.display = "none";
    document.getElementById("archive").style.display = "block";
    document.getElementById("outsource").style.display = "block";
    document.getElementById("cable").style.display = "block";
    document.getElementById("office").style.display = "block";
    document.getElementById("consulting").style.display = "block";
    document.getElementById("sales").style.display = "block";
};

