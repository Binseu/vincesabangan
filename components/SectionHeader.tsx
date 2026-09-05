import React from "react";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  kicker,
  title,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
