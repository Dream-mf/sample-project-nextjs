import React from "react";
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import { importRemote } from '@dream.mf/utilities';
import Layout from "../../components/layout";
import PageLoader from "../../components/page-loader";

interface SamplePageProps {
    remoteUrl: string;
}

type SampleRemoteType = React.Component & { id: string };

const SamplePage = ({ remoteUrl }: SamplePageProps) => {
    const router = useRouter();
	const { id } = router.query;
    const SampleRemote = dynamic(
        async () => {
            return importRemote({
                remoteUrl: remoteUrl,
                scope: 'remote_sample',
                module: 'Application',
                remoteUrlFallback: null
            }) as unknown as Promise<SampleRemoteType>;
        },
        { ssr: false, loading: () => <PageLoader label="Loading sample remote..." /> }
    );
    return (<Layout><SampleRemote id={id} /></Layout>);
}

export async function getServerSideProps() {
    return {
        props: {
            remoteUrl: 'http://localhost:3002/remote.js',
        } as SamplePageProps,
    };
}

export default SamplePage;