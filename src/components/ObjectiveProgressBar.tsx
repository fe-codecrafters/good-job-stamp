import SeolgiIcon from "@/icons/SeolgiIcon";

export const ObjectiveProgressBar = ({ count }) => {
  const countArr = Array(count).fill(0);
  return (
    <div className="mb-[84px] w-[340px] md:w-[586px] ">
      <div className="mr-[20px] flex items-center justify-end">
        <div className="mr-[14px] text-[14px] md:mr-[20px] md:text-[24px]">
          현재까지 {count} / 100 설기
        </div>
        <div className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]">
<<<<<<< Updated upstream
          <SeolgiIcon />
=======
          <SeolgiIcon width={"100%"} height={"100%"} />
>>>>>>> Stashed changes
        </div>
      </div>
      <div className="mt-[10px] flex h-[20px] w-[100%] overflow-hidden rounded-full bg-primary-gray md:h-[28px]">
        {countArr.map((el, idx) => (
          <div key={idx} className="h-[100%] w-[1%] bg-seolgi-pink"></div>
        ))}
      </div>
    </div>
  );
};
