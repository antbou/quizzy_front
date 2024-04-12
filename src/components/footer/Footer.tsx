export default function Footer() {
  return (
    <footer className="sticky top-[100vh] flex items-center justify-center w-full h-12 border-t">
      <p className="text-center text-xs">
        Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://linktr.ee/antbou"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          antbou
        </a>
      </p>
    </footer>
  );
}
