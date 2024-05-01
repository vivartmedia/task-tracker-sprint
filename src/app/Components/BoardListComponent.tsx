import React from "react";
import { useRouter } from "next/navigation";

export const BoardListComponent = (props: {
  nameBoard: string;
  bgColor: string;
}) => {
  let colorsArray = [
    ["#57CDFF", "#FF6E6E", "#D59FFF"],
    ["#D3FF57", "#FFC56E", "#57CDFF"],
    ["#D59FFF", "#57CDFF", "#513DCC"],
  ];

  const router = useRouter();

  const handlePage = () => {
    router.push("/Boardpage");
  };

  return (
    <div
      className={`hammer bg-[${props.bgColor}] rounded-md min-h-20 w-3/4 flex justify-between items-center px-5 cursor-pointer`}
      onClick={handlePage}
    >
      <h1 className="text-2xl">{props.nameBoard}</h1>
      <div className="flex gap-2">
        {props.bgColor == "#AEE6D9" ? (
          <>
            <div
              className={`bg-[${colorsArray[0][0]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[0][1]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[0][2]}] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        ) : props.bgColor == "#6FDFC4" ? (
          <>
            <div
              className={`bg-[${colorsArray[1][0]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[1][1]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[1][2]}] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        ) : (
          <>
            <div
              className={`bg-[${colorsArray[2][0]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[2][1]}] border border-black rounded-full h-8 w-8`}
            ></div>
            <div
              className={`bg-[${colorsArray[2][2]}] border border-black rounded-full h-8 w-8`}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
