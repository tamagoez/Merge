import { LoginComponent } from "../components/Auth";
import Header from "../components/Header";

export default function () {
  return (
    <>
      <Header />
      <div className="hero min-h-screen w-full">
        <div className="hero-content">
          <div className="card flex-col flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <LoginComponent signup={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
