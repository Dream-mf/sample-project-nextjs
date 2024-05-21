import Link from 'next/link';
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Home</li>
      </ol>
      <div className="jumbotron pt-4 pb-2">
        <h1 className="display-3 mb-4 mt-0">Welcome</h1>
        <div className="lead">
          This is an example application using vanilla react as a host, and create react application
          as remotes. These are dynamically resolved in each next page route. Remote urls are retrieved from
          an api using the service in this repo. You can see how here
          <br /><br />
          <a 
            href={`${process.env.CONFIG_API?.replace('/api/remotes', '')}api-docs/`} 
            target="_blank">
              Service Swagger
          </a>.
        </div>
        <div className="mt-4 mb-4">
          Check out remotes here: <br /><br />
          <div>• <Link href="/dashboard">Dashboard Remote App (React - Host Layout)</Link></div>
          <div>• <Link href="/sample/47">Sample Remote App (React - Host Layout)</Link></div>
          <div>• <Link href="/profile">Profile Remote App (Typescript - Remote Layout)</Link></div>
          <div>• <Link href="/example">Example App (Local Page)</Link></div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;