export default function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Resume/CV Parser Features
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our resume/CV parser offers a range of features to streamline your
              hiring process and boost your productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <BoldIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Automation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Streamline your hiring workflows with our powerful
                    automation tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <BriefcaseIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Collaboration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Collaborate seamlessly with your team on the hiring process.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <RocketIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Scalability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Scale your hiring process with our reliable and flexible
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <BarChartIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Gain valuable insights with our powerful analytics tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <LockIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Security</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Keep your data safe with our robust security measures.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 space-y-4">
                <CogIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-semibold">Customization</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tailor our platform to fit your unique hiring needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BoldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CogIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
