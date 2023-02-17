import * as React from 'react';

export interface InputSubmitProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const InputSubmit = React.forwardRef<HTMLTextAreaElement, InputSubmitProps>(({ onClick }, ref) => (
  <div className="input-submit">
    <label htmlFor="numbersInput">Numbers Input</label>
    <textarea id="number-textarea" ref={ref} />
    <button className="submit-button" onClick={onClick}>Submit</button>
  </div>
));

export default InputSubmit;
