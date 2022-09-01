const bar = document.querySelector('.navbar__toggle');
const links = document.querySelector('.links');
const navBar = document.getElementsByClassName('navbtn2');

const mobileMenu = () => {
  links.classList.toggle('links-active');
  links.display.remove('none');
};

bar.addEventListener('click', mobileMenu);

const mobileLinks = () =>{
  links.classList.remove('links-active');
    links.display.add('none');
}
  for (let i =0; i<navBar.length ; i++){
navBar[i].addEventListener('click', mobileLinks);
  }


  
  const titles = document.getElementsByClassName('about-title')
  const content = document.querySelector('.about-content');

    titles[0].addEventListener('click',function(){
      titles[0].classList.add('about-change')
      titles[1].classList.remove('about-change');
      titles[2].classList.remove('about-change');
      content.textContent ='Here we give you what you need to see and more. In our agent you can find all kinds of excursions to a different corner of Morocco. We make you try a new feature every day. Contact us and we will ensure that your satisfaction comes first.';
    });


    titles[1].addEventListener('click',function(){
      titles[1].classList.add('about-change')
      titles[0].classList.remove('about-change');
      titles[2].classList.remove('about-change');
      content.textContent ='After getting through the summer last year in our house for the safety of the world due to COVID-19. Early in these years we started planning for next summer, so we promise this summer trip will surprise you with all the action and more. ';
    });

    titles[2].addEventListener('click',function(){
      titles[2].classList.add('about-change')
      titles[0].classList.remove('about-change');
      titles[1].classList.remove('about-change');
      content.textContent ='We are a group of passionate people who grew up and saw the beauty of our country and hope to one day show the world how amazing Morocco is. By organizing these trips, we hope to share with you all a glimpse of the beauty of our traditions, let you see their most beautiful people and make you explore every aspect of Morocco. ';
    })


const left = document.querySelector('.left');
const right = document .querySelector('.right');
const costumers = document.querySelector('.costumers');

const rightSide = () =>{
costumers.scrollBy({
  top: 0,
  left: + 402,
})
};

right.addEventListener('click', rightSide);



const leftSide = () =>{
costumers.scrollBy({
  top: 0,
  left: - 402,
})
};

left.addEventListener('click', leftSide);



var modal = document.getElementById("myModal");


var img = document.getElementsByClassName("gallery-i");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let t=0;t<img.length;t++){
img[t].onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  captionText.style.fontSize = '20px';
}

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


const flipBtn =document.getElementsByClassName('blog-btn');
const flipBtnReturn =document.getElementsByClassName('blog-btn-back');
const moreFlipBtn = document.getElementsByClassName('blog-btn-b');
const moreBack = document.getElementsByClassName('more-blog-btn-back');

for(let c = 0 ; c < flipBtn.length; c++){
flipBtn[c].onclick= function(){
  const flipFront = this.parentElement;
  const flip = flipFront.parentElement;
  const flipBack = flip.querySelector('.blog-back');
   flipFront.style.display ='none';
   flipBack.style.display ='block';
  
}
}

for(let e = 0 ; e < flipBtnReturn.length; e++){
flipBtnReturn[e].onclick= function(){
  const flipFrontReturn = this.parentElement;
  const flipReturn = flipFrontReturn.parentElement;
  const flipBackReturn = flipReturn.querySelector('.blog-front');
   flipBackReturn.style.display ='block';
   flipFrontReturn.style.display ='none';
}
}

for(let a = 0 ; a < moreFlipBtn.length; a++){
moreFlipBtn[a].onclick= function(){
  const moreFlipFront = this.parentElement;
  const moreFlip = moreFlipFront.parentElement;
  const moreFlipBack = moreFlip.querySelector('.more-blog-back-b');
   moreFlipFront.style.display ='none';
   moreFlipBack.style.display ='block';

}
}

for(let p = 0 ; p < moreBack.length; p++){
moreBack[p].onclick= function(){
  const moreFrontReturn = this.parentElement;
  const moreReturn = moreFrontReturn.parentElement;
  const moreBackReturn = moreReturn.querySelector('.more-blog-front');
  moreBackReturn.style.display ='block';
   moreFrontReturn.style.display ='none';
}
}