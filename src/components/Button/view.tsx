import 'twin.macro';
import { ButtonProps } from './types';

const VButton = ({ text, disabled, onClick }: ButtonProps) => (
  <button
    data-testid="button-container"
    type="button"
    onClick={onClick}
    disabled={disabled}
    tw="text-info text-green-1000 bg-blue-300"
  >
    {text}
  </button>
);

export default VButton;
