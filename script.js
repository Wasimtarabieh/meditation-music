document.getElementById('startMeditation').addEventListener('click', function() {
    document.getElementById('meditationMusic').play();
    this.style.display = 'none';
    document.getElementById('stopMeditation').style.display = 'inline';
});

document.getElementById('stopMeditation').addEventListener('click', function() {
    document.getElementById('meditationMusic').pause();
    document.getElementById('meditationMusic').currentTime = 0;
    this.style.display = 'none';
    document.getElementById('startMeditation').style.display = 'inline';
});
