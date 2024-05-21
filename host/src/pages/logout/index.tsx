import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useDreamAuth } from '@dream.mf/oidc';
import Layout from "../../components/layout";

const LogoutPage = () => {
    const auth = useDreamAuth();
    const router = useRouter();
    
    useEffect(() => {
        auth.signoutRedirect()
        .then(() => {
            router.push('/');
        })
        .catch((err) => { 
            console.warn(`Something happened with the logout func.`, err);
        });
    }, []);

    return (
        <Layout>
            <>Please wait while we log you out...</>
        </Layout>
    );
}

export default LogoutPage;