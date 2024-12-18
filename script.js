window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('story1').style.display = 'block';
    }, 1000); // Show the first story after 1 second

    setTimeout(() => {
        document.getElementById('story2').style.display = 'block';
    }, 11000); // Show the second story after 11 seconds

    setTimeout(() => {
        document.getElementById('story3').style.display = 'block';
    }, 21000); // Show the third story after 21 seconds
});