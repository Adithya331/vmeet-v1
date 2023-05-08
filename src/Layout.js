import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Layout() {
    let mic = document.getElementById('mic');

    let navigate = useNavigate();

    useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
      console.log(authToken)
  
      if(authToken)
      {
        navigate('/layout')
      }
      if(!authToken)
      {
        navigate('/login')
      }
    }, [])

    return (
        <div>
          <div class="bg-neutral-600 h-screen w-3/4">
            <span class="fixed right-0">profile</span>
          </div>
          <div class="bg-black">
          </div>
            <footer class="text-white body-font fixed inset-x-0 bottom-0 bg-black h-15 w-auto">
                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center h-auto">
                  <div class="flex justify-start ">

                    <div className="mic-button" id="mic">
                        <button class="ml-5 h-8 w-10 flex rounded-full bg-red-600 hover:bg-red-200 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#fff" viewBox="0 0 1920 1920"><path fill-rule="evenodd" d="M425.818 709.983V943.41c0 293.551 238.946 532.497 532.497 532.497 293.55 0 532.496-238.946 532.496-532.497V709.983h96.818V943.41c0 330.707-256.438 602.668-580.9 627.471l-.006 252.301h242.044V1920H667.862v-96.818h242.043l-.004-252.3C585.438 1546.077 329 1274.116 329 943.41V709.983h96.818ZM958.315 0c240.204 0 435.679 195.475 435.679 435.68v484.087c0 240.205-195.475 435.68-435.68 435.68-240.204 0-435.679-195.475-435.679-435.68V435.68C522.635 195.475 718.11 0 958.315 0Z"/></svg>
                        </button>
                    </div>

                    <div className="video-button" id="vid">
                        <button class="ml-5 h-8 w-10 flex rounded-full bg-red-600 hover:bg-red-200 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v.072l3.202-1.84A1.2 1.2 0 0 1 22 8.271v7.477a1.2 1.2 0 0 1-1.694 1.093l-3.32-1.5A4 4 0 0 1 13 19H6a4 4 0 0 1-4-4V9Zm15 4.154 3 1.356V9.654l-3 1.725v1.775ZM15 9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9Z" clip-rule="evenodd"/></svg>
                        </button>
                    </div>
                    
                </div>

                  <div class="inline-flex justify-center ml-auto items-center">
                    <p class="ml-2 mr-2">1
                    </p>
                    <p class="ml-2 mr-2">2</p>
                    <p class="ml-2 mr-2">3
                    </p>
                  </div>

                  <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    
                    <button class="bg-red-600 text-white w-auto rounded-full hover:bg-red-400 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" data-name="end call" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.5" d="m4.96 15.526 2.595-1.274a.7.7 0 0 0 .407-.579l.056-1.032a.662.662 0 0 1 .437-.579 9.327 9.327 0 0 1 6.5 0 .662.662 0 0 1 .437.579l.109 1.032a.7.7 0 0 0 .394.589l2.595 1.274.662.331a.708.708 0 0 0 .308.07.692.692 0 0 0 .467-.179 3 3 0 0 0 .992-2.559l-.03-.235-.016-.122a1.556 1.556 0 0 0-.026-.166l-.04-.162c-.55-2.151-4.078-3.843-8.456-4.008h-1.245c-4.372.165-7.9 1.857-8.483 4l-.04.162a1.556 1.556 0 0 0-.026.165l-.017.122-.03.235a3 3 0 0 0 .993 2.558.692.692 0 0 0 .467.179.708.708 0 0 0 .308-.07Z"/></svg>
                    </button>
                    
                  </span>
                </div>
          </footer>
        </div>
        // mic-off --- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="#fff" viewBox="0 0 1920 1920"><path fill-rule="evenodd" d="M666.286 1242.8c-88.168-79.79-143.65-195.06-143.65-323.033V435.679C522.636 195.475 718.111 0 958.315 0c176.955 0 329.645 106.09 397.775 257.997L1536.8 0l92.38 64.669L331.381 1917.48 239 1852.81l305.289-435.84C412.414 1301.53 329 1132.02 329 943.408V709.98h96.818v233.428c0 155.812 67.32 296.242 174.393 393.722l66.075-94.33Zm129.034 207.58-57.716 82.4c54.294 20.4 112.129 33.5 172.304 38.1v252.3H667.861V1920h580.909v-96.82h-242.044v-252.3c324.464-24.8 580.904-296.76 580.904-627.472V709.98h-96.82v233.428c0 293.552-238.94 532.492-532.495 532.492-56.824 0-111.601-8.95-162.995-25.52Zm598.67-854.695L868.36 1346.11c29.036 6.12 59.127 9.34 89.955 9.34 240.205 0 435.675-195.48 435.675-435.683V595.685Z"/></svg>
        // video off --<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414l16-16ZM13 5c.893 0 1.718.293 2.384.788l-1.446 1.445C13.658 7.084 13.34 7 13 7H6a2 2 0 0 0-2 2v6c0 .596.26 1.131.674 1.497L3.26 17.913A3.989 3.989 0 0 1 2 15V9a4 4 0 0 1 4-4h7Z"/><path fill="#fff" fill-rule="evenodd" d="M13 17H9.828l-2 2H13a4 4 0 0 0 3.985-3.658l3.321 1.5A1.2 1.2 0 0 0 22 15.75V8.27a1.2 1.2 0 0 0-1.798-1.04l-1.422.818-3.78 3.78V15a2 2 0 0 1-2 2Zm4-3.846 3 1.356V9.654l-3 1.725v1.775Z" clip-rule="evenodd"/></svg>
    );
}

export default Layout;
