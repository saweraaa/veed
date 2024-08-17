// toggling on link buttons
$(document).ready(function() {
    
    $('.list1').on('click', function() {
        
        $('.list1').removeClass('onclick-active');
        $('.list2, .list3, .list4').removeClass('onclick-active');
    
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        // sections display
        $('#section2').show();
        $('#section2_0, #section2_1, #section2_2').hide();  
    });
    $('.list2').on('click', function() {
    
        $('.list2').removeClass('onclick-active');
        $('.list1, .list3, .list4').removeClass('onclick-active');
    
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        //
       
        $('#section2_0').show();
        $('#section2, #section2_1, #section2_2').hide(); 
    });
    $('.list3').on('click', function() {
        
        $('.list3').removeClass('onclick-active');
        $('.list2, .list1, .list4').removeClass('onclick-active');
    
        
        $(this).toggleClass('onclick-active');
        // 
        $('#section2_1').show();
        $('#section2, #section2_2, #section2_0').hide(); 
        
    });
    $('.list4').on('click', function() {
       
        $('.list4').removeClass('onclick-active');
        $('.list2, .list3, .list1').removeClass('onclick-active');
    
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        // 
        $('#section2_2').show();
        $('#section2, #section2_1, #section2_0').hide(); 
        
    });

    // listt
    $('.listt1').on('click', function() {
        // Remove 'onclick-active' class from all elements first
        $('.listt1').removeClass('onclick-active');
        $('.listt2, .listt3').removeClass('onclick-active');
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        
        $('.content-1').show();
        $('.content-2, .content-3').hide();

    });
    $('.listt2').on('click', function() {
        // Remove 'onclick-active' class from all elements first
        $('.listt2').removeClass('onclick-active');
        $('.listt1, .listt3').removeClass('onclick-active');
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        
        $('.content-2').show();
        $('.content-3, .content-1').hide();

    });
    $('.listt3').on('click', function() {
        // Remove 'onclick-active' class from all elements first
        $('.listt3').removeClass('onclick-active');
        $('.listt2, .listt1').removeClass('onclick-active');
        // Toggle 'onclick-active' class on the clicked element
        $(this).toggleClass('onclick-active');
        // display section
        // $('#app').show();
        // $('#mobile-browser, #web-browser').hide(); 
        $('.content-3').show();
        $('.content-1, .content-2').hide();
    });
    
    // faq
    const toggles = document.querySelectorAll(".faq, .faq-toggle, .faq-text, .faq-title");
        toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
        toggle.parentElement.classList.toggle("activee");
    });
});

});