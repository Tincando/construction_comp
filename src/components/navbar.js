import * as React from 'react';
import { Link } from 'gatsby';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    const closeButtons = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelector('.navbar-backdrop');

    // Function to show the menu with animation
    const handleBurgerClick = () => {
      menu.classList.remove('hidden'); // Show the menu
      menu.classList.add('slide-in-left'); // Apply the slide-in animation
      backdrop.classList.remove('hidden'); // Show the backdrop
    };

    // Function to hide the menu and backdrop
    const handleCloseClick = () => {
      menu.classList.add('hidden'); // Ensure the menu is hidden
      backdrop.classList.add('hidden'); // Ensure the backdrop is hidden
      menu.classList.remove('slide-in-left'); // Reset the animation for future clicks
    };

    // Add event listeners
    burger.addEventListener('click', handleBurgerClick);
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', handleCloseClick);
    });

    return () => {
      // Cleanup event listeners
      burger.removeEventListener('click', handleBurgerClick);
      closeButtons.forEach((closeButton) => {
        closeButton.removeEventListener('click', handleCloseClick);
      });
    };
  }, []);

  return (
    <body>
      <nav class="relative px-4 py-4 flex justify-between items-center bg-white z-50">
        <a class="text-3xl font-bold leading-none">
          <Link to="/">
            <svg
              class="h-16"
              alt="logo"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="230.000000pt"
              height="107.000000pt"
              viewBox="0 0 230.000000 107.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M275 1028 c-104 -19 -99 -15 -105 -93 l-5 -70 -78 -43 -77 -44 2
-332 3 -331 128 -3 127 -3 0 406 0 405 -40 -20 c-21 -11 -42 -20 -45 -20 -3 0
-5 25 -5 55 0 53 0 54 33 59 17 3 59 10 91 16 33 5 63 10 67 10 3 0 37 -40 74
-90 l68 -89 3 -101 c2 -55 1 -100 -3 -100 -3 0 -31 14 -63 32 -71 39 -87 34
-85 -24 1 -23 2 -154 3 -290 l2 -248 130 0 130 0 0 229 0 229 -45 26 -45 27 0
115 0 114 -52 68 c-103 133 -99 131 -213 110z m-29 -520 l-2 -373 -107 -3
-107 -3 0 311 c0 170 -1 313 -2 316 -3 6 197 120 214 123 3 1 5 -167 4 -371z
m260 105 l104 -58 -3 -210 -2 -210 -105 0 -105 0 -3 268 c-1 147 0 267 4 267
3 0 52 -26 110 -57z"
                />
                <path
                  d="M300 882 c0 -22 5 -63 11 -90 10 -42 9 -53 -5 -73 -21 -31 -20 -61 3
-108 20 -37 20 -38 -1 -107 -19 -62 -20 -78 -11 -163 7 -61 7 -108 1 -129 -12
-41 -2 -102 15 -102 10 0 12 34 9 148 -4 203 -5 194 12 243 21 59 20 82 -5
130 l-20 40 20 35 c20 34 20 38 5 104 -8 38 -14 76 -12 86 2 9 -3 19 -9 21 -9
3 -13 -8 -13 -35z"
                />
                <path
                  d="M790 650 l0 -111 48 3 47 3 3 43 c2 24 -1 49 -7 56 -7 9 -7 16 0 23
6 6 9 28 7 49 -3 39 -3 39 -50 42 l-48 3 0 -111z m70 55 c0 -28 -4 -35 -20
-35 -16 0 -20 7 -20 35 0 28 4 35 20 35 16 0 20 -7 20 -35z m-2 -103 c3 -37 1
-42 -17 -42 -18 0 -21 6 -21 46 0 38 3 45 18 42 12 -2 18 -15 20 -46z"
                />
                <path
                  d="M956 743 c-6 -22 -36 -182 -36 -194 0 -19 19 -8 22 14 5 33 44 35 52
3 3 -15 11 -26 16 -26 6 0 10 2 10 4 0 6 -29 167 -35 194 -6 26 -22 29 -29 5z
m24 -77 c0 -13 3 -31 6 -40 4 -12 0 -16 -16 -16 -18 0 -21 4 -16 23 3 12 6 30
6 40 0 9 5 17 10 17 6 0 10 -11 10 -24z"
                />
                <path
                  d="M1050 724 c0 -26 9 -47 35 -78 42 -52 46 -86 10 -86 -20 0 -25 5 -25
25 0 14 -4 25 -10 25 -5 0 -10 -16 -10 -35 0 -35 0 -35 45 -35 l45 0 0 36 c0
27 -9 48 -35 80 -42 51 -46 84 -10 84 20 0 25 -5 25 -25 0 -14 5 -25 10 -25 6
0 10 16 10 35 0 35 0 35 -45 35 -45 0 -45 0 -45 -36z"
                />
                <path
                  d="M1180 650 c0 -67 4 -110 10 -110 6 0 10 43 10 110 0 67 -4 110 -10
110 -6 0 -10 -43 -10 -110z"
                />
                <path
                  d="M1242 653 l3 -108 43 -3 42 -3 0 35 c0 20 -4 36 -10 36 -5 0 -10 -11
-10 -25 0 -20 -5 -25 -25 -25 -25 0 -25 1 -25 90 0 89 0 90 25 90 20 0 25 -5
25 -25 0 -14 5 -25 10 -25 6 0 10 16 10 35 0 35 0 35 -45 35 l-46 0 3 -107z"
                />
                <path
                  d="M795 397 c-3 -7 -4 -56 -3 -108 l3 -94 45 0 c43 0 45 1 48 33 2 24
-1 32 -12 32 -10 0 -16 -9 -16 -25 0 -18 -5 -25 -20 -25 -19 0 -20 7 -20 95 0
88 1 95 20 95 15 0 20 -7 20 -25 0 -16 6 -25 16 -25 11 0 14 8 12 28 -3 24 -7
27 -46 30 -29 2 -44 -1 -47 -11z"
                />
                <path
                  d="M955 388 c-14 -61 -35 -171 -35 -184 0 -23 18 -16 22 9 5 34 45 36
54 3 3 -14 10 -26 15 -26 12 0 12 1 -6 95 -21 114 -24 125 -35 125 -5 0 -12
-10 -15 -22z m28 -90 c5 -34 3 -38 -15 -38 -16 0 -19 5 -14 23 3 12 6 33 6 47
0 35 16 12 23 -32z"
                />
                <path
                  d="M1052 303 l3 -108 40 0 40 0 3 108 c2 69 -1 107 -8 107 -6 0 -10 -38
-10 -100 l0 -100 -25 0 -25 0 0 100 c0 62 -4 100 -10 100 -7 0 -10 -38 -8
-107z"
                />
                <path
                  d="M1180 300 l0 -110 35 0 c19 0 35 5 35 10 0 6 -11 10 -25 10 l-25 0 0
100 c0 60 -4 100 -10 100 -6 0 -10 -43 -10 -110z"
                />
                <path
                  d="M1290 300 c0 -67 4 -110 10 -110 6 0 10 21 10 48 l1 47 25 -47 c13
-27 29 -48 34 -48 14 0 13 3 -17 65 l-27 55 22 46 c13 26 20 49 17 52 -7 7 -9
4 -33 -43 l-21 -40 -1 43 c0 23 -4 42 -10 42 -6 0 -10 -43 -10 -110z"
                />
                <path
                  d="M1410 300 c0 -67 4 -110 10 -110 6 0 10 43 10 110 0 67 -4 110 -10
110 -6 0 -10 -43 -10 -110z"
                />
                <path
                  d="M1470 301 c0 -67 4 -111 10 -111 6 0 10 31 10 72 0 82 7 80 40 -9 12
-35 26 -63 31 -63 5 0 9 50 9 110 0 67 -4 110 -10 110 -6 0 -10 -29 -10 -67 0
-76 -8 -74 -38 7 -32 88 -42 76 -42 -49z"
                />
                <path
                  d="M1607 403 c-10 -9 -8 -186 2 -201 5 -8 23 -12 47 -10 l39 3 3 53 c3
51 3 52 -25 51 -15 0 -22 -3 -15 -6 7 -2 12 -22 12 -44 0 -32 -3 -39 -20 -39
-19 0 -20 7 -20 95 0 88 1 95 20 95 15 0 20 -7 20 -25 0 -16 6 -25 15 -25 10
0 15 10 15 30 0 29 -2 30 -43 30 -24 0 -47 -3 -50 -7z"
                />
                <path
                  d="M1800 300 l0 -110 35 0 c19 0 35 5 35 10 0 6 -11 10 -25 10 l-25 0 0
100 c0 60 -4 100 -10 100 -6 0 -10 -43 -10 -110z"
                />
                <path
                  d="M1908 403 c21 -4 22 -8 22 -109 0 -63 4 -104 10 -104 6 0 10 41 10
104 0 101 1 105 23 109 12 2 -3 4 -33 4 -30 0 -45 -2 -32 -4z"
                />
                <path
                  d="M2012 303 l3 -108 31 -3 c47 -5 55 13 52 119 l-3 94 -43 3 -43 3 3
-108z m56 88 c9 -5 12 -31 10 -92 -3 -78 -4 -84 -25 -87 -22 -3 -23 -1 -23 86
0 101 5 114 38 93z"
                />
              </g>
            </svg>
          </Link>
        </a>

        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-black-600 p-3">
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a class="text-sm text-gray-400 hover:text-gray-500">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a class="text-sm text-gray-400 hover:text-gray-500">About Us</a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500">Projects</a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>

          <li>
            <Link className="text-sm text-gray-400 hover:text-gray-500" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <div class="navbar-menu fixed inset-0 z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav class="fixed inset-0 flex flex-col py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="text-3xl font-bold leading-none">
              <Link to="/">
                <svg
                  class="h-12"
                  alt="logo"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="230.000000pt"
                  height="107.000000pt"
                  viewBox="0 0 230.000000 107.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path
                      d="M275 1028 c-104 -19 -99 -15 -105 -93 l-5 -70 -78 -43 -77 -44 2
-332 3 -331 128 -3 127 -3 0 406 0 405 -40 -20 c-21 -11 -42 -20 -45 -20 -3 0
-5 25 -5 55 0 53 0 54 33 59 17 3 59 10 91 16 33 5 63 10 67 10 3 0 37 -40 74
-90 l68 -89 3 -101 c2 -55 1 -100 -3 -100 -3 0 -31 14 -63 32 -71 39 -87 34
-85 -24 1 -23 2 -154 3 -290 l2 -248 130 0 130 0 0 229 0 229 -45 26 -45 27 0
115 0 114 -52 68 c-103 133 -99 131 -213 110z m-29 -520 l-2 -373 -107 -3
-107 -3 0 311 c0 170 -1 313 -2 316 -3 6 197 120 214 123 3 1 5 -167 4 -371z
m260 105 l104 -58 -3 -210 -2 -210 -105 0 -105 0 -3 268 c-1 147 0 267 4 267
3 0 52 -26 110 -57z"
                    />
                    <path
                      d="M300 882 c0 -22 5 -63 11 -90 10 -42 9 -53 -5 -73 -21 -31 -20 -61 3
-108 20 -37 20 -38 -1 -107 -19 -62 -20 -78 -11 -163 7 -61 7 -108 1 -129 -12
-41 -2 -102 15 -102 10 0 12 34 9 148 -4 203 -5 194 12 243 21 59 20 82 -5
130 l-20 40 20 35 c20 34 20 38 5 104 -8 38 -14 76 -12 86 2 9 -3 19 -9 21 -9
3 -13 -8 -13 -35z"
                    />
                    <path
                      d="M790 650 l0 -111 48 3 47 3 3 43 c2 24 -1 49 -7 56 -7 9 -7 16 0 23
6 6 9 28 7 49 -3 39 -3 39 -50 42 l-48 3 0 -111z m70 55 c0 -28 -4 -35 -20
-35 -16 0 -20 7 -20 35 0 28 4 35 20 35 16 0 20 -7 20 -35z m-2 -103 c3 -37 1
-42 -17 -42 -18 0 -21 6 -21 46 0 38 3 45 18 42 12 -2 18 -15 20 -46z"
                    />
                    <path
                      d="M956 743 c-6 -22 -36 -182 -36 -194 0 -19 19 -8 22 14 5 33 44 35 52
3 3 -15 11 -26 16 -26 6 0 10 2 10 4 0 6 -29 167 -35 194 -6 26 -22 29 -29 5z
m24 -77 c0 -13 3 -31 6 -40 4 -12 0 -16 -16 -16 -18 0 -21 4 -16 23 3 12 6 30
6 40 0 9 5 17 10 17 6 0 10 -11 10 -24z"
                    />
                    <path
                      d="M1050 724 c0 -26 9 -47 35 -78 42 -52 46 -86 10 -86 -20 0 -25 5 -25
25 0 14 -4 25 -10 25 -5 0 -10 -16 -10 -35 0 -35 0 -35 45 -35 l45 0 0 36 c0
27 -9 48 -35 80 -42 51 -46 84 -10 84 20 0 25 -5 25 -25 0 -14 5 -25 10 -25 6
0 10 16 10 35 0 35 0 35 -45 35 -45 0 -45 0 -45 -36z"
                    />
                    <path
                      d="M1180 650 c0 -67 4 -110 10 -110 6 0 10 43 10 110 0 67 -4 110 -10
110 -6 0 -10 -43 -10 -110z"
                    />
                    <path
                      d="M1242 653 l3 -108 43 -3 42 -3 0 35 c0 20 -4 36 -10 36 -5 0 -10 -11
-10 -25 0 -20 -5 -25 -25 -25 -25 0 -25 1 -25 90 0 89 0 90 25 90 20 0 25 -5
25 -25 0 -14 5 -25 10 -25 6 0 10 16 10 35 0 35 0 35 -45 35 l-46 0 3 -107z"
                    />
                    <path
                      d="M795 397 c-3 -7 -4 -56 -3 -108 l3 -94 45 0 c43 0 45 1 48 33 2 24
-1 32 -12 32 -10 0 -16 -9 -16 -25 0 -18 -5 -25 -20 -25 -19 0 -20 7 -20 95 0
88 1 95 20 95 15 0 20 -7 20 -25 0 -16 6 -25 16 -25 11 0 14 8 12 28 -3 24 -7
27 -46 30 -29 2 -44 -1 -47 -11z"
                    />
                    <path
                      d="M955 388 c-14 -61 -35 -171 -35 -184 0 -23 18 -16 22 9 5 34 45 36
54 3 3 -14 10 -26 15 -26 12 0 12 1 -6 95 -21 114 -24 125 -35 125 -5 0 -12
-10 -15 -22z m28 -90 c5 -34 3 -38 -15 -38 -16 0 -19 5 -14 23 3 12 6 33 6 47
0 35 16 12 23 -32z"
                    />
                    <path
                      d="M1052 303 l3 -108 40 0 40 0 3 108 c2 69 -1 107 -8 107 -6 0 -10 -38
-10 -100 l0 -100 -25 0 -25 0 0 100 c0 62 -4 100 -10 100 -7 0 -10 -38 -8
-107z"
                    />
                    <path
                      d="M1180 300 l0 -110 35 0 c19 0 35 5 35 10 0 6 -11 10 -25 10 l-25 0 0
100 c0 60 -4 100 -10 100 -6 0 -10 -43 -10 -110z"
                    />
                    <path
                      d="M1290 300 c0 -67 4 -110 10 -110 6 0 10 21 10 48 l1 47 25 -47 c13
-27 29 -48 34 -48 14 0 13 3 -17 65 l-27 55 22 46 c13 26 20 49 17 52 -7 7 -9
4 -33 -43 l-21 -40 -1 43 c0 23 -4 42 -10 42 -6 0 -10 -43 -10 -110z"
                    />
                    <path
                      d="M1410 300 c0 -67 4 -110 10 -110 6 0 10 43 10 110 0 67 -4 110 -10
110 -6 0 -10 -43 -10 -110z"
                    />
                    <path
                      d="M1470 301 c0 -67 4 -111 10 -111 6 0 10 31 10 72 0 82 7 80 40 -9 12
-35 26 -63 31 -63 5 0 9 50 9 110 0 67 -4 110 -10 110 -6 0 -10 -29 -10 -67 0
-76 -8 -74 -38 7 -32 88 -42 76 -42 -49z"
                    />
                    <path
                      d="M1607 403 c-10 -9 -8 -186 2 -201 5 -8 23 -12 47 -10 l39 3 3 53 c3
51 3 52 -25 51 -15 0 -22 -3 -15 -6 7 -2 12 -22 12 -44 0 -32 -3 -39 -20 -39
-19 0 -20 7 -20 95 0 88 1 95 20 95 15 0 20 -7 20 -25 0 -16 6 -25 15 -25 10
0 15 10 15 30 0 29 -2 30 -43 30 -24 0 -47 -3 -50 -7z"
                    />
                    <path
                      d="M1800 300 l0 -110 35 0 c19 0 35 5 35 10 0 6 -11 10 -25 10 l-25 0 0
100 c0 60 -4 100 -10 100 -6 0 -10 -43 -10 -110z"
                    />
                    <path
                      d="M1908 403 c21 -4 22 -8 22 -109 0 -63 4 -104 10 -104 6 0 10 41 10
104 0 101 1 105 23 109 12 2 -3 4 -33 4 -30 0 -45 -2 -32 -4z"
                    />
                    <path
                      d="M2012 303 l3 -108 31 -3 c47 -5 55 13 52 119 l-3 94 -43 3 -43 3 3
-108z m56 88 c9 -5 12 -31 10 -92 -3 -78 -4 -84 -25 -87 -22 -3 -23 -1 -23 86
0 101 5 114 38 93z"
                    />
                  </g>
                </svg>
              </Link>
            </a>
            <button class="navbar-close ml-auto">
              <svg
                class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  {' '}
                  About Us
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  Projects
                </a>
              </li>

              <li class="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="mt-auto"></div>
        </nav>
      </div>
    </body>
  );
};

export default Navbar;
