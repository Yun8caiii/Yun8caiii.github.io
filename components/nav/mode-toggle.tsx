"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export default function ThemeToggle() {
  // state
  const [mounted, setMounted] = React.useState(false);
  // hooks
  const { theme, setTheme } = useTheme();
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="link"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
