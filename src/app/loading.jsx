const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-200 border-b-blue-600 border-t-red-500 rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
