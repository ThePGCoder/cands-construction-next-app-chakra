import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const handleClick = () => {
    toggleColorMode();
    const styleEl = document.createElement("style");
    const cssText = document.createTextNode(
      "html * { transition: color, background-color 0.3s ease-out!important }"
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };

  return (
    <>
      <IconButton aria-label="theme-toggle" onClick={handleClick} size="sm"> 
        {useColorModeValue(
          <Icon icon="oi:sun" height={20} />,
          <Icon icon="oi:moon" height={20} />
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggle;
