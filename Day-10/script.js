let countdown = 10;
var timer = document.getElementById('sec');
timer.innerHTML = countdown--;

function startCountdown(callback) {
    setTimeout(() => {
        timer.innerText = countdown--;
        callback();
    }, 1000);
}

function endCountdown() {
    document.querySelector('.timer-content').style.display = 'none';
    document.getElementById('wishes-content').style.display = 'block';
}

startCountdown(() => {
    startCountdown(() => {
        startCountdown(() => {
            startCountdown(() => {
                startCountdown(() => {
                    startCountdown(() => {
                        startCountdown(() => {
                            startCountdown(() => {
                                startCountdown(() => {
                                    startCountdown(() => {
                                        endCountdown();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});