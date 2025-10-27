import {
  BsFillChatLeftDotsFill,
  BsLightbulbFill,
  BsQuestionCircleFill,
} from "react-icons/bs";
import Button from "./Button";
import Nav from "./Nav";
import Footer from "./Footer";

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
          teachers, ask profound questions, and receive insightful answers, all
          centered around biblical teachings.
        </p>
        <div class="w-full flex flex-col justify-between gap-4 items-center">
          <a href="" class="w-full">
            <Button width="w-full" bgColor="bg-gray-900">
              Ask a Question
            </Button>
          </a>
          <a href="" class="w-full">
            <Button width="w-full" bgColor="bg-[#F59E0B]">
              Browse Questions
            </Button>
          </a>
        </div>
      </div>
      {/* Explore Section */}
      <div class="py-12">
        <div class="w-[90%] flex flex-col gap-10 mx-auto py-8 px-8 rounded-3xl bg-[#E8F6FF]">
          <div class="flex flex-col justify-between gap-5">
            <h2 class="text-gray-800 text-2xl font-bold">How It Works</h2>
            <p class="text-gray-600">
              Discover how simple it is to engage with Bible teachings and
              sermons on our platform. Follow these steps to ask questions and
              receive insightful answers from our teachers
            </p>
          </div>
          <div class="bg-white rounded-2xl">
            <div class="flex items-center justify-start py-2.5 px-2.5 gap-4">
              <BsQuestionCircleFill color="#bacdda" size="1.2rem" />
              <div class="w-2/3">
                <h5 class="text-sm font-medium">Ask Your Question</h5>
                <p class="text-sm text-gray-600 font-light pt-2">
                  Submit your queries about Bible teachings or sermons easily
                  through our intutive interface.
                </p>
              </div>
            </div>
            <div class="flex items-center justify-start py-2.5 px-2.5 gap-4 border-t border-b border-[#bacdda]">
              <BsFillChatLeftDotsFill color="#bacdda" size="1.2rem" />
              <div class="w-2/3">
                <h5 class="text-sm font-medium">Ask Your Question</h5>
                <p class="text-sm text-gray-600 font-light pt-2">
                  Submit your queries about Bible teachings or sermons easily
                  through our intutive interface.
                </p>
              </div>
            </div>
            <div class="flex items-center justify-start py-2.5 px-2.5 gap-4">
              <BsLightbulbFill color="#bacdda" size="1.2rem" />
              <div class="w-2/3">
                <h5 class="text-sm font-medium">Ask Your Question</h5>
                <p class="text-sm text-gray-600 font-light pt-2">
                  Submit your queries about Bible teachings or sermons easily
                  through our intutive interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-12 flex flex-col justify-between gap-5 px-8">
        <h2 class="w-2/3 mx-auto text-gray-800 text-2xl font-bold text-center">
          Deepen Your Faith <br />
          <span class="text-[#f59f0b9d]">Explore Sermons & Teachings</span>
        </h2>
        <p class="text-sm text-gray-600 text-center">
          Connect with our community, ask questions about Bible teachings, and
          receive insightful answers from our dedicated teachers. Start your
          journey of spiritual growth today.
        </p>
        <a href="" class="w-2/3 mx-auto text-center">
          <Button width="w-full" bgColor="bg-gray-900" color='text-white'>
            Sign Up Now
          </Button>
        </a>
        <img src="bibleOpen.jpg" class='h-[200px] object-center rounded-2xl' alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
