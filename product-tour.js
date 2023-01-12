var currentStep = 0;
var steps = [
    {
        element: '#step1',
        text: "Welcome to our website! This is the Hero Section."
    },
    {
        element: '#step2',
        text: "This is the feature section."
    },
    {
        element: '#step3',
        text: "This is the main contact form."
    }
];

function startTour() {
    var startBtn = document.querySelector('.start-btn');
    var nextBtn = document.querySelector('.next-btn');
    var prevBtn = document.querySelector('.prev-btn');
    var skipBtn = document.querySelector('.skip-btn');
    var closeBtn = document.querySelector('.close-btn');
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
    skipBtn.style.display = 'block';
    closeBtn.style.display = 'block';
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
    nextBtn.style.display = (currentStep !== steps.length-1) ? 'block' : 'none';
    prevBtn.style.display = (currentStep !== 0) ? 'block' : 'none';
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
    if (currentStep === 0) {
        document.querySelector('.prev-btn').style.display = 'none';
      } else {
        document.querySelector('.prev-btn').style.display = 'inline-block';
      }
      
}

function nextStep() {
    hideStep();
    showStep(currentStep + 1);
    if (currentStep === 0) {
        document.querySelector('.prev-btn').style.display = 'none';
      } else {
        document.querySelector('.prev-btn').style.display = 'inline-block';
      }
      
}

function skipTour() {
    endTour();
}

function endTour() {
    hideStep();
    currentStep = 0;
    var startBtn = document.querySelector('.start-btn');
    var nextBtn = document.querySelector('.next-btn');
    var prevBtn = document.querySelector('.prev-btn');
    var skipBtn = document.querySelector('.skip-btn');
    var closeBtn = document.querySelector('.close-btn');
    startBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    skipBtn.style.display = 'none';
    closeBtn.style.display = 'none';
}
