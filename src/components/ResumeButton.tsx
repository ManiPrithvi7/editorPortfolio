// import { useState } from 'react';

// const DownloadResumeButton = ({
//   resumeUrl,
//   fileName = 'resume.pdf',
//   buttonText = 'Download Resume',
//   className = ''
// }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleDownload = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Try direct download first
//       const anchor = document.createElement('a');
//       anchor.href = resumeUrl;
//       anchor.download = fileName;
//       document.body.appendChild(anchor);
//       anchor.click();
//       document.body.removeChild(anchor);

//       // Fallback to fetch if direct download fails
//       window.addEventListener('error', (e) => {
//         if (e.message === 'Failed to execute \'download\' on \'HTMLAnchorElement\'' ||
//             e.message.includes('Network Error')) {
//           fetchAndDownload();
//         }
//       }, { once: true });

//     } catch (err) {
//       setError('Failed to download resume');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchAndDownload = async () => {
//     try {
//       const response = await fetch(resumeUrl,{method:"GET",headers:{
//         'Content-Type':"application/pdf"
//       }});
//       if (!response.ok) throw new Error('Failed to fetch');

//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);

//       const anchor = document.createElement('a');
//       anchor.href = blobUrl;
//       anchor.download = fileName;
//       anchor.setAttribute("download","ManikandanResume.pdf")
//       document.body.appendChild(anchor);
//       anchor.click();

//       anchor.parentNode.removeChild(anchor)
//     //   window.URL.revokeObjectURL(blobUrl);
//     //   document.body.removeChild(anchor);
//     } catch (err) {
//       setError('Failed to download resume. Please try again or check the URL.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-start">
//       <button
//         onClick={handleDownload}
//         disabled={loading}
//         className={`
//           px-5 py-2.5
//           bg-blue-600 hover:bg-blue-700
//           text-white font-medium
//           rounded-lg
//           transition-colors duration-200
//           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
//           disabled:bg-gray-400 disabled:cursor-not-allowed
//           ${className}
//         `}
//       >
//         {loading ? (
//           <span className="inline-flex items-center">
//             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Downloading...
//           </span>
//         ) : buttonText}
//       </button>
//       {error && (
//         <p className="mt-2 text-sm text-red-600">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default DownloadResumeButton;

import { useState } from "react";

const DownloadResumeButton = ({
  resumeUrl,
  fileName = "ManikandanResume.pdf",
  buttonText = "Download Resume",
  className = "",
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    try {
      setLoading(true);
      setError(null);

      // Try direct download first
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error("Failed to fetch");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();

      // Cleanup
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(anchor);
    } catch (err) {
      setError("Failed to download resume. Please try again or check the URL.");
      console.error("Download error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`
          px-5 py-2.5 
          bg-blue-600 hover:bg-blue-700 
          text-white font-medium 
          rounded-lg 
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          disabled:bg-gray-400 disabled:cursor-not-allowed
          ${className}
        `}
      >
        {loading ? (
          <span className="inline-flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Downloading...
          </span>
        ) : (
          buttonText
        )}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DownloadResumeButton;
