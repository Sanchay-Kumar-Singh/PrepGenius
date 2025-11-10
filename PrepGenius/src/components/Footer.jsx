import React, { useState } from "react";
import toast from "react-hot-toast";
import logo from '../assets/image.png'
export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "17067777-eb0c-4d4b-8039-e3b51331296e", 
          subject: "Footer Newsletter Subscription 📩",
          email: footerEmail,
          message: `New footer subscriber: ${footerEmail}`
        })
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you for subscribing! 🎉");
        setFooterEmail("");
      } else {
        toast.error("Subscription failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <hr />
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
          <div className="md:max-w-96">
            <img src={logo} alt="" />
            <p className="mt-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text since the 1500s.
            </p>
          </div>

          <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
              <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">Programming</a></li>
                <li><a href="#">Placement Rounds</a></li>
                <li><a href="#">AI Services</a></li>
              </ul>
            </div>

            {/* Working Newsletter */}
            <div>
              <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
              <p className="text-sm">
                The latest news, articles, and resources, sent weekly.
              </p>

              <form onSubmit={handleFooterSubmit} className="flex items-center gap-2 pt-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-blue-600 w-24 h-9 text-white rounded disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2025 © <a href="#">PrepGenius</a>. All Right Reserved.
        </p>
      </footer>
    </>
  );
}
