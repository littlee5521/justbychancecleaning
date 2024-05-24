import { poppins } from "./fonts";

export default function SubHeader(content: string, classnames: string) {
  return (
    <h1
      className={`${poppins.className} ${classnames} px-5 mt-12 mb-8 text-4xl font-bold`}
    >
      {content}
    </h1>
  );
}
