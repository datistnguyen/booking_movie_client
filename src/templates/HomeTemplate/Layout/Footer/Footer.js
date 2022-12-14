import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <footer
      style={{marginTop: 20}}
      id="dark-theme"
      className="bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12 footer-general "
    >
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-700" style={{fontSize: 20, fontWeight: 600}}>Movies</label>
          <ul className="flex flex-col gap-6 ">
            <li>Movie</li>
            <li>Videos</li>
            <li>English Movies</li>
            <li>Tailor</li>
            <li>Upcoming Movies</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400" style={{fontSize: 20, fontWeight: 600}}>Information</label>
          <ul className="flex flex-col gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Tv Series</li>
            <li>Blogs</li>
            <li>Login</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400" style={{fontSize: 20, fontWeight: 600}}>Locations</label>
          <ul className="flex flex-col gap-6 ">
            <li>Asia</li>
            <li>France</li>
            <li>Taiwan</li>
            <li>United States</li>
            <li>Korea</li>
            <li>United Kingdom</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-400" style={{fontSize: 20, fontWeight: 600}}>Help</label>
          <ul className="flex flex-col gap-6 ">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-gray-300">
            Enter your email and receive the latest news, updates and special offers from us.
          </p>
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
          <input
            className="px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
            placeholder="Enter your email"
            type="text"
          />
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between ">
        <div>&#169; 2022 xem phim official</div>
        <div className="flex gap-4 p-2 rounded-md social-wrapper">
          <img
            onclick="relocate('facebook.com')"
            src="https://img.icons8.com/material/24/000000/twitter--v2.png"
            alt="Facebook"
          />
          <img
            onclick="relocate('instagram.com')"
            src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"
            alt="Instagram"
          />
          <img
            onclick="relocate('twitter.com')"
            src="https://img.icons8.com/material/24/000000/twitter--v2.png"
            alt="twitter "
          />
          <img
            onclick="relocate('telegram.org')"
            src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png"
            alt="telegram "
          />
          <img
            onclick="relocate('discird.com')"
            src="https://img.icons8.com/material/24/000000/discord-logo--v1.png"
            alt="discord"
          />
        </div>
      </div>
    </footer>
  );
}
