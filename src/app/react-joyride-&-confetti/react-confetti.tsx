import Confetti from "react-confetti";

/**
 * @see https://www.npmjs.com/package/react-confetti
 */
export const ReactConfetti = () => {
  return (
    <>
      <Confetti
        numberOfPieces={300}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
};
