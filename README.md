# Create Vite:
* yarn create vite .
* yarn create vite . --template vue    # with vue
* yarn create vite . --template vue-ts    # with vue and typescript 

# Run:
* yarn
* yarn dev


# Add Router:
* yarn add -D vue-router
* mkdir plugins / cd _
* touch router.js

# Add Tailwind CSS:
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
  ## Create tailwind.css in the src/assets directory:
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;
  ## Paste in main.js:
    - import './assets/tailwind.css'
  ## Modify content in tailwind.config.js:
    - content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",]



Note: URl ( https://www.youtube.com/watch?v=PciUq6HcUNc )
