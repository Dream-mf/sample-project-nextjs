import { DreamMFContextGuard } from "@dream.mf/oidc";
import Link from 'next/link';

export default function Page() {
    return (
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/">Root</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/sample/123456">Sample</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/home">Home</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/example">Example</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/notfound">404</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/profile">Profile (Auth)</Link>
            </li>
            <DreamMFContextGuard fallback={<></>}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" href="/logout">Logout</Link>
                </li>
            </DreamMFContextGuard>
        </ul>
    )
}
