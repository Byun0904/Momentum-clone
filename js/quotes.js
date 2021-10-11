const quotes = [
  {
    quotes: "난 지옥같은 상황에서도 기회를 만들어낸다.",
    author: "Bruce Lee",
  },
  {
    quotes:
      "당신이 정말 인생을 사랑한다면 시간을 낭비하지 마라. 인생은 시간으로 이뤄져 있으니까.",
    author: "Bruce Lee",
  },
  {
    quotes:
      "아는 것만으로는 충분하지 않다. 적용할 줄 알아야만 한다. 의지만 갖추고는 충분하지 않다. 행동으로 옮겨야만 한다.",
    author: "Bruce Lee",
  },
  {
    quotes: "진정한 삶은 무언가를 위해 사는 것이다.",
    author: "Bruce Lee",
  },
  {
    quotes: "불멸로 가는 삶은 가치 있는 삶을 사는 것이다.",
    author: "Bruce Lee",
  },
  {
    quotes:
      "실패를 두려워하지 마라. 실패가 아니라 낮은 목표치가 죄라 하겠다. 위대한 시도에서는 실패조차 영광스러울 따름이다.",
    author: "Bruce Lee",
  },
  {
    quotes: "실수는 인정할 수 있는 용기만 있다면 항상 용서될 수 있다.",
    author: "Bruce Lee",
  },
  {
    quotes: "무지한 사람은 아무리 어둠 속을 헤매도 평생 빛은 찾을 수 없다.",
    author: "Bruce Lee",
  },
  {
    quotes:
      "한 번 패배했다고 자포자기하지 마라. 당신 자신의 마음속에서 패배를 현실로 받아들이기 전까지는 진정한 패배가 아니다.",
    author: "Bruce Lee",
  },
  {
    quotes:
      "질 것 같다고 생각하는 자는 그렇게 될 수밖에 없다. 감히 시도하지 않는 자는 아무것도 할 수 없다. 이기고는 싶으나 이길 수 있을까 회의하는 자는 절대 이길 수 없다.",
    author: "Bruce Lee",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
