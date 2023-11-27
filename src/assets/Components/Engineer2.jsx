

const Engineer2 = () => {
    return (
        
        <div className="min-h-screen p-6 bg-blue-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>


                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
        Repair Details
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Needed spare part/parts</span>
              <input
                name="Needed spare part"
                type="String"
                className=" bg-gray-100
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Needed spare part"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700"> If Needed Accessorys</span>
              <input
                name="Needed spare part"
                type="String"
                className=" bg-gray-100
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Needed spare part"
                required
              />
            </label>
          </div>
          
         
         
          <div className="mb-2">
            <label>
              <span className="text-gray-700"> Enter the amount for Engineer cost</span>
              <input
                name="Amount"
                type="number"
                className=" bg-gray-100
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Amount"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Fault  description and Needed to repair or replaced parts</span>
              <textarea
                name="Fault Product/Products description"
                className="bg-gray-100
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>
           <br/>
          <div className="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Submit ticket
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
    
                        </div>
                        
    </div>
                    </div>
               
                
    );
};

export default Engineer2;