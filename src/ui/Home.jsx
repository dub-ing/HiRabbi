import Nav from "./Nav"

function Home() {
    return (
      <>
        <Nav />
        <div class="bg-[url(/heroImage.png)] bg-cover bg-center flex flex-col items-start justify-evenly gap-6 text-white py-16 px-4">
          <h3 class="text-3xl font-bold leading-10 w-[80%] text-start">
            Deepen Your Understanding of God's Word
          </h3>
          <p class="text-sm font-normal leading-6 w-[80%]">
            Engage with sermons like never before. Ask questions, receive
            faith-based answers, from dedicated teachers and grow together.
          </p>
          <p class="text-sm font-normal leading-6 w-[80%]">
            Our platform fosters a vibrant community where users can engage with
            teachers, ask profound questions, and receive insightful answers,
            all centered around biblical teachings.
          </p>
          <div class="w-full flex flex-col justify-between gap-4 items-center">
            <a href="" class="w-full">
              <button class="w-full bg-gray-900 py-3 rounded-md text-sm font-medium">
                Ask a Question
              </button>
            </a>
            <a href="" class="w-full">
              <button class="w-full bg-[#F59E0B] py-3 rounded-md text-sm font-medium">
                Browse Questions
              </button>
            </a>
          </div>
        </div>
      </>
    );
}

export default Home
