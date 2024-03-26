(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");

  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
  }
})();


//================================================================================================

// Target date (June 20th)
const targetDate = new Date('2024-06-20');

// Function to calculate remaining time
function calculateRemainingTime() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Return the remaining time as an object
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

// Example usage
const remainingTime = calculateRemainingTime();
const pElement = document.querySelector(".counterDate");
pElement.textContent = `${remainingTime.days} : ${remainingTime.hours} : ${remainingTime.minutes} : ${remainingTime.seconds}`;

// Update the date every second
setInterval(updateDate, 1000);

function updateDate() {
  const remainingTime = calculateRemainingTime();
  pElement.textContent = `${remainingTime.days} : ${remainingTime.hours} : ${remainingTime.minutes} : ${remainingTime.seconds}`;
}
