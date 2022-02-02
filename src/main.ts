import { getGreetingText } from "./helpers";

const DIV_ID = "greeting";
const GREETING_BY = "Jordan";

const renderGreeting = (elementId: string, textContent: string) => {
  const textBox = document.getElementById(elementId);
  textBox.innerText = getGreetingText(textContent);
}

renderGreeting(DIV_ID, GREETING_BY);