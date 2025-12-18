// Standard footer signature used across console.log(ic) projects
export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          <span className="font-normal">Crafted by </span>
          <a
            href="https://consolelogic.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-inherit no-underline hover:opacity-80 transition-opacity"
          >
            console.log(ic)
          </a>
        </p>
      </div>
    </footer>
  );
}


