import { INSTRUCTOR_IMAGES } from "@/constants";
import Image from "next/image";

interface InstructorProps {
  backgroundImage: string;
  name: string;
  bio: string;
  studentsCount: string;
}

const InstructorCard = ({
  backgroundImage,
  name,
  bio,
  studentsCount,
}: InstructorProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1000px] max-w-[1100px] bg-cover bg-no-repeat lg:rounded-3xl 2xl:rounded-5xl`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-blue-50 p-2">
            <Image
              src="/teacher.svg"
              alt="instructor"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{name}</h4>
            <p className="regular-14 text-white">{bio}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {INSTRUCTOR_IMAGES.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="instructor"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{studentsCount}</p>
        </div>
      </div>
    </div>
  );
};

const Instructors = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <InstructorCard
          backgroundImage="/course-1.svg"
          name="John Doe"
          bio="Certified Financial Planner with 10+ years of experience."
          studentsCount="1000+ Students"
        />
        <InstructorCard
          backgroundImage="/course-2.svg"
          name="Jane Smith"
          bio="Expert in Investment Strategies and Wealth Management."
          studentsCount="800+ Students"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[724px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Overwhelmed</strong> And Not Sure Where to Start?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Whether you're new to financial planning or looking to refine your
            strategies, our expert instructors are here to guide you every step
            of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
