import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DarkModeToggle />
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">Vite + React + Tailwind CSS</h1>
        <p className="mt-4">with TypeScript, ESLint, Prettier, and Husky</p>
      </section>
    </ThemeProvider>
  );
}

export default App;
