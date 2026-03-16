// Handle click for "Say Hello" button
document.getElementById('btn1').addEventListener('click', function () {
  alert('Hello there!');
});

// Handle click for "Change Background Color" button
document.getElementById('btn2').addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightblue';
});

// Handle click for "Hide This Button"
document.getElementById('btn3').addEventListener('click', function () {
  this.style.display = 'none';
});
