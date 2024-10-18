import * as React from 'react';
import { Link } from 'gatsby';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    const closeButtons = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelector('.navbar-backdrop');

    // Toggle the menu when the burger is clicked
    burger.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      backdrop.classList.toggle('hidden');
    });

    // Loop through close buttons and hide the menu and backdrop
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', () => {
        menu.classList.add('hidden'); // Ensure the menu is hidden
        backdrop.classList.add('hidden'); // Ensure the backdrop is hidden
      });
    });

    return () => {
      burger.removeEventListener('click', () => {
        menu.classList.toggle('hidden');
        backdrop.classList.toggle('hidden');
      });

      closeButtons.forEach((closeButton) => {
        closeButton.removeEventListener('click', () => {
          menu.classList.add('hidden');
          backdrop.classList.add('hidden');
        });
      });
    };
  }, []);

  return (
    <body>
      <nav class="relative px-4 py-4 flex justify-between items-center bg-white z-50">
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
-5 25 -5 55 0 53 0 54 33 59 17 3 59 10 91 16 33 5 62 10 66 10 3 0 37 -40 74
-89 l69 -90 3 -100 c2 -56 1 -101 -3 -101 -3 0 -31 14 -63 32 -71 39 -87 34
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
                  d="M750 680 l0 -120 38 0 c21 0 43 5 50 12 13 13 17 90 5 102 -5 4 -6
34 -5 67 l4 59 -46 0 -46 0 0 -120z m68 63 c-2 -31 -7 -39 -25 -41 -21 -3 -23
1 -23 37 0 37 2 41 26 41 23 0 25 -3 22 -37z m0 -116 c3 -46 2 -48 -20 -45
-20 3 -23 10 -26 51 -3 46 -2 48 20 45 20 -3 23 -10 26 -51z"
                />
                <path
                  d="M906 702 c-9 -54 -19 -108 -23 -120 -3 -13 -1 -22 6 -22 6 0 13 11
17 25 8 34 51 35 56 3 2 -13 8 -21 13 -18 6 3 10 7 9 10 -1 3 -10 53 -20 113
-10 60 -23 107 -29 107 -7 0 -19 -43 -29 -98z m43 -44 c1 -19 -4 -28 -14 -28
-17 0 -19 27 -8 81 l7 34 7 -30 c4 -16 7 -42 8 -57z"
                />
                <path
                  d="M1027 793 c-19 -18 -5 -71 28 -110 44 -52 49 -103 10 -103 -21 0 -25
5 -25 30 0 17 -4 30 -10 30 -5 0 -10 -16 -10 -35 0 -28 4 -36 24 -41 47 -11
61 -2 64 44 3 37 -2 48 -32 84 -44 50 -48 88 -11 88 20 0 25 -5 25 -25 0 -14
5 -25 10 -25 6 0 10 16 10 35 0 34 -1 35 -38 35 -21 0 -42 -3 -45 -7z"
                />
                <path
                  d="M1152 685 c4 -154 22 -156 26 -2 2 101 0 117 -13 117 -13 0 -15 -16
-13 -115z"
                />
                <path
                  d="M1226 785 c-3 -9 -6 -58 -6 -109 0 -98 7 -116 46 -116 42 0 54 11 54
46 0 41 -17 46 -22 7 -2 -20 -9 -29 -25 -31 -23 -3 -23 -1 -23 97 l0 101 25 0
c20 0 25 -5 25 -25 0 -14 5 -25 11 -25 6 0 9 14 7 33 -3 30 -6 32 -44 35 -31
2 -43 -1 -48 -13z"
                />
                <path
                  d="M750 315 l0 -115 44 0 c31 0 46 5 50 16 11 28 6 54 -9 54 -9 0 -15
-9 -15 -25 0 -20 -5 -25 -25 -25 -25 0 -25 0 -25 95 0 95 0 95 25 95 20 0 25
-5 25 -25 0 -16 6 -25 15 -25 15 0 20 26 9 54 -4 11 -19 16 -50 16 l-44 0 0
-115z"
                />
                <path
                  d="M905 328 c-10 -57 -20 -109 -23 -117 -3 -9 0 -12 9 -9 8 2 15 14 17
26 5 31 49 31 54 0 2 -12 8 -23 14 -25 8 -3 6 28 -7 94 -10 54 -18 106 -19
116 0 9 -6 17 -13 17 -10 0 -20 -32 -32 -102z m44 -30 c1 -19 -4 -28 -14 -28
-16 0 -19 20 -8 71 7 33 7 33 14 9 4 -14 7 -37 8 -52z"
                />
                <path
                  d="M1020 315 l0 -115 45 0 45 0 0 115 c0 70 -4 115 -10 115 -6 0 -10
-42 -10 -105 l0 -105 -25 0 -25 0 0 105 c0 63 -4 105 -10 105 -6 0 -10 -45
-10 -115z"
                />
                <path
                  d="M1160 315 l0 -115 41 0 c24 0 38 4 34 10 -3 5 -17 10 -31 10 -24 0
-24 0 -24 105 0 63 -4 105 -10 105 -6 0 -10 -45 -10 -115z"
                />
                <path
                  d="M1270 315 c0 -66 4 -115 9 -115 6 0 11 24 13 53 l3 52 28 -52 c37
-72 52 -67 20 7 l-26 59 22 50 c23 55 25 61 13 61 -4 0 -19 -21 -32 -47 l-25
-48 -3 48 c-2 26 -7 47 -13 47 -5 0 -9 -49 -9 -115z"
                />
                <path
                  d="M1400 315 c0 -70 4 -115 10 -115 6 0 10 45 10 115 0 70 -4 115 -10
115 -6 0 -10 -45 -10 -115z"
                />
                <path
                  d="M1470 315 c0 -130 17 -159 22 -38 l3 77 26 -74 c39 -110 49 -103 49
34 0 96 -3 116 -15 116 -12 0 -15 -15 -16 -72 l0 -73 -26 73 c-15 39 -30 72
-35 72 -4 0 -8 -52 -8 -115z"
                />
                <path
                  d="M1610 315 l0 -115 45 0 45 0 0 60 c0 53 -2 60 -20 60 -11 0 -20 -4
-20 -10 0 -5 5 -10 10 -10 6 0 10 -18 10 -40 0 -36 -2 -40 -25 -40 -25 0 -25
0 -25 95 0 95 0 95 25 95 20 0 25 -5 25 -25 0 -14 5 -25 10 -25 6 0 10 16 10
35 0 35 0 35 -45 35 l-45 0 0 -115z"
                />
                <path
                  d="M1820 315 c0 -70 4 -115 10 -115 6 0 10 45 10 115 0 70 -4 115 -10
115 -6 0 -10 -45 -10 -115z"
                />
                <path
                  d="M1890 315 c0 -70 4 -115 10 -115 6 0 10 33 11 78 l0 77 28 -74 c41
-111 51 -104 51 33 0 95 -3 116 -15 116 -11 0 -15 -17 -17 -72 l-3 -73 -25 73
c-13 39 -28 72 -32 72 -5 0 -8 -52 -8 -115z"
                />
                <path
                  d="M2030 315 l0 -115 45 0 c45 0 45 0 45 35 0 19 -4 35 -10 35 -5 0 -10
-11 -10 -25 0 -20 -5 -25 -25 -25 -25 0 -25 0 -25 95 0 95 0 95 25 95 20 0 25
-5 25 -25 0 -14 5 -25 10 -25 6 0 10 16 10 35 0 35 0 35 -45 35 l-45 0 0 -115z"
                />
                <path
                  d="M2160 210 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"
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
            <a class="text-sm text-gray-400 hover:text-gray-500">
              <Link to="/about">About Us</Link>
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
            <a class="text-sm text-gray-400 hover:text-gray-500">
              <Link to="/blog" unselectable="on">
                Projects
              </Link>
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
            <a class="text-sm text-gray-400 hover:text-gray-500">Pricing</a>
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
            <a class="text-sm text-gray-400 hover:text-gray-500">Contact</a>
          </li>
        </ul>
      </nav>
      <div class="navbar-menu relative z-50 hidden">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="text-3xl font-bold leading-none">
              <Link to="/">
                <svg
                  class="h-13"
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
-5 25 -5 55 0 53 0 54 33 59 17 3 59 10 91 16 33 5 62 10 66 10 3 0 37 -40 74
-89 l69 -90 3 -100 c2 -56 1 -101 -3 -101 -3 0 -31 14 -63 32 -71 39 -87 34
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
                      d="M750 680 l0 -120 38 0 c21 0 43 5 50 12 13 13 17 90 5 102 -5 4 -6
34 -5 67 l4 59 -46 0 -46 0 0 -120z m68 63 c-2 -31 -7 -39 -25 -41 -21 -3 -23
1 -23 37 0 37 2 41 26 41 23 0 25 -3 22 -37z m0 -116 c3 -46 2 -48 -20 -45
-20 3 -23 10 -26 51 -3 46 -2 48 20 45 20 -3 23 -10 26 -51z"
                    />
                    <path
                      d="M906 702 c-9 -54 -19 -108 -23 -120 -3 -13 -1 -22 6 -22 6 0 13 11
17 25 8 34 51 35 56 3 2 -13 8 -21 13 -18 6 3 10 7 9 10 -1 3 -10 53 -20 113
-10 60 -23 107 -29 107 -7 0 -19 -43 -29 -98z m43 -44 c1 -19 -4 -28 -14 -28
-17 0 -19 27 -8 81 l7 34 7 -30 c4 -16 7 -42 8 -57z"
                    />
                    <path
                      d="M1027 793 c-19 -18 -5 -71 28 -110 44 -52 49 -103 10 -103 -21 0 -25
5 -25 30 0 17 -4 30 -10 30 -5 0 -10 -16 -10 -35 0 -28 4 -36 24 -41 47 -11
61 -2 64 44 3 37 -2 48 -32 84 -44 50 -48 88 -11 88 20 0 25 -5 25 -25 0 -14
5 -25 10 -25 6 0 10 16 10 35 0 34 -1 35 -38 35 -21 0 -42 -3 -45 -7z"
                    />
                    <path
                      d="M1152 685 c4 -154 22 -156 26 -2 2 101 0 117 -13 117 -13 0 -15 -16
-13 -115z"
                    />
                    <path
                      d="M1226 785 c-3 -9 -6 -58 -6 -109 0 -98 7 -116 46 -116 42 0 54 11 54
46 0 41 -17 46 -22 7 -2 -20 -9 -29 -25 -31 -23 -3 -23 -1 -23 97 l0 101 25 0
c20 0 25 -5 25 -25 0 -14 5 -25 11 -25 6 0 9 14 7 33 -3 30 -6 32 -44 35 -31
2 -43 -1 -48 -13z"
                    />
                    <path
                      d="M750 315 l0 -115 44 0 c31 0 46 5 50 16 11 28 6 54 -9 54 -9 0 -15
-9 -15 -25 0 -20 -5 -25 -25 -25 -25 0 -25 0 -25 95 0 95 0 95 25 95 20 0 25
-5 25 -25 0 -16 6 -25 15 -25 15 0 20 26 9 54 -4 11 -19 16 -50 16 l-44 0 0
-115z"
                    />
                    <path
                      d="M905 328 c-10 -57 -20 -109 -23 -117 -3 -9 0 -12 9 -9 8 2 15 14 17
26 5 31 49 31 54 0 2 -12 8 -23 14 -25 8 -3 6 28 -7 94 -10 54 -18 106 -19
116 0 9 -6 17 -13 17 -10 0 -20 -32 -32 -102z m44 -30 c1 -19 -4 -28 -14 -28
-16 0 -19 20 -8 71 7 33 7 33 14 9 4 -14 7 -37 8 -52z"
                    />
                    <path
                      d="M1020 315 l0 -115 45 0 45 0 0 115 c0 70 -4 115 -10 115 -6 0 -10
-42 -10 -105 l0 -105 -25 0 -25 0 0 105 c0 63 -4 105 -10 105 -6 0 -10 -45
-10 -115z"
                    />
                    <path
                      d="M1160 315 l0 -115 41 0 c24 0 38 4 34 10 -3 5 -17 10 -31 10 -24 0
-24 0 -24 105 0 63 -4 105 -10 105 -6 0 -10 -45 -10 -115z"
                    />
                    <path
                      d="M1270 315 c0 -66 4 -115 9 -115 6 0 11 24 13 53 l3 52 28 -52 c37
-72 52 -67 20 7 l-26 59 22 50 c23 55 25 61 13 61 -4 0 -19 -21 -32 -47 l-25
-48 -3 48 c-2 26 -7 47 -13 47 -5 0 -9 -49 -9 -115z"
                    />
                    <path
                      d="M1400 315 c0 -70 4 -115 10 -115 6 0 10 45 10 115 0 70 -4 115 -10
115 -6 0 -10 -45 -10 -115z"
                    />
                    <path
                      d="M1470 315 c0 -130 17 -159 22 -38 l3 77 26 -74 c39 -110 49 -103 49
34 0 96 -3 116 -15 116 -12 0 -15 -15 -16 -72 l0 -73 -26 73 c-15 39 -30 72
-35 72 -4 0 -8 -52 -8 -115z"
                    />
                    <path
                      d="M1610 315 l0 -115 45 0 45 0 0 60 c0 53 -2 60 -20 60 -11 0 -20 -4
-20 -10 0 -5 5 -10 10 -10 6 0 10 -18 10 -40 0 -36 -2 -40 -25 -40 -25 0 -25
0 -25 95 0 95 0 95 25 95 20 0 25 -5 25 -25 0 -14 5 -25 10 -25 6 0 10 16 10
35 0 35 0 35 -45 35 l-45 0 0 -115z"
                    />
                    <path
                      d="M1820 315 c0 -70 4 -115 10 -115 6 0 10 45 10 115 0 70 -4 115 -10
115 -6 0 -10 -45 -10 -115z"
                    />
                    <path
                      d="M1890 315 c0 -70 4 -115 10 -115 6 0 10 33 11 78 l0 77 28 -74 c41
-111 51 -104 51 33 0 95 -3 116 -15 116 -11 0 -15 -17 -17 -72 l-3 -73 -25 73
c-13 39 -28 72 -32 72 -5 0 -8 -52 -8 -115z"
                    />
                    <path
                      d="M2030 315 l0 -115 45 0 c45 0 45 0 45 35 0 19 -4 35 -10 35 -5 0 -10
-11 -10 -25 0 -20 -5 -25 -25 -25 -25 0 -25 0 -25 95 0 95 0 95 25 95 20 0 25
-5 25 -25 0 -14 5 -25 10 -25 6 0 10 16 10 35 0 35 0 35 -45 35 l-45 0 0 -115z"
                    />
                    <path
                      d="M2160 210 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
-15 -4 -15 -10z"
                    />
                  </g>
                </svg>
              </Link>
            </a>
            <button class="navbar-close">
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
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  {' '}
                  <Link to="/about">About Us</Link>
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  <Link to="/blog">Projects</Link>
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  Pricing
                </a>
              </li>
              <li class="mb-1">
                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                  Contact
                </a>
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
