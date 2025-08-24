import { NextPageContext } from 'next';
import { ErrorProps } from 'next/error';
import Layout from '../components/Layout';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface CustomErrorProps extends ErrorProps {
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

function Error({ statusCode, hasGetInitialPropsRun, err }: CustomErrorProps) {
  if (hasGetInitialPropsRun && err) {
    // getInitialProps is called, but there's an error
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-secondary-50">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-error-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-secondary-900 mb-2">
              Something went wrong
            </h1>
            <p className="text-secondary-600 mb-6">
              An unexpected error occurred. Please try again.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary inline-flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              <Link href="/" className="btn-secondary inline-flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">
            {statusCode
              ? `A ${statusCode} error occurred on server`
              : 'An error occurred on client'}
          </h1>
          <p className="text-secondary-600 mb-6">
            {statusCode === 404
              ? 'The page you are looking for does not exist.'
              : 'Something went wrong. Please try again.'}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary inline-flex items-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const errorInitialProps = await Error.getInitialProps({ res, err } as any);

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark as
  // failed so this is not retried.
  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }

  if (err) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default Error;
