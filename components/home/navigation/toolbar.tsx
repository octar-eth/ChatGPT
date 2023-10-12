import Button from "@/components/common/button";
import { MdLightMode, MdDarkMode, MdInfo } from "react-icons/md";
import { useAppContext } from "@/components/appcontext";

export default function Toolbar() {
  const {
    state: { themeMode },
    setState,
  } = useAppContext(); 

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
      <Button
        icon={themeMode === "dark" ? MdDarkMode : MdLightMode}
        variant="text"
        onClick={() => {
          setState((v) => {
            return { ...v, 
              themeMode: v.themeMode === "dark" ? "light" : "dark" };
          });
        }}
      />

      <Button icon={MdInfo} variant="text" />
    </div>
  );
}
