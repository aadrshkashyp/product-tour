var currentStep = 0;
var steps = [
    {
        element: '#step1',
        text: "Welcome to our website! This is the home page."
    },
    {
        element: '#step2',
        text: "This is the navigation menu. You can use it to browse different sections of the site."
    },
    {
        element: '#step3',
        text: "This is the main content area. It displays the most important information about the current page."
    }
];

function startTour() {
    showStep(0);
}

function showStep(step) {
    if (step < 0 || step >= steps.length) {
        endTour();
        return;
    }

    var element = document.querySelector(steps[step].element);
    element.classList.add('highlight');

    var textBox = document.createElement('div');
    textBox.classList.add('step-text');
    textBox.innerHTML = steps[step].text;
    textBox.style.top = element.getBoundingClientRect().top + "px";
    textBox.style.left = element.getBoundingClientRect().left + "px";

    document.body.appendChild(textBox);

    var nextBtn = document.querySelector('.next-btn');
    var prevBtn = document.querySelector('.prev-btn');
    var skipBtn = document.querySelector('.skip-btn');
    var closeBtn = document.querySelector('.close-btn');
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
    skipBtn.style.display = 'block';
    closeBtn.style.display = 'block';
    currentStep = step;
}

function hideStep() {
    var element = document.querySelector(steps[currentStep].element);
    element.classList.remove('highlight');

    var textBox = document.querySelector('.step-text');
    textBox.remove();
}

function prevStep() {
    hideStep();
    showStep(currentStep - 1);
}

function nextStep() {
    hideStep();
    showStep(currentStep + 1);
}

function skipTour() {
    endTour();
}

function hideButtons() {
    var nextBtn = document.querySelector('.next-btn');
    var prevBtn = document.querySelector('.prev-btn');
    var skipBtn = document.querySelector('.skip-btn');
    var closeBtn = document.querySelector('.close-btn');
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    skipBtn.style.display = 'none';
    closeBtn.style.display = 'none';
}
function endTour() {
    hideStep(); // added this line
    currentStep = 0;
    hideButtons();
}

