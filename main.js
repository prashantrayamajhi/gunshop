$(document).ready(function(){
    $('#pistol-btn').click(function(){
        $('.pistol-card').show();
       $('.sniper-card').hide();

    });
    $('#sniper-btn').click(function(){
        $('.sniper-card').show();
       $('.pistol-card').hide();

    });
    $('#all-btn').click(function(){
        $('.sniper-card').show();
       $('.pistol-card').show();

    });
});