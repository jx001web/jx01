function animateImage(imageId, delay) {
    var img = document.getElementById(imageId);
    setTimeout(function() {
      img.classList.add('hidden');
    }, delay);
  }
  
  // 设置动画依次开始的时间
  var animationDelay = 2000; // 动画持续时间
  animateImage('image1', 0);         // 立即开始第一个动画
  animateImage('image2', 0); // 等待第一个动画完成后开始第二个
  animateImage('image3', animationDelay * 2); // 等待第二个动画完成后开始第三个
  animateImage('image4', animationDelay * 1); // 等待第三个动画完成后开始第四个
  animateImage('image5', animationDelay * 1); // 等待第四个动画完成后开始第五个