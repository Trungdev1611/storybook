1. title: để nhóm các stories lại thành 1 nhóm

VD:  
title: 'Test1/Header'
title: 'Test1/Page' 
những cái trên sẽ nhóm vào chung nhóm Test1

2. Phần này để generate ra docs và default value cho docs - các comment

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

**nếu trong typescript
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  ...props
}) => {....}


3. Define các giá trị cho các biến thể với property args
export const NavbarSmallRed = {
    //define các props của component
    args: {
        text: "Nav Small and Red",
        color: "red",
        size: 14
    }
}

export const NavbarGreen = {
    //define các props của component
   args: {
    color: "green",
    text: "Text with Green color"
   }
}