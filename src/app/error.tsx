"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps): JSX.Element => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className=" w-full max-w-[50%] flex flex-col justify-center items-center  gap-y-10">
        <p className="para text-h3 text-center">{error?.message}</p>
        <button
          className=" border-primary border px-5 py-2 text-primary text-lg "
          onClick={() => reset()}>
          Try again
        </button>
      </div>
    </section>
  );
};

export default Error;
