
// let day = date.getDate();;
// console.log(day);

    // if(day >= 1 && day <= 7){

    //     console.log('Первая неделя');
    // }
    // else if(day >= 8 && day <= 14){

    //     console.log('Вторая неделя');

    // }else if(day >= 15 && day <= 21){

    //     console.log('Третья неделя');

    // }else if(day >= 22 && day <= 28){

    //     console.log('Четвертая неделя');

    // }else if(day >= 29 && day <= 31){

    //     console.log('Первая неделя');
        
    // }else{

    //     console.log('День месяца не определен!');
    // }


moment.locale('uk');
let nameMonth = moment().locale('uk').format('MMMM');
document.getElementById('outName').innerHTML = nameMonth;   
console.log(moment().locale('ru').format('MMMM'));


document.addEventListener('DOMContentLoaded', function(){ 
    // moment().format('w'); // as .week()
    // console.log('Неделя в году' + moment().format('w'))

    // function week_of_month(date) {
    //     prefixes = [1,2,3,4,5];
    //     return prefixes[0 | moment(date).date() / 7]; 
    // }

    // var firstFeb2014 = moment("2014-02-01"); //saturday
    // var day = firstFeb2014.day(); //6 = saturday
    // var nthOfMoth = Math.ceil(firstFeb2014.date() / 7); //1
    // var eightFeb2014 = moment("2014-02-08"); //saturday, the next one
    // console.log( Math.ceil(eightFeb2014.date() / 7) );


    function weekOfMonth (input = moment()) {
      const firstDayOfMonth = input.clone().startOf('month');
      const firstDayOfWeek = firstDayOfMonth.clone().startOf('week');
      const offset = firstDayOfMonth.diff(firstDayOfWeek, 'days');
      return Math.ceil((input.date() + offset) / 7);
    }
  
    let currentMoonth = weekOfMonth();

    console.log('!' + currentMoonth);


    // let mydate = week_of_month();


    if(currentMoonth == 1){

       //arrows
        document.getElementById('left-arrow').style.display = 'none';
        document.getElementById('arrows').style.justifyContent = 'flex-end';

        console.log('Первая неделя');
        document.getElementById('one').style.display = 'none';
        document.getElementById('two').style.display = 'flex';
        document.getElementById('three').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('five').style.display = 'none';


        document.getElementById('week-one').style.display = 'block';
        document.getElementById('week-two').style.display = 'none';
        document.getElementById('week-three').style.display = 'none';
        document.getElementById('week-four').style.display = 'none';
        document.getElementById('week-five').style.display = 'none';
    }
    else if(currentMoonth == 2 ){

      //arrows
        document.getElementById('left-arrow').style.display = 'block';

        document.getElementById('arrows').style.justifyContent = 'space-between';

        console.log('Вторая неделя');
        document.getElementById('one').style.display = 'flex';
        document.getElementById('two').style.display = 'none';
        document.getElementById('three').style.display = 'flex';
        document.getElementById('four').style.display = 'none';
        document.getElementById('five').style.display = 'none';

        document.getElementById('week-one').style.display = 'none';
        document.getElementById('week-two').style.display = 'block';
        document.getElementById('week-three').style.display = 'none';
        document.getElementById('week-four').style.display = 'none';
        document.getElementById('week-five').style.display = 'none';

    }else if(currentMoonth == 3){

        console.log('Третья неделя');
        document.getElementById('one').style.display = 'none';
        document.getElementById('two').style.display = 'flex';
        document.getElementById('three').style.display = 'none';
        document.getElementById('four').style.display = 'flex';
        document.getElementById('five').style.display = 'none';

        document.getElementById('week-one').style.display = 'none';
        document.getElementById('week-two').style.display = 'none';
        document.getElementById('week-three').style.display = 'block';
        document.getElementById('week-four').style.display = 'none';
        document.getElementById('week-five').style.display = 'none';

    }else if(currentMoonth == 4){

        console.log('Четвертая неделя');
        document.getElementById('one').style.display = 'none';
        document.getElementById('two').style.display = 'none';
        document.getElementById('three').style.display = 'flex';
        document.getElementById('four').style.display = 'none';
        document.getElementById('five').style.display = 'flex';

        document.getElementById('week-one').style.display = 'none';
        document.getElementById('week-two').style.display = 'none';
        document.getElementById('week-three').style.display = 'none';
        document.getElementById('week-four').style.display = 'block';
        document.getElementById('week-five').style.display = 'none';

         //arrows
         document.getElementById('right-arrow').style.display = 'block';

    }else if(currentMoonth == 5){

        console.log('Пятая неделя');

        document.getElementById('one').style.display = 'none';
        document.getElementById('two').style.display = 'none';
        document.getElementById('three').style.display = 'none';
        document.getElementById('four').style.display = 'flex';
        document.getElementById('five').style.display = 'none';

        document.getElementById('week-one').style.display = 'none';
        document.getElementById('week-two').style.display = 'none';
        document.getElementById('week-three').style.display = 'none';
        document.getElementById('week-four').style.display = 'none';
        document.getElementById('week-five').style.display = 'block';

        //arrows
        document.getElementById('right-arrow').style.display = 'none';
        
    }else{

        console.log('День месяца не определен!');
    }
// $(".tab_content").hide();
// $(".tab_content:first").show();
$("ul.tabs li").click(function() {
		
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
      
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
});
  /* if in drawer mode */
$(".tab_drawer_heading").click(function() {
    
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});	
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
$('ul.tabs li').last().addClass("tab_last");

let date = new Date();
var day = date.getDay();
console.log('День недели'+ day);

switch (day) {
  case 1:
    // alert( 'Показать вкладку 1' );
    $('.monday').addClass('active');
    $("#tab1").show();
    $("#tab8").show();
    $("#tab15").show();
    $("#tab22").show();
    $("#tab29").show();
    
    break;
  case 2:
    // alert( 'Показать вкладку 2' );
    $('.tuesday').addClass('active');
    $("#tab2").show();
    $("#tab9").show();
    $("#tab16").show();
    $("#tab23").show();
    $("#tab30").show();

    break;
  case 3:
    //alert( 'Показать вкладку 3' );
    $('.wednesday').addClass('active');
    $("#tab3").show();
    $("#tab10").show();
    $("#tab17").show();
    $("#tab24").show();
    $("#tab31").show();

    break;
  case 4:
    //alert( 'Показать вкладку 4' );
    $('.thursday').addClass('active');
    $("#tab4").show();
    $("#tab11").show();
    $("#tab18").show();
    $("#tab25").show();
    break;  
  case 5:
    //alert( 'Показать вкладку 5' );
    $('.friday').addClass('active');
    $("#tab5").show();
    $("#tab12").show();
    $("#tab19").show();
    $("#tab26").show();
    break;
  case 6:
    //alert( 'Показать вкладку 6' );
    $('.saturday').addClass('active');
    $("#tab6").show();
    $("#tab13").show();
    $("#tab20").show();
    $("#tab27").show();
    break;  
  case 7:
    //alert( 'Показать вкладку 7' );
    $('.sunday').addClass('active');
    $("#tab7").show();
    $("#tab14").show();
    $("#tab21").show();
    $("#tab28").show();
    break;    
  default:
    alert( "Нет таких значений" );
}

});

