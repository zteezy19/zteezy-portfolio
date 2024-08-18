const Footer = () => {
  const latitude = "37.7749";
  const longitude = "-122.4194";

  const handleLocationClick = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <footer className="w-full text-[#ffc777] transition-colors duration-300 ease-in-out hover:bg-[#24263b] font-sans tracking-wide">
      <div className="max-w-screen-xl mx-auto px-4 py-4 text-center">
        <p className="text-base leading-relaxed">
          ©{new Date().getFullYear()} WAI YAN. ALL RIGHTS RESERVED.
        </p>
        <p
          className="mt-2 text-sm leading-relaxed cursor-crosshair hover:underline"
          onClick={handleLocationClick}
          title="Click to view on Google Maps"
        >
          {latitude}° N, {longitude}° W
        </p>
      </div>
    </footer>
  );
};

export default Footer;
