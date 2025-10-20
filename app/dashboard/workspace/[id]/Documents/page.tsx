import React from "react";
import DocumentUtilityBar from "./components/DocumentUtilityBar";

const DocumentsPage = () => {
  return (
    <div className="text-white min-h-screen">
      <DocumentUtilityBar />

      <div className="mt-8 max-w-3xl mx-auto rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Marketing Strategy Q4</h2>
          <button className="text-xs px-3 py-1 rounded-md border border-white/10">
            Source: Notion
          </button>
        </div>

        <div className="text-white/80 space-y-5 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-white mb-2">1. Overview</h3>
            <p>
              Q4 is focused on sustaining growth, increasing brand visibility,
              and converting awareness into long-term loyalty. The main
              priorities will be optimizing digital campaigns, strengthening
              partnerships, and preparing for the year-end sales push.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-white mb-2">2. Objectives</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Increase qualified leads by 20% compared to Q3.</li>
              <li>
                Improve customer retention with personalized engagement
                campaigns.
              </li>
              <li>Strengthen brand positioning in the target market.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
