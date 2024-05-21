import React from "react";
import dynamic from "next/dynamic";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../components/layout";
import PageLoader from "../../components/page-loader";

interface HomePageProps {
    remoteUrl: string;
}

const HomePage = ({ remoteUrl }: HomePageProps) => {
    const HomeRemote = dynamic(
        async () => {
            return importRemote<typeof React.Component>({
                remoteUrl: remoteUrl,
                scope: 'remote_home',
                module: 'Application',
                remoteUrlFallback: null
            })
        },
        { ssr: false, loading: () => <PageLoader label="Loading home remote..." /> }
    );
    return (<Layout><HomeRemote /></Layout>);
}

export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: 'http://localhost:3001/remote.js',
        } as HomePageProps,
    };
}

export default HomePage;