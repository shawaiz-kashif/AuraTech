"use client";

import { useEffect, useState } from "react";

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
      <div className="aura-preloader">
        <div className="stage">
          <div className="rig">
            <div className="layer layer-ink"></div>
            <div className="layer layer-orange"></div>
            <div className="sheen"></div>
          </div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
