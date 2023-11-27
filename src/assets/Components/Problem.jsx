

const Problem = () => {
    return (
        <div>
        <div className="min-h-screen p-6 bg-blue-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>


                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3flex items-center justify-center">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Needed Products</p>
<br/>
                                <div className="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3flex items-center justify-center">
                                        <div className="text-gray-600">
                                            <p className="font-medium text-lg">Products</p>
                                            <br/>

                                            <div className="md:col-span-2">
                  <label htmlFor="In storke Products">In storke Products</label>
                  <br/>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="In storke Products" id="In storke Products" placeholder="In storke Products" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                    
                   
                  </div>
                </div>
                <br/>

                <div className="md:col-span-2">
                  <label htmlFor="Need to order Products">Need to order Products</label>
                  <br/>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="Need to order Products" id="Need to order Products" placeholder="Need to order Products" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                    
                   
                  </div>
                </div>
                <br/>
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
                </div>
                </div>
    );
};

export default Problem;