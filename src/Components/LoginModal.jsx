import one from "../assets/endurance.webp";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  px-2 md:px-4"
      style={{ minHeight: "100vh" }}  // Ensures full viewport height
    >
      <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row shadow-lg">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900 z-10"
          aria-label="Close login form"
        >
          &times;
        </button>

        {/* 🖼️ Left side image */}
        <div className="hidden md:block md:w-1/2 h-[500px]">
          <img src={one} alt="Login" className="h-full w-full object-cover" />
        </div>

        {/* ✅ Right side form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            SIGN-IN
          </h2>

          <form className="space-y-4">
            {/* Email */}
            <input
              type="text"
              placeholder="EMAIL / MOBILE NUMBER"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-600 focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-yellow-600 focus:outline-none"
            />

            {/* Forgot */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-yellow-800 hover:underline"
              >
                FORGOT PASSWORD ?
              </a>
            </div>

            {/* reCAPTCHA placeholder */}
            <div className="border border-gray-300 p-3 rounded-md flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">I'm not a robot</span>
              </label>
              <div className="text-xs text-gray-400">reCAPTCHA</div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-yellow-800 hover:bg-yellow-900 text-white py-2 rounded-md"
              >
                CONTINUE
              </button>
              <button
                type="button"
                className="flex-1 border border-yellow-800 text-yellow-800 py-2 rounded-md hover:bg-yellow-50"
              >
                AS A GUEST
              </button>
            </div>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-center mt-6 text-gray-700">
            DON’T HAVE AN ACCOUNT?{" "}
            <a href="#" className="font-bold text-yellow-900 hover:underline">
              SIGN-UP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
