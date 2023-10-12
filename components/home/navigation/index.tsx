'use client'
import { useAppContext } from "@/components/appcontext";
import Menubar from "./menubar";
import Toolbar from "./toolbar";

export default function Navigation() {

  const {
    state: {displayNavigation}
  } = useAppContext()

  return (
    <nav className={`${
      displayNavigation ? "" : "hidden"
    } dark relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}>
        <Menubar />
        <Toolbar />
    </nav> 
  );
}
  