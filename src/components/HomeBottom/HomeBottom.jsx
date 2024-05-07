import React from "react";
import "./HomeBottom.css";
import FeatureCard from "../FeatureCard/FeatureCard";

export default function HomeBottom() {
  return (
    <div className="HomeBottom">
      <h1 className="Home-head">Features</h1>
      <div className="HomeBottom-desc">Immerse yourself in endless gaming possibilities across all platforms as we not only have the best emulator out there.</div>

      <p>The Dolphin emulator is for the two latest Nintendo video game consoles GameCube & Wii. these two consoles are prey much the best out there; so clearly the PC emulator for these consoles is the best too.</p>

      <p>Dolphin enables PC(and android) gamers to experience and enjoy games for these 2 consoles along with the following features:</p>

      <div className="HomeBottom-features">
        <FeatureCard title="Compatibility with all PCs"/>
        <FeatureCard title="Now Free & open source"/>
        <FeatureCard title="Full 1080p HD video quality"/>
        <FeatureCard title="Available on all hardware"/>
        <FeatureCard title="Multiple tweaks enhancements"/>
        <FeatureCard title="Configurable controls"/>
        <FeatureCard title="Networked LAN multiplayer"/>
      </div>
      {/*  */}
    </div>
  );
}
