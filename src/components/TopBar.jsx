import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";
import { contact } from "../data/navigation";
const TopBar = () => {
  return (
      <>
       <div className="bg-brand-topbar text-white/65 text-[0.72rem] tracking-wide">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-6 py-2">
        <span className="flex items-center gap-1.5 min-w-0">
          <MapPin size={13} className="shrink-0 text-brand-gold" />
          <span className="text-[0.68rem] sm:text-[0.72rem]">
            {contact.address}
            <span className="hidden lg:inline">
              {" "}
              &nbsp;|&nbsp; {contact.alsoServing}
            </span>
          </span>
        </span>

        <span className="flex items-center gap-4 shrink-0">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 text-white/65 hover:text-brand-gold transition-colors no-underline"
          >
            <Phone size={12} />
            {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hidden sm:flex items-center gap-1.5 text-white/65 hover:text-brand-gold transition-colors no-underline"
          >
            <Mail size={12} />
            {contact.email}
          </a>
        </span>
      </div>
    </div>
      </>
  )
}

export default TopBar