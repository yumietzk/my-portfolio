import ProfileImage from "../components/profile-image";
import Skills from "../components/skills";
import Work from "../components/work";

function about() {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1 mr-2">
          <h1 className="text-4xl font-semibold mb-5">
            I&apos;m Yumie. I&apos;m originally from Japan, and currently live
            in Toronto.
          </h1>
          <Skills />
        </div>

        <div className="w-56">
          <ProfileImage />
        </div>
      </div>

      <div className="mt-14 text-text-color-2 flex">
        <div className="space-y-5 mr-4">
          <p>
            After working as a system engineer for nearly 4 years which I landed
            from a different background called international politics I majored
            in at university, I realized my curiosity and interest towards
            programming was growing and decided to fully commit my time to learn
            programming.
          </p>
          <p>
            I taught myself programming from scratch using some awesome Udemy
            courses, YouTube videos and tons of googling. I fell in love with
            programming quickly and I knew pursuing this passion was the right
            choice. I had ZERO knowledge about HTML and CSS, so I remember how
            excited I was when I first rendered &quot;Hello World!&quot; using
            HTML and designed with CSS.
          </p>
          <p>
            I&apos;m a hardworker, ambitious and coorporative. I always strive
            to learn more, improve my skills and try to communicate well with
            people to make things better.
          </p>
          <p>
            Please take a look at my personal projects and get in touch with me.
            I am looking forward to exploring new opportunities!
          </p>
        </div>

        <Work />
      </div>
    </div>
  );
}

export default about;
