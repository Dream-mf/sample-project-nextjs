import { useEffect } from "react";
import { DreamMFLogClient, DreamMFLogListener, logConfig } from '@dream.mf/logging';
import { BaseAuthConfig, DreamMFAuthConfig, DreamMFAuthProvider } from "@dream.mf/oidc";

import '../assets/styles/main.scss';

interface LayoutProps {
  children: React.ReactNode
};

const HostApp = ({ children }: LayoutProps) => {
  
  const config = () => {
		return {
			...logConfig,
			logGeneral: (detail: any) => { console.log('general', detail); },
			logPageView: (detail: any) => { console.log('pageView', detail); },
			logFetch: (detail: any) => { console.log('fetch', detail); },
			debug: true,
		};
	};

  const authConfig = () => {
    return {
      ...BaseAuthConfig,
      skipSigninCallback: false,
      authority: process.env.OAUTH_AUTHORITY || '' ,
      client_id: process.env.OAUTH_CLIENT_ID || '' ,
      client_secret: process.env.OAUTH_CLIENT_SECRET || '' ,
      redirect_uri: process.env.OAUTH_REDIRECT_URL || '' ,
      scope: process.env.OAUTH_SCOPE || '' ,
      post_logout_redirect_uri: process.env.OAUTH_POST_LOGOUT_URL || '' ,
      metadataUrl: process.env.OAUTH_WELL_KNOWN_URL || '' ,
      useFetchInterceptor: true,
    } as DreamMFAuthConfig;
  };

  useEffect(() => {
		DreamMFLogClient.logGeneral({ message: 'App Loaded' });
	}, [])

  return (
    <>
      <DreamMFLogListener config={config()} />
      <DreamMFAuthProvider config={authConfig()}>
      { children }
      </DreamMFAuthProvider>
    </>
  );
};

export default HostApp;