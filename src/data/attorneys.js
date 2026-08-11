export const filterCategories = [
  { key: "all", label: "All Attorneys" },
  { key: "real-estate", label: "Real Estate" },
  { key: "corporate", label: "Corporate" },
  { key: "litigation", label: "Litigation" },
  { key: "banking", label: "Banking & Finance" },
];

export const attorneys = [
  {
    id: "christian",
    initials: "CC",
    name: "Christian Chijindu",
    credentials: "LLB (Hons) · BL · LLM",
    role: "Managing Partner",
    specialties: ["real-estate", "corporate", "banking"],
    specialtyLabels: ["Real Estate", "Banking & Finance", "Corporate"],
    gradient: "linear-gradient(135deg, #0D1F3C 0%, #162B52 50%, #1A3D2B 100%)",
    summary:
      "20+ years' practice in real estate law, banking transactions, and corporate advisory. Leads all major title investigations and high-value property acquisitions.",
    bio: [
      "Christian Chijindu is the founding and managing partner of The Chijindu Law Firm, one of the foremost real estate and commercial law practices in the South-South region of Nigeria. Called to the Nigerian Bar with honours, he holds a Master of Laws (LLM) with particular focus on banking and finance law, complementing over two decades of hands-on transactional practice.",
      "Christian is the principal attorney behind the firm's dedicated Due Diligence division, personally overseeing complex title investigations involving family land, government acquisition queries, and multi-layered ownership chains across all geopolitical zones of Nigeria.",
    ],
    practiceAreas: [
      "Real Estate Law — Acquisition, Perfection, Title Tracing",
      "Banking & Finance Law — Loan Agreements, Security Documentation",
      "Corporate & Commercial Law — Agreements, Joint Ventures",
      "Estate Planning — Wills, Probate, Succession",
      "Debt Recovery & Litigation",
    ],
    education: [
      "LLB (Hons) — University of Nigeria, Nsukka",
      "BL (Barrister at Law) — Nigerian Law School",
      "LLM — Banking & Finance Law",
      "Member, Nigerian Bar Association (NBA)",
    ],
  },
  {
    id: "adaeze",
    initials: "AO",
    name: "Adaeze Okafor",
    credentials: "LLB (Hons) · BL",
    role: "Senior Associate",
    specialties: ["real-estate", "litigation"],
    specialtyLabels: ["Real Estate", "Litigation", "Due Diligence"],
    gradient: "linear-gradient(135deg, #1A3D2B 0%, #0D1F3C 100%)",
    summary:
      "Specialist in property litigation and title disputes. Leads the firm's physical investigation unit for Delta, Anambra, and Rivers State transactions.",
    bio: [
      "Adaeze Okafor leads the firm's property investigation unit, coordinating on-the-ground due diligence in Delta, Anambra, Imo, and Rivers States. She has a distinguished track record in property litigation, having successfully recovered titles for clients in cases involving fraudulent double sales, undisclosed family encumbrances, and breach of contract.",
    ],
    practiceAreas: [
      "Real Estate Due Diligence & Title Verification",
      "Property Litigation & Land Dispute Resolution",
      "Conveyancing & Deed Drafting",
      "C of O Applications & Governor's Consent",
    ],
    education: [],
  },
  {
    id: "emeka",
    initials: "EI",
    name: "Emeka Ifeanyi",
    credentials: "LLB · BL · MBA",
    role: "Associate",
    specialties: ["corporate", "banking"],
    specialtyLabels: ["Corporate", "Banking & Finance", "Debt Recovery"],
    gradient: "linear-gradient(135deg, #091629 0%, #2E6B4A 100%)",
    summary:
      "Handles corporate mandates, loan security documentation, and commercial debt recovery. Graduate of Lagos Business School with dual legal-commercial expertise.",
    bio: [
      "Emeka Ifeanyi brings rare dual expertise in law and business administration to the firm's corporate and banking practice. He handles loan security documentation, commercial contract drafting, and coordinates the firm's debt recovery mandates, including pre-litigation demand letters and court-based recovery proceedings.",
    ],
    practiceAreas: [
      "Banking & Finance Law — Security Documents, Mortgages",
      "Corporate Law — Company Incorporation, Shareholder Agreements",
      "Commercial Debt Recovery",
      "Commercial Contract Drafting",
    ],
    education: [],
  },
];