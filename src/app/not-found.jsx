import React from "react";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <main className="flex justify-center items-center h-screen p-3">
        <div className="text-center">
          <svg
            width={200}
            height={200}
            viewBox="0 0 309 124"
            fill="none"
            alt="404"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          > 
            <path
              d="M0.25 79.84L41.05 2.49H66.55L24.73 79.84H0.25ZM0.25 93.44V79.84L8.75 73.21H94.43V93.44H0.25ZM56.69 122V45.84H79.47V122H56.69ZM154.538 123.7C145.131 123.7 136.631 121.15 129.038 116.05C121.444 110.95 115.381 103.753 110.848 94.46C106.428 85.1667 104.218 74.3433 104.218 61.99C104.218 49.6367 106.428 38.87 110.848 29.69C115.268 20.51 121.218 13.37 128.698 8.26999C136.291 3.16999 144.734 0.619992 154.028 0.619992C163.548 0.619992 172.048 3.16999 179.528 8.26999C187.121 13.37 193.128 20.5667 197.548 29.86C201.968 39.04 204.178 49.8633 204.178 62.33C204.178 74.6833 201.968 85.5067 197.548 94.8C193.128 103.98 187.178 111.12 179.698 116.22C172.218 121.207 163.831 123.7 154.538 123.7ZM154.198 102.79C159.638 102.79 164.341 101.26 168.308 98.2C172.274 95.14 175.334 90.6067 177.488 84.6C179.754 78.5933 180.888 71.1133 180.888 62.16C180.888 53.2067 179.754 45.7267 177.488 39.72C175.334 33.7133 172.218 29.2367 168.138 26.29C164.171 23.23 159.468 21.7 154.028 21.7C148.701 21.7 144.054 23.23 140.088 26.29C136.121 29.2367 133.004 33.7133 130.738 39.72C128.584 45.6133 127.508 53.0367 127.508 61.99C127.508 71.0567 128.584 78.5933 130.738 84.6C133.004 90.6067 136.121 95.14 140.088 98.2C144.054 101.26 148.758 102.79 154.198 102.79ZM214.074 79.84L254.874 2.49H280.374L238.554 79.84H214.074ZM214.074 93.44V79.84L222.574 73.21H308.254V93.44H214.074ZM270.514 122V45.84H293.294V122H270.514Z"
              fill="#4E6BFF"
            />
          </svg>
          <h2 className="text-3xl font-bold mb-4">
            Sorry, the page can’t be found
          </h2>
          <p className="text-lg mb-8">
            The page you were looking for appears to have been moved, deleted or
            does not exist.
          </p>
          <div className="mx-auto">
            <button className="form-cancel py-3">
              <Link href="/user/dashboard">Back to Dashboard</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;


