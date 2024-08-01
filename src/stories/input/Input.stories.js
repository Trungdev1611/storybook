import Input from "./Input";

export default {
  title: "TrungCreate/Input",
  component: Input,
  tags: ["autodocs"], //có cái này thì sẽ tự động gen ra tab Docs
  
  //đây là thêm mô tả cho component
//   parameters: {
//     docs: {
//       description: {
//         component: 'This component is used for input fields with different sizes (small, medium, large).'
//       },
//     },
//   },

  //hoặc có thể dùng dạng markdown
  parameters: {
    docs: {
      description: {
        component: `
       ## Input Component

          **This component renders an input field with customizable sizes.**

          - **small**: For short inputs.
          - **medium**: Default size.
          - **large**: For longer inputs.

          _You can use this component for various form fields._
        `,
      },
    },
  },
};

export const InputSmall = {
  //define các props của component
  args: {
    size: "small",
    placeholder: "Small size",
  },
};

export const InputMedium = {
  //define các props của component
  args: {
    size: "medium",
    placeholder: "Medium size",
  }
};

export const InputLarge = {
  //define các props của component
  args: {
    size: "large",
    placeholder: "Large size",
  },
  //đây là thêm mô tả cho từng variation
  parameters: {
    docs: {
      description: {
        story: 'This is a small sized input field, typically used for short inputs.',
      },
    },
  },

  
};
