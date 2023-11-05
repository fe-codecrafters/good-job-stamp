import SeolgiIcon from "@/icons/SeolgiIcon";
import UserIcon from "@/icons/UserIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 mb-5 w-full border-b border-primary-darkGray bg-primary-white">
      <div className="flex w-full justify-between px-[30px] py-[16px]">
        <Link href="/">
          <SeolgiIcon width={30} height={30} bgFill="white" />
        </Link>
        <div className="flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full bg-primary-lightGray pt-[6px]">
          <Link
            href="/my-page"
            className="group flex grow flex-col items-center justify-center"
          >
            <UserIcon width={18} height={18} />
          </Link>
        </div>
      </div>
      {/* 모바일에서는 display: hidden, 데스크탑에서는 display:flex */}
      <nav className="hidden h-[64px] w-full border-t border-primary-darkGray md:flex md:items-center md:justify-center md:gap-[80px]">
        <Link href="/">홈</Link>
        <Link href="/calendar">캘린더</Link>
        <Link href="/feed">피드</Link>
      </nav>
    </header>
  );
};
