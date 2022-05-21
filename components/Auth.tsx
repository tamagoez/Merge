import { AuthLogin, signInWithDiscord } from "../lib/Auth";
import supabase from "../utils/supabaseClient";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export function LoginComponent() {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="password"
          className="input input-bordered"
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={() => AuthLogin()}>
          Login
        </button>
        <div className="py-1" />
        <Link href="/signup" passHref>
          <button className="btn btn-primary-content">or Signup</button>
        </Link>
        <div className="py-1" />
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Or use third-party OAuth!
          </div>
          <div className="collapse-content">
            <button
              className="btn btn-primary-content w-full"
              onClick={() => signInWithDiscord()}
            >
              <FaDiscord />
              <span className="pl-1" />
              Discord
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
