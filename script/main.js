(function(){

// const project = $("#project"),projectA = $("#project-a"),
// appartments = $("#appartments"),appartmentsA = $("#appartments-a"),
// building = $("#building"),buildingA = $("#building-a"),
// environment = $("#environment"),environmentA = $("#environment-a"),
// aboutUs = $("#about-us"),aboutUsA = $("#about-us-a"),
// contactUs = $("#contact-us"),contactUsA = $("#contact-us-a");



    //, top= area.offset().top-120;
    // console.log(top,target,area);
    // console.log({
    //     top
    // })



$("#appartments-bitch, nav ul li").click((e)=> {

    const target = e.currentTarget.id, top = $(`#${target}-a`).offset().top;

    $("html, body").stop().animate({scrollTop:`${top-(40+120)}px`},1000,"swing");

})











$(window).scroll(()=>{

    

        const y = document.scrollingElement.scrollTop;
        if(y >= 100) {
    
            return;
        }
        
    
     })

})() 