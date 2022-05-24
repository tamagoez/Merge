import {
  AuthLogin,
  AuthSignup,
  signInWithDiscord,
  signInWithSlack
} from "../lib/Auth";
import Link from "next/link";
import {
  FaCircle,
  FaDiscord,
  FaFacebook,
  FaSlack,
  FaTwitter
} from "react-icons/fa";
import { useState } from "react";

export function LoginComponent({ signup }: { signup: boolean }) {
  function Submit(type: boolean, email: any, password: any) {
    if (type) {
      AuthSignup(email, password);
    } else {
      AuthLogin(email, password);
    }
  }
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const submitOnEnter = (event: { keyCode: number }) => {
    // Watch for enter key
    if (event.keyCode === 13) {
    }
  };
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => submitOnEnter(e)}
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            {!signup ? "Forgot password" : null}
          </a>
        </label>
      </div>
      <div className="form-control mt-3">
        <button
          className="btn btn-primary"
          onClick={() => Submit(signup, email, password)}
        >
          {signup ? "Signup" : "Login"}
        </button>
        <div className="py-1" />
        <Link href={signup ? "/login" : "/signup"} passHref>
          <button className="btn btn-primary-content">
            or {!signup ? "Signup" : "Login"}
          </button>
        </Link>
        <div className="py-1" />
        <div className="block md:hidden">
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              Use third-party OAuth
            </div>
            <div className="collapse-content grid gap-y-1">
              <button
                className="btn btn-primary-content w-full"
                onClick={() => signInWithDiscord()}
              >
                <FaDiscord />
                <span className="pl-2" />
                Discord
              </button>
              <button
                className="btn btn-primary-content w-full"
                onClick={() => signInWithSlack()}
              >
                <FaSlack />
                <span className="pl-2" />
                Slack
              </button>
              <div
                className="tooltip tooltip-top tooltip-warning"
                data-tip="Sorry, we are not supporting Twitter now"
              >
                <button className="btn w-full" disabled={true}>
                  <FaTwitter />
                  <span className="pl-2" />
                  Twitter
                </button>
              </div>
              <div
                className="tooltip tooltip-top tooltip-warning"
                data-tip="Sorry, we are not supporting Facebook now"
              >
                <button className="btn w-full" disabled={true}>
                  <FaFacebook />
                  <span className="pl-2" />
                  Facebook
                </button>
              </div>
              <div
                className="tooltip tooltip-top tooltip-warning"
                data-tip="Sorry, we are not supporting Zoom now"
              >
                <button className="btn w-full" disabled={true}>
                  <FaCircle />
                  <span className="pl-2" />
                  Zoom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="divider divider-horizontal" />
        </div>
      </div>
    </>
  );
}
