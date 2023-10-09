"use client";
import SearchBox from "@/components/search/searchbox";
import Search from "@/components/search/search";
import Places from "@/components/places/places";

import Trending from "@/components/trending";

// Import Data
import { places } from "@/lib/data";
import Category from "@/components/category";
import { useState } from "react";

export default function Home() {
  return (
    <main className="">
      

      {/* Trending */}

      <div className="bg-[#faf1ed]  my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-medium">Trending Places</div>
            <div className="text-lg font-light">Highest ranking places</div>
          </div>

          <Trending />
        </div>
      </div>

      <div className="bg-white my-5">
        <div className="mx-auto max-w-7xl p-2">
          <div className="m-3">
            <div className="text-3xl font-medium">
              Top Things to Do by category
            </div>
            <div className="text-lg font-light">
              Customers Choice Best of the Best winners
            </div>
          </div>

          <Category />
        </div>
      </div>
    </main>
  );
}
