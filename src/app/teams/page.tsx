import React from "react";
import teamsdata from "../../../public/data/teams.json";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default function page() {
  return (
    <div className="bg-[rgb(167,37,61)]">
      <Navbar />
      <div>
        <div className="relative h-screen bg-[url(/team-dylan-gillis-unsplash.jpg)] bg-cover bg-center shadow-lg -mt-10 "></div>
        <div className="absolute top-[35%] right-[40%] m-auto p-5 border-b-4 border-[rgb(167,37,61)]">
          <div className="text-4xl font-extrabold  text-white">Our Team</div>
        </div>
      </div>
      <div className="w-[80%] h-max mx-auto py-10">
        {teamsdata.teams.map((item, index) => (
          <div
            key={"W" + index}
            className="min-h-max w-full flex flex-col justify-start py-5"
          >
            <div className="flex justify-between items-center">
              <div className="h-[200px] w-[200px]">
                <Image
                  src={"/pexels-" + item.name + ".jpg"}
                  alt="team image"
                  height={200}
                  width={200}
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
              <div className="w-[60%] flex flex-col items-center justify-start bg-yellow-600">
                <div className="font-bold">{item.name}</div>
                <div>{item.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
