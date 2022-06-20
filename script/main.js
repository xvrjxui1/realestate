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
            dotsanimation();
            const y = document.scrollingElement.scrollTop;
            if(y >= 100) {
        
                return;
            }
            
        
         })
    
    })() 
    
    
    setTimeout(()=>{
        $("#looking").animate({opacity:'1',top:'25%'},1000)
    },500)
    setTimeout(()=>{
        $("#butic").animate({opacity:'1',top:'45%'},2000)
    },1000)
    setTimeout(()=>{
        $("#prices").animate({opacity:'1',top:'50%'},1000)
    },2500)
    
    
    dotsanimation=()=>{
        let gap=40;
        let fixed=80;
        let dotsize=10;
       if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#first-dots").offset().top+dotsize){
        if($("#first-dots").children().eq(0).css("opacity")==0){
            $("#first-dots").children().eq(0).animate({opacity:'1'},500)
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#first-dots").offset().top+dotsize+(gap)){
            if($("#first-dots").children().eq(1).css("opacity")==0){
                $("#first-dots").children().eq(1).animate({opacity:'1'},500)
            }
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#first-dots").offset().top+dotsize+(2*gap)){
            if($("#first-dots").children().eq(2).css("opacity")==0){
                $("#first-dots").children().eq(2).animate({opacity:'1'},500)
            }
        }
    
       }
       if(document.documentElement.scrollTop+window.innerHeight-fixed>=$("#second-dots").offset().top+dotsize){
        if($("#second-dots").children().eq(0).css("opacity")==0){
            $("#second-dots").children().eq(0).animate({opacity:'1'},500)
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#second-dots").offset().top+dotsize+(gap)){
            if($("#second-dots").children().eq(1).css("opacity")==0){
                $("#second-dots").children().eq(1).animate({opacity:'1'},500)
            }
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#second-dots").offset().top+dotsize+(2*gap)){
            if($("#second-dots").children().eq(2).css("opacity")==0){
                $("#second-dots").children().eq(2).animate({opacity:'1'},500)
            }
        }
       }
       if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#third-dots").offset().top+dotsize){
        if($("#third-dots").children().eq(0).css("opacity")==0){
            $("#third-dots").children().eq(0).animate({opacity:'1'},500)
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#third-dots").offset().top+dotsize+(gap)){
            if($("#third-dots").children().eq(1).css("opacity")==0){
                $("#third-dots").children().eq(1).animate({opacity:'1'},500)
            }
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#third-dots").offset().top+dotsize+(2*gap)){
            if($("#third-dots").children().eq(2).css("opacity")==0){
                $("#third-dots").children().eq(2).animate({opacity:'1'},500)
            }
        }
    
       }
       if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#fourth-dots").offset().top+dotsize){
        if($("#fourth-dots").children().eq(0).css("opacity")==0){
            $("#fourth-dots").children().eq(0).animate({opacity:'1'},500)
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#fourth-dots").offset().top+dotsize+(gap)){
            if($("#fourth-dots").children().eq(1).css("opacity")==0){
                $("#fourth-dots").children().eq(1).animate({opacity:'1'},500)
            }
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#fourth-dots").offset().top+dotsize+(2*gap)){
            if($("#fourth-dots").children().eq(2).css("opacity")==0){
                $("#fourth-dots").children().eq(2).animate({opacity:'1'},500)
            }
        }
       }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>=$("#fifth-dots").offset().top+dotsize){
            if($("#fifth-dots").children().eq(0).css("opacity")==0){
                $("#fifth-dots").children().eq(0).animate({opacity:'1'},500)
            }
            if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#fifth-dots").offset().top+dotsize+(gap)){
                if($("#fifth-dots").children().eq(1).css("opacity")==0){
                    $("#fifth-dots").children().eq(1).animate({opacity:'1'},500)
                }
            }
            if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#fifth-dots").offset().top+dotsize+(2*gap)){
                if($("#fifth-dots").children().eq(2).css("opacity")==0){
                    $("#fifth-dots").children().eq(2).animate({opacity:'1'},500)
                }
            }
        }
        if(document.documentElement.scrollTop+window.innerHeight-fixed>=$("#sixth-dots").offset().top+dotsize){
            if($("#sixth-dots").children().eq(0).css("opacity")==0){
                $("#sixth-dots").children().eq(0).animate({opacity:'1'},500)
            }
            if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#sixth-dots").offset().top+dotsize+(gap)){
                if($("#sixth-dots").children().eq(1).css("opacity")==0){
                    $("#sixth-dots").children().eq(1).animate({opacity:'1'},500)
                }
            }
            if(document.documentElement.scrollTop+window.innerHeight-fixed>= $("#sixth-dots").offset().top+dotsize+(2*gap)){
                if($("#sixth-dots").children().eq(2).css("opacity")==0){
                    $("#sixth-dots").children().eq(2).animate({opacity:'1'},500)
                }
            }
        }
    }
    
    function containsNumber(str) {
        return /\d/.test(str);
    }
    function onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
    }
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    fixedFormIsValid=()=>{
     let name=document.getElementById("contactNamefixed").value;
     let phonenumber=document.getElementById("contactTelfixed").value;
     let checkbox=document.getElementById("checkboxfixed").checked;
     if((onlyNumbers(phonenumber))&&(phonenumber.length==10)&&(!containsNumber(name))){
         if(phonenumber[0]=='0'&&(phonenumber[1]=='5'))return true;
         else return false;
     }
     else{
         return false;
     }
    }
    
    FormIsValid=()=>{
    let name=document.getElementById("contactName").value;
    let phonenumber=document.getElementById("contactTel").value;
    let email=document.getElementById("contactEmail").value;
    let checkbox=document.getElementById("checkboxfixed").checked;
    if((onlyNumbers(phonenumber))&&(phonenumber.length==10)&&(!containsNumber(name))&&(validateEmail(email))){
        if(phonenumber[0]=='0'&&(phonenumber[1]=='5'))return true;
        else return false;
    }
    else{
        return false;
    }
    
    }
    