import React from 'react';

function ContentLoading({fadeOut}) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          <div className="text-3xl text-yellow-100 font-bold animate-pulse">Booting up backend server...</div>
          <div className="mt-10 text-red-400">
            <p>Due to free tier constrains, backend server shuts down if there is no traffic on the site.</p>
            <p>Please refresh page in few moments.</p>
          </div>
        </div>
    </div>
  )
}

export default ContentLoading