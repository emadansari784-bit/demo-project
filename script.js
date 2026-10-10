```javascript
document.getElementById("year").textContent =
    new Date().getFullYear();

function openPanel(panelId) {
    const panel = document.getElementById(panelId);

    if (panel) {
        panel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function showMessage(message) {
    alert(message);
}

function bookClass(event) {
    event.preventDefault();

    const name = document.getElementById("memberName").value.trim();
    const fitnessClass = document.getElementById("fitnessClass").value;

    if (!name || !fitnessClass) {
        alert("Please complete all fields.");
        return;
    }

    document.getElementById("bookingResult").textContent =
        "Demo booking request received for " + name +
        " — " + fitnessClass + "!";

    event.target.reset();
}

let selectedMembership = "";
let selectedPrice = 0;

function choosePlan(plan, price) {
    selectedMembership = plan;
    selectedPrice = price;

    document.getElementById("selectedPlan").textContent =
        plan + " Plan selected — ₹" + price + " per month.";

    openPanel("membershipPanel");
}

function registerMember(event) {
    event.preventDefault();

    if (!selectedMembership) {
        alert("Please choose a membership plan first.");
        return;
    }

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    document.getElementById("registrationResult").textContent =
        "Demo registration successful for " + name +
        "! Plan: " + selectedMembership +
        " (₹" + selectedPrice + "/month).";

    event.target.reset();
}

function calculateBMI(event) {
    event.preventDefault();

    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);

    if (height <= 0 || weight <= 0) {
        document.getElementById("bmiResult").textContent =
            "Please enter valid height and weight.";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    document.getElementById("bmiResult").textContent =
        "Your estimated BMI is " + bmi.toFixed(1) +
        ". BMI is only a rough screening measure.";
}
```

let timeLeft = 60;
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startTimer");
const pauseButton = document.getElementById("pauseTimer");
const resetButton = document.getElementById("resetTimer");

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

startButton.addEventListener("click", function () {
    if (timerInterval !== null) return;

    if (timeLeft === 0) timeLeft = 60;

    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Workout complete!");
        }
    }, 1000);
});

pauseButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 60;
    updateTimer();
});

updateTimer();

```javascript
// WORKOUT TIMER
document.addEventListener("DOMContentLoaded", function () {
    let seconds = 60;
    let timer = null;

    const display = document.getElementById("timerDisplay");
    const start = document.getElementById("startTimer");
    const pause = document.getElementById("pauseTimer");
    const reset = document.getElementById("resetTimer");

    if (!display || !start || !pause || !reset) {
        console.error("Timer elements not found! Check your HTML IDs.");
        return;
    }

    function showTime() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        display.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");
    }

    start.addEventListener("click", function () {
        if (timer !== null) return;

        if (seconds <= 0) seconds = 60;

        showTime();

        timer = setInterval(function () {
            seconds--;
            showTime();

            if (seconds <= 0) {
                clearInterval(timer);
                timer = null;
                alert("Workout timer complete!");
            }
        }, 1000);
    });

    pause.addEventListener("click", function () {
        clearInterval(timer);
        timer = null;
    });

    reset.addEventListener("click", function () {
        clearInterval(timer);
        timer = null;
        seconds = 60;
        showTime();
    });

    showTime();
});
```