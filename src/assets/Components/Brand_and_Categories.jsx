

export default function Brand_and_Categories() {
  return (

    <div className="min-h-screen p-6 bg-blue-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
         
    
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3flex items-center justify-center">
            <div className="text-gray-600">
                <p className="font-medium text-lg">Brand and Categories</p>
                
              
                
              </div>

              
    
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Brand Owner</label>
                    
                    <div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />

   
    <button
      className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold  focus:outline-none focus:ring-0"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      Search
    </button>
  </div>
</div>
<div className="md:col-span-3">
                    <label htmlFor="address">BrandName</label>
                    <select data-te-select-init className="h-5 border mt-1 rounded px-4 w-full bg-gray-50 border-gray-300">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
  
</select>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">SLA time</label>
                    <select data-te-select-init className="h- border mt-1 rounded px-4 w-full bg-gray-50 border-gray-300">
  <option value="1">High</option>
  <option value="2">Medium</option>
  <option value="3">Low</option>

</select>
                  </div>
                  
                  <div className="md:col-span-5">
                    <label htmlFor="email">Warrnty Date format</label>
                    <select data-te-select-init className="h- border mt-1 rounded px-4 w-full bg-gray-50 border-gray-300">
  <option value="1">High</option>
  <option value="2">Medium</option>
  <option value="3">Low</option>

</select>
                  </div>
    
    
                 
    
                
    
                  <div className="md:col-span-2">
                    <label htmlFor="country">Conract No Value</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="Conract No Value" id="" placeholder="Conract No Value" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                      
                    </div>
                  </div>

                  <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block">Brand Document
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-700 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-blue-500 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
          />
      </div>
     

                  <div className="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3flex items-center justify-center">
            <div className="text-gray-600">
            <p className="font-medium text-lg">Cost Rate</p>
    
                  <div className="md:col-span-2">
                    <label htmlFor="Engineer cost">Engineer cost</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="Engineer cost" id="Engineer cost" placeholder="Engineer cost" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                      
                     
                    </div>
                  </div>
    
                  <div className="md:col-span-1">
                    <label htmlFor="Support engineer cost">Support engineer cost</label>
                    <input type=" Support engineer cost" name=" Support engineer cost" id=" Support engineer cost" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                  </div>
    
                 
                  
        
                  </div>
                  </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
    </div>
    
  )
}