//переключатель недель
let myweek = document.getElementById('arrows');
let myweekOne = document.getElementById('one');
let myweekTwo = document.getElementById('two');
let myweekThree = document.getElementById('three');
let myweekFour = document.getElementById('four');
let myweekFive = document.getElementById('five');

console.log(myweek);

myweekOne.addEventListener(('click'), function(){ 
  //arrows
    document.getElementById('left-arrow').style.display = 'none';
    //открываем первую неделю
    $(".tab_content").hide();
    $('.monday').addClass('active');
    $("#tab1").show();
    
    $('.tuesday').removeClass('active');
    $('.wednesday').removeClass('active');
    $('.thursday').removeClass('active');
    $('.friday').removeClass('active');
    $('.saturday').removeClass('active');
    $('.sunday').removeClass('active');
    myweek.style.justifyContent = 'flex-end'
    myweekOne.style.display = 'none';
    myweekThree.style.display = 'none';
    myweekTwo.style.display = 'flex';

    document.getElementById('week-one').style.display = 'block';
    document.getElementById('week-two').style.display = 'none';
});
myweekTwo.addEventListener(('click'), function(){ 
  //arrows
    document.getElementById('left-arrow').style.display = 'flex';
    //открываем вторую неделю

    $(".tab_content").hide();
    $('.monday').addClass('active');
    $("#tab8").show();

    $('.tuesday').removeClass('active');
    $('.wednesday').removeClass('active');
    $('.thursday').removeClass('active');
    $('.friday').removeClass('active');
    $('.saturday').removeClass('active');
    $('.sunday').removeClass('active');
    
    myweek.style.justifyContent = 'space-between';
    myweekOne.style.display = 'flex';
    myweekTwo.style.display = 'none';
    myweekFour.style.display = 'none';
    myweekThree.style.display = 'flex';

    document.getElementById('week-one').style.display = 'none';
    document.getElementById('week-two').style.display = 'block';
    document.getElementById('week-three').style.display = 'none';
});
myweekThree.addEventListener(('click'), function(){ 
    //открываем третью неделю

    $(".tab_content").hide();
    // $(".tab_content:first").show();

    $('.monday').addClass('active');
    $("#tab15").show();

    $('.tuesday').removeClass('active');
    $('.wednesday').removeClass('active');
    $('.thursday').removeClass('active');
    $('.friday').removeClass('active');
    $('.saturday').removeClass('active');
    $('.sunday').removeClass('active');


    myweekOne.style.display = 'none';
    myweekTwo.style.display = 'flex';
    myweekFour.style.display = 'flex';
    myweekFive.style.display = 'none';
    myweekThree.style.display = 'none';

    document.getElementById('week-two').style.display = 'none';
    document.getElementById('week-three').style.display = 'block';
    document.getElementById('week-four').style.display = 'none';

});
myweekFour.addEventListener(('click'), function(){ 
    //открываем четвертую неделю
    $(".tab_content").hide();
    $('.monday').addClass('active');
    $("#tab22").show();

    $('.tuesday').removeClass('active');
    $('.wednesday').removeClass('active');
    $('.thursday').removeClass('active');
    $('.friday').removeClass('active');
    $('.saturday').removeClass('active');
    $('.sunday').removeClass('active');

    myweekTwo.style.display = 'none';
    myweekFour.style.display = 'none';
    myweekFive.style.display = 'flex';
    myweekThree.style.display = 'flex';

    document.getElementById('week-three').style.display = 'none';
    document.getElementById('week-four').style.display = 'block';
    document.getElementById('week-five').style.display = 'none';

     //arrows
     document.getElementById('right-arrow').style.display = 'flex';

});
myweekFive.addEventListener(('click'), function(){ 
    //открываем пятую неделю

    $(".tab_content").hide();

    $('.monday').addClass('active');
    $("#tab29").show();

    $('.tuesday').removeClass('active');
    $('.wednesday').removeClass('active');
    $('.thursday').removeClass('active');
    $('.friday').removeClass('active');
    $('.saturday').removeClass('active');
    $('.sunday').removeClass('active');

    myweekThree.style.display = 'none';
    myweekFour.style.display = 'flex';
    myweekFive.style.display = 'none';
    myweekOne.style.display = 'none';

   
    document.getElementById('week-four').style.display = 'none';
    document.getElementById('week-five').style.display = 'block';

     //arrows
     document.getElementById('right-arrow').style.display = 'none';
});
