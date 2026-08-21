"use client";

import { useState } from "react";

type TechItem = {
  name: string;
  icon: string;
  badge?: string;
};

const row1Items: TechItem[] = [
  { name: "Python", icon: "/tech-stack/python-svgrepo-com.svg" },
  { name: "C#", icon: "/tech-stack/csharp-svgrepo-com.svg" },
  { name: "PHP", icon: "/tech-stack/php-logo-svgrepo-com.svg" },
  { name: "Laravel", icon: "/tech-stack/laravel-svgrepo-com.svg" },
  { name: ".NET", icon: "/tech-stack/dotnet-svgrepo-com.svg" },
  { name: "MySQL", icon: "/tech-stack/mysql-logo-svgrepo-com.svg" }
];

const row2Items: TechItem[] = [
  { name: "Power Apps", icon: "/tech-stack/Powerapps-logo.svg", badge: "PA" },
  {
    name: "Power Automate",
    icon: "/tech-stack/PowerAutomate.svg",
    badge: "PA"
  },
  { name: "VB.NET", icon: "/tech-stack/vbnet-svgrepo-com.svg", badge: "VB" },
  { name: "XAMPP", icon: "/tech-stack/xampp-svgrepo-com.svg", badge: "XA" }
];

function TechIcon({ item }: { item: TechItem }) {
  const [failed, setFailed] = useState(false);

  if (failed || !item.icon) {
    return (
      <div className="tech-icon badge">
        {item.badge || item.name.substring(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="tech-icon">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.icon} alt={item.name} onError={() => setFailed(true)} />
    </div>
  );
}

function MarqueeRow({
  items,
  direction
}: {
  items: TechItem[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className={`marquee-row ${direction}`}>
      {doubled.map((item, i) => (
        <div className="tech-item" key={`${item.name}-${i}`}>
          <TechIcon item={item} />
          <div className="tech-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="stack-section reveal">
      <div className="stack-header">
        <div className="stack-eyebrow">Tech Stack</div>
        <h2 className="stack-heading">
          Tools I <em>build</em> with
        </h2>
      </div>
      <div className="marquee-wrap">
        <MarqueeRow items={row1Items} direction="left" />
        <MarqueeRow items={row2Items} direction="right" />
      </div>
    </section>
  );
}
