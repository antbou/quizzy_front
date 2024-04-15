import { Link } from "@tanstack/react-router";

export default function DefaultNotFound() {
  return (
    <section className="flex items-center h-screen p-16 bg-background">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-primary ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl text-foreground">
            Sorry, we couldn't find this page.
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-xl font-semibold rounded bg-accent hover:text-muted-foreground hover:bg-primary hover:shadow-lg"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
