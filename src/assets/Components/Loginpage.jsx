export const Loginpage = () => {
    return (
      <div className="relative h-screen ">
        <img
          className="bg-gradient-to-r from-slate-200 to-slate-300 absolute  dark:bg-slate-800 dark:border-slate-500 bg-cover w-screen h-screen"
        />
        
          <svg
            className="absolute inset-x-0 bottom-0 text-white "
            viewBox="0 0 1160 163 "
          >
            <path
              fill="#7dd3fc"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans  justify-start  text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl sm:leading-none">
                  V S Information Systems (Pvt) Ltd 
                  </h2>
               
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                   Login
                  </h3>
                  <form>
                  <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="E-mail address"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                  
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                       Password
                      </label>
                      <input
                        placeholder="Password"
                        required
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="Password"
                        name="Password"
                      />
                    </div>
                    
                    <div className="mt-4 mb-2 sm:mb-4">
                     <button
                        type="Login"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                        href="/assets/Components/Brand_and_Categories"
                      >
                       Login
                      </button>
                      
                    </div>
                    <a
                  href="/assets/Components/Brand_and_Categories"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                 
                </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
   
  