import { Loader } from "lucide-react";
import { Button, ButtonProps } from "./button";
//we can uinon type
type LoadingButtonProps = {
  loading: boolean;
} & ButtonProps;
export default function Loadingbutton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    // if the button is displae or loading is disabled
    <Button {...props} disabled={props.disabled || loading}>
      {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
