"use client";

import { useState } from "react";

export default function UnifiedPaymentHub() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Configure your 4 organizations here
  const organizations = [
    {
      id: "org1",
      name: "Commonwealth Amhara Association",
      subtitle: "November 28, 29 2026 Fundraisers",
      zelleEmail: "commonwealthamhara.dmv@gmail.com",
      cashappUrl: "https://cash.app/$CommonwealthAmhara",
      cashappTag: "$CommonwealthAmhara",
      venmoUrl: "https://venmo.com/CommonwealthAmhara",
      venmoHandle: "@CommonwealthAmhara",
      websiteUrl: "https://commonwealthamhara.org/events",
      websiteButtonText: "Donate",
      accent: "border-blue-200 bg-blue-50/30 text-blue-900"
    },
    // {
    //   id: "org2",
    //   name: "Federation of Amhara in North America",
    //   subtitle: "November 28, 29 2026 Fundraisers",
    //   zelleEmail: "fanafinance21@gmail.com",
    //   zellePhone: "971-401-2577",
    //   cashappUrl: "https://cash.app/$fanalifeamhara",
    //   cashappTag: "$fanalifeamhara",
    //   accent: "border-purple-200 bg-purple-50/30 text-purple-900"
    // },
    // {
    //   id: "org3",
    //   name: "Amhara Association of Seattle",
    //   subtitle: "November 28, 29 2026 Fundraisers",
    //   // zelleEmail: "seattle.amhara@gmail.com", // Add email here if they have one
    //   zellePhone: "206-475-5383",            // And phone here
    //   banktransfer: "Chase Bank\nRouting: 325070760\nAccount: 919663523",
    //   accent: "border-emerald-200 bg-emerald-50/30 text-emerald-900"
    // },
    // {
    //   id: "org4",
    //   name: "Amhara Association of Georgia",
    //   subtitle: "November 28, 29 2026 Fundraisers",
    //   zelleEmail: "Amharageorgia@gmail.com",
      // cashappUrl: "https://cash.app/$OrgFourCashTag",
      // cashappTag: "$OrgFourCashTag",
      // accent: "border-amber-200 bg-amber-50/30 text-amber-900"
    // }
  ];

  const handleCopyText = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(identifier);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="text-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
           
          </h1>
          {/* Subheader or additional text can go here if needed */}
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">Commonwealth Amhara </h1>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2"> Payment QR Hub</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Select  below to securely contribute via Zelle, CashApp, Venmo, Bank Transfer, or Online Checkout.
          </p>
        </header>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <section 
              key={org.id} 
              className={`rounded-3xl p-6 border shadow-sm bg-white flex flex-col justify-between ${org.accent}`}
            >
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold">{org.name}</h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{org.subtitle}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  
                  {/* Donate Website Link */}
                  {org.websiteUrl && (
                    <div className="bg-blue-600 p-3 rounded-xl shadow-sm flex items-center justify-between text-white">
                      <div>
                        <span className="font-bold block text-xs uppercase tracking-wide opacity-90">Online Payment Portal</span>
                        <span className="text-xs sm:text-sm font-mono opacity-95">commonwealthamhara.org/events</span>
                      </div>
                      <a 
                        href={org.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-blue-900 font-bold px-4 py-2 rounded-lg text-xs transition shadow-sm whitespace-nowrap ml-2 hover:bg-blue-50"
                      >
                        {org.websiteButtonText || "Donate"} ↗
                      </a>
                    </div>
                  )}

                  {/* Zelle Email */}
                  {org.zelleEmail && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold block text-xs text-purple-700 uppercase tracking-wide">Zelle (Email)</span>
                        <span className="font-mono text-xs sm:text-sm text-slate-700">{org.zelleEmail}</span>
                      </div>
                      <button 
                        onClick={() => handleCopyText(org.zelleEmail!, `${org.id}-zelle-email`)}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-sm whitespace-nowrap ml-2"
                      >
                        {copiedText === `${org.id}-zelle-email` ? "Copied! ✅" : "Copy"}
                      </button>
                    </div>
                  )}

                  {/* Zelle Phone (Optional) */}
                  {/* {org.zellePhone && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold block text-xs text-purple-700 uppercase tracking-wide">Zelle (Phone)</span>
                        <span className="font-mono text-xs sm:text-sm text-slate-700">{org.zellePhone}</span>
                      </div>
                      <button 
                        onClick={() => handleCopyText(org.zellePhone!, `${org.id}-zelle-phone`)}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-sm whitespace-nowrap ml-2"
                      >
                        {copiedText === `${org.id}-zelle-phone` ? "Copied! ✅" : "Copy"}
                      </button>
                    </div>
                  )} */}

                  {/* CashApp (Direct Link) */}
                  {org.cashappUrl && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold block text-xs text-green-700 uppercase tracking-wide">CashApp</span>
                        <span className="font-mono text-xs sm:text-sm text-slate-700">{org.cashappTag}</span>
                      </div>
                      <a 
                        href={org.cashappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-sm text-center whitespace-nowrap ml-2"
                      >
                        Open App ↗
                      </a>
                    </div>
                  )}

                  {/* Venmo (Direct Link) */}
                  {org.venmoUrl && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold block text-xs text-blue-600 uppercase tracking-wide">Venmo</span>
                        <span className="font-mono text-xs sm:text-sm text-slate-700">{org.venmoHandle}</span>
                      </div>
                      <a 
                        href={org.venmoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-sm text-center whitespace-nowrap ml-2"
                      >
                        Open App ↗
                      </a>
                    </div>
                  )}

                  {/* Bank Transfer (Routing & Account) */}
                  {/* {org.banktransfer && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold block text-xs text-emerald-700 uppercase tracking-wide">Direct Bank Transfer</span>
                        <span className="font-mono text-xs text-slate-700 whitespace-pre-line leading-relaxed">{org.banktransfer}</span>
                      </div>
                      <button 
                        onClick={() => handleCopyText(org.banktransfer!, `${org.id}-bank`)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-sm whitespace-nowrap ml-2 self-start"
                      >
                        {copiedText === `${org.id}-bank` ? "Copied! ✅" : "Copy Info"}
                      </button>
                    </div>
                  )} */}

                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-center">
                <span className="text-[11px] text-slate-500 italic">
                  Please include your name and purpose in the payment memo.
                </span>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500 pb-8">
          Commonwealth Amhara Association Payment Portal • Secure Direct Links
        </footer>

      </div>
    </main>
  );
}
