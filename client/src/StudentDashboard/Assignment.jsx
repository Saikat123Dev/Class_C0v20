import React, { useState } from 'react';

function Assignments() {

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: '#2f2f2f',
    color: '#fff',
    borderRadius: '6px',
    padding: '10px', // Reduced padding
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 14px, rgba(0, 0, 0, 0.3) 0px 13px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    background: '#3f3f3f',
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 20px, rgba(0, 0, 0, 0.6) 0px 15px 15px -7px, rgba(0, 0, 0, 0.4) 0px -3px 0px inset',

  };

  return (
    <>
      <div className='bg-[#2124444f] h-screen text-white'>
        <div className="grid grid-cols-1 ">
          <div className='w-full flex justify-center '><h1 className='mt-10 text-3xl uppercase font-bold'>Assignments Section</h1></div>
          <hr />

          <div className="">
            <div className="grid grid-cols-1 gap-4">
              <div className='flex justify-center text-2xl uppercase mt-10 font-bold'>Topic</div>
              <div className={`mx-5 text-wrap font-bold text-xl p-2 rounded-lg shadow-md ${isHovered ? 'bg-gray-900' : 'bg-gray-800'}`} style={{ ...cardStyle, ...(isHovered && cardHoverStyle), color: '#28c244' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    Q. Write about global warming
                </div>

              <div className={`mx-5 text-wrap p-2 rounded-lg shadow-md ${isHovered ? 'bg-gray-900' : 'bg-gray-800'}`} style={{ ...cardStyle, ...(isHovered && cardHoverStyle), color: 'aqua' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="grid grid-cols-3 grid-rows-1 gap-3">
                  <div>Instruction:</div>
                </div>
                Global warming refers to the long-term increase of the earth's average temperature due to human activities, mainly through the emission of greenhouse gases (GHG) such as carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and fluorinated gases. These gases trap heat in the Earth's atmosphere, causing a phenomenon known as the greenhouse effect. Although a certain level of greenhouse gases must be present in the atmosphere to keep the Earth warm enough to support life, human activities, particularly the burning of fossil fuels (coal, oil, and natural gas) used for energy, industrial processes, deforestation, and some agriculture. In practice, the concentration of gases increases significantly, exacerbating the greenhouse effect.
              </div>
              <h1 className='mx-5'>Deadline: 17.03.2024 Sun 12:00 PM</h1>

              <div className="grid grid-cols-2 gap-5 mt-16"> {/* Symmetrical grid with 2 columns */}
                <div>
                  {/* For Document Submission */}
                  <div className={`flex flex-wrap justify-center gap-5 px-3 py-2 rounded-lg shadow-md `} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-slate-600 rounded-lg" />
                    <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#28c244" }}>Submit Document</button>
                  </div>
                </div>
                {/* For Video Submission */}
                <div>
                  <div className={`flex flex-wrap justify-center gap-5 px-3 py-2 rounded-lg shadow-md `} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs bg-slate-600 rounded-lg" />
                    <button className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "#28c244" }}>Submit Video</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Assignments;
