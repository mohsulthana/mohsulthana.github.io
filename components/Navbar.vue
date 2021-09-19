<template>
  <div>
    <nav class="bg-white">
      <div class="max-w-12xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <!-- Website Logo -->
              <a href="#" class="flex items-center py-4 px-2">
                <img src="/mohsulthana.png" alt="" class="h-20 w-20">
                <!-- <span class="font-semibold text-gray-500 text-lg"
                  >Navigation</span
                > -->
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
							<a href="" class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Blog</a>
						</div>
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x-3 py-4 px-2">
            <div
              class="
                relative
                flex
                mr-2
                transition
                duration-200
                ease-in
              "
            >
              <GithubSVG />
              <LinkedInSVG />
            </div>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="
                block
                text-sm
                px-2
                py-4
                text-white
                bg-green-500
                font-semibold
              "
              >Home</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="
                block
                text-sm
                px-2
                py-4
                hover:bg-green-500
                transition
                duration-300
              "
              >Services</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="
                block
                text-sm
                px-2
                py-4
                hover:bg-green-500
                transition
                duration-300
              "
              >About</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="
                block
                text-sm
                px-2
                py-4
                hover:bg-green-500
                transition
                duration-300
              "
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
      <script>
        const btn = document.querySelector('button.mobile-menu-button')
        const menu = document.querySelector('.mobile-menu')

        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden')
        })
      </script>
    </nav>
  </div>
</template>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
  transition: all 0.3s ease-in;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
  transition: all 0.3s ease-in;
}
</style>