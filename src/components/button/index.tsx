import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  onClick?: any;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 lg:py-4 px-8 lg:px-12 border rounded`;
  const styles = primary
    ? `bg-dad-blue text-white border-dad-blue hover:bg-dad-blue-dark`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
