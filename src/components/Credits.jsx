import React from 'react'

const Credits = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-gray-900 px-4 py-3 text-center flex items-center justify-center gap-2">
      <p className="text-xs text-white/50">
        &copy; By Rohit Singh 👉{" "}
      </p>
      <a
        href="http://github.com/Rohit7Be"
        className="text-sm px-2 py-1 bg-black rounded-2xl opacity-60 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </footer>
  );
}

export default Credits
