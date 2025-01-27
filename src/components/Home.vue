<template>
  <div
    class="flex flex-col lg:flex-row items-start justify-start h-screen w-full mx-16 my-16 font-smooch-sans"
  >
    <div class="ms-0 md:ms-8 lg:ms-16">
      <p class="ms-4 text-base-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Hello, I'm Robin!
      </p>
      <div class="flex flex-col mt-8">
        <p class="text-3xl ms-8 pb-8">
          <span class="pe-2"
            ><img
              src="/assets/codingTerminal.svg"
              alt="Coding Terminal"
              class="w-4 h-4 inline-block" /></span
          >Web Developer
        </p>
        <p class="text-3xl ms-8 pb-8">
          <span class="pe-2"
            ><img
              src="/assets/codingTerminal.svg"
              alt="Coding Terminal"
              class="w-4 h-4 inline-block" /></span
          >Tech Enthusiast
        </p>
        <p class="text-3xl ms-8">
          <span class="pe-2"
            ><img
              src="/assets/codingTerminal.svg"
              alt="Coding Terminal"
              class="w-4 h-4 inline-block" /></span
          >Bandgeek
        </p>
      </div>
      <div
        class="hidden sm:flex flex-row items-center justify-around mt-12 gap-x-4 transition-all duration-300"
        :class="{ animate: copied }"
      >
        <a href="#contact" class="hover:animate"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 332.056"
            class="w-10 h-10"
          >
            <path
              d="M87.555 137.431c21.421-26.47 46.108-40.864 64.648-17.318 21.244 1.116 29.513 33.604 14.915 49.641 2.558.484 4.573 2.179 5.394 4.714.518 1.611.56 3.6-.081 5.967l-2.58 7.341c-.531 1.507-1.048 2.59-2.261 3.551-.976.776-2.057 1.18-3.473 1.271-.715 7.354-4.637 11.082-9.65 15.797 5.824 10.772 18.042 12.819 28.419 14.824 15.882 3.069 35.716 18.065 35.716 35.066v6.926a2.128 2.128 0 01-2.125 2.122H51.632a2.127 2.127 0 01-2.124-2.122v-6.267c0-20.425 20.797-32.487 37.487-34.722 11.649-1.559 21.421-3.137 25.968-16.231-4.624-4.01-8.437-7.729-9.569-15.555a7.773 7.773 0 01-2.597-.921l-.301-.191c-1.743-1.103-2.962-2.814-3.786-4.715-.958-2.18-1.381-4.728-1.478-6.646v-3.147c.074-2.81.356-5.048 2.419-7.25l-.382-.197c-.834-10.426 1.608-28.514-9.714-31.938zM41.782 0h428.436C493.195 0 512 18.805 512 41.782v248.492c0 22.945-18.838 41.782-41.782 41.782H41.782C18.805 332.056 0 313.251 0 290.274V41.782C0 18.831 18.831 0 41.782 0zm218.097 222.828c-7.247 0-7.247-14.714 0-14.714h190.204c7.248 0 7.248 14.714 0 14.714H259.879zm.003 44.505c-7.253 0-7.25-14.711 0-14.711h190.201c7.251 0 7.254 14.711 0 14.711H259.882zm-.003-133.337c-7.247 0-7.25-14.71 0-14.71h136.263c7.254 0 7.251 14.71 0 14.71H259.879zm0 44.415c-7.25 0-7.247-14.712 0-14.712h190.007c7.247 0 7.251 14.712 0 14.712H259.879zm241.85-101.435H10.271v213.298c0 17.321 14.19 31.511 31.511 31.511h428.436c17.333 0 31.511-14.177 31.511-31.511V76.976zM99.332 174.575c1.333-3.816 4.431-2.59 8.848-.977-1.762-8 .317-14.248 6.581-18.578 13.363-9.246 19.4-1.332 33.882-12.994 8.321 4.188 15.765 11.273 11.972 33.403 4.013-3.043 9.801-2.758 7.981 3.981l-2.487 7.046c-.595 1.685-.993 2.296-3.124 2.183-.941-.048-1.888-.413-2.833-1.038.873 10.397-4.175 13.79-10.49 19.889-9.732 9.388-21.111 9-31.211.016-5.915-5.261-11.17-8.457-11.432-19.274-1.532.472-2.981.556-4.249-.165-2.522-1.436-3.444-5.614-3.58-8.292-.055-1.076-.01-4.103.142-5.2zm51.665 37.064c2.316 3.793 5.659 6.338 9.391 7.884-14.94 10.963-35.569 9.967-50.937.598 3.826-2.059 6.083-4.883 7.577-8.611 5.495 4.511 11.403 6.839 17.337 6.836 5.77-.003 11.435-2.196 16.632-6.707z"
            /></svg
        ></a>
        <a href="https://github.com/robinkelsickii" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 640 640"
            class="w-10 h-10"
          >
            <path
              d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/robinkelsickii/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 509.64"
            class="w-10 h-10"
          >
            <rect width="512" height="509.64" rx="115.61" ry="115.61" />
            <path
              fill="#fff"
              d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
            />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@bobinobel" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 36.203 35.438 v -3.51 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -15.047 0 -27.289 12.244 -27.289 27.291 c 0 9.23 4.613 17.401 11.65 22.342 c -4.712 -5.039 -7.332 -11.681 -7.328 -18.58 C 9.559 47.88 21.453 35.784 36.203 35.438"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 242, 234);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 36.847 75.175 c 6.714 0 12.19 -5.341 12.44 -11.997 l 0.023 -59.417 h 10.855 c -0.232 -1.241 -0.349 -2.5 -0.35 -3.762 H 44.989 l -0.025 59.419 c -0.247 6.654 -5.726 11.993 -12.438 11.993 c -2.015 0.001 -4 -0.49 -5.782 -1.431 C 29.079 73.238 32.839 75.171 36.847 75.175 M 80.441 23.93 v -3.302 c -3.989 0.004 -7.893 -1.157 -11.232 -3.339 c 2.928 3.371 6.869 5.701 11.234 6.641"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 242, 234);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 69.209 17.286 c -3.272 -3.744 -5.075 -8.549 -5.073 -13.522 h -3.972 C 61.203 9.318 64.472 14.205 69.209 17.286 M 32.526 46.486 c -6.88 0.008 -12.455 5.583 -12.463 12.463 c 0.004 4.632 2.576 8.88 6.679 11.032 c -1.533 -2.114 -2.358 -4.657 -2.358 -7.268 c 0.007 -6.88 5.582 -12.457 12.463 -12.465 c 1.284 0 2.515 0.212 3.677 0.577 V 35.689 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -0.216 0 -0.429 0.012 -0.643 0.016 v 11.626 C 35.014 46.685 33.774 46.49 32.526 46.486"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(255, 0, 79);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 80.441 23.93 v 11.523 c -7.689 0 -14.81 -2.459 -20.627 -6.633 v 30.13 c 0 15.047 -12.24 27.289 -27.287 27.289 c -5.815 0 -11.207 -1.835 -15.639 -4.947 c 5.151 5.555 12.384 8.711 19.959 8.709 c 15.047 0 27.289 -12.242 27.289 -27.287 v -30.13 c 6.009 4.321 13.226 6.642 20.627 6.633 V 24.387 c -1.484 0 -2.927 -0.161 -4.323 -0.46"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(255, 0, 79);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 59.813 58.949 v -30.13 c 6.009 4.322 13.226 6.642 20.627 6.633 V 23.93 c -4.364 -0.941 -8.305 -3.272 -11.232 -6.644 c -4.737 -3.081 -8.006 -7.968 -9.045 -13.522 H 49.309 l -0.023 59.417 c -0.249 6.654 -5.726 11.995 -12.44 11.995 c -4.007 -0.004 -7.768 -1.938 -10.102 -5.194 c -4.103 -2.151 -6.676 -6.399 -6.681 -11.032 c 0.008 -6.88 5.583 -12.455 12.463 -12.463 c 1.282 0 2.513 0.21 3.677 0.577 V 35.438 C 21.453 35.784 9.559 47.88 9.559 62.713 c 0 7.173 2.787 13.703 7.328 18.58 c 4.578 3.223 10.041 4.95 15.639 4.945 C 47.574 86.238 59.813 73.996 59.813 58.949"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </a>
        <a href="https://www.instagram.com/wingofnight207/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <circle
                cx="70.557"
                cy="19.936999999999998"
                r="4.897"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="  matrix(1 0 0 1 0 0) "
              />
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/robinkelsick/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 45 -0.228 c -24.853 0 -45 20.25 -45 45.229 c 0 22.806 16.797 41.66 38.633 44.77 V 58.779 h -10.64 V 46.328 h 10.64 v -9.182 c 0 -10.656 6.441 -16.458 15.849 -16.458 c 4.506 0 8.38 0.339 9.508 0.491 v 11.136 l -6.525 0.003 c -5.116 0 -6.107 2.457 -6.107 6.061 v 7.949 h 12.202 l -1.589 12.451 H 51.359 v 30.993 C 73.199 86.666 90 67.81 90 45.001 C 90 20.022 69.853 -0.228 45 -0.228 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </a>
        <button
          class="btn btn-ghost hover:animate h-14 w-14 flex items-center justify-center"
          @click="handleDiscord"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-discord w-10 h-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
            />
          </svg>
        </button>

        <span
          v-if="copied"
          class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded z-50"
        >
          Copied Username!
        </span>
      </div>
      <button
        @click="toggleSocialMenu"
        class="!block sm:!hidden !p-2 !text-white !bg-[#d86dfc] !rounded !mt-8 ms-16"
      >
        Social Links
      </button>
      <div v-if="menuVisible" class="sm:hidden grid grid-cols-2 gap-4 mt-4">
        <a href="#contact" class="hover:animate"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 332.056"
            class="w-10 h-10"
          >
            <path
              d="M87.555 137.431c21.421-26.47 46.108-40.864 64.648-17.318 21.244 1.116 29.513 33.604 14.915 49.641 2.558.484 4.573 2.179 5.394 4.714.518 1.611.56 3.6-.081 5.967l-2.58 7.341c-.531 1.507-1.048 2.59-2.261 3.551-.976.776-2.057 1.18-3.473 1.271-.715 7.354-4.637 11.082-9.65 15.797 5.824 10.772 18.042 12.819 28.419 14.824 15.882 3.069 35.716 18.065 35.716 35.066v6.926a2.128 2.128 0 01-2.125 2.122H51.632a2.127 2.127 0 01-2.124-2.122v-6.267c0-20.425 20.797-32.487 37.487-34.722 11.649-1.559 21.421-3.137 25.968-16.231-4.624-4.01-8.437-7.729-9.569-15.555a7.773 7.773 0 01-2.597-.921l-.301-.191c-1.743-1.103-2.962-2.814-3.786-4.715-.958-2.18-1.381-4.728-1.478-6.646v-3.147c.074-2.81.356-5.048 2.419-7.25l-.382-.197c-.834-10.426 1.608-28.514-9.714-31.938zM41.782 0h428.436C493.195 0 512 18.805 512 41.782v248.492c0 22.945-18.838 41.782-41.782 41.782H41.782C18.805 332.056 0 313.251 0 290.274V41.782C0 18.831 18.831 0 41.782 0zm218.097 222.828c-7.247 0-7.247-14.714 0-14.714h190.204c7.248 0 7.248 14.714 0 14.714H259.879zm.003 44.505c-7.253 0-7.25-14.711 0-14.711h190.201c7.251 0 7.254 14.711 0 14.711H259.882zm-.003-133.337c-7.247 0-7.25-14.71 0-14.71h136.263c7.254 0 7.251 14.71 0 14.71H259.879zm0 44.415c-7.25 0-7.247-14.712 0-14.712h190.007c7.247 0 7.251 14.712 0 14.712H259.879zm241.85-101.435H10.271v213.298c0 17.321 14.19 31.511 31.511 31.511h428.436c17.333 0 31.511-14.177 31.511-31.511V76.976zM99.332 174.575c1.333-3.816 4.431-2.59 8.848-.977-1.762-8 .317-14.248 6.581-18.578 13.363-9.246 19.4-1.332 33.882-12.994 8.321 4.188 15.765 11.273 11.972 33.403 4.013-3.043 9.801-2.758 7.981 3.981l-2.487 7.046c-.595 1.685-.993 2.296-3.124 2.183-.941-.048-1.888-.413-2.833-1.038.873 10.397-4.175 13.79-10.49 19.889-9.732 9.388-21.111 9-31.211.016-5.915-5.261-11.17-8.457-11.432-19.274-1.532.472-2.981.556-4.249-.165-2.522-1.436-3.444-5.614-3.58-8.292-.055-1.076-.01-4.103.142-5.2zm51.665 37.064c2.316 3.793 5.659 6.338 9.391 7.884-14.94 10.963-35.569 9.967-50.937.598 3.826-2.059 6.083-4.883 7.577-8.611 5.495 4.511 11.403 6.839 17.337 6.836 5.77-.003 11.435-2.196 16.632-6.707z"
            /></svg
        ></a>
        <a href="https://github.com/robinkelsickii" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 640 640"
            class="w-10 h-10"
          >
            <path
              d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/robinkelsickii/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 509.64"
            class="w-10 h-10"
          >
            <rect width="512" height="509.64" rx="115.61" ry="115.61" />
            <path
              fill="#fff"
              d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
            />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@bobinobel" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 36.203 35.438 v -3.51 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -15.047 0 -27.289 12.244 -27.289 27.291 c 0 9.23 4.613 17.401 11.65 22.342 c -4.712 -5.039 -7.332 -11.681 -7.328 -18.58 C 9.559 47.88 21.453 35.784 36.203 35.438"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 242, 234);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 36.847 75.175 c 6.714 0 12.19 -5.341 12.44 -11.997 l 0.023 -59.417 h 10.855 c -0.232 -1.241 -0.349 -2.5 -0.35 -3.762 H 44.989 l -0.025 59.419 c -0.247 6.654 -5.726 11.993 -12.438 11.993 c -2.015 0.001 -4 -0.49 -5.782 -1.431 C 29.079 73.238 32.839 75.171 36.847 75.175 M 80.441 23.93 v -3.302 c -3.989 0.004 -7.893 -1.157 -11.232 -3.339 c 2.928 3.371 6.869 5.701 11.234 6.641"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 242, 234);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 69.209 17.286 c -3.272 -3.744 -5.075 -8.549 -5.073 -13.522 h -3.972 C 61.203 9.318 64.472 14.205 69.209 17.286 M 32.526 46.486 c -6.88 0.008 -12.455 5.583 -12.463 12.463 c 0.004 4.632 2.576 8.88 6.679 11.032 c -1.533 -2.114 -2.358 -4.657 -2.358 -7.268 c 0.007 -6.88 5.582 -12.457 12.463 -12.465 c 1.284 0 2.515 0.212 3.677 0.577 V 35.689 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -0.216 0 -0.429 0.012 -0.643 0.016 v 11.626 C 35.014 46.685 33.774 46.49 32.526 46.486"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(255, 0, 79);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 80.441 23.93 v 11.523 c -7.689 0 -14.81 -2.459 -20.627 -6.633 v 30.13 c 0 15.047 -12.24 27.289 -27.287 27.289 c -5.815 0 -11.207 -1.835 -15.639 -4.947 c 5.151 5.555 12.384 8.711 19.959 8.709 c 15.047 0 27.289 -12.242 27.289 -27.287 v -30.13 c 6.009 4.321 13.226 6.642 20.627 6.633 V 24.387 c -1.484 0 -2.927 -0.161 -4.323 -0.46"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(255, 0, 79);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 59.813 58.949 v -30.13 c 6.009 4.322 13.226 6.642 20.627 6.633 V 23.93 c -4.364 -0.941 -8.305 -3.272 -11.232 -6.644 c -4.737 -3.081 -8.006 -7.968 -9.045 -13.522 H 49.309 l -0.023 59.417 c -0.249 6.654 -5.726 11.995 -12.44 11.995 c -4.007 -0.004 -7.768 -1.938 -10.102 -5.194 c -4.103 -2.151 -6.676 -6.399 -6.681 -11.032 c 0.008 -6.88 5.583 -12.455 12.463 -12.463 c 1.282 0 2.513 0.21 3.677 0.577 V 35.438 C 21.453 35.784 9.559 47.88 9.559 62.713 c 0 7.173 2.787 13.703 7.328 18.58 c 4.578 3.223 10.041 4.95 15.639 4.945 C 47.574 86.238 59.813 73.996 59.813 58.949"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </a>
        <a href="https://www.instagram.com/wingofnight207/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 62.263 90 H 27.738 C 12.443 90 0 77.557 0 62.263 V 27.738 C 0 12.443 12.443 0 27.738 0 h 34.525 C 77.557 0 90 12.443 90 27.738 v 34.525 C 90 77.557 77.557 90 62.263 90 z M 27.738 7 C 16.303 7 7 16.303 7 27.738 v 34.525 C 7 73.697 16.303 83 27.738 83 h 34.525 C 73.697 83 83 73.697 83 62.263 V 27.738 C 83 16.303 73.697 7 62.263 7 H 27.738 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                d="M 45.255 70.47 c -13.904 0 -25.215 -11.312 -25.215 -25.215 S 31.352 20.04 45.255 20.04 s 25.215 11.312 25.215 25.215 S 59.159 70.47 45.255 70.47 z M 45.255 27.04 c -10.044 0 -18.215 8.171 -18.215 18.215 c 0 10.044 8.171 18.215 18.215 18.215 c 10.044 0 18.215 -8.171 18.215 -18.215 C 63.471 35.211 55.3 27.04 45.255 27.04 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <circle
                cx="70.557"
                cy="19.936999999999998"
                r="4.897"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="  matrix(1 0 0 1 0 0) "
              />
            </g>
          </svg>
        </a>
        <a href="https://www.facebook.com/robinkelsick/" target="_blank" class="hover:animate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
            class="w-10 h-10"
          >
            <defs></defs>
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 45 -0.228 c -24.853 0 -45 20.25 -45 45.229 c 0 22.806 16.797 41.66 38.633 44.77 V 58.779 h -10.64 V 46.328 h 10.64 v -9.182 c 0 -10.656 6.441 -16.458 15.849 -16.458 c 4.506 0 8.38 0.339 9.508 0.491 v 11.136 l -6.525 0.003 c -5.116 0 -6.107 2.457 -6.107 6.061 v 7.949 h 12.202 l -1.589 12.451 H 51.359 v 30.993 C 73.199 86.666 90 67.81 90 45.001 C 90 20.022 69.853 -0.228 45 -0.228 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: rgb(0, 0, 0);
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </a>
        <button
          class="btn btn-ghost hover:animate h-14 w-14 flex items-center justify-center"
          @click="handleDiscord"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-discord w-10 h-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
            />
          </svg>
        </button>

        <span
          v-if="copied"
          class="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-2 py-1 rounded z-50"
        >
          Copied Username!
        </span>
      </div>
    </div>
    <img
      class="sm:block w-[500px] h-[500px] md:ms-24 opacity-50 grayscale object-cover aspect-square"
      src="/assets/ai-portrait.png"
      alt="An Ai Portrait of Me"
    />
  </div>
</template>

<script scoped>
import { ref } from 'vue'

export default {
  name: 'Home',

  setup() {
    const copied = ref(false)
    const menuVisible = ref(false)

    const handleDiscord = () => {
      navigator.clipboard.writeText('Bandgeek95').then(() => {
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      })
    }

    const toggleSocialMenu = () => {
      menuVisible.value = !menuVisible.value
    }

    return { copied, handleDiscord, menuVisible, toggleSocialMenu }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100..900&display=swap');

a,
button {
  transition:
    transform 0.4s ease-in-out,
    background-color 0.4s ease-in-out,
    color 0.4s ease-in-out;
}

a:hover,
button:hover {
  transform: rotate(-5deg) scale(1.1);
  color: white;
}

a,
button {
  transform: scale(1); /* Normal state without any transformation */
}

a,
button {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  background-color: transparent;
}

.mt-6 {
  margin-top: 1.5rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-x-4 {
  gap: 1rem;
}

.w-10 {
  width: 2.5rem;
}

.h-10 {
  height: 2.5rem;
}

a:focus,
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Adds a glow when focused */
}

.smooch-sans {
  font-family: 'Smooch Sans', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
