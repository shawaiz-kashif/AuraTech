"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide as soon as the page is interactive. Deliberately not tied to the
    // native `window.load` event: that also waits on third-party resources
    // (e.g. the Google Maps iframe in the contact section), and if one of
    // those is slow or blocked by an ad blocker/proxy, `load` never fires
    // and the preloader hangs forever.
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="onloadpage" id="page-load">
      <div className="loader-div">
        <div className="on-img">
          <Image
            src="/images/loader.gif"
            alt="Logo"
            className="img-fluid"
            width={80}
            height={80}
            unoptimized
            priority
          />
          <span>Loading Please Wait...</span>
        </div>
      </div>
    </div>
  );
}
