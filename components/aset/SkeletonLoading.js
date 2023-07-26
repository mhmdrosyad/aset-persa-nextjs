const SkeletonLoading = () => {
    return (
      <div className="mt-6 bg-white animate-pulse rounded-lg p-10 shadow flex gap-3">
        <div className="flex w-64">
            <div className="w-full bg-gray-300 h-36 mb-2 rounded"></div>
        </div>
        <div className="flex flex-col w-full justify-between">
            <div className="w-full bg-gray-300 h-8 mb-4 rounded"></div>
            <div className="w-full bg-gray-300 h-4 mb-2 rounded"></div>
            <div className="w-full bg-gray-300 h-4 mb-2 rounded"></div>
            <div className="w-32 bg-gray-300 h-8 mb-2 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoading;