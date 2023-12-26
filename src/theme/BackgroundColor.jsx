import {useThemeContext} from "../context/theme-context";

export default function BackgroundColor({className}) {
    const {themeHandler} = useThemeContext();
    return (
        <button className={className} onClick={() => themeHandler(className)}/>
    );
}
