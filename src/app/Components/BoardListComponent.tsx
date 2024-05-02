import React from "react";
import { useRouter } from "next/navigation";

export const BoardListComponent = (props: {
  nameBoard: string;
  backgroundColorDiv: string;
}) => {
 
  const router = useRouter();

  const handlePage = () => {
    router.push("/Boardpage");
  };

  return (
    <div
      className={`hammer bg-[${props.backgroundColorDiv}] rounded-md min-h-20 w-3/4 flex justify-between items-center px-5 cursor-pointer`}
      onClick={handlePage}
    >
      <h1 className="text-2xl">{props.nameBoard}</h1>
      <div className="flex gap-2">
        {props.backgroundColorDiv == "#AEE6D9" ? (
          <>
            <div
              className={`bg-[#57CDFF] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#FF6E6E] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#D59FFF] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        ) : props.backgroundColorDiv == "#6FDFC4" ? (
          <>
            <div
              className={`bg-[#D3FF57] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#FFC56E] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#57CDFF] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        ) : (
          <>
            <div
              className={`bg-[#D59FFF] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#57CDFF] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[#513DCC] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
