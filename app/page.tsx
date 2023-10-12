'use client'
import Navigation from "@/components/home/navigation";
import Main from "@/components/home/main";

import { useAppContext } from "@/components/appcontext";

export default function Home() {
 
  const {
    state: {themeMode}
  } = useAppContext()

  return (
    <div className={`${themeMode} h-full flex`}>

      <Navigation />
      <Main /> 

    </div>
  );
}
