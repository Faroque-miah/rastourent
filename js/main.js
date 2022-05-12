// var munTabs = document.querySelector(".menu_tabs");
const munuTabs = document.querySelector(".menu_tabs");
munuTabs.addEventListener("click" , function(e){
   if(e.target.classList.contains("menu_tab_item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       munuTabs.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");

      const menuSection =document.querySelector(".menu_bg");
      menuSection.querySelector('.menu_tab_content.active').classList.remove("active");
      menuSection.querySelector(target).classList.add('active');
   
   }
});
$(function(){
   // testimonial slider 
   $('#testimonial-slider').slick({
      infinite: true,
      arrows:true,
      prevArrow:'<i class="fa-solid fa-chevron-left prev_arrow"></i>',
      nextArrow:'<i class="fa-solid fa-chevron-right next_arrow"></i>'
    });
});
// menu tabs ends 