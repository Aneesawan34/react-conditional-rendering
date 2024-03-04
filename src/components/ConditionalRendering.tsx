import Show from "./show";

export const ConditionalRendering = () => {
  let amount = 5;
  let hasLink = true;
  return (
    <Show>
      <Show.When isTrue={amount == 6 && !hasLink}>
        <b>Lucky number 6</b>
        <p>No links here</p>
      </Show.When>
      <Show.When isTrue={amount == 6 && hasLink}>
        <b>Lucky Number 6</b>
        <a href="https://www.google.com/">Click here</a>
      </Show.When>
      <Show.Else>
        <b>Conditions are not met!</b>
      </Show.Else>
    </Show>
  );
};
