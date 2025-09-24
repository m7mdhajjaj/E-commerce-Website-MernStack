import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 items-start justify-center">
        <img
          className="w-full md:max-w-[450px] rounded"
          src={assets.contact_img}
          alt="Contact Forever"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 my-10">
          <p>
            If you have any questions, concerns, or feedback, we'd love to hear from you! Our dedicated customer support team is here to assist you.
          </p>
          <p>
            You can reach us through the following channels:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: support@forever.com</li>
            <li>Phone: 1-800-FOREVER</li>
            <li>Live Chat: Available on our website</li>
            <li>Social Media: Follow us on Facebook, Twitter, and Instagram</li>
          </ul>
          <p>
            We aim to respond to all inquiries within 24-48 hours. Your satisfaction is our top priority, and we're committed to providing you with the best possible service.
          </p>
          <p>
            Thank you for choosing Forever. We look forward to assisting you!
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact
