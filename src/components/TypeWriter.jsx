import { Typewriter } from "react-simple-typewriter";

function TypeWriter() {
  return (
    <Typewriter
      words={["Sai Prakash.."]}
      loop={100}
      cursor
      cursorStyle="|"
      typeSpeed={120}
      deleteSpeed={120}
      delaySpeed={3000}
    />
  );
}

export default TypeWriter;
