const Footer = () => {
  return (
    <footer className="border-t py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-3">VenOra</h3>
          <p className="text-gray-600 text-sm">
            Make every moment memorable with our professional event
            management services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm list-none p-0 m-0">
            <li className="align-left">Home</li>
            <li>Packages</li>
            <li>Products & Gifts</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Wedding Events</li>
            <li>Birthday Parties</li>
            <li>Anniversary Celebrations</li>
            <li>Baby Shower Events</li>
            <li>Corporate Events</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📍 11-14 Gachibowli, Hyderabad, Telangana</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ Event@VenOra.com</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 Venora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
