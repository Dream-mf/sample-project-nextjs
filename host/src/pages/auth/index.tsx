
import { useRouter } from 'next/router';
import Layout from "../../components/layout";
import { HandleAuthRoute } from "@dream.mf/oidc";

const AuthPage = () => {
  const router = useRouter();
  return (<Layout><HandleAuthRoute navigate={router.push} /></Layout>);
}

export default AuthPage;