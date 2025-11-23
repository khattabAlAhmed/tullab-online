"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ModeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <Button className="cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </Button>
    

  )
}