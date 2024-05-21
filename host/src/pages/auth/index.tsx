
import Layout from "../../components/layout";
import { HandleAuthRoute } from "@dream.mf/oidc";

const AuthPage = () => {
  return (<Layout><HandleAuthRoute /></Layout>);
}

export default AuthPage;