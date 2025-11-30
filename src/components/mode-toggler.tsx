"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ModeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button className="cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon className="w-4 h-4 dark:text-foreground" /> : <MoonIcon className="w-4 h-4" />}
    </Button>
  )
}