function countdown(seconds, callback) {
    const interval = setInterval(function() {
        console.log(seconds);
        seconds--;
        if (seconds < 0) {
            clearInterval(interval);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }, 1000);
}

countdown(5, function() {
    console.log("Time's up!");
});
