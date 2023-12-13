const questionOne = document.querySelector(".one")
const questionTwo = document.querySelector(".two")
const questionThree = document.querySelector(".three")
const questionFour = document.querySelector(".four")

const answerOne = document.querySelector(".data-1")
const answerTwo = document.querySelector(".data-2")
const answerThree = document.querySelector(".data-3")
const answerFour = document.querySelector(".data-4")

const plusLogos = document.querySelectorAll(".plus-logo")
const minusLogos = document.querySelectorAll(".minus-logo")

const plusLogoArray = Array.from(plusLogos);
const minusLogoArray = Array.from(minusLogos);

function clickEvent(question, answer, plusLogo, minusLogo) {
  question.addEventListener('click', function () {
    if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
      answer.style.maxHeight = answer.scrollHeight + 'px';

      plusLogo.forEach(logo => {
        if (logo.parentElement === this) {
          logo.style.display = 'none';
        }
      });

      minusLogo.forEach(logo => {
        if (logo.parentElement === this) {
          logo.style.display = 'flex';
        }
      });
    } else {
      answer.style.maxHeight = '0';

      plusLogo.forEach(logo => {
        if (logo.parentElement === this) {
          logo.style.display = 'flex';
        }
      });

      minusLogo.forEach(logo => {
        if (logo.parentElement === this) {
          logo.style.display = 'none';
        }
      });
    }
  });
}

clickEvent(questionOne, answerOne, plusLogoArray, minusLogoArray);
clickEvent(questionTwo, answerTwo, plusLogoArray, minusLogoArray);
clickEvent(questionThree, answerThree, plusLogoArray, minusLogoArray);
clickEvent(questionFour, answerFour, plusLogoArray, minusLogoArray);

