import { useThemeContext } from "../context/theme-context";

export default function BackgroudColor({ className }) {
  const { themeHandler } = useThemeContext();
  return (
    <button className={className} onClick={() => themeHandler(className)} />
  );
}
