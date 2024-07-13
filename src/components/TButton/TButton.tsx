import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, Space } from "antd";

interface TButtonProps {
  buttonName: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

export const TButton: React.FC<TButtonProps> = ({
  buttonName,
  style,
  ...props
}) => {
  const colors1 = ["#364d7980", "#333"];

  const getHoverColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors: string[]) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
  return (
    <Space style={style}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
              colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                colors1
              ).join(", ")})`,
              colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                colors1
              ).join(", ")})`,
              lineWidth: 0,
            },
          },
        }}
      >
        <Button type="primary" size="large" {...props}>
          {buttonName}
        </Button>
      </ConfigProvider>
    </Space>
  );
};
