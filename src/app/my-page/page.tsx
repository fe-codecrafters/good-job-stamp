const DEV = process.env.NODE_ENV === "development";

export default function MyPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-md flex-col items-center justify-between">
      {DEV ? <h2>my-page</h2> : null}
      <h2>목표를 정해주세요</h2>
    </div>
  );
}
