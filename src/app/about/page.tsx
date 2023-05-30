import PageShell from "@/components/PageShell";
import Link from "next/link";
import { FC } from "react";

const page: FC = () => {
  return (
    <div className="flex justify-center pt-4">
      <PageShell title={"About"} items={"center"}>
        <div className="w-1/2 text-center">
          <p>This is the about page.</p>
          <p>
            You can check out the source code of this project on my github page
            or visit my other projects.
          </p>
          <p>
            Check out my{" "}
            <Link
              className="text-sky-500 hover:underline"
              href="https://github.com/JnsWnk"
            >
              {" "}
              Github!
            </Link>
          </p>
        </div>
      </PageShell>
    </div>
  );
};

export default page;
