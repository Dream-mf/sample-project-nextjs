
import React from "react";
import PageLoader from "../../components/page-loader";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../components/layout";
import { DreamMFContextGuard } from "@dream.mf/oidc";
import dynamic from "next/dynamic";

interface ProfilePageProps {
    remoteUrl: string;
}

const ProfilePage = ({ remoteUrl }: ProfilePageProps) => {
    const ProfileRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                remoteUrl: remoteUrl,
                scope: 'remote_profile',
                module: 'Application',
                remoteUrlFallback: null
            })
        },
        { ssr: false, loading: () => <PageLoader label="Loading profile remote..." /> }
    );
    const ProfileHealthRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                remoteUrl: remoteUrl,
                scope: 'remote_profile',
                module: 'Health',
                remoteUrlFallback: null
            })
        },
        { ssr: false, loading: () => <></>}
    );
    return (
        <Layout>
            <DreamMFContextGuard fallback={<>Loading...</>}>
                <ProfileRemote />
                <h5>Package Details</h5>
                <ProfileHealthRemote />
            </DreamMFContextGuard>
        </Layout>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: 'http://localhost:3003/remote.js',
        } as ProfilePageProps,
    };
}

export default ProfilePage;
