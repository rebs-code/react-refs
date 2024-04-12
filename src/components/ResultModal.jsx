export default function ResultModal({ result, targetTime }) {
  return (
    <dialog>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>x seconds left</strong>
      </p>
    </dialog>
  );
}
