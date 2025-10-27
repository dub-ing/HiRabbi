import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import Button from "./Button";

function Footer() {
  return (
    <div class="py-12 px-8 bg-black flex flex-col justify-between items-start gap-10">
      <div class="flex flex-col justify-between items-center gap-4">
        <h2 class="w- mx-auto text-white text-2xl font-bold text-center">
          Ask Questions, Find Answers, Transform Sermon Experience.
        </h2>
        <p class="text-sm text-gray-200 text-center">
          Join our community and start engaging with sermons in a whole new way.
        </p>
        <a href="" class="w-2/3 mx-auto text-center">
          <Button width="w-full" bgColor="bg-[#F59E0B]" color="text-white">
            Sign Up Now
          </Button>
        </a>
        <div class='w-2/4 flex justify-evenly'>
          <BsInstagram color="#fff" size='1.3rem' />
          <BsTwitterX color="#fff" size='1.3rem' />
          <BsFacebook color="#fff" size='1.3rem' />
          <BsYoutube color="#fff" size='1.5rem' />
        </div>
      </div>
      <div class='w-full flex justify-between flex-wrap'>
        <div class='flex flex-col justify-between gap-3 items-start'>
            <h3 class='text-sm text-gray-600 font-medium'>About</h3>
            <ul class='text-xs text-gray-100 font-normal flex flex-col gap-1.5'>
                <li><a href="">Our Mission</a></li>
                <li><a href="">Our Team</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div class='flex flex-col justify-between gap-3 items-start'>
            <h3 class='text-sm text-gray-600 font-medium'>Resource</h3>
            <ul class='text-xs text-gray-100 font-normal flex flex-col gap-1.5'>
                <li><a href="">Bible Studies</a></li>
                <li><a href="">Sermon Archive</a></li>
                <li><a href="">FAQs</a></li>
            </ul>
        </div>
        <div class='flex flex-col justify-between gap-3 items-start'>
            <h3 class='text-sm text-gray-600 font-medium'>Support</h3>
            <ul class='text-xs text-gray-100 font-normal flex flex-col gap-1.5'>
                <li><a href="">Help Center</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
            </ul>
        </div>
      </div>
      <div class='border-t border-white text-center '>
        <span class='text-xs text-gray-600'>COPYRIGHT © 2025 HIRABBI ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  );
}

export default Footer;
