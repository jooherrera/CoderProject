const anim = () =>{
  $('.logo-img').fadeOut(2000,() => {
  $('.logo-img').fadeIn(2000,anim)
});



}

anim()
$('#title').animate({
  'opacity' : 1
},3000)