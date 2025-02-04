import React from 'react'

const WelcomePage = () => {
  return (
    <div
      className="bg-cover flex justify-center items-center bg-center h-screen w-screen"
      style={{
        backgroundImage: "url('public/back 1.png')",
      }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="h-[96vh] w-[98vw] bg-[#468CE8] bg-opacity-50 border-4 border-[#468CE8]">
          {/* Your content here */} <h1>hello</h1>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
