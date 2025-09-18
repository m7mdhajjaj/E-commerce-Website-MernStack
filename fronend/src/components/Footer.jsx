import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">FOREVER<span className="text-purple-700">.</span></h2>
          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
            ever since the 1500s.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About us</a></li>
            <li><a href="/delivery" className="hover:text-black">Delivery</a></li>
            <li><a href="/privacy-policy" className="hover:text-black">Privacy policy</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-semibold mb-3">GET IN TOUCH</h3>
          <p className="text-gray-600">+1-212-456-7890</p>
          <p className="text-gray-600">contact@foreveryou.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        Copyright 2025 © forever.com - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
