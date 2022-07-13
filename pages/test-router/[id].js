import Link from 'next/link';

export default function TestRouter() {
    return <h1>
        <Link href='/'>
         <a>Back to home</a>
        </Link>
    </h1>
}