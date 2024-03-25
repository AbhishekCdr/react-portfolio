const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <button
    //   onClick={scrollToTop}
    //   className="fixed bottom-4 right-4 p-3 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
    // >
    //   Scroll To Top
    // </button>

    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 rounded-full bg-blue-500 p-3 text-white shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <svg
        className="h-6 w-6 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
