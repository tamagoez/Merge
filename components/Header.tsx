import Link from "next/link";
import { ServeName } from "../lib/Constant";
export default function () {
  return (
    <>
      <div className="navbar bg-base-100 top-0 sticky z-50 rounded-b-[24px] backdrop-blur-sm shadow-sm">
        <div className="flex-1">
          <Link href="/" passHref>
            <a className="btn btn-ghost normal-case text-xl">{ServeName}</a>
          </Link>
        </div>
      </div>
    </>
  );
}
