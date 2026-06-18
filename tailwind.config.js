/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAFA",
        blush: "#FFF0F5",
        rosemist: "#FFE4E1",
        hotrose: "#FF69B4",
        deeprose: "#FF1493",
        lavender: "#D9C6FF",
        fairy: "#FFF4B8",
        ink: "#3A2430"
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Nunito", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(255, 105, 180, 0.18)",
        sticker: "0 18px 36px rgba(58, 36, 48, 0.12)",
        glow: "0 0 42px rgba(255, 105, 180, 0.38)"
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 20% 20%, rgba(255, 240, 245, .95), transparent 28%), radial-gradient(circle at 80% 8%, rgba(217, 198, 255, .42), transparent 24%), linear-gradient(135deg, #FAFAFA 0%, #FFF0F5 48%, #FFE4E1 100%)"
      }
    }
  },
  plugins: []
};
