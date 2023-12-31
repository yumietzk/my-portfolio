import SnsLinks from "../components/sns-links";

export default function Home() {
  return (
    <div className="md:w-8/12 absolute top-1/2 -translate-y-2/4">
      <h1 className="text-5xl font-semibold tracking-wide">
        Software Engineer, sushi lover, soccer fan.
      </h1>
      <p className="mt-5 text-text-color-2">
        I&apos;m Yumie, a software engineer based in Toronto, Canada. I like to
        build products that deliver better user experiences through clean and
        responsive designs and tackle challenges.
      </p>
      <div className="mt-5">
        <SnsLinks />
      </div>
    </div>
  );
}
