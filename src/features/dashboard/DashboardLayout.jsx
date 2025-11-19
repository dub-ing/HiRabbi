import { sermons } from "../../data/sermons";
import InfoTitle from "../../ui/InfoTitle";
import Title from "../../ui/Title";

function DashboardLayout() {
  const questions = sermons.flatMap(sermon => sermon.questions ? sermon.questions : [])
  

  return (
    <>
      <div class="w-full flex items-center justify-between px-3 gap-4">
        <div class="py-6 px-6 border border-[#eec683] rounded-lg">
          <h3 class="text-lg text-[#0D121C] font-medium">Pending Questions</h3>
          <span class="text-2xl text-[#0D121C] font-bold">12</span>
        </div>
        <div class="py-6 px-6 border border-[#eec683] rounded-lg">
          <h3 class="text-lg text-[#0D121C] font-medium">Recently Answered</h3>
          <span class="text-2xl text-[#0D121C] font-bold">25</span>
        </div>
      </div>
      <div class="px-3 mt-4">
        <div class="py-6 px-6 border border-[#eec683] rounded-lg">
          <h3 class="text-lg text-[#0D121C] font-medium">Sermons</h3>
          <span class="text-2xl text-[#0D121C] font-bold">6</span>
        </div>
      </div>
      <div class="px-3 py-5">
        <div class="py-3">
          <Title color="gray-900" size="2xl" font="bold">
            Recent Questions
          </Title>
        </div>
        <div class='w-full h-[40vh] flex flex-col items-start justify-between gap-4 overflow-y-scroll'>
          {questions.map((question) => (
            <div key={question.id} class="py-2 flex items-center justify-start gap-4">
              <img
                src={question.imgUrl}
                alt="a girl"
                class="w-14 h-14 rounded-full"
              />
              <InfoTitle subtitle={question.name} text={question.question} />
            </div>
          ))}
        </div>
          <p>more</p>
      </div>
    </>
  );
}

export default DashboardLayout;
