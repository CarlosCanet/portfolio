"use client";
import { ThemeProvider } from "next-themes";
function MyThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
export default MyThemeProvider;
