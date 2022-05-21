import { LoginComponent } from "../components/Auth";
import Header from "../components/Header";

export default function () {
  return (
    <>
      <Header />
      <div className="card flex-col flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <LoginComponent />
        </div>
      </div>
    </>
  );
}
